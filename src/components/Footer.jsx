// src/components/Footer.jsx
import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <span className="logo-life">Life</span>
            <span className="logo-care">Care</span>
          </div>
          <p className="footer-description">
            Providing professional emergency medical services 24/7, ensuring the highest standard of care when you need it most.
          </p>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#">Air Ambulance</a></li>
            <li><a href="#">Ground Ambulance</a></li>
            <li><a href="#">Emergency Medical Care</a></li>
            <li><a href="#">Corporate Solutions</a></li>
            <li><a href="#">Global Hospitalization</a></li>
            <li><a href="#">Home Care Services</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Emergency Contact</h3>
          <ul>
            <li>
              <div className="emergency-line">
                <Heart className="heart-icon" />
                <span>
                  Emergency call our 24/7 hotline<br />
                  <strong>1-800-MED-HELP</strong>
                </span>
              </div>
            </li>
            <li>
              <strong>Main Office:</strong><br />
              1234 Medical Center Drive<br />
              New York, NY 10001
            </li>
            <li>
              <strong>Email:</strong><br />
              emergency@lifecare.com<br />
              info@lifecare.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} LifeCare Emergency Medical Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

