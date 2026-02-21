import React from 'react'
import abImage from '../assets/contact.png'; // Adjust the path to your contact image
import './contact.css'; // Assuming you have a CSS file for styling
import ContactSection from '../components/ContactSection';  
import Herobanner from '../components/Herobanner';
function Contact() {
  return (
    <>
    <Herobanner
        image= {abImage}
         heading="Contact Us – 24/7 Train Ambulance Services in India | Human Care Worldwide"
      paragraph="Need urgent train ambulance support? Contact Human Care Worldwide for safe, quick, and affordable patient transfer by rail across India. Available 24/7 with medical team, documentation, and end-to-end coordination."
      buttonText="Know More"
      buttonLink="/about"
      />
   
<ContactSection/>
 <section className="contact-section">
      <div className="container">
        

        <div className="map-container">
      <iframe
        title="Humancare Train Ambulance Service Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109195.66956564554!2d72.79760577689274!3d19.073156996982327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96e9733ec95%3A0xefdf92092073516a!2sHumancare%20Train%20Ambulance%20Service!5e1!3m2!1sen!2sin!4v1771396506559!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </div>
    </section>
    </>
  )
}

export default Contact