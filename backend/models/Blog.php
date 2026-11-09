<?php

require_once __DIR__ . '/../config/database.php';

class Blog
{
    public static function countByStatus(?string $status = null): int
    {
        self::publishDueScheduled();
        $pdo = getDatabaseConnection();
        if ($status === null) {
            $stmt = $pdo->query('SELECT COUNT(*) AS total FROM blogs');
        } else {
            $stmt = $pdo->prepare('SELECT COUNT(*) AS total FROM blogs WHERE status = :status');
            $stmt->execute([':status' => $status]);
        }

        $result = $stmt->fetch();
        return (int)($result['total'] ?? 0);
    }

    public static function countPublished(): int
    {
        self::publishDueScheduled();
        $pdo = getDatabaseConnection();
        return (int)$pdo->query("SELECT COUNT(*) FROM blogs WHERE status = 'published' AND (published_at IS NULL OR published_at <= NOW()) AND (metadata IS NULL OR COALESCE(JSON_UNQUOTE(JSON_EXTRACT(metadata, '$.visibility')), 'public') <> 'private')")->fetchColumn();
    }

    public static function recent(int $limit = 5): array
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT b.*, c.name AS category_name FROM blogs b LEFT JOIN categories c ON c.id = b.category_id ORDER BY b.created_at DESC LIMIT :limit');
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public static function all(int $limit = 10, int $offset = 0): array
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT b.*, c.name AS category_name FROM blogs b LEFT JOIN categories c ON c.id = b.category_id ORDER BY b.created_at DESC LIMIT :offset, :limit');
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public static function published(int $limit = 6, int $offset = 0): array
    {
        self::publishDueScheduled();
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare("SELECT b.*, c.name AS category_name FROM blogs b LEFT JOIN categories c ON c.id = b.category_id WHERE b.status = :status AND (b.published_at IS NULL OR b.published_at <= NOW()) AND (b.metadata IS NULL OR COALESCE(JSON_UNQUOTE(JSON_EXTRACT(b.metadata, '$.visibility')), 'public') <> 'private') ORDER BY b.published_at DESC, b.created_at DESC LIMIT :offset, :limit");
        $stmt->bindValue(':status', 'published', PDO::PARAM_STR);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public static function findById(int $id): ?array
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT b.*, c.name AS category_name FROM blogs b LEFT JOIN categories c ON c.id = b.category_id WHERE b.id = :id LIMIT 1');
        $stmt->execute([':id' => $id]);
        $blog = $stmt->fetch();
        return $blog ?: null;
    }

    public static function findBySlug(string $slug): ?array
    {
        self::publishDueScheduled();
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare('SELECT b.*, c.name AS category_name FROM blogs b LEFT JOIN categories c ON c.id = b.category_id WHERE b.slug = :slug LIMIT 1');
        $stmt->execute([':slug' => $slug]);
        $blog = $stmt->fetch();
        return $blog ?: null;
    }

    private static function publishDueScheduled(): void
    {
        $pdo = getDatabaseConnection();
        $pdo->exec("UPDATE blogs SET status = 'published', updated_at = NOW() WHERE status = 'scheduled' AND published_at IS NOT NULL AND published_at <= NOW()");
    }

    public static function relatedByIds(array $ids, int $excludeId, int $limit = 6): array
    {
        $ids = array_values(array_unique(array_filter(array_map('intval', $ids), static fn(int $id): bool => $id > 0 && $id !== $excludeId)));
        if ($ids === []) {
            return [];
        }

        self::publishDueScheduled();
        $ids = array_slice($ids, 0, $limit);
        $placeholders = implode(',', array_fill(0, count($ids), '?'));
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare("SELECT b.*, c.name AS category_name FROM blogs b LEFT JOIN categories c ON c.id = b.category_id WHERE b.id IN ({$placeholders}) AND b.status = 'published' AND (b.published_at IS NULL OR b.published_at <= NOW()) AND (b.metadata IS NULL OR COALESCE(JSON_UNQUOTE(JSON_EXTRACT(b.metadata, '$.visibility')), 'public') <> 'private')");
        $stmt->execute($ids);
        $rows = $stmt->fetchAll();
        $byId = [];
        foreach ($rows as $row) {
            $byId[(int)$row['id']] = $row;
        }
        return array_values(array_filter(array_map(static fn(int $id) => $byId[$id] ?? null, $ids)));
    }

