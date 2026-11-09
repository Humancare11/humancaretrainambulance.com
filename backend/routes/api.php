<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../controllers/BlogController.php';
require_once __DIR__ . '/../helpers/ResponseHelper.php';

function publicBlogData(array $blog): array
{
    $metadata = json_decode((string)($blog['metadata'] ?? ''), true);
    $metadata = is_array($metadata) ? $metadata : [];
    $publicMetadata = [];
    foreach ([
        'subtitle', 'content_type', 'featured_image_alt', 'featured_image_caption',
        'image_credit', 'social_share_image', 'author_designation', 'author_bio',
        'medical_reviewer', 'reviewer_designation', 'review_date', 'reading_time', 'subcategory',
        'featured', 'focus_keyword', 'secondary_keywords', 'meta_robots', 'schema_type',
        'breadcrumb_title', 'og_title', 'og_description', 'og_image', 'twitter_title',
        'twitter_description', 'twitter_image', 'related_blog_ids', 'related_links', 'related_services', 'faq_enabled',
        'related_locations', 'cta_enabled', 'cta_heading', 'cta_description',
        'cta_button_text', 'cta_url', 'faqs',
    ] as $key) {
        if (array_key_exists($key, $metadata)) {
            $publicMetadata[$key] = $metadata[$key];
        }
    }
    return [
        'id' => (int)$blog['id'],
        'title' => $blog['title'],
        'slug' => $blog['slug'],
        'excerpt' => $blog['excerpt'],
        'content' => safeHtml($blog['content']),
        'featured_image' => $blog['featured_image'],
        'author' => $blog['author'],
        'category' => [
            'id' => isset($blog['category_id']) ? (int)$blog['category_id'] : null,
            'name' => $blog['category_name'] ?? null,
        ],
        'tags' => $blog['tags'],
        'meta_title' => $blog['meta_title'],
        'meta_description' => $blog['meta_description'],
        'canonical_url' => normalizeBlogCanonicalUrl($blog['canonical_url'] ?? null, $blog['slug']),
        'published_at' => $blog['published_at'],
        'updated_at' => $blog['updated_at'],
        'metadata' => $publicMetadata,
    ];
}

function routeApiRequest(): void
{
    $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
    $requestUri = $_SERVER['REQUEST_URI'] ?? $_SERVER['REDIRECT_URL'] ?? '/';
    $path = rawurldecode((string)parse_url($requestUri, PHP_URL_PATH));

    if (str_starts_with($path, '/backend/api/admin/')) {
        require_once __DIR__ . '/admin-api.php';
        return;
    }

    if ($method === 'GET' && $path === '/backend/api/blogs') {
        $page = max(1, (int)($_GET['page'] ?? 1));
        $perPage = min(50, max(1, (int)($_GET['per_page'] ?? 50)));
        $offset = ($page - 1) * $perPage;
        $posts = BlogController::listPublished($perPage, $offset);
        $total = Blog::countPublished();
        jsonResponse([
            'success' => true,
            'data' => array_map('publicBlogData', $posts),
            'pagination' => [
                'page' => $page,
                'per_page' => $perPage,
                'total' => $total,
                'total_pages' => (int)ceil($total / $perPage),
            ],
        ]);
    }

    if ($method === 'GET' && preg_match('#^/backend/api/blogs/([^/]+)$#', $path, $matches)) {
        $slug = $matches[1];
        $post = BlogController::getBySlug($slug);
        $metadata = $post === null ? [] : json_decode((string)($post['metadata'] ?? ''), true);
        if ($post === null || $post['status'] !== 'published'
            || (is_array($metadata) && ($metadata['visibility'] ?? 'public') === 'private')
            || (!empty($post['published_at']) && strtotime((string)$post['published_at']) > time())) {
            jsonResponse(['success' => false, 'message' => 'Blog not found.'], 404);
        }
        $related = [];
        if (is_array($metadata) && !empty($metadata['related_blog_ids'])) {
            $related = Blog::relatedByIds($metadata['related_blog_ids'], (int)$post['id']);
        }
        if ($related === [] && !empty($post['category_id'])) {
            $related = BlogController::getRelated((int)$post['category_id'], (int)$post['id']);
        }
        jsonResponse([
            'success' => true,
            'data' => publicBlogData($post),
            'related' => array_map('publicBlogData', $related),
        ]);
    }

    if ($method === 'GET' && $path === '/backend/api/categories') {
        $categories = Category::all();
        $data = array_map(static function (array $category): array {
            return [
                'id' => (int)$category['id'],
                'name' => $category['name'],
                'slug' => $category['slug'],
                'description' => $category['description'],
            ];
        }, $categories);
        jsonResponse(['success' => true, 'data' => $data]);
    }

    jsonResponse(['success' => false, 'message' => 'Route not found.'], 404);
}

if (basename($_SERVER['SCRIPT_FILENAME'] ?? '') === 'api.php') {
    try {
        routeApiRequest();
    } catch (Throwable $exception) {
        error_log('Public blog API error: ' . $exception->getMessage());
        jsonResponse(['success' => false, 'message' => 'The blog service is temporarily unavailable.'], 503);
    }
}
