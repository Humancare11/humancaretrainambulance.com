import React from "react";
import { Link } from "react-router-dom";
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
      link: "/what-makes-humancare-the-best-rail-ambulance-service-in-india",
    },
    {
      id: 2,
      title:
        "Train Ambulance Charges vs Air Ambulance Cost: Which Is More Budget-Friendly?",
      excerpt:
        "Humancare offers India’s most affordable and reliable train ambulance service, providing ICU-level care at a fraction of air ambulance costs. With transparent pricing and nationwide IRCTC support, it ensures safe, comfortable, and budget-friendly patient transfers.",
      image: blog2,
      date: "2025-10-22",
      link: "/train-ambulance-charges-vs-air-ambulance-cost",
    },
    {
      id: 3,
      title:
        "IRCTC Train Ambulance Booking Guide: Cost, Process, and Facilities",
      excerpt:
        "Humancare simplifies IRCTC train ambulance booking with transparent costs, ICU-equipped coaches, and 24/7 medical care. It ensures safe, affordable, and seamless long-distance patient transfers across India.",
      image: blog3,
      date: "2025-11-06",
      link: "/irctc-train-ambulance-booking-guide",
    },
    {
      id: 4,
      title:
        "Inside a Train Ambulance: How ICU Care Travels Across India on Rails",
      excerpt:
        "A train ambulance is not just a regular train journey. It’s a specially arranged medical setup inside a train coach where a patient travels under constant supervision.",
      image: blog4,
      date: "2026-01-12",
      link: "/inside-a-train-ambulance",
    },
    {
      id: 5,
      title:
        "Train Ambulance Service in Varanasi: Complete Guide for Long-Distance Patient Transfer",
      excerpt:
        "Medical emergencies rarely give families time to prepare. One unexpected diagnosis, a sudden accident, a major surgery, or a critical illness can quickly lead to another difficult decision. ",
      image: blog5,
      date: "2026-08-03",
      link: "/train-ambulance-service-in-varanasi",
    },
    {
      id: 6,
      title:
        "Train Ambulance from Kolkata to Vellore: Cost, Booking Process & ICU Patient Transfer",
      excerpt:
        "Travelling by train from Kolkata to Vellore in a medical ambu-train is done for transporting critically/To be exact ill patients over this long distance with continuous medical assistance. ",
      image: blog6,
      date: "2026-08-25",
      link: "/train-ambulance-from-kolkata-to-vellore",
    },
    {
      id: 7,
      title:
        "Train Ambulance Services in India: Complete Guide to Long-Distance Patient Transfers",
      excerpt:
        "Train ambulance service is considered an excellent and cost-effective solution in India for such long-distance patient transfers.It's essentially the merger of a train with ambulance services.",
      image: blog7,
      date: "2026-08-31",
      link: "/train-ambulance-service-in-india",
    },
    {
      id: 8,
      title:
        "What Is a Train Ambulance? How Medical Train Transfers Work in India",
      excerpt:
        "If a patient is physically unable to undertake their own travel, a long-distance medical conveyance may present challenges. Patients who are bed-locked, post-operative, need a supply of oxygen, or need a doctor's presence throughout their journey may not be well catered for on a regular train trip.",
      image: blog8,
      date: "2026-09-02",
      link: "/what-is-train-ambulance",
    },
    {
      id: 9,
      title:
        "How Does a Train Ambulance Work? From Hospital Pickup to Final Handover",
      excerpt:
        "The transfer of an ill patient over a long distance is more than just taking them from city A to city B. If a patient is completely bedridden, needs oxygen, is on regular medication or requires medical monitoring while traveling",
      image: blog9,
      date: "2026-09-04",
      link: "/train-ambulance-process",
    },
    {
      id: 10,
      title:
        "Who Can Travel by Train Ambulance? A Guide for Patients and Families in India",
      excerpt:
        "If a medical traveler has to go to another city for treatment, it is the question “can he/she make the trip safely without risking any complications?” that comes first more often than knowing about the destination city.",
      image: blog10,
      date: "2026-09-08",
      link: "/train-ambulance-eligibility",

    },
    {
      id: 11,
      title:
        "Is Train Ambulance Safe for Patients? What Families Should Know Before a Medical Rail Transfer",
      excerpt:
        "When a patient needs to travel from the city of their residence to that of the hospital for treatment, there is generally only one fear of the family members: are we sure the patient will be safe along the journey? To a family of such a patient, the safety of the patient is of utmost concern, and it is natural.",
      image: blog11,
      date: "2026-09-11",
      link: "/train-ambulance-safety",
    },
  ];

  return (
    <>
      {/* ✅ Blog Banner */}
      <div className="blog-banner">
        <h1 className="blog-banner-title">Our Blog</h1>
        <p className="blog-banner-subtitle">
          Explore expert insights, healthcare updates, and medical transport
          knowledge.
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
