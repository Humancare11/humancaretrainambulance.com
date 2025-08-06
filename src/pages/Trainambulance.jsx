import React from 'react'
import tImage from '../assets/heroimg.png'; // Adjust the path to your train ambulance image
import './trainambulance.css'; // Assuming you have a CSS file for styling
import ContactSection from '../components/ContactSection';
function Trainambulance() {

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      location: 'Delhi to Chennai Transfer',
      stars: 5,
      quote:
        "The train ambulance service saved my father's life. The medical team was exceptional, and the journey from Delhi to Chennai was smooth and safe. The ICU facilities on board were world-class.",
    },
    {
      name: 'Dr. Priya Sharma',
      location: 'Bangalore to Mumbai Transfer',
      stars: 5,
      quote:
        'When my mother needed emergency transfer to Mumbai, MediTrain arranged everything within 2 hours. The medical team monitored her throughout the journey. Professional and caring service.',
    },
  ];
  const equipmentData = [
    {
      icon: '❤️',
      title: 'ICU Setup',
      desc: 'Complete intensive care unit with ventilators, monitors, and life support systems.',
      color: 'red',
    },
    {
      icon: '🛡️',
      title: 'Emergency Medications',
      desc: 'Comprehensive stock of emergency drugs and medications for all critical situations.',
      color: 'green',
    },
    {
      icon: '🕒',
      title: 'Monitoring Systems',
      desc: '24/7 patient monitoring with real-time vital signs tracking and alert systems.',
      color: 'blue',
    },
    {
      icon: '✔️',
      title: 'Defibrillators',
      desc: 'Advanced cardiac life support equipment for emergency resuscitation procedures.',
      color: 'red',
    },
    {
      icon: '🧑‍⚕️',
      title: 'Medical Team',
      desc: 'Qualified doctors, nurses, and paramedics accompany every patient transfer.',
      color: 'green',
    },
    {
      icon: '🚆',
      title: 'Communication',
      desc: 'Direct communication with receiving hospitals for seamless patient handover.',
      color: 'blue',
    },
  ];
  return (
    <div>
      <section className="about-section-pg">
        <div className="about-container">
          <div className="about-left">
            <h1>
              <span className="ab-tital">Advanced Train Ambulance Services

              </span>{' '}

            </h1>
            <p>
              With years of experience in emergency medical transport, we provide specialized train ambulance services equipped
            </p>
            <a href="#" className="about-btn">Know More</a>
          </div>
          <div className="about-right">
            <img
              src={tImage}
              alt="Train Ambulance"
            />
          </div>
        </div>
      </section>
      <section className="train-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="outer-train-ab-image">
                <img src={tImage} alt="Train Ambulance" className="train-image-train" />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title-train-ambulance">Why Choose Our Train Ambulance Service?</h2>
              <p className="description-train-ambulance">
                Our train ambulance service is designed for long-distance medical transfers when air transport is not feasible. We provide a safe, comfortable, and medically equipped environment for patients requiring critical care during transit.  Our train ambulance service is designed for long-distance medical transfers when air transport is not feasible. We provide a safe, comfortable, and medically equipped environment for patients requiring critical care during transit.  Our train ambulance service is designed for long-distance medical transfers when air transport is not feasible. <br />Our train ambulance service is designed for long-distance medical transfers when air transport is not feasible. We provide a safe, comfortable, and medically equipped environment for patients requiring critical care during transit.
              </p>


            </div>
            
          </div>
        </div>
      </section>


      <section className="train-section">
        <h2 className="train-title">Advanced Train Ambulance Services</h2>
        <p className="train-subtitle">
          When distance matters and time is critical, our train ambulance service provides safe,
          comfortable, and medically equipped transport across India. Experience the perfect blend of
          rail efficiency and medical excellence.
        </p>

        <div className="train-grid">
          <div className="train-left-card">
            <div className="train-icon">🚆</div>
            <h3>Medical Train Illustration</h3>
            <p>State-of-the-art mobile ICU on rails</p>
          </div>

          <div className="train-right-cards">
            <div className="train-stat-card">
              <h2 className="red">1500+</h2>
              <p>Patients Transported</p>
            </div>
            <div className="train-stat-card">
              <h2 className="green">99.8%</h2>
              <p>Success Rate</p>
            </div>
            <div className="train-stat-card">
              <h2 className="blue">24/7</h2>
              <p>Availability</p>
            </div>
            <div className="train-stat-card">
              <h2 className="red">48hrs</h2>
              <p>Max Journey Time</p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <h2 className="how-title">How It Works</h2>
        <p className="how-subtitle">Simple steps to secure emergency medical transport</p>

        <div className="how-grid">
          <div className="how-step">
            <div className="how-icon red">1</div>
            <h3>Emergency Call</h3>
            <p>
              Call our 24/7 emergency hotline. Our team will assess your medical needs and provide
              immediate assistance.
            </p>
          </div>

          <div className="how-step">
            <div className="how-icon green">2</div>
            <h3>Rapid Dispatch</h3>
            <p>
              Our medical team is dispatched within minutes. Train ambulance is prepared with required
              equipment and medications.
            </p>
          </div>

          <div className="how-step">
            <div className="how-icon blue">3</div>
            <h3>Safe Transport</h3>
            <p>
              Continuous medical monitoring during transport ensures your loved one receives critical
              care throughout the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="equipment-section">
        <h2 className="equipment-title">Advanced Medical Equipment</h2>
        <p className="equipment-subtitle">
          Our train ambulances are equipped with state-of-the-art medical facilities
        </p>

        <div className="equipment-grid">
          {equipmentData.map((item, index) => (
            <div className="equipment-card" key={index}>
              <div className={`equipment-icon ${item.color}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title">Train Transfer Success Stories</h2>
        <p className="testimonials-subtitle">
          Real experiences from families who trusted us during critical moments
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">{'⭐'.repeat(item.stars)}</div>
              <p className="quote">"{item.quote}"</p>
              <div className="testimonial-footer">
                <div className="avatar-circle"></div>
                <div className="person-info">
                  <strong>{item.name}</strong>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
<ContactSection />
      </section>

    </div>
  )
}

export default Trainambulance