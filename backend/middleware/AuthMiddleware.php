<?php

function ensureSessionStarted(): void
{
    if (session_status() === PHP_SESSION_NONE) {
        $https = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== '' && strtolower($_SERVER['HTTPS']) !== 'off';
        session_set_cookie_params([
            'lifetime' => 0,
            'path' => '/',
            'secure' => $https,
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        session_start();
    }

    if (session_status() === PHP_SESSION_ACTIVE && !empty($_SESSION['admin_id'])) {
        $lastActivity = (int)($_SESSION['last_activity'] ?? time());
        if (time() - $lastActivity > 1800) {
            $_SESSION = [];
            session_regenerate_id(true);
        } else {
            $_SESSION['last_activity'] = time();
        }
    }
}

function requireAdminLogin(): void
{
    ensureSessionStarted();

    if (empty($_SESSION['admin_id'])) {
        $redirect = urlencode($_SERVER['REQUEST_URI'] ?? '/backend/admin/dashboard.php');
        header('Location: /backend/admin/login.php?redirect=' . $redirect, true, 302);
        exit;
    }
}

function generateCsrfToken(): string
{
    ensureSessionStarted();

    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}

function verifyCsrfToken(string $token): bool
{
    ensureSessionStarted();

    return hash_equals($_SESSION['csrf_token'] ?? '', $token);
}

function requireApiCsrfToken(): void
{
    $token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if (!verifyCsrfToken($token)) {
        http_response_code(403);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => false, 'message' => 'Invalid security token. Refresh and try again.']);
        exit;
    }
}
