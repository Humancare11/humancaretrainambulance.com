import React from 'react';
import './about.css';
import abImage from '../assets/heroimg.png';
import AboutSection from '../components/AboutSection';
import { FaAccessibleIcon, FaAward, FaHeart, FaHandshake } from 'react-icons/fa';
import ContactSection from '../components/ContactSection';          



function About() {
    return (
        <div>
    <section className="about-section-pg">
      <div className="about-container">
        <div className="about-left">
          <h1>
            <span className="ab-tital">About Our Train Ambulance Service</span>{' '}
         
          </h1>
          <p>
           With years of experience in emergency medical transport, we provide specialized train ambulance services equipped
          </p>
          <a href="#" className="about-btn">Know More</a>
        </div>
        <div className="about-right">
          <img src={abImage} alt="Train Ambulance" />
        </div>
      </div>
    </section>
    <div>
<AboutSection/>
</div>  

<section className="values-block">
  <h2 className="values-title">Our Core Values</h2>
  <div className="values-list">
    <div className="value-card">
      <div className="value-icon value-pink">
        {/* You can use an icon library or SVG for the heart */}
        <span role="img" aria-label="Compassion">❤️</span>
      </div>
      <h3>Compassion</h3>
      <p>
        We understand that behind every emergency call is a family in distress. Our team approaches every situation with empathy, ensuring patients and families feel supported throughout their journey.
      </p>
    </div>
    <div className="value-card">
      <div className="value-icon value-teal">
        {/* Use an icon or SVG for clock */}
        <span role="img" aria-label="Speed">🕒</span>
      </div>
      <h3>Speed</h3>
      <p>
        Time is critical in medical emergencies. Our rapid response team and streamlined processes ensure the fastest possible deployment while maintaining the highest safety standards.
      </p>
    </div>
    <div className="value-card">
      <div className="value-icon value-gray">
        {/* Use an icon or SVG for shield */}
        <span role="img" aria-label="Safety">🛡️</span>
      </div>
      <h3>Safety</h3>
      <p>
        Every aspect of our service prioritizes patient safety. From state-of-the-art medical equipment to rigorously trained personnel, we never compromise on safety protocols.
      </p>
    </div>
  </div>
</section>

<section className="mission-block">
  <div className="mission-block-content">
    <h2>Our Mission</h2>
    <p>
      To provide world-class emergency medical transportation that bridges the gap between critical care facilities across India, ensuring no family faces a medical emergency alone.
    </p>

    <div className="mission-features">
      <div className="feature-card-ab">
        <div className="icon-holder sky-blue">
          <FaAccessibleIcon size={40} />
        </div>
        <h3>Accessibility</h3>
        <p>Making quality medical transport accessible to every family</p>
      </div>

      <div className="feature-card-ab">
        <div className="icon-holder mint-green">
          <FaAward size={40} />
        </div>
        <h3>Excellence</h3>
        <p>Maintaining the highest standards in medical care</p>
      </div>

      <div className="feature-card-ab">
        <div className="icon-holder blush-red">
          <FaHeart size={40} />
        </div>
        <h3>Compassion</h3>
        <p>Treating every patient with dignity and care</p>
      </div>

      <div className="feature-card-ab">
        <div className="icon-holder sky-blue">
          <FaHandshake size={40} />
        </div>
        <h3>Reliability</h3>
        <p>Always there when you need us most</p>
      </div>
    </div>
  </div>
</section>

<ContactSection/>

</div>
  );

}

export default About;
