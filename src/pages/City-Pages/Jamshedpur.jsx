/**
 * Jamshedpur.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Jamshedpur.
 * Styles live in the sibling stylesheet ./TrainAmbulanceVaranasi.css.
 * -------------------------------------------------------------------------
 */

import React, { useState } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from "../../assets/City/Delhi/medical-transport-team-with-patient-stretcher-at-delhi-railway-station.webp";
import train2 from "../../assets/City/Delhi/train-ambulance-cost-estimate.webp";
import HeroBanner from "../../assets/City/Delhi/train-ambulance-service-in-delhi.jpg";
import train4 from "../../assets/City/Delhi/icu-equipt-train-ambulance.webp";

/* =========================================================================
   CONTACT CONSTANTS
   ========================================================================= */
const CONTACT = {
  brand: "Humancare Train Ambulance",
  phoneDisplay: "+919833997373",
  phoneHref: "tel:+919833997373",
  waDisplay: "+919833997373",
  waHref: "https://wa.me/919833997373",
  email: "ops@humancareworldwide.com",
  domain: "https://www.humancaretrainambulance.com",
  pageUrl:
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-jamshedpur",
};

/* =========================================================================
   REUSABLE INLINE ICONS
   ========================================================================= */
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconWhatsAppGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C9.4 8.6 9 7.6 8.8 7.2c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2 3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

const IconBill = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M8 2v4M16 2v4M3 10h18" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21c-4.4-2.7-8-6.4-8-11a8 8 0 0 1 16 0c0 4.6-3.6 8.3-8 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
  </svg>
);

/* =========================================================================
   DATA
   ========================================================================= */
const ABOUT_POINTS = [
  "Single-point coordination from Jamshedpur to the destination hospital",
  "Medical equipment and trained medical staff based on patient requirements",
  "Suitable for long-distance transfers to specialized hospitals",
  "Road ambulance connectivity for pickup and destination transfer",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Qualified Medical Escort",
    text: "A trained doctor and nurse can accompany the patient throughout the journey, providing medical supervision, monitoring vital signs, and responding to changing medical requirements during the transfer from Jamshedpur.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Transfer Assistance",
    text: "Our coordination team remains available around the clock to help arrange a Train Ambulance from Jamshedpur, including urgent transfers, medical requirements, railway coordination, and related arrangements.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "End-to-End Bed-to-Bed Transfer",
    text: "Road ambulance support can be arranged at both ends of the journey, connecting the patient's hospital or residence in Jamshedpur with the railway station and the receiving hospital at the destination.",
  },
  {
    tone: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Transparent Journey Pricing",
    text: "Families receive a detailed quotation before confirming the transfer. Train Ambulance Cost in Jamshedpur depends on factors such as travel distance, medical requirements, equipment, berth type, medical escort, and ambulance support.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Timely Family Updates",
    text: "Families can receive regular updates regarding the patient's journey and transfer progress, helping them stay informed while the patient is travelling to the destination hospital.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Support for Different Patient Conditions",
    text: "Our medical teams can assist with different levels of patient care, from stable patients requiring assisted transportation to patients needing critical-care equipment and continuous medical supervision during a Rail Ambulance journey from Jamshedpur.",
  },
];

const EQUIPMENT = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h4l2-7 4 14 2-7h4" />
      </svg>
    ),
    title: "Portable Ventilator",
    text: "Provides respiratory support for patients who require invasive or non-invasive ventilation during the railway journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Multi-Parameter Monitor",
    text: "Allows continuous monitoring of important parameters such as ECG, SpO₂, blood pressure, and pulse rate throughout the transfer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Defibrillator",
    text: "Emergency cardiac equipment available on board for immediate response when required during the patient's medical transfer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "Infusion & Syringe Pumps",
    text: "Used for controlled and accurate administration of prescribed fluids and medications throughout the journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Oxygen Cylinders + Backup",
    text: "Oxygen support with reserve cylinders can be arranged according to the patient's medical requirements and expected travel duration.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Suction Unit & Airway Kit",
    text: "Supports airway management and helps the medical team handle respiratory secretions or related emergencies during transit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
    title: "Emergency Medical Kit",
    text: "Includes essential medicines, cardiac supplies, and other emergency-care items required by the accompanying medical team.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="18" height="6" rx="1" />
        <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "Stretcher & Spine Board",
    text: "Used to support safe patient movement, boarding, immobilisation, and transfers between road ambulances, railway facilities, and the Train Ambulance in Jamshedpur.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "Can be assigned to patients requiring advanced medical supervision, including critical-care monitoring, ventilator support, and medical management during transit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        <path d="M9 8h6" />
      </svg>
    ),
    title: "Critical-Care Nurse",
    text: "Provides bedside care, administers prescribed medication, monitors the patient's condition, and assists with ongoing medical requirements throughout the journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Trained Ambulance Attendants",
    text: "Assist with stretcher handling and patient movement between the hospital, road ambulance, railway station, and receiving facility.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "24×7 Coordination Desk",
    text: "Coordinates the Train Ambulance from Jamshedpur, manages travel arrangements, tracks the transfer, and communicates with the family and receiving hospital when required.",
  },
];

