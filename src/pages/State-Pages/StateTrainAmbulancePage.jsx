import { useEffect, useRef, useState } from "react";
import "./StateTrainAmbulancePage.css";

/* ============================================================
   DATA-DRIVEN STATE CONFIG
   Swap this object (or move it to states.js and pass it as the
   `data` prop) to regenerate the whole page for another state.
   ============================================================ */
export const maharashtraData = {
  state: "Maharashtra",
  slug: "train-ambulance-service-in-maharashtra",

  whyChoose: [
    { icon: "rupee", title: "Affordable Long-Distance Transfer", body: "More economical than air ambulance for patients whose condition is suitable for rail transport." },
    { icon: "monitor", title: "Continuous Medical Monitoring", body: "Doctors, nurses and paramedics can accompany the patient for the full duration of the journey." },
    { icon: "cross", title: "ICU-Level Equipment", body: "Ventilator, cardiac monitor, oxygen, suction, infusion pump and emergency medicines, as required." },
    { icon: "bed", title: "Comfortable Long-Distance Journey", body: "A practical option for routes where road transport is difficult or excessively long." },
    { icon: "rail", title: "Railway Coordination", body: "Humancare coordinates the required railway travel and medical arrangements on your behalf." },
    { icon: "route", title: "Bed-to-Bed Transfer", body: "Home → ground ambulance → station → train ambulance → destination station → ground ambulance → hospital." },
  ],

  services: [
    { tag: "ICU", title: "ICU Train Ambulance", body: "For patients requiring intensive medical monitoring during transit." },
    { tag: "CRITICAL", title: "Critical Patient Transfer", body: "Medically supervised long-distance transfers for critical cases." },
    { tag: "NON-EMERGENCY", title: "Non-Emergency Patient Transfer", body: "For stable patients who are unable to travel independently." },
    { tag: "VENTILATOR", title: "Ventilator Patient Transfer", body: "Specialised arrangements for patients requiring ventilator support." },
    { tag: "OXYGEN", title: "Oxygen-Supported Transfer", body: "Continuous oxygen support maintained throughout the journey." },
    { tag: "BEDRIDDEN", title: "Bedridden Patient Transfer", body: "Safe transportation for patients who cannot travel normally." },
    { tag: "POST-SURGERY", title: "Post-Surgery Patient Transfer", body: "Medically supervised transport for patients after treatment." },
    { tag: "ELDERLY", title: "Elderly Patient Transfer", body: "Comfort-focused transportation with medical assistance." },
    { tag: "PEDIATRIC", title: "Pediatric Patient Transfer", body: "Medical arrangements for children, where clinically appropriate." },
    { tag: "INTER-STATE", title: "Inter-State Patient Transfer", body: "Transfers between hospitals across different states." },
    { tag: "HOSPITAL", title: "Hospital-to-Hospital Transfer", body: "Complete medical coordination between healthcare facilities." },
    { tag: "RETURN", title: "Repatriation / Return Home", body: "Assisting patients returning to their home city after treatment." },
  ],

  equipment: [
    { title: "Ventilator" }, { title: "Cardiac Monitor" }, { title: "Oxygen Supply" },
    { title: "Suction Machine" }, { title: "Infusion Pump" }, { title: "Nebulisation" },
    { title: "Emergency Medicines" }, { title: "Basic Life Support Kit" },
  ],

  team: [
    { role: "MD / Emergency Medicine", body: "Leads clinical decisions and monitors the patient's condition throughout the journey." },
    { role: "Critical Care Nurse", body: "Manages continuous monitoring, medication and equipment onboard." },
    { role: "Paramedic", body: "Supports patient handling, transfers and emergency response." },
    { role: "Emergency Medical Technician", body: "Assists with equipment setup and ground-to-train coordination." },
  ],

  process: [
    { code: "01", title: "Patient Assessment", body: "Our team reviews the patient's medical condition and requirements." },
    { code: "02", title: "Route Planning", body: "The most suitable railway route and travel arrangement are evaluated." },
    { code: "03", title: "Medical Setup", body: "Required ICU equipment and medical staff are arranged." },
    { code: "04", title: "Ground Pickup", body: "Patient is transported safely to the railway station." },
    { code: "05", title: "Train Transfer", body: "Patient travels with the required medical supervision." },
    { code: "06", title: "Destination Transfer", body: "Ground ambulance moves the patient to the destination hospital or home." },
    { code: "07", title: "Safe Handover", body: "The patient is handed over to the receiving medical team or family." },
  ],

  journey: [
    { title: "Home / Hospital", body: "Patient assessed and prepared for transfer.", transit: false },
    { title: "Ground Ambulance", body: "Safe pickup and transport to the railway station.", transit: false },
    { title: "Railway Station", body: "Coordinated boarding with medical team and equipment.", transit: false },
    { title: "ICU Train Ambulance", body: "Continuous medical supervision for the full journey.", transit: true },
    { title: "Destination Station", body: "Handover to the receiving ground ambulance.", transit: false },
    { title: "Ground Ambulance", body: "Transfer from station to the final destination.", transit: false },
    { title: "Hospital / Home", body: "Safe handover to the receiving medical team or family.", transit: false },
  ],

  cities: [
    "Mumbai", "Pune", "Nagpur", "Nashik", "Chhatrapati Sambhajinagar",
    "Kolhapur", "Thane", "Navi Mumbai", "Solapur", "Amravati", "Nanded", "Jalgaon",
  ],

  routes: [
    ["Mumbai", "Delhi"], ["Mumbai", "Kolkata"], ["Mumbai", "Patna"],
    ["Mumbai", "Lucknow"], ["Mumbai", "Chennai"], ["Mumbai", "Bengaluru"],
    ["Pune", "Delhi"], ["Nagpur", "Delhi"], ["Nagpur", "Mumbai"],
  ],

  suitable: [
    "Stable critical patients", "Semi-critical patients", "Bedridden patients",
    "Elderly patients", "Post-surgery patients", "Patients requiring oxygen support",
    "Selected ventilator-dependent patients", "Patients returning home after treatment",
  ],

  safety: [
    { title: "Continuous Monitoring", body: "Vitals are tracked throughout the journey by the onboard medical team." },
    { title: "Medical Supervision", body: "A qualified team stays with the patient from pickup to handover." },
    { title: "Emergency Preparedness", body: "Protocols and equipment are in place for onboard emergencies." },
    { title: "Oxygen Support", body: "Oxygen supply maintained and monitored where required." },
    { title: "Equipment Readiness", body: "All equipment is checked before departure." },
    { title: "Coordinated Handover", body: "Receiving hospital or family is briefed before arrival." },
  ],

  testimonials: [
    { name: "Sample Testimonial", place: "Mumbai → Delhi", quote: "Replace with a real, sourced testimonial from a Maharashtra patient transfer before publishing this page." },
    { name: "Sample Testimonial", place: "Pune → Chennai", quote: "Replace with a real, sourced testimonial from a Maharashtra patient transfer before publishing this page." },
    { name: "Sample Testimonial", place: "Nagpur → Kolkata", quote: "Replace with a real, sourced testimonial from a Maharashtra patient transfer before publishing this page." },
  ],

  cases: [
    { from: "Nagpur", to: "Delhi", note: "Sample case format — replace with a verified, consented case summary (condition, support provided, outcome) before publishing." },
    { from: "Pune", to: "Bengaluru", note: "Sample case format — replace with a verified, consented case summary (condition, support provided, outcome) before publishing." },
  ],

  faqs: [
    { q: "What is a train ambulance service?", a: "A train ambulance is a reserved railway coach or coupe fitted with ICU-level medical equipment, accompanied by a medical team, used to transfer patients over long distances." },
    { q: "How does a train ambulance work?", a: "The patient is assessed, a suitable route and coach are arranged, equipment and staff are set up, and the patient is monitored throughout the rail journey with ground ambulance support at both ends." },
    { q: "Is train ambulance available in Maharashtra?", a: "Yes. Coordination is available from major Maharashtra cities including Mumbai, Pune, Nagpur, Nashik and others, for journeys within and outside the state." },
    { q: "How can I book a train ambulance in Maharashtra?", a: "Call our 24/7 coordination line or submit the request form on this page with the patient's route and condition, and our team will call back with next steps." },
    { q: "How much does a train ambulance cost in Maharashtra?", a: "Cost depends on distance, route, patient condition, equipment, staffing and ground ambulance needs. We provide a personalised estimate after assessment." },
    { q: "Can a ventilator patient travel by train ambulance?", a: "Selected ventilator-dependent patients may be suitable, subject to a medical assessment confirming they can be safely supported during the journey." },
    { q: "Can oxygen support be provided?", a: "Yes, continuous oxygen support can be arranged and monitored by the onboard medical team where required." },
    { q: "Are doctors and nurses available onboard?", a: "Yes, medical staff are assigned according to the patient's condition and required level of care." },
    { q: "Can bedridden patients travel by train ambulance?", a: "Yes, bedridden patients are commonly transferred this way, with appropriate equipment and staff arranged in advance." },
    { q: "Can you arrange ground ambulance pickup and drop?", a: "Yes, ground ambulance coordination at both the origin and destination is part of the bed-to-bed service." },
    { q: "Do you provide hospital-to-hospital transfers?", a: "Yes, we coordinate complete hospital-to-hospital transfers, including handover to the receiving medical team." },
    { q: "Can train ambulance services be arranged between different states?", a: "Yes, inter-state transfers are one of the most common uses of this service." },
    { q: "Is train ambulance suitable for critical patients?", a: "It can be suitable for stable and semi-critical patients. Our medical team evaluates each case individually before confirming suitability." },
    { q: "How quickly can a train ambulance be arranged?", a: "Timelines depend on route, train availability and the patient's condition. Contact our coordination team as early as possible for the fastest response." },
    { q: "What equipment is available in an ICU train ambulance?", a: "Equipment can include a ventilator, cardiac monitor, oxygen supply, suction machine, infusion pump and emergency medicines, selected per patient need." },
    { q: "What information is required for booking?", a: "We typically need the patient's current condition, origin and destination city, preferred travel date and any specific medical requirements." },
  ],
};

