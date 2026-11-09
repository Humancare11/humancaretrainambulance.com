import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../admin.css';

export default function AdminLogin() {
  const { admin, login } = useAuth();
  const navigate = useNavigate();

  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [busy,     setBusy]     = useState(false);
  const [showPwd,  setShowPwd]  = useState(false);

  // Already logged in → redirect
  useEffect(() => {
    if (admin) navigate('/admin/dashboard', { replace: true });
  }, [admin, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }
    setBusy(true);
    try {
      const result = await login(email.trim(), password);
      if (result.success) {
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(result.message || 'Login failed. Please try again.');
      }
    } catch {
      setError('A network error occurred. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="adm-login-page">
      <div className="adm-login-card">
        <div className="adm-login-logo">
          <div className="adm-login-logo-icon">HC</div>
          <p className="adm-eyebrow">HUMANCARE CONTENT STUDIO</p>
          <h1 className="adm-login-title">Welcome back</h1>
          <p className="adm-login-sub">Sign in to manage your blog content.</p>
        </div>

        {error && (
          <div className="adm-alert adm-alert-error" role="alert">
            <span aria-hidden="true">!</span> {error}
          </div>
        )}

        <form className="adm-login-form" onSubmit={handleSubmit} noValidate>
          <div className="adm-form-group">
            <label className="adm-label" htmlFor="admin-email">Email address</label>
            <input
              id="admin-email"
              type="email"
              className="adm-input"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              aria-invalid={Boolean(error)}
              required
            />
          </div>

          <div className="adm-form-group">
            <label className="adm-label" htmlFor="admin-pwd">Password</label>
            <div className="adm-password-field">
              <input
                id="admin-pwd"
                type={showPwd ? 'text' : 'password'}
                className="adm-input"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                aria-invalid={Boolean(error)}
              />
              <button
                type="button"
                onClick={() => setShowPwd(v => !v)}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
                className="adm-password-toggle"
              >
                {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="adm-login-submit">
            <button type="submit" className="adm-btn adm-btn-primary adm-btn-lg" disabled={busy}>
              {busy ? (
                <>
                  <span className="adm-spinner" aria-hidden="true" />
                  Signing in…
                </>
              ) : 'Sign in'}
            </button>
          </div>
        </form>

        <p className="adm-login-security"><ShieldCheck size={15} aria-hidden="true" /> Secure access to the Humancare CMS</p>
      </div>
    </div>
  );
}
