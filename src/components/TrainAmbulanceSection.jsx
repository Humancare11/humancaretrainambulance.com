import React from 'react';
import './TrainAmbulanceSection.css';
import trainimg from '../assets/heroimg.png'; 


const TrainAmbulanceSection = () => (
  <section className="train-ambulance-wrapper">
    <div className="header-block">
      <h2 className="main-title">India's Trusted Train Ambulance Provider</h2>
      <p className="main-desc">
        When air ambulance isn't feasible and road transport is too risky, our specially equipped train ambulances provide the perfect solution for long-distance medical transfers.
      </p>
    </div>


    <div className="content-panel">
      <div className="content-left">
        <div className="icon-title-row">
          {/* <span className="icon-icu">&#128657;</span> */}
          <span className="feature-title">Mobile ICU on Rails</span>
        </div>
        <p className="section-desc">
          Our train ambulances are fully equipped mobile intensive care units that ensure continuous medical monitoring and care during long-distance transfers. With advanced life support systems and experienced medical staff, we bring hospital-level care directly to your journey.
        </p>
        <ul className="features-list">
          <li>
            <span className="feat-icon feat-green"></span>
            <strong className="feat-title">Advanced Life Support</strong>
            <span className="feat-desc">Ventilators, monitors, and emergency medications</span>
          </li>
          <li>
            <span className="feat-icon feat-blue"></span>
            <strong className="feat-title">Expert Medical Team</strong>
            <span className="feat-desc">Doctors, nurses, and paramedics onboard</span>
          </li>
          <li>
            <span className="feat-icon feat-pink"></span>
            <strong className="feat-title">24/7 Availability</strong>
            <span className="feat-desc">Emergency response any time, any day</span>
          </li>
          <li>
            <span className="feat-icon feat-teal"></span>
            <strong className="feat-title">Safe Transfer</strong>
            <span className="feat-desc">Secure and stable transportation</span>
          </li>
        </ul>
        <button className="book-btn">Book Train Ambulance</button>
      </div>
      <div className="content-right">
        <div className="medical-box">
              <img
            src={trainimg}
            alt="Train Ambulance"
            className="trainimg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default TrainAmbulanceSection;
