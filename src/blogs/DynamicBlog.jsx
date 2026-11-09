import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import NotFound from "../pages/NotFound";
import fallbackImage from "../assets/Blogs/rail-ambulance.webp";
import "./Blog1.css";
import "./DynamicBlog.css";

const SITE_ORIGIN = "https://humancaretrainambulance.com";

const ALLOWED_TAGS = new Set([
  "a", "b", "blockquote", "br", "code", "div", "em", "h2", "h3", "h4", "hr",
  "i", "img", "li", "ol", "p", "pre", "span", "strong", "table", "tbody",
  "td", "tfoot", "th", "thead", "tr", "ul", "figure", "figcaption",
]);
const DROP_WITH_CONTENT = new Set([
  "script", "style", "iframe", "object", "embed", "form", "input", "button",
  "textarea", "select", "svg", "math", "link", "meta", "base",
]);

function isSafeUrl(value) {
  const v = String(value || "").trim();
  if (!v || /\s/.test(v)) return false;
  if (v.startsWith("/") && !v.startsWith("//")) return true;
  return /^(https?:|mailto:|tel:)/i.test(v) || v.startsWith("#");
}

// Defence in depth: the API already sanitises HTML on the server; this
// allow-list pass runs again in the browser before anything is injected.
function sanitize(html) {
  const doc = new DOMParser().parseFromString(html || "", "text/html");

  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) return;
      if (child.nodeType !== 1) {
        child.remove();
        return;
      }
      const tag = child.tagName.toLowerCase();
      if (DROP_WITH_CONTENT.has(tag)) {
        child.remove();
        return;
      }
      walk(child);
      if (!ALLOWED_TAGS.has(tag)) {
        child.replaceWith(...Array.from(child.childNodes));
        return;
      }
      Array.from(child.attributes).forEach((attr) => {
        const name = attr.name.toLowerCase();
        const ok =
          (tag === "a" && name === "href" && isSafeUrl(attr.value)) ||
          (tag === "a" && name === "title") ||
          (tag === "img" && name === "src" && isSafeUrl(attr.value)) ||
          (tag === "img" && ["alt", "title", "width", "height"].includes(name)) ||
          ((tag === "td" || tag === "th") && ["colspan", "rowspan"].includes(name));
        if (!ok) child.removeAttribute(attr.name);
      });
      if (tag === "a") {
        const href = child.getAttribute("href") || "";
        child.setAttribute("rel", "noopener noreferrer");
        if (/^https?:/i.test(href) && !href.startsWith(window.location.origin)) {
          child.setAttribute("target", "_blank");
        }
      }
      if (tag === "img") child.setAttribute("loading", "lazy");
    });
  };

  walk(doc.body);
  return doc.body.innerHTML;
}

const absolute = (value) => {
  if (!value) return "";
  try {
    return new URL(value, SITE_ORIGIN).href;
  } catch {
    return "";
  }
};

const hasOwnImage = (post) =>
  Boolean(post.featured_image) && !post.featured_image.endsWith("/default.webp");

const formatDate = (value) => {
  if (!value) return "";
  const d = new Date(String(value).replace(" ", "T"));
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString();
};

function DynamicBlog() {
  const { slug } = useParams();
  const [state, setState] = useState({
    loading: true,
    post: null,
    related: [],
    error: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    setState({ loading: true, post: null, related: [], error: "" });

    fetch(`/backend/api/blogs/${encodeURIComponent(slug)}`, {
      signal: controller.signal,
    })
      .then(async (res) => {
        if (res.status === 404) {
          setState({ loading: false, post: null, related: [], error: "" });
          return;
        }
        const payload = await res.json();
        if (!res.ok || !payload.success || !payload.data) {
          throw new Error("bad response");
        }
        setState({
          loading: false,
          post: payload.data,
          related: Array.isArray(payload.related) ? payload.related : [],
          error: "",
        });
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setState({
            loading: false,
            post: null,
            related: [],
            error: "This article is temporarily unavailable. Please try again later.",
          });
        }
      });

    return () => controller.abort();
  }, [slug]);

  const { loading, post, related, error } = state;
  const html = useMemo(() => (post ? sanitize(post.content) : ""), [post]);

  if (loading) {
    return (
      <section className="dyn-blog-status" aria-live="polite">
        Loading article...
      </section>
    );
  }
  if (error) {
    return (
      <section className="dyn-blog-status" role="alert">
        {error}
      </section>
    );
  }
  if (!post) return <NotFound />;

  const meta = post.metadata || {};
  // Links added by the admin; only http(s) or site-relative URLs are rendered.
  const manualLinks = (Array.isArray(meta.related_links) ? meta.related_links : [])
    .filter((l) => l && typeof l.url === "string" && /^(\/(?!\/)|https?:\/\/)/i.test(l.url));
  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || post.title;
  const canonical =
    absolute(post.canonical_url) || `${SITE_ORIGIN}/blogs/${post.slug}`;
  const heroSrc = hasOwnImage(post) ? post.featured_image : fallbackImage;
  const shareImage = hasOwnImage(post) ? absolute(post.featured_image) : "";
  const robots = meta.meta_robots || "index, follow";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image: shareImage || undefined,
    author: { "@type": "Organization", name: post.author || "Humancare" },
    publisher: { "@type": "Organization", name: "Humancare Train Ambulance" },
    datePublished: post.published_at || undefined,
    dateModified: post.updated_at || post.published_at || undefined,
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <Helmet>
        <title>{`${title} | Humancare Blog`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.og_title || title} />
        <meta
          property="og:description"
          content={meta.og_description || description}
        />
        <meta property="og:url" content={canonical} />
        {shareImage && <meta property="og:image" content={shareImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="blog-banner-d dyn-blog-banner">
        <img
          src={heroSrc}
          alt={meta.featured_image_alt || post.title}
          className="banner-img"
          onError={(e) => {
            if (e.currentTarget.dataset.fallback) return;
            e.currentTarget.dataset.fallback = "1";
            e.currentTarget.src = fallbackImage;
          }}
        />
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className="dyn-blog-section">
        <div className="content-wrapper dyn-blog-body">
          <p className="dyn-blog-meta">
            {post.author && <span>By {post.author}</span>}
            {post.category?.name && <span>{post.category.name}</span>}
            {formatDate(post.published_at) && (
              <span>{formatDate(post.published_at)}</span>
            )}
          </p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        {(manualLinks.length > 0 || related.length > 0) && (
          <div className="dyn-blog-related">
            <h2>Related articles</h2>
            <ul>
              {manualLinks.map((l, i) => (
                <li key={`ml-${i}`}>
                  {l.url.startsWith("/") ? (
                    <Link to={l.url}>{l.title || l.url}</Link>
                  ) : (
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.title || l.url}
                    </a>
                  )}
                </li>
              ))}
              {related.map((r) => (
                <li key={r.id}>
                  <Link to={`/blogs/${encodeURIComponent(r.slug)}`}>
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="dyn-blog-back">
          <Link to="/blogs">&larr; Back to all articles</Link>
        </p>
      </section>
    </>
  );
}

export default DynamicBlog;
