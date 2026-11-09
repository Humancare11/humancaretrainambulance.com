<?php

/**
 * Admin JSON API — handles all /backend/api/admin/* endpoints.
 * Called via Apache RewriteRule from both backend/.htaccess and root .htaccess.
 */

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Admin.php';
require_once __DIR__ . '/../models/Blog.php';
require_once __DIR__ . '/../models/Category.php';
require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/BlogController.php';
require_once __DIR__ . '/../controllers/UploadController.php';
require_once __DIR__ . '/../helpers/ResponseHelper.php';
require_once __DIR__ . '/../helpers/SlugHelper.php';
require_once __DIR__ . '/../middleware/AuthMiddleware.php';

/* ── CORS (dev only) ──────────────────────────────────────── */
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = array_filter(array_map('trim', explode(',', env('CORS_ORIGINS', 'http://localhost:5173,http://localhost:3000'))));
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token, X-Requested-With');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/* ── Helpers ──────────────────────────────────────────────── */
function adminJsonResponse(array $payload, int $code = 200): void
{
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function isAdmin(): bool
{
    ensureSessionStarted();
    return !empty($_SESSION['admin_id']);
}

function requireAdmin(): void
{
    if (!isAdmin()) {
        adminJsonResponse(['success' => false, 'message' => 'Unauthorized. Please log in.'], 401);
    }
}

function currentAdminId(): int
{
    return (int)($_SESSION['admin_id'] ?? 0);
}

function jsonBody(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') {
        return [];
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function adminBlogData(array $b): array
{
    $metadata = json_decode((string)($b['metadata'] ?? ''), true);
    return [
        'id'               => (int)$b['id'],
        'title'            => $b['title'],
        'slug'             => $b['slug'],
        'excerpt'          => $b['excerpt'],
        'content'          => $b['content'],
        'featured_image'   => $b['featured_image'],
        'author'           => $b['author'],
        'category_id'      => isset($b['category_id']) ? (int)$b['category_id'] : null,
        'category_name'    => $b['category_name'] ?? null,
        'tags'             => $b['tags'],
        'meta_title'       => $b['meta_title'],
        'meta_description' => $b['meta_description'],
        'canonical_url'    => $b['canonical_url'],
        'status'           => $b['status'],
        'published_at'     => $b['published_at'],
        'created_at'       => $b['created_at'],
        'updated_at'       => $b['updated_at'],
        'metadata'         => is_array($metadata) ? $metadata : [],
    ];
}

/* ── Router ───────────────────────────────────────────────── */
$method  = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
$reqUri  = $_SERVER['REQUEST_URI'] ?? $_SERVER['REDIRECT_URL'] ?? '/';
$path    = rawurldecode((string)parse_url($reqUri, PHP_URL_PATH));

try {

    /* POST /backend/api/admin/login */
    if ($method === 'POST' && $path === '/backend/api/admin/login') {
        $input  = jsonBody() ?: $_POST;
        $result = AuthController::login($input);
        if (!$result['success']) {
            adminJsonResponse($result, 401);
        }
        ensureSessionStarted();
        $admin = Admin::findById((int)$_SESSION['admin_id']);
        adminJsonResponse([
            'success' => true,
            'message' => 'Login successful.',
            'csrf_token' => generateCsrfToken(),
            'admin'   => [
                'id'        => (int)$admin['id'],
                'email'     => $admin['email'],
                'full_name' => $admin['full_name'],
            ],
        ]);
    }

    /* POST /backend/api/admin/logout */
    if ($method === 'POST' && $path === '/backend/api/admin/logout') {
        requireApiCsrfToken();
        AuthController::logout();
        adminJsonResponse(['success' => true, 'message' => 'Logged out.']);
    }

    /* GET /backend/api/admin/me */
    if ($method === 'GET' && $path === '/backend/api/admin/me') {
        if (!isAdmin()) {
            adminJsonResponse(['success' => false, 'message' => 'Not authenticated.'], 401);
        }
        $admin = Admin::findById(currentAdminId());
        if ($admin === null) {
            adminJsonResponse(['success' => false, 'message' => 'Admin not found.'], 404);
        }
        adminJsonResponse([
            'success' => true,
            'csrf_token' => generateCsrfToken(),
            'admin'   => [
                'id'        => (int)$admin['id'],
                'email'     => $admin['email'],
                'full_name' => $admin['full_name'],
            ],
        ]);
    }

    /* GET /backend/api/admin/stats */
    if ($method === 'GET' && $path === '/backend/api/admin/stats') {
        requireAdmin();
        $pdo        = getDatabaseConnection();
        $categories = $pdo->query('SELECT COUNT(*) AS total FROM categories')->fetch();
        adminJsonResponse([
            'success' => true,
            'data'    => [
                'total'             => Blog::countAll(),
                'published'         => Blog::countAll('published'),
                'draft'             => Blog::countAll('draft'),
                'archived'          => Blog::countAll('archived'),
                'total_categories'  => (int)($categories['total'] ?? 0),
            ],
        ]);
    }

    /* GET /backend/api/admin/categories */
    if ($method === 'GET' && $path === '/backend/api/admin/categories') {
        requireAdmin();
        $cats = Category::all();
        adminJsonResponse(['success' => true, 'data' => $cats]);
    }

    /* POST /backend/api/admin/categories */
    if ($method === 'POST' && $path === '/backend/api/admin/categories') {
        requireAdmin();
        requireApiCsrfToken();
        $input = jsonBody() ?: $_POST;
        $name  = sanitizeText((string)($input['name'] ?? ''));
        $slug  = trim((string)($input['slug'] ?? ''));
        $desc  = sanitizeText((string)($input['description'] ?? ''));
        if ($name === '') {
            adminJsonResponse(['success' => false, 'message' => 'Category name is required.'], 422);
        }
        if ($slug === '') {
            $slug = slugify($name);
        } else {
            $slug = slugify($slug);
        }
        if ($slug === '') {
            adminJsonResponse(['success' => false, 'message' => 'Category name is invalid.'], 422);
        }
        if (Category::findBySlug($slug) !== null) {
            adminJsonResponse(['success' => false, 'message' => 'A category with the same slug already exists.'], 409);
        }
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare('INSERT INTO categories (name, slug, description, created_at, updated_at) VALUES (:name, :slug, :desc, NOW(), NOW())');
        $stmt->execute([':name' => $name, ':slug' => $slug, ':desc' => $desc]);
        adminJsonResponse(['success' => true, 'message' => 'Category created.', 'id' => (int)$pdo->lastInsertId()]);
    }

    /* POST /backend/api/admin/upload */
    if ($method === 'POST' && $path === '/backend/api/admin/upload') {
        requireAdmin();
        requireApiCsrfToken();
        if (empty($_FILES['image'])) {
            adminJsonResponse(['success' => false, 'message' => 'No image file received.'], 422);
        }
        $result = UploadController::uploadBlogImage($_FILES['image']);
        if (!$result['success']) {
            adminJsonResponse($result, 422);
        }
        adminJsonResponse(['success' => true, 'url' => $result['path'], 'filename' => $result['filename']]);
    }

    /* GET /backend/api/admin/blogs */
    if ($method === 'GET' && $path === '/backend/api/admin/blogs') {
        requireAdmin();
        $page    = max(1, (int)($_GET['page'] ?? 1));
        $perPage = min(100, max(1, (int)($_GET['per_page'] ?? 20)));
        $status  = $_GET['status'] ?? 'all';
        $search  = trim((string)($_GET['search'] ?? ''));
        $offset  = ($page - 1) * $perPage;

        $statusFilter = ($status === 'all' || $status === '') ? null : $status;

        $posts = Blog::allPaginated($perPage, $offset, $statusFilter, $search);
        $total = Blog::countAll($statusFilter, $search);

        adminJsonResponse([
            'success'    => true,
            'data'       => array_map('adminBlogData', $posts),
            'pagination' => [
                'page'        => $page,
                'per_page'    => $perPage,
                'total'       => $total,
                'total_pages' => (int)ceil($total / $perPage),
            ],
        ]);
    }

    /* POST /backend/api/admin/blogs/:id/publish */
    if ($method === 'POST' && preg_match('#^/backend/api/admin/blogs/(\d+)/publish$#', $path, $m)) {
        requireAdmin();
        requireApiCsrfToken();
        $id   = (int)$m[1];
        $blog = Blog::findById($id);
        if ($blog === null) {
            adminJsonResponse(['success' => false, 'message' => 'Blog not found.'], 404);
        }
        $publishedAt = $blog['published_at'] ?? null;
        if (empty($publishedAt)) {
            $publishedAt = date('Y-m-d H:i:s');
        }
        Blog::updateStatus($id, 'published', $publishedAt);
        adminJsonResponse(['success' => true, 'message' => 'Blog published.']);
    }

    /* POST /backend/api/admin/blogs/:id/unpublish */
    if ($method === 'POST' && preg_match('#^/backend/api/admin/blogs/(\d+)/unpublish$#', $path, $m)) {
        requireAdmin();
        requireApiCsrfToken();
        $id   = (int)$m[1];
        $blog = Blog::findById($id);
        if ($blog === null) {
            adminJsonResponse(['success' => false, 'message' => 'Blog not found.'], 404);
        }
        Blog::updateStatus($id, 'draft', null);
        adminJsonResponse(['success' => true, 'message' => 'Blog unpublished (moved to draft).']);
    }

    /* GET /backend/api/admin/blogs/:id */
    if ($method === 'GET' && preg_match('#^/backend/api/admin/blogs/(\d+)$#', $path, $m)) {
        requireAdmin();
        $blog = Blog::findById((int)$m[1]);
        if ($blog === null) {
            adminJsonResponse(['success' => false, 'message' => 'Blog not found.'], 404);
        }
        adminJsonResponse(['success' => true, 'data' => adminBlogData($blog)]);
    }

    /* POST /backend/api/admin/blogs — create */
    if ($method === 'POST' && $path === '/backend/api/admin/blogs') {
        requireAdmin();
        requireApiCsrfToken();
        $input = $_POST ?: jsonBody();

        // Handle image upload if present
        if (!empty($_FILES['featured_image']) && $_FILES['featured_image']['error'] !== UPLOAD_ERR_NO_FILE) {
            $up = UploadController::uploadBlogImage($_FILES['featured_image']);
            if (!$up['success']) {
                adminJsonResponse($up, 422);
            }
            $input['featured_image'] = $up['path'];
        }

        $result = BlogController::create($input, null);
        if (!$result['success']) {
            adminJsonResponse($result, 422);
        }
        adminJsonResponse($result, 201);
    }

    /* PUT /backend/api/admin/blogs/:id — update */
    if ($method === 'PUT' && preg_match('#^/backend/api/admin/blogs/(\d+)$#', $path, $m)) {
        requireAdmin();
        requireApiCsrfToken();
        $id = (int)$m[1];

        // PUT with multipart doesn't work natively in PHP; parse raw body or use JSON
        $input = jsonBody();
        if (empty($input)) {
            // Try reading multipart manually (uncommon for PUT)
            parse_str(file_get_contents('php://input'), $input);
        }
        if (empty($input)) {
            $input = $_POST;
        }

        // Image: may be sent as separate POST /upload first, or inline
        if (!empty($_FILES['featured_image']) && $_FILES['featured_image']['error'] !== UPLOAD_ERR_NO_FILE) {
            $up = UploadController::uploadBlogImage($_FILES['featured_image']);
            if (!$up['success']) {
                adminJsonResponse($up, 422);
            }
            $input['featured_image'] = $up['path'];
        }

        $result = BlogController::update($id, $input, null);
        if (!$result['success']) {
            adminJsonResponse($result, 422);
        }
        adminJsonResponse($result);
    }

    /* DELETE /backend/api/admin/blogs/:id */
    if ($method === 'DELETE' && preg_match('#^/backend/api/admin/blogs/(\d+)$#', $path, $m)) {
        requireAdmin();
        requireApiCsrfToken();
        $id   = (int)$m[1];
        $blog = Blog::findById($id);
        if ($blog === null) {
            adminJsonResponse(['success' => false, 'message' => 'Blog not found.'], 404);
        }
        $deleted = Blog::deleteById($id);
        if (!$deleted) {
            adminJsonResponse(['success' => false, 'message' => 'Blog could not be deleted.'], 500);
        }
        adminJsonResponse(['success' => true, 'message' => 'Blog deleted successfully.']);
    }

    /* Fallthrough */
    adminJsonResponse(['success' => false, 'message' => 'Admin API route not found.'], 404);

} catch (Throwable $e) {
    error_log('Admin API error: ' . $e->getMessage() . ' in ' . $e->getFile() . ':' . $e->getLine());
    adminJsonResponse(['success' => false, 'message' => 'A server error occurred. Please try again.'], 503);
}
