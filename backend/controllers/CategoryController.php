<?php

require_once __DIR__ . '/../models/Category.php';
require_once __DIR__ . '/../helpers/SlugHelper.php';
require_once __DIR__ . '/../helpers/ResponseHelper.php';

class CategoryController
{
    public static function getAll(): array
    {
        return Category::all();
    }

    public static function create(array $input): array
    {
        $name = sanitizeText((string)($input['name'] ?? ''));
        $description = sanitizeText((string)($input['description'] ?? ''));

        if ($name === '') {
            return ['success' => false, 'message' => 'Category name is required.'];
        }

        $slug = slugify($name);
        if ($slug === '') {
            return ['success' => false, 'message' => 'Category name is invalid.'];
        }

        if (Category::findBySlug($slug) !== null) {
            return ['success' => false, 'message' => 'A category with the same slug already exists.'];
        }

        $id = Category::create([
            'name' => $name,
            'slug' => $slug,
            'description' => $description,
        ]);

        return ['success' => true, 'message' => 'Category created.', 'category_id' => $id];
    }
}
