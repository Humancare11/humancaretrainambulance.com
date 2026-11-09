<?php

/**
 * CLI-only admin account seeder.
 * Usage: php backend/database/setup-admin.php
 *
 * Requires ADMIN_EMAIL and ADMIN_PASSWORD from the environment or .env.
 * Does NOT create an account if one already exists.
 */

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Admin.php';

try {
    $email = trim((string)env('ADMIN_EMAIL', ''));
    $password = (string)env('ADMIN_PASSWORD', '');
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new RuntimeException('Set ADMIN_EMAIL to a valid email address before creating the first admin account.');
    }
    if (strlen($password) < 12) {
        throw new RuntimeException('Set ADMIN_PASSWORD to a password with at least 12 characters.');
    }

    $existing = Admin::countAll();
    if ($existing > 0) {
        fwrite(STDOUT, "An admin account already exists. No action taken.\n");
        fwrite(STDOUT, "To reset a password, set ADMIN_EMAIL and ADMIN_PASSWORD, then run backend/database/reset-admin-password.php.\n");
        exit(0);
    }

    $name     = env('ADMIN_NAME',     'Humancare Admin');

    $hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);

    Admin::create([
        'full_name'     => $name,
        'email'         => $email,
        'password_hash' => $hash,
    ]);

    fwrite(STDOUT, "\n");
    fwrite(STDOUT, "==============================================\n");
    fwrite(STDOUT, " Admin account created successfully!\n");
    fwrite(STDOUT, "==============================================\n");
    fwrite(STDOUT, " URL:      /admin/login\n");
    fwrite(STDOUT, " Email:    {$email}\n");
    fwrite(STDOUT, "==============================================\n");
    fwrite(STDOUT, " Passwords are never displayed by this script.\n");
    fwrite(STDOUT, "==============================================\n\n");

} catch (Throwable $e) {
    fwrite(STDERR, "Error: " . $e->getMessage() . "\n");
    exit(1);
}
