# Dynamic Blog Management System

This backend adds a secure, MySQL-backed content management layer for the existing website while keeping the frontend appearance intact.

## Local setup

### 1. Start Apache + MySQL

Use a local LAMP/WAMP/XAMPP stack or your preferred PHP + MySQL environment.

### 2. Create the database

Open MySQL and run:

```sql
CREATE DATABASE IF NOT EXISTS tam_blog_local CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 3. Import the schema

```bash
mysql -u root -p tam_blog_local < backend/database/schema.sql
```

### 4. Import the seed data

```bash
mysql -u root -p tam_blog_local < backend/database/seed.sql
```

For an existing database, run the additive CMS upgrade once before using the
expanded editor. It adds optional JSON metadata storage and the review/schedule
status values without replacing existing blog fields or records:

```powershell
& 'C:\xampp\php\php.exe' backend\database\upgrade-blog-cms.php
```

The script is safe to run more than once.

### 5. Configure the database credentials

Copy the example file and update it if needed:

```bash
cp .env.example .env
```

Example:

```env
DB_HOST=127.0.0.1
DB_NAME=tam_blog_local
DB_USER=root
DB_PASSWORD=
```

### 6. Save an admin login in the database

The admin login is stored in the MySQL `admins` table. The email is stored as
`email`; the password is stored as a bcrypt hash in `password_hash`, never as
readable plaintext. The password cannot be recovered from the database; reset
it by choosing a new one.

For the first account, set `ADMIN_EMAIL`, `ADMIN_PASSWORD` (at least 12
characters), and optionally `ADMIN_NAME` in the project-root `.env`, then run
the CLI-only setup script from the project root:

```bash
php backend/database/setup-admin.php
```

On Windows with XAMPP PHP:

```powershell
& 'C:\xampp\php\php.exe' backend\database\setup-admin.php
```

This inserts the account into the configured database and saves only the
password hash. Once successful, remove `ADMIN_PASSWORD` from `.env`; the
database record is what the login uses afterward. Never commit or share the
`.env` file.

The seed file creates categories and sample blog records; it does not create an
admin with a known password. If this database was seeded by an older version,
and an admin already exists, do not delete the account just to recreate it.
Use the password reset steps below instead.

To reset an existing admin password, set `ADMIN_EMAIL` to the existing
account's email and `ADMIN_PASSWORD` to a new password of at least 12
characters in the project-root `.env`, then run this CLI-only script from the
project root:

```bash
php backend/database/reset-admin-password.php
```

On Windows with XAMPP PHP:

```powershell
& 'C:\xampp\php\php.exe' backend\database\reset-admin-password.php
```

The script only updates the matching existing admin in the database and never
prints the password. Remove `ADMIN_PASSWORD` from `.env` after the reset. You
can verify the account exists without displaying its password hash:

```sql
SELECT id, full_name, email FROM admins WHERE email = 'admin@example.com';
```

If the reset script reports that no account exists, compare `ADMIN_EMAIL` in
`.env` with the account email returned by the database. Use the exact email of
an existing admin; do not use an example address.

### 7. Open the React admin panel

```text
http://localhost:5173/admin/login
```

### 8. Create a blog

After signing in, use the dashboard, blog management, editor, and categories
sections to manage content. The legacy PHP admin pages remain available during
the React admin migration but are not the primary admin interface.

### 9. Verify the public blog listing

Published blogs automatically appear in the existing React listing at:

```text
http://localhost:5173/blogs
```

And individual blog articles are viewable at:

```text
http://localhost:5173/blogs/your-blog-slug
```

Start the existing Vite frontend from `frontend/` using `npm run dev`. Vite proxies
`/backend/api` to `http://localhost` by default; this should be the Apache origin
serving the project root and its `.htaccess` rules. If Apache uses another origin
or port, set `VITE_BACKEND_ORIGIN` in `frontend/.env.local`, for example:

```env
VITE_BACKEND_ORIGIN=http://localhost:8080
```

The public API is read-only and exposes only published blog fields:

- `GET /backend/api/blogs?page=1&per_page=12`
- `GET /backend/api/blogs/{slug}`
- `GET /backend/api/categories`

The development proxy forwards the public API and uploaded blog images.
Same-origin production requests avoid browser CORS configuration. Admin pages
are not routed through the public API.

## Backend structure

```text
backend/
├── admin/
├── config/
├── controllers/
├── database/
├── helpers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── blog.php
├── index.php
└── README.md
```

## Notes

- Only published blogs are shown publicly.
- Draft and archived items remain hidden from the front end.
- Uploaded file names are sanitized and stored in backend/uploads/blog-images.
- PDO prepared statements are used throughout the backend.