/* ============================================================
   ICONS
   ============================================================ */
const PhoneIcon = ({ size = 15, sw = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L7.9 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.8 2.1Z" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ size = 16, sw = 2.2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrainIcon = ({ size = 22, sw = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 16.5V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9.5M4 16.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9 12h6" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = ({ size = 18, sw = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-4-1L3 20l1.1-5A8.4 8.4 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = ({ size = 18, className, style }) => (
  <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const icons = {
  rupee: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 4h12M6 9h12M6 4c4 0 8 1.2 8 5s-4 5-8 5l8 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  monitor: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18v11H3z" stroke="currentColor" strokeWidth="1.6" /><path d="M6 12h3l1.5-3 2 6L14 11l1.5 1.5H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  cross: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  bed: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 18v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6M4 18h16M7 18v2M17 18v2M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  rail: <TrainIcon />,
  route: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" /><circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" /><path d="M8 7.5 16 16.5M15 6h3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  vial: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.7-3l-4.5-8V3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  pin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.6-7-11a7 7 0 0 1 14 0c0 6.4-7 11-7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

/* derives a short railway-style abbreviation (decorative, not an official station code) */
function code(name) {
  const words = name.replace(/[()]/g, "").split(/\s+/);
  if (words.length === 1) return name.slice(0, 4).toUpperCase();
  return words.map((w) => w[0]).join("").slice(0, 4).toUpperCase();
}

const mt16 = { marginTop: "16px" };
const eyebrowOnDark = { background: "rgba(255,255,255,.1)", borderColor: "rgba(255,255,255,.2)", color: "#fff" };
const PHONE_TEL = "tel:+911140000000";
const PHONE_LABEL = "+91 11 4000 0000";

/* ============================================================
   SECTIONS
   ============================================================ */
function Logo({ style }) {
  return (
    <a href="#top" className="logo" style={style}>
      <span className="logo-mark">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 16.5V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9.5M4 16.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9 12h6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span>Humancare<small>Train Ambulance</small></span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container">
          <Logo />
          <nav className="main-nav">
            <a href="#top">Home</a>
            <a href="#services">Train Ambulance</a>
            <a href="#services">Services</a>
            <a href="#intro">About</a>
            <a href="#cities">Locations</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#lead-form">Contact</a>
          </nav>
          <div className="header-ctas">
            <a className="call-chip" href={PHONE_TEL}>
              <PhoneIcon />
              {PHONE_LABEL}
            </a>
            <a className="btn btn-primary btn-sm" href="#lead-form">Request Train Ambulance</a>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-panel${open ? " is-open" : ""}`}>
        <a href="#top" onClick={close}>Home</a>
        <a href="#services" onClick={close}>Train Ambulance</a>
        <a href="#services" onClick={close}>Services</a>
        <a href="#intro" onClick={close}>About</a>
        <a href="#cities" onClick={close}>Locations</a>
        <a href="#testimonials" onClick={close}>Testimonials</a>
        <a href="#lead-form" onClick={close}>Contact</a>
        <div className="header-ctas">
          <a className="call-chip" href={PHONE_TEL} onClick={close}>Call {PHONE_LABEL}</a>
          <a className="btn btn-primary" href="#lead-form" onClick={close}>Request Train Ambulance</a>
        </div>
      </div>
    </>
  );
}

function StateHero({ data }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal in-view">
          <span className="eyebrow eyebrow--onboard">24/7 Medical Transport</span>
          <h1>Train Ambulance Service in <span className="state-name">{data.state}</span></h1>
          <p className="hero-lead">Safe &amp; affordable train ambulance service across {data.state} — 24/7 medically supervised long-distance patient transfers with ICU-level equipment, and trained doctors, nurses and paramedics accompanying every journey.</p>
          <div className="hero-ctas">
            <a href="#lead-form" className="btn btn-primary">
              <TrainIcon size={16} sw={1.8} />
              Request Train Ambulance
            </a>
            <a href={PHONE_TEL} className="btn btn-outline">Call Now: {PHONE_LABEL}</a>
          </div>
          <ul className="hero-trust">
            <li><CheckIcon />24/7 medical coordination</li>
            <li><CheckIcon />ICU-level equipment</li>
            <li><CheckIcon />Bed-to-bed coordination</li>
          </ul>
        </div>

        <div className="hero-visual reveal in-view">
          <div className="rail-scene">
            <svg viewBox="0 0 460 460" preserveAspectRatio="xMidYMid slice">
              <line x1="0" y1="330" x2="460" y2="330" stroke="rgba(255,255,255,.14)" strokeWidth="2" strokeDasharray="2 10" />
              <line x1="0" y1="340" x2="460" y2="340" stroke="rgba(255,255,255,.08)" strokeWidth="2" strokeDasharray="2 10" />
              <circle cx="360" cy="120" r="150" fill="rgba(255,255,255,.05)" />
              <rect x="70" y="200" width="330" height="120" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" />
              <rect x="92" y="222" width="52" height="40" rx="6" fill="rgba(255,255,255,.14)" />
              <rect x="160" y="222" width="52" height="40" rx="6" fill="rgba(255,255,255,.14)" />
              <rect x="228" y="222" width="52" height="40" rx="6" fill="rgba(255,255,255,.14)" />
              <rect x="296" y="222" width="52" height="40" rx="6" fill="rgba(255,255,255,.14)" />
              <circle cx="120" cy="330" r="16" fill="#0A0F2C" stroke="rgba(255,255,255,.3)" strokeWidth="2" />
              <circle cx="350" cy="330" r="16" fill="#0A0F2C" stroke="rgba(255,255,255,.3)" strokeWidth="2" />
              <g transform="translate(210,268)">
                <rect x="-22" y="-6" width="44" height="12" rx="3" fill="#DC3545" />
                <rect x="-6" y="-22" width="12" height="44" rx="3" fill="#DC3545" />
              </g>
              <polyline points="20,80 60,80 74,50 90,110 106,60 122,80 180,80" fill="none" stroke="#0E8A7D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
              <text x="20" y="60" fill="rgba(255,255,255,.55)" fontFamily="IBM Plex Mono" fontSize="11" letterSpacing="1">ICU COACH · ON ROUTE</text>
            </svg>
          </div>
          <div className="float-card float-card--1">
            <span className="ic" style={{ background: "var(--red-fog)", color: "var(--red)" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.35-9.5-8.5C.6 8.9 2.4 5 6.2 5c2 0 3.4 1.1 4.3 2.4C11.4 6.1 12.8 5 14.8 5c3.8 0 5.6 3.9 3.7 7.5C19 16.65 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
            </span>
            24/7 Medical Support
          </div>
          <div className="float-card float-card--2">
            <span className="ic" style={{ background: "var(--teal-fog)", color: "var(--teal)" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </span>
            ICU Equipment Available
          </div>
          <div className="float-card float-card--3">
            <span className="ic" style={{ background: "var(--fog)", color: "var(--navy)" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </span>
            Pan-India Transfers
          </div>
          <div className="float-card float-card--4">
            <span className="ic" style={{ background: "var(--red-fog)", color: "var(--red)" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 18v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6M4 18h16M7 18v2M17 18v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </span>
            Bed-to-Bed Assistance
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStats() {
  return (
    <div className="trust-bar">
      <div className="container">
        <ul>
          <li><div className="stat">24/7</div><div className="label">Emergency coordination</div></li>
          <li><div className="stat">ICU</div><div className="label">Medical setup available</div></li>
          <li><div className="stat">MD/RN</div><div className="label">Doctors &amp; nurses onboard</div></li>
          <li><div className="stat">Pan-India</div><div className="label">Rail network coverage</div></li>
          <li><div className="stat">Bed–Bed</div><div className="label">Transfer support</div></li>
        </ul>
      </div>
    </div>
  );
}

function StateIntroduction({ data }) {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro">
          <div className="reveal">
            <span className="eyebrow">About the service</span>
            <h2 style={mt16}>Train Ambulance Services in {data.state}</h2>
            <p style={{ marginTop: "18px" }}>{data.state}'s patients frequently need to travel long distances for specialised treatment — from district towns to Mumbai and Pune, or onward to hospitals in Delhi, Chennai, Bangalore and Kolkata. For stable and semi-critical patients, a train ambulance is often a more practical and cost-effective way to cover that distance than road or air.</p>
            <p>A Humancare train ambulance combines a reserved railway coach or coupe with ICU-level equipment and a medical team suited to the patient's condition, so monitoring continues without interruption for the entire journey — including inter-state transfers and the return home after treatment.</p>
          </div>
          <div className="intro-card reveal">
            <h3>Built around continuous care</h3>
            <ul className="intro-list">
              {[
                "Long-distance transfer for stable and semi-critical patients",
                "A more affordable alternative to air ambulance where suitable",
                "Continuous supervision with ICU-level equipment onboard",
                "Railway coordination handled on the family's behalf",
                "Hospital-to-hospital and inter-state transfer coordination",
                "Return-home transfers once treatment is complete",
              ].map((t) => (
                <li key={t}><CheckIcon size={15} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyTrainAmbulance({ data }) {
  return (
    <section className="section--tinted">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Why train ambulance</span>
          <h2 style={mt16}>Why Choose Train Ambulance Services in {data.state}?</h2>
          <p>A practical option for long-distance transfers where road travel is impractical and air transfer isn't clinically necessary.</p>
        </div>
        <div className="grid-3">
          {data.whyChoose.map((item) => (
            <div className="feature-card reveal" key={item.title}>
              <div className="ic">{icons[item.icon]}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ data }) {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What we coordinate</span>
          <h2 style={mt16}>Our Train Ambulance Services in {data.state}</h2>
          <p>Every transfer is planned around the patient's medical condition, not a fixed package.</p>
        </div>
        <div className="grid-3">
          {data.services.map((s) => (
            <div className="service-card reveal" key={s.title}>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ICUEquipment({ data }) {
  return (
    <section className="section--navy">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow" style={eyebrowOnDark}>Onboard capability</span>
          <h2 style={mt16}>ICU Care That Travels With You</h2>
          <p>Equipment is selected to match the patient's assessed condition — not every journey needs every item below.</p>
        </div>
        <div className="grid-4">
          {data.equipment.map((e) => (
            <div className="equip-card reveal" key={e.title}>
              <div className="ic">{icons.vial}</div>
              <h3>{e.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MedicalTeam({ data }) {
  return (
    <section>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Onboard team</span>
          <h2 style={mt16}>Experienced Medical Team Onboard</h2>
          <p>The team is selected according to the patient's condition and the level of care required — medical supervision continues throughout the journey.</p>
        </div>
        <div className="team-grid">
          {data.team.map((t) => (
            <div className="team-card reveal" key={t.role}>
              <div className="avatar">{icons.shield}</div>
              <div className="body">
                <h3>{t.role.split(" / ")[0]}</h3>
                <div className="role">{t.role}</div>
                <p>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ data }) {
  return (
    <section className="section--tinted">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">The process</span>
          <h2 style={mt16}>How Train Ambulance Booking Works</h2>
          <p>Seven checkpoints, one continuous line of medical responsibility from pickup to handover.</p>
        </div>
        <div className="rail-line">
          <div className="rail-steps">
            {data.process.map((p) => (
              <div className="rail-step reveal" key={p.code}>
                <div className="node">{p.code}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BedToBedJourney({ data }) {
  return (
    <section id="bed-to-bed">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">End-to-end coordination</span>
          <h2 style={mt16}>Bed-to-Bed Transfer Journey</h2>
          <p>From the patient's starting bed to the receiving bed, every leg is coordinated as one continuous transfer.</p>
        </div>
        <div className="journey">
          {data.journey.map((j, i) => (
            <div className={`journey-step reveal${j.transit ? " is-transit" : ""}`} key={i}>
              <div className="node">{j.transit ? icons.rail : icons.pin}</div>
              <div><h3>{j.title}</h3><p>{j.body}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StateCityCoverage({ data }) {
  return (
    <section className="section--tinted" id="cities">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Coverage across the state</span>
          <h2 style={mt16}>Train Ambulance Service Across {data.state}</h2>
          <p>Coordination is available from these major {data.state} cities and their nearest railway stations.</p>
        </div>
        <div className="city-list">
          {data.cities.map((c) => (
            <a href="#lead-form" className="city-card reveal" key={c}>
              <div><div className="name">Train Ambulance in {c}</div><div className="sub">{data.state}</div></div>
              <span className="code">{code(c)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularRoutes({ data }) {
  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">High-demand corridors</span>
          <h2 style={mt16}>Popular Train Ambulance Routes From {data.state}</h2>
          <p>These are among the most frequently coordinated long-distance corridors from the state.</p>
        </div>
        <div className="route-list">
          {data.routes.map(([from, to]) => (
            <div className="route-card reveal" key={from + to}>
              <span className="code">{code(from)}</span>
              <span className="pt">{from}</span>
              <ArrowIcon className="arrow" />
              <span className="pt">{to}</span>
              <span className="code">{code(to)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainAmbulanceCost({ data }) {
  const factors = [
    "Distance & route",
    "Patient's medical condition",
    "Medical equipment required",
    "ICU-level requirements",
    "Medical staff required",
    "Coach / berth requirements",
    "Ground ambulance needs",
    "Journey duration",
  ];
  return (
    <section className="section--tinted" id="cost">
      <div className="container cost-wrap">
        <div className="reveal">
          <span className="eyebrow">Pricing</span>
          <h2 style={mt16}>Train Ambulance Cost in {data.state}</h2>
          <p style={{ color: "var(--slate)", marginTop: "12px" }}>There is no single fixed price — every transfer is quoted individually once the patient's condition and route are known. Cost depends on:</p>
          <div className="cost-factors">
            {factors.map((f) => (
              <div className="cost-factor" key={f}><CheckIcon />{f}</div>
            ))}
          </div>
        </div>
        <div className="cost-card reveal">
          <span className="eyebrow">Get a personalised estimate</span>
          <h3 style={{ marginTop: "14px" }}>Tell us the route and condition — we'll call back with a clear cost breakdown.</h3>
          <div className="price-note">No fixed listed price · quote confirmed after medical assessment</div>
          <a href="#lead-form" className="btn btn-primary" style={{ width: "100%" }}>Check Train Ambulance Cost</a>
        </div>
      </div>
    </section>
  );
}

function TrainVsAirVsRoad() {
  return (
    <section>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Choosing the right mode</span>
          <h2 style={mt16}>Train Ambulance vs Air Ambulance vs Road Ambulance</h2>
          <p>The right mode of transport depends on the patient's medical condition and urgency — not on which option sounds most advanced.</p>
        </div>
        <div className="compare-scroll reveal">
          <table className="compare">
            <thead>
              <tr><th>Factor</th><th>Train Ambulance</th><th>Air Ambulance</th><th>Road Ambulance</th></tr>
            </thead>
            <tbody>
              <tr><td>Long-distance travel</td><td className="hl">Excellent</td><td className="hl">Excellent</td><td>Limited</td></tr>
              <tr><td>Cost</td><td className="hl">More affordable</td><td>High</td><td>Variable</td></tr>
              <tr><td>Medical supervision</td><td>Available</td><td>Available</td><td>Available</td></tr>
              <tr><td>ICU setup</td><td>Available</td><td>Available</td><td>Available</td></tr>
              <tr><td>Travel duration</td><td>Longer</td><td className="hl">Fastest</td><td>Depends on road</td></tr>
              <tr><td>Best suited for</td><td>Stable / semi-critical, long distance</td><td>Time-critical cases</td><td>Short / medium distance</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SuitablePatients({ data }) {
  return (
    <section className="section--tinted">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Suitability</span>
          <h2 style={mt16}>Who Can Use a Train Ambulance?</h2>
        </div>
        <div className="suit-grid">
          {data.suitable.map((s) => (
            <div className="suit-item reveal" key={s}><CheckIcon />{<span>{s}</span>}</div>
          ))}
        </div>
        <div className="disclaimer reveal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span>Suitability for train transportation depends on the patient's medical condition. Our medical team evaluates each case before confirming the transfer.</span>
        </div>
      </div>
    </section>
  );
}

function PatientSafety({ data }) {
  return (
    <section>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Safety first</span>
          <h2 style={mt16}>Patient Safety Comes First</h2>
        </div>
        <div className="safety-grid">
          {data.safety.map((s) => (
            <div className="feature-card reveal" key={s.title}>
              <div className="ic">{icons.shield}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmergencyCTA({ data }) {
  return (
    <section>
      <div className="container">
        <div className="emergency-cta reveal">
          <div className="inner">
            <div>
              <h2>Need a Train Ambulance in {data.state}?</h2>
              <p>Speak with our medical coordination team for 24/7 assistance.</p>
            </div>
            <div className="ctas">
              <a href={PHONE_TEL} className="btn btn-primary">
                <PhoneIcon size={16} />
                Call Now
              </a>
              <a href="https://wa.me/911140000000" className="btn btn-outline-white">WhatsApp Us</a>
              <a href="#lead-form" className="btn btn-outline-white">Request Train Ambulance</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ data }) {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Patient families</span>
          <h2 style={mt16}>Families Who Trusted Humancare</h2>
          <p>Sample content — replace with verified, sourced testimonials before this page goes live.</p>
        </div>
        <div className="tm-grid">
          {data.testimonials.map((t, i) => (
            <div className="tm-card reveal" key={i}>
              <div className="quote-mark">&ldquo;</div>
              <p className="quote">{t.quote}</p>
              <div className="who">
                <div className="avatar-sm">{t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</div>
                <div><div className="name">{t.name}</div><div className="place">{t.place}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies({ data }) {
  return (
    <section className="section--tinted">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Recent journeys</span>
          <h2 style={mt16}>Recent Train Ambulance Journeys</h2>
          <p>Sample format — replace with verified, consented case details before publishing.</p>
        </div>
        <div className="case-grid">
          {data.cases.map((c) => (
            <div className="case-card reveal" key={c.from + c.to}>
              <div className="case-route">{c.from} <ArrowIcon size={16} style={{ color: "var(--red)" }} /> {c.to}</div>
              <div className="case-meta"><span className="code">{code(c.from)} → {code(c.to)}</span></div>
              <p>{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HealthcareNetwork() {
  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Coordination network</span>
          <h2 style={mt16}>Trusted Healthcare Network</h2>
          <p style={{ color: "var(--slate)", maxWidth: "640px" }}>Humancare coordinates medical transfers with hospitals and healthcare teams across India. Named hospital partnerships and affiliations will be listed here once formally confirmed and verified.</p>
        </div>
        <div className="network-strip">
          <span className="network-chip">Mumbai coordination desk</span>
          <span className="network-chip">Pune coordination desk</span>
          <span className="network-chip">Nagpur coordination desk</span>
          <span className="network-chip">Pan-India rail network</span>
          <span className="network-chip">24/7 dispatch team</span>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  const ref = useRef(null);
  return (
    <div className={`faq-item reveal${isOpen ? " is-open" : ""}`}>
      <button className="faq-q" aria-expanded={isOpen} onClick={onToggle}>
        <span>{item.q}</span>
        <span className="plus">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
        </span>
      </button>
      <div className="faq-a" ref={ref} style={{ maxHeight: isOpen && ref.current ? ref.current.scrollHeight + "px" : undefined }}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

function FAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="section--tinted" id="faq">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Common questions</span>
          <h2 style={mt16}>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {data.faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              item={f}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data to your backend / CRM here
    setSubmitted(true);
  };

  return (
    <section id="lead-form">
      <div className="container">
        <div className="lead-wrap reveal">
          <div className="lead-info">
            <div>
              <span className="eyebrow" style={eyebrowOnDark}>Available 24/7</span>
              <h2 style={mt16}>Request a Train Ambulance</h2>
              <p>Share the patient's route and condition — our medical coordination team will call back with next steps and a cost estimate.</p>
              <ul className="points">
                <li><CheckIcon />Medical team reviews your case before confirming</li>
                <li><CheckIcon />Railway coordination handled on your behalf</li>
                <li><CheckIcon />Your information is used only to coordinate this transfer</li>
              </ul>
            </div>
            <div
              className="call-chip"
              style={{ width: "fit-content", marginTop: "30px", background: "rgba(255,255,255,.08)", borderColor: "rgba(255,255,255,.22)", color: "#fff" }}
            >
              <PhoneIcon />
              {PHONE_LABEL}
            </div>
          </div>
          <div className="lead-form">
            {!submitted ? (
              <form onSubmit={onSubmit}>
                <div className="f-row">
                  <div className="f-field"><label htmlFor="fName">Full name</label><input id="fName" name="name" type="text" required placeholder="Your name" /></div>
                  <div className="f-field"><label htmlFor="fPhone">Phone number</label><input id="fPhone" name="phone" type="tel" required placeholder="+91" /></div>
                </div>
                <div className="f-row">
                  <div className="f-field"><label htmlFor="fEmail">Email</label><input id="fEmail" name="email" type="email" placeholder="you@example.com" /></div>
                  <div className="f-field"><label htmlFor="fCity">Current city</label><input id="fCity" name="city" type="text" required placeholder="e.g. Pune" /></div>
                </div>
                <div className="f-row">
                  <div className="f-field"><label htmlFor="fDest">Destination city</label><input id="fDest" name="destination" type="text" required placeholder="e.g. Delhi" /></div>
                  <div className="f-field"><label htmlFor="fDate">Preferred travel date</label><input id="fDate" name="date" type="date" /></div>
                </div>
                <div className="f-row">
                  <div className="f-field">
                    <label htmlFor="fCondition">Patient condition</label>
                    <select id="fCondition" name="condition">
                      <option>Stable</option><option>Semi-critical</option><option>Bedridden</option>
                      <option>Requires oxygen support</option><option>Ventilator-dependent</option><option>Not sure — need assessment</option>
                    </select>
                  </div>
                  <div className="f-field">
                    <label htmlFor="fSupport">Medical support required</label>
                    <select id="fSupport" name="support">
                      <option>Doctor + nurse</option><option>Nurse only</option><option>Paramedic</option><option>Not sure — please advise</option>
                    </select>
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-field full"><label htmlFor="fMsg">Message</label><textarea id="fMsg" name="message" rows="3" placeholder="Any additional details about the transfer"></textarea></div>
                </div>
                <button type="submit" className="btn btn-primary">Request Medical Assistance</button>
                <p className="lead-note">Available 24/7 · Your information is used only to coordinate your medical transfer.</p>
              </form>
            ) : (
              <div className="form-success is-visible">
                <div className="ic">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3>Request received</h3>
                <p style={{ color: "var(--slate)", marginTop: "8px" }}>Our medical coordination team will call you shortly. For anything urgent, please call {PHONE_LABEL} directly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileCTA() {
  return (
    <div className="mobile-cta-bar">
      <a href={PHONE_TEL}>
        <PhoneIcon size={18} sw={1.9} />
        Call Now
      </a>
      <a href="https://wa.me/911140000000">
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a href="#lead-form" className="primary">
        <TrainIcon size={18} sw={1.8} />
        Request Ambulance
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Logo style={{ color: "#fff", marginBottom: "16px", display: "inline-flex" }} />
            <p>24/7 medically supervised train ambulance service across India — ICU-level equipment, trained doctors, nurses and paramedics, and complete bed-to-bed coordination.</p>
          </div>
          <div>
            <h4>Train Ambulance</h4>
            <ul>
              <li><a href="#services">ICU Train Ambulance</a></li>
              <li><a href="#services">Ventilator Patient Transfer</a></li>
              <li><a href="#services">Bedridden Patient Transfer</a></li>
              <li><a href="#services">Inter-State Transfer</a></li>
            </ul>
          </div>
          <div>
            <h4>Medical Services</h4>
            <ul>
              <li><a href="#equipment">ICU Equipment</a></li>
              <li><a href="#testimonials">Medical Team</a></li>
              <li><a href="#cost">Train Ambulance Cost</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4>Popular Locations</h4>
            <ul>
              <li><a href="#cities">Train Ambulance in Mumbai</a></li>
              <li><a href="#cities">Train Ambulance in Pune</a></li>
              <li><a href="#cities">Train Ambulance in Nagpur</a></li>
              <li><a href="#cities">All Maharashtra Cities</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><PhoneIcon sw={1.6} /><span>{PHONE_LABEL}</span></li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="m3 7 9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                <span>care@humancaretrainambulance.com</span>
              </li>
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.6-7-11a7 7 0 0 1 14 0c0 6.4-7 11-7 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" /></svg>
                <span>Pan-India coordination desks</span>
              </li>
              <li><WhatsAppIcon size={15} sw={1.6} /><span>WhatsApp: {PHONE_LABEL}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Humancare Train Ambulance. All rights reserved.</span>
          <div className="legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function StateTrainAmbulancePage({ data = maharashtraData }) {
  const rootRef = useRef(null);

  // scroll-reveal
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    root.querySelectorAll(".reveal").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [data]);

  // SEO title / description
  useEffect(() => {
    document.title = `Train Ambulance Service in ${data.state} | Humancare Train Ambulance`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = `24/7 medically supervised train ambulance service across ${data.state} with ICU-level equipment, doctors, nurses and paramedics for safe long-distance patient transfers.`;
  }, [data]);

  return (
    <div ref={rootRef}>
      <Header />
      <main id="top">
        <StateHero data={data} />
        <TrustStats />
        <StateIntroduction data={data} />
        <WhyTrainAmbulance data={data} />
        <ServicesGrid data={data} />
        <ICUEquipment data={data} />
        <MedicalTeam data={data} />
        <HowItWorks data={data} />
        <BedToBedJourney data={data} />
        <StateCityCoverage data={data} />
        <PopularRoutes data={data} />
        <TrainAmbulanceCost data={data} />
        <TrainVsAirVsRoad />
        <SuitablePatients data={data} />
        <PatientSafety data={data} />
        <EmergencyCTA data={data} />
        <Testimonials data={data} />
        <CaseStudies data={data} />
        <HealthcareNetwork />
        <FAQ data={data} />
        <LeadForm />
      </main>
      <MobileCTA />
      <Footer />
    </div>
  );
}
