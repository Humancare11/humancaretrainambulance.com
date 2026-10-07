import React from "react";
import { Helmet } from "react-helmet";
import abImage from "../assets/contact.png";
import "./contact.css";
import ContactSection from "../components/ContactSection";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Us | 24/7 Train Ambulance Service in India | Humancare</title>
        <meta
          name="description"
          content="Need urgent train ambulance support? Contact Humancare Worldwide for safe, quick, and affordable patient transfer by rail across India. Available 24/7."
        />
        <link rel="canonical" href="https://humancaretrainambulance.com/contact" />
      </Helmet>

      {/* ── Hero Section (Home Page Style) ── */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-hero-grid">
            <div className="contact-hero-content">
              <span className="contact-hero-label">Available 24×7 Nationwide</span>
              <h1 className="contact-hero-title">
                Contact Humancare Train Ambulance
              </h1>
              <h2 className="contact-hero-subtitle">
                24/7 Train Ambulance Services &amp; Medical Transfer Coordination Across India
              </h2>
              <p className="contact-hero-text">
                Need urgent train ambulance support? Contact Humancare Worldwide
                for safe, quick, and affordable patient transfer by rail across
                India. Available 24/7 with medical team, documentation, and
                end-to-end coordination.
              </p>

              <div className="contact-hero-buttons">
                <a href="tel:+919833997373" className="contact-btn-accent">
                  <FaPhoneAlt />
                  <span>Call Us 24/7</span>
                </a>
                <a
                  href="https://wa.me/919833997373"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn-whatsapp"
                >
                  <FaWhatsapp size={18} />
                  <span>WhatsApp Inquiry</span>
                </a>
                <a href="/about" className="contact-btn-outline">
                  <span>About Our Service</span>
                </a>
              </div>

              <div className="contact-hero-trust-strip" aria-label="Service highlights">
                <span>Immediate 30-min response</span>
                <span>Medical team onboard</span>
                <span>Pan-India IRCTC coordination</span>
              </div>
            </div>

            <div className="contact-hero-image-wrapper">
              <div className="contact-hero-card">
                <img
                  src={abImage}
                  alt="Contact Humancare Train Ambulance Services"
                  className="contact-hero-img"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="contact-hero-image-note">
                <span className="contact-hero-status-dot" />
                <span>
                  <strong>24/7 Emergency Support</strong>
                  <small>Doctors, paramedics &amp; ICU setup on rails</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-map-container">
          <div className="contact-map-card">
            <iframe
              title="Humancare Train Ambulance Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109195.66956564554!2d72.79760577689274!3d19.073156996982327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96e9733ec95%3A0xefdf92092073516a!2sHumancare%20Train%20Ambulance%20Service!5e1!3m2!1sen!2sin!4v1771396506559!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
