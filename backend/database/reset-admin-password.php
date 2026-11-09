<?php

/**
 * CLI-only password reset for an existing admin account.
 * Usage: php backend/database/reset-admin-password.php
 *
 * Requires ADMIN_EMAIL and ADMIN_PASSWORD from the environment or .env.
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
        throw new RuntimeException('Set ADMIN_EMAIL to the existing admin account email.');
    }
    if (strlen($password) < 12) {
        throw new RuntimeException('Set ADMIN_PASSWORD to a new password with at least 12 characters.');
    }

    $admin = Admin::findByEmail($email);
    if ($admin === null) {
        $pdo = getDatabaseConnection();
        $existingEmails = $pdo->query('SELECT email FROM admins ORDER BY email')->fetchAll(PDO::FETCH_COLUMN);
        if ($existingEmails === []) {
            throw new RuntimeException('No admin accounts exist in the configured database. No changes were made.');
        }

        throw new RuntimeException(
            'No admin account exists for ADMIN_EMAIL. Existing account email(s): '
            . implode(', ', $existingEmails)
            . '. Set ADMIN_EMAIL to one of these addresses. No changes were made.'
        );
    }

    $hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
    if (!Admin::updatePassword((int)$admin['id'], $hash)) {
        throw new RuntimeException('The admin password could not be updated.');
    }

    fwrite(STDOUT, "Admin password updated successfully. Sign in at /admin/login.\n");
    fwrite(STDOUT, "The password was not displayed.\n");
} catch (Throwable $exception) {
    fwrite(STDERR, "Error: " . $exception->getMessage() . "\n");
    exit(1);
}
