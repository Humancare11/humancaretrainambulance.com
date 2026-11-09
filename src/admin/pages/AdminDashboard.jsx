import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, FolderOpen, Globe, Pencil, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import fallbackImage from '../../assets/logo.webp';

const metricCards = [
  { key: 'total', label: 'Total blogs', icon: FileText, tone: 'blue' },
  { key: 'published', label: 'Published', icon: Globe, tone: 'green' },
  { key: 'draft', label: 'Drafts', icon: Pencil, tone: 'yellow' },
  { key: 'archived', label: 'Archived', icon: FileText, tone: 'gray' },
  { key: 'total_categories', label: 'Categories', icon: FolderOpen, tone: 'red' },
];

function dateLabel(value) {
  return value ? new Date(value.replace(' ', 'T')).toLocaleDateString() : 'Not published';
}

export default function AdminDashboard() {
  const { apiRequest } = useAuth();
  const [stats, setStats] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    Promise.all([
      apiRequest('/backend/api/admin/stats'),
      apiRequest('/backend/api/admin/blogs?per_page=5'),
    ])
      .then(([statsResult, blogResult]) => {
        if (!active) return;
        setStats(statsResult.data);
        setBlogs(blogResult.data || []);
      })
      .catch((requestError) => {
        if (active) setError(requestError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, [apiRequest]);

  if (loading) return <div className="adm-state" role="status">Loading dashboard…</div>;
  if (error) return <div className="adm-alert adm-alert-error" role="alert">{error}</div>;

  return (
    <div className="adm-page">
      <div className="adm-page-heading">
        <div>
          <p className="adm-eyebrow">Humancare content studio</p>
          <h1>Dashboard</h1>
          <p className="adm-muted">An overview of your articles and publishing activity.</p>
        </div>
        <Link className="adm-btn adm-btn-primary" to="/admin/blogs/new"><Plus size={17} /> Create blog</Link>
      </div>

      <section className="adm-stats-grid" aria-label="Blog statistics">
        {metricCards.map(({ key, label, icon, tone }) => (
          <article className="adm-stat-card" key={key}>
            <span className={`adm-stat-icon ${tone}`}>{React.createElement(icon, { size: 21, 'aria-hidden': true })}</span>
            <div><strong className="adm-stat-val">{stats?.[key] ?? 0}</strong><span className="adm-stat-label">{label}</span></div>
          </article>
        ))}
      </section>

      <section className="adm-card">
        <div className="adm-card-header">
          <div><h2 className="adm-card-title">Recent blogs</h2><p className="adm-muted">Your latest edited content</p></div>
          <Link className="adm-text-link" to="/admin/blogs">View all <ArrowRight size={16} /></Link>
        </div>
        {blogs.length === 0 ? (
          <div className="adm-empty"><FileText size={30} /><h3>No blogs yet</h3><p>Create your first article to get started.</p><Link className="adm-btn adm-btn-primary" to="/admin/blogs/new">Create a blog</Link></div>
        ) : (
          <div className="adm-recent-list">
            {blogs.map((blog) => (
              <article className="adm-recent-item" key={blog.id}>
                <div className="adm-recent-image">
                  <img
                    src={blog.featured_image || fallbackImage}
                    alt=""
                    onError={(event) => {
                      if (event.currentTarget.dataset.fallbackApplied === 'true') return;
                      event.currentTarget.dataset.fallbackApplied = 'true';
                      event.currentTarget.src = fallbackImage;
                    }}
                  />
                </div>
                <div className="adm-recent-details">
                  <h3>{blog.title}</h3>
                  <p>{blog.category_name || 'Uncategorized'} · Updated {dateLabel(blog.updated_at)}</p>
                </div>
                <span className={`adm-badge ${blog.status}`}>{blog.status}</span>
                <Link className="adm-icon-link" to={`/admin/blogs/edit/${blog.id}`} aria-label={`Edit ${blog.title}`}><Pencil size={17} /></Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