const PATIENTS = [
  "Post-cardiac event / cardiac patients",
  "Ventilator-dependent patients",
  "Post-surgical / post-operative transfers",
  "Stroke & neurological cases",
  "Cancer / oncology patients",
  "Orthopaedic & trauma patients",
  "Dialysis / renal patients",
  "Elderly & bedridden patients",
  "Stable discharge transfers home",
  "High-risk pregnancy referrals",
  "Organ transplant follow-up transfers",
  "Mortal remains / deceased transport",
];

const ROUTES = [
  [
    "Jamshedpur to Delhi Train Ambulance",
    "A long-distance medical transfer option for patients travelling from Jamshedpur to Delhi for advanced treatment, specialist consultation, or continued hospital care.",
  ],
  [
    "Jamshedpur to Mumbai Train Ambulance",
    "Suitable for patients requiring medically supervised transportation from Jamshedpur to Mumbai for specialized treatment and advanced healthcare services.",
  ],
  [
    "Jamshedpur to Kolkata Train Ambulance",
    "A practical route for patients travelling to Kolkata for specialist care, procedures, consultations, or continued treatment, with medical and road ambulance coordination as required.",
  ],
  [
    "Jamshedpur to Hyderabad Train Ambulance",
    "Arranged for patients travelling to Hyderabad for specialized treatment, including advanced procedures, oncology care, cardiac treatment, and other medical services.",
  ],
  [
    "Jamshedpur to Bangalore Train Ambulance",
    "An option for patients who need to travel to Bengaluru for specialized treatment, rehabilitation, specialist consultation, or continued medical care.",
  ],
  [
    "Jamshedpur to Chennai Train Ambulance",
    "Provides medically supported long-distance transportation for patients travelling from Jamshedpur to Chennai for specialized and tertiary-level treatment.",
  ],
  [
    "Jamshedpur to Lucknow Train Ambulance",
    "Can be arranged for patients from Jamshedpur who require medical treatment, specialist consultation, or continued care in Lucknow.",
  ],
  [
    "Jamshedpur to Patna Train Ambulance",
    "Suitable for patients requiring assisted medical transportation from Jamshedpur to Patna, with arrangements planned around the patient's health and mobility needs.",
  ],
  [
    "Jamshedpur to Pune Train Ambulance",
    "Coordinated for patients travelling from Jamshedpur to Pune for specialized treatment, follow-up care, rehabilitation, or specialist consultation.",
  ],
  [
    "Jamshedpur to Jaipur Train Ambulance",
    "Arranged for patients who need medically supported transportation from Jamshedpur to Jaipur for specialized treatment or continued medical care.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Share the patient's medical condition, current hospital or location in Jamshedpur, and destination city with our coordination team.",
  ],
  [
    "2. Receive a Transfer Plan & Quote",
    "Our team reviews the patient's medical requirements, suitable train and berth options, required medical support, and estimated transportation cost.",
  ],
  [
    "3. Confirm & Prepare",
    "After confirmation, we coordinate the required medical documents, railway arrangements, ambulance pickup, medical equipment, and other preparations for the journey.",
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "Our team coordinates movement from the patient's hospital or residence in Jamshedpur to the railway station and onward from the destination station to the receiving hospital, with appropriate medical support throughout the transfer.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance & Destination City",
    "Longer journeys from Jamshedpur generally require more transportation resources and may cost more than shorter transfers to nearby destinations.",
  ],
  [
    "02",
    "Train Class & Berth Type",
    "The selected train class, berth arrangement, space required for equipment, and privacy requirements can influence the overall Train Ambulance Price in Jamshedpur.",
  ],
  [
    "03",
    "Medical Escort Required",
    "Transfers requiring a critical-care doctor and nurse are priced differently from journeys where a stable patient requires a lower level of medical supervision.",
  ],
  [
    "04",
    "Medical Equipment & Consumables",
    "Ventilator support, oxygen requirements, monitoring equipment, medicines, and other medical consumables can contribute to the final transfer cost.",
  ],
  [
    "05",
    "Road Ambulance at Both Ends",
    "The distance between the patient's location and railway station in Jamshedpur, along with the destination station-to-hospital transfer, can affect the final quotation.",
  ],
];

