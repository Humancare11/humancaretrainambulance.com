import React from 'react';
import './whychooseus.css';




const WhyChooseUs = () => {
  return (
    <div> 



    <section className="why-choose-section">
      {/* <span className="section-subtitle">Safe. Affordable. Medically Equipped Long-Distance Transfers.
</span> */}
      <h2 className="section-title-wcu">Why Choose Our Train Ambulance Services?
</h2>
<div className="container">
      <p className="section-desc">
        Train ambulances offer a more affordable alternative to air ambulances for stable, long-distance transfers. Each journey is managed by experienced doctors, nurses, and paramedics to ensure safe, continuous care.
      </p>
</div>
      <div className="features-container">
        <div className="feature-box-1">
          <div className="feature-icon bg-lightgreen">
            <img src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/external-icu-medical-healthcare-vol1-microdots-premium-microdot-graphic.png" alt="team" />
          </div>
          <h4>On-Board ICU Setup</h4>
          <p>Our train ambulances come with ventilators, monitors, suction machines, and all critical care equipment.</p>
        </div>

        <div className="feature-box-1">
          <div className="feature-icon bg-blue">
            <img src="https://img.icons8.com/ios-filled/50/1E88E5/shield.png" alt="support" />
          </div>
          <h4>Pan-India Network</h4>
          <p>We coordinate with major railway zones and hospital partners across India to streamline timely transfers.
</p>
        </div>

        <div className="feature-box-1">
          <div className="feature-icon bg-red">
            <img src="https://img.icons8.com/ios-filled/50/F44336/clock.png" alt="24/7" />
          </div>
          <h4>Comfortable Journey</h4>
          <p>Our team ensures the patient and their family experience a smooth and stable journey with continuous care.</p>
        </div>

        <div className="feature-box-1">
          <div className="feature-icon bg-lightgreen">
            <img src="https://img.icons8.com/ios-filled/50/4CAF50/phone.png" alt="connectivity" />
          </div>
          <h4>24/7 Coordination</h4>
          <p>From paperwork to boarding and discharge, our case managers manage every aspect with precision and compassion.</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h3 className="stat-value ">500+</h3>
          <p className="stat-label">Successful Transfers</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-value">98%</h3>
          <p className="stat-label">Patient Satisfaction</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-value ">24+</h3>
          <p className="stat-label">Years Experience</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-value ">24/7</h3>
          <p className="stat-label">Emergency Support</p>
        </div>
      </div>

      <div className="testimonial">
        <p className="testimonial-text">
          "We couldn’t afford an air ambulance, and Humancare’s train service was a lifesaver. The entire journey from Patna to Delhi was smooth, and the medical team was attentive throughout. My father was stable and well-cared for."
        </p>
        <div className="testimonial-author">
          <div className="testimonial-img"></div>
          <div className="testimonial-info">
            <h4>Ritika Sinha</h4>
            <p>Patna</p>
          </div>
        </div>
      </div>
    </section>
    

    </div>
  );
};

export default WhyChooseUs;
