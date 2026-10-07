import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Calendar, ArrowRight } from "lucide-react";
import blog1 from "../assets/Blogs/what-makes-humancare-the-best-rail-ambulance-service-in-india.webp";
import blog2 from "../assets/Blogs/train-ambulance-charges-vs-air-ambulance-cost.webp";
import blog3 from "../assets/Blogs/irctc-train-ambulance-booking-guide.webp";
import blog4 from "../assets/Blogs/inside-a-train-ambulance-services.webp";
import blog5 from "../assets/Blogs/train-ambulance-service-in-varanasi.webp";
import blog6 from "../assets/Blogs/humancare-train-ambulance-from-kolkata-to-vellore.webp";
import blog7 from "../assets/Blogs/rail-ambulance.webp";
import blog8 from "../assets/Blogs/what-is-a-train-ambulance.webp";
import blog9 from "../assets/Blogs/how-does-a-train-ambulance-work.webp";
import blog10 from "../assets/Blogs/train-ambulance-eligibility.webp";
import blog11 from "../assets/Blogs/rail-ambulance-service.webp";
import blog12 from "../assets/Blogs/mumbai-train-ambulance.webp";
import blog13 from "../assets/Blogs/vellore-train-ambulance.webp";

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
      link: "/blogs/what-makes-humancare-the-best-rail-ambulance-service-in-india",
    },
    {
      id: 2,
      title:
        "Train Ambulance Charges vs Air Ambulance Cost: Which Is More Budget-Friendly?",
      excerpt:
        "Humancare offers India’s most affordable and reliable train ambulance service, providing ICU-level care at a fraction of air ambulance costs. With transparent pricing and nationwide IRCTC support, it ensures safe, comfortable, and budget-friendly patient transfers.",
      image: blog2,
      date: "2025-10-22",
      link: "/blogs/train-ambulance-charges-vs-air-ambulance-cost",
    },
    {
      id: 3,
      title:
        "IRCTC Train Ambulance Booking Guide: Cost, Process, and Facilities",
      excerpt:
        "Humancare simplifies IRCTC train ambulance booking with transparent costs, ICU-equipped coaches, and 24/7 medical care. It ensures safe, affordable, and seamless long-distance patient transfers across India.",
      image: blog3,
      date: "2025-11-06",
      link: "/blogs/irctc-train-ambulance-booking-guide",
    },
    {
      id: 4,
      title:
        "Inside a Train Ambulance: How ICU Care Travels Across India on Rails",
      excerpt:
        "A train ambulance is not just a regular train journey. It’s a specially arranged medical setup inside a train coach where a patient travels under constant supervision.",
      image: blog4,
      date: "2026-01-12",
      link: "/blogs/inside-a-train-ambulance",
    },
    {
      id: 5,
      title:
        "Train Ambulance Service in Varanasi: Complete Guide for Long-Distance Patient Transfer",
      excerpt:
        "Medical emergencies rarely give families time to prepare. One unexpected diagnosis, a sudden accident, a major surgery, or a critical illness can quickly lead to another difficult decision.",
      image: blog5,
      date: "2026-08-03",
      link: "/blogs/train-ambulance-service-in-varanasi",
    },
    {
      id: 6,
      title:
        "Train Ambulance from Kolkata to Vellore: Cost, Booking Process & ICU Patient Transfer",
      excerpt:
        "Travelling by train from Kolkata to Vellore in a medical ambu-train is done for transporting critically ill patients over this long distance with continuous medical assistance.",
      image: blog6,
      date: "2026-08-25",
      link: "/blogs/train-ambulance-from-kolkata-to-vellore",
    },
    {
      id: 7,
      title:
        "Train Ambulance Services in India: Complete Guide to Long-Distance Patient Transfers",
      excerpt:
        "Train ambulance service is considered an excellent and cost-effective solution in India for such long-distance patient transfers. It's essentially the merger of a train with ambulance services.",
      image: blog7,
      date: "2026-08-31",
      link: "/blogs/train-ambulance-service-in-india",
    },
    {
      id: 8,
      title:
        "What Is a Train Ambulance? How Medical Train Transfers Work in India",
      excerpt:
        "If a patient is physically unable to undertake their own travel, a long-distance medical conveyance may present challenges. Patients who are bed-locked, post-operative, need oxygen, or require doctor presence.",
      image: blog8,
      date: "2026-09-02",
      link: "/blogs/what-is-train-ambulance",
    },
    {
      id: 9,
      title:
        "How Does a Train Ambulance Work? From Hospital Pickup to Final Handover",
      excerpt:
        "The transfer of an ill patient over a long distance is more than just taking them from city A to city B. Learn how bedridden, oxygen-dependent, or critical patients are moved seamlessly.",
      image: blog9,
      date: "2026-09-04",
      link: "/blogs/train-ambulance-process",
    },
    {
      id: 10,
      title:
        "Who Can Travel by Train Ambulance? A Guide for Patients and Families in India",
      excerpt:
        "If a medical traveler has to go to another city for treatment, explore who is clinically eligible for train transfers and how safety is ensured throughout the journey.",
      image: blog10,
      date: "2026-09-08",
      link: "/blogs/train-ambulance-eligibility",
    },
    {
      id: 11,
      title:
        "Is Train Ambulance Safe for Patients? What Families Should Know Before a Medical Rail Transfer",
      excerpt:
        "When a patient needs to travel for treatment, family concern for safety is primary. Learn how ICU equipment, trained doctors, and railway coordination maintain stability.",
      image: blog11,
      date: "2026-09-11",
      link: "/blogs/train-ambulance-safety",
    },
    {
      id: 12,
      title:
        "Train Ambulance for Bedridden Patients: A Practical Guide to Long-Distance Medical Travel",
      excerpt:
        "If a patient is confined to a bed, taking train trips and changing stations becomes difficult. Learn how train ambulance services coordinate bed-to-bed transfers across India.",
      image: blog12,
      date: "2026-09-14",
      link: "/blogs/train-ambulance-for-bedridden-patients",
    },
    {
      id: 13,
      title:
        "Train Ambulance with Ventilator Support: A Guide to Safe Medical Rail Transfers in India",
      excerpt:
        "If a patient needs ventilator assistance, learn how train ambulance services support ventilator-dependent patients with oxygen, monitoring, medical staff, power backup, and ground transfers.",
      image: blog13,
      date: "2026-09-18",
      link: "/blogs/train-ambulance-ventilator-support",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Train Ambulance Blog | Medical Transport Insights | Humancare</title>
        <meta
          name="description"
          content="Explore expert insights, healthcare guidance, and useful information about train ambulance services, patient transportation, and long-distance medical transfers."
        />
        <link rel="canonical" href="https://humancaretrainambulance.com/blogs" />
      </Helmet>

      {/* ✅ Blog Banner */}
      <div className="blog-banner">
        <span className="blog-banner-tag">Knowledge &amp; Resources</span>
        <h1 className="blog-banner-title">Our Blog</h1>
        <h2 className="blog-banner-subtitle">
          Insights for Better Medical Transportation
        </h2>
        <p className="blog-banner-desc">
          Explore expert guidance, patient transportation information,
          healthcare insights, and the latest knowledge about train ambulance
          services and medically supported long-distance transfers.
        </p>
      </div>

      {/* ✅ Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link to={post.link} key={post.id} className="blog-card">
                <div className="blog-img-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                    loading="lazy"
                  />
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

                  <span className="blog-btn">
                    Read More <ArrowRight size={16} className="arrow-icon" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
