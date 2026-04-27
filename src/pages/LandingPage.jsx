import React from 'react'
import "./LandingPage.css";
import TrainICU from "../assets/trainsec.png";
import TrainEmergency from "../assets/Rail-Ambulance.webp";
import { useState } from "react";
// import { Helmet } from "react-helmet-async";
import {
  Monitor,
  Wind,
  HeartPulse,
  UserRound,
  Pill,
  ArrowLeftRight,
  Activity,
  Globe,
  PhoneCall,
  FileText,
  TicketCheck,
  Train,
  Award,
  Users,
  Clock,
  Stethoscope,
  IndianRupee,
  Star,
  ChevronDown,
  Shield,
  Zap,
  Check,
  MessageCircle
} from "lucide-react";
import TrainAmbulanceCities from "../components/TrainAmbulanceCities";
import ContactSection from '../components/ContactSection';


const faqs = [
  {
    question: "What is a Train Ambulance Service? ",
    answer:
      "A Train ambulance service is a medical transport system where a train compartment is converted into a fully equipped ICU to safely transfer critically ill patients over long distances with doctor supervision."
  },
  {
    question: "When should I choose Train Ambulance Service instead of Air Ambulance?",
    answer:
      "Train ambulance service is best for stable or semi-critical patients who need long-distance transfer at a more affordable cost while still receiving ICU-level medical care and monitoring."
  },
  {
    question: "What medical facilities are available in your Train Ambulance Service?",
    answer:
      "Our train ambulance service includes ICU setup, ventilator support, oxygen supply, cardiac monitor, emergency medicines, and an experienced doctor with paramedic for continuous monitoring."
  },
  {
    question: "Is Train Ambulance Service available across India?",
    answer:
      "Yes, our train ambulance service is available PAN India including Mumbai, Delhi, Kolkata, Chennai, Bangalore, Hyderabad, Ranchi, Guwahati, Siliguri and many more cities."
  },
  {
    question: "How much does Train Ambulance Service cost in India?",
    answer:
      " The cost of train ambulance service depends on distance, patient condition, ICU equipment, and medical staff required. Contact us for an exact and affordable quote."
  },
  {
    question: "How quickly can Train Ambulance Service be arranged?",
    answer:
      "Our 24×7 team can arrange train ambulance service quickly depending on train availability, patient condition, and route. Emergency coordination is handled immediately after confirmation."
  },
  {
    question: "How do I book Train Ambulance Service?",
    answer:
      "You can book train ambulance service by calling our helpline, sharing patient details, confirming travel route, and our team will arrange ICU setup, medical staff, and complete transfer support."
  },
  {
    question: " Is a doctor provided during Train Ambulance Service?",
    answer:
      " Yes, every train ambulance service includes a trained doctor and paramedic team to monitor the patient and provide continuous medical care throughout the journey."
  },

];

