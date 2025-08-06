// import React from 'react';
// import './aboutsection.css';
// // Home.jsx
// import '../App.css';
// import '../index.css';



// const AboutSection = () => {
//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <div className="about-grid">
//           <div className="about-illustration">
//             <div className="illustration-box">
//               <div className="doctor-icon"></div>
//               <div className="pulse-icon">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//               </div>
//               <div className="family-icons">
//                 <div className="family-circle one"></div>
//                 <div className="family-circle two"></div>
//                 <div className="family-circle three"></div>
//               </div>
//               <p className="caring-message">"Your family's wellbeing is our priority"</p>
//             </div>
//           </div>
//           {/* Content */}
//           <div className="about-content">
//             <div className="section-header-about">
//               <span className="section-subtitle" >About MediTrain</span>
//               <h2 className="section-title-d">
//                 Compassionate Care When You Need It Most
//               </h2>
//             </div>

//             <p className="section-description-d">
//               At MediTrain, we understand that medical emergencies can be overwhelming for families.
//               Our mission is to provide not just medical transport, but emotional support and peace of mind
//               during the most challenging times. Every journey we undertake is guided by compassion,
//               professionalism, and an unwavering commitment to saving lives.
//             </p>

//             <div className="about-features">
//               <div className="feature-card">
//                 <div className="feature-icon heart-icon">
//                   <svg viewBox="0 0 24 24">
//                     <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="feature-title-ab-sec">Compassionate</h3>
//                 <p className="feature-description-ab-sec">Every patient is treated like family</p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon experience-icon">
//                   <svg viewBox="0 0 24 24">
//                     <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="feature-title-ab-sec">Experienced</h3>
//                 <p className="feature-description">Trained medical professionals</p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon reliability-icon">
//                   <svg viewBox="0 0 24 24">
//                     <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <h3 className="feature-title-ab-sec">Reliable</h3>
//                 <p className="feature-description">Safe and secure transport</p>
//               </div>
//             </div>
//           </div>

//           {/* Illustration */}
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import React from 'react';
import './aboutsection.css';
import '../App.css';
import '../index.css';
import aboutImage from '../assets/heroimg.png'; // make sure to place your image in src/assets

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Image */}
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="About MediTrain" className="about-image" />
          </div>

          {/* Right Content */}
          <div className="about-content">
            <div className="section-header-about">
              <span className="section-subtitle">About MediTrain</span>
              <h2 className="section-title-d">Compassionate Care When You Need It Most</h2>
            </div>

            <p className="section-description-d">
              At MediTrain, we understand that medical emergencies can be overwhelming for families.
              Our mission is to provide not just medical transport, but emotional support and peace of mind
              during the most challenging times. Every journey we undertake is guided by compassion,
              professionalism, and an unwavering commitment to saving lives.
            </p>

            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon heart-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="feature-title-ab-sec">Compassionate</h3>
                <p className="feature-description-ab-sec">Every patient is treated like family</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon experience-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="feature-title-ab-sec">Experienced</h3>
                <p className="feature-description">Trained medical professionals</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon reliability-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="feature-title-ab-sec">Reliable</h3>
                <p className="feature-description">Safe and secure transport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

