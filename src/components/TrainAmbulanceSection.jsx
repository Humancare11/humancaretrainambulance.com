import React from 'react';
import './TrainAmbulanceSection.css';
import trainimg from '../assets/trainimg.png';


const TrainAmbulanceSection = () => (
  <section className="train-ambulance-wrapper">
    <div className="header-block">
      <h2 className="main-title">India’s Trusted Train Ambulance Provider
      </h2>
      <p className="main-desc">
        Whether it’s shifting patients from rural areas to metro hospitals or transporting them across state lines for specialized care, we bring hospital-grade care on wheels.
      </p>
    </div>


    <div className="content-panel">
      <div className="content-left">
        <div className="icon-title-row">
          {/* <span className="icon-icu">&#128657;</span> */}
          <span className="feature-title">Our Train Ambulance Services
          </span>
        </div>
        <p className="section-desc">
          We provide comprehensive train ambulance solutions tailored for various patient needs — from intensive care transfers to pediatric support and inter-state repatriation. Our services ensure medical-grade care and comfort throughout the journey.
        </p>
        <ul className="features-list">
          <li>
            <span className="feat-icon feat-green"></span>
            <strong className="feat-title"> ICU Train Ambulance
</strong>
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
        <a href="/Contact" className="btn-link-wrapper" style={{ textDecoration: 'none' }}>
        <button className="book-btn">Book Train Ambulance</button></a>
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
