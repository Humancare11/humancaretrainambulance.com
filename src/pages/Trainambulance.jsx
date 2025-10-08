import React from 'react'
import abImage from '../assets/trainbanner.png'; // Adjust the path to your train ambulance image trainsec
import trainsec from '../assets/trainsec.png';
import './trainambulance.css'; // Assuming you have a CSS file for styling
import ContactSection from '../components/ContactSection';
import Herobanner from '../components/Herobanner';

function Trainambulance() {

  const testimonials = [
    {
      title: 'Seamless Train Repatriation from Nagpur to Dehradun',
      quote:
        "On 7th March 2025, a 77-year-old male was safely transported from Nagpur to Dehradun via train and ground ambulance under the care of Dr. Baig and Paramedic Ms. Reshma. After a medical assessment at Vayu Sena, Nagpur, the patient was stabilized on BiPAP and oxygen support, then shifted via ground ambulance to the train station. During the 14-hour train journey to Delhi, he received RT feeds, medications, and continuous monitoring. Upon arrival, a second ground ambulance took him on a 6-hour road trip to Dehradun. Vitals remained stable throughout, and he was successfully handed over to family. The journey was executed with precision, medical readiness, and compassionate care.",
    },
      {
      title: 'Critical Care Transfer from Pune to Bangalore via Train Ambulance',
      quote:
        "On 20th February 2025, a 45-year-old male with anaplastic astrocytoma was transported from Joshi Hospital, Pune, to Aster Hospital, Bangalore. Led by Dr. Baig and Paramedic Suraj, the escort team ensured medical readiness with PUC, oxygen support, and emergency medications. Following an initial evaluation, the patient was moved from hospital to train with close monitoring. During the 18-hour train journey, he received suctioning, RT feeds, nebulisation, and medications. Upon arrival in Bangalore, he was seamlessly transferred to the ground ambulance and taken to Aster Hospital for continued care. The mission was completed successfully with expert supervision and continuous patient stability.",
    },
  ];
  const equipmentData = [
    {
      icon: '❤️',
      title: 'Timely Coordination',
      desc: 'We swiftly manage all logistics including train bookings, medical clearances, and boarding preparation to ensure minimal wait time.',
      color: 'red',
    },
    {
      icon: '🛡️',
      title: 'Hospital-Grade Setup',
      desc: 'Our coaches are transformed into mobile ICUs equipped with ventilators, monitors, oxygen cylinders, suction machines, and emergency medication.',
      color: 'green',
    },
    {
      icon: '🕒',
      title: 'Expert Medical Team',
      desc: 'Each journey is handled by qualified doctors, nurses, and paramedics trained for long-distance patient care and in-transit emergencies.',
      color: 'blue',
    },
   
    {
      icon: '🧑‍⚕️',
      title: 'Budget-Friendly',
      desc: 'Train ambulance services cost significantly less than air ambulances, making critical care travel accessible to more families across India.',
      color: 'green',
    },
     {
      icon: '✔️',
      title: 'Seamless Assistance',
      desc: 'From documentation to final handover, we manage everything so you can focus on your loved one’s recovery—not the logistics.',
      color: 'red',
    },
    {
      icon: '🚆',
      title: 'Pan-India Reach',
      desc: ' With connections across the Indian Railways network, we can transport patients to top-tier hospitals in metros and remote regions alike—wherever care is needed.',
      color: 'blue',
    },
  ];
  return (
     <>
    <Herobanner
        image= {abImage}
         heading=" Bringing Critical Care to the Rails"
      paragraph=" Hospital-level care. Long-distance journeys. One seamless, life-saving service."
      buttonText="Know More"
      buttonLink="/contact"
      />
      
       <section className="train-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="outer-train-ab-image">
                <img src={trainsec} alt="Train Ambulance" className="train-image-train" />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title-train-ambulance">Why Choose Train Ambulance Services?
</h2>
              <p className="description-train-ambulance">
Train ambulances are the ideal solution for stable or semi-critical patients who require continuous medical supervision during long-distance travel but do not need emergency air evacuation. With India’s vast and reliable railway network, they offer a safe, efficient, and significantly more affordable alternative to air ambulances—without compromising on medical care.
At Humancare World Wide, we combine our extensive critical care expertise with advanced onboard medical setups to ensure every journey is as safe and comfortable as possible. Whether it’s reaching a super-specialty hospital in another state or returning home post-treatment, our train ambulances deliver hospital-level care on rails—reliably, compassionately, and cost-effectively.              </p>


            </div>
            
          </div>
        </div>
      </section> 


      <section className="train-section">
        <h2 className="train-title">Advanced Train Ambulance Services
</h2>
        <p className="train-subtitle">
          When distance is long and time is crucial, trust India’s most experienced train ambulance provider for safe, equipped, and compassionate transport.
        </p>

        <div className="train-grid">
          <div className="train-left-card">
            <div className="train-icon">🚆</div>
            <h3>Fully Equipped ICU on Rails</h3>
            <p>A state-of-the-art mobile intensive care unit with ventilators, monitors, oxygen supply, and life-saving support systems—customized for critical patient transport.
</p>
          </div>

          <div className="train-right-cards">
            <div className="train-stat-card">
              <h2 className="redd">1500+</h2>
              <p>Lives Safely Transported Nationwide</p>
            </div>
            <div className="train-stat-card">
              <h2 className="redd">99.8%</h2>
              <p>Successful Transfers with Medical Stability</p>
            </div>
            <div className="train-stat-card">
              <h2 className="redd">24/7</h2>
              <p> Rapid Response & Coordination Availability</p>
            </div>
            <div className="train-stat-card">
              <h2 className="redd">48hrs</h2>
              <p> Max Journey Duration Across Indian Routes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <h2 className="how-title">How It Works</h2>
        {/* <p className="how-subtitle">Simple steps to secure emergency medical transport</p> */}

        <div className="how-grid">
          <div className="how-step">
            <div className="how-icon red">1</div>
            <h3>Medical Assessment</h3>
            <p>
            We review the patient's reports and condition to determine suitability for train transfer.
            </p>
          </div>

          <div className="how-step">
            <div className="how-icon green">2</div>
            <h3>Route Planning & Booking</h3>
            <p>
            We select the most suitable route, confirm first-class or second-class AC berths, and coordinate coach modifications.
            </p>
          </div>

          <div className="how-step">
            <div className="how-icon blue">3</div>
            <h3>Equipment Setup</h3>
            <p>
              Our team pre-arranges ICU or required setups inside the coach, tested and ready before patient boarding.
            </p>
          </div>


          <div className="how-step">
            <div className="how-icon blue">4</div>
            <h3>Onboard Care</h3>
            <p>
             Medical staff accompany the patient with constant monitoring and treatment if needed throughout the journey.
            </p>
          </div>

           

          
        </div>
      </section>

      <section className="equipment-section">
        <h2 className="equipment-title">Key Benefits of Our Service
</h2>
        {/* <p className="equipment-subtitle">
          Our train ambulances are equipped with state-of-the-art medical facilities
        </p> */}

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
        <h2 className="testimonials-title">From Station to Care: Trusted Train Ambulance Missions</h2>
        {/* <p className="testimonials-subtitle">
          Real experiences from families who trusted us during critical moments
        </p> */}

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              {/* <div className="stars">{'⭐'.repeat(item.stars)}</div> */}
              <h2 className="casestudyhead">{item.title}</h2>
               <p className="quote">{item.quote}</p>
              {/*<div className="testimonial-footer">
                <div className="avatar-circle"></div>
                <div className="person-info">
                  <strong>{item.name}</strong>
                  <p>{item.location}</p>
                </div> 
              </div> */}
            </div>
          ))}
        </div>
      </section>
      <section>
<ContactSection />
      </section>

   </>
  )
}

export default Trainambulance