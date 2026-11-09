import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ImagePlus, Plus, Save, Trash2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import RichTextEditor from "../components/RichTextEditor";
import fallbackImage from "../../assets/logo.webp";

const blankBlog = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featured_image: "",
  author: "",
  category_id: "",
  tags: "",
  meta_title: "",
  meta_description: "",
  canonical_url: "",
  status: "draft",
  metadata: {
    subtitle: "",
    content_type: "Blog",
    featured_image_alt: "",
    featured_image_caption: "",
    image_credit: "",
    social_share_image: "",
    subcategory: "",
    author_designation: "",
    author_bio: "",
    medical_reviewer: "",
    reviewer_designation: "",
    review_date: "",
    reading_time: "",
    featured: false,
    publish_at: "",
    visibility: "public",
    focus_keyword: "",
    secondary_keywords: [],
    meta_robots: "index,follow",
    schema_type: "BlogPosting",
    breadcrumb_title: "",
    og_title: "",
    og_description: "",
    og_image: "",
    twitter_title: "",
    twitter_description: "",
    twitter_image: "",
    related_blog_ids: [],
    related_links: [],
    related_services: [],
    related_locations: "",
    cta_enabled: false,
    faq_enabled: false,
    cta_heading: "",
    cta_description: "",
    cta_button_text: "",
    cta_url: "",
    internal_notes: "",
    faqs: [],
  },
};

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toDateOnly(value) {
  if (!value) return "";
  return String(value).replace(" ", "T").slice(0, 10);
}

function textFromHtml(value) {
  const element = document.createElement("div");
  element.innerHTML = value || "";
  return element.textContent?.trim() || "";
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  hint,
  maxLength,
  required = false,
}) {
  return (
    <div className="adm-form-group">
      <label className="adm-label" htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          className="adm-textarea"
          rows="3"
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          maxLength={maxLength}
          required={required}
        />
      ) : (
        <input
          id={name}
          className="adm-input"
          type={type}
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          maxLength={maxLength}
          required={required}
        />
      )}
      {hint && <p className="adm-input-hint">{hint}</p>}
    </div>
  );
}

