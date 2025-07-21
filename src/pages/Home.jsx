import React from 'react';
import './home.css';
 import AboutSection from "../components/AboutSection";  
import TrainAmbulanceSection from '../components/TrainAmbulanceSection';  
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';  
import ContactSection from '../components/ContactSection';  
import heroImage from '../assets/heroimg.png';




const HeroSection = () => {
  return (
    <div>
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="satish text-primary">Fast & Safe </span>
              <span className="text-accent">Train</span><br />
              <span className="text-accent">Ambulance </span>
              <span className="satish text-primary">Services</span>
            </h1>

            <p className="hero-subtext">
              Caring for your loved ones during emergencies with reliable medical transport
            </p>

            <div className="hero-buttons">
              <button className="btn-accent">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 
                    11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 
                    1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 
                    3 14.284 3 6V5z" />
                </svg>
                Request Ambulance
              </button>

              <button className="btn-outline">
                Learn More
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 
                    2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 
                    0 003 9c0 5.591 3.824 10.29 9 
                    11.622 5.176-1.332 9-6.03 
                    9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className='ban-text'>24/7 Available</span>
              </div>
              <div className="trust-item">
                <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 
                    6.364L12 20.364l7.682-7.682a4.5 4.5 
                    0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
                    4.5 0 00-6.364 0z" />
                </svg>
                <span className='ban-text'>Expert Care</span>
              </div>
            </div>
          </div>

          {/* Medical Train Illustration */}
          <div className="hero-image-wrapper">
            <div className="hero-card">
       <img
  src={heroImage}
  alt="Train Ambulance"
  className="hero-train-image"
/>

            </div>
          </div>
        </div>
      </div>
 

    </section>
    <AboutSection/>
<TrainAmbulanceSection/>
      <WhyChooseUs/>
    <TestimonialsSection/>
      <ContactSection/> 
    
</div>
  
  );
};

export default HeroSection;
