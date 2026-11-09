<?php

require_once __DIR__ . '/../helpers/ResponseHelper.php';

class UploadController
{
    public static function uploadBlogImage(array $file): array
    {
        if (!isset($file['tmp_name']) || !is_uploaded_file($file['tmp_name'])) {
            return ['success' => false, 'message' => 'No valid image file was uploaded.'];
        }

        if ($file['error'] !== UPLOAD_ERR_OK) {
            return ['success' => false, 'message' => 'Image upload failed.'];
        }

        $extensionsByMime = [
            'image/jpeg' => 'jpg',
            'image/png' => 'png',
            'image/webp' => 'webp',
            'image/gif' => 'gif',
        ];
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);

        if (!isset($extensionsByMime[$mimeType]) || @getimagesize($file['tmp_name']) === false) {
            return ['success' => false, 'message' => 'Only JPG, PNG, GIF, and WEBP images are allowed.'];
        }

        if ($file['size'] <= 0 || $file['size'] > 2 * 1024 * 1024) {
            return ['success' => false, 'message' => 'Image size must be between 1 byte and 2 MB.'];
        }

        $extension = $extensionsByMime[$mimeType];
        $safeName = 'blog-' . time() . '-' . bin2hex(random_bytes(6)) . '.' . $extension;
        $targetDir = __DIR__ . '/../uploads/blog-images';

        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0775, true);
        }

        $targetPath = $targetDir . '/' . $safeName;
        if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
            return ['success' => false, 'message' => 'The image could not be saved.'];
        }

        return [
            'success' => true,
            'path' => '/backend/uploads/blog-images/' . $safeName,
            'filename' => $safeName,
        ];
    }
}
