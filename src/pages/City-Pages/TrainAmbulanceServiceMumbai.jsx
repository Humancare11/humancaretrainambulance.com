/**
 * TrainAmbulanceServiceMumbai.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Mumbai.
 * Styles live in the sibling stylesheet ./TrainAmbulanceVaranasi.css.
 * -------------------------------------------------------------------------
 */

import React, { useState, useRef } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from "../../assets/City/Mumbai/train-ambulance-the-right-choice-for-a-patient-in-mumbai.webp";
import train2 from "../../assets/City/TAM-Varanasi/train-ambulance-service-in-varanasi.webp";
import HeroBanner from "../../assets/City/Mumbai/train-ambulance-service-in-mumbai.webp";
import train4 from "../../assets/City/Mumbai/icu-train-ambulance-in-mumbai.webp";

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
  pageUrl: "https://www.humancaretrainambulance.com/train-ambulance-services-in-mumbai",
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
  "Medical transfer planned around the patient’s actual condition",
  "Suitable support for oxygen, monitoring, mobility, and other medical requirements",
  "Coordinated journey from Mumbai pickup to destination hospital",
  "Practical long-distance option when road or air transfer may not be suitable",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Care During the Journey",
    text: "A suitable medical team can accompany the patient based on their condition and level of care required. From routine monitoring to critical-care support, medical needs are assessed before the journey.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24x7 Assistance for Urgent Transfers",
    text: "Medical emergencies do not follow business hours. Our team remains available around the clock to help families understand their train ambulance service options and begin the transfer process quickly.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Pickup to Hospital Bed",
    text: "The transfer does not end at the railway station. We can coordinate road ambulance support at the required points, helping move the patient between the pickup location, railway station, and destination hospital.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Clear Train Ambulance Charges",
    text: "Before confirming the transfer, families receive information about the expected train ambulance cost and applicable services. The train ambulance price can vary depending on the patient’s medical requirements, route, equipment, and travel arrangements.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16v12H5l-1 4V4Z" />
      </svg>
    ),
    title: "Regular Updates for the Family",
    text: "When a loved one is travelling to another city, knowing what is happening matters. Our team keeps the family informed about important stages of the transfer and helps with coordination throughout the journey.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Support for Different Patient Needs",
    text: "Every patient requires a different level of care. Our rail ambulance arrangements can support patients requiring oxygen, monitoring, mobility assistance, or other medical care, depending on their condition and transfer requirements.",
  },
];

const EQUIPMENT = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 12h4l2-7 4 14 2-7h4" />
      </svg>
    ),
    title: "Portable Ventilator",
    text: "For patients on invasive or non-invasive respiratory support throughout transit.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Multi-Para Patient Monitor",
    text: "Continuous ECG, SpO\u2082, blood pressure and pulse tracking during the entire route.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Defibrillator",
    text: "On-board cardiac emergency response equipment operated by the accompanying doctor.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "Infusion & Syringe Pumps",
    text: "Accurate, continuous delivery of IV fluids and medication at a controlled rate.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Oxygen Cylinders + Backup",
    text: "Reserve capacity calculated for the full journey, with backup cylinders on board.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Suction Unit & Airway Kit",
    text: "Portable suction apparatus and airway management tools for emergency use.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
    title: "Emergency Medication Kit",
    text: "Cardiac, resuscitation and pain-management drugs carried as per protocol.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="10" width="18" height="6" rx="1" />
        <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "Stretcher & Spine Board",
    text: "Patient-transfer stretcher and immobilisation board for safe boarding and transfer.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical Care Doctor",
    text: "For patients requiring intensive medical support, a critical-care doctor can accompany the transfer to monitor the patient’s condition and manage urgent medical needs during the journey.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        <path d="M9 8h6" />
      </svg>
    ),
    title: "Trained Medical Nurse",
    text: "The accompanying nurse provides continuous patient care, including monitoring vital signs, administering prescribed medication, and supporting the patient’s comfort throughout the transfer.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "Medical Attendant",
    text: "A trained medical attendant assists with patient movement, stretcher handling, boarding, and other practical requirements during the transfer, helping the journey run smoothly.",
  },
  {
    icon: <IconPhone />,
    title: "24x7 Transfer Coordination",
    text: "Our coordination team remains connected with the family and relevant medical teams throughout the transfer, helping manage travel arrangements, updates, and destination-side coordination.",
  },
];

