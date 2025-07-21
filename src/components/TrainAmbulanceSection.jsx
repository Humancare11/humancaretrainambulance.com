import React from 'react';
import { Train, Heart, Clock, Shield, Users, Phone } from 'lucide-react';
import './TrainAmbulanceSection.css';
import '../App.css';
import '../index.css';

      

const TrainAmbulanceSection = () => {
   const items = [
    {
      label: "Patient Monitor",
      icon: "fas fa-heartbeat",
      bgColor: "#20c997",
      textColor: "text-success",
    },
    {
      label: "Ventilator",
      icon: "fas fa-lungs",
      bgColor: "#1e3a5f",
      textColor: "text-dark",
    },
    {
      label: "Defibrillator",
      icon: "fas fa-bolt",
      bgColor: "#dc3545",
      textColor: "text-danger",
    },
    {
      label: "Oxygen Supply",
      icon: "fas fa-wind",
      bgColor: "#20c997",
      textColor: "text-success",
    },
  ];
  return (
    <section id="services" className="train-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Specialty</span>
          <h2 className="section-title">India's Trusted Train Ambulance Provider</h2>
          <p className="section-description">
            When air ambulance isn't feasible and road transport is too risky, our specially equipped
            train ambulances provide the perfect solution for long-distance medical transfers.
          </p>
        </div>

        <div className="card">
          <div className="card-contentt">
            <div className="card-grid">
              <div className="card-info">
                <div className="icon-title">
                  <div className="icon-circle accent">
                    <Train />
                  </div>
                  <h3 className="card-title text-align-start">Mobile ICU on Rails</h3>
                </div>

                <p className="card-description">
                  Our train ambulances are fully equipped mobile intensive care units that ensure
                  continuous medical monitoring and care during long-distance transfers...
                </p>

                <div className="features-grid">
                  <div className="feature-box">
                    <div className="feature-icon secondary"><Heart /></div>
                    <div>
                      <h4 className="feature-title">Advanced Life Support</h4>
                      <p className="tital-para" >Ventilators, monitors, and emergency medications</p>
                    </div>
                  </div>


                  <div className="feature-box">
                    <div className="feature-icon primary"><Users /></div>
                    <div>
                      <h4 className="feature-title">Expert Medical Team</h4>
                      <p className="tital-para" >Doctors, nurses, and paramedics onboard</p>
                    </div>
                  </div>

                  <div className="feature-box">
                    <div className="feature-icon accent"><Clock /></div>
                    <div>
                      <h4 className="feature-title">24/7 Availability</h4>
                      <p className="tital-para">Emergency response any time, any day</p>
                    </div>
                  </div>

                  <div className="feature-box">
                    <div className="feature-icon secondary"><Shield /></div>
                    <div>
                      <h4 className="feature-title">Safe Transfer</h4>
                      <p className="tital-para">Secure and stable transportation</p>
                    </div>
                  </div>
                </div>

              <div className="button-wrapper">
  <button className="cta-button">
    <Phone className="phone-icon" />
    Book Train Ambulance
  </button>
</div>

              </div>

              {/* <div className="illustration">
                <div className="illustration-wrapper">
                  <div className="compartment-header">
                    <h4>MEDICAL COMPARTMENT</h4>
                    <p>ICU Setup Inside Train</p>
                  </div>

                  <div className="equipment-grid">
                    <div className="equipment-box secondary" id='equipment-box-1'>
                      <div className="equipment-icon heart-beat"></div>
                      <div className="equipment-label">Patient Monitor</div>
                    </div>
                    <div className="equipment-box primary"id='equipment-box-2'>
                      <div className="equipment-icon"></div>
                      <div className="equipment-label">Ventilator</div>
                    </div>
                    <div className="equipment-box accent"id='equipment-box-3'>
                      <div className="equipment-icon animate-pulse"></div>
                      <div className="equipment-label">Defibrillator</div>
                    </div>
                    <div className="equipment-box secondary"id='equipment-box-1'>
                      <div className="equipment-icon"></div>
                      <div className="equipment-label">Oxygen Supply</div>
                    </div>
                  </div>

                  <div className="doctor-info">
                    <div className="doctor-circle">
                      <div className="inner-circle"></div>
                    </div>
                    <div>
                      <div className="doctor-title">Dr. On Board</div>
                      <div className="doctor-sub">24/7 Care</div>
                    </div>
                  </div>
                </div>
              </div> */}
              
  <div className="container d-flex justify-content-end py-5">
      <div className="bg-white rounded-4 shadow-lg p-4" style={{ paddingTop: "20px" }}>
        {/* Title */}
        <div className="text-center mb-4">
           <div className="rounded-3 p-3 mb-2" style={{ backgroundColor: "#F56565" }}>
                <h4 className="text-white fw-bold mb-1">MEDICAL COMPARTMENT</h4>
                <p className="text-white small mb-0 opacity-75">ICU Setup Inside Train</p>
              </div>
        </div>

        {/* Equipment Cards Grid */}
        <div className="row g-3 mb-3">
          {items.map((item, index) => (
            <div className="col-6" key={index}>
              <div className="bg-white rounded-3 shadow-sm text-center p-3">
                <div
                  className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-2"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: item.bgColor,
                  }}
                >
                  <i className={`${item.icon} text-white`}></i>
                </div>
                <p className={`mb-0 fw-semibold small ${item.textColor}`}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor On Board */}
        <div className="bg-white rounded-3 shadow-sm p-3 d-flex align-items-center">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#20c997",
            }}
          >
            <i className="fas fa-user-md text-white"></i>
          </div>
          <div>
            <p className="mb-0 fw-bold text-success small">Dr. On Board</p>
            <p className="mb-0 text-muted small">24/7 Care</p>
          </div>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h3 className="benefits-title">Why Choose Train Ambulance?</h3>
          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-icon secondary" id='equipment-box-1'><Train /></div>
              <h4>Cost Effective</h4>
              <p>More affordable than air ambulance for long distances</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon primary" id='equipment-box-2'><Shield /></div>
              <h4>Weather Independent</h4>
              <p>Not affected by weather conditions like aircraft</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon accent heart-beat" id='equipment-box-3'><Heart /></div>
              <h4>Family Friendly</h4>
              <p>Space for family members to accompany patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainAmbulanceSection;