<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Blog.php';
require_once __DIR__ . '/../models/Category.php';
require_once __DIR__ . '/../controllers/UploadController.php';
require_once __DIR__ . '/../helpers/SlugHelper.php';
require_once __DIR__ . '/../helpers/ResponseHelper.php';

function normalizeBlogMetadata($value): array
{
    if (!is_array($value)) {
        return [];
    }

    $textFields = [
        'subtitle', 'content_type', 'featured_image_alt', 'featured_image_caption',
        'image_credit', 'social_share_image', 'subcategory', 'author_designation',
        'author_bio', 'medical_reviewer', 'reviewer_designation', 'review_date',
        'reading_time', 'publish_at', 'visibility', 'focus_keyword', 'meta_robots',
        'schema_type', 'breadcrumb_title', 'og_title', 'og_description', 'og_image',
        'twitter_title', 'twitter_description', 'twitter_image', 'related_locations',
        'cta_heading', 'cta_description', 'cta_button_text', 'cta_url', 'internal_notes',
    ];
    $normalized = [];
    foreach ($textFields as $field) {
        if (array_key_exists($field, $value)) {
            $normalized[$field] = sanitizeText((string)$value[$field]);
        }
    }

    $enumValues = [
        'content_type' => ['Blog', 'Guide', 'News', 'Announcement', 'FAQ', 'Case Study', 'Other'],
        'visibility' => ['public', 'private'],
        'meta_robots' => ['index,follow', 'noindex,follow', 'index,nofollow', 'noindex,nofollow'],
        'schema_type' => ['BlogPosting', 'Article', 'NewsArticle', 'FAQPage'],
    ];
    foreach ($enumValues as $field => $allowed) {
        if (isset($normalized[$field]) && !in_array($normalized[$field], $allowed, true)) {
            $normalized[$field] = $allowed[0];
        }
    }

    foreach (['featured', 'cta_enabled', 'faq_enabled'] as $field) {
        $normalized[$field] = filter_var($value[$field] ?? false, FILTER_VALIDATE_BOOLEAN);
    }

    foreach (['secondary_keywords', 'related_blog_ids', 'related_services'] as $field) {
        $items = $value[$field] ?? [];
        if (!is_array($items)) {
            $items = $field === 'secondary_keywords' || $field === 'related_services'
                ? explode(',', (string)$items)
                : [];
        }
        $normalized[$field] = array_values(array_filter(array_map(
            static fn($item) => sanitizeText((string)$item),
            $items
        ), static fn(string $item): bool => $item !== ''));
    }
    $normalized['related_blog_ids'] = array_values(array_unique(array_filter(
        array_map('intval', $normalized['related_blog_ids']),
        static fn(int $id): bool => $id > 0
    )));

    // Manually added related-blog links: [{title, url}] (http(s) or site-relative only)
    $normalized['related_links'] = [];
    if (is_array($value['related_links'] ?? null)) {
        foreach (array_slice($value['related_links'], 0, 20) as $link) {
            if (!is_array($link)) {
                continue;
            }
            $url = trim((string)($link['url'] ?? ''));
            $title = sanitizeText((string)($link['title'] ?? ''));
            if ($url === '' || !blogFieldUrlIsValid($url)) {
                continue;
            }
            $normalized['related_links'][] = [
                'title' => $title !== '' ? mb_substr($title, 0, 200) : $url,
                'url' => $url,
            ];
        }
    }

    $faqs = $value['faqs'] ?? [];
    $normalized['faqs'] = [];
    if (is_array($faqs)) {
        foreach (array_slice($faqs, 0, 30) as $faq) {
            if (!is_array($faq)) {
                continue;
            }
            $question = sanitizeText((string)($faq['question'] ?? ''));
            $answer = sanitizeText((string)($faq['answer'] ?? ''));
            if ($question !== '' && $answer !== '') {
                $normalized['faqs'][] = ['question' => $question, 'answer' => $answer];
            }
        }
    }

    return $normalized;
}

