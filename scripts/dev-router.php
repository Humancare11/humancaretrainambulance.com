<?php
/**
 * DEV ONLY – router for PHP's built-in server so the Vite dev proxy can reach
 * this project's backend without touching XAMPP/Apache vhosts.
 *
 * Start (from the project root):
 *   C:\xampp\php\php.exe -c C:\xampp\php\php.ini -S localhost:8082 scripts/dev-router.php
 * and set  VITE_BACKEND_ORIGIN=http://localhost:8082  in .env.local, then restart `npm run dev`.
 *
 * It mirrors the rewrites in the root .htaccess and never serves .env, .sql,
 * or backend internals. Not used in production (Apache + .htaccess does this).
 */

$root = dirname(__DIR__);
$path = rawurldecode((string)parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH));

// Uploaded images (static, images only)
if (preg_match('#^/backend/uploads/blog-images/[A-Za-z0-9._-]+\.(png|jpe?g|gif|webp)$#i', $path)) {
    $file = $root . $path;
    if (is_file($file)) {
        $types = ['png' => 'image/png', 'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'gif' => 'image/gif', 'webp' => 'image/webp'];
        header('Content-Type: ' . $types[strtolower(pathinfo($file, PATHINFO_EXTENSION))]);
        readfile($file);
        return true;
    }
}

// Admin API
if (preg_match('#^/backend/api/admin/(login|logout|me|stats|upload|categories|blogs)/?$#', $path)
    || preg_match('#^/backend/api/admin/blogs/[0-9]+(/(publish|unpublish))?/?$#', $path)) {
    $_SERVER['SCRIPT_FILENAME'] = $root . '/backend/routes/admin-api.php';
    require $_SERVER['SCRIPT_FILENAME'];
    return true;
}

// Public API
if (preg_match('#^/backend/api/(blogs|categories)/?$#', $path) || preg_match('#^/backend/api/blogs/[^/]+/?$#', $path)) {
    $_SERVER['SCRIPT_FILENAME'] = $root . '/backend/routes/api.php';
    require $_SERVER['SCRIPT_FILENAME'];
    return true;
}

http_response_code(404);
header('Content-Type: application/json');
echo json_encode(['success' => false, 'message' => 'Not found.']);
return true;
