import React, { Suspense, lazy, useState } from "react";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  Globe,
} from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaUserMd,
  FaHeart,
  FaShieldAlt,
  FaTrain,
  FaStethoscope,
  FaClock,
  FaCheckCircle,
  FaHandHoldingMedical,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaAmbulance,
  FaClipboardCheck,
  FaRoute,
  FaTools,
  FaMedkit,
} from "react-icons/fa";
import "./home.css";
import "./home-refresh.css";
import heroImage from "../assets/10.webp";

const TestimonialsSection = lazy(() =>
  import("../components/TestimonialsSection"),
);
const ContactSection = lazy(() => import("../components/ContactSection"));

const Rail = new URL("../assets/contact.png", import.meta.url).href;
const Railcost = new URL(
  "../assets/Train Ambulance cost In India.png",
  import.meta.url,
).href;

const SectionLoader = () => (
  <div
    style={{
      minHeight: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        border: "3px solid #e2e8f0",
        borderTop: "3px solid #2563eb",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
  </div>
);

const faqs = [
  {
    question: "What is a train ambulance service?",
    answer:
      "A train ambulance service is a medically supported patient transportation service that helps patients travel long distances by train with appropriate medical care, equipment, and professional supervision.",
  },
  {
    question: "Who can use a train ambulance?",
    answer:
      "A train ambulance can be arranged for bedridden, elderly, post-operative, stable or critically ill patients who require medical assistance during long-distance transportation.",
  },
  {
    question: "How much does a train ambulance cost?",
    answer:
      "The train ambulance cost depends on the route, patient’s medical condition, medical team, equipment, railway arrangements, and level of care required. A customized estimate is provided after assessing the patient's requirements.",
  },
  {
    question: "Can a train ambulance provide oxygen and ventilator support?",
    answer:
      "Yes. Based on the patient’s medical requirements, an ICU train ambulance can be arranged with oxygen support, ventilator assistance, patient monitoring, and other essential medical equipment.",
  },
  {
    question: "How can I book a train ambulance?",
    answer:
      "You can contact Humancare Train Ambulance with the patient's current location, destination, medical condition, and travel requirements. Our team will help coordinate the train ambulance booking and required medical arrangements.",
  },
  {
    question: "Does Humancare provide train ambulance services across India?",
    answer:
      "Yes. Our train ambulance service in India supports long-distance patient transfers across major cities and railway routes, with medical teams and support arranged according to the patient's needs.",
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <main className="home-refresh">
      <Helmet>
        <link rel="canonical" href="https://humancaretrainambulance.com/" />
        <title>Train Ambulance Service in India | Humancare Train Ambulance</title>
        <meta
          name="description"
          content="Book 24×7 train ambulance service in India with ICU support, trained medical teams, oxygen, ventilator assistance and safe long-distance patient transfers."
        />
        <meta
          name="keywords"
          content="train ambulance service, rail ambulance service, train ambulance cost, Humancare Train Ambulance"
        />
        <meta
          property="og:title"
          content="Train Ambulance Service in India | Humancare Train Ambulance"
        />
        <meta
          property="og:description"
          content="24×7 train ambulance service in India with ICU support and trained medical teams for safe long-distance patient transfers."
        />
        <meta
          property="og:image"
          content={`https://humancaretrainambulance.com${heroImage}`}
        />
        <meta
          property="og:url"
          content="https://humancaretrainambulance.com/"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Humancare Train Ambulance",
            url: "https://humancaretrainambulance.com/",
            image: "https://humancaretrainambulance.com/logo.png",
            logo: "https://humancaretrainambulance.com/logo.png",
            description:
              "24×7 train ambulance service across India with ICU support, trained medical teams, and long-distance patient transfers.",
            telephone: "+919833997373",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "G-30, Dheeraj Heritage, S. V. Road, Milan Subway Junction, Santacruz (West)",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400054",
              addressCountry: "IN",
            },
            areaServed: { "@type": "Country", name: "India" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          })}
        </script>
      </Helmet>

      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="satish">Train Ambulance Service in India</span>
              </h1>
              <h2 className="hero-subtext">
                24×7 ICU Rail Ambulance for Long-Distance Patient Transfer
              </h2>
              <p className="hero-subtext">
                Avail safe and trusted train ambulance in India. For smooth and
                safe traveling, your patient can be shifted by train ambulance
                with skilled MD doctors, nurses, and paramedical staff, along
                with oxygen, ventilator, and monitoring machine services
                according to their medical condition.
              </p>
              <div className="hero-buttons">
                <a href="tel:+919833997373" className="btn-link-wrapper">
                  <button className="btn-accent">Request Ambulance</button>
                </a>
                <a
                  href="/Trainambulance"
                  className="btn-link-wrapper"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn-outline">Learn More</button>
                </a>
              </div>
              <div className="hero-trust-strip" aria-label="Service highlights">
                <span>Nationwide transfers</span>
                <span>Medical team onboard</span>
                <span>24×7 coordination</span>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-card">
                <img
                  src={heroImage}
                  alt="Train ambulance for long-distance patient transfer"
                  className="hero-train-image"
                  loading="eager"
                  fetchPriority="high"
                  width="1200"
                  height="600"
                />
              </div>
              <div className="hero-image-note">
                <span className="hero-status-dot" />
                <span>
                  <strong>Care throughout the journey</strong>
                  <small>Support planned around each patient</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">Bringing Medical Care Along the Journey</h2>
          <p className="benefits-description">
            At Humancare Train Ambulance we provide easy long-distance patient
            transfer through reliable train transportation combined with expert
            medical services. Our train ambulance service is tailored to the
            needs of each patient, helping families plan a secure transfer
            between locations without compromising the quality or continuity of
            medical care. Older or bed-ridden patients, post-operative patients,
            or those in need of constant monitoring and care can be overseen by
            the right medical team. We can provide oxygen, observation of vital
            signs, ICU equipment, mechanical ventilators, medication, and trained
            medical professionals during the journey. From medical team
            arrangements to station handovers and onward destination ambulance
            support, our team manages the important details of the journey.
          </p>
          <div className="equipment-grid-home" style={{ marginTop: "32px" }}>
            {[
              {
                icon: <FaUserMd size={28} />,
                title: "Experienced",
                description:
                  "Trained medical professionals provide attentive supervision throughout the journey, with care tailored to the patient's condition and transport needs.",
              },
              {
                icon: <FaHeart size={28} />,
                title: "Compassionate",
                description:
                  "We understand the emotional challenges of moving a loved one over a long distance and focus on respectful, patient-centered care.",
              },
              {
                icon: <FaShieldAlt size={28} />,
                title: "Reliable",
                description:
                  "From medical preparation and railway travel to station pickup and destination ambulance coordination, we help organize each transfer.",
              },
            ].map((item) => (
              <article className="equipment-card" key={item.title}>
                <div className="trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">India’s Trusted Train Ambulance Provider</h2>
          <p className="benefits-description">
            To transfer a patient from one city to another, move a loved one
            from a local hospital to a super-specialty hospital, or travel a
            long distance for medical purposes, Humancare Train Ambulance offers
            coordinated train ambulance service in India. We integrate railway
            transport with trained caretakers, patient-care equipment, and
            medical supervision according to the patient's needs. From departure
            and station transfer to arrival at the destination, we help
            families arrange a reliable journey with medical support.
          </p>
        </div>
      </section>

      <section className="equipment-section">
        <h2 className="equipment-title">Our Train Ambulance Services</h2>
        <div className="equipment-grid-home">
          {[
            {
              icon: <FaHeartbeat size={28} />,
              title: "ICU Train Ambulance",
              description:
                "Advanced medical support with patient monitoring, oxygen, ventilator assistance, and essential critical-care equipment.",
            },
            {
              icon: <FaStethoscope size={28} />,
              title: "Medical Team Support",
              description:
                "Trained doctors, nurses, and paramedics can accompany patients based on their medical condition and care requirements.",
            },
            {
              icon: <FaClock size={28} />,
              title: "24×7 Train Ambulance Assistance",
              description:
                "Round-the-clock coordination for planned and urgent patient transportation across major railway routes in India.",
            },
            {
              icon: <FaAmbulance size={28} />,
              title: "Safe Patient Transfer",
              description:
                "Organized rail ambulance service with appropriate medical care, equipment, and ambulance coordination at departure and destination points.",
            },
          ].map((item) => (
            <article className="equipment-card" key={item.title}>
              <div className="trust-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-section">
        <h2>Why Choose Our Train Ambulance Services?</h2>
        <p className="benefits-description">
          Our train ambulance service makes long-distance patient transfers
          across India possible with coordinated care centered on each patient's
          needs. Qualified medical professionals, appropriate equipment,
          transport planning, and communication help families manage the
          journey.
        </p>
        <div className="trust-grid">
          {[
            {
              icon: <FaMedkit size={28} />,
              title: "On-Board ICU Setup",
              description:
                "Our ICU train ambulance can be equipped with ventilators, cardiac monitors, suction equipment, oxygen support, and other critical-care equipment based on the patient's condition.",
            },
            {
              icon: <FaTrain size={28} />,
              title: "Pan-India Rail Network",
              description:
                "We support long-distance transfers across major cities and railway routes, helping families coordinate medical transportation between states.",
            },
            {
              icon: <FaHandHoldingMedical size={28} />,
              title: "Comfortable Journey With 24×7 Care",
              description:
                "Every transfer is planned around the patient's medical needs, with appropriate supervision and support throughout the railway journey.",
            },
            {
              icon: <FaCheckCircle size={28} />,
              title: "24×7 Coordination & Support",
              description:
                "From booking and journey planning to station transfers and destination coordination, we help manage the arrangements for a smooth transfer.",
            },
          ].map((item) => (
            <article className="trust-card" key={item.title}>
              <div className="trust-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">Trusted Train Ambulance Care Across India</h2>
          <p className="benefits-description">
            Humancare Train Ambulance offers a professionally coordinated train
            ambulance service to patients who require safe, supported
            long-distance travel. Our rail ambulance service is tailored to the
            individual patient and their requirements. We arrange medical
            support, necessary equipment, and trained medical professionals
            according to the required level of care.
            <br />
            <br />
            Transferring patients over considerable distances may be difficult
            for relatives when patients are not able to travel independently.
            Our India-based train ambulance service helps coordinate the
            transfer from starting point to destination, including patient
            preparation, train transfer, medical escort, and ambulance support
            at either end when required.
            <br />
            <br />
            Patients may need varied levels of stabilization during
            transportation. We can arrange oxygen, ventilator support, vital
            monitoring, emergency medical equipment, and doctors, nurses, or
            paramedics trained in ICU train ambulance care, based on the
            patient's condition. Each transfer is planned with patient care in
            mind.
            <br />
            <br />
            If you are searching for a train ambulance service near me, contact
            us to discuss the patient's needs and suitable rail transportation.
            We support rail ambulance booking to and from locations across India
            through major railway routes. We also provide transparent
            information about train ambulance costs, prices, and charges based
            on the route, medical team, facilities, equipment, patient's
            condition, and other ambulance needs.
          </p>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="how-title">How Our Train Ambulance Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <div className="how-icon"><FaClipboardCheck size={26} /></div>
            <h3>Patient Assessment</h3>
            <p>We review the condition and decide the suitable train route.</p>
          </div>
          <div className="how-step">
            <div className="how-icon"><FaTrain size={26} /></div>
            <h3>Coach Booking & Preparation</h3>
            <p>
              Coordination with railway ambulance service and train scheduling.
            </p>
          </div>
          <div className="how-step">
            <div className="how-icon"><FaTools size={26} /></div>
            <h3>Setup Installation</h3>
            <p>ICU setup with ventilator and monitors before boarding.</p>
          </div>
          <div className="how-step">
            <div className="how-icon"><FaRoute size={26} /></div>
            <h3>Continuous Care</h3>
            <p>
              Onboard medical assistance in train until safe hospital handover.
            </p>
          </div>
        </div>
      </section>

      <section className="equipment-section">
        <h2 className="equipment-title">Key Benefits of Our Train Ambulance Service</h2>
        <div className="equipment-grid-home">
          {[
            {
              icon: <FaMedkit size={28} />,
              title: "Fully Equipped ICU on Rails",
              description:
                "Our ICU train ambulance can be arranged with ventilators, oxygen support, patient monitors, suction systems, and other medical equipment based on the patient's condition.",
            },
            {
              icon: <FaUserMd size={28} />,
              title: "Trained Medical Professionals",
              description:
                "Patients can travel with qualified doctors, nurses, or paramedics based on their medical requirements, providing supervision throughout the journey.",
            },
            {
              icon: <FaRupeeSign size={28} />,
              title: "Transparent Train Ambulance Cost",
              description:
                "We provide clear information about train ambulance cost, charges, and rail ambulance cost based on the route, medical team, equipment, and level of care required.",
            },
            {
              icon: <FaMapMarkerAlt size={28} />,
              title: "Pan-India Patient Transfer",
              description:
                "Our service supports long-distance transfers across major cities and railway routes, including Patna, Ranchi, Delhi, Kolkata, Chennai, Mumbai, Bangalore, Lucknow, Siliguri, and Guwahati.",
            },
          ].map((item) => (
            <article className="equipment-card" key={item.title}>
              <div className="trust-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="train-ambulance-section">
        <div className="train-container">
          <div className="train-text-box">
            <h2 className="train-title">Train Ambulance Cost in India</h2>
            <p className="train-text">
              Train ambulance and rail ambulance charges vary according to the
              patient's needs, journey, and medical assistance required.
              Humancare Train Ambulance provides an estimate for each transfer
              based on those requirements before the journey is confirmed.
            </p>
            <p className="train-text">
              The train ambulance price may depend on the distance, railway
              route, patient's condition, medical arrangements, equipment,
              medical team, oxygen or ventilator support, and ambulance services
              at the departure or destination station. We explain the main cost
              factors clearly so families understand what is included.
            </p>
            <p className="train-text">
              Where a transfer requires a special ICU setup, doctor supervision,
              or coordination with road ambulances, those arrangements are
              included in the final estimate.
            </p>
          </div>
          <div className="train-image-box">
            <img
              src={Railcost}
              alt="Train ambulance cost information"
              className="train-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="train-ambulance-section">
        <div className="train-container">
          <div className="train-image-box">
            <img
              src={Rail}
              alt="Bed-to-bed train ambulance transfer coordination"
              className="train-image"
              loading="lazy"
            />
          </div>
          <div className="train-text-box">
            <h2 className="train-title">
              Trusted Bed-to-Bed Medical Transfers Across India
            </h2>
            <p className="train-text">
              At Humancare Train Ambulance, we offer supported critical-care
              transfers for patients who need specialized treatment and care
              while traveling long distances by rail. Our service is planned
              according to the patient's health condition, with medical
              supervision and professional care arranged for the journey.
            </p>
            <p className="train-text">
              Our experts oversee the major phases of the transfer, from
              preliminary medical evaluation and travel coordination to onboard
              care and post-train hospital transfer. An ICU train ambulance can
              be arranged with oxygen, ventilator support, monitoring, an
              emergency kit, and a trained doctor, nurse, or paramedic as
              required.
            </p>
            <p className="train-text">
              We coordinate patient movements across Indian cities and railway
              routes including Patna, Delhi, Mumbai, Ranchi, Kolkata, Guwahati,
              Bangalore, Chennai, Lucknow, Siliguri, Jamshedpur, Bhopal, Raipur,
              and Varanasi. Whether moving between hospitals or arranging a
              long-distance transfer, we work to make the journey organized.
            </p>
            <p className="train-text">
              When your family needs a reliable train ambulance, we focus on
              medical preparation, monitoring, patient comfort, and coordination
              with family members throughout the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <h2>Why Families Trust Humancare Train Ambulance</h2>
        <div className="trust-grid">
          {[
            {
              icon: <Clock size={28} />,
              title: "24×7 Nationwide Coordination",
              description:
                "Round-the-clock coordination helps families arrange medically supported transfers across major cities and railway routes in India.",
            },
            {
              icon: <CreditCard size={28} />,
              title: "Transparent Train Ambulance Charges",
              description:
                "We explain the train ambulance cost based on the route, patient condition, medical team, equipment, and level of care required.",
            },
            {
              icon: <Globe size={28} />,
              title: "Easy Booking & Railway Coordination",
              description:
                "Our team assists with train ambulance booking and railway coordination, helping organize the journey and related transportation.",
            },
            {
              icon: <CheckCircle2 size={28} />,
              title: "Experienced Medical Care",
              description:
                "Trained doctors, nurses, or paramedics and appropriate medical equipment can be arranged according to the patient's condition.",
            },
          ].map((item) => (
            <article className="trust-card" key={item.title}>
              <div className="trust-icon">{item.icon}</div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-container">
          <h2 className="booking-title">Train Ambulance Booking</h2>
          <p className="booking-description">
            Booking a train ambulance in India should be easy and well organized,
            especially when a patient is taking a long journey and medical
            requirements need to be arranged. Humancare Train Ambulance helps
            families coordinate the required medical support and rail travel
            according to the patient's condition and preferred route.
          </p>
          <p className="booking-description">
            Our team organizes the suitable medical team, equipment, train
            arrangements, and ambulance support at the departure or destination
            station. If you are looking for a train ambulance service near you,
            contact us to discuss the patient's requirements and suitable
            transfer options.
          </p>
          <div className="call-box">
            <div>
              <h3>Call Our Medical Team (24/7)</h3>
              <p>
                Contact us for assistance with train ambulance booking anywhere
                in India.
              </p>
            </div>
            <a className="booking-call-link" href="tel:+919833997373">
              <FaPhoneAlt aria-hidden="true" />
              <span>Call Now</span>
            </a>
          </div>
          <div className="steps-grid">
            {[
              {
                title: "Patient Assessment",
                description:
                  "Our team reviews the patient's condition, mobility, treatment requirements, and level of care needed to determine appropriate medical support.",
              },
              {
                title: "Route & Cost Planning",
                description:
                  "We evaluate the journey and explain the train ambulance cost, route, travel arrangements, medical team, and equipment required.",
              },
              {
                title: "Railway Coordination & Documentation",
                description:
                  "Our team coordinates railway arrangements and documentation to help ensure the patient's journey is properly planned before departure.",
              },
              {
                title: "Onboard ICU Setup & Patient Transfer",
                description:
                  "The required ICU train ambulance setup is prepared according to the patient's needs, with medical supervision throughout the journey.",
              },
            ].map((step) => (
              <article className="step-card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">
            Frequently Asked Questions About Train Ambulance Service
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleFAQ(index);
                  }
                }}
              >
                <h3>{faq.question}</h3>
                <ChevronDown
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default Home;
