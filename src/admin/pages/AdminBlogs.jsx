import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Eye, FileText, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import fallbackImage from '../../assets/logo.webp';
import staticBlogs from '../staticBlogs';

function dateLabel(value) {
  return value ? new Date(value.replace(' ', 'T')).toLocaleDateString() : '—';
}

export default function AdminBlogs() {
  const { apiRequest } = useAuth();
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState(location.state?.notice || '');

  const loadBlogs = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const query = new URLSearchParams({ per_page: '100', status, search });
      const result = await apiRequest(`/backend/api/admin/blogs?${query}`);
      setBlogs(result.data || []);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, [apiRequest, search, status]);

  useEffect(() => { loadBlogs(); }, [loadBlogs]);

  const updateStatus = async (blog) => {
    setBusyId(blog.id);
    setError('');
    setNotice('');
    try {
      const action = blog.status === 'published' ? 'unpublish' : 'publish';
      const result = await apiRequest(`/backend/api/admin/blogs/${blog.id}/${action}`, { method: 'POST' });
      setNotice(result.message || `Blog ${action === 'publish' ? 'published' : 'moved to drafts'}.`);
      await loadBlogs();
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setBusyId(null);
    }
  };

  const deleteBlog = async (blog) => {
    if (!window.confirm('Are you sure you want to permanently delete this blog?')) return;
    setBusyId(blog.id);
    setError('');
    setNotice('');
    try {
      const result = await apiRequest(`/backend/api/admin/blogs/${blog.id}`, { method: 'DELETE' });
      setBlogs((current) => current.filter((item) => item.id !== blog.id));
      setNotice(result.message || 'Blog deleted.');
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setBusyId(null);
    }
  };

  const needle = search.trim().toLowerCase();
  const existingBlogs = status === 'all' || status === 'published'
    ? staticBlogs.filter((item) => !needle || item.title.toLowerCase().includes(needle) || item.slug.includes(needle))
    : [];

  return (
    <div className="adm-page">
      <div className="adm-page-heading">
        <div><p className="adm-eyebrow">Content library</p><h1>Blog management</h1><p className="adm-muted">Review, edit and publish your articles.</p></div>
        <Link className="adm-btn adm-btn-primary" to="/admin/blogs/new"><Plus size={17} /> Create blog</Link>
      </div>
      {error && <div className="adm-alert adm-alert-error" role="alert">{error}</div>}
      {notice && <div className="adm-alert adm-alert-success" role="status">{notice}</div>}

      <section className="adm-card">
        <div className="adm-toolbar">
          <label className="adm-search-wrap">
            <Search size={17} className="adm-search-icon" aria-hidden="true" />
            <span className="sr-only">Search blogs</span>
            <input className="adm-search-input" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by title or excerpt" />
          </label>
          <label className="sr-only" htmlFor="blog-status-filter">Filter by status</label>
          <select id="blog-status-filter" className="adm-select adm-status-filter" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">All statuses</option><option value="published">Published</option><option value="scheduled">Scheduled</option><option value="pending_review">Pending review</option><option value="draft">Draft</option><option value="archived">Archived</option>
          </select>
        </div>
        {loading ? <div className="adm-state" role="status">Loading blogs…</div> : blogs.length === 0 ? (
          <div className="adm-empty"><FileText size={30} /><h2>No blogs found</h2><p>Try another filter or create a new blog.</p></div>
        ) : (
          <div className="adm-blog-grid">
            {blogs.map((blog) => (
              <article className="adm-blog-card" key={blog.id}>
                <div className="adm-blog-card-image">
                  <img
                    src={blog.featured_image || fallbackImage}
                    alt=""
                    onError={(event) => {
                      if (event.currentTarget.dataset.fallbackApplied === 'true') return;
                      event.currentTarget.dataset.fallbackApplied = 'true';
                      event.currentTarget.src = fallbackImage;
                    }}
                  />
                  <span className={`adm-badge ${blog.status}`}>{blog.status}</span>
                </div>
                <div className="adm-blog-card-content">
                  <h2>{blog.title}</h2>
                  <p className="adm-blog-slug">/{blog.slug}</p>
                  <dl className="adm-blog-meta">
                    <div><dt>Category</dt><dd>{blog.category_name || 'Uncategorized'}</dd></div>
                    <div><dt>Published</dt><dd>{dateLabel(blog.published_at)}</dd></div>
                    <div><dt>Updated</dt><dd>{dateLabel(blog.updated_at)}</dd></div>
                  </dl>
                  <div className="adm-blog-actions">
                    {blog.status === 'published' && <Link className="adm-btn adm-btn-secondary adm-btn-sm" to={`/blogs/${encodeURIComponent(blog.slug)}`} target="_blank" rel="noreferrer"><Eye size={15} /> View</Link>}
                    <Link className="adm-btn adm-btn-secondary adm-btn-sm" to={`/admin/blogs/edit/${blog.id}`}><Pencil size={15} /> Edit</Link>
                    {blog.status !== 'archived' && <button type="button" className={`adm-btn ${blog.status === 'published' ? 'adm-btn-secondary' : 'adm-btn-success'} adm-btn-sm`} disabled={busyId === blog.id} onClick={() => updateStatus(blog)}>{blog.status === 'published' ? 'Unpublish' : 'Publish'}</button>}
                    <button type="button" className="adm-btn adm-btn-danger adm-btn-sm" disabled={busyId === blog.id} onClick={() => deleteBlog(blog)} aria-label={`Delete ${blog.title}`}><Trash2 size={15} /> Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {existingBlogs.length > 0 && (
        <section className="adm-card adm-card-pad" style={{ marginTop: 24 }}>
          <h2 className="adm-section-title">Existing website blogs ({existingBlogs.length})</h2>
          <p className="adm-muted" style={{ marginBottom: 16 }}>These pages were written in code and are live on the website. They are shown here for reference and can’t be edited or deleted from the dashboard.</p>
          <div className="adm-blog-grid">
            {existingBlogs.map((item) => (
              <article className="adm-blog-card" key={item.slug}>
                <div className="adm-blog-card-image">
                  <img src={item.image} alt="" />
                  <span className="adm-badge published">published</span>
                </div>
                <div className="adm-blog-card-content">
                  <h2>{item.title}</h2>
                  <p className="adm-blog-slug">/{item.slug}</p>
                  <dl className="adm-blog-meta">
                    <div><dt>Category</dt><dd>Existing page</dd></div>
                    <div><dt>Published</dt><dd>{dateLabel(item.date)}</dd></div>
                  </dl>
                  <div className="adm-blog-actions">
                    <Link className="adm-btn adm-btn-secondary adm-btn-sm" to={`/blogs/${item.slug}`} target="_blank" rel="noreferrer"><Eye size={15} /> View</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
