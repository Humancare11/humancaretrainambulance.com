import React from 'react';
import './about.css';
import abImage from '../assets/about.png';
import AboutSection from '../components/AboutSection';
import { FaAccessibleIcon, FaAward, FaHeart, FaHandshake } from 'react-icons/fa';
import ContactSection from '../components/ContactSection'; 
import Herobanner from '../components/Herobanner';        



function About() {
    return (
        <>
   <Herobanner
        image= {abImage}
         heading="About Our Train Ambulance Service"
      paragraph="Backed by years of critical care expertise, we deliver hospital-grade medical transfers—safely, affordably, and across the rails of India.
"
      buttonText="Know More"
      buttonLink="/contact"
      />
    


<AboutSection/>


<section className="values-block">
  <h2 className="values-title">Our Promise
</h2>
  <div className="values-list">
    <div className="value-card">
      <div className="value-icon value-pink">
        {/* You can use an icon library or SVG for the heart */}
        <span role="img" aria-label="Compassion">❤️</span>
      </div>
      <h3>Timely Response</h3>
      <p>
In moments when every second counts, we act with urgency and precision. Our team coordinates every detail—from booking and medical setup to boarding and handover—ensuring the patient reaches their destination without unnecessary delays. We don’t just move quickly—we move with purpose.      </p>
    </div>
    <div className="value-card">
      <div className="value-icon value-teal">
        {/* Use an icon or SVG for clock */}
        <span role="img" aria-label="Speed">🕒</span>
      </div>
      <h3>Compassionate Care
</h3>
      <p>
Behind every case is a family, a story, and a life that matters. That’s why we lead with empathy in every journey. Our medical teams don’t just monitor vitals—they offer reassurance, comfort, and human connection to patients and their loved ones throughout the transfer.      </p>
    </div>
    <div className="value-card">
      <div className="value-icon value-gray">
        {/* Use an icon or SVG for shield */}
        <span role="img" aria-label="Safety">🛡️</span>
      </div>
      <h3>Complete Assurance
</h3>
      <p>
With Humancare, you're never alone in the process. From the first call to final handover, we provide end-to-end coordination, medical supervision, and continuous updates. Every transfer is managed with the same care we would offer our own family—because your trust is our responsibility.      </p>
    </div>
  </div>
</section>

<section className="mission-block">
  <div className="mission-block-content">
    <h2>What Sets Us Apart
</h2>
    <p>

From ticket booking and equipment setup to medical clearances and final handover, our team manages every detail.
    </p>

    <div className="mission-features">
      <div className="feature-card-ab">
        <div className="icon-holder sky-blue">
          <FaAccessibleIcon size={40} />
        </div>
        <h3 className='mission-head'>Affordability Without Compromise</h3>
        <p> Train ambulances offer significant cost savings compared to air ambulances while still ensuring expert care throughout the journey.</p>
      </div>

      <div className="feature-card-ab">
        <div className="icon-holder mint-green">
          <FaAward size={40} />
        </div>
        <h3 className='mission-head'>ICU-Level Equipment Onboard</h3>
        <p> Ventilators, monitors, oxygen supply, suction machines, and infusion pumps—all fitted into the patient’s cabin for continuous care.</p>
      </div>

      <div className="feature-card-ab">
        <div className="icon-holder blush-red">
          <FaHeart size={40} />
        </div>
        <h3 className='mission-head'>Dedicated Medical Teams</h3>
        <p> Every journey is accompanied by experienced doctors, nurses, and paramedics who are skilled in handling long-distance patients.</p>
      </div>

      <div className="feature-card-ab">
        <div className="icon-holder sky-blue">
          <FaHandshake size={40} />
        </div>
        <h3 className='mission-head'>Pan-India Network</h3>
        <p> With a wide reach across Indian Railways routes, we facilitate transfers from remote towns to major cities and specialized hospitals.</p>
      </div>
    </div>
  </div>
</section>

<ContactSection/>

</>
  );

}

export default About;
