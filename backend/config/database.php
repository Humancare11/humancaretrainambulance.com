<?php

function loadEnvFile(string $path): void
{
    if (!is_file($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }

        $parts = explode('=', $line, 2);
        if (count($parts) !== 2) {
            continue;
        }

        $key = trim($parts[0]);
        $value = trim($parts[1]);

        if ($value !== '' && ($value[0] === '"' || $value[0] === "'")) {
            $value = trim($value, "\"'");
        }

        $_ENV[$key] = $value;
        putenv($key . '=' . $value);
    }
}

// Lowest to highest precedence. Production: keep .env one level ABOVE the web root.
loadEnvFile(__DIR__ . '/../../../.env');
loadEnvFile(__DIR__ . '/../../.env');
loadEnvFile(__DIR__ . '/../.env');

// Production: never print PHP errors/warnings to visitors; log them instead.
if (strtolower((string)(getenv('APP_ENV') ?: ($_ENV['APP_ENV'] ?? ''))) === 'production') {
    ini_set('display_errors', '0');
    ini_set('display_startup_errors', '0');
    ini_set('log_errors', '1');
    error_reporting(E_ALL);
}

date_default_timezone_set((string)env('APP_TIMEZONE', 'Asia/Kolkata'));

function env(string $key, mixed $default = null): mixed
{
    if (array_key_exists($key, $_ENV)) {
        return $_ENV[$key];
    }

    $value = getenv($key);
    if ($value !== false) {
        return $value;
    }

    return $default;
}

function databaseConfig(): array
{
    return [
        'host' => env('DB_HOST', '127.0.0.1'),
        'name' => env('DB_NAME', 'tam_blog_local'),
        'user' => env('DB_USER', 'root'),
        'password' => env('DB_PASSWORD', ''),
        'charset' => 'utf8mb4',
    ];
}

function getDatabaseConnection(): PDO
{
    $config = databaseConfig();

    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=%s',
        $config['host'],
        $config['name'],
        $config['charset']
    );

    $pdo = new PDO(
        $dsn,
        $config['user'],
        $config['password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

    // Keep MySQL NOW() in the same timezone as PHP date()/time().
    $pdo->exec("SET time_zone = '" . date('P') . "'");

    return $pdo;
}