const CONDITIONS = [
  "Post-cardiac event / cardiac patients",
  "Ventilator-dependent patients",
  "Post-surgical / post-operative transfer",
  "Stroke & neurological cases",
  "Cancer / oncology patients",
  "Orthopaedic & trauma patients",
  "Dialysis / renal patients",
  "Elderly & bedridden patients",
  "Stable discharge transfers home",
  "High-risk pregnancy referrals",
  "Organ transplant follow-up transfer",
  "Mortal remains / deceased transport",
];

const ROUTES = [
  [
    "Mumbai to Delhi Train Ambulance",
    "A practical option for families transferring patients from Mumbai to Delhi for specialized treatment, follow-up care, or admission at a destination hospital.",
  ],
  [
    "Mumbai to Vellore Train Ambulance",
    "Patients travelling from Mumbai to Vellore for advanced or specialized medical treatment can be transferred with medical supervision and appropriate support throughout the journey.",
  ],
  [
    "Mumbai to Chennai Train Ambulance",
    "A train ambulance service from Mumbai to Chennai can provide a medically supported alternative for patients who require monitored long-distance travel.",
  ],
  [
    "Mumbai to Hyderabad Train Ambulance",
    "Humancare helps coordinate patient transfers from Mumbai to Hyderabad with medical assistance planned according to the patient’s condition and journey requirements.",
  ],
  [
    "Mumbai to Bangalore Train Ambulance",
    "For patients travelling from Mumbai to Bangalore for treatment, rehabilitation, or continued care, a rail ambulance can provide medical support throughout the long-distance journey.",
  ],
  [
    "Mumbai to Kolkata Train Ambulance",
    "Long-distance transfers from Mumbai to Kolkata can be arranged with suitable medical equipment, professional assistance, and coordinated patient movement from pickup to destination.",
  ],
  [
    "Mumbai to Lucknow Train Ambulance",
    "Families requiring a medically supported transfer from Mumbai to Lucknow can arrange a rail ambulance service based on the patient’s medical and mobility needs.",
  ],
  [
    "Mumbai to Patna Train Ambulance",
    "Humancare coordinates patient transfers from Mumbai to Patna, helping families manage medical travel requirements and destination-side transfer arrangements.",
  ],
  [
    "Mumbai to Pune Train Ambulance",
    "For patients who require medical assistance while travelling between Mumbai and Pune, our team can assess the requirement and coordinate an appropriate train ambulance arrangement.",
  ],
  [
    "Mumbai to Jaipur Train Ambulance",
    "Patients travelling from Mumbai to Jaipur for treatment or continued medical care can be supported with a coordinated train ambulance transfer based on their condition and required level of care.",
  ],
];

