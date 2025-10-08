import React from 'react'
import abImage from '../assets/testimonial.png'; // Adjust the path to your testimonial image
import './testimonial.css'; // Assuming you have a CSS file for styling
import TestimonialsSection from '../components/TestimonialsSection';
import VideoPlayer from '../components/VideoPlayer';
import Herobanner from '../components/Herobanner';

const metrics = [
  {
    value: "100+",
    label: "HOSPITAL PARTNERS",
  
  },
  {
    value: "3500+",
    label: "CITIES COVERED",
   
  },
  {
    value: "1500+",
    label: "LIVES TOUCHED",
    
  },
  {
    value: "5",
    label: "YEARS OF EXCELLENCE",
  
  },
];


function Testimonial() {
  return (
     <>
    <Herobanner
        image= {abImage}
         heading="Testimonials"
      paragraph="Discover what families, patients, and partners say about their journeys with Humancare, where every word echoes trust, care, and life-saving impact."
      buttonText="Know More"
      buttonLink="/contact"
      />
    

        

            <section className="metrics-section">
    <div className="metrics-row">
      {metrics.map((metric, idx) => (
        <div className="metric-box" key={idx}>
          <span className={`metric-value ${metric.color}`}>{metric.value}</span>
          <div className="metric-label">{metric.label}</div>
        </div>
      ))}
    </div>
  </section>

  
<TestimonialsSection/>


<section>
  {/* <VideoPlayer /> */}
</section>
<section className="trusted-section">
      <h2 className="main-heading">Trusted By Healthcare Network</h2>
      <p className="sub-heading">
        Partnered with leading hospitals and medical institutions across India
      </p>

      <div className="hospital-cards">
        <div className="card">
          <div className="iconn">🎖️</div>
          <h3 className="card-title">AIIMS Delhi</h3>
          <p className="card-desc">Premier Medical Institute</p>
        </div>

        <div className="card">
          <div className="iconn">👥</div>
          <h3 className="card-title">Apollo Hospitals</h3>
          <p className="card-desc">Multi-Specialty Chain</p>
        </div>

        <div className="card">
          <div className="iconn ">📈</div>
          <h3 className="card-title">Fortis Healthcare</h3>
          <p className="card-desc">Integrated Healthcare</p>
        </div>

        <div className="card">
          <div className="iconn">🎖️</div>
          <h3 className="card-title">Max Healthcare</h3>
          <p className="card-desc">Leading Hospital Group</p>
        </div>
      </div>
    </section>

</>
  )
}

export default Testimonial
