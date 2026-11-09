import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    fetch('/backend/api/admin/me', { credentials: 'include' })
      .then(async (response) => {
        const data = await response.json();
        if (response.ok && data.success && data.admin) {
          setAdmin(data.admin);
          setCsrfToken(data.csrf_token || '');
        } else if (response.status !== 401) {
          throw new Error(data.message || 'The admin session could not be checked.');
        }
      })
      .catch((error) => setAuthError(error.message || 'The admin session could not be checked.'))
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (email, password) => {
    const response = await fetch('/backend/api/admin/login', {
      method:      'POST',
      credentials: 'include',
      headers:     { 'Content-Type': 'application/json' },
      body:        JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok || !data.success) {
      return { ...data, success: false };
    }
    if (data.success && data.admin) {
      setAdmin(data.admin);
      setCsrfToken(data.csrf_token || '');
      setAuthError('');
    }
    return data; // { success, message, admin? }
  }, []);

  const apiRequest = useCallback(async (url, options = {}) => {
    const headers = new Headers(options.headers || {});
    if (csrfToken) headers.set('X-CSRF-Token', csrfToken);
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });
    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error('The server returned an unreadable response.');
    }
    if (!response.ok || data.success === false) {
      if (response.status === 401) {
        setAdmin(null);
        setCsrfToken('');
      }
      throw new Error(data.message || `Request failed (${response.status}).`);
    }
    return data;
  }, [csrfToken]);

  const logout = useCallback(async () => {
    await apiRequest('/backend/api/admin/logout', { method: 'POST' });
    setAdmin(null);
    setCsrfToken('');
  }, [apiRequest]);

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout, apiRequest, authError }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
