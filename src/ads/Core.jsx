import React from 'react'
import "./core.css"
import serv3 from "../assets/testimonial.png";
import {
  Phone,
  MessageCircle,
  Clock,
  Globe,
  FileText,
  CreditCard,
  AlertCircle,
  Ambulance,
  Truck,
  Train,
  Check,
  Home,
  Map,
  // Settings,
  Star

} from "lucide-react";
import TrainAmbulanceCities from "../components/TrainAmbulanceCities";
import ContactSection from '../components/ContactSection';


function Core() {

  // Emergency 

  // const data = [
  //   {
  //     icon: <FileText />,
  //     title: " Complex Train Ambulance Booking ",
  //     desc: "Arranging a train ambulance service involves multiple steps like IRCTC booking, medical approvals, and coordination  which can be confusing during emergencies.",
  //   },
  //   {
  //     icon: <Clock />,
  //     title: "Delays in Patient Transfer",
  //     desc: "Waiting for the right train ambulance or missing urgent transfer windows can put the patient at risk and delay critical care.",
  //   },
  //   {
  //     icon: <CreditCard />,
  //     title: "Cost Confusion",
  //     desc: "Unclear pricing for train ambulance service and medical setup often leads to unexpected costs during stressful situations.",
  //   },
  //   {
  //     icon: <AlertCircle />,
  //     title: "Logistical Stress",
  //     desc: "Managing hospitals, rail ambulance coordination, and patient care together can become overwhelming without expert support.",
  //   },
  // ];

  
const data = [
  {
    icon: <FileText />,
    title: "ICU Train Ambulance Service",
    points: [
      "Fully equipped train ambulance with ICU setup, oxygen & monitors",
      "Doctor & paramedic support during complete journey",
      "Safe long-distance patient transfer via rail ambulance",
    ],
  },
  {
    icon: <Clock />,
    title: "Train Ambulance Booking Support",
    points: [
      "Fully equipped train ambulance with ICU setup, oxygen & monitors",
      "Doctor & paramedic support during complete journey",
      "Safe long-distance patient transfer via rail ambulance",
    ],
  },
  {
    icon: <CreditCard />,
    title: "Bed-to-Bed Patient Transfer",
    points: [
      "Pickup from hospital/home and drop at destination hospital",
      "Continuous care throughout train ambulance service",
      "Smooth coordination between hospitals and transport",
    ],
  },
  {
    icon: <AlertCircle />,
    title: "Pan India Rail Ambulance Service",
    points: [
      "Available across major cities in India",
      "Reliable rail ambulance service for intercity transfer",
      "Trusted as one of the best train ambulance services in India",
    ],
  },
];
  // Features
  
  const features = [
    {
      title: " 30-Minute Response for Train Ambulance",
      desc: "Our team connects with you within minutes and starts your train ambulance booking immediately, 24/7.",
    },
    {
      title: "Complete IRCTC Train Ambulance Support",
      desc: "From train ambulance IRCTC coordination to medical approvals, we handle the full process for a smooth transfer.",
    },
    {
      title: "Experienced Medical Team Onboard",
      desc: "Trained doctors and paramedics ensure safe monitoring throughout the train ambulance service journey.",
    },
    {
      title: "Transparent Train Ambulance Cost",
      desc: "Get a clear estimate before booking your train ambulance service — no hidden charges.",
    },
    {
      title: " ICU-Equipped Rail Ambulance Setup",
      desc: "Advanced rail ambulance with oxygen, monitors, and life support systems for critical patient care.",
    },
    {
      title: " Dedicated Support Coordinator",
      desc: "A single point of contact manages your complete train ambulance booking from start to finish.",
    },
    {
      title: " Insurance Support for Train Ambulance",
      desc: "We assist with required documents and guidance for insurance claims related to your train ambulance service, making the process easier during emergencies.",
    },
    {
      title: " Patient Comfort & Care Priority",
      desc: "We ensure complete care and dignity during transfer with our fully equipped train ambulance, respecting patient condition and providing continuous medical support throughout the journey.",
    },
  ];

  // steps

  const steps = [
    {
      icon: <Phone size={22} />,
      title: " Call or WhatsApp",
      desc: "Contact us anytime and share patient details, location, and destination for train ambulance service.",
      step: "1",
    },
    {
      icon: <FileText size={22} />,
      title: "Get Details & Cost Estimate",
      desc: "Receive complete information about train ambulance cost, process, and train ambulance booking within minutes.",
      step: "2",
    },
    {
      icon: <Train size={22} />,
      title: "We Arrange Train Ambulance",
      desc: "Our team handles full train ambulance booking, including IRCTC coordination, medical setup, and travel planning.",
      step: "3",
    },
    {
      icon: <Ambulance size={22} />,
      title: "Safe Patient Transfer",
      desc: "Patient is safely transferred via fully equipped rail ambulance with continuous medical support till destination.",
      step: "4",
    },
  ];

  // 
  
  const stats = [
    { number: "1000+", label: "Train Ambulance Transfers Completed" },
    { number: "10+", label: "Years of Experience" },
    { number: "24/7", label: "Emergency Train Ambulance Support" },
    { number: "100%", label: "Safe & Monitored Transfer" },
  ];
//  testimonial
  const testimonials = [
    {
      text: "We booked the train ambulance services in a rush. The team responded very quickly. And thanks to the efforts of Doctor Baig and Nurse Anjali, we were able to shift the patient without much problem. Their tireless efforts day and night helped in keeping a check on the patient's health. They have been a great help overall. If I had the option of giving 6 stars, I would've. Excellent service from these two.",
      name: "Kay Sharma",
    },
    {
      text: "One of our employee who was sick was shifted from Kakinada to his home town near Amritsar upon his request. We utilized the services of Human care train ambulance services and their services were good and professional with Doctor and paramedic accompanying the patient. We are extremely satisfied by the service provided by Humancare train Ambulance Service",
      name: "Arun Kumar Donekal",
    },
  ];

  return (
    <>
      {/* section 1: Banner */}
      <section className="core-hero">
        {/* Top Tags */}
        <div className="core-hero-tags">
          <span><Clock size={14} /> 24/7 Available</span>
          <span>📍 Pan India </span>
        </div>

        {/* Heading */}
        <h1 className="core-hero-title">
          Train Ambulance Service in India –<br /> <span> 24/7 ICU Transfer</span>
        </h1>

        {/* Description */}
        <p className="core-hero-desc">
          24/7 Train Ambulance | Rail Ambulance | Fast Emergency Patient Transfer | Train Ambulance Service | Train Ambulance Booking | IRCTC Train Ambulance
        </p>
        <br />
        <div className='core-title'>
          <h3>Immediate Train Ambulance Assistance Available </h3>
          <p>Critical patient transfer ke liye hum provide karte hain fast & reliable train ambulance service across India with full ICU setup, oxygen support & medical team onboard. <br />
            Complete train ambulance booking + IRCTC coordination hum handle karte hain — so you can focus on your patient. </p>
        </div>


        {/* CTA Buttons */}
        <div className="core-hero-buttons">
          <button className="core-btn call" onClick={() => window.location.href = 'tel:+919833997373'}>
            <Phone size={18} /> Call Immediately
          </button>

          <button className="core-btn whatsapp" onClick={() => window.open('https://wa.me/919833997373', '_blank')}>
            <MessageCircle size={18} /> WhatsApp Now
          </button>
        </div>

        {/* Feature Cards */}
        <div className="core-hero-features">
          <div className="core-feature-card">
            <Clock />
            <div>
              <h4>  Quick Response </h4>
              <p>Train ambulance arrangement within 30–60 minutes </p>

            </div>
          </div>

          <div className="core-feature-card">
            <Train />
            <div>
              <h4>ICU Setup in Train Ambulance </h4>
              <p>Advanced life support with oxygen, monitors & trained medical team</p>
            </div>
          </div>

          <div className="core-feature-card">
            <Globe />
            <div>
              <h4>Available Across India </h4>
              <p>Reliable rail ambulance service connecting major cities pan India </p>
            </div>
          </div>
        </div>

        {/*  Immediate Train Ambulance Assistance Available */}
        <div className="core-section-two-container">

          {/* LEFT Content */}
          <div className="core-section-two-content">

            <h2>
              India’s Trusted Train Ambulance Service – <span>24/7 Rail Ambulance Across India</span>
            </h2>
            <p className="desc">
              Get fast and reliable train ambulance service for long-distance patient transfer anywhere in India. Our fully equipped rail ambulance ensures safe and comfortable transfer with ICU setup, oxygen support, and experienced medical professionals onboard. <br /> <br />
              We manage complete train ambulance booking, including IRCTC train ambulance coordination, documentation, and logistics so you get a smooth and stress-free experience during critical situations. <br /> <br />
              With 24/7 availability, quick response, and end-to-end support, we are known as one of the best train ambulance services in India, providing safe, timely, and professionally managed patient transfers across cities. <br /> <br />
            </p>
          </div>

          {/* Rigth Image */}
          <div className="core-section-two-image">
            <img src={serv3} alt="transport" />
          </div>
        </div>
      </section>

      {/*-------- urgent-----------*/}
      <div className="urgent-strip">

        <h3>Need Urgent Train Ambulance?</h3>
        <p>
          <strong>
            Train Ambulance within 30–60 minutes | Fast Rail Ambulance Booking with ICU Setup Available
          </strong>
        </p>
        {/* CTA Buttons */}
        <div className="core-hero-buttons">
          <button className="core-btn call" onClick={() => window.location.href = 'tel:+919833997373'}>
            <Phone size={18} /> Call Immediately
          </button>

          <button className="core-btn whatsapp" onClick={() => window.open('https://wa.me/919833997373', '_blank')}>
            <MessageCircle size={18} /> WhatsApp Now
          </button>
        </div>
      </div>

 {/* -------------------- Emergency--------------*/}
      <section className="core-emergency">
      <div className="core-emergency-container">
        <span className="emergency-tag"> 24/7 Emergency Service  </span>
          <h2>
            During an emergency, the last thing you need is more stress.
          </h2>
          <p className="core-emergency-subtitle">
            Transporting a loved one involves complex logistics and paperwork. We
            take that burden off your shoulders entirely.
          </p>
        <div className="core-emergency-card-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon-box">{item.icon}</div>

              <h3>{item.title}</h3>

              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* section 4 SERVICES*/}
      <section className="core-services-section">
        <div className="core-services-container">

          <span className="core-service-tag">What We Offer</span>

          <h2 className="core-service-main-heading">
            Complete Train Ambulance Services in India
          </h2>
          <p className="core-description">
            Safe, fast and fully managed train ambulance service for every patient transfer need across India.

          </p>

            <div className="core-services-grid">

              {/* Card 1 */}
              <div className="core-service-card">
                <div className="core-services-icon-box">
                  <Train size={32} />
                </div>
                <h3>ICU Train Ambulance Service</h3>
                <ul>
                  <li>• Fully equipped train ambulance with ICU setup, oxygen & monitors </li>
                  <li>• Doctor & paramedic support during complete journey</li>
                  <li>• Safe long-distance patient transfer via rail ambulance</li>
                  {/* <li>Assistance with Dead Body Transport by Air Cost</li> */}
                </ul>
              </div>

              {/* Card 2 */}
              <div className="core-service-card">
                <div className="core-services-icon-box">
                  <Ambulance size={32} />
                </div>
                <h3> Train Ambulance Booking Support</h3>
                <ul>
                  <li>• Fully equipped train ambulance with ICU setup, oxygen & monitors</li>
                  <li>• Doctor & paramedic support during complete journey</li>
                  <li>• Safe long-distance patient transfer via rail ambulance</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="core-service-card">
                <div className="core-services-icon-box">
                  <Home size={32} />
                </div>
                <h3> Bed-to-Bed Patient Transfer </h3>
                <ul>
                  <li>• Pickup from hospital/home and drop at destination hospital </li>
                  <li> • Continuous care throughout train ambulance service</li>
                  <li>• Smooth coordination between hospitals and transport</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="core-service-card">
                <div className="core-services-icon-box">
                  <Map size={32} />
                </div>
                <h3> Pan India Rail Ambulance Service</h3>
                <ul>
                  <li>• Available across major cities in India</li>
                  <li>• Reliable rail ambulance service for intercity transfer</li>
                  <li> • Trusted as one of the best train ambulance services in India </li>
                </ul>
              </div>


          </div>
        </div>
      </section>

      {/* ---------------why----------------------  */}
      <section className="core-why-section">
        <div className="core-why-container">
          <span className="core-why-tag">Why choose Us</span>
          <h2 className="core-main-heading">
            Everything Managed. Safe Train Ambulance. No Delays.
          </h2>

          <div className="core-why-grid">
            {features.map((item, index) => (
              <div className="core-why-card" key={index}>
                <div className="check-icon">
                  <Check size={18} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------Process ----------------- */}
      <section className="core-process-section">
        <div className="core-process-container">
          <span className="core-process-tag">How It Works</span>

          <h2 className="core-process-main-heading">
            Simple 4-Step Process — Handled in Hours
          </h2>

          <p className="core-process-description">
            From your first call to final delivery, every step is managed with precision and care.
          </p>

          <div className="core-process-grid">
            {steps.map((item, index) => (
              <div className="core-process-card" key={index}>
                <div className="core-circle">
                  {item.icon}
                  <span className="core-step">{item.step}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ------------- Stats & testimonals ------------------- */}
      <section className="core-stats-section">
        <div className="core-container">
          <span className="core-stats-tag">Our Track Record</span>

          <h2 className="core-stats-heading">
            Trusted by thousands of families across India <br />for compassionate and reliable dead body transport.
          </h2>

          {/* Stats */}
          <div className="core-stats-grid">
            {stats.map((item, index) => (
              <div className="core-stat-card" key={index}>
                <h2>{item.number}</h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="core-testimonial-grid">
            {testimonials.map((item, index) => (
              <div className="core-testimonial-card" key={index}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p className="testimonial-text">"{item.text}"</p>
                <h4>— {item.name}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -----------Pricing-------- */}
      <section className="core-pricing-section">
        <div className="core-pricing-container">
          <span className="core-pricing-tag">Pricing</span>

          <h2 className="core-pricing-title">
            What Does Train Ambulance Cost in India?
          </h2>

          <p className="core-pricing-subtitle">
           Every patient transfer is different. We provide a clear and transparent train ambulance cost estimate within minutes of your call.
          </p>

          <div className="core-pricing-card">
            <div className="core-pricing-badge">
              No Hidden Charges · Upfront Pricing
            </div>

            <h3 className="pricing-card-title">Train Ambulance Cost Depends on Several Factors</h3>

            <div className="pricing-factors">
              <span className="factor-badge">📍 Distance & Route</span>
              <span className="factor-badge">🚑 Type of Train Ambulance Service (ICU / Basic Setup) </span>
              <span className="factor-badge">⏱️ Urgency of Transfer</span>
              <span className="factor-badge">📄 Medical & IRCTC Documentation</span>
              <span className="factor-badge">👨‍⚕️ Doctor & Medical Team Requirement</span>
              <span className="factor-badge">🌍 City-to-City Transfer Distance </span>
            </div>

            <p className="core-pricing-cta">
             Call Now to Get Exact Train Ambulance Cost in Minutes
            </p>

            <button className="core-pricing-btn" onClick={() => window.location.href = 'tel:+919833997373'}>
              <Phone size={18} /> Get Cost in 10 Minutes
            </button>
            
          </div>
        </div>
      </section>
      <TrainAmbulanceCities />
      <ContactSection />
      
    </>
  )
}

export default Core