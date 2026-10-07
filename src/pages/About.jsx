import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './about.css';
import abImage from '../assets/about.png';
import ContactSection from '../components/ContactSection';
import {
  FaUserMd,
  FaHeart,
  FaShieldAlt,
  FaClipboardCheck,
  FaHandHoldingMedical,
  FaTrain,
  FaHeartbeat,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

const faqs = [
  {
    q: "1. Why should I choose Humancare Train Ambulance?",
    a: "Humancare Train Ambulance focuses on coordinated long-distance patient transfers with appropriate medical support, trained professionals, and patient-care arrangements based on individual requirements.",
  },
  {
    q: "2. How does Humancare plan a patient's train transfer?",
    a: "We first understand the patient's condition, mobility, destination, travel requirements, and level of medical assistance needed. Our team then coordinates the railway journey and supporting medical arrangements.",
  },
  {
    q: "3. Can Humancare arrange a bed-to-bed patient transfer?",
    a: "Yes. Where required, we can coordinate transportation from the patient's current location to the departure station and arrange onward ambulance support from the destination station to the receiving hospital or location.",
  },
  {
    q: "4. What type of patients can Humancare assist with?",
    a: "Our services can support suitable elderly, bedridden, post-operative, medically dependent, and other patients who require assistance during long-distance transportation. Suitability depends on the patient's medical condition.",
  },
  {
    q: "5. How does Humancare maintain medical care during the journey?",
    a: "Medical support is planned according to the patient's condition. Depending on requirements, trained doctors, nurses, or paramedics and appropriate medical equipment can accompany the patient.",
  },
  {
    q: "6. Can medical equipment be customized for each patient?",
    a: "Yes. The medical setup is determined according to the patient's condition and required level of care. Equipment may include oxygen support, monitoring devices, ventilator assistance, and other essential medical facilities.",
  },
  {
    q: "7. Does Humancare assist families with railway arrangements?",
    a: "Yes. Our team helps coordinate the railway-related requirements involved in arranging a medically supported patient transfer, along with the necessary journey and medical documentation.",
  },
  {
    q: "8. What information is needed to arrange a train ambulance?",
    a: "We generally need details such as the patient's current location, destination, medical condition, mobility status, preferred travel date, and any known requirements such as oxygen, monitoring, or other medical support.",
  },
];

function About() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <>
      <Helmet>
        <title>About Humancare Train Ambulance | Train Ambulance Services India</title>
        <meta
          name="description"
          content="Learn about Humancare Train Ambulance and our medically supported train ambulance services for safe, coordinated long-distance patient transfers across India."
        />
      </Helmet>

      {/* ── Hero Section (Home-style) ── */}
      <section className="ab-hero-section">
        <div className="ab-hero-container">
          <div className="ab-hero-grid">
            {/* Left: Text */}
            <div className="ab-hero-content">
              <h1 className="ab-hero-title">
                About Our Train&nbsp;Ambulance Service
              </h1>
              <h2 className="ab-hero-subtitle">
                Safe &amp; Coordinated Long-Distance Patient Transfers Across India
              </h2>
              <p className="ab-hero-text">
                Humancare Train Ambulance is determined at providing safe and
                coordinated transportation of patients. We deliver reliable
                rail ambulance services with continuous monitoring and
                professional medical care throughout every journey.
              </p>
              <div className="ab-hero-buttons">
                <a href="tel:+919833997373" className="ab-btn-accent">
                  <FaPhoneAlt aria-hidden="true" />
                  <span>Call Us 24/7</span>
                </a>
                <a href="/contact" className="ab-btn-outline">
                  Contact Us
                </a>
              </div>
              <div className="ab-hero-trust-strip" aria-label="Service highlights">
                <span>Nationwide transfers</span>
                <span>Medical team onboard</span>
                <span>24×7 coordination</span>
              </div>
            </div>

            {/* Right: Image */}
            <div className="ab-hero-image-wrapper">
              <div className="ab-hero-card">
                <img
                  src={abImage}
                  alt="About Humancare Train Ambulance"
                  className="ab-hero-img"
                  loading="eager"
                />
              </div>
              <div className="ab-hero-image-note">
                <span className="ab-hero-status-dot" />
                <span>
                  <strong>Care throughout the journey</strong>
                  <small>Support planned around each patient</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="ab-intro-section">
        <div className="ab-intro-inner">
          <span className="ab-label">Who We Are</span>
          <h2 className="ab-section-heading">Medical Care That Travels With You</h2>
          <p className="ab-intro-text">
            Humancare Train Ambulance is determined at providing safe and co-ordinated transportation of patients.
            Humancare Train Ambulance delivers reliable train ambulance service for the long-distance transportation of the patients.
            Rail ambulance service is the co-operative travel on railway plus suitable medical support that assists in providing the patient with professional care.
            Continuous monitoring will be performed with our services.
          </p>
        </div>
      </section>

      {/* ── About Our Services ── */}
      <section className="ab-services-section">
        <div className="ab-services-inner">
          <span className="ab-label">Our Services</span>
          <h2 className="ab-section-heading">About Our Train Ambulance Services</h2>
          <h3 className="ab-sub-heading">Carefully Coordinated Medical Transfers Across India</h3>
          <div className="ab-services-text">
            <p>
              Humancare Train Ambulance: patients requiring long-distance transportation of the train are assured of our train ambulance services.
              Our train ambulance services are designed keeping in mind the patient's condition, comfort, and convenience ensuring you receive the requested amount of support.
            </p>
            <p>
              Whether it is elderly and bed-ridden people, post-operative, or medically dependent cases, our specialist team arranges well trained medical staff and equipment as per your needs.
              The ICU Train Ambulance gives all kinds of advanced care facilities for the patients depending upon their medical necessity.
            </p>
            <p>
              Humancare Train Ambulance services assist families in planning safe patient transfer between different cities in India.
              Whether it is metro or medical preparation, train travel assistance and destination ambulance services, Humancare train ambulance services aim to keep the patient cared for throughout the transfer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values: Experienced, Compassionate, Reliable ── */}
      <section className="ab-values-section">
        <div className="ab-values-inner">
          {[
            {
              icon: <FaUserMd size={30} />,
              title: "Experienced",
              text: "Our train ambulance service is supported by trained medical professionals who provide attentive care and supervision according to each patient's medical requirements throughout the journey.",
              color: "value-blue",
            },
            {
              icon: <FaHeart size={30} />,
              title: "Compassionate",
              text: "We understand that long-distance medical transfers can be stressful for families. Our team provides respectful, patient-focused care while helping make the rail ambulance service experience more comfortable and organized.",
              color: "value-red",
            },
            {
              icon: <FaShieldAlt size={30} />,
              title: "Reliable",
              text: "From medical preparation and railway coordination to destination assistance, we deliver a dependable train ambulance journey with appropriate medical support from departure to destination.",
              color: "value-green",
            },
          ].map((val) => (
            <div className={`ab-value-card ${val.color}`} key={val.title}>
              <div className="ab-value-icon">{val.icon}</div>
              <h3 className="ab-value-title">{val.title}</h3>
              <p className="ab-value-text">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Commitment ── */}
      <section className="ab-commitment-section">
        <div className="ab-commitment-inner">
          <span className="ab-label">Our Promise</span>
          <h2 className="ab-section-heading">Our Commitment to Every Patient</h2>
          <div className="ab-commitment-grid">
            {[
              {
                icon: <FaClipboardCheck size={26} />,
                title: "Prompt Medical Coordination",
                text: "When a patient needs long-distance transportation, our team focuses on timely planning and careful coordination. From booking train ambulances and preparing medical supplies to arranging railway travel and patient transfers, we keep the process organized.",
              },
              {
                icon: <FaHandHoldingMedical size={26} />,
                title: "Compassionate Medical Care",
                text: "Every patient deserves respectful and attentive care. Our medical team provides appropriate support throughout the train ambulance service, helping patients and families feel informed, comfortable, and supported during the journey.",
              },
              {
                icon: <FaTrain size={26} />,
                title: "Dependable End-to-End Support",
                text: "From the initial enquiry to the final destination, Humancare Train Ambulance coordinates the essential aspects of the transfer. Our goal is to provide a reliable rail ambulance service with appropriate medical supervision and support throughout the journey.",
              },
            ].map((item) => (
              <div className="ab-commitment-card" key={item.title}>
                <div className="ab-commitment-icon">{item.icon}</div>
                <h3 className="ab-commitment-title">{item.title}</h3>
                <p className="ab-commitment-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="ab-diff-section">
        <div className="ab-diff-inner">
          <span className="ab-label">Why Choose Us</span>
          <h2 className="ab-section-heading">What Makes Our Train Ambulance Service Different</h2>
          <p className="ab-diff-lead">
            From medical planning and equipment preparation to railway coordination and destination support, we focus on every important part of the patient transfer.
          </p>
          <div className="ab-diff-grid">
            {[
              {
                icon: <FaRupeeSign size={26} />,
                title: "Cost-Effective Medical Transportation",
                text: "Our train ambulance service offers a practical option for long-distance patient transfers, helping families access medically supported transportation with the level of care required for the journey.",
              },
              {
                icon: <FaHeartbeat size={26} />,
                title: "Advanced ICU Support Onboard",
                text: "Our ICU train ambulance can be arranged with essential equipment such as ventilators, patient monitors, oxygen support, suction systems, and infusion equipment based on the patient's medical needs.",
              },
              {
                icon: <FaUserMd size={26} />,
                title: "Experienced Medical Professionals",
                text: "Patients can be accompanied by trained doctors, nurses, or paramedics according to their condition and care requirements, providing appropriate supervision throughout the train ambulance journey.",
              },
              {
                icon: <FaMapMarkerAlt size={26} />,
                title: "Extensive Coverage Across India",
                text: "Our train ambulance service in India supports patient transfers across major railway routes, connecting cities, towns, and healthcare facilities through coordinated rail ambulance services.",
              },
            ].map((item) => (
              <div className="ab-diff-card" key={item.title}>
                <div className="ab-diff-icon">{item.icon}</div>
                <h3 className="ab-diff-title">{item.title}</h3>
                <p className="ab-diff-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ab-faq-section">
        <div className="ab-faq-inner">
          <span className="ab-label">FAQs</span>
          <h2 className="ab-section-heading">Frequently Asked Questions</h2>
          <div className="ab-faq-list">
            {faqs.map((faq, idx) => (
              <div
                className={`ab-faq-item ${openFaq === idx ? "ab-faq-open" : ""}`}
                key={idx}
              >
                <button
                  className="ab-faq-question"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="ab-faq-icon">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="ab-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default About;
