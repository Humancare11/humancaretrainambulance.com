import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './trainambulance.css';
import abImage from '../assets/trainbanner.png';
import trainsec from '../assets/trainsec.png';
import ContactSection from '../components/ContactSection';
import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaTrain,
  FaTools,
  FaRoute,
  FaHeartbeat,
  FaUserMd,
  FaCheckCircle,
  FaMedkit,
  FaRupeeSign,
  FaHandHoldingMedical,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const howSteps = [
  {
    icon: <FaClipboardCheck size={26} />,
    title: "Patient & Medical Review",
    desc: "We review the patient's medical condition, mobility, treatment requirements, and journey needs to determine the appropriate train ambulance service.",
  },
  {
    icon: <FaTrain size={26} />,
    title: "Route Planning & Booking",
    desc: "Our team evaluates the travel route and coordinates the required railway arrangements, medical support, and train ambulance booking for the planned transfer.",
  },
  {
    icon: <FaTools size={26} />,
    title: "Medical Equipment Preparation",
    desc: "The required ICU train ambulance setup and medical equipment are prepared according to the patient's condition before the journey begins.",
  },
  {
    icon: <FaRoute size={26} />,
    title: "Supervised Onboard Transfer",
    desc: "Trained medical professionals accompany the patient during the train ambulance journey, providing appropriate monitoring and medical support throughout the transfer.",
  },
];

const benefits = [
  {
    icon: <FaClipboardCheck size={26} />,
    title: "Timely Medical Coordination",
    desc: "Our team coordinates the essential arrangements for a train ambulance service, including medical preparation, railway requirements, and patient boarding, helping keep the transfer organized.",
  },
  {
    icon: <FaMedkit size={26} />,
    title: "Advanced Medical Setup",
    desc: "An ICU train ambulance can be equipped with oxygen support, ventilator assistance, patient monitors, suction equipment, and other medical facilities according to the patient's requirements.",
  },
  {
    icon: <FaUserMd size={26} />,
    title: "Experienced Medical Professionals",
    desc: "Qualified doctors, nurses, or paramedics can accompany patients during the train ambulance journey, providing appropriate supervision and support based on their medical condition.",
  },
  {
    icon: <FaRupeeSign size={26} />,
    title: "Cost-Conscious Patient Transportation",
    desc: "A train ambulance can be a practical option for suitable long-distance transfers when compared with other modes of medical transportation, depending on the patient's condition.",
  },
  {
    icon: <FaHandHoldingMedical size={26} />,
    title: "Complete Transfer Assistance",
    desc: "From medical documentation and journey planning to railway coordination and destination support, our team helps manage the key arrangements involved in the rail ambulance service.",
  },
  {
    icon: <FaMapMarkerAlt size={26} />,
    title: "Pan-India Service Coverage",
    desc: "Our train ambulance service in India supports long-distance patient transfers across major railway routes, helping connect patients with hospitals and healthcare facilities in different cities.",
  },
];

const faqs = [
  {
    q: "1. Can a family member travel with the patient in a train ambulance?",
    a: "Yes, where railway and medical arrangements permit, an accompanying family member may travel with the patient. The available arrangement depends on the patient's medical setup and journey requirements.",
  },
  {
    q: "2. Can a patient be transferred between two hospitals using a train ambulance?",
    a: "Yes. A train ambulance can be coordinated for hospital-to-hospital transfers when long-distance railway transportation is medically appropriate for the patient.",
  },
  {
    q: "3. Can road ambulance support be arranged at both railway stations?",
    a: "Yes. Road ambulance coordination can be arranged at the departure and destination stations when required, helping connect the rail ambulance service with the patient's current and receiving locations.",
  },
  {
    q: "4. What happens if the patient needs continuous oxygen during the journey?",
    a: "If continuous oxygen is medically required, the transportation plan can include appropriate oxygen support. The required setup is determined according to the patient's condition before the train ambulance journey.",
  },
  {
    q: "5. Can a patient travel by train after surgery?",
    a: "Some post-operative patients may be suitable for railway transportation with medical supervision. The patient's condition, mobility, recovery status, and required medical support should be assessed before arranging the transfer.",
  },
  {
    q: "6. What medical equipment can be arranged inside a train ambulance?",
    a: "Depending on the case, the ICU train ambulance setup may include patient monitors, oxygen support, ventilator assistance, suction equipment, infusion equipment, and other essential medical facilities.",
  },
  {
    q: "7. Can train ambulance services be arranged from smaller cities?",
    a: "Yes. Our train ambulance service in India can support transfers involving smaller cities and towns where suitable railway connectivity and medical transportation arrangements are available.",
  },
  {
    q: "8. How far in advance should a train ambulance be arranged?",
    a: "The required planning time depends on the patient's condition, travel route, railway availability, medical setup, and urgency of the transfer. Earlier coordination generally allows more time to organize the required arrangements.",
  },
  {
    q: "9. What factors are considered before confirming a train ambulance?",
    a: "Our team considers the patient's medical condition, mobility, travel distance, railway route, required medical professionals, equipment, oxygen or ventilator needs, and supporting ambulance requirements before planning the train ambulance service.",
  },
];

const stats = [
  { value: "1500+", label: "Lives Safely Transported" },
  { value: "99.8%", label: "Successful Transfers" },
  { value: "24/7",  label: "Coordination Available" },
  { value: "48hrs", label: "Max Journey Duration" },
];