function LandingPage() {
  const [active, setActive] = useState(null);
  return (
    <>
      {/* <Helmet>
        <title>
          Train Ambulance Service in India | 24×7 ICU Train Ambulance & Rail Ambulance Service | Humancare Train Ambulance
        </title>

        <meta
          name="description"
          content="24×7 Train ambulance service and Rail ambulance service in India with ICU setup, doctor & ventilator support. Affordable PAN India transfer. Call now."
        />

        <meta
          name="keywords"
          content="Train Ambulance Service in India, Rail Ambulance Service, ICU Train Ambulance, 24x7 Train Ambulance, PAN India Train Ambulance, Humancare Train Ambulance, Rail Ambulance, Train Ambulance Cost, Train Ambulance Booking, Emergency Train Ambulance, Train Ambulance"
        />

        <meta name="author" content="Humancare Train Ambulance" />

      </Helmet> */}

      {/* section 1: Banner */}
      <section className='lp-banner-section'>
        <div className="overlay"></div>

        <div className="lp-banner-content-container">
          <h1>
            Train Ambulance Service
            in India – <br />
            <span> 24×7 ICU Train Ambulance Service </span>
          </h1>

          <p>
            24×7 Train Ambulance Service and Rail Ambulance Service in India
            with fully equipped ICU, <br />  expert doctor support, and safe patient
            transfer across PAN India at an affordable cost.
          </p>

          <div className="cta-buttons">

            <a href="tel:+919833997373" className="cta-light">
              <PhoneCall size={18} />
              Book Train Ambulance Now
            </a>
            <a
              href="https://wa.me/+919833997373"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>

          </div>
        </div>
      </section>

      {/* section 2: Emergency Train Ambulance Service Available 24×7 Across India */}
      <section className='lp-emergency-section'>
        <div className='lp-emergency-container-grid'>
          <div className='lp-emergency-heading'>
            <h2> Emergency Train Ambulance Service
              <span> Available 24×7 Across India </span></h2>
            <img src={TrainEmergency} alt="Train Emergency Ambulance" />
          </div>

          <div className='lp-emergency-content'>
            <p>
              When a patient needs safe long-distance transfer, our Train ambulance service ensures complete ICU care during travel. Humancare provides professional Train ambulance service and Rail ambulance support across India with doctor supervision, ventilator support, and continuous monitoring.
            </p>
            <ul className="lp-checklist">
              <li>20+ Years of Experience</li>
              <li>5000+ Patients Transferred</li>
              <li>5★ Rated Train Ambulance & Rail Ambulance Service</li>
              <li>PAN India Network</li>
            </ul>
          </div>

        </div>
      </section>

      {/* section 3: About */}
      <section className="lp-about-section">
        <div className="lp-about-container-grid">

          <div className="lp-about-image">
            <img src={TrainICU} alt="Train Ambulance ICU" />
          </div>

          <div className="lp-about-content">
            <h2>About Our Train Ambulance & Rail Ambulance Service</h2>

            <p>
              Humancare offers a reliable and affordable Train ambulance service in India for critically ill patients who require medical transport over long distances. Our Train ambulance service, also known as Rail ambulance service, is designed with a fully equipped ICU setup inside the train compartment.
            </p>

            <p>
              This advanced Train ambulance service includes oxygen cylinders, cardiac monitors, ventilator machines, emergency medicines, and experienced medical staff. Every Train ambulance service and Rail ambulance transfer is managed by a trained doctor and paramedic to ensure patient stability throughout the journey.
            </p>

            <p>
              Compared to air transport, our Train ambulance service is cost-effective while still providing intensive care support. Families trust our Rail ambulance and Train ambulance service because it combines affordability with medical safety.
            </p>
          </div>

        </div>
      </section>

      {/* section 4: Features */}
      <section className="lp-features-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              <span>ICU Train Ambulance </span> Service Features
            </h2>
            <p className="p-text">
              Our ICU-based Train ambulance service and Rail ambulance setup includes:
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <Monitor size={26} />
                </div>
                <h6>Complete ICU Setup</h6>
                <p>Fully equipped ICU inside the train compartment</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <Wind size={26} />
                </div>
                <h6>Ventilator Support</h6>
                <p>Advanced ventilator for critical patients</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <HeartPulse size={26} />
                </div>
                <h6>Oxygen & Cardiac Monitoring</h6>
                <p>Continuous oxygen supply and cardiac monitoring</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <UserRound size={26} />
                </div>
                <h6>Doctor + Paramedic</h6>
                <p>Experienced medical team throughout the journey</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <Pill size={26} />
                </div>
                <h6>Emergency Medicines</h6>
                <p>Complete stock of life-saving medications</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <ArrowLeftRight size={26} />
                </div>
                <h6>Bed-to-Bed Transfer</h6>
                <p>From hospital bed to destination hospital bed</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <Activity size={26} />
                </div>
                <h6>Continuous Monitoring</h6>
                <p>24/7 vitals monitoring during transit</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="icon-box">
                  <Globe size={26} />
                </div>
                <h6>PAN India Coordination</h6>
                <p>Seamless coordination across all Indian Railways</p>
              </div>
            </div>
          </div> <br />

          <p className="p-text">
            Every Train ambulance service and Rail ambulance operation is arranged with precision planning and medical coordination to ensure safe transfer anywhere in India.
          </p>
        </div>
      </section>

      {/* section 5: How to Book TAM  */}
      <section className="booking-section">
        <div className="container">

          <h2>How to Book Train Ambulance & Rail Ambulance Service</h2>
          <p className="booking-subtitle">
            Simple 5-step process to arrange ICU train ambulance service
          </p>

          <div className="steps-wrapper">

            <div className="timeline-line"></div>

            <div className="step">
              <div className="circle">
                <PhoneCall size={28} />
                <span className="step-number">1</span>
              </div>
              <h4>Call our emergency helpline</h4>
            </div>

            <div className="step">
              <div className="circle">
                <FileText size={28} />
                <span className="step-number">2</span>
              </div>
              <h4>Share patient medical details</h4>
            </div>

            <div className="step">
              <div className="circle">
                <HeartPulse size={28} />
                <span className="step-number">3</span>
              </div>
              <h4>Our team arranges ICU setup</h4>
            </div>

            <div className="step">
              <div className="circle">
                <TicketCheck size={28} />
                <span className="step-number">4</span>
              </div>
              <h4>Confirm tickets & medical clearance</h4>
            </div>

            <div className="step">
              <div className="circle">
                <Train size={28} />
                <span className="step-number">5</span>
              </div>
              <h4>Safe transfer begins</h4>
            </div>

          </div> <br />
          <p className="booking-subtitle">
            Our fast Train ambulance service and Rail ambulance booking system ensures no delay in emergencies.
          </p>
        </div>
      </section>

      {/* \section 6: Cost */}

      <section className="cost-section">
        <div className="cost-container">
          <h2 className="cost-title">
            Train Ambulance Service Cost in India
          </h2>
          <p className="cost-subtitle">
            We provide transparent and affordable pricing for every Train ambulance service and Rail ambulance transfer. Contact us now for an instant quote and detailed cost breakdown.
          </p>

          <div className="cost-cards">
            {/* Standard */}
            <div className="cost-card">
              <div className="icon-box">
                <Shield size={32} />
              </div>
              <h3>Standard Transfer</h3>
              <p className="card-desc">
                Non-ICU patient transfer with basic medical support
              </p>

              <ul>
                <li><Check size={16} /> Oxygen cylinder support</li>
                <li><Check size={16} /> Paramedic assistance</li>
                <li><Check size={16} /> Bed-to-bed transfer</li>
                <li><Check size={16} /> Basic monitoring</li>
                <li><Check size={16} /> PAN India coverage</li>
              </ul>

            </div>

            {/* ICU */}
            <div className="cost-card featured">

              <div className="icon-box">
                <Star size={32} />
              </div>

              <h3>ICU Transfer</h3>
              <p className="card-desc">
                Full ICU setup with doctor & ventilator support
              </p>

              <ul>
                <li><Check size={16} /> Complete ICU setup in train</li>
                <li><Check size={16} /> Ventilator & cardiac monitor</li>
                <li><Check size={16} /> Doctor + Paramedic team</li>
                <li><Check size={16} /> Emergency medicines</li>
                <li><Check size={16} /> Bed-to-bed transfer</li>
                <li><Check size={16} /> Continuous monitoring</li>
                <li><Check size={16} /> PAN India coordination</li>
              </ul>

            </div>

            {/* Critical */}
            <div className="cost-card">
              <div className="icon-box">
                <Zap size={32} />
              </div>

              <h3>Critical Care Transfer</h3>
              <p className="card-desc">
                Advanced life support for critical patients
              </p>

              <ul>
                <li><Check size={16} /> Advanced ICU equipment</li>
                <li><Check size={16} /> Senior doctor supervision</li>
                <li><Check size={16} /> Multi-paramedic team</li>
                <li><Check size={16} /> Specialist medicines</li>
                <li><Check size={16} /> Priority booking</li>
                <li><Check size={16} /> Dedicated coordinator</li>
                <li><Check size={16} /> 24×7 helpline support</li>
              </ul>

            </div>

          </div>

          <p className="cost-note">
            Final cost depends on travel distance, patient condition, equipment & staff required.
            Call for an instant personalized quote.
          </p>
        </div>
      </section>

      {/* section 7: why choose us */}
      <section className="why-section">
        <div>
          {/* <div className="container"> */}
          <div className="why-conte">
            <h2 className="why-title">
              Why Choose <span>Humancare Train Ambulance Service</span>
            </h2>
            <p className="why-subtitle">
              Humancare is one of the most dependable providers of Train ambulance service and Rail ambulance service in India, delivering safe and medically supervised patient transport.
            </p>
          </div>
          {/* WHY GRID */}
          <div className="why-grid">

            <div className="why-item">
              <Award size={32} />
              <h3>20+</h3>
              <p>Years of Experience </p>
            </div>

            <div className="why-item">
              <Users size={32} />
              <h3>5003+</h3>
              <p>Successful Transfers</p>
            </div>

            <div className="why-item">
              <Clock size={32} />
              <h3>24x7</h3>
              <p>Availability</p>
            </div>

            <div className="why-item">
              <Monitor size={32} />
              <h3>ICU Equipped </h3>
              <p>Train Ambulance & Rail Ambulance Service</p>
            </div>

            <div className="why-item">
              <Stethoscope size={32} />
              <h3>Experienced</h3>
              <p> Doctor & Paramedic Team</p>
            </div>

            <div className="why-item">
              <IndianRupee size={32} />
              <h3>Affordable</h3>
              <p>Train Ambulance Service Cost</p>
            </div>

            <div className="why-item">
              <Globe size={32} />
              <h3>PAN India</h3>
              <p>Train Ambulance Service Network</p>
            </div>

            <div className="why-item">
              <Star size={32} />
              <h3>5★ Trusted</h3>
              <p>Train Ambulance & Rail Ambulance Service</p>
            </div>

          </div>
        </div>
        {/* REVIEWS SECTION */}
        <div className="review-wrapper">

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              We booked the train ambulance services in a rush. The team responded very quickly. And thanks to the efforts of Doctor Baig and Nurse Anjali, we were able to shift the patient without much problem. Their tireless efforts day and night helped in keeping a check on the patient's health. They have been a great help overall. If I had the option of giving 6 stars, I would've. Excellent service from these two.
            </p>
            <h4>Kay Sharma</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              One of our employee who was sick was shifted from Kakinada to his home town near Amritsar upon his request. We utilized the services of Human care train ambulance services and their services were good and professional with Doctor and paramedic accompanying the patient. We are extremely satisfied by the service provided by Humancare train Ambulance Service
            </p>
            <h4>Arun Kumar Donekal</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              I’m really thankful to Humancare World Wide for their excellent train ambulance service from Patna to Ahmedabad. The entire process was smooth the doctors coordinated everything perfectly, all the paperwork was handled on time, and the patient reached safely. Their professionalism and quick response truly made a difference the patient is now out of danger. Highly appreciate their support and dedication.
            </p>
            <h4> Dev Borade  </h4>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* section 8: FAQ*/}
      <section className="faq-section">
        <div className="container">

          <h2>Frequently Asked Questions</h2>

          <div className="faq-wrapper">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${active === index ? "active" : ""}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <ChevronDown size={18} />
                </div>

                {active === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* section 9: CTA */}
      <section className="cta-section">
        <div className="container cta-content">

          <h2>
            Need urgent Train ambulance service or Rail ambulance support?
          </h2>

          <p>
            Our 24×7 emergency response team is ready to arrange immediate Train
            Ambulance anywhere in India with full ICU support.
          </p>

          <div className="cta-buttons">

            <a href="tel:+919833997373" className="cta-light">
              <PhoneCall size={18} />
              Book Train Ambulance Now
            </a>

            <a
              href="https://wa.me/+919833997373"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </div>

        </div>
      </section>



      <TrainAmbulanceCities />
      <ContactSection />




    </>
  )
}

export default LandingPage