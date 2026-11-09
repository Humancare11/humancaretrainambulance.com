<?php

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Admin.php';
require_once __DIR__ . '/../helpers/ResponseHelper.php';
require_once __DIR__ . '/../middleware/AuthMiddleware.php';

class AuthController
{
    public static function login(array $input): array
    {
        ensureSessionStarted();

        $email = trim((string)($input['email'] ?? ''));
        $password = (string)($input['password'] ?? '');

        if ($email === '' || $password === '') {
            return ['success' => false, 'message' => 'Email and password are required.'];
        }

        $admin = Admin::findByEmail($email);
        if ($admin === null || !password_verify($password, $admin['password_hash'])) {
            return ['success' => false, 'message' => 'Invalid credentials.'];
        }

        session_regenerate_id(true);
        $_SESSION['admin_id'] = (int)$admin['id'];
        $_SESSION['admin_email'] = $admin['email'];

        return ['success' => true, 'message' => 'Login successful.'];
    }

    public static function logout(): void
    {
        ensureSessionStarted();

        $_SESSION = [];
        if (session_status() === PHP_SESSION_ACTIVE && ini_get('session.use_cookies')) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
        }
        if (session_status() === PHP_SESSION_ACTIVE) {
            session_destroy();
        }
    }
}
