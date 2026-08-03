import React, { useState } from "react";
import { Helmet } from "react-helmet";
import bannerImg from "../assets/Train-Ambulance-Service-in-Varanasi.png";
import "./Blog1.css";

/* ── FAQ accordion data ──────────────────────────────────────── */
const faqs = [
  {
    q: "What is a Train Ambulance Service in Varanasi?",
    a: "A Train Ambulance Service in Varanasi provides medically supervised long-distance patient transportation using an ICU-equipped railway compartment with doctors, nurses, oxygen support, ventilators, and emergency medical equipment.",
  },
  {
    q: "Who can use a Train Ambulance?",
    a: "Patients recovering from surgery, stroke, cancer, trauma, neurological disorders, cardiac conditions, or requiring ventilator support can benefit from Train Ambulance services.",
  },
  {
    q: "Is Train Ambulance safe for critical patients?",
    a: "Yes. Medically stable critical patients can safely travel under continuous supervision from experienced doctors and ICU-trained nurses.",
  },
  {
    q: "What equipment is available inside an ICU Train Ambulance?",
    a: "Equipment typically includes ventilators, cardiac monitors, oxygen cylinders, infusion pumps, suction machines, defibrillators, emergency medicines, and advanced ICU monitoring systems.",
  },
  {
    q: "Does a doctor travel with every patient?",
    a: "Depending on the patient's medical condition, the escort team may include a critical care doctor, ICU nurse, paramedic, or all three.",
  },
  {
    q: "What is included in Bed-to-Bed Patient Transfer?",
    a: "The service includes pickup ambulance, railway medical transfer, ICU monitoring during travel, destination ambulance, and safe admission to the receiving hospital.",
  },
  {
    q: "What affects Train Ambulance Cost in Varanasi?",
    a: "Pricing depends on the patient's medical condition, destination, ICU equipment, medical escort team, railway availability, and ambulance support.",
  },
  {
    q: "Is Train Ambulance cheaper than Air Ambulance?",
    a: "Yes. Train Ambulance services generally provide advanced ICU care at a significantly lower cost than Air Ambulance services.",
  },
  {
    q: "Can ventilator patients travel by Train Ambulance?",
    a: "Yes, provided the patient is medically fit for rail transportation and appropriate ventilator support is arranged.",
  },
  {
    q: "Which cities can patients be transferred to from Varanasi?",
    a: "Patients can be transferred to Delhi, Mumbai, Chennai, Bangalore, Hyderabad, Kolkata, Lucknow, Pune, Jaipur, Patna, Ahmedabad, Kochi, and many other cities across India.",
  },
  {
    q: "Is oxygen available throughout the journey?",
    a: "Yes. Continuous oxygen support is available according to the patient's medical requirements.",
  },
  {
    q: "Can family members travel with the patient?",
    a: "Yes. Subject to railway availability and medical planning, accompanying family members can usually travel with the patient.",
  },
  {
    q: "How quickly can a Train Ambulance be arranged?",
    a: "Depending on railway availability and the patient's condition, arrangements can often begin within a few hours after confirmation.",
  },
  {
    q: "What documents are required for booking?",
    a: "Medical reports, doctor's recommendation, identification documents, hospital records, and travel details are generally required.",
  },
  {
    q: "How do doctors decide whether a patient can travel by Train Ambulance?",
    a: "Medical coordinators evaluate the patient's diagnosis, stability, oxygen requirements, vital signs, and treating physician's recommendations before approving rail transportation.",
  },
];