const COMPARE_ROWS = [
  [
    "Typical Cost",
    ["kl-yes", "Significantly lower"],
    ["kl-no", "Considerably higher"],
  ],
  [
    "Best For",
    [null, "Medically stable / semi-critical, longer transfer window"],
    [null, "Extremely time-critical, unstable patients"],
  ],
  [
    "Travel Time (long distance)",
    [null, "Longer (hours, overnight for far cities)"],
    [null, "Much shorter"],
  ],
  ["ICU Equipment On Board", ["kl-yes", "Yes"], ["kl-yes", "Yes"]],
  ["Doctor / Nurse Escort", ["kl-yes", "Yes"], ["kl-yes", "Yes"]],
  [
    "Bedside-to-Bedside Service",
    ["kl-yes", "Yes (with road ambulance both ends)"],
    ["kl-yes", "Yes (with road ambulance both ends)"],
  ],
  [
    "Weather Dependency",
    ["kl-yes", "Minimal"],
    ["kl-no", "Can be affected by weather/airport slots"],
  ],
  [
    "Comfort for Long Duration",
    [null, "Space for family attendant, more room to move"],
    [null, "Compact cabin, limited space"],
  ],
  [
    "Booking Lead Time",
    [null, "Few hours, subject to seat availability"],
    [null, "Can be arranged fast but at premium cost"],
  ],
];

const AREAS = [
  "Jamshedpur",
  "Sakchi",
  "Bistupur",
  "Mango",
  "Sonari",
  "Kadma",
  "Telco",
  "Adityapur",
  "Golmuri",
  "Jugsalai",
  "Tatanagar",
  "Parsudih",
  "Govindpur",
  "Gamharia",
  "Chakradharpur",
  "Chaibasa",
  "Seraikela",
  "Ghatsila",
  "Musabani",
  "Ghatshila",
];

const FAQS = [
  [
    "1. What is a Train Ambulance Service in Jamshedpur?",
    "A Train Ambulance Service in Jamshedpur provides medically supported railway transportation for patients who need to travel to another city for treatment while receiving appropriate medical assistance during the journey.",
  ],
  [
    "2. How can I book a Train Ambulance from Jamshedpur?",
    "You can contact Humancare by phone or WhatsApp and share the patient's medical condition, current location, destination city, and treatment requirements. Our team will coordinate the appropriate transfer arrangements.",
  ],
  [
    "3. Which cities can I travel to by Train Ambulance from Jamshedpur?",
    "Train Ambulance transfers can be arranged from Jamshedpur to cities such as Delhi, Mumbai, Kolkata, Chennai, Hyderabad, Bengaluru, Pune, Jaipur, Lucknow, Patna, and other destinations depending on railway connectivity and availability.",
  ],
  [
    "4. Can a critical or ventilator-dependent patient travel by Train Ambulance from Jamshedpur?",
    "Patients requiring critical care may be transported by Train Ambulance when the transfer is medically suitable. Ventilator support, oxygen, monitoring equipment, and trained medical professionals can be arranged according to the patient's condition.",
  ],
  [
    "5. Is a doctor or nurse available during the Train Ambulance journey?",
    "Medical escorts can be assigned according to the patient's medical requirements. Depending on the case, the team may include a critical-care doctor, nurse, or trained medical personnel.",
  ],
  [
    "6. How much does a Train Ambulance from Jamshedpur cost?",
    "The Train Ambulance Cost in Jamshedpur varies according to the destination, train and berth type, patient's medical condition, medical escort, equipment, oxygen requirements, and road ambulance services. A customized quotation is provided after assessing the patient's requirements.",
  ],
  [
    "7. Does the Train Ambulance service include road ambulance support?",
    "Yes, road ambulance connectivity can be arranged at both ends of the journey. This can include pickup from the patient's hospital or residence in Jamshedpur, transfer to the railway station, and transportation from the destination station to the receiving hospital.",
  ],
  [
    "8. Can Humancare arrange a complete bed-to-bed transfer from Jamshedpur?",
    "Yes. Humancare can coordinate the patient's transfer from the hospital or residence in Jamshedpur to the railway station, provide medical support during the train journey, and arrange onward ambulance transportation to the destination hospital.",
  ],
];