function Trainambulance() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <>
      <Helmet>
        <title>Train Ambulance Service in India | ICU Rail Ambulance</title>
        <meta
          name="description"
          content="Get safe and medically supported train ambulance services across India with ICU support, trained medical professionals, oxygen, monitoring, and patient care."
        />
        <link rel="canonical" href="https://humancaretrainambulance.com/Trainambulance" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="ta-hero-section">
        <div className="ta-hero-container">
          <div className="ta-hero-grid">
            <div className="ta-hero-content">
              <h1 className="ta-hero-title">
                Specialized Train Ambulance Care for Long-Distance Transfers
              </h1>
              <h2 className="ta-hero-subtitle">
                Safe Medical Transportation with Professional Care &amp; Monitoring
              </h2>
              <p className="ta-hero-text">
                Safe medical transportation for patients who need professional
                care, monitoring, and support throughout their railway journey.
                Humancare Train Ambulance can guide you through India's
                long-distance travel with preparation as per your medical condition.
              </p>
              <div className="ta-hero-buttons">
                <a href="tel:+919833997373" className="ta-btn-accent">
                  <FaPhoneAlt aria-hidden="true" />
                  <span>Call Us 24/7</span>
                </a>
                <a href="/contact" className="ta-btn-outline">Know More</a>
              </div>
              <div className="ta-hero-trust-strip">
                <span>Nationwide coverage</span>
                <span>ICU onboard setup</span>
                <span>24×7 coordination</span>
              </div>
            </div>
            <div className="ta-hero-image-wrapper">
              <div className="ta-hero-card">
                <img
                  src={abImage}
                  alt="Train Ambulance Service in India"
                  className="ta-hero-img"
                  loading="eager"
                />
              </div>
              <div className="ta-hero-image-note">
                <span className="ta-hero-status-dot" />
                <span>
                  <strong>Advanced ICU on Rails</strong>
                  <small>Ventilator, oxygen &amp; monitoring available</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Train Ambulance ── */}
      <section className="ta-about-section">
        <div className="ta-about-inner">
          <div className="ta-about-grid">
            <div className="ta-about-image">
              <img src={trainsec} alt="Train Ambulance medical setup" className="ta-about-img" />
            </div>
            <div className="ta-about-content">
              <span className="ta-label">Why Train Ambulance?</span>
              <h2 className="ta-section-heading">
                Why Choose a Train Ambulance for Long-Distance Patient Transfers?
              </h2>
              <p className="ta-about-text">
                For patients who are medically stable and in need of ongoing monitoring
                during movement, a train ambulance can be an efficient and cost-effective
                solution for long-distance travel. It offers transportation between various
                cities with the necessary medical escort while optimizing the widespread
                rail system in India.
              </p>
              <p className="ta-about-text">
                For patients who do not require emergency air evacuation, a train ambulance
                can be a practical option. Every journey is customized as per each patient's
                clinical needs with trained clinicians and suitable onboard medical attention.
                Patients who are traveling for treatment, hospital transfer, or returning home
                can rely on Humancare Train Ambulance even for planned transfers.
              </p>
              <p className="ta-about-text">
                In case of long-distance travel, select a train ambulance service which
                brings safe travel with suitable medical backup and complete coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats + ICU Card ── */}
      <section className="ta-stats-section">
        <div className="ta-stats-inner">
          <div className="ta-icu-card">
            <div className="ta-icu-icon"><FaHeartbeat size={34} /></div>
            <h3>Advanced ICU Support on Rails</h3>
            <p>
              Our ICU train ambulance can be arranged with essential medical
              facilities such as ventilator support, oxygen, patient monitoring,
              suction equipment, and other critical-care equipment according to
              the patient's medical requirements.
            </p>
          </div>
          <div className="ta-stats-grid">
            {stats.map((s) => (
              <div className="ta-stat-card" key={s.label}>
                <span className="ta-stat-value">{s.value}</span>
                <span className="ta-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="ta-how-section">
        <div className="ta-how-inner">
          <span className="ta-label">Process</span>
          <h2 className="ta-section-heading">How It Works</h2>
          <div className="ta-how-grid">
            {howSteps.map((step, i) => (
              <div className="ta-how-card" key={step.title}>
                <div className="ta-how-icon">{step.icon}</div>
                <span className="ta-how-num">{i + 1}</span>
                <h3 className="ta-how-title">{step.title}</h3>
                <p className="ta-how-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="ta-benefits-section">
        <div className="ta-benefits-inner">
          <span className="ta-label">Key Benefits</span>
          <h2 className="ta-section-heading">Key Benefits of Our Train Ambulance Service</h2>
          <div className="ta-benefits-grid">
            {benefits.map((b) => (
              <div className="ta-benefit-card" key={b.title}>
                <div className="ta-benefit-icon">{b.icon}</div>
                <h3 className="ta-benefit-title">{b.title}</h3>
                <p className="ta-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ta-faq-section">
        <div className="ta-faq-inner">
          <span className="ta-label">FAQs</span>
          <h2 className="ta-section-heading">Frequently Asked Questions About Train Ambulance Services</h2>
          <div className="ta-faq-list">
            {faqs.map((faq, idx) => (
              <div
                className={`ta-faq-item ${openFaq === idx ? "ta-faq-open" : ""}`}
                key={idx}
              >
                <button
                  className="ta-faq-question"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="ta-faq-icon">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="ta-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ta-cta-section">
        <div className="ta-cta-inner">
          <h2 className="ta-cta-title">Need a Train Ambulance Service?</h2>
          <p className="ta-cta-desc">
            Contact Humancare Train Ambulance for coordinated, medically
            supported long-distance patient transfers across India. Available 24×7.
          </p>
          <div className="ta-cta-buttons">
            <a href="tel:+919833997373" className="ta-cta-accent">
              <FaPhoneAlt aria-hidden="true" />
              <span>Call Now</span>
            </a>
            <a href="/contact" className="ta-cta-outline">Send Enquiry</a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Trainambulance;