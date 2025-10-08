// src/components/Footer.jsx
import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import "./footer.css";
import logo from '../assets/logo.webp' ;
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
     <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
<img src={logo} alt="Logo" className="logo-image"  />
          </div>
          <p className="footer-description">
            Providing professional emergency medical services 24/7, ensuring the highest standard of care when you need it most.
          </p>
          {/* <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div> */}
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/contact">Train Ambulance</a></li>
            <li><a href="/contact">Air Ambulance</a></li>
            <li><a href="/contact">Ground Ambulance</a></li>


          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/trainambulance">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h3>Emergency Contact</h3>
          <ul>
            <li>
              <div className="emergency-line">
                <p>
                  <a href="tel:+919833997373" className="btn-link-wrapper" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span role="img" aria-label="India flag"></span> +919833997373</a>
                </p>

                <p>
                  <a href="mailto:ops@humancareworldwide.com" className="btn-link-wrapper" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span role="img" aria-label="Email icon"></span>ops@humancareworldwide.com
                  </a>
                </p>
              </div>
            </li>
            <li>
              {/* <strong>Main Office:</strong><br /> */}
              G-30, Dheeraj Haritage, S. V. Road, Junction, Milan Subway, Santacruz (West), Mumbai, Maharashtra 400054
            </li>

          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="divider container">
          <div className="row">
            <div className="col-md-6">
              <p className="footer-text">
                &copy; {new Date().getFullYear()} Humancare World Wide Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-text-right">
<ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="/TermsAndConditions">Terms and Conditions</a></li>
            
          </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

        <div className="sticky-buttons">
      <a href="tel:+919833997373" className="btn call-btn">
        <FiPhone size={22} />
      </a>
      <a
        href="https://wa.me/919833997373"
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp-btn"
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
 </>
  );
};

export default Footer;