function blogFieldUrlIsValid(string $url): bool
{
    $url = trim($url);
    if ($url === '') {
        return true;
    }
    if (preg_match('/[\x00-\x20]/', $url) || str_starts_with($url, '//')) {
        return false;
    }
    if (str_starts_with($url, '/')) {
        return true;
    }
    $parts = parse_url($url);
    return is_array($parts) && in_array(strtolower((string)($parts['scheme'] ?? '')), ['http', 'https'], true)
        && !empty($parts['host']);
}

function normalizeBlogPublishDate(string $value): ?string
{
    $value = trim(str_replace('T', ' ', $value));
    if ($value === '') {
        return null;
    }
    if (preg_match('/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/', $value)) {
        $value .= ':00';
    }
    $date = DateTime::createFromFormat('!Y-m-d H:i:s', $value);
    $errors = DateTime::getLastErrors();
    if ($date === false || ($errors !== false && ($errors['warning_count'] > 0 || $errors['error_count'] > 0))) {
        return null;
    }
    return $date->format('Y-m-d H:i:s');
}

class BlogController
{
    public static function listPublished(int $limit = 6, int $offset = 0): array
    {
        return Blog::published($limit, $offset);
    }

    public static function getBySlug(string $slug): ?array
    {
        return Blog::findBySlug($slug);
    }

    public static function getRelated(int $categoryId, int $excludeId, int $limit = 4): array
    {
        return Blog::related($categoryId, $excludeId, $limit);
    }

    public static function dashboardSummary(): array
    {
        return [
            'total_blogs' => Blog::countByStatus(),
            'published_blogs' => Blog::countByStatus('published'),
            'draft_blogs' => Blog::countByStatus('draft'),
            'archived_blogs' => Blog::countByStatus('archived'),
            'total_categories' => Category::count(),
        ];
    }

    public static function create(array $input, ?array $uploadedFile = null): array
    {
        $title = sanitizeText((string)($input['title'] ?? ''));
        $slug = trim((string)($input['slug'] ?? ''));
        $excerpt = sanitizeText((string)($input['excerpt'] ?? ''));
        $content = (string)($input['content'] ?? '');
        $author = sanitizeText((string)($input['author'] ?? ''));
        $tags = sanitizeText((string)($input['tags'] ?? ''));
        $metaTitle = sanitizeText((string)($input['meta_title'] ?? ''));
        $metaDescription = sanitizeText((string)($input['meta_description'] ?? ''));
        $canonicalUrl = sanitizeText((string)($input['canonical_url'] ?? ''));
        $requestedStatus = (string)($input['status'] ?? 'draft');
        $status = in_array($requestedStatus, ['draft', 'pending_review', 'scheduled', 'published', 'archived'], true)
            ? $requestedStatus
            : 'draft';
        $metadata = normalizeBlogMetadata($input['metadata'] ?? []);
        $metadata['publish_at'] = trim((string)($metadata['publish_at'] ?? ''));

        if ($title === '') {
            return ['success' => false, 'message' => 'Blog title is required.'];
        }

        if ($content === '') {
            return ['success' => false, 'message' => 'Blog content is required.'];
        }

        if ($slug === '') {
            $slug = slugify($title);
        } else {
            $slug = slugify($slug);
        }

        if ($slug === '') {
            return ['success' => false, 'message' => 'Blog slug is invalid.'];
        }

        if (Blog::existsSlug($slug)) {
            return ['success' => false, 'message' => 'A blog with this slug already exists.'];
        }
        foreach ([
            'canonical_url' => $canonicalUrl,
            'CTA URL' => (string)($metadata['cta_url'] ?? ''),
            'social share image URL' => (string)($metadata['social_share_image'] ?? ''),
            'Open Graph image URL' => (string)($metadata['og_image'] ?? ''),
            'Twitter image URL' => (string)($metadata['twitter_image'] ?? ''),
        ] as $field => $url) {
            if (!blogFieldUrlIsValid($url)) {
                return ['success' => false, 'message' => ucfirst($field) . ' must be a valid URL or relative path.'];
            }
        }

        $featuredImage = sanitizeText((string)($input['featured_image'] ?? ''));
        if ($uploadedFile !== null && ($uploadedFile['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
            $uploadResult = UploadController::uploadBlogImage($uploadedFile);
            if (!$uploadResult['success']) {
                return ['success' => false, 'message' => $uploadResult['message']];
            }
            $featuredImage = $uploadResult['path'];
        }

        $categoryId = null;
        if (isset($input['category_id']) && $input['category_id'] !== '') {
            $categoryId = (int)$input['category_id'];
        }

        if (in_array($status, ['published', 'scheduled'], true)
            && ($categoryId === null || $featuredImage === '' || $author === ''
                || (string)($metadata['featured_image_alt'] ?? '') === '')) {
            return ['success' => false, 'message' => 'Publishing requires a category, author, featured image, and image alt text.'];
        }

        $publishedAt = null;
        if ($status === 'published' || $status === 'scheduled') {
            $publishValue = $metadata['publish_at'] ?: (string)($input['published_at'] ?? '');
            $publishedAt = normalizeBlogPublishDate($publishValue);
            if ($publishValue !== '' && $publishedAt === null) {
                return ['success' => false, 'message' => 'Publish date and time are invalid.'];
            }
            $publishedAt ??= date('Y-m-d H:i:s');
            if ($status === 'scheduled' && strtotime($publishedAt) <= time()) {
                return ['success' => false, 'message' => 'Scheduled publish time must be in the future.'];
            }
            if ($status === 'published' && strtotime($publishedAt) > time()) {
                $status = 'scheduled';
            }
        }

        $id = Blog::create([
            'title' => $title,
            'slug' => $slug,
            'excerpt' => $excerpt,
            'content' => safeHtml($content),
            'featured_image' => $featuredImage,
            'author' => $author,
            'category_id' => $categoryId,
            'tags' => $tags,
            'meta_title' => $metaTitle !== '' ? $metaTitle : $title,
            'meta_description' => $metaDescription,
            'canonical_url' => normalizeBlogCanonicalUrl($canonicalUrl, $slug),
            'status' => $status,
            'published_at' => $publishedAt,
            'metadata' => json_encode($metadata, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
        ]);

        return ['success' => true, 'message' => 'Blog created successfully.', 'id' => $id];
    }

    public static function update(int $id, array $input, ?array $uploadedFile = null): array
    {
        $blog = Blog::findById($id);
        if ($blog === null) {
            return ['success' => false, 'message' => 'Blog not found.'];
        }

        $title = sanitizeText((string)($input['title'] ?? ''));
        $slug = trim((string)($input['slug'] ?? ''));
        $excerpt = sanitizeText((string)($input['excerpt'] ?? ''));
        $content = (string)($input['content'] ?? '');
        $author = sanitizeText((string)($input['author'] ?? ''));
        $tags = sanitizeText((string)($input['tags'] ?? ''));
        $metaTitle = sanitizeText((string)($input['meta_title'] ?? ''));
        $metaDescription = sanitizeText((string)($input['meta_description'] ?? ''));
        $canonicalUrl = sanitizeText((string)($input['canonical_url'] ?? ''));
        $requestedStatus = (string)($input['status'] ?? 'draft');
        $status = in_array($requestedStatus, ['draft', 'pending_review', 'scheduled', 'published', 'archived'], true)
            ? $requestedStatus
            : 'draft';
        $metadata = normalizeBlogMetadata($input['metadata'] ?? []);
        $metadata['publish_at'] = trim((string)($metadata['publish_at'] ?? ''));

        if ($title === '') {
            return ['success' => false, 'message' => 'Blog title is required.'];
        }

        if ($content === '') {
            return ['success' => false, 'message' => 'Blog content is required.'];
        }

        if ($slug === '') {
            $slug = slugify($title);
        } else {
            $slug = slugify($slug);
        }

        if ($slug === '') {
            return ['success' => false, 'message' => 'Blog slug is invalid.'];
        }

        if (Blog::existsSlug($slug, $id)) {
            return ['success' => false, 'message' => 'A blog with this slug already exists.'];
        }
        foreach ([
            'canonical_url' => $canonicalUrl,
            'CTA URL' => (string)($metadata['cta_url'] ?? ''),
            'social share image URL' => (string)($metadata['social_share_image'] ?? ''),
            'Open Graph image URL' => (string)($metadata['og_image'] ?? ''),
            'Twitter image URL' => (string)($metadata['twitter_image'] ?? ''),
        ] as $field => $url) {
            if (!blogFieldUrlIsValid($url)) {
                return ['success' => false, 'message' => ucfirst($field) . ' must be a valid URL or relative path.'];
            }
        }

        $featuredImage = array_key_exists('featured_image', $input)
            ? sanitizeText((string)$input['featured_image'])
            : ($blog['featured_image'] ?? '');
        if ($uploadedFile !== null && ($uploadedFile['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
            $uploadResult = UploadController::uploadBlogImage($uploadedFile);
            if (!$uploadResult['success']) {
                return ['success' => false, 'message' => $uploadResult['message']];
            }
            $featuredImage = $uploadResult['path'];
        }

        $categoryId = null;
        if (isset($input['category_id']) && $input['category_id'] !== '') {
            $categoryId = (int)$input['category_id'];
        }

        $existingMetadata = json_decode((string)($blog['metadata'] ?? ''), true);
        $existingMetadata = is_array($existingMetadata) ? $existingMetadata : [];
        $imageChanged = $featuredImage !== (string)($blog['featured_image'] ?? '');
        $requiresPublishDetails = in_array($status, ['published', 'scheduled'], true)
            && $blog['status'] !== 'published';
        if ($requiresPublishDetails
            && (($categoryId === null && empty($blog['category_id']))
                || $author === ''
                || $featuredImage === ''
                || ($imageChanged && (string)($metadata['featured_image_alt'] ?? '') === '')
                || ($featuredImage !== '' && $imageChanged && (string)($metadata['featured_image_alt'] ?? '') === ''))) {
            return ['success' => false, 'message' => 'Publishing requires a category, author, featured image, and image alt text for a newly selected image.'];
        }

        $publishedAt = $blog['published_at'] ?? null;
        if ($status === 'published' || $status === 'scheduled') {
            $publishValue = $metadata['publish_at'] ?: (string)($input['published_at'] ?? $publishedAt ?? '');
            if ($publishValue !== '') {
                $publishedAt = normalizeBlogPublishDate($publishValue);
                if ($publishedAt === null) {
                    return ['success' => false, 'message' => 'Publish date and time are invalid.'];
                }
            } elseif (empty($publishedAt)) {
                $publishedAt = date('Y-m-d H:i:s');
            }
            if ($status === 'scheduled' && strtotime((string)$publishedAt) <= time()) {
                return ['success' => false, 'message' => 'Scheduled publish time must be in the future.'];
            }
            if ($status === 'published' && strtotime((string)$publishedAt) > time()) {
                $status = 'scheduled';
            }
        } elseif ($status === 'draft') {
            $publishedAt = null;
        }

        if (!isset($input['metadata']) && is_array($existingMetadata)) {
            $metadata = $existingMetadata;
        }
        $updated = Blog::update($id, [
            'title' => $title,
            'slug' => $slug,
            'excerpt' => $excerpt,
            'content' => safeHtml($content),
            'featured_image' => $featuredImage,
            'author' => $author,
            'category_id' => $categoryId,
            'tags' => $tags,
            'meta_title' => $metaTitle !== '' ? $metaTitle : $title,
            'meta_description' => $metaDescription,
            'canonical_url' => normalizeBlogCanonicalUrl($canonicalUrl, $slug),
            'status' => $status,
            'published_at' => $publishedAt,
            'metadata' => json_encode($metadata, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
        ]);

        if (!$updated) {
            return ['success' => false, 'message' => 'The blog could not be updated.'];
        }

        return ['success' => true, 'message' => 'Blog updated successfully.'];
    }
}
