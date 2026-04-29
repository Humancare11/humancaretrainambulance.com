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
 AlertTriangle,
  Star

} from "lucide-react";
import TrainAmbulanceCities from "../components/TrainAmbulanceCities";
import ContactSection from '../components/ContactSection';


function Cost() {

  const data = [
    {
      icon: <FileText />,
      title: " Pricing Confusion",
      points: [
        "Different factors affect train ambulance service cost",
      ],
    },
    {
      icon: <Clock />,
      title: " Delay in Decision",
      points: [
        "Waiting for exact train ambulance cost can delay transfer",
      ],
    },
    {
      icon: <CreditCard />,
      title: " Hidden Charges Risk",
      points: [
        "Unclear rail ambulance cost in India may create issues",
      ],
    },
    {
      icon: <AlertTriangle />,
      title: " Logistical Pressure",
      points: [
        "Managing everything without guidance is difficult",
        
      ],
    },
    
  ];
  // Features

  const features = [
    {
      title: " Clear Cost Before Booking",
      desc: "Know exact train ambulance cost",
    },
    {
      title: " Transparent Pricing",
      desc: "No hidden charges in train ambulance service cost",
    },
    {
      title: "Fast Response",
      desc: "No hidden charges in train ambulance service cost",
    },
    {
      title: "Complete Support",
      desc: "From cost to transfer  ",
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
          Train Ambulance Cost in India – <br /> <span> 24/7 ICU Service </span>
        </h1>
        
        {/* Description */}
        <p className="core-hero-desc">
          24/7 Train Ambulance | Safe Transfer | Fast Booking<br />
          Get accurate train ambulance price with complete service details and quick response.
        </p>
        <br />
        <div className='core-title'>
          <h3> Get Exact Cost & Service Details</h3>
          <p>We provide fully managed train ambulance support with ICU setup, oxygen, and medical team.
            You’ll get a clear train ambulance cost along with complete service details — so you can decide quickly without confusion.
          </p>
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
              <p>Details shared within 30–60 minutes</p>

            </div>
          </div>

          <div className="core-feature-card">
            <Train />
            <div>
              <h4>ICU Setup in Train Ambulance </h4>
              <p>Advanced life support with medical team</p>
            </div>
          </div>

          <div className="core-feature-card">
            <Globe />
            <div>
              <h4>Available Across India </h4>
              <p>Reliable transfers across cities</p>
            </div>
          </div>
        </div>

        {/*  2 container*/}
        <div className="core-section-two-container">
          {/* LEFT Content */}
          <div className="core-section-two-content">

            <h2>
              India’s Trusted Train Ambulance Service with Transparent Pricing

            </h2>
            <p className="desc">
              We provide safe and reliable patient transfer services with full ICU support and complete coordination throughout the journey. Our focus is to ensure that every patient receives the highest level of care while traveling. <br /> <br />
             Our team carefully evaluates each case to offer the most suitable train ambulance service cost based on distance, medical condition, and urgency. This helps families make informed decisions without added stress.<br /> <br />
              For every case, we maintain full transparency by sharing a clear train ambulance cost in India, ensuring there is no confusion during critical emergency situations. <br /> <br />
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

        <h3> Need Cost Details Urgently?</h3>
        <p>
          <strong>
           Get quick clarity and arrange transfer without delay
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
          <div>
            <span className="emergency-tag"> 24/7 Emergency Service  </span>
          <h2>
           During emergencies, understanding cost and arranging transfer can be stressful.

          </h2>
          <p className="core-emergency-subtitle">
            We simplify everything by giving you a clear train ambulance price and handling the complete process.
          </p>

          </div>
          
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

      <TrainAmbulanceCities />
      <ContactSection />


    </>
  )
}

export default Cost