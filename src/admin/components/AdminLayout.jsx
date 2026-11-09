import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { FileText, FolderOpen, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../admin.css';

const NAV = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/blogs', label: 'Blogs', icon: FileText },
  { to: '/admin/categories', label: 'Categories', icon: FolderOpen },
];

export default function AdminLayout() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/admin/login', { replace: true });
    } catch (logoutError) {
      setError(logoutError.message);
    }
  }

  const pageTitle = pathname === '/admin/dashboard'
    ? 'Dashboard'
    : pathname === '/admin/categories'
      ? 'Categories'
      : pathname.endsWith('/new')
        ? 'Create blog'
        : pathname.includes('/edit/')
          ? 'Edit blog'
          : 'Blog management';

  return (
    <div className="adm-wrap">
      {sidebarOpen && (
        <button type="button" className="adm-sidebar-overlay" aria-label="Close navigation menu" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`adm-sidebar${sidebarOpen ? ' open' : ''}`} aria-label="Admin navigation">
        <Link to="/admin/dashboard" className="adm-sidebar-logo" onClick={() => setSidebarOpen(false)}>
          <div className="adm-sidebar-logo-icon">HC</div>
          <div>
            <div className="adm-sidebar-logo-text">Humancare</div>
            <div className="adm-sidebar-logo-sub">Admin Panel</div>
          </div>
        </Link>

        <div className="adm-nav">
          <div className="adm-nav-section">Workspace</div>
          {NAV.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) => `adm-nav-link${isActive ? ' active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="adm-nav-icon" size={19} aria-hidden="true" />
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="adm-sidebar-footer">
          <div className="adm-sidebar-user">
            <span className="adm-avatar" aria-hidden="true">{(admin?.full_name || admin?.email || 'H').slice(0, 1).toUpperCase()}</span>
            <div><strong>{admin?.full_name || 'Admin'}</strong><small>{admin?.email}</small></div>
          </div>
          <button className="adm-logout-btn" onClick={handleLogout} type="button">
            <LogOut size={17} aria-hidden="true" /> Sign out
          </button>
        </div>
      </aside>

      <div className="adm-main">
        <header className="adm-topbar">
          <div className="adm-topbar-left">
            <button
              className="adm-hamburger"
              onClick={() => setSidebarOpen(v => !v)}
              aria-label={sidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={sidebarOpen}
              type="button"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <div><span className="adm-topbar-kicker">Humancare CMS</span><h1 className="adm-topbar-title">{pageTitle}</h1></div>
          </div>
          <Link to="/" className="adm-view-site" target="_blank" rel="noreferrer">View website</Link>
        </header>

        <main className="adm-content" id="admin-main">
          {error && <div className="adm-alert adm-alert-error" role="alert">{error}</div>}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