    /**
     * Admin: paginated list with optional status filter and keyword search.
     */
    public static function allPaginated(int $limit, int $offset, ?string $status = null, string $search = ''): array
    {
        self::publishDueScheduled();
        $pdo = getDatabaseConnection();

        $conditions = [];
        $params = [];

        if ($status !== null && $status !== 'all' && $status !== '') {
            $conditions[] = 'b.status = :status';
            $params[':status'] = $status;
        }

        if ($search !== '') {
            $conditions[] = '(b.title LIKE :search OR b.excerpt LIKE :search2)';
            $params[':search']  = '%' . $search . '%';
            $params[':search2'] = '%' . $search . '%';
        }

        $where = $conditions ? 'WHERE ' . implode(' AND ', $conditions) : '';

        $sql = "SELECT b.*, c.name AS category_name
                FROM blogs b
                LEFT JOIN categories c ON c.id = b.category_id
                {$where}
                ORDER BY b.created_at DESC
                LIMIT :offset, :limit";

        $stmt = $pdo->prepare($sql);
        foreach ($params as $key => $value) {
            $stmt->bindValue($key, $value, PDO::PARAM_STR);
        }
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->bindValue(':limit',  $limit,  PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    /**
     * Admin: count with same filters as allPaginated.
     */
    public static function countAll(?string $status = null, string $search = ''): int
    {
        self::publishDueScheduled();
        $pdo = getDatabaseConnection();

        $conditions = [];
        $params = [];

        if ($status !== null && $status !== 'all' && $status !== '') {
            $conditions[] = 'status = :status';
            $params[':status'] = $status;
        }

        if ($search !== '') {
            $conditions[] = '(title LIKE :search OR excerpt LIKE :search2)';
            $params[':search']  = '%' . $search . '%';
            $params[':search2'] = '%' . $search . '%';
        }

        $where = $conditions ? 'WHERE ' . implode(' AND ', $conditions) : '';
        $stmt  = $pdo->prepare("SELECT COUNT(*) AS total FROM blogs {$where}");
        foreach ($params as $key => $value) {
            $stmt->bindValue($key, $value, PDO::PARAM_STR);
        }
        $stmt->execute();

        $result = $stmt->fetch();
        return (int)($result['total'] ?? 0);
    }

    /**
     * Admin: change status (publish / unpublish / archive).
     */
    public static function updateStatus(int $id, string $status, ?string $publishedAt): bool
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare('UPDATE blogs SET status = :status, published_at = :published_at, updated_at = NOW() WHERE id = :id');
        return $stmt->execute([
            ':status'       => $status,
            ':published_at' => $publishedAt,
            ':id'           => $id,
        ]);
    }

    public static function create(array $data): int
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare(
            'INSERT INTO blogs (title, slug, excerpt, content, featured_image, author, category_id, tags, meta_title, meta_description, canonical_url, status, published_at, metadata, created_at, updated_at) VALUES (:title, :slug, :excerpt, :content, :featured_image, :author, :category_id, :tags, :meta_title, :meta_description, :canonical_url, :status, :published_at, :metadata, NOW(), NOW())'
        );

        $stmt->execute([
            ':title'            => $data['title'],
            ':slug'             => $data['slug'],
            ':excerpt'          => $data['excerpt'] ?? '',
            ':content'          => $data['content'] ?? '',
            ':featured_image'   => $data['featured_image'] ?? '',
            ':author'           => $data['author'] ?? '',
            ':category_id'      => $data['category_id'] ?? null,
            ':tags'             => $data['tags'] ?? '',
            ':meta_title'       => $data['meta_title'] ?? '',
            ':meta_description' => $data['meta_description'] ?? '',
            ':canonical_url'    => $data['canonical_url'] ?? '',
            ':status'           => $data['status'] ?? 'draft',
            ':published_at'     => $data['published_at'] ?? null,
            ':metadata'         => $data['metadata'] ?? null,
        ]);

        return (int)$pdo->lastInsertId();
    }

    public static function update(int $id, array $data): bool
    {
        $pdo = getDatabaseConnection();
        $stmt = $pdo->prepare(
            'UPDATE blogs SET title = :title, slug = :slug, excerpt = :excerpt, content = :content, featured_image = :featured_image, author = :author, category_id = :category_id, tags = :tags, meta_title = :meta_title, meta_description = :meta_description, canonical_url = :canonical_url, status = :status, published_at = :published_at, metadata = :metadata, updated_at = NOW() WHERE id = :id'
        );

        return $stmt->execute([
            ':id'               => $id,
            ':title'            => $data['title'],
            ':slug'             => $data['slug'],
            ':excerpt'          => $data['excerpt'] ?? '',
            ':content'          => $data['content'] ?? '',
            ':featured_image'   => $data['featured_image'] ?? '',
            ':author'           => $data['author'] ?? '',
            ':category_id'      => $data['category_id'] ?? null,
            ':tags'             => $data['tags'] ?? '',
            ':meta_title'       => $data['meta_title'] ?? '',
            ':meta_description' => $data['meta_description'] ?? '',
            ':canonical_url'    => $data['canonical_url'] ?? '',
            ':status'           => $data['status'] ?? 'draft',
            ':published_at'     => $data['published_at'] ?? null,
            ':metadata'         => $data['metadata'] ?? null,
        ]);
    }

    public static function existsSlug(string $slug, ?int $excludeId = null): bool
    {
        $pdo = getDatabaseConnection();
        if ($excludeId === null) {
            $stmt = $pdo->prepare('SELECT id FROM blogs WHERE slug = :slug LIMIT 1');
            $stmt->execute([':slug' => $slug]);
        } else {
            $stmt = $pdo->prepare('SELECT id FROM blogs WHERE slug = :slug AND id != :exclude_id LIMIT 1');
            $stmt->execute([':slug' => $slug, ':exclude_id' => $excludeId]);
        }

        return (bool)$stmt->fetch();
    }

    public static function deleteById(int $id): bool
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare('DELETE FROM blogs WHERE id = :id');
        $stmt->execute([':id' => $id]);

        return $stmt->rowCount() === 1;
    }

    public static function related(int $categoryId, int $excludeId, int $limit = 4): array
    {
        $pdo  = getDatabaseConnection();
        $stmt = $pdo->prepare("SELECT b.*, c.name AS category_name FROM blogs b LEFT JOIN categories c ON c.id = b.category_id WHERE b.category_id = :category_id AND b.id != :exclude_id AND b.status = :status AND (b.published_at IS NULL OR b.published_at <= NOW()) AND (b.metadata IS NULL OR COALESCE(JSON_UNQUOTE(JSON_EXTRACT(b.metadata, '$.visibility')), 'public') <> 'private') ORDER BY b.published_at DESC, b.created_at DESC LIMIT :limit");
        $stmt->bindValue(':category_id', $categoryId, PDO::PARAM_INT);
        $stmt->bindValue(':exclude_id',  $excludeId,  PDO::PARAM_INT);
        $stmt->bindValue(':status',      'published',  PDO::PARAM_STR);
        $stmt->bindValue(':limit',       $limit,       PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
