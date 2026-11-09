<?php

require_once __DIR__ . '/../config/database.php';

class Admin
{
    public static function findByEmail(string $email): ?array
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT * FROM admins WHERE email = :email LIMIT 1');
        $stmt->execute([':email' => $email]);
        $admin = $stmt->fetch();

        return $admin ?: null;
    }

    public static function findById(int $id): ?array
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT * FROM admins WHERE id = :id LIMIT 1');
        $stmt->execute([':id' => $id]);
        $admin = $stmt->fetch();

        return $admin ?: null;
    }

    public static function countAll(): int
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->query('SELECT COUNT(*) AS total FROM admins');
        $row  = $stmt->fetch();
        return (int)($row['total'] ?? 0);
    }

    public static function create(array $data): int
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare(
            'INSERT INTO admins (full_name, email, password_hash, created_at, updated_at) VALUES (:full_name, :email, :password_hash, NOW(), NOW())'
        );
        $stmt->execute([
            ':full_name'     => $data['full_name'],
            ':email'         => $data['email'],
            ':password_hash' => $data['password_hash'],
        ]);
        return (int)$pdo->lastInsertId();
    }

    public static function updatePassword(int $id, string $newHash): bool
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare('UPDATE admins SET password_hash = :hash, updated_at = NOW() WHERE id = :id');
        return $stmt->execute([':hash' => $newHash, ':id' => $id]);
    }
}
