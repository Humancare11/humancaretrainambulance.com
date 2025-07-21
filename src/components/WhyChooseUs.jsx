import React from 'react';
import './whychooseus.css';




const WhyChooseUs = () => {
  return (
    <div> 



    <section className="why-choose-section">
      <span className="section-subtitle">Why Choose MediTrain</span>
      <h2 className="section-title-wcu">Trusted by Families Across India</h2>
      <p className="section-desc">
        When your loved one needs emergency medical transport, trust matters most. <br />
        Here’s why families choose MediTrain for their critical medical transfers.
      </p>

      <div className="features-container">
        <div className="feature-box-1">
          <div className="feature-icon bg-lightgreen">
            <img src="https://img.icons8.com/ios-filled/50/4CAF50/group.png" alt="team" />
          </div>
          <h4>Experienced Medical Team</h4>
          <p>Our certified doctors, nurses, and paramedics have years of experience in emergency care and critical patient transport.</p>
        </div>

        <div className="feature-box-1">
          <div className="feature-icon bg-blue">
            <img src="https://img.icons8.com/ios-filled/50/1E88E5/shield.png" alt="support" />
          </div>
          <h4>Advanced Life Support Systems</h4>
          <p>State-of-the-art medical equipment including ventilators, monitors, defibrillators, and emergency medications.</p>
        </div>

        <div className="feature-box-1">
          <div className="feature-icon bg-red">
            <img src="https://img.icons8.com/ios-filled/50/F44336/clock.png" alt="24/7" />
          </div>
          <h4>24/7 Availability</h4>
          <p>Round-the-clock emergency response team ready to assist you during any medical emergency, day or night.</p>
        </div>

        <div className="feature-box-1">
          <div className="feature-icon bg-lightgreen">
            <img src="https://img.icons8.com/ios-filled/50/4CAF50/phone.png" alt="connectivity" />
          </div>
          <h4>Nationwide Connectivity</h4>
          <p>Comprehensive coverage across India with established networks in major cities and towns for seamless transfers.</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h3 className="stat-value red">500+</h3>
          <p className="stat-label">Successful Transfers</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-value green">98%</h3>
          <p className="stat-label">Patient Satisfaction</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-value navy">5</h3>
          <p className="stat-label">Years Experience</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-value red">24/7</h3>
          <p className="stat-label">Emergency Support</p>
        </div>
      </div>

      <div className="testimonial">
        <p className="testimonial-text">
          "MediTrain saved my father's life. Their compassionate care and professional medical team gave us hope during our darkest hour.
          <br />We are forever grateful."
        </p>
        <div className="testimonial-author">
          <div className="testimonial-img"></div>
          <div className="testimonial-info">
            <h4>Priya Sharma</h4>
            <p>Delhi to Mumbai Transfer</p>
          </div>
        </div>
      </div>
    </section>
    

    </div>
  );
};

export default WhyChooseUs;
