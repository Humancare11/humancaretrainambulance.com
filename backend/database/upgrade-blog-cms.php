<?php

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/../config/database.php';

try {
    $pdo = getDatabaseConnection();
    $database = $pdo->query('SELECT DATABASE()')->fetchColumn();
    $metadataColumn = $pdo->query("SHOW COLUMNS FROM blogs LIKE 'metadata'")->fetch();

    if (!$metadataColumn) {
        $pdo->exec('ALTER TABLE blogs ADD COLUMN metadata LONGTEXT NULL AFTER published_at');
        fwrite(STDOUT, "Added blogs.metadata.\n");
    } else {
        fwrite(STDOUT, "blogs.metadata already exists.\n");
    }

    $statusColumn = $pdo->query("SHOW COLUMNS FROM blogs LIKE 'status'")->fetch();
    if (!$statusColumn) {
        throw new RuntimeException('The blogs.status column is missing; the expected blog schema is not installed.');
    }
    if (!str_contains((string)$statusColumn['Type'], "'scheduled'")) {
        $pdo->exec("ALTER TABLE blogs MODIFY status ENUM('draft', 'pending_review', 'scheduled', 'published', 'archived') NOT NULL DEFAULT 'draft'");
        fwrite(STDOUT, "Enabled pending_review and scheduled blog statuses.\n");
    } else {
        fwrite(STDOUT, "Blog workflow statuses already exist.\n");
    }

    fwrite(STDOUT, "CMS schema upgrade complete for database {$database}.\n");
} catch (Throwable $exception) {
    fwrite(STDERR, "CMS schema upgrade failed: " . $exception->getMessage() . "\n");
    exit(1);
}
