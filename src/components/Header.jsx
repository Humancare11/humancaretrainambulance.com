import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo-link">

            <div className="logo-icon">
              <div className="logo-inner">
                <div className="logo-dot">
                  <div className="logo-pulse"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="logo-title">Humancare</h1>
              <p className="logo-subtitle">Train Services</p>
            </div>
          </Link>

          <nav className="desktop-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>


            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
            >
              About
            </Link>


            <Link 
              to="/Service" 
              className={`nav-link ${isActive('/Service') ? 'nav-link-active' : ''}`}
            >
              Train Ambulance
            </Link>


            <Link 
              to="/Why" 
              className={`nav-link ${isActive('/Why') ? 'nav-link-active' : ''}`}
            >
              Why Choose Us
            </Link>


            <Link 
              to="/Testimonials" 
              className={`nav-link ${isActive('/Testimonials') ? 'nav-link-active' : ''}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="desktop-only">
            <button className="cta-button">
              <span className="button-icon">📞</span>
              Request Ambulance
            </button>
          </div>

          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="menu-icon">☰</span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`mobile-nav-link ${isActive('/about') ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/train-ambulance" 
                className={`mobile-nav-link ${isActive('/train-ambulance') ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Train Ambulance
              </Link>
              <Link 
                to="/why-choose-us" 
                className={`mobile-nav-link ${isActive('/why-choose-us') ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link 
                to="/testimonials" 
                className={`mobile-nav-link ${isActive('/testimonials') ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact" 
                className={`mobile-nav-link ${isActive('/contact') ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="mobile-cta-button">
                <span className="button-icon">📞</span>
                Request Ambulance
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;