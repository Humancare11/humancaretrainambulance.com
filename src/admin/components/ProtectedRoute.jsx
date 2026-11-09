import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { admin, loading, authError } = useAuth();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ width: 44, height: 44, border: '4px solid #e2e8f0', borderTop: '4px solid #2563eb', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  if (authError && !admin) {
    return <div className="adm-auth-error" role="alert">{authError}</div>;
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
