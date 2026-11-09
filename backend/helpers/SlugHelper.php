<?php

function slugify(string $value): string
{
    $value = strtolower(trim($value));
    $value = preg_replace('/[^a-z0-9\s-]/', '', $value) ?? $value;
    $value = preg_replace('/\s+/', '-', $value) ?? $value;
    $value = preg_replace('/-+/', '-', $value) ?? $value;

    return trim($value, '-');
}