/* =========================================================================
   STRUCTURED DATA (JSON-LD)
   ========================================================================= */
const SCHEMA_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${CONTACT.domain}/#business`,
  name: CONTACT.brand,
  alternateName: "Humancare Train Ambulance Service Jamshedpur",
  description:
    "Book train ambulance service in Jamshedpur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-jamshedpur.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tatanagar Junction Railway Station Area, Khasmahal",
    addressLocality: "Jamshedpur",
    addressRegion: "Jharkhand",
    postalCode: "831002",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.8046, longitude: 86.2029 },
  areaServed: [
    { "@type": "City", name: "Jamshedpur" },
    { "@type": "AdministrativeArea", name: "Jharkhand" },
    { "@type": "Country", name: "India" },
  ],
  medicalSpecialty: "Emergency Medical Transport",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

const SCHEMA_ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${CONTACT.domain}/#organization`,
  name: CONTACT.brand,
  url: CONTACT.domain,
  logo: `${CONTACT.domain}/images/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneDisplay,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Jamshedpur",
  description:
    "Train Ambulance in Jamshedpur — Critical Care Support for Long-Distance Patient Transfers.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Train Ambulance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ICU Train Ambulance (Ventilator Support)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Non-ICU Train Ambulance (Stable Patients)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bedside-to-Bedside Patient Transfer",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deceased / Mortal Remains Transport",
        },
      },
    ],
  },
};

const SCHEMA_BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${CONTACT.domain}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Jamshedpur",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Jamshedpur",
      item: CONTACT.pageUrl,
    },
  ],
};

const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const SCHEMA_MEDPAGE = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  url: CONTACT.pageUrl,
  lastReviewed: "2026-08-01",
  reviewedBy: {
    "@type": "Physician",
    name: "Medical Advisory Lead",
    medicalSpecialty: "https://schema.org/Emergency",
    description: "Medical Advisory Lead, Humancare Train Ambulance",
  },
  about: { "@id": `${CONTACT.domain}/#business` },
};

const FAVICON = "/logo.webp";

/* =========================================================================
   SEO HEAD
   ========================================================================= */
function SeoHead() {
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-jamshedpur.jpg`;
  return (
    <>
      <title>
        Train Ambulance Service in Jamshedpur | Medical Rail Ambulance
      </title>
      <meta
        name="description"
        content="Book train ambulance service in Jamshedpur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in jamshedpur, train ambulance in jamshedpur, rail ambulance jamshedpur, patient transfer jamshedpur, ICU train ambulance jamshedpur, jamshedpur to delhi train ambulance, jamshedpur to kolkata train ambulance, tatanagar train ambulance"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-JH" />
      <meta name="geo.placename" content="Jamshedpur" />
      <meta name="geo.position" content="22.8046;86.2029" />
      <meta name="ICBM" content="22.8046, 86.2029" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Jamshedpur | Medical Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book train ambulance service in Jamshedpur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Jamshedpur - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Jamshedpur | Medical Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book train ambulance service in Jamshedpur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Jamshedpur - Humancare Train Ambulance"
      />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
        rel="stylesheet"
      />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BUSINESS) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_MEDPAGE) }}
      />
    </>
  );
}

/* =========================================================================
   PAGE COMPONENT
   ========================================================================= */
function Jamshedpur() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <SeoHead />

      <div className="kl-pad-bottom-sticky">
        <main id="top">
          {/* ============ HERO ============ */}
          <section className="kl-hero">
            <div className="kl-container">
              <nav aria-label="Breadcrumb" className="kl-visually-hidden">
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href={CONTACT.pageUrl}>Jamshedpur</a>
                  </li>
                  <li aria-current="page">
                    Train Ambulance Service in Jamshedpur
                  </li>
                </ol>
              </nav>
              <div className="kl-hero-grid">
                <div>
                  <div className="kl-hero-badges">
                    {[
                      "24x7 Available",
                      "Doctor & Nurse On Board",
                      "Pan-India Coverage",
                    ].map((b) => (
                      <span className="kl-hero-badge" key={b}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                        </svg>{" "}
                        {b}
                      </span>
                    ))}
                  </div>
                  <h1>
                    Train Ambulance in Jamshedpur — Critical Care Support for
                    Long-Distance Patient Transfers
                  </h1>
                  <p className="kl-hero-sub">
                    Humancare Train Ambulance in Jamshedpur ensures medically
                    supported patient transport for patients who require moving
                    to a different city for follow-up therapy or advanced
                    medical care. Train ambulance can be availed from us for
                    either critical or less severe patients, and equipment and
                    medical support will be arranged as the individual patient's
                    medical needs. If necessary, a transfer includes ICU-level
                    equipment, provision of oxygen, cardiac monitoring, and
                    presence of qualified medical staff. From railway logistics
                    and ambulance dispatch up to destination hospital
                    coordination, it's all covered by Humancare when they
                    arrange your complete bed-transfer service in Jamshedpur.
                  </p>
                  <div className="kl-hero-cta-row">
                    <a
                      href={CONTACT.phoneHref}
                      className="kl-btn kl-btn-accent"
                    >
                      <IconPhone /> Call the 24x7 Helpline
                    </a>
                    <a
                      href={CONTACT.waHref}
                      className="kl-btn kl-btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconWhatsAppGlyph /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="kl-hero-visual">
                  <div className="kl-img-slot">
                    <img
                      src={HeroBanner}
                      alt="Train Ambulance in Jamshedpur — Critical Care Support for Long-Distance Patient Transfers"
                      loading="eager"
                      width="640"
                      height="480"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="kl-hero-rail" aria-hidden="true"></div>
          </section>

          {/* ============ ABOUT ============ */}
          <section className="kl-section" id="about">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">
                    WHAT IS A TRAIN AMBULANCE SERVICE IN JAMSHEDPUR
                  </span>
                  <h2>
                    What Is a Train Ambulance Service in Jamshedpur, and Who Is
                    It For?
                  </h2>
                  <p>
                    Jamshedpur is an important healthcare hub in the state of
                    Jharkhand, but there may be instances when some of the
                    patients are to be sent out of Jamshedpur for the required
                    specialized treatment, advanced equipment and medical
                    expertise. For such patients a Train Ambulance from
                    Jamshedpur which can take the patient under medical
                    supervision, acts as a possible option besides road
                    journeys.
                  </p>
                  <p>
                    A Train Ambulance provides a comfortable journey of the sick
                    on the rails with proper medical facilities being available
                    during the entire travel. The facilities may depend upon the
                    health status of the patient and may include provision of
                    medical berth, oxygen supplementation, monitoring devices
                    and a staff of trained healthcare professionals. Humancare
                    arranges the transportation needs of the hospitals at the
                    source and the destination hospitals so that the transfer of
                    the patient is made more smoothly with the help of families.
                  </p>
                  <p>
                    This type of Rail Ambulance Service in Jamshedpur can be
                    particularly suitable for patients travelling several
                    hundred kilometres for specialized treatment. Compared with
                    a long road journey, rail transportation can provide a
                    practical option when the patient needs to remain under
                    medical supervision throughout the transfer.
                  </p>
                  <div className="kl-feature-list kl-mt-16">
                    {ABOUT_POINTS.map((pt) => (
                      <div className="kl-feature-item" key={pt}>
                        <IconCheck />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train1}
                      alt="Humancare medical staff coordinating patient rail transfer at Jamshedpur Tatanagar"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ WHY US / RELIABLE CARE ============ */}
          <section className="kl-section kl-bg-soft" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">WHY FAMILIES CHOOSE US</span>
                <h2>
                  Reliable Medical Assistance for Patients Travelling from
                  Jamshedpur
                </h2>
                <p>
                  Long-distance patient transportation requires careful
                  planning and coordination. Humancare handles the medical
                  arrangements, railway coordination, and transfer support so
                  families can concentrate on their patient's care.
                </p>
              </div>
              <div className="kl-grid-3">
                {WHY_US.map((w) => (
                  <div className={`kl-card ${w.tone}`} key={w.title}>
                    <div className="kl-card-icon">{w.icon}</div>
                    <div className="kl-card-title">{w.title}</div>
                    <p className="kl-card-text">{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ MEDICAL EQUIPMENT ============ */}
          <section className="kl-section" id="equipment">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">INSIDE THE COACH</span>
                <h2>
                  ICU-Ready Medical Equipment for Train Transfers from
                  Jamshedpur
                </h2>
                <p>
                  A medically supported railway transfer depends on having
                  suitable equipment available throughout the journey.
                  Humancare arranges Train Ambulance Service in Jamshedpur with
                  medical facilities selected according to the patient's
                  condition, allowing the accompanying team to monitor and
                  support the patient during transit.
                </p>
              </div>
              <div className="kl-equip-grid">
                {EQUIPMENT.map((eq) => (
                  <div className="kl-equip-card" key={eq.title}>
                    <div className="kl-equip-icon">{eq.icon}</div>
                    <div className="kl-equip-body">
                      <div className="kl-equip-title">{eq.title}</div>
                      <p className="kl-equip-text">{eq.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ CARE TEAM ============ */}
          <section className="kl-section kl-bg-soft" id="team">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">WHO TRAVELS WITH THE PATIENT</span>
                <h2>
                  A Dedicated Medical Team for Every Jamshedpur Patient Transfer
                </h2>
                <p>
                  Every patient travelling through our Train Ambulance Service
                  in Jamshedpur receives medical support based on their condition
                  and care requirements. The appropriate team is planned before
                  departure to provide supervision and assistance throughout the
                  journey.
                </p>
              </div>
              <div className="kl-grid-4">
                {TEAM.map((m) => (
                  <div className="kl-card" key={m.title}>
                    <div className="kl-card-icon">{m.icon}</div>
                    <div className="kl-card-title">{m.title}</div>
                    <p className="kl-card-text">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ PATIENTS WE TRANSFER ============ */}
          <section className="kl-section" id="cases">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">WHO WE TRANSFER</span>
                  <h2>
                    Medical Conditions Commonly Supported by Our Train Ambulance
                    in Jamshedpur
                  </h2>
                  <p>
                    Before every transfer, our team reviews the patient's
                    condition and prepares medical support according to the
                    requirements of the case. Common patient categories
                    include:
                  </p>
                  <div
                    className="kl-feature-list kl-mt-16"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "0.75rem",
                    }}
                  >
                    {PATIENTS.map((c) => (
                      <div className="kl-feature-item" key={c}>
                        <IconCheck />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                  <p className="kl-mt-16" style={{ fontStyle: "italic" }}>
                    If your patient's condition is not listed here, contact our
                    coordination team. The case can be discussed with the
                    treating doctor to determine whether a Train Ambulance
                    Service in Jamshedpur is medically appropriate or whether
                    another form of medical transportation would be safer.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="ICU equipped train ambulance layout for transfers from Jamshedpur"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section kl-bg-soft" id="routes">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">ROUTES WE COVER</span>
                <h2>Train Ambulance Routes from Jamshedpur</h2>
                <p>
                  Below are some commonly arranged Train Ambulance routes from
                  Jamshedpur. The suitable route, medical setup, and travel
                  arrangements depend on the patient's condition, destination
                  hospital, railway connectivity, and availability.
                </p>
              </div>
              <div className="kl-grid-2">
                {ROUTES.map(([name, desc]) => (
                  <div className="kl-card" key={name}>
                    <div className="kl-card-title">{name}</div>
                    <p className="kl-card-text">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ BOOKING PROCESS ============ */}
          <section className="kl-section" id="booking">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">HOW IT WORKS</span>
                <h2>Book a Train Ambulance from Jamshedpur in 4 Simple Steps</h2>
                <p>
                  We keep the Train Ambulance booking process in Jamshedpur
                  straightforward, with medical coordination and transportation
                  arrangements managed by our team from the initial enquiry
                  through the patient's transfer.
                </p>
              </div>
              <div className="kl-grid-4">
                {BOOKING.map(([title, desc], idx) => (
                  <div className="kl-card" key={title}>
                    <div className="kl-step-num">0{idx + 1}</div>
                    <div className="kl-card-title">{title}</div>
                    <p className="kl-card-text">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ COST / PRICE FACTORS ============ */}
          <section className="kl-section kl-bg-soft" id="cost">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">UNDERSTANDING COST</span>
                  <h2>
                    What Determines Train Ambulance Cost from Jamshedpur?
                  </h2>
                  <p>
                    Every patient transfer is planned individually because
                    medical requirements, travel distance, and railway
                    arrangements differ from one case to another. The Train
                    Ambulance Cost in Jamshedpur depends on factors including the
                    patient's condition, destination, ICU requirements, medical
                    escort, train class, equipment, and road ambulance support.
                  </p>
                  <div className="kl-mt-16">
                    {FACTORS.map(([num, title, text]) => (
                      <div
                        className="kl-card kl-mb-12"
                        key={num}
                        style={{ padding: "1rem" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "0.25rem",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "700",
                              color: "var(--kl-primary)",
                            }}
                          >
                            {num} —
                          </span>
                          <strong style={{ fontSize: "1rem" }}>{title}</strong>
                        </div>
                        <p
                          className="kl-card-text"
                          style={{ fontSize: "0.9rem", margin: 0 }}
                        >
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Cost estimation breakdown for Jamshedpur train ambulance"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ COMPARISON TABLE ============ */}
          <section className="kl-section" id="compare">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">TRANSPORTATION COMPARISON</span>
                <h2>Train Ambulance vs Air Ambulance — A Quick Comparison</h2>
                <p>
                  Assess the practical differences between rail and air
                  transportation for patients travelling from Jamshedpur.
                </p>
              </div>
              <div className="kl-table-wrap">
                <table className="kl-compare-table">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Train Ambulance</th>
                      <th>Air Ambulance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map(([factor, train, air]) => (
                      <tr key={factor}>
                        <td>{factor}</td>
                        <td className={train[0] || ""}>{train[1]}</td>
                        <td className={air[0] || ""}>{air[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ============ LOCAL COVERAGE ============ */}
          <section className="kl-section kl-bg-soft" id="coverage">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">LOCAL COVERAGE</span>
                <h2>Train Ambulance Service Areas Around Jamshedpur</h2>
                <p>
                  Beyond Jamshedpur city, our road ambulance network can support
                  patient pickup and drop-off across nearby areas for Train
                  Ambulance transfers, helping connect patients with hospitals,
                  railway stations, and other required locations.
                </p>
              </div>
              <div className="kl-areas-cloud">
                {AREAS.map((area) => (
                  <span className="kl-area-tag" key={area}>
                    <IconPin /> {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ============ FAQS ============ */}
          <section className="kl-section" id="faq">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                <h2>
                  Frequently Asked Questions About Train Ambulance in Jamshedpur
                </h2>
                <p>
                  Answers to essential questions regarding booking, medical
                  personnel, equipment, and journey costs from Jamshedpur.
                </p>
              </div>
              <div className="kl-faq-list">
                {FAQS.map(([question, answer], idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      className={`kl-faq-item ${isOpen ? "open" : ""}`}
                      key={question}
                    >
                      <button
                        className="kl-faq-q"
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{question}</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {isOpen && <div className="kl-faq-a">{answer}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ============ FINAL CTA ============ */}
          <section className="kl-final-cta">
            <div className="kl-container">
              <h2>Need a Train Ambulance from Jamshedpur?</h2>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup hospital or residence in
                Jamshedpur, and destination. Our medical transfer coordinators
                are available 24x7 to assist you.
              </p>
              <div
                className="kl-hero-cta-row"
                style={{ justifyContent: "center" }}
              >
                <a href={CONTACT.phoneHref} className="kl-btn kl-btn-accent">
                  <IconPhone /> Call Humancare 24x7
                </a>
                <a
                  href={CONTACT.waHref}
                  className="kl-btn kl-btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsAppGlyph /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* ============ STICKY MOBILE CTA ============ */}
        <div className="kl-sticky-cta">
          <a href={CONTACT.phoneHref}>
            <IconPhone /> Call Now
          </a>
          <a
            href={CONTACT.waHref}
            className="kl-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsAppGlyph /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

/* =========================================================================
   EXPORT
   ========================================================================= */

export default Jamshedpur;
