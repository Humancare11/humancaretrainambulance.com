<?php

function jsonResponse(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

function redirect(string $path): void
{
    header('Location: ' . $path, true, 302);
    exit;
}

function sanitizeText(string $value): string
{
    return trim(strip_tags($value));
}

function safeHtml(string $value): string
{
    if (!class_exists(DOMDocument::class)) {
        throw new RuntimeException('The PHP DOM extension is required to sanitize blog content.');
    }

    $document = new DOMDocument('1.0', 'UTF-8');
    $previousErrorMode = libxml_use_internal_errors(true);
    $document->loadHTML(
        '<?xml encoding="UTF-8"><div id="blog-content">' . $value . '</div>',
        LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
    );
    libxml_clear_errors();
    libxml_use_internal_errors($previousErrorMode);

    $root = $document->getElementById('blog-content');
    if ($root === null) {
        throw new RuntimeException('Blog content could not be parsed for sanitization.');
    }

    $safe = '';
    foreach ($root->childNodes as $child) {
        $safe .= sanitizeHtmlNode($child);
    }

    return $safe;
}

function sanitizeHtmlNode(DOMNode $node): string
{
    if ($node instanceof DOMText) {
        return htmlspecialchars($node->textContent, ENT_NOQUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }
    if (!$node instanceof DOMElement) {
        return '';
    }

    $tag = strtolower($node->tagName);
    if (in_array($tag, ['script', 'style', 'iframe', 'object', 'embed', 'svg', 'math', 'form', 'input'], true)) {
        return '';
    }

    $allowedTags = [
        'a', 'blockquote', 'br', 'code', 'div', 'em', 'h1', 'h2', 'h3', 'h4', 'h5',
        'h6', 'hr', 'i', 'img', 'li', 'ol', 'p', 'pre', 'span', 'strong', 'b', 'ul',
        'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
    ];
    $children = '';
    foreach ($node->childNodes as $child) {
        $children .= sanitizeHtmlNode($child);
    }

    if (!in_array($tag, $allowedTags, true)) {
        return $children;
    }

    $allowedAttributes = [
        'a' => ['href', 'title'],
        'img' => ['src', 'alt', 'title', 'width', 'height'],
        'td' => ['colspan', 'rowspan'],
        'th' => ['colspan', 'rowspan', 'scope'],
    ];
    $attributes = '';
    foreach ($allowedAttributes[$tag] ?? [] as $attribute) {
        if (!$node->hasAttribute($attribute)) {
            continue;
        }
        $value = trim($node->getAttribute($attribute));
        if (($tag === 'a' && $attribute === 'href') || ($tag === 'img' && $attribute === 'src')) {
            if (!safeHtmlUrl($value)) {
                continue;
            }
        }
        if (in_array($attribute, ['width', 'height', 'colspan', 'rowspan'], true)
            && !preg_match('/^\d{1,4}$/', $value)) {
            continue;
        }
        $attributes .= ' ' . $attribute . '="' . htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . '"';
    }

    if (in_array($tag, ['br', 'hr', 'img'], true)) {
        if ($tag === 'img' && !$node->hasAttribute('src')) {
            return '';
        }
        return '<' . $tag . $attributes . '>';
    }

    return '<' . $tag . $attributes . '>' . $children . '</' . $tag . '>';
}

function safeHtmlUrl(string $value): bool
{
    if ($value === '' || preg_match('/[\x00-\x20]/', $value)) {
        return false;
    }
    if (str_starts_with($value, '//') || str_starts_with($value, '\\\\')) {
        return false;
    }
    if (preg_match('/^([a-z][a-z0-9+.-]*):/i', $value, $matches)) {
        return in_array(strtolower($matches[1]), ['http', 'https', 'mailto', 'tel'], true);
    }
    return true;
}

function normalizeBlogCanonicalUrl(?string $canonical, string $slug): string
{
    $canonical = trim((string)$canonical);
    if ($canonical === '') {
        return '/blogs/' . $slug;
    }

    $parts = parse_url($canonical);
    if ($parts === false || !isset($parts['path'])
        || !preg_match('#^/blog/([^/]+)/?$#', $parts['path'], $matches)) {
        return $canonical;
    }

    $path = '/blogs/' . $matches[1];
    if (!isset($parts['host'])) {
        return $path;
    }
    $origin = (isset($parts['scheme']) ? $parts['scheme'] . '://' : '//') . $parts['host'];
    if (isset($parts['port'])) {
        $origin .= ':' . $parts['port'];
    }
    return $origin . $path;
}
