import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://humancaretrainambulance.com/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (result.status === 'success') {
        setStatus({ type: 'success', message: result.message || 'Message sent successfully!' });
        setFormData({
          name: '',
          email: '',
          number: '',
          service: '',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    }
  };

  return (
    <div className="contact-section-container">
      {/* Left Column */}
      <div className="contact-info-column">
        <h2 className="contact-title">
          Talk With <span className="highlight-text">Experts</span>
        </h2>
        <p className="contact-description">
          We provide a full range of emergency and medical services designed to meet all your healthcare needs with professional excellence.
        </p>
        <div className="contact-details">
          <p>Phone: <a href="tel:+919833997373">+919833997373</a></p>
          <p>Email: <a href="mailto:ops@humancareworldwide.com">ops@humancareworldwide.com</a></p>
        </div>
        <p className="company-name">Humancare Medical Services</p>
        <div className="action-buttons">
          <a href="tel:+919833997373" className="call-now-button">Call Now</a>
          <a href="https://wa.me/919833997373" target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp Us</a>
        </div>
      </div>

      {/* Right Column */}
      <div className="contact-form-column">
        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <p style={{ color: status.type === 'success' ? 'green' : 'red' }}>
              {status.message}
            </p>
          )}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-input"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            required
          />

          {/* <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Number"
            className="form-input"
          /> */}

          <input
  type="text"
  name="number"
  value={formData.number}
  onChange={handleChange}
  placeholder="Number"
  className="form-input"
  required
/>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-input form-select"
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="emergency">Emergency Medical Services</option>
            <option value="air-ambulance">Air Ambulance</option>
            <option value="medical-evacuation">Medical Evacuation</option>
            <option value="other">Other Inquiry</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="form-textarea"
          ></textarea>

          <button type="submit" className="send-enquiry-button">
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
