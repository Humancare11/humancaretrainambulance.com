import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpeg";
import blog4 from "../assets/Train Ambulance Services.webp";



import "./Blogs.css";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "What Makes Humancare the Best Rail Ambulance Service in India",
      excerpt:
        "Humancare World Wide offers safe, affordable, and ICU-equipped train ambulance services across India with expert care and seamless IRCTC coordination.",
      image: blog1,
      date: "2025-09-01",
      link: "/blog1",
    },
    {
      id: 2,
      title: "Train Ambulance Charges vs Air Ambulance Cost: Which Is More Budget-Friendly?",
      excerpt:
        "Humancare offers India’s most affordable and reliable train ambulance service, providing ICU-level care at a fraction of air ambulance costs. With transparent pricing and nationwide IRCTC support, it ensures safe, comfortable, and budget-friendly patient transfers.",
      image: blog2,
      date: "2025-10-22",
      link: "/blog2",
    },
    {
      id: 3,
      title: "IRCTC Train Ambulance Booking Guide: Cost, Process, and Facilities",
      excerpt:
        "Humancare simplifies IRCTC train ambulance booking with transparent costs, ICU-equipped coaches, and 24/7 medical care. It ensures safe, affordable, and seamless long-distance patient transfers across India.",
      image: blog3,
      date: "2025-11-06",
      link: "/blog3",
    },
    {
      id: 4,
      title: "Inside a Train Ambulance: How ICU Care Travels Across India on Rails",
      excerpt:
        "A train ambulance is not just a regular train journey. It’s a specially arranged medical setup inside a train coach where a patient travels under constant supervision.",
      image: blog4 ,
      date: "2026-01-12",
      link: "/blog4",
    },
  ];

  return (
    <>
      {/* ✅ Blog Banner */}
      <div className="blog-banner">
        <h1 className="blog-banner-title">Our Blog</h1>
        <p className="blog-banner-subtitle">
          Explore expert insights, healthcare updates, and medical transport knowledge.
        </p>
      </div>

      {/* ✅ Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-img-container">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <div className="blog-title-overlay">
                    <h3>{post.title}</h3>
                  </div>
                </div>

                <div className="blog-content">
                  <p className="blog-excerpt">{post.excerpt}</p>

                  <div className="blog-meta">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  <Link to={post.link} className="blog-btn">
                    Read More <ArrowRight size={16} className="arrow-icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
