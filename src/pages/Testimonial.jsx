import React from 'react'
import abImage from '../assets/heroimg.png'; // Adjust the path to your testimonial image
import './testimonial.css'; // Assuming you have a CSS file for styling
import TestimonialsSection from '../components/TestimonialsSection';
 const videos = [
    {
      id: 'v1',
      title: 'Patient Journey',
      desc: 'Air ambulance from Delhi to Mumbai.',
      youtubeId: 'IW__ERSIOCU',
    },
    {
      id: 'v2',
      title: 'ICU Transfer',
      desc: 'Critical care patient shift by air.',
      youtubeId: 'IW__ERSIOCU',
    },
    {
      id: 'v3',
      title: 'Medical Evacuation',
      desc: 'Air ambulance from remote areas.',
      youtubeId: 'IW__ERSIOCU',
    },
    {
      id: 'v4',
      title: 'Medical Evacuation',
      desc: 'Air ambulance from remote areas.',
      youtubeId: 'IW__ERSIOCU',
    },
  ];

function Testimonial() {
  return (
    <div>

         <section className="about-section-pg">
              <div className="about-container">
                <div className="about-left">
                  <h1>
                    <span className="ab-tital">Testimonials</span>{' '}
                 
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
<TestimonialsSection/>

<div className="video-grid">
      {videos.map((video) => (
        <div className="video-card" key={video.id}>
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
          <h3 className="video-title">{video.title}</h3>
          <p className="video-desc">{video.desc}</p>
        </div>
      ))}
    </div>

<section className="trusted-section">
      <h2 className="main-heading">Trusted By Healthcare Network</h2>
      <p className="sub-heading">
        Partnered with leading hospitals and medical institutions across India
      </p>

      <div className="hospital-cards">
        <div className="card">
          <div className="icon">🎖️</div>
          <h3 className="card-title">AIIMS Delhi</h3>
          <p className="card-desc">Premier Medical Institute</p>
        </div>

        <div className="card">
          <div className="icon">👥</div>
          <h3 className="card-title">Apollo Hospitals</h3>
          <p className="card-desc">Multi-Specialty Chain</p>
        </div>

        <div className="card">
          <div className="icon red-icon">📈</div>
          <h3 className="card-title">Fortis Healthcare</h3>
          <p className="card-desc">Integrated Healthcare</p>
        </div>

        <div className="card">
          <div className="icon">🎖️</div>
          <h3 className="card-title">Max Healthcare</h3>
          <p className="card-desc">Leading Hospital Group</p>
        </div>
      </div>
    </section>


    </div>
  )
}

export default Testimonial