export default function AdminBlogEditor() {
  const { id } = useParams();
  const editing = Boolean(id);
  const { apiRequest, admin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ...blankBlog,
    metadata: { ...blankBlog.metadata },
    author: admin?.full_name || "Humancare",
  });
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(editing);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let active = true;
    const requests = [
      apiRequest("/backend/api/admin/categories"),
      apiRequest("/backend/api/admin/blogs?status=all&per_page=100"),
    ];
    if (editing) requests.push(apiRequest(`/backend/api/admin/blogs/${id}`));
    Promise.all(requests)
      .then(([categoryResult, blogResult, blogDetail]) => {
        if (!active) return;
        setCategories(categoryResult.data || []);
        setBlogs(
          (blogResult.data || []).filter(
            (blog) => String(blog.id) !== String(id),
          ),
        );
        if (blogDetail?.data) {
          const data = blogDetail.data;
          setSlugTouched(Boolean(data.slug));
          setForm({
            ...blankBlog,
            ...data,
            category_id: data.category_id || "",
            initial_featured_image: data.featured_image || "",
            initial_publish_at: String(
              data.metadata?.publish_at || data.published_at || "",
            ).replace("T", " "),
            metadata: {
              ...blankBlog.metadata,
              ...(data.metadata || {}),
              publish_at: toDateOnly(
                data.metadata?.publish_at || data.published_at,
              ),
            },
          });
        }
      })
      .catch((requestError) => {
        if (active) setError(requestError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [apiRequest, editing, id]);

  const updateField = (field, value) => {
    setForm((current) => {
      const updated = { ...current, [field]: value };
      if (field === "title" && !slugTouched) updated.slug = slugify(value);
      return updated;
    });
  };

  const updateMetadata = (field, value) => {
    setForm((current) => ({
      ...current,
      metadata: { ...current.metadata, [field]: value },
    }));
  };

  const estimatedReadingTime = useMemo(() => {
    const words = textFromHtml(form.content)
      .split(/\s+/)
      .filter(Boolean).length;
    return words ? `${Math.max(1, Math.ceil(words / 200))} min read` : "";
  }, [form.content]);

  const uploadImage = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (
      !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
        file.type,
      )
    ) {
      setError("Choose a JPG, PNG, GIF or WEBP image.");
      event.target.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Featured image must be no larger than 2 MB.");
      event.target.value = "";
      return;
    }
    setUploading(true);
    setError("");
    setNotice("");
    try {
      const body = new FormData();
      body.append("image", file);
      const result = await apiRequest("/backend/api/admin/upload", {
        method: "POST",
        body,
      });
      setForm((current) => ({ ...current, featured_image: result.url }));
      setNotice(
        "Featured image uploaded. Add descriptive alt text before publishing.",
      );
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const saveBlog = async (event, requestedStatus) => {
    event.preventDefault();
    setError("");
    setNotice("");
    const status = requestedStatus || form.status || "draft";
    const contentText = textFromHtml(form.content);
    if (!form.title.trim()) return setError("Blog title is required.");
    if (!form.slug.trim()) return setError("URL slug is required.");
    if (!contentText) return setError("Blog content is required.");
    if (status !== "draft" && !form.category_id)
      return setError("Choose a category before publishing.");
    if (status !== "draft" && !form.featured_image)
      return setError("Choose a featured image before publishing.");
    if (
      form.featured_image &&
      !form.metadata.featured_image_alt.trim() &&
      (!editing || form.featured_image !== form.initial_featured_image)
    ) {
      return setError("Add descriptive alt text for the featured image.");
    }
    if (
      form.canonical_url &&
      !/^\/(?!\/)|^https?:\/\/[^ ]+$/i.test(form.canonical_url.trim())
    ) {
      return setError(
        "Canonical URL must be a valid HTTP(S) URL or a site-relative path.",
      );
    }
    if (
      form.metadata.cta_enabled &&
      form.metadata.cta_url &&
      !/^\/(?!\/)|^https?:\/\/[^ ]+$/i.test(form.metadata.cta_url.trim())
    ) {
      return setError(
        "CTA URL must be a valid HTTP(S) URL or a site-relative path.",
      );
    }

    const relatedLinks = (form.metadata.related_links || [])
      .map((link) => ({
        title: String(link.title || "").trim(),
        url: String(link.url || "").trim(),
      }))
      .filter((link) => link.title || link.url);
    for (const link of relatedLinks) {
      if (!/^\/(?!\/)[^\s]*$|^https?:\/\/[^\s]+$/i.test(link.url)) {
        return setError(
          "Each related blog link needs a valid URL (https://... or a site path like /blogs/my-post).",
        );
      }
    }

    setSaving(true);
    const metadata = {
      ...form.metadata,
      related_links: relatedLinks,
      reading_time: form.metadata.reading_time || estimatedReadingTime,
      secondary_keywords: Array.isArray(form.metadata.secondary_keywords)
        ? form.metadata.secondary_keywords
        : String(form.metadata.secondary_keywords || "")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
      related_services: Array.isArray(form.metadata.related_services)
        ? form.metadata.related_services
        : String(form.metadata.related_services || "")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
      publish_at: !form.metadata.publish_at
        ? ""
        : form.initial_publish_at &&
            form.initial_publish_at.startsWith(form.metadata.publish_at)
          ? form.initial_publish_at.length === 16
            ? form.initial_publish_at + ":00"
            : form.initial_publish_at
          : form.metadata.publish_at + " 00:00:00",
    };
    const payload = {
      ...form,
      author: form.author.trim() || admin?.full_name || "Humancare",
      metadata,
      status,
    };
    if (!payload.canonical_url.trim())
      payload.canonical_url = `/blogs/${payload.slug}`;
    try {
      const result = await apiRequest(
        editing ? `/backend/api/admin/blogs/${id}` : "/backend/api/admin/blogs",
        {
          method: editing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      navigate("/admin/blogs", {
        state: {
          notice:
            result.message ||
            (status === "published" ? "Blog published." : "Draft saved."),
        },
      });
    } catch (requestError) {
      setError(requestError.message);
      setSaving(false);
      return;
    }
    setSaving(false);
  };

  const updateRelatedLink = (index, field, value) => {
    setForm((current) => {
      const links = [...(current.metadata.related_links || [])];
      links[index] = { ...links[index], [field]: value };
      return { ...current, metadata: { ...current.metadata, related_links: links } };
    });
  };

  const updateFaq = (index, field, value) => {
    const faqs = [...(form.metadata.faqs || [])];
    faqs[index] = { ...faqs[index], [field]: value };
    updateMetadata("faqs", faqs);
  };

  const moveFaq = (index, direction) => {
    const faqs = [...(form.metadata.faqs || [])];
    const target = index + direction;
    if (target < 0 || target >= faqs.length) return;
    [faqs[index], faqs[target]] = [faqs[target], faqs[index]];
    updateMetadata("faqs", faqs);
  };

  if (loading)
    return (
      <div className="adm-state" role="status">
        Loading blog…
      </div>
    );

  return (
    <div className="adm-page">
      <div className="adm-page-heading">
        <div>
          <Link className="adm-back-link" to="/admin/blogs">
            <ArrowLeft size={16} /> Back to blogs
          </Link>
          <p className="adm-eyebrow">
            {editing ? "Update article" : "Content studio"}
          </p>
          <h1>{editing ? "Edit blog" : "Create a blog"}</h1>
        </div>
      </div>
      {error && (
        <div className="adm-alert adm-alert-error" role="alert">
          {error}
        </div>
      )}
      {notice && (
        <div className="adm-alert adm-alert-success" role="status">
          {notice}
        </div>
      )}

      <form
        className="adm-editor-form"
        onSubmit={(event) => saveBlog(event, form.status)}
      >
        <div className="adm-editor-main">
          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Basic information</h2>
            <Field
              label="Blog title"
              name="blog-title"
              value={form.title}
              onChange={(value) => updateField("title", value)}
              maxLength={255}
              required
            />
            <Field
              label="Subtitle / short heading"
              name="blog-subtitle"
              value={form.metadata.subtitle}
              onChange={(value) => updateMetadata("subtitle", value)}
              maxLength={255}
            />
            <div className="adm-form-group">
              <label className="adm-label" htmlFor="blog-slug">
                URL slug <span aria-hidden="true">*</span>
              </label>
              <div className="adm-slug-field">
                <span>/blogs/</span>
                <input
                  id="blog-slug"
                  className="adm-input"
                  value={form.slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    updateField("slug", slugify(event.target.value));
                  }}
                  required
                  maxLength={255}
                />
              </div>
              <p className="adm-input-hint">
                Slugs are checked for uniqueness when you save.
              </p>
            </div>
            <Field
              label="Excerpt"
              name="blog-excerpt"
              type="textarea"
              value={form.excerpt}
              onChange={(value) => updateField("excerpt", value)}
              hint="Used on blog cards and as a metadata fallback."
            />
            <div className="adm-form-group">
              <label className="adm-label" htmlFor="content-type">
                Content type
              </label>
              <select
                id="content-type"
                className="adm-select"
                value={form.metadata.content_type}
                onChange={(event) =>
                  updateMetadata("content_type", event.target.value)
                }
              >
                {[
                  "Blog",
                  "Guide",
                  "News",
                  "Announcement",
                  "FAQ",
                  "Case Study",
                  "Other",
                ].map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
          </section>

          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Article content</h2>
            <div className="adm-form-group">
              <label className="adm-label">
                Content <span aria-hidden="true">*</span>
              </label>
              <RichTextEditor
                value={form.content}
                onChange={(content) => updateField("content", content)}
                invalid={!contentTextForValidation(form.content)}
              />
              <p className="adm-input-hint">
                Estimated reading time:{" "}
                {estimatedReadingTime || "Add content to calculate"}
              </p>
            </div>
          </section>

          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Featured image and media</h2>
            {form.featured_image ? (
              <img
                className="adm-featured-preview"
                src={form.featured_image}
                alt={
                  form.metadata.featured_image_alt || "Featured image preview"
                }
                onError={(event) => {
                  event.currentTarget.src = fallbackImage;
                }}
              />
            ) : (
              <div className="adm-image-placeholder">
                <ImagePlus size={27} />
                <span>No image selected</span>
              </div>
            )}
            <label
              className="adm-btn adm-btn-secondary adm-upload-button"
              htmlFor="featured-image"
            >
              <ImagePlus size={16} />{" "}
              {uploading ? "Uploading…" : "Choose image"}
            </label>
            <input
              id="featured-image"
              className="adm-sr-file"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={uploadImage}
              disabled={uploading}
            />
            <p className="adm-input-hint">
              JPG, PNG, GIF or WEBP. Maximum 2 MB.
            </p>
            <Field
              label="Featured image alt text"
              name="image-alt"
              value={form.metadata.featured_image_alt}
              onChange={(value) => updateMetadata("featured_image_alt", value)}
              required={Boolean(form.featured_image)}
            />
            <Field
              label="Image caption"
              name="image-caption"
              value={form.metadata.featured_image_caption}
              onChange={(value) =>
                updateMetadata("featured_image_caption", value)
              }
            />
          </section>

          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Article details</h2>
            <div className="adm-form-group">
              <label className="adm-label" htmlFor="blog-category">
                Category <span aria-hidden="true">*</span>
              </label>
              <select
                id="blog-category"
                className="adm-select"
                value={form.category_id || ""}
                onChange={(event) =>
                  updateField("category_id", event.target.value)
                }
              >
                <option value="">Uncategorized</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">SEO and search appearance</h2>
            <Field
              label="SEO title"
              name="meta-title"
              value={form.meta_title}
              onChange={(value) => updateField("meta_title", value)}
              maxLength={255}
              hint={`${(form.meta_title || "").length}/60 recommended characters.`}
            />
            <Field
              label="SEO description"
              name="meta-description"
              type="textarea"
              value={form.meta_description}
              onChange={(value) => updateField("meta_description", value)}
              hint={`${(form.meta_description || "").length}/160 recommended characters.`}
            />
            <Field
              label="Focus keyword"
              name="focus-keyword"
              value={form.metadata.focus_keyword}
              onChange={(value) => updateMetadata("focus_keyword", value)}
            />
            <Field
              label="Secondary keywords"
              name="secondary-keywords"
              value={(form.metadata.secondary_keywords || []).join(", ")}
              onChange={(value) => updateMetadata("secondary_keywords", value)}
              hint="Separate keywords with commas."
            />
            <Field
              label="Canonical URL"
              name="canonical-url"
              value={form.canonical_url}
              onChange={(value) => updateField("canonical_url", value)}
              hint={`Defaults to /blogs/${form.slug || "your-slug"}.`}
            />
            <div className="adm-form-group">
              <label className="adm-label" htmlFor="meta-robots">
                Meta robots
              </label>
              <select
                id="meta-robots"
                className="adm-select"
                value={form.metadata.meta_robots}
                onChange={(event) =>
                  updateMetadata("meta_robots", event.target.value)
                }
              >
                <option value="index,follow">Index, Follow</option>
                <option value="noindex,follow">No Index, Follow</option>
                <option value="index,nofollow">Index, No Follow</option>
                <option value="noindex,nofollow">No Index, No Follow</option>
              </select>
            </div>
            <div className="adm-form-group">
              <label className="adm-label" htmlFor="schema-type">
                Schema type
              </label>
              <select
                id="schema-type"
                className="adm-select"
                value={form.metadata.schema_type}
                onChange={(event) =>
                  updateMetadata("schema_type", event.target.value)
                }
              >
                <option>BlogPosting</option>
                <option>Article</option>
                <option>NewsArticle</option>
                <option>FAQPage</option>
              </select>
            </div>
            {/* <Field label="Breadcrumb title" name="breadcrumb-title" value={form.metadata.breadcrumb_title} onChange={(value) => updateMetadata('breadcrumb_title', value)} /> */}
          </section>

          {/* <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Social sharing</h2>
            <Field
              label="Open Graph title"
              name="og-title"
              value={form.metadata.og_title}
              onChange={(value) => updateMetadata("og_title", value)}
            />
            <Field
              label="Open Graph description"
              name="og-description"
              type="textarea"
              value={form.metadata.og_description}
              onChange={(value) => updateMetadata("og_description", value)}
            />
            <Field
              label="Open Graph image URL"
              name="og-image"
              value={form.metadata.og_image}
              onChange={(value) => updateMetadata("og_image", value)}
            />
            <Field
              label="Twitter/X title"
              name="twitter-title"
              value={form.metadata.twitter_title}
              onChange={(value) => updateMetadata("twitter_title", value)}
            />
            <Field
              label="Twitter/X description"
              name="twitter-description"
              type="textarea"
              value={form.metadata.twitter_description}
              onChange={(value) => updateMetadata("twitter_description", value)}
            />
            <Field
              label="Twitter/X image URL"
              name="twitter-image"
              value={form.metadata.twitter_image}
              onChange={(value) => updateMetadata("twitter_image", value)}
            />
          </section> */}
        </div>

        <aside className="adm-editor-sidebar">
          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Publishing</h2>
            <Field
              label="Publish date"
              name="publish-at"
              type="date"
              value={form.metadata.publish_at}
              onChange={(value) => updateMetadata("publish_at", value)}
            />
            <div className="adm-publish-actions">
              <button
                type="button"
                className="adm-btn adm-btn-secondary"
                disabled={saving || uploading}
                onClick={(event) => saveBlog(event, "draft")}
              >
                <Save size={16} /> Save draft
              </button>
              <button
                type="button"
                className="adm-btn adm-btn-primary"
                disabled={saving || uploading}
                onClick={(event) => saveBlog(event, "published")}
              >
                {saving ? "Saving…" : "Save / Publish"}
              </button>
            </div>
            {saving && (
              <p className="adm-input-hint" role="status">
                Saving changes…
              </p>
            )}
          </section>

          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Related content</h2>
            <div className="adm-form-group">
              <label className="adm-label" htmlFor="related-blogs">
                Related blogs
              </label>
              <select
                id="related-blogs"
                className="adm-select adm-multi-select"
                multiple
                value={(form.metadata.related_blog_ids || []).map(String)}
                onChange={(event) =>
                  updateMetadata(
                    "related_blog_ids",
                    Array.from(event.target.selectedOptions, (option) =>
                      Number(option.value),
                    ),
                  )
                }
              >
                {blogs.map((blog) => (
                  <option key={blog.id} value={blog.id}>
                    {blog.title}
                  </option>
                ))}
              </select>
              <p className="adm-input-hint">
                Use Ctrl or Command to select multiple articles.
              </p>
            </div>
            <div className="adm-form-group">
              <span className="adm-label">Related blog links</span>
              {(form.metadata.related_links || []).map((link, index) => (
                <div className="adm-faq-editor-item" key={`rl-${index}`}>
                  <Field
                    label={`Link ${index + 1} title`}
                    name={`related-link-title-${index}`}
                    value={link.title}
                    onChange={(value) => updateRelatedLink(index, "title", value)}
                  />
                  <Field
                    label="URL (https://... or /blogs/post-slug)"
                    name={`related-link-url-${index}`}
                    value={link.url}
                    onChange={(value) => updateRelatedLink(index, "url", value)}
                  />
                  <div className="adm-faq-controls">
                    <button
                      type="button"
                      className="adm-btn adm-btn-danger adm-btn-sm"
                      onClick={() =>
                        setForm((current) => ({
                          ...current,
                          metadata: {
                            ...current.metadata,
                            related_links: (
                              current.metadata.related_links || []
                            ).filter((_, linkIndex) => linkIndex !== index),
                          },
                        }))
                      }
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="adm-btn adm-btn-secondary"
                onClick={() =>
                  setForm((current) => ({
                    ...current,
                    metadata: {
                      ...current.metadata,
                      related_links: [
                        ...(current.metadata.related_links || []),
                        { title: "", url: "" },
                      ],
                    },
                  }))
                }
              >
                <Plus size={16} /> Add related blog link
              </button>
              <p className="adm-input-hint">
                Shown under "Related articles" on the blog page.
              </p>
            </div>
            <Field
              label="Related services"
              name="related-services"
              value={(form.metadata.related_services || []).join(", ")}
              onChange={(value) => updateMetadata("related_services", value)}
              hint="Enter service names separated by commas."
            />
            <Field
              label="Related locations"
              name="related-locations"
              value={form.metadata.related_locations}
              onChange={(value) => updateMetadata("related_locations", value)}
            />
          </section>

          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">FAQ</h2>
            <label className="adm-checkbox-label">
              <input
                type="checkbox"
                checked={Boolean(form.metadata.faq_enabled)}
                onChange={(event) =>
                  updateMetadata("faq_enabled", event.target.checked)
                }
              />{" "}
              Enable FAQ section
            </label>
            {(form.metadata.faqs || []).map((faq, index) => (
              <div className="adm-faq-editor-item" key={`faq-${index}`}>
                <Field
                  label={`Question ${index + 1}`}
                  name={`faq-question-${index}`}
                  value={faq.question}
                  onChange={(value) => updateFaq(index, "question", value)}
                />
                <Field
                  label="Answer"
                  name={`faq-answer-${index}`}
                  type="textarea"
                  value={faq.answer}
                  onChange={(value) => updateFaq(index, "answer", value)}
                />
                <div className="adm-faq-controls">
                  <button
                    type="button"
                    className="adm-btn adm-btn-secondary adm-btn-sm"
                    onClick={() => moveFaq(index, -1)}
                    disabled={index === 0}
                  >
                    Move up
                  </button>
                  <button
                    type="button"
                    className="adm-btn adm-btn-secondary adm-btn-sm"
                    onClick={() => moveFaq(index, 1)}
                    disabled={index === form.metadata.faqs.length - 1}
                  >
                    Move down
                  </button>
                  <button
                    type="button"
                    className="adm-btn adm-btn-danger adm-btn-sm"
                    onClick={() =>
                      updateMetadata(
                        "faqs",
                        form.metadata.faqs.filter(
                          (_, faqIndex) => faqIndex !== index,
                        ),
                      )
                    }
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="adm-btn adm-btn-secondary"
              onClick={() =>
                updateMetadata("faqs", [
                  ...(form.metadata.faqs || []),
                  { question: "", answer: "" },
                ])
              }
            >
              <Plus size={16} /> Add FAQ
            </button>
          </section>

          <section className="adm-card adm-card-pad">
            <h2 className="adm-section-title">Call to action</h2>
            <label className="adm-checkbox-label">
              <input
                type="checkbox"
                checked={Boolean(form.metadata.cta_enabled)}
                onChange={(event) =>
                  updateMetadata("cta_enabled", event.target.checked)
                }
              />{" "}
              Enable CTA section
            </label>
            {form.metadata.cta_enabled && (
              <>
                <Field
                  label="CTA heading"
                  name="cta-heading"
                  value={form.metadata.cta_heading}
                  onChange={(value) => updateMetadata("cta_heading", value)}
                />
                <Field
                  label="CTA description"
                  name="cta-description"
                  type="textarea"
                  value={form.metadata.cta_description}
                  onChange={(value) => updateMetadata("cta_description", value)}
                />
                <Field
                  label="CTA button text"
                  name="cta-button"
                  value={form.metadata.cta_button_text}
                  onChange={(value) => updateMetadata("cta_button_text", value)}
                />
                <Field
                  label="CTA URL"
                  name="cta-url"
                  value={form.metadata.cta_url}
                  onChange={(value) => updateMetadata("cta_url", value)}
                />
              </>
            )}
          </section>
        </aside>
      </form>
    </div>
  );
}

function contentTextForValidation(value) {
  return textFromHtml(value);
}
