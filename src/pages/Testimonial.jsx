import React from 'react';
import { Helmet } from 'react-helmet';
import './testimonial.css';
import abImage from '../assets/testimonial.png';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import {
  FaHospital,
  FaMapMarkerAlt,
  FaHeart,
  FaStar,
  FaPhoneAlt,
} from 'react-icons/fa';

const metrics = [
  { value: "100+",  label: "Hospital Partners",    icon: <FaHospital size={26} /> },
  { value: "3500+", label: "Cities Covered",        icon: <FaMapMarkerAlt size={26} /> },
  { value: "1500+", label: "Lives Touched",         icon: <FaHeart size={26} /> },
  { value: "5",     label: "Years of Excellence",   icon: <FaStar size={26} /> },
];

const partners = [
  { emoji: "🎖️", name: "AIIMS Delhi",      desc: "Premier Medical Institute" },
  { emoji: "🏥", name: "Apollo Hospitals", desc: "Multi-Specialty Chain" },
  { emoji: "🏨", name: "Fortis Healthcare",desc: "Integrated Healthcare" },
  { emoji: "🌟", name: "Max Healthcare",   desc: "Leading Hospital Group" },
];

function Testimonial() {
  return (
    <>
      <Helmet>
        <title>Train Ambulance Testimonials | Humancare Train Ambulance</title>
        <meta
          name="description"
          content="Read experiences from families and patients about Humancare Train Ambulance, trusted for safe, coordinated and medically supported train ambulance services."
        />
        <link rel="canonical" href="https://humancaretrainambulance.com/testimonials" />
      </Helmet>

      {/* ── Hero Section (home-style) ── */}
      <section className="tm-hero-section">
        <div className="tm-hero-container">
          <div className="tm-hero-grid">
            <div className="tm-hero-content">
              <h1 className="tm-hero-title">
                Trusted by Families Through Every&nbsp;Journey
              </h1>
              <h2 className="tm-hero-subtitle">
                What Families Say About Humancare Train Ambulance
              </h2>
              <p className="tm-hero-text">
                Hear what patients, families, and partners say about their
                experience with Humancare Train Ambulance — from professional
                medical support to safe and well-coordinated patient transfers
                across India.
              </p>
              <div className="tm-hero-buttons">
                <a href="tel:+919833997373" className="tm-btn-accent">
                  <FaPhoneAlt aria-hidden="true" />
                  <span>Call Us 24/7</span>
                </a>
                <a href="/contact" className="tm-btn-outline">Contact Us</a>
              </div>
              <div className="tm-hero-trust-strip">
                <span>Nationwide transfers</span>
                <span>Medical team onboard</span>
                <span>24×7 coordination</span>
              </div>
            </div>
            <div className="tm-hero-image-wrapper">
              <div className="tm-hero-card">
                <img
                  src={abImage}
                  alt="Testimonials — Humancare Train Ambulance"
                  className="tm-hero-img"
                  loading="eager"
                />
              </div>
              <div className="tm-hero-image-note">
                <span className="tm-hero-status-dot" />
                <span>
                  <strong>Trusted by 1500+ families</strong>
                  <small>Across major railway routes in India</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="tm-metrics-section">
        <div className="tm-metrics-inner">
          {metrics.map((m) => (
            <div className="tm-metric-card" key={m.label}>
              <div className="tm-metric-icon">{m.icon}</div>
              <span className="tm-metric-value">{m.value}</span>
              <span className="tm-metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials Component ── */}
      <section className="tm-reviews-section">
        <div className="tm-reviews-inner">
          <span className="tm-label">What Families Say</span>
          <h2 className="tm-section-heading">Trusted Experiences. Genuine Care.</h2>
          <p className="tm-section-desc">
            Hear from patients and families who have experienced the
            professionalism and support of Humancare Train Ambulance. Their
            experiences reflect our focus on compassionate care, careful
            coordination, and medically supported train ambulance services
            throughout long-distance journeys.
          </p>
        </div>
        <TestimonialsSection />
      </section>

      {/* ── Trusted By Healthcare Network ── */}
      <section className="tm-network-section">
        <div className="tm-network-inner">
          <span className="tm-label">Our Network</span>
          <h2 className="tm-section-heading">Trusted By Healthcare Network</h2>
          <p className="tm-section-desc">
            Partnered with leading hospitals and medical institutions across India
          </p>
          <div className="tm-partner-grid">
            {partners.map((p) => (
              <div className="tm-partner-card" key={p.name}>
                <div className="tm-partner-icon">{p.emoji}</div>
                <h3 className="tm-partner-name">{p.name}</h3>
                <p className="tm-partner-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (same as homepage) ── */}
      <section className="tm-cta-section">
        <div className="tm-cta-inner">
          <h2 className="tm-cta-title">Need a Train Ambulance Service?</h2>
          <p className="tm-cta-desc">
            Contact our team for medically supported, coordinated long-distance
            patient transfers across India. Available 24×7.
          </p>
          <div className="tm-cta-buttons">
            <a href="tel:+919833997373" className="tm-cta-accent">
              <FaPhoneAlt aria-hidden="true" />
              <span>Call Now</span>
            </a>
            <a href="/contact" className="tm-cta-outline">Send Enquiry</a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Testimonial;
