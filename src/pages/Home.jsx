import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserCheck, FaRoute, FaFileAlt, FaBriefcaseMedical } from "react-icons/fa";
import './home.css';
import AboutSection from "../components/AboutSection";
import TrainAmbulanceSection from '../components/TrainAmbulanceSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import heroImage from '../assets/10.webp';
import trainAmbulance from "../assets/10.webp";
import RailAmbulance from "../assets/Rail Ambulance.webp";
import Railcost from "../assets/Train Ambulance cost In India.png";
import TrainAmbulanceCities from "../components/TrainAmbulanceCities";


import { Helmet } from "react-helmet";
import { Train, ChevronDown, Clock, Globe, CreditCard, CheckCircle2  } from "lucide-react";



const HeroSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
const faqs = [
  {
    question: 'What is a Train Ambulance Service and how does it work in India?',
    answer:
      'A train ambulance service is a specialized medical transfer system that converts train coaches into fully equipped ICUs. Patients are accompanied by doctors, nurses, and paramedics throughout the journey. These rail ambulances in India ensure safe, affordable long-distance transfers for critical or bedridden patients.'
  },
  {
    question: 'Which cities offer the best Train Ambulance Services in India?',
    answer:
      'We provide train ambulance services across major cities including Patna, Delhi, Mumbai, Kolkata, Chennai, Ranchi, Bangalore, Guwahati, and Lucknow. Each railway ambulance includes critical care equipment, oxygen support, ventilators, and a full medical team for uninterrupted monitoring.'
  },
  {
    question: 'How do I book a Train Ambulance from Patna to Delhi?',
    answer:
      'Booking a train ambulance from Patna to Delhi is simple. You can contact our 24/7 emergency helpline or fill out the train ambulance booking form online. Our team arranges the railway ambulance coach, medical staff, and bed-to-bed transfer in coordination with Indian Railways.'
  },
  {
    question: 'What medical facilities are available in a Rail Ambulance?',
    answer:
      'Each rail ambulance in India functions like a moving ICU. Facilities include oxygen cylinders, ventilators, cardiac monitors, suction machines, infusion pumps, emergency medicines, and advanced life support. These make railway ambulances ideal for transporting critically ill patients safely.'
  },
  {
    question: 'Is a Train Ambulance safe for critical patients?',
    answer:
      'Yes, train ambulance services are among the safest modes of patient transport in India. The movement is smooth, the environment is temperature-controlled, and medical professionals continuously monitor the patient’s vitals. It’s a preferred option for long-distance transfers compared to road ambulances.'
  },
  {
    question: 'What is the difference between Train Ambulance and Air Ambulance Services?',
    answer:
      'A train ambulance offers cost-effective patient transfer across cities, while an air ambulance provides faster transfers for emergencies requiring immediate treatment. For instance, rail ambulance from Patna to Delhi is economical for stable patients, whereas air ambulance Bangalore to Delhi suits time-sensitive cases.'
  },
  {
    question: 'How can I find a Train Ambulance Service near me?',
    answer:
      'To find a train ambulance service near you, simply search for “rail ambulance service near me” or contact us directly. Our nationwide network covers Patna, Delhi, Mumbai, Ranchi, Chennai, Bangalore, and Guwahati, ensuring you get quick, expert medical transport support anywhere in India.'
  }
];

  const equipmentData = [
    {
      icon: '❤️',
      title: 'Fully Equipped ICU on Rails',
      desc: 'Monitors, ventilators, suction machines, and oxygen supply for critical patient transport.',
      color: 'red',
    },
    {
      icon: '🛡️',
      title: 'Certified Medical Team',
      desc: 'Doctors and nurses trained for train emergency medical services.',
      color: 'green',
    },
    {
      icon: '🕒',
      title: 'Affordable & Transparent Costs',
      desc: 'Clear breakdown of train ambulance charges and rail ambulance cost in India.',
      color: 'blue',
    },

    {
      icon: '🧑‍⚕️',
      title: 'Nationwide Reach ',
      desc: 'Services across Patna, Ranchi, Delhi, Kolkata, Chennai, Mumbai, Bangalore, Lucknow, Siliguri, and Guwahati.',
      color: 'green',
    },

  ];



  
  return (
    <>
<Helmet>

  {/* Canonical */}
  <link rel="canonical" href="https://humancaretrainambulance.com/" />

  {/* Title */}
  <title>ICU Train Ambulance Across India | Affordable Rail Ambulance Services 24x7</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Book ICU-equipped train ambulance across India with doctors onboard. Transparent rail ambulance cost, fast coordination, and 24x7 emergency support."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="train ambulance service, rail ambulance service, railway ambulance service, Humancare Train Ambulance"
  />

  {/* Preload Hero Image */}
  <link rel="preload" as="image" href={heroImage} />

  {/* Open Graph */}
  <meta property="og:title" content="Train Ambulance Service in India | Rail Ambulance - Humancare Train Ambulance" />
  <meta
    property="og:description"
    content="Fast & affordable train ambulance service in India with ICU, doctor, and trained medical staff."
  />
  <meta property="og:image" content={`https://humancaretrainambulance.com${heroImage}`} />
  <meta property="og:url" content="https://humancaretrainambulance.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Train Ambulance Service in India | Rail Ambulance - Humancare Train Ambulance" />
  <meta
    name="twitter:description"
    content="24/7 train ambulance & rail ambulance service in India with ICU setup and medical professionals."
  />
  <meta name="twitter:image" content={`https://humancaretrainambulance.com${heroImage}`} />

  {/* Local Business Schema (Fully Corrected With Full Address) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Humancare Train Ambulance",
      "url": "https://humancaretrainambulance.com/",
      "image": "https://humancaretrainambulance.com/logo.png",
      "logo": "https://humancaretrainambulance.com/logo.png",
      "description": "24/7 train ambulance service across India with ICU setup, medical staff, and affordable rail ambulance transport.",
      "telephone": "+919833997373",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G-30, Dheeraj Heritage, S. V. Road, Milan Subway Junction, Santacruz (West)",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400054",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    }
    `}
  </script>

  {/* Service Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Train Ambulance Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Humancare Train Ambulance",
        "url": "https://humancaretrainambulance.com/"
      },
      "areaServed": { "@type": "Country", "name": "India" },
      "description": "Affordable and professional train ambulance service with ICU, medical escort, doctor support, and safe long-distance transport."
    }
    `}
  </script>

  {/* FAQ Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a train ambulance service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A train ambulance service provides medical transportation through railways with ICU setup, medical escorts, and trained doctors for safe long-distance patient transfer."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a train ambulance cost in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Train ambulance cost in India depends on distance, medical team, and coach type. Humancare Train Ambulance offers affordable pricing compared to air ambulance services."
          }
        },
        {
          "@type": "Question",
          "name": "Is train ambulance available 24/7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Humancare Train Ambulance provides 24/7 rail ambulance and emergency medical transport services across India."
          }
        }
      ]
    }
    `}
  </script>

</Helmet>



      {/* ✅ Your Existing Page Content */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Content */}
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="satish">Train Ambulance Service in India | </span>
                <span className="text-accent">24x7 Rail Ambulance</span><br />
                <span className="satish">Across India</span>
              </h1>
              <p className="hero-subtext">
Train Ambulance Service & Rail Ambulance in India – Safe, Comfortable ICU Train Ambulance with Ventilator Support | Emergency Train Ambulance Service Across India
              </p>
              <div className="hero-buttons">
                <a href="tel:+919833997373" className="btn-link-wrapper">
                  <button className="btn-accent">Request Ambulance</button>
                </a>
                <a href="/Trainambulance" className="btn-link-wrapper" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline">Learn More</button>
                </a>
              </div>
            </div>

            {/* Train Image */}
            <div className="hero-image-wrapper">
              <div className="hero-card">
<img
  src={heroImage}
  alt="Train Ambulance"
  className="hero-train-image"
  loading="eager"
  fetchpriority="high"
  width="1200"
  height="600"
/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <TrainAmbulanceSection />
      <WhyChooseUs />


      <section className="benefits-section" aria-label="Key Benefits">


<div className="benefits-container">
<h2 className="benefits-title">Reliable Train & Rail Ambulance Services Across India</h2>


<p className="benefits-description">
Humancare World Wide delivers dependable train ambulance service in India and rail ambulance service for patients requiring safe, long-distance medical transportation. Our indian train ambulance operations are supported by advanced medical equipment, trained doctors and nurses, and smooth coordination to ensure stress-free transfers with continuous care across India.<br /><br />
If you are searching for a train ambulance service near me, our team is available 24/7 to arrange fast assistance with complete medical supervision. Through our integration with the Indian railway ambulance service, we ensure timely arrangements, comfortable travel, and dedicated monitoring throughout the journey.
<br /><br />
Families often ask about train ambulance cost in India and train ambulance price. We maintain full transparency by clearly explaining train ambulance charges, rail ambulance cost, and overall train ambulance service cost, offering reliable medical transfers at cost-effective rates. At Humancare World Wide, patient safety, comfort, and timely care remain our top priority.</p>
</div>
</section>

            <section className="how-it-works">
        <h2 className="how-title">How Our Train Ambulance Works
</h2>
        {/* <p className="how-subtitle">Simple steps to secure emergency medical transport</p> */}

        <div className="how-grid">
          <div className="how-step">
            <div className="how-icon blue">1</div>
            <h3>Patient Assessment</h3>
            <p>
            We review the condition and decide the suitable train route.
            </p>
          </div>

          <div className="how-step">
            <div className="how-icon blue">2</div>
            <h3>Coach Booking & Preparation</h3>
            <p>
Coordination with railway ambulance service and train scheduling.
            </p>
          </div>

          <div className="how-step">
            <div className="how-icon blue">3</div>
            <h3>Setup Installation</h3>
            <p>
ICU setup with ventilator and monitors before boarding.            </p>
          </div>


          <div className="how-step">
            <div className="how-icon blue">4</div>
            <h3>Continuous Care</h3>
            <p>
Onboard medical assistance in train until safe hospital handover.


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

        <div className="equipment-grid-home">
          {equipmentData.map((item, index) => (
            <div className="equipment-card" key={index}>
              <div className={`equipment-icon ${item.color}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="train-ambulance-section">
        <div className="train-container">
          <div className="train-text-box">
            <h2 className="train-title">Train Ambulance Cost in India</h2>
            <p className="train-text">
              If you are looking for the train ambulance cost in India or rail ambulance cost, our pricing is customized based on distance, patient condition, and required medical setup. We ensure complete transparency while explaining the cost of train ambulance in India, train ambulance charges, and overall train ambulance service cost before confirmation.
            </p>
            <p className="train-text">
            For example, the train ambulance cost for routes such as train ambulance from Patna to Delhi or train ambulance from Patna to Mumbai depends on the ICU configuration and coach type, with approximate train ambulance price ranging between ₹75,000 and ₹95,000.
            </p>
            <p className="train-text">
             For example, the train ambulance cost for routes such as train ambulance from Patna to Delhi or train ambulance from Patna to Mumbai depends on the ICU configuration and coach type, with approximate train ambulance price ranging between ₹75,000 and ₹95,000.
            </p>
          </div>
          <div className="train-image-box">
            <img
              src={Railcost}
              alt="Train ambulance illustration"
              className="train-image"
            />
          </div>
        </div>

      </section>
      <section className="train-ambulance-section">
        <div className="train-container">
          <div className="train-image-box">
            <img
              src={RailAmbulance}
              alt="Train ambulance working process"
              className="train-image"
            />
          </div>
          <div className="train-text-box">
            <h2 className="train-title">Trusted Bed-to-Bed Medical Transfers Across India
</h2>
<p className="train-text">
Our rail ambulance in India delivers safe, fully supervised medical transfers for critically ill patients over long distances. We manage every step of the train ambulance service—from ambulance train scheduling and onboard ICU setup to final hospital handover—ensuring continuous expert care throughout the journey. Whether you require a train ambulance from Bangalore to Chennai, Patna to Delhi, Patna to Mumbai, or need services in Ranchi, Siliguri, Lucknow, Jamshedpur, Kolkata, Guwahati, and other cities, our train ambulance service across India ensures quick availability and seamless coordination.
Recognized as one of the best train ambulance services in India, we operate through Rajdhani and other approved medical routes, offering ICU train ambulance coaches equipped with ventilators, oxygen support, and constant doctor supervision. With transparent train ambulance cost in India and competitive rail ambulance cost, our train ambulance services are significantly more economical than air transport while delivering the same hospital-grade critical care—making life-saving medical travel accessible for patients and families nationwide.
            </p>
          </div>

        </div>
      </section>
  
<section className="trust-section">
        <h2>Why Families Trust Humancare Train Ambulance</h2>

    <div className="trust-grid">
      <div className="trust-card">
        <div className="trust-icon">
          <Clock size={28} />
        </div>
        <h3 className="trust-title">24/7 nationwide coordination</h3>
        <p className="trust-desc">Round-the-clock support and coordination across India for fast, reliable transfers.</p>
      </div>

      <div className="trust-card">
        <div className="trust-icon">
          <CreditCard size={28} />
        </div>
        <h3 className="trust-title">Affordable train ambulance charges</h3>
        <p className="trust-desc">Transparent pricing and cost-effective solutions for long-distance medical transport.</p>
      </div>

      <div className="trust-card">
        <div className="trust-icon">
          <Globe size={28} />
        </div>
        <h3 className="trust-title">Seamless booking and IRCTC support</h3>
        <p className="trust-desc">Hassle-free booking with IRCTC coordination and end-to-end bed-to-bed transfer assistance.</p>
      </div>

      <div className="trust-card">
        <div className="trust-icon">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="trust-title">Best train ambulance service in India</h3>
        <p className="trust-desc">Proven success rate and experienced medical teams ensure safe patient transfers.</p>
      </div>
    </div>
  </section>
      <TestimonialsSection />
      <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs for Train & Rail Ambulance Services in India</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <ChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="booking-section">
      <div className="booking-container">

        {/* MAIN CONTENT */}
        <h2 className="booking-title">Train Ambulance Booking</h2>

        <p className="booking-description">
          Booking a train ambulance in India with Humancare World Wide is simple, fast, and fully supported.
          Our dedicated team assists families at every step of the train ambulance booking process, ensuring
          timely arrangements and complete medical coordination. If you are searching for how to book train 
          ambulance or a train ambulance service near me, our experts are available 24/7 to guide you.
        </p>

        <p className="booking-description">
          From medical assessment and documentation to coordination with the Indian Railway ambulance service 
          and onboard ICU setup, we manage the entire rail ambulance service process with precision. Whether 
          you need an emergency train ambulance or a planned medical transfer, our train ambulance service in 
          India ensures safe, supervised, and stress-free patient transport across the country.
        </p>

        {/* CALL BOX */}
        <div className="call-box">
          <FaPhoneAlt className="call-icon" />
          <div>
            <h3>Call Our Medical Team (24/7)</h3>
            <p>Contact us for immediate assistance with train ambulance booking anywhere in India.</p>
          </div>
        </div>

        {/* 4 STEP PROCESS */}
        <div className="steps-grid">

          <div className="step-card">
            <FaUserCheck className="step-icon" />
            <h4>Patient Assessment</h4>
            <p>
              Our doctors review the patient’s condition to determine ICU needs and medical support 
              for the train ambulance service.
            </p>
          </div>

          <div className="step-card">
            <FaRoute className="step-icon" />
            <h4>Cost & Route Confirmation</h4>
            <p>
              We share clear details on train ambulance cost in India and finalize the best route 
              and coach type.
            </p>
          </div>

          <div className="step-card">
            <FaFileAlt className="step-icon" />
            <h4>Railway Coordination & Documentation</h4>
            <p>
              We handle approvals and coordination with the Indian Railway ambulance service 
              for smooth scheduling.
            </p>
          </div>

          <div className="step-card">
            <FaBriefcaseMedical className="step-icon" />
            <h4>Onboard ICU Setup & Transfer</h4>
            <p>
              The ICU train ambulance is prepared, and the patient is transferred safely with 
              continuous medical supervision.
            </p>
          </div>

        </div>

      </div>
    </section>
    <TrainAmbulanceCities />
      <ContactSection />

      
   
    </>
  );
};

export default HeroSection;
