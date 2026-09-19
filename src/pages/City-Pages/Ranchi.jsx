/**
 * Ranchi.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Ranchi.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-ranchi",
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
  "Single-point coordination from Ranchi to the destination hospital",
  "Medical equipment and trained medical staff based on patient requirements",
  "Suitable for long-distance transfers to specialized hospitals",
  "Road ambulance connectivity for pickup and destination transfer",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Qualified Medical Escort",
    text: "A trained doctor and nurse can accompany the patient throughout the journey, providing medical supervision, monitoring vital signs, and responding to changing medical needs during the transfer from Ranchi.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Quick, 24×7 Assistance",
    text: "Our coordination team is available around the clock to help arrange a Train Ambulance from Ranchi, including urgent transfers, medical requirements, and travel coordination.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Transfer",
    text: "Road ambulance support can be arranged at both ends, connecting the patient's location in Ranchi with the railway station and the receiving hospital for a coordinated transfer without unnecessary gaps.",
  },
  {
    tone: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Clear, Upfront Pricing",
    text: "Families receive a detailed quotation before confirming the journey. Train Ambulance Cost in Ranchi depends on factors such as medical requirements, travel distance, equipment, berth type, and ambulance support.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Regular Family Communication",
    text: "Families are kept informed throughout the transfer with timely updates regarding the patient's journey, medical condition, and progress, helping them stay connected even when they cannot travel themselves.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Experience with Diverse Medical Needs",
    text: "Our medical teams can support patients with different levels of care, from stable patients requiring assisted travel to those needing critical-care equipment and continuous medical supervision during a Rail Ambulance journey from Ranchi.",
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
    text: "For patients requiring respiratory assistance, with invasive or non-invasive ventilation support available during the journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Multi-Parameter Monitor",
    text: "Continuous monitoring of vital parameters such as ECG, SpO₂, blood pressure, and pulse rate throughout the transfer.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Defibrillator",
    text: "Emergency cardiac equipment kept available on board for rapid response when required by the patient's medical condition.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "Infusion & Syringe Pumps",
    text: "Helps deliver prescribed fluids and medications accurately and continuously at controlled rates during transit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Oxygen Cylinders + Backup",
    text: "Adequate oxygen support with reserve cylinders planned according to the expected journey duration and the patient's requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Suction Unit & Airway Kit",
    text: "Essential airway-management equipment for clearing secretions and supporting emergency respiratory care when needed.",
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
    text: "Patient-transfer equipment designed to support safe movement, boarding, immobilisation, and transfer between ambulances and the Train Ambulance in Ranchi.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "Assigned when patients require advanced medical supervision, including ventilator support, continuous monitoring, and critical-care management during transit.",
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
    text: "Provides continuous bedside care, administers prescribed medications, monitors the patient, and assists with routine medical needs throughout the journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Trained Ambulance Attendants",
    text: "Handle stretcher movement and patient transfers between the hospital, ambulance, railway station, and destination facility, helping ensure safe movement.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "24×7 Coordination Desk",
    text: "Coordinates the Train Ambulance from Ranchi, tracks the journey, and maintains communication with the patient's family and receiving hospital when required.",
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
    "Ranchi to Delhi Train Ambulance",
    "A preferred option for patients travelling from Ranchi to Delhi for advanced treatment, specialist consultation, or admission at a tertiary-care hospital.",
  ],
  [
    "Ranchi to Mumbai Train Ambulance",
    "Suitable for long-distance transfers to Mumbai when patients require specialized medical care and need medical supervision throughout the railway journey.",
  ],
  [
    "Ranchi to Kolkata Train Ambulance",
    "A frequently used route for patients seeking specialized treatment in Kolkata, with coordinated medical and road ambulance support at both ends.",
  ],
  [
    "Ranchi to Hyderabad Train Ambulance",
    "Arranged for patients travelling to Hyderabad for advanced procedures, oncology care, cardiac treatment, or other specialized medical services.",
  ],
  [
    "Ranchi to Bangalore Train Ambulance",
    "An option for patients requiring transfer to Bengaluru for specialized treatment, rehabilitation, or consultation at advanced healthcare facilities.",
  ],
  [
    "Ranchi to Chennai Train Ambulance",
    "Provides medically supported long-distance transportation for patients travelling from Ranchi to Chennai for specialized and tertiary-level treatment.",
  ],
  [
    "Ranchi to Lucknow Train Ambulance",
    "A practical rail-transfer option for patients from Ranchi who need medical care or specialist services available at hospitals in Lucknow.",
  ],
  [
    "Ranchi to Patna Train Ambulance",
    "Suitable for patients requiring medically assisted transfer from Ranchi to Patna, with arrangements planned according to their health and mobility requirements.",
  ],
  [
    "Ranchi to Pune Train Ambulance",
    "Coordinated for patients travelling from Ranchi to Pune for specialized treatment, follow-up care, or rehabilitation while receiving appropriate medical assistance.",
  ],
  [
    "Ranchi to Jaipur Train Ambulance",
    "Arranged for patients who need to travel from Ranchi to Jaipur for specialized medical treatment or continued care under supervised transportation.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Share the patient's medical condition, current location or hospital in Ranchi, and the destination city with our coordination team.",
  ],
  [
    "2. Get a Transfer Plan & Quote",
    "We assess the patient's requirements, check suitable train and berth options, arrange the necessary medical team, and provide the estimated cost.",
  ],
  [
    "3. Confirm & Prepare",
    "After confirmation, our team coordinates the required medical documents, railway arrangements, ambulance pickup, and other preparations for the journey.",
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "Our team coordinates the patient's movement from the hospital or residence in Ranchi to the railway station and onward to the destination hospital, with medical support throughout the transfer.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance & Destination City",
    "Longer routes from Ranchi generally involve higher transportation costs than shorter journeys to nearby cities such as Kolkata or Patna.",
  ],
  [
    "02",
    "Train Class & Berth Type",
    "The selected coach, berth arrangement, privacy requirements, and space needed for medical equipment can affect the overall Train Ambulance Price in Ranchi.",
  ],
  [
    "03",
    "Medical Escort Required",
    "A transfer requiring a critical-care doctor and nurse will have different costs from one requiring basic medical supervision for a stable patient.",
  ],
  [
    "04",
    "Medical Equipment & Consumables",
    "Ventilator support, oxygen requirements, monitoring devices, medicines, and other medical consumables can increase the total transfer cost.",
  ],
  [
    "05",
    "Road Ambulance at Both Ends",
    "The distance between the patient's hospital or residence and the railway station in Ranchi, along with the destination-side hospital transfer, can influence the final quotation.",
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
  "Ranchi",
  "Kanke",
  "Namkum",
  "Hatia",
  "Doranda",
  "Morabadi",
  "Bariatu",
  "Harmu",
  "Lalpur",
  "Dhurwa",
  "Booty More",
  "Tatisilwai",
  "Ratu",
  "Ormanjhi",
  "Khunti",
  "Ramgarh",
  "Hazaribagh",
  "Gumla",
  "Bokaro",
  "Jamshedpur",
];

const FAQS = [
  [
    "1. What is a Train Ambulance Service in Ranchi?",
    "A Train Ambulance Service in Ranchi provides medically supported railway transportation for patients who need to travel to another city for treatment, while receiving appropriate medical assistance during the journey.",
  ],
  [
    "2. How can I book a Train Ambulance from Ranchi?",
    "You can contact Humancare by phone or WhatsApp and share the patient's medical condition, current location, destination city, and treatment requirements. Our team will coordinate the suitable transfer arrangements.",
  ],
  [
    "3. Which cities can I travel to by Train Ambulance from Ranchi?",
    "Train Ambulance transfers can be arranged from Ranchi to major cities such as Delhi, Mumbai, Kolkata, Chennai, Hyderabad, Bengaluru, Pune, Jaipur, Lucknow, Patna, and other locations depending on railway connectivity and availability.",
  ],
  [
    "4. Can a critical or ventilator-dependent patient travel by Train Ambulance from Ranchi?",
    "Yes, patients requiring critical care may be transported by Train Ambulance when medically suitable. Ventilator support, oxygen, monitoring equipment, and trained medical professionals can be arranged according to the patient's condition.",
  ],
  [
    "5. Is a doctor or nurse available during the Train Ambulance journey?",
    "Medical escorts can be assigned based on the patient's medical requirements. Depending on the case, the team may include a critical-care doctor, nurse, or other trained medical personnel.",
  ],
  [
    "6. How much does a Train Ambulance from Ranchi cost?",
    "The Train Ambulance Cost in Ranchi varies according to the destination, train and berth type, patient's medical condition, medical escort, equipment, oxygen requirements, and road ambulance services. A customized quotation is provided after assessing the patient's requirements.",
  ],
  [
    "7. Does the Train Ambulance service include road ambulance support?",
    "Yes, road ambulance connectivity can be arranged at both ends of the journey. This can include pickup from the patient's hospital or residence in Ranchi, transfer to the railway station, and transportation from the destination station to the receiving hospital.",
  ],
  [
    "8. Can Humancare arrange a complete bed-to-bed transfer from Ranchi?",
    "Yes. Humancare can coordinate the patient's transfer from the hospital or residence in Ranchi to the railway station, provide medical support during the train journey, and arrange onward ambulance transportation to the destination hospital.",
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
  alternateName: "Humancare Train Ambulance Service Ranchi",
  description:
    "Book train ambulance service in Ranchi with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-ranchi.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ranchi Railway Station Area, Chutia",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "834001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.3441, longitude: 85.3096 },
  areaServed: [
    { "@type": "City", name: "Ranchi" },
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
  name: "Train Ambulance Service in Ranchi",
  description:
    "Train Ambulance in Ranchi — Critical Care Support for Long-Distance Patient Transfers.",
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
      name: "Ranchi",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Ranchi",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-ranchi.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Ranchi | Medical Rail Ambulance</title>
      <meta
        name="description"
        content="Book train ambulance service in Ranchi with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in ranchi, train ambulance in ranchi, rail ambulance ranchi, patient transfer ranchi, ICU train ambulance ranchi, ranchi to delhi train ambulance, ranchi to kolkata train ambulance, medical train escort ranchi"
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
      <meta name="geo.placename" content="Ranchi" />
      <meta name="geo.position" content="23.3441;85.3096" />
      <meta name="ICBM" content="23.3441, 85.3096" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Ranchi | Medical Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book train ambulance service in Ranchi with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Ranchi - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Ranchi | Medical Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book train ambulance service in Ranchi with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Ranchi - Humancare Train Ambulance"
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
function Ranchi() {
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
                    <a href={CONTACT.pageUrl}>Ranchi</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Ranchi</li>
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
                    Train Ambulance in Ranchi — Critical Care Support for
                    Long-Distance Patient Transfers
                  </h1>
                  <p className="kl-hero-sub">
                    Humancare Train Ambulance Service in Ranchi is a
                    professionally orchestrated service by Humancare that caters
                    to the need of patients who require medically assisted
                    transportation in a safe and affordable manner. We offer a
                    train ambulance service in Ranchi that is suitable for both
                    patients of critical condition and those with non-critical
                    conditions. We arrange medical equipment and other supplies
                    based on the patient's specific condition. With the
                    assistance of a doctor and a nurse, the train can be equipped
                    with ICU-level equipment, an oxygen supply, and heart
                    monitoring, among other things. From the train ambulance
                    reservation to the coordination of pickup and hospital
                    admission, Humancare helps manage the entire bed-to-bed
                    patient transport from Ranchi to the required destination.
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
                      alt="Train Ambulance in Ranchi — Critical Care Support for Long-Distance Patient Transfers"
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
                  <span className="kl-eyebrow">WHAT IS A TRAIN AMBULANCE SERVICE IN RANCHI</span>
                  <h2>
                    What Is a Train Ambulance Service in Ranchi, and Who Is It
                    For?
                  </h2>
                  <p>
                    The healthcare industry in Ranchi is a vital one and a big
                    reason why it's considered among Jharkhand's major healthcare
                    centres. Jharkhand healthcare services in Ranchi though
                    might not be enough. Sometimes, mainly those requiring
                    specialized care, the right equipment, or a certain
                    expertise, patients end up seeking hospital services
                    further away.
                  </p>
                  <p>
                    If your patient is too ill to be on an overground ambulance,
                    a train ambulance from Ranchi is a safe medical transport
                    facility for the patient that you should consider. This
                    service helps the patient move from one medical facility to
                    another by railway as the movement is also medically
                    supported. A Train Ambulance from Ranchi not only gives the
                    patient the comfort of a medical bed but also gives them
                    access to oxygen support and monitoring equipment during the
                    journey. Medical assistance is also provided by trained
                    personnel. Humancare is the organization that coordinates
                    these kinds of transfers. After contacting the source
                    hospital and confirming the destination hospital, they are
                    all responsible for arranging the transfer so that the
                    families are relieved from such an ordeal.
                  </p>
                  <p>
                    This type of Rail Ambulance Service in Ranchi is especially
                    useful for patients who need to travel several hundred
                    kilometres for specialized treatment. It can be a more
                    practical alternative to a road ambulance when the
                    destination is far away and continuous medical supervision is
                    required.
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
                      alt="Medical team assisting patient on stretcher for train ambulance transfer from Ranchi"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ WHY US / TRUSTED CARE ============ */}
          <section className="kl-section kl-bg-soft" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">WHY FAMILIES CHOOSE US</span>
                <h2>Trusted Care for Patients Travelling from Ranchi</h2>
                <p>
                  Arranging long-distance medical travel can be stressful for
                  families. Humancare manages the medical coordination, railway
                  arrangements, and transfer support so you can focus on your
                  loved one.
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
                  Critical Care Equipment for Safe Train Transfers from Ranchi
                </h2>
                <p>
                  A medical train transfer requires dependable equipment
                  throughout the journey. Humancare arranges Train Ambulance
                  Service in Ranchi with essential medical facilities selected
                  according to the patient's condition, helping the accompanying
                  medical team monitor and support the patient during
                  long-distance travel.
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
                  Experienced Medical Professionals for Every Ranchi Transfer
                </h2>
                <p>
                  Every patient travelling through our Train Ambulance Service
                  in Ranchi is assigned medical support according to their health
                  condition and care requirements. The medical team is selected
                  before departure to ensure appropriate supervision and
                  assistance throughout the journey.
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
                    Patient Conditions Supported by Our Train Ambulance in Ranchi
                  </h2>
                  <p>
                    Our medical team reviews the patient's condition before every
                    transfer and prepares the required medical support
                    accordingly. Common cases we assist with include:
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
                    coordination team. We can discuss the case with the treating
                    doctor to determine whether a Train Ambulance Service in
                    Ranchi is appropriate or whether another mode of medical
                    transportation would be safer.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Train ambulance ICU equipment setup for transfers from Ranchi"
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
                <h2>Train Ambulance Routes from Ranchi</h2>
                <p>
                  Below are some of the commonly arranged Train Ambulance routes
                  from Ranchi. The suitable route, medical setup, and travel
                  arrangements depend on the patient's condition, destination
                  hospital, and availability of railway services.
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
                <h2>Book a Train Ambulance from Ranchi in 4 Simple Steps</h2>
                <p>
                  We make the Train Ambulance booking process in Ranchi
                  straightforward, with medical coordination and travel
                  arrangements handled by our team from start to finish.
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
                  <h2>What Determines Train Ambulance Cost from Ranchi?</h2>
                  <p>
                    Every patient transfer is planned individually because
                    medical needs, travel distances, and railway arrangements
                    can vary. The Train Ambulance Cost in Ranchi depends on
                    factors such as the patient's condition, destination city,
                    ICU requirements, medical escort, train class, equipment, and
                    ambulance support at both ends.
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
                      alt="Cost calculation breakdown for train ambulance from Ranchi"
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
                  Compare key features of rail and air medical transfers to
                  determine the most appropriate option for your patient.
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
                <h2>Train Ambulance Service Areas Around Ranchi</h2>
                <p>
                  Beyond Ranchi city, our road ambulance network can support
                  patient pickup and drop-off across nearby areas for Train
                  Ambulance transfers, helping connect patients with railway
                  stations, hospitals, and other required locations.
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
                <h2>Frequently Asked Questions About Train Ambulance in Ranchi</h2>
                <p>
                  Answers to essential questions regarding rail medical escorts,
                  booking steps, equipment, and pricing from Ranchi.
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
              <h2>Need a Train Ambulance from Ranchi?</h2>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup hospital or residence in
                Ranchi, and destination. Our medical transfer coordinators are
                available 24x7 to assist you.
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

export default Ranchi;
