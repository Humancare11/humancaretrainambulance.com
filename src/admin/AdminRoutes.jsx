import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlogs from "./pages/AdminBlogs";
import AdminBlogEditor from "./pages/AdminBlogEditor";
import AdminCategories from "./pages/AdminCategories";

/**
 * Entry point for everything under /admin/*.
 * Lazy-loaded from App.jsx so the admin code (and its auth check against the
 * API) never loads for public visitors.
 */
export default function AdminRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="blogs/new" element={<AdminBlogEditor />} />
            <Route path="blogs/edit/:id" element={<AdminBlogEditor />} />
            <Route path="categories" element={<AdminCategories />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  );
}
