import React from 'react';
import './home.css';
import AboutSection from "../components/AboutSection";  
import TrainAmbulanceSection from '../components/TrainAmbulanceSection';  
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';  
import ContactSection from '../components/ContactSection';  
import heroImage from '../assets/10.png';
import { Helmet } from "react-helmet";

const HeroSection = () => {
  return (
   <>
   <Helmet>
  <title>Train Ambulance Service in India | Rail Ambulance - Humancare Train Ambulance</title>
  <meta
    name="description"
    content="Get reliable and affordable train ambulance service across India with Humancare Train Ambulance. Expert rail ambulance services with 24/7 emergency medical care."
  />
  <meta
    name="keywords"
    content="train ambulance service, rail ambulance service, railway ambulance service, Humancare Train Ambulance"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Train Ambulance Service in India | Rail Ambulance - Humancare" />
  <meta
    property="og:description"
    content="Fast & affordable train ambulance service in India. Human Care provides expert rail ambulance services with onboard medical staff."
  />
  <meta property="og:image" content={`https://humancaretrainambulance.com${heroImage}`} />
  <meta property="og:url" content="https://humancaretrainambulance.com" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Train Ambulance Service in India | Rail Ambulance - Human Care" />
  <meta name="twitter:description" content="24/7 train ambulance & rail ambulance service in India with Human Care." />
  <meta name="twitter:image" content={`https://humancaretrainambulance.com${heroImage}`} />

  {/* ✅ Schema Markup */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Humancare Train Ambulance",
        "alternateName": "Humancare Rail Ambulance",
        "url": "https://humancaretrainambulance.com",
        "logo": "https://humancaretrainambulance.com/logo.png",
        "image": "https://humancaretrainambulance.com${heroImage}",
        "description": "Humancare provides fast & affordable train ambulance service and rail ambulance service in India with onboard ICU setup & expert doctors.",
        "telephone": "+919833997373",
        "priceRange":"$$",
        "openingHours": "Mo-Su 00:00-23:59",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/",
          "https://www.instagram.com/",
          "https://twitter.com/"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": [
          "Train Ambulance Service",
          "Rail Ambulance Service",
          "Railway Ambulance"
        ]
      }
    `}
  </script>

  {/* Optional: WebSite schema for sitemap/navigation */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Humancare Train Ambulance",
        "url": "https://humancaretrainambulance.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://humancaretrainambulance.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "sitemap": [
          {
            "@type": "SiteNavigationElement",
            "name": "Home",
            "url": "https://humancaretrainambulance.com/"
          },
          {
            "@type": "SiteNavigationElement",
            "name": "About",
            "url": "https://humancaretrainambulance.com/about"
          },
          {
            "@type": "SiteNavigationElement",
            "name": "Services",
            "url": "https://humancaretrainambulance.com/services"
          },
          {
            "@type": "SiteNavigationElement",
            "name": "Contact",
            "url": "https://humancaretrainambulance.com/contact"
          }
        ]
      }
    `}
  </script>
</Helmet>

        {/* ✅ Your Existing Page Content */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-grid">
              {/* Content */}
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="satish">Fast & affordable </span>
                  <span className="text-accent">Train Ambulance</span><br />
                  <span className="satish">Service</span>
                </h1>
                <p className="hero-subtext">
                  Expert medical care doesn’t stop at hospital doors; it continues on tracks with us with reliable train ambulance services.
                </p>
                <div className="hero-buttons">
                  <a href="tel:+919833997373" className="btn-link-wrapper">
                    <button className="btn-accent">Request Ambulance</button>
                  </a>
                  <a href="/Trainambulance" className="btn-link-wrapper" style={{ textDecoration: 'none' }}>
                    <button className="btn-outline">Learn More</button>
                  </a>
                </div>
              </div>

              {/* Train Image */}
              <div className="hero-image-wrapper">
                <div className="hero-card">
                  <img src={heroImage} alt="Train Ambulance" className="hero-train-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <TrainAmbulanceSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
      </>
  );
};

export default HeroSection;
