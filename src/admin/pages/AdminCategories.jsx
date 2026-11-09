import React, { useCallback, useEffect, useState } from 'react';
import { FolderOpen, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminCategories() {
  const { apiRequest } = useAuth();
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const loadCategories = useCallback(async () => {
    setLoading(true);
    try {
      const result = await apiRequest('/backend/api/admin/categories');
      setCategories(result.data || []);
      setError('');
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, [apiRequest]);

  useEffect(() => { loadCategories(); }, [loadCategories]);

  const createCategory = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const result = await apiRequest('/backend/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setForm({ name: '', description: '' });
      setNotice(result.message || 'Category created.');
      await loadCategories();
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="adm-page">
      <div className="adm-page-heading"><div><p className="adm-eyebrow">Organize content</p><h1>Categories</h1><p className="adm-muted">Create categories for your blog articles.</p></div></div>
      {error && <div className="adm-alert adm-alert-error" role="alert">{error}</div>}
      {notice && <div className="adm-alert adm-alert-success" role="status">{notice}</div>}
      <div className="adm-category-layout">
        <section className="adm-card adm-card-pad">
          <h2 className="adm-section-title">Add a category</h2>
          <form onSubmit={createCategory}>
            <div className="adm-form-group"><label className="adm-label" htmlFor="category-name">Name <span aria-hidden="true">*</span></label><input id="category-name" className="adm-input" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} required maxLength={150} /></div>
            <div className="adm-form-group"><label className="adm-label" htmlFor="category-description">Description</label><textarea id="category-description" className="adm-textarea" rows="4" value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} /></div>
            <button className="adm-btn adm-btn-primary" type="submit" disabled={saving}><Plus size={16} /> {saving ? 'Creating…' : 'Create category'}</button>
          </form>
        </section>
        <section className="adm-card">
          <div className="adm-card-header"><h2 className="adm-card-title">Existing categories</h2><span className="adm-muted">{categories.length} total</span></div>
          {loading ? <div className="adm-state" role="status">Loading categories…</div> : categories.length === 0 ? (
            <div className="adm-empty"><FolderOpen size={30} /><h2>No categories yet</h2><p>New categories will appear here.</p></div>
          ) : (
            <ul className="adm-category-list">{categories.map((category) => <li key={category.id}><span className="adm-category-icon"><FolderOpen size={19} /></span><div><strong>{category.name}</strong><small>/{category.slug}</small>{category.description && <p>{category.description}</p>}</div></li>)}</ul>
          )}
        </section>
      </div>
    </div>
  );
}
