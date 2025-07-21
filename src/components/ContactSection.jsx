import React from 'react';
import './ContactSection.css'; // Import the CSS file

const ContactSection = () => {
  return (
    <div className="contact-section-container">
      {/* Left Column: Text and Contact Info */}
      <div className="contact-info-column">
        <h2 className="contact-title">
          Talk With <span className="highlight-text">Experts</span>
        </h2>
        <p className="contact-description">
          We provide a full range of emergency and medical services designed to meet all your healthcare needs with professional excellence.
        </p>
        <div className="contact-details">
          <p>
            <span role="img" aria-label="India flag">🇮🇳</span> India: +91 96 999 99 065
          </p>
          <p>
            <span role="img" aria-label="UAE flag">🇦🇪</span> UAE: +971 585787878
          </p>
          <p>
            <span role="img" aria-label="Email icon">✉️</span> Email: ops@humancareworldwide.com
          </p>
        </div>
        <p className="company-name">Humancare Medical Services</p>
        <div className="action-buttons">
          <button className="call-now-button">
            <span role="img" aria-label="Call icon">📞</span> Call Now
          </button>
          <button className="whatsapp-button">
            <span role="img" aria-label="WhatsApp icon">💬</span> WhatsApp Us
          </button>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="contact-form-column">
        <form className="contact-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="text" placeholder="Number" className="form-input" />
          <select className="form-input form-select">
            <option value="">--Please choose an option--</option>
            <option value="emergency">Emergency Medical Services</option>
            <option value="air-ambulance">Air Ambulance</option>
            <option value="medical-evacuation">Medical Evacuation</option>
            <option value="other">Other Inquiry</option>
          </select>
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <button type="submit" className="send-enquiry-button">Send Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;