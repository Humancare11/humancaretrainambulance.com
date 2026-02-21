import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../assets/logo.webp';
import ContactSection from './ContactSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closePopup = () => setShowPopup(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Humancare Logo" className="logo-image" />
            </Link>

            <nav className="desktop-nav">
              <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>Home</Link>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>About</Link>
              <Link to="/trainambulance" className={`nav-link ${isActive('/trainambulance') ? 'nav-link-active' : ''}`}>Train Ambulance</Link>
               <a
                href="https://pmny.in/KI4pIX0tZoST"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link payment-link"
              >
                Online Payment
              </a>
              <Link to="/Testimonial" className={`nav-link ${isActive('/Testimonial') ? 'nav-link-active' : ''}`}>Testimonials</Link>
                            <Link to="/Blogs" className={`nav-link ${isActive('/Blogs') ? 'nav-link-active' : ''}`}>Blogs</Link>

              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>Contact</Link>
             
            </nav>

            <div className="desktop-only">
              <button className="cta-button" onClick={() => setShowPopup(true)}>
                <span className="button-icon">📞</span>
                Request Ambulance
              </button>
            </div>

            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="menu-icon">☰</span>
            </button>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              <nav className="mobile-nav">
                <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'mobile-nav-link-active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'mobile-nav-link-active' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/trainambulance" className={`mobile-nav-link ${isActive('/trainambulance') ? 'mobile-nav-link-active' : ''}`} onClick={() => setIsMenuOpen(false)}>Train Ambulance</Link>
                 <a
                  href="https://pmny.in/KI4pIX0tZoST"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link payment-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Online Payment
                </a>
                <Link to="/Testimonial" className={`mobile-nav-link ${isActive('/Testimonial') ? 'mobile-nav-link-active' : ''}`} onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
                                <Link to="/Blogs" className={`mobile-nav-link ${isActive('/Blogs') ? 'mobile-nav-link-active' : ''}`} onClick={() => setIsMenuOpen(false)}>Blogs</Link>

                <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'mobile-nav-link-active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
               
                <button className="mobile-cta-button" onClick={() => {
                  setShowPopup(true);
                  setIsMenuOpen(false);
                }}>
                  <span className="button-icon">📞</span>
                  Request Ambulance
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {showPopup && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>×</button>
            <ContactSection />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
