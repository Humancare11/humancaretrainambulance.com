<?php

require_once __DIR__ . '/../config/database.php';

class Category
{
    public static function all(): array
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->query('SELECT * FROM categories ORDER BY name ASC');
        return $stmt->fetchAll();
    }

    public static function findById(int $id): ?array
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT * FROM categories WHERE id = :id LIMIT 1');
        $stmt->execute([':id' => $id]);
        $category = $stmt->fetch();

        return $category ?: null;
    }

    public static function findBySlug(string $slug): ?array
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT * FROM categories WHERE slug = :slug LIMIT 1');
        $stmt->execute([':slug' => $slug]);
        $category = $stmt->fetch();

        return $category ?: null;
    }

    public static function count(): int
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->query('SELECT COUNT(*) AS total FROM categories');
        $result = $stmt->fetch();

        return (int)($result['total'] ?? 0);
    }

    public static function create(array $data): int
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare(
            'INSERT INTO categories (name, slug, description, created_at, updated_at) VALUES (:name, :slug, :description, NOW(), NOW())'
        );
        $stmt->execute([
            ':name' => $data['name'],
            ':slug' => $data['slug'],
            ':description' => $data['description'] ?? '',
        ]);

        return (int)$pdo->lastInsertId();
    }
}
