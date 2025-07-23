import React from 'react'
import abImage from '../assets/heroimg.png'; // Adjust the path to your contact image
import './contact.css'; // Assuming you have a CSS file for styling
import ContactSection from '../components/ContactSection';  
function Contact() {
  return (
    <div>

          <section className="about-section-pg">
              <div className="about-container">
                <div className="about-left">
                  <h1>
                    <span className="ab-tital">Contact Us</span>{' '}
                 
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
<ContactSection/>
 <section className="contact-section">
      <div className="container">
        

        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/place/Air+Ambulance+India+-+Human+Care+World+Wide/@19.0898291,72.8376808,17z/data=!4m14!1m7!3m6!1s0x3be7c9a456064f5b:0x3d43529050f210bf!2sAir+Ambulance+India+-+Human+Care+World+Wide!8m2!3d19.0898291!4d72.8376808!16s%2Fg%2F1td2sc4w!3m5!1s0x3be7c9a456064f5b:0x3d43529050f210bf!8m2!3d19.0898291!4d72.8376808!16s%2Fg%2F1td2sc4w?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact