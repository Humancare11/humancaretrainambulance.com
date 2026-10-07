import React from 'react';
import { Helmet } from 'react-helmet';
import "./core.css";
import serv3 from "../assets/trainsec.png";
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
  Star,
  Activity,
  HeartPulse,
  UserCheck,
  Headphones,
  CheckCircle2,
  HelpCircle,
  Video,
  ExternalLink,
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

  const supportBullets = [
    "Train ambulance support for long-distance patient transportation",
    "Rail ambulance arrangements based on patient medical requirements",
    "ICU-level medical equipment options for patients who require advanced support",
    "Doctor and paramedic support based on the patient's condition and transfer requirements",
    "Oxygen, monitoring and other required medical equipment as assessed for the transfer",
    "Bed-to-bed transfer coordination where required",
    "Pan-India coordination for routes connecting major cities",
  ];

  const medicalServices = [
    {
      icon: <Activity size={32} />,
      title: "ICU Train Ambulance",
      desc: "For patients who require a higher level of medical monitoring and critical-care support during long-distance rail transportation.",
    },
    {
      icon: <Train size={32} />,
      title: "Rail Ambulance Service",
      desc: "Medical transportation by train with the required patient-care arrangements based on the patient's condition.",
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Oxygen & Patient Monitoring",
      desc: "Oxygen support and monitoring equipment can be arranged when medically required.",
    },
    {
      icon: <UserCheck size={32} />,
      title: "Doctor & Paramedic Support",
      desc: "Medical personnel can be arranged according to the patient's condition and transfer requirements.",
    },
    {
      icon: <Home size={32} />,
      title: "Bed-to-Bed Transfer",
      desc: "Coordination from the source location to the railway station and from the destination station to the receiving location, where required.",
    },
    {
      icon: <Headphones size={32} />,
      title: "Train Ambulance Booking Assistance",
      desc: "Support in understanding the route, medical requirements, availability and estimated cost before planning the transfer.",
    },
  ];

  const bookingSteps = [
    {
      step: "1",
      icon: <Map size={22} />,
      title: "Share Location & Route",
      desc: "Share the patient's current location and destination with our team.",
    },
    {
      step: "2",
      icon: <FileText size={22} />,
      title: "Provide Medical Details",
      desc: "Provide basic information about the patient's medical condition and mobility requirements.",
    },
    {
      step: "3",
      icon: <Activity size={22} />,
      title: "Discuss Medical Support",
      desc: "Discuss the medical support and equipment required during the journey.",
    },
    {
      step: "4",
      icon: <Clock size={22} />,
      title: "Route & Availability Review",
      desc: "Our team reviews the route, availability and transfer requirements.",
    },
    {
      step: "5",
      icon: <CreditCard size={22} />,
      title: "Receive Cost & Details",
      desc: "Receive the applicable train ambulance cost and booking details.",
    },
    {
      step: "6",
      icon: <Train size={22} />,
      title: "Coordinated Transfer",
      desc: "Once the arrangement is confirmed, the patient transfer is coordinated as planned.",
    },
  ];

  const features = [
    {
      title: "Travel Distance & Route",
      desc: "Cost varies depending on the specific railway sector, distance, and train category.",
    },
    {
      title: "Level of Clinical Care",
      desc: "Patient's medical condition and the intensity of continuous clinical monitoring required.",
    },
    {
      title: "Oxygen & Life Support",
      desc: "Oxygen cylinders, ventilator setup, syringe pumps, and critical monitoring gear onboard.",
    },
    {
      title: "Medical Escort Team",
      desc: "Qualified doctor, critical care specialist, ICU nurse, or experienced paramedic support.",
    },
    {
      title: "Bed-to-Bed Coordination",
      desc: "Ground road ambulance pickup and drop-off coordination at both station ends.",
    },
    {
      title: "Equipment & Logistics",
      desc: "Specialized stretcher, suction machines, power backup, and railway clearance arrangements.",
    },
  ];

  const stats = [
    { number: "1500+", label: "Train Ambulance Transfers Completed" },
    { number: "10+", label: "Years of Experience" },
    { number: "24/7", label: "Emergency Train Ambulance Support" },
    { number: "100%", label: "Safe & Monitored Transfer" },
  ];

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

  const [openFaq, setOpenFaq] = React.useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const faqs = [
    {
      q: "What is a Train Ambulance Service?",
      a: "A train ambulance service is a medically supported patient transportation arrangement by rail for patients who need to travel long distances with appropriate medical care and monitoring.",
    },
    {
      q: "What is a Rail Ambulance Service?",
      a: "Rail ambulance service refers to patient transportation by train with medical support and equipment arranged according to the patient's condition and journey requirements.",
    },
    {
      q: "When should I consider a Train Ambulance?",
      a: "A train ambulance can be considered for suitable patients who need long-distance transportation by rail and require medical support during the journey. The patient's condition should be assessed before selecting the mode of transport.",
    },
    {
      q: "What medical facilities can be arranged?",
      a: "Depending on the patient's requirements, medical support may include oxygen, patient monitoring, ventilator support, medical staff and other required equipment.",
    },
    {
      q: "How much does a Train Ambulance cost in India?",
      a: "There is no single fixed price. The cost depends on the route, distance, patient condition, medical equipment, medical staff and other transfer requirements. Contact the team for a personalized estimate.",
    },
    {
      q: "How do I book a Train Ambulance?",
      a: "Share the patient's location, destination and medical requirements. The team can discuss availability, route, medical support and estimated cost before the transfer is confirmed.",
    },
    {
      q: "Is Train Ambulance available across India?",
      a: "Train ambulance and rail ambulance arrangements can be coordinated for major cities and routes across India, subject to route and availability.",
    },
    {
      q: "Can I get a Train Ambulance from Patna to Delhi?",
      a: "A Patna-to-Delhi patient transfer can be discussed with the team. Share the patient's medical requirements to understand the available arrangement and estimated cost.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Train Ambulance Service in India | Humancare</title>
        <meta
          name="description"
          content="Get train ambulance service in India with medical support, rail ambulance arrangements and ICU care. Check availability and get a personalized quote."
        />
        <link rel="canonical" href="https://humancaretrainambulance.com/train-ambulance-cost" />
      </Helmet>

      {/* section 1: Hero Banner */}
      <section className="core-hero">
        <div className="core-hero-tags">
          <span><Clock size={14} /> 24/7 Available</span>
          <span>📍 Pan India Transfer</span>
        </div>

        <h1 className="core-hero-title">
          Train Ambulance Service Across India – <br />
          <span>Reliable Rail Ambulance Support</span>
        </h1>

        <p className="core-hero-desc">
          Reliable rail ambulance support for patients requiring long-distance medical transportation by train. Humancare coordinates patient transfer based on the patient's medical condition, route, required medical equipment and medical support.
        </p>

        <div className="core-title">
          <h3>Get a Train Ambulance Quote | Request a Callback | Check Availability</h3>
          <p>
            Planning a Patient Transfer by Train? Share the patient's current location, destination and medical requirements with our team. We can help you understand the available train ambulance arrangements, required medical support and estimated train ambulance cost.
          </p>
        </div>

        <div className="core-hero-buttons">
          <a
            href="tel:+919833997373"
            className="core-btn call"
            style={{ textDecoration: 'none' }}
          >
            <Phone size={18} /> Call Immediately
          </a>
          <a
            href="https://wa.me/919833997373"
            target="_blank"
            rel="noopener noreferrer"
            className="core-btn whatsapp"
            style={{ textDecoration: 'none' }}
          >
            <MessageCircle size={18} /> WhatsApp Now
          </a>
        </div>

        <div className="core-hero-features">
          <div className="core-feature-card">
            <Clock />
            <div>
              <h4>Quick Response</h4>
              <p>Details and cost estimate shared within 30–60 minutes</p>
            </div>
          </div>

          <div className="core-feature-card">
            <Train />
            <div>
              <h4>ICU Setup in Train Ambulance</h4>
              <p>Advanced life support with medical team and oxygen</p>
            </div>
          </div>

          <div className="core-feature-card">
            <Globe />
            <div>
              <h4>Available Across India</h4>
              <p>Pan-India coordination for major railway routes</p>
            </div>
          </div>
        </div>

        {/* Section Two Container: Service Overview & Bullet Checklist */}
        <div className="core-section-two-container">
          <div className="core-section-two-content">
            <h2>
              Train Ambulance Service in India – <span>Safe &amp; Medically Supported</span>
            </h2>
            <p className="desc">
              Humancare provides train ambulance and rail ambulance support for patients who need to travel long distances by rail. A train ambulance arrangement can be considered when road travel is not suitable for the distance or when a patient requires medical support during a rail journey.
              <br /><br />
              The medical setup is planned according to the patient's condition. Depending on the requirement, the transfer may include oxygen support, patient monitoring, ventilator support, medical staff and other necessary equipment.
              <br /><br />
              The exact arrangement, route, medical team and equipment are assessed before the transfer so that the patient can travel with appropriate medical support.
            </p>

          </div>

          <div className="core-section-two-image">
            <img src={serv3} alt="Train Ambulance Service in India" />
          </div>
        </div>
      </section>

      {/* Urgent Strip */}
      <div className="urgent-strip">
        <h3>Need Cost Details Urgently?</h3>
        <p>
          <strong>
            Get quick clarity and arrange patient transfer without delay across India
          </strong>
        </p>
        <div className="core-hero-buttons">
          <a
            href="tel:+919833997373"
            className="core-btn call"
            style={{ textDecoration: 'none' }}
          >
            <Phone size={18} /> Call Immediately
          </a>
          <a
            href="https://wa.me/919833997373"
            target="_blank"
            rel="noopener noreferrer"
            className="core-btn whatsapp"
            style={{ textDecoration: 'none' }}
          >
            <MessageCircle size={18} /> WhatsApp Now
          </a>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <section className="video-testimonials-section">
        <div className="video-testimonials-container">
          <span className="video-testimonials-tag">
            <Video size={15} /> Real Patient Stories
          </span>
          <h2 className="video-testimonials-heading">
            Video Testimonials &amp; Patient Experiences
          </h2>
          <p className="video-testimonials-subtitle">
            Watch real feedback and journey experiences from families who trusted our train ambulance transfer across India.
          </p>

          {/* Horizontal scroll row */}
          <div className="video-reel-row">

            {/* Reel 1 */}
            <div className="video-reel-card">
              <div className="video-reel-clip">
                <iframe
                  src="https://www.instagram.com/reel/DcWE_n7gVZp/embed"
                  title="Train Ambulance Video Testimonial 1"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-reel-info">
                <h3 className="video-reel-title">Safe Patient Transfer Experience</h3>
                <p className="video-reel-desc">Real family feedback on timely coordination &amp; bed-to-bed transfer</p>
                <a
                  href="https://www.instagram.com/reel/DcWE_n7gVZp/?stkn=aXpsNm9xdTVhbjJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-reel-link"
                >
                  Watch on Instagram <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reel 2 */}
            {/* <div className="video-reel-card">
              <div className="video-reel-clip">
                <iframe
                  src="https://www.instagram.com/reel/Ddl5pgpiOYz/embed"
                  title="Train Ambulance Video Testimonial 2"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-reel-info">
                <h3 className="video-reel-title">Bed-to-Bed Rail Ambulance Journey</h3>
                <p className="video-reel-desc">Caregiver highlights continuous medical care &amp; smooth station handover</p>
                <a
                  href="https://www.instagram.com/reel/Ddl5pgpiOYz/?stkn=MWdidDYxOTlzNjN6dQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-reel-link"
                >
                  Watch on Instagram <ExternalLink size={12} />
                </a>
              </div>
            </div> */}

            {/* Reel 3 */}
            <div className="video-reel-card">
              <div className="video-reel-clip">
                <iframe
                  src="https://www.instagram.com/reel/DYCkB93DOR6/embed"
                  title="Train Ambulance Video Testimonial 3"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-reel-info">
                <h3 className="video-reel-title">Long-Distance Patient Shift</h3>
                <p className="video-reel-desc">Critical patient transferred with dedicated doctor &amp; onboard ICU support</p>
                <a
                  href="https://www.instagram.com/reel/DYCkB93DOR6/?stkn=MWc4dHI1cGRvbGQ3YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-reel-link"
                >
                  Watch on Instagram <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reel 4 */}
            <div className="video-reel-card">
              <div className="video-reel-clip">
                <iframe
                  src="https://www.instagram.com/reel/DYUljN5iBr-/embed"
                  title="Train Ambulance Video Testimonial 4"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-reel-info">
                <h3 className="video-reel-title">Emergency Medical Assistance</h3>
                <p className="video-reel-desc">Seamless railway ambulance setup with round-the-clock clinical care</p>
                <a
                  href="https://www.instagram.com/reel/DYUljN5iBr-/?stkn=MWF3d2djMnJvbmQ2dw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-reel-link"
                >
                  Watch on Instagram <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Reel 5 */}
            <div className="video-reel-card">
              <div className="video-reel-clip">
                <iframe
                  src="https://www.instagram.com/reel/DXwidNejPta/embed"
                  title="Train Ambulance Video Testimonial 5"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="video-reel-info">
                <h3 className="video-reel-title">Safe &amp; Affordable Rail Ambulance</h3>
                <p className="video-reel-desc">Smooth hospital-to-hospital journey with medical team &amp; documentation</p>
                <a
                  href="https://www.instagram.com/reel/DXwidNejPta/?stkn=b252cHJzcG1kajY2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-reel-link"
                >
                  Watch on Instagram <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency / Challenges Section */}
      <section className="core-emergency">
        <div className="core-emergency-container">
          <span className="emergency-tag">24/7 Medical Transfer</span>
          <h2>
            During emergencies, understanding cost and arranging transfer can be stressful.
          </h2>
          <p className="core-emergency-subtitle">
            Whether you are looking for a train ambulance service, rail ambulance service, ICU train ambulance or train ambulance booking assistance, our team can discuss the appropriate transfer arrangement for the patient.
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

      {/* Services Grid: Train Ambulance Medical Support */}
      <section className="core-services-section">
        <div className="core-services-container">
          <span className="core-service-tag">What We Offer</span>
          <h2 className="core-service-main-heading">
            Train Ambulance Medical Support
          </h2>
          <p className="core-description">
            Complete ICU support, monitoring, and professional care for long-distance patient transfer across India.
          </p>

          <div className="core-services-grid">
            {medicalServices.map((service, index) => (
              <div className="core-service-card" key={index}>
                <div className="core-services-icon-box">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p style={{ fontSize: '14px', color: '#6c757d', lineHeight: '1.6' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process: How to Book a Train Ambulance */}
      <section className="core-process-section">
        <div className="core-process-horizontal-container">
          <span className="core-process-tag">Step-by-Step Guide</span>
          <h2 className="core-process-main-heading">
            How to Book a Train Ambulance
          </h2>
          <p className="core-process-description">
            From your first enquiry to destination handover, every step is coordinated with clinical accuracy.
          </p>

          <div className="core-process-horizontal-wrapper">
            <div className="core-process-horizontal-row">
              <div className="core-process-line"></div>
              {bookingSteps.map((item, index) => (
                <div className="core-process-horizontal-item" key={index}>
                  <div className="core-circle">
                    {item.icon}
                    <span className="core-step">{item.step}</span>
                  </div>
                  <h3 className="core-process-step-title">{item.title}</h3>
                  <p className="core-process-step-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Section: What Can Affect Train Ambulance Cost */}
      <section className="core-why-section">
        <div className="core-why-container">
          <span className="core-why-tag">Cost Transparency</span>
          <h2 className="core-main-heading">
            What Can Affect Train Ambulance Cost?
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

      {/* Track Record Stats & Testimonials */}
      <section className="core-stats-section">
        <div className="core-container">
          <span className="core-stats-tag">Our Track Record</span>
          <h2 className="core-stats-heading">
            Trusted by families across India for safe, medically supervised patient transfers.
          </h2>

          <div className="core-stats-grid">
            {stats.map((item, index) => (
              <div className="core-stat-card" key={index}>
                <h2>{item.number}</h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="core-testimonial-grid">
            {testimonials.map((item, index) => (
              <div className="core-testimonial-card" key={index}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="core-testimonial-text">"{item.text}"</p>
                <h4>— {item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information & City Highlights (Mumbai & Patna) */}
      <section className="core-pricing-section">
        <div className="core-pricing-container">
          <span className="core-pricing-tag">Pricing &amp; Routes</span>
          <h2 className="core-pricing-title">
            Train Ambulance Service Cost in India
          </h2>
          <p className="core-pricing-subtitle">
            The train ambulance cost depends on several factors, including the travel route and distance, patient's medical condition, type of medical support, equipment required, number of medical staff and other transfer arrangements.
          </p>

          <div className="core-pricing-card">
            <div className="core-pricing-badge">
              Upfront Pricing · No Hidden Charges
            </div>
            <h3 className="pricing-card-title">Personalized Route Cost Estimate</h3>

            <div className="pricing-factors">
              <span className="factor-badge">📍 Travel Distance &amp; Route</span>
              <span className="factor-badge">🩺 Medical Condition &amp; Care Level</span>
              <span className="factor-badge">💨 Oxygen &amp; Ventilator Support</span>
              <span className="factor-badge">👨‍⚕️ Doctor &amp; Paramedic Team</span>
              <span className="factor-badge">🚑 Bed-to-Bed Transfer</span>
              <span className="factor-badge">⚙️ Special Medical Equipment</span>
            </div>

            {/* City Highlights Box */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px', marginBottom: '30px', textAlign: 'left' }}>
              <div style={{ background: '#f8f9fb', padding: '24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ color: '#0a3d62', fontSize: '18px', marginBottom: '10px' }}>Train Ambulance Mumbai</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '16px' }}>
                  Humancare can coordinate train ambulance arrangements for patients travelling from Mumbai to other cities in India. The required medical support can be planned according to the patient's condition, destination and travel requirements.
                </p>

              </div>

              <div style={{ background: '#f8f9fb', padding: '24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ color: '#0a3d62', fontSize: '18px', marginBottom: '10px' }}>Train Ambulance Patna</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '16px' }}>
                  Train ambulance support can be planned for patients travelling from Patna to other cities in India. Medical requirements, route, equipment and staff support are considered before the transfer is arranged.
                </p>

              </div>
            </div>

            <p className="core-pricing-cta">
              For queries such as train ambulance cost in India, rail ambulance cost, train ambulance price, or the cost of a specific route, contact our team for a personalized estimate.
            </p>

            <a
              href="tel:+919833997373"
              className="core-pricing-btn"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={18} /> Get Train Ambulance Quote
            </a>
          </div>
        </div>
      </section>

      {/* Train Ambulance Cities Component */}
      <TrainAmbulanceCities />

      {/* Frequently Asked Questions (using existing core styles) */}
      <section className="core-pricing-section" style={{ background: '#f8f9fb', paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="core-pricing-container">
          <span className="core-pricing-tag">FAQs</span>
          <h2 className="core-pricing-title">Frequently Asked Questions</h2>
          <p className="core-pricing-subtitle">
            Answers to common questions regarding train ambulance services, costs, and transfer arrangements in India.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#0a3d62',
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: '#e63946', fontSize: '20px', fontWeight: 'bold' }}>
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 22px 18px', color: '#64748b', fontSize: '14px', lineHeight: '1.7' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

export default Cost;