const BOOKING = [
  [
    "Call or WhatsApp Us",
    "Share the patient’s current condition, pickup location in Mumbai, destination city, and any immediate medical requirements with our coordination team.",
  ],
  [
    "Discuss the Transfer & Cost",
    "Our team reviews the patient’s requirements and available travel arrangements, then explains the suitable train ambulance service, expected train ambulance charges, and other applicable costs before confirmation.",
  ],
  [
    "Confirm the Arrangement",
    "Once you are comfortable with the plan, our team coordinates the required documentation, medical support, railway arrangements, and pickup schedule for the patient.",
  ],
  [
    "Patient Transfer to Destination",
    "The patient is moved from the pickup point to the railway station, supported during the journey by the assigned medical team, and transferred onward to the destination hospital as required.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance & Destination",
    "The distance between Mumbai and the destination city is one of the main factors affecting the overall train ambulance charges. A longer journey generally requires more travel time and resources than a shorter transfer.",
  ],
  [
    "02",
    "Coach, Cabin & Berth Requirement",
    "The type of railway arrangement required for the patient can influence the train ambulance price. The space and privacy needed for the patient, accompanying family members, medical team, and equipment are considered while planning the transfer.",
  ],
  [
    "03",
    "Medical Team Required",
    "The patient’s condition determines the level of medical supervision needed. A stable patient may require basic medical assistance, while a critical patient may need a doctor, nurse, or critical-care support throughout the journey.",
  ],
  [
    "04",
    "Medical Equipment & Consumables",
    "Oxygen, monitoring equipment, ventilator support, medications, and other medical consumables can affect the final rail ambulance cost. Equipment is selected according to the patient’s actual medical requirements rather than adding unnecessary services.",
  ],
  [
    "05",
    "Road Ambulance & Transfer Requirements",
    "The journey may also require road ambulance support between the patient’s hospital or home, Mumbai railway station, and the destination hospital. These pickup and drop arrangements are considered when calculating the complete transfer cost.",
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
  "Delhi",
  "Vellore",
  "Chennai",
  "Hyderabad",
  "Bangalore",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Patna",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Bhubaneswar",
  "Chandigarh",
  "Guwahati",
  "Raipur",
  "Ranchi",
  "Dehradun",
];

const FAQS = [
  [
    "What is a train ambulance service in Mumbai?",
    "A train ambulance is a medically supported patient transfer arranged by rail for people who need assistance during a long-distance journey. Depending on the patient’s condition, the transfer can include medical staff, oxygen, monitoring equipment, and other required support.",
  ],
  [
    "Who can use a train ambulance from Mumbai?",
    "Patients who are medically stable for rail travel but cannot safely travel by regular train may benefit from a train ambulance. It can be considered for bedridden patients, elderly patients, post-surgery patients, and patients requiring oxygen or continuous medical monitoring.",
  ],
  [
    "How can I book a train ambulance in Mumbai?",
    "You can contact Humancare by phone or WhatsApp and share the patient’s condition, current location, destination, and medical requirements. Our coordination team will review the requirement and guide you through the available train ambulance service options.",
  ],
  [
    "How much does a train ambulance cost from Mumbai?",
    "The train ambulance cost varies for every patient. Distance, destination, medical team, equipment, coach or berth requirements, railway availability, and road ambulance support can all affect the final quotation. A detailed estimate is provided after reviewing the transfer requirements.",
  ],
  [
    "What is the train ambulance price in Mumbai?",
    "There is no fixed train ambulance price because every transfer is planned according to the patient’s medical and travel requirements. Humancare provides a transfer quotation after assessing the patient’s condition, route, medical support, and other applicable requirements.",
  ],
  [
    "What are the train ambulance charges?",
    "Train ambulance charges may include railway travel arrangements, medical staff, required equipment, medical consumables, and road ambulance services where needed. The exact charges depend on the complete transfer plan.",
  ],
  [
    "Is a doctor available in a train ambulance?",
    "A doctor can be arranged when the patient’s condition requires doctor-level medical supervision. The medical team is selected according to the patient’s condition and the level of care needed during the journey.",
  ],
  [
    "Can a ventilator patient travel by train ambulance?",
    "Ventilator-dependent patients may be transferred by a medically equipped train ambulance when the journey is considered appropriate based on their clinical condition. The required ventilator, monitoring equipment, oxygen supply, and qualified medical support are planned before departure.",
  ],
  [
    "Does a train ambulance include road ambulance service?",
    "Road ambulance support can be coordinated at the required points of the journey, such as transporting the patient from the hospital or residence to the railway station and from the destination station to the receiving hospital.",
  ],
  [
    "What is train ambulance IRCTC, and does Humancare help with the booking?",
    "Families may use the term train ambulance IRCTC when searching for railway-based medical patient transfers. The arrangement involves coordinating suitable railway travel and medical requirements rather than simply booking a regular passenger ticket. Humancare helps coordinate the overall medical transfer based on the patient’s needs and available railway arrangements.",
  ],
  [
    "Is a rail ambulance cheaper than an air ambulance?",
    "A rail ambulance can be a more practical option for certain long-distance transfers where the patient is stable enough for rail travel and air ambulance is not necessary or financially suitable. The final rail ambulance cost depends on the route, medical support, equipment, and travel arrangements.",
  ],
  [
    "How quickly can I arrange a train ambulance from Mumbai?",
    "The timeline depends on railway availability, the patient’s medical condition, destination, required equipment, and medical team availability. For urgent requirements, contact Humancare as early as possible so the coordination team can assess the transfer and work on the available arrangements.",
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
  alternateName: "Humancare Train Ambulance Service Mumbai",
  description:
    "24x7 ICU-equipped train ambulance service based in Mumbai, offering bedside-to-bedside emergency and non-emergency patient transfer by rail across India, with a qualified doctor, nurse and full life-support equipment on board.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-mumbai.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "\u20B9\u20B9",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mumbai Central",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 19.076, longitude: 72.8777 },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
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
  name: "ICU Train Ambulance Service in Mumbai",
  description:
    "End-to-end ICU train ambulance service from Mumbai covering bedside pickup, road ambulance to the railway station, a fully equipped ICU coach with doctor and nurse escort, and road ambulance to the destination hospital.",
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
      name: "Mumbai",
      item: `${CONTACT.domain}/mumbai`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Mumbai",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-mumbai.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Mumbai | 24x7 ICU Transfer</title>
      <meta
        name="description"
        content="Book a 24x7 train ambulance service in Mumbai with medical support, ICU equipment, and bed-to-bed patient transfer across India. Call Humancare today."
      />
      <meta
        name="keywords"
        content="train ambulance service in mumbai, ICU train ambulance mumbai, rail ambulance mumbai, patient transfer mumbai, medical transport mumbai, emergency train ambulance mumbai"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Mumbai | 24x7 ICU Transfer"
      />
      <meta
        property="og:description"
        content="Book a 24x7 train ambulance service in Mumbai with medical support, ICU equipment, and bed-to-bed patient transfer across India. Call Humancare today."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="ICU-equipped train ambulance coach used for patient transfer from Mumbai"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Mumbai | 24x7 ICU Transfer"
      />
      <meta
        name="twitter:description"
        content="Book a 24x7 train ambulance service in Mumbai with medical support, ICU equipment, and bed-to-bed patient transfer across India. Call Humancare today."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="ICU-equipped train ambulance coach used for patient transfer from Mumbai"
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
   PAGE
   ========================================================================= */
function TrainAmbulanceServiceMumbaiPage() {
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
                    <a href="/mumbai">Mumbai</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Mumbai</li>
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
                    Train Ambulance Service in Mumbai,{" "}
                    <span>Medically Supported</span> Rail & Bed-to-Bed Patient
                    Transfer
                  </h1>
                  <p className="kl-hero-sub">
                    Humancare Train Ambulance is a reliable train ambulance
                    service in Mumbai. We serve patients who have to travel
                    safely from Mumbai to hospitals and cure centers spread all
                    over the country. Our train ambulance setup is ideal for
                    long-distance transport, equipped with medical gear and a
                    team of doctors, nurses or paramedics determined by the
                    level of patients' needs. Starting with patients who are
                    critically sick bedridden to those who depend on oxygen,
                    have to be monitored all the time we handle the entire
                    travel planning of a patient with the medical attention that
                    can be provided through the transit. Because of this, we
                    help family members to find safer and more cost-effective
                    means than the conventional one.
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
                      alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Mumbai"
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
                  <span className="kl-eyebrow">ABOUT THE SERVICE</span>
                  <h2>
                    When Is a Train Ambulance the Right Choice for a Patient in
                    Mumbai?
                  </h2>
                  <p>
                    Getting a patient from Mumbai to another city is not simply
                    about finding a seat on a train. If the patient needs
                    medical attention during the journey, the transfer has to be
                    planned around their condition, mobility, equipment, and
                    destination hospital. This is especially important for
                    families travelling long distances for cancer care,
                    neurological treatment, surgery, rehabilitation, or other
                    specialized medical services.
                  </p>
                  <p>
                    Humancare helps families arrange a train ambulance in Mumbai
                    when travelling without medical assistance may not be
                    appropriate for the patient. Instead of leaving the family
                    to coordinate different parts of the journey themselves, our
                    team helps organize the rail ambulance service, medical
                    support, required equipment, and onward transfer according
                    to the patient’s needs. The aim is to make a complicated
                    long-distance transfer more organized from the moment the
                    patient leaves the hospital or residence in Mumbai.
                  </p>
                  <p>
                    For families considering a train ambulance service, the
                    decision often comes down to the patient’s medical
                    condition, travel distance, required support, and budget. A
                    rail-based transfer is an option when a patient needs
                    monitored medical travel but doesn't necessarily need an air
                    ambulance. Our team reviews the requirement first and
                    explains the available transfer arrangements, including the
                    expected train ambulance cost, before planning the journey.
                  </p>
                  <ul className="kl-check-list kl-mt-16">
                    {ABOUT_POINTS.map((t) => (
                      <li key={t}>
                        <IconCheck /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train1}
                      alt="Medical transport team with patient stretcher at Mumbai railway station"
                      loading="lazy"
                      width="600"
                      height="440"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ WHY CHOOSE US ============ */}
          <section className="kl-section kl-section-alt" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHY FAMILIES CHOOSE US</span>
                <h2>
                  Reliable Medical Support When Your Patient Needs to Travel
                </h2>
                <p>
                  A long-distance patient transfer can feel overwhelming. Our
                  team takes care of the medical coordination, travel
                  arrangements, and communication so your family can focus on
                  the patient.
                </p>
              </div>
              <div className="kl-grid kl-grid-3">
                {WHY_US.map((c) => (
                  <div
                    className={`kl-card${c.tone ? " " + c.tone : ""}`}
                    key={c.title}
                  >
                    <div className="kl-card-icon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ ICU EQUIPMENT ============ */}
          <section className="kl-section" id="equipment">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">INSIDE THE COACH</span>
                  <h2>
                    ICU Train Ambulance in Mumbai, Medical Support Built Around
                    the Patient
                  </h2>
                  <p>
                    A long-distance medical transfer needs more than a railway
                    seat. Humancare’s ICU train ambulance arrangements are
                    planned around the patient’s medical condition, with
                    essential equipment and professional medical support
                    available during the journey. Depending on the patient’s
                    needs, the setup may include oxygen support, patient
                    monitoring, cardiac monitoring, ventilator support, and
                    other critical-care equipment. This allows the patient to
                    remain under appropriate medical observation while
                    travelling from Mumbai to the destination city, giving
                    families greater confidence throughout the transfer.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="ICU equipment used in train ambulance including ventilator, monitor and oxygen cylinders"
                      loading="lazy"
                      width="600"
                      height="460"
                    />
                  </div>
                </div>
              </div>

              <div className="kl-equip-grid kl-mt-32">
                {EQUIPMENT.map((e) => (
                  <div className="kl-equip-item" key={e.title}>
                    <span className="kl-card-icon">{e.icon}</span>
                    <div>
                      <h4>{e.title}</h4>
                      <p>{e.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ MEDICAL TEAM ============ */}
          <section className="kl-section kl-section-tint" id="team">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHO TRAVELS WITH THE PATIENT</span>
                <h2>
                  Medical Professionals Who Stay With the Patient Throughout the
                  Journey
                </h2>
                <p>
                  A patient travelling by train ambulance in Mumbai may need
                  more than equipment alone. The medical team accompanying the
                  patient is selected according to the patient’s condition and
                  the level of support required during the transfer. Humancare
                  coordinates trained medical professionals to monitor the
                  patient, respond to changes, and provide appropriate care
                  throughout the journey.
                </p>
              </div>
              <div className="kl-grid kl-grid-4">
                {TEAM.map((t) => (
                  <div className="kl-card" key={t.title}>
                    <div className="kl-card-icon">{t.icon}</div>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ PATIENT CONDITIONS ============ */}
          <section className="kl-section" id="conditions">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">WHO WE TRANSFER</span>
                <h2>
                  Patients Who May Benefit From a Train Ambulance Transfer
                </h2>
                <p>
                  Every patient has different medical and travel requirements,
                  so the level of support is planned before the journey begins.
                  Humancare coordinates train ambulance transfers for patients
                  who need medical supervision or assistance while travelling
                  from Mumbai to another city. Common transfer requirements
                  include:
                </p>
              </div>
              <div className="kl-tag-grid">
                {CONDITIONS.map((c) => (
                  <div className="kl-tag-item" key={c}>
                    <IconCheck />
                    {c}
                  </div>
                ))}
              </div>
              <p className="kl-mt-24">
                If your patient's condition isn't listed here, call our
                coordination desk. We will consult with the treating doctor to
                determine whether a Train Ambulance Service in Mumbai is
                medically appropriate or recommend the safest alternative.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes from Mumbai</h2>
                <p>
                  Humancare coordinates train ambulance in Mumbai for
                  long-distance patient transfers to major cities across India.
                  The right medical support, equipment, and transfer
                  arrangements are planned according to the patient’s condition,
                  destination, and travel requirements.
                </p>
              </div>
              <div className="kl-route-rail">
                {ROUTES.map(([title, desc]) => (
                  <div className="kl-route-stop" key={title}>
                    <div className="kl-route-head">
                      <h3>{title}</h3>
                    </div>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ BOOKING ============ */}
          <section className="kl-section kl-section-tint" id="booking">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">HOW IT WORKS</span>
                <h2>Book a Train Ambulance from Mumbai in 4 Simple Steps</h2>
                <p>
                  Arranging medical travel can be difficult when you are already
                  worried about a loved one. Humancare keeps the train ambulance
                  booking process straightforward, with our team helping you
                  understand the medical requirements, travel arrangements, and
                  next steps.
                </p>
              </div>
              <div className="kl-step-list">
                {BOOKING.map(([title, text]) => (
                  <div className="kl-step-item" key={title}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ PRICING ============ */}
          <section className="kl-section" id="pricing">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">UNDERSTANDING COST</span>
                  <h2>What Determines the Train Ambulance Cost from Mumbai?</h2>
                  <p>
                    There is no single train ambulance price for every patient
                    because each transfer is planned around the patient’s
                    condition, destination, medical support, and travel
                    requirements. The train ambulance cost from Mumbai can
                    change depending on the level of medical care needed,
                    journey distance, berth or coach arrangement, equipment,
                    medical team, and road ambulance requirements. Humancare
                    reviews these details before providing the family with a
                    transfer quotation.
                  </p>
                  <div className="kl-mt-24">
                    {FACTORS.map(([num, title, text]) => (
                      <div className="kl-factor-row" key={num}>
                        <span className="kl-factor-num">{num}</span>
                        <div>
                          <h4>{title}</h4>
                          <p>{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Mumbai"
                      loading="lazy"
                      width="600"
                      height="440"
                    />
                  </div>
                  <div
                    className="kl-card kl-mt-24"
                    style={{ textAlign: "center" }}
                  >
                    <h4>Want an exact number?</h4>
                    <p className="kl-mt-8">
                      Share the patient's origin, destination and condition and
                      we'll send a written quote — no obligation.
                    </p>
                    <a
                      href={CONTACT.phoneHref}
                      className="kl-btn kl-btn-primary kl-btn-block kl-mt-16"
                    >
                      Get My Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ COMPARISON ============ */}
          <section className="kl-section kl-section-alt" id="comparison">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Which Should You Choose?</span>
                <h2>Train Ambulance vs Air Ambulance — A Quick Comparison</h2>
                <p>
                  Both options include a medical escort and equipment; the right
                  choice depends on the patient's condition, timeline and
                  budget.
                </p>
              </div>
              <div className="kl-table-wrap">
                <table className="kl-compare">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Train Ambulance</th>
                      <th>Air Ambulance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map(([label, train, air]) => (
                      <tr key={label}>
                        <td>{label}</td>
                        <td className={train[0] || undefined}>{train[1]}</td>
                        <td className={air[0] || undefined}>{air[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ============ SERVICE AREAS ============ */}
          <section className="kl-section" id="service-areas">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">LOCAL COVERAGE</span>
                <h2>
                  Train Ambulance Service from Mumbai to Major Cities Across
                  India
                </h2>
                <p>
                  Humancare coordinates train ambulance in Mumbai for patients
                  travelling to hospitals and treatment centres across India.
                  Our transfer support can be arranged from Mumbai to major
                  destinations including:
                </p>
              </div>
              <div className="kl-area-chip-wrap">
                {AREAS.map((a) => (
                  <span className="kl-area-chip" key={a}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ============ FAQ ============ */}
          <section className="kl-section" id="faqs">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">COMMON QUESTIONS</span>
                <h2>
                  Train Ambulance Service in Mumbai, Frequently Asked Questions
                </h2>
                <p>
                  Clear answers to the questions families commonly have before
                  arranging a medically supported patient transfer from Mumbai.
                  These FAQs help you understand the booking process, medical
                  support, train ambulance cost, and what to expect during the
                  journey.
                </p>
              </div>
              <div className="kl-faq-list" id="faqList">
                {FAQS.map(([q, a], i) => {
                  const open = openFaq === i;
                  return (
                    <div
                      className={`kl-faq-item${open ? " kl-open" : ""}`}
                      key={q}
                    >
                      <button
                        className="kl-faq-q"
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? -1 : i)}
                      >
                        {q}
                        <span className="kl-plus">+</span>
                      </button>
                      <div className="kl-faq-a">
                        <p>{a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ============ FINAL CTA ============ */}
          <section className="kl-section kl-section-dark">
            <div className="kl-container kl-text-center">
              <span
                className="kl-eyebrow"
                style={{ color: "var(--color-accent)" }}
              >
                Every Minute Matters
              </span>
              <h2 className="kl-mt-8">Need a Train Ambulance from Mumbai?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Mumbai, with suitable medical staff, equipment,
                railway coordination, and patient transfer support based on the
                patient’s needs.
              </p>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient’s condition, pickup location, and
                destination. Our team will help you understand the available
                transfer options and guide you through the booking process.
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
export default function TrainAmbulanceServiceMumbai() {
  return <TrainAmbulanceServiceMumbaiPage />;
}