/* ── Reusable FAQ item ───────────────────────────────────────── */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`b5-faq-item ${open ? "b5-faq-open" : ""}`}>
      <button
        className="b5-faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="b5-faq-chevron">▾</span>
      </button>
      {open && (
        <div className="b5-faq-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

/* ── ICU equipment list ─────────────────────────────────────── */
const equipmentList = [
  "Advanced ICU Ventilator",
  "Multi-Parameter Cardiac Monitor",
  "Oxygen Cylinders with Backup Supply",
  "BiPAP & CPAP Support",
  "Infusion Pump",
  "Syringe Pump",
  "Portable Suction Machine",
  "Defibrillator",
  "Emergency Airway Kit",
  "Portable ECG Monitoring",
  "Nebulizer",
  "Pulse Oximeter",
  "Emergency Medicines",
  "Air Mattress",
  "Trauma Care Supplies",
];

/* ── Destination cities ─────────────────────────────────────── */
const cities = [
  "Delhi NCR",
  "Mumbai",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Kolkata",
  "Lucknow",
  "Jaipur",
  "Pune",
  "Patna",
  "Ahmedabad",
  "Kochi",
];

/* ── Patient categories ─────────────────────────────────────── */
const patientCategories = [
  {
    icon: "❤️",
    title: "Cardiac Patients",
    desc: "Patients recovering from bypass surgery, angioplasty, valve replacement, heart failure, or heart attack often require monitored transportation to advanced cardiac hospitals.",
  },
  {
    icon: "🎗️",
    title: "Cancer Patients",
    desc: "Individuals undergoing chemotherapy, radiation therapy, bone marrow transplant, or surgical oncology frequently travel between cities for continued treatment.",
  },
  {
    icon: "🧠",
    title: "Stroke & Neurological Patients",
    desc: "Patients recovering from stroke, brain hemorrhage, epilepsy, brain surgery, spinal cord injury, or paralysis benefit from continuous neurological monitoring during transit.",
  },
  {
    icon: "🦴",
    title: "Trauma & Accident Patients",
    desc: "Orthopedic trauma, spinal fractures, multiple injuries, and post-operative rehabilitation cases require careful transportation supported by trained medical professionals.",
  },
  {
    icon: "🫁",
    title: "Ventilator-Supported Patients",
    desc: "Medically stable patients requiring ventilator assistance can travel safely inside an ICU Train Ambulance under expert supervision.",
  },
  {
    icon: "👴",
    title: "Elderly Patients",
    desc: "Senior citizens with multiple health conditions often require oxygen support, medication management, cardiac monitoring, and nursing care throughout long-distance travel.",
  },
  {
    icon: "🫀",
    title: "Organ Transplant Patients",
    desc: "Patients awaiting transplantation or requiring follow-up care after transplant surgery often travel between specialty hospitals with continuous medical supervision.",
  },
];

/* ── Booking steps ──────────────────────────────────────────── */
const bookingSteps = [
  {
    step: "01",
    title: "Contact the Coordination Team",
    desc: "Call the 24×7 emergency coordination desk and provide basic patient details.",
  },
  {
    step: "02",
    title: "Share Medical Reports",
    desc: "Treating doctor's notes, discharge summary, investigation reports, and current medical status help determine whether rail transport is appropriate.",
  },
  {
    step: "03",
    title: "Medical Assessment",
    desc: "Experienced coordinators review the patient's condition and recommend the required ICU setup, medical escort, and transportation plan.",
  },
  {
    step: "04",
    title: "Receive a Transparent Quotation",
    desc: "Families receive a detailed quotation covering medical equipment, railway arrangements, ambulance services, and professional medical staff.",
  },
  {
    step: "05",
    title: "Journey Planning",
    desc: "After confirmation, the complete transfer is organized — railway reservations, ICU preparation, road ambulances, and hospital coordination.",
  },
  {
    step: "06",
    title: "Bed-to-Bed Patient Transfer",
    desc: "On the day of travel, the patient is safely transferred from the referring hospital to the destination hospital under continuous medical supervision.",
  },
];

/* ── Trust pillars ──────────────────────────────────────────── */
const trustPillars = [
  "24×7 Emergency Coordination",
  "Experienced Critical Care Doctors",
  "ICU-Trained Nurses",
  "Ventilator Support",
  "Oxygen Support",
  "Advanced Cardiac Monitoring",
  "Bed-to-Bed Patient Transfer",
  "Nationwide Railway Coverage",
  "Transparent Pricing",
  "Personalized Medical Planning",
];

/* ════════════════════════════════════════════════════════════ */
const Blog5 = () => {
  return (
    <>
      <Helmet>
        <title>
          Train Ambulance Service in Varanasi | ICU Rail Ambulance 24×7
        </title>
        <meta
          name="description"
          content="Book a Train Ambulance Service in Varanasi with ICU-equipped rail ambulances, expert doctors, ventilator support, oxygen, and safe bed-to-bed patient transfer across India."
        />
      </Helmet>

      {/* ===== Blog Banner ===== */}
      <section className="blog-banner-d">
        <img
          src={bannerImg}
          alt="ICU-equipped Train Ambulance Service in Varanasi"
          className="banner-img"
          loading="eager"
          width="1200"
          height="420"
        />
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>
            Train Ambulance Service in Varanasi: Complete Guide for
            Long-Distance Patient Transfer
          </h1>
        </div>
      </section>

      {/* ===== Blog Content ===== */}
      <section className="blog-content">
        <div className="content-wrapper">
          {/* ── Intro ── */}
          <p>
            Medical emergencies rarely give families time to prepare. One
            unexpected diagnosis, a sudden accident, a major surgery, or a
            critical illness can quickly lead to another difficult decision: how
            to transport a patient safely to a hospital in another city without
            compromising their medical condition. While road ambulances are
            suitable for shorter distances and air ambulances offer the fastest
            option for extremely critical emergencies, they are not always the
            most practical solution. This is where a{" "}
            <strong>Train Ambulance Service in Varanasi</strong> becomes one of
            the safest, most reliable, and most cost-effective choices for
            long-distance patient transfer.
          </p>
          <p>
            An ICU-equipped Train Ambulance combines India's extensive railway
            network with advanced critical care support, allowing patients to
            travel hundreds or even thousands of kilometers under continuous
            medical supervision. Equipped with hospital-grade ICU equipment such
            as ventilators, oxygen support, cardiac monitors, infusion pumps,
            and emergency medications, these specialized{" "}
            <strong>Rail Ambulance</strong> services ensure that patients
            receive uninterrupted medical care from the moment they leave one
            hospital until they reach another.
          </p>
          <p>
            Whether a patient needs advanced cancer treatment in Mumbai, a liver
            transplant in Chennai, neurological care in Bangalore, cardiac
            surgery in Delhi, or specialized rehabilitation in Hyderabad, a
            professionally managed{" "}
            <strong>Train Ambulance from Varanasi</strong> provides safe
            Bed-to-Bed Patient Transfer without the financial burden of an air
            ambulance.
          </p>

          {/* ── What Is ── */}
          <h2>What Is a Train Ambulance Service?</h2>
          <p>
            A Train Ambulance Service is a specialized medical transportation
            system designed for patients who require continuous medical care
            during long-distance travel. Unlike regular train journeys, selected
            railway berths, cabins, or entire compartments are converted into
            mobile intensive care units where critically ill or medically
            dependent patients can travel under the supervision of experienced
            healthcare professionals.
          </p>

          {/* Quick Answer box */}
          <div className="b5-quick-answer">
            <div className="b5-qa-label">Quick Answer</div>
            <p>
              A <strong>Train Ambulance Service in Varanasi</strong> is a
              medically equipped railway transfer service that includes ICU
              equipment, trained doctors, nurses, oxygen support, ventilator
              facilities, emergency medicines, and road ambulance assistance for
              safe hospital-to-hospital patient transportation across India.
            </p>
          </div>

          <p>
            The objective is not simply to transport a patient — it is to
            maintain hospital-level medical care throughout the journey.
          </p>

          <h2>A Professionally Managed Rail Ambulance Includes</h2>
          <div className="b5-two-col-list">
            {[
              "ICU-equipped railway compartment",
              "Advanced ventilator support",
              "Continuous oxygen supply",
              "Multi-parameter cardiac monitor",
              "Infusion and syringe pumps",
              "Portable suction machine",
              "Emergency medicines",
              "Critical care doctor",
              "ICU-trained nurse",
              "Experienced paramedic",
              "Bed-to-Bed Patient Transfer",
              "24×7 medical coordination",
            ].map((item, i) => (
              <div key={i} className="b5-check-item">
                <span className="b5-check-icon">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* ── Why More Families ── */}
          <h2>Why More Families Are Choosing Train Ambulance Services</h2>
          <p>
            Healthcare has changed significantly over the last decade. Today,
            patients frequently travel between cities to receive specialized
            treatment that may not be available locally. Organ transplant
            centers, cancer institutes, neurological hospitals, trauma centers,
            and advanced cardiac hospitals are often concentrated in
            metropolitan cities. However, safely transporting a medically
            fragile patient over distances of 800 to 2,000 kilometers presents
            significant challenges. A Train Ambulance Service bridges this gap
            by combining affordability, accessibility, and advanced medical
            care.
          </p>

          {/* Benefit cards */}
          <div className="b5-benefit-grid">
            <div className="b5-benefit-card">
              <div className="b5-benefit-icon">🏥</div>
              <h3>Continuous Medical Care</h3>
              <p>
                Trained healthcare professionals continuously monitor the
                patient's condition, vital signs, and oxygen therapy throughout
                the journey, significantly reducing transportation-related
                risks.
              </p>
            </div>
            <div className="b5-benefit-card">
              <div className="b5-benefit-icon">💰</div>
              <h3>More Affordable Than Air Ambulance</h3>
              <p>
                For medically stable patients, a Train Ambulance provides nearly
                the same level of ICU support at a substantially lower cost —
                with critical care monitoring, advanced ICU equipment, oxygen
                therapy, and ventilator support.
              </p>
            </div>
            <div className="b5-benefit-card">
              <div className="b5-benefit-icon">🛏️</div>
              <h3>Comfortable for Long-Distance Travel</h3>
              <p>
                Rail transportation provides a comparatively smoother journey
                with less vibration than long-distance road ambulances, making
                it more comfortable for medically stable patients requiring
                extended travel.
              </p>
            </div>
            <div className="b5-benefit-card">
              <div className="b5-benefit-icon">🗺️</div>
              <h3>Nationwide Railway Connectivity</h3>
              <p>
                Varanasi enjoys excellent railway connectivity with almost every
                major medical destination in India — Delhi, Mumbai, Chennai,
                Bangalore, Hyderabad, Kolkata, and many more.
              </p>
            </div>
          </div>

          {/* ── Destination Cities ── */}
          <h2>Common Transfer Destinations from Varanasi</h2>
          <div className="b5-city-grid">
            {cities.map((city, i) => (
              <div key={i} className="b5-city-chip">
                <span className="b5-city-dot"></span>
                {city}
              </div>
            ))}
          </div>

          {/* ── Varanasi Hub ── */}
          <h2>
            Why Varanasi Is One of North India's Major Medical Transfer Hubs
          </h2>
          <p>
            Varanasi is much more than a spiritual destination. It is also an
            important healthcare center serving patients from Eastern Uttar
            Pradesh, Bihar, Jharkhand, Madhya Pradesh, and neighboring regions.
            Every year, thousands of patients visit Varanasi for emergency care,
            surgery, cancer treatment, neurological consultation, orthopedic
            procedures, and specialized diagnostics.
          </p>
          <p>
            However, certain complex medical treatments — including advanced
            organ transplantation, highly specialized oncology, pediatric
            cardiac surgery, robotic surgery, and rare neurological
            interventions — may require transfer to nationally recognized
            hospitals in metropolitan cities. This is where{" "}
            <strong>Emergency Train Ambulance Services</strong> become
            invaluable. From the hospital in Varanasi to the destination
            hospital anywhere in India, every stage of the journey is medically
            coordinated.
          </p>

          {/* ── Who Can Benefit ── */}
          <h2>Who Can Benefit from a Train Ambulance Service?</h2>
          <p>
            Every patient's condition is unique. Before recommending rail
            transport, the medical coordination team carefully evaluates the
            patient's diagnosis, stability, treatment requirements, and travel
            distance.
          </p>
          <div className="b5-patient-grid">
            {patientCategories.map((cat, i) => (
              <div key={i} className="b5-patient-card">
                <div className="b5-patient-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>

          {/* ── How It Works ── */}
          <h2>How Does an ICU Train Ambulance Work?</h2>
          <p>
            Many people assume a Train Ambulance simply means placing a
            stretcher inside a train compartment. In reality, every successful
            transfer involves careful planning, clinical evaluation, logistics
            management, railway coordination, and continuous medical
            supervision. The process begins with reviewing the patient's medical
            records, diagnosis, doctor's recommendations, and current condition.
          </p>
          <p>
            Once the patient is medically cleared for rail transfer, the
            coordination team arranges suitable railway reservations, ICU
            equipment installation, doctor and nursing team, road ambulances at
            both locations, medical consumables, oxygen supply, and emergency
            medicines. On the day of travel, a road ambulance transfers the
            patient from the referring hospital to the railway station. Doctors
            regularly monitor blood pressure, heart rate, oxygen saturation,
            respiratory status, neurological condition, and medication schedules
            while remaining prepared for unexpected emergencies. Upon arrival,
            another road ambulance completes the Hospital-to-Hospital Transfer.
          </p>

          {/* ── ICU Equipment ── */}
          <h2>
            Hospital-Grade ICU Equipment Available Inside a Train Ambulance
          </h2>
          <p>
            Depending on the patient's condition, an ICU Train Ambulance may
            include:
          </p>
          <div className="b5-equipment-grid">
            {equipmentList.map((item, i) => (
              <div key={i} className="b5-equipment-item">
                <span className="b5-equip-dot">🔴</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="b5-note">
            Every mission is customized according to the patient's medical
            condition rather than using a one-size-fits-all setup. That
            personalized approach significantly improves patient safety while
            minimizing the risks associated with long-distance travel.
          </p>

          {/* ── Cost Section ── */}
          <h2>Train Ambulance Cost in Varanasi: What Determines the Price?</h2>
          <p>
            One of the first questions families ask is,{" "}
            <em>"How much does a Train Ambulance Service in Varanasi cost?"</em>{" "}
            The answer depends on several medical and logistical factors rather
            than a fixed rate. Every patient has unique medical needs, and every
            journey requires a customized transportation plan.
          </p>

          <div className="b5-cost-factors">
            {[
              {
                title: "Patient's Medical Condition",
                desc: "The severity of the patient's illness determines the level of ICU care required. Patients requiring ventilator support, continuous cardiac monitoring, or intensive medication management generally need additional medical resources.",
              },
              {
                title: "Distance to Destination",
                desc: "A transfer from Varanasi to Lucknow differs significantly from a transfer to Chennai, Bangalore, Kochi, or Mumbai. Longer routes require additional medical planning, consumables, and staff deployment.",
              },
              {
                title: "ICU Equipment Requirements",
                desc: "Equipment needs — ventilator, cardiac monitor, BiPAP/CPAP, defibrillator, infusion pumps — are determined by the diagnosis and directly influence the overall transportation plan.",
              },
              {
                title: "Medical Escort Team",
                desc: "Some patients only require an ICU nurse, while others require a critical care doctor, nurse, and paramedic. The team is selected after reviewing medical reports.",
              },
              {
                title: "Railway Availability",
                desc: "Train schedules, coach availability, reservation categories, and route planning also influence the final cost.",
              },
              {
                title: "Bed-to-Bed Patient Transfer",
                desc: "A complete transfer includes pickup ambulance, railway transfer, medical escort, ICU setup, destination ambulance, and hospital handover — all in one seamless package.",
              },
            ].map((factor, i) => (
              <div key={i} className="b5-cost-card">
                <div className="b5-cost-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3>{factor.title}</h3>
                  <p>{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Comparison Table ── */}
          <h2>
            Train Ambulance vs Air Ambulance: Which One Should You Choose?
          </h2>
          <p>
            Choosing between a Train Ambulance and an Air Ambulance depends
            entirely on the patient's medical condition, urgency, travel
            distance, and available budget.
          </p>

          <div className="b5-table-wrap">
            <table className="b5-compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Train Ambulance</th>
                  <th>Air Ambulance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Best For",
                    "Long-distance stable critical patients",
                    "Extremely time-sensitive emergencies",
                  ],
                  ["Cost", "More affordable", "Significantly higher"],
                  ["ICU Equipment", "Yes ✔", "Yes ✔"],
                  ["Doctor Escort", "Yes ✔", "Yes ✔"],
                  ["Ventilator Support", "Yes ✔", "Yes ✔"],
                  ["Bed-to-Bed Transfer", "Yes ✔", "Yes ✔"],
                  ["Long Distance Travel", "Excellent", "Excellent"],
                  ["Travel Time", "Longer", "Fastest"],
                ].map(([feature, train, air], i) => {
                  const renderCell = (value) =>
                    value.includes("✔") ? (
                      <span className="b5-cell-check">
                        <span className="b5-check-mark">✔</span>
                        {value.replace("✔", "").trim()}
                      </span>
                    ) : (
                      <span className="b5-cell-plain">{value}</span>
                    );

                  return (
                    <tr key={i}>
                      <td className="b5-feature-cell">{feature}</td>
                      <td>{renderCell(train)}</td>
                      <td>{renderCell(air)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="b5-when-grid">
            <div className="b5-when-card b5-when-train">
              <h3>🚂 When Should You Choose a Train Ambulance?</h3>
              <ul>
                <li>The patient is medically stable for rail travel.</li>
                <li>Continuous ICU monitoring is required.</li>
                <li>Long-distance road travel is unsafe.</li>
                <li>
                  Families want advanced medical care at a more economical cost.
                </li>
                <li>The destination city has good railway connectivity.</li>
              </ul>
            </div>
            <div className="b5-when-card b5-when-air">
              <h3>✈️ When Is an Air Ambulance Better?</h3>
              <ul>
                <li>Every minute is critical.</li>
                <li>The patient cannot tolerate prolonged travel.</li>
                <li>There is no suitable railway connectivity.</li>
                <li>
                  Immediate transfer to a tertiary care hospital is essential.
                </li>
              </ul>
            </div>
          </div>

          {/* ── Booking Steps ── */}
          <h2>How to Book a Train Ambulance Service in Varanasi</h2>
          <p>
            Booking a Train Ambulance from Varanasi is simpler than many
            families expect.
          </p>

          <div className="b5-timeline">
            {bookingSteps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return isLeft ? (
                <div key={i} className="b5-tl-row b5-tl-row-left">
                  <div className="b5-tl-card b5-tl-card-l">
                    <span className="b5-tl-tag">Step {s.step}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <div className="b5-tl-center">
                    <div className="b5-tl-dot">{s.step}</div>
                  </div>
                  <div className="b5-tl-empty"></div>
                </div>
              ) : (
                <div key={i} className="b5-tl-row b5-tl-row-right">
                  <div className="b5-tl-empty"></div>
                  <div className="b5-tl-center">
                    <div className="b5-tl-dot">{s.step}</div>
                  </div>
                  <div className="b5-tl-card b5-tl-card-r">
                    <span className="b5-tl-tag">Step {s.step}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Why Humancare ── */}
          <h2>Why Families Trust Humancare Train Ambulance</h2>
          <p>
            Medical transportation is about much more than moving a patient from
            one city to another. It is about preserving life, ensuring
            continuity of care, and giving families confidence during one of the
            most stressful moments they may ever face. Humancare focuses on
            delivering medically coordinated long-distance patient transfers
            with experienced healthcare professionals and advanced ICU support.
          </p>
          <div className="b5-trust-grid">
            {trustPillars.map((pillar, i) => (
              <div key={i} className="b5-trust-item">
                <span className="b5-trust-check">✅</span>
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          {/* ── FAQ ── */}
          <h2 className="b5-faq-heading">Frequently Asked Questions</h2>
          <div className="b5-faq-list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>

          {/* ── Conclusion ── */}
          <h2>Conclusion</h2>
          <p>
            A <strong>Train Ambulance Service in Varanasi</strong> offers much
            more than transportation — it provides a safe bridge between
            hospitals, ensuring patients receive uninterrupted medical care
            throughout long-distance travel. With advanced ICU equipment,
            experienced medical escorts, hospital-to-hospital coordination, and
            cost-effective railway connectivity, Train Ambulance services have
            become an essential solution for families seeking reliable critical
            care transport across India.
          </p>
          <p>
            Whether the patient requires specialized treatment in another city,
            post-operative transfer, cancer care, neurological rehabilitation,
            or cardiac management, choosing a professionally managed ICU Train
            Ambulance ensures that medical safety remains the highest priority
            from departure to arrival.
          </p>
          <p>
            If you are planning a long-distance patient transfer, consult
            experienced medical coordinators who can evaluate the patient's
            condition, recommend the safest mode of transportation, and organize
            a seamless Bed-to-Bed Patient Transfer tailored to individual
            medical needs.
          </p>

          {/* ── CTA Banner ── */}
          <div className="b5-cta-banner">
            <div className="b5-cta-content">
              <h3>Arrange a Safe Train Ambulance from Varanasi</h3>
              <p>
                Need expert medical transport? Contact Humancare for
                ICU-equipped Train Ambulance Services, experienced medical
                escorts, and hassle-free patient transfers across India.
              </p>
            </div>
            <a href="tel:+919833997373" className="b5-cta-btn">
              📞 Call Now — 24×7
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog5;
