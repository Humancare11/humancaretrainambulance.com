/**
 * Jaipur.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Jaipur.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-jaipur",
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
  "Medical review and transfer planning before departure",
  "Assistance with railway travel and patient movement",
  "Medical escort and equipment based on the patient's needs",
  "Ambulance coordination between the pickup address, railway station and destination hospital",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Patient Assessment Before the Journey",
    text: "Our team collects details about the patient's condition, current treatment, mobility, medical documents, pickup location, and destination before preparing the transfer plan.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Railway Travel Planned Around Patient Comfort",
    text: "Train options and berth requirements are reviewed according to availability, journey duration and the patient's ability to travel with the necessary assistance.",
  },
  {
    tone: "kl-gold",
    icon: <IconUser />,
    title: "Medical Assistance During Transit",
    text: "A trained attendant, nurse or doctor may accompany the patient depending on the required level of supervision, treatment and monitoring.",
  },
  {
    tone: "",
    icon: <IconPin />,
    title: "Road Ambulance at the Starting and Ending Points",
    text: "Ambulance transportation can be arranged from the patient's Jaipur hospital or residence to the railway station and from the destination station to the receiving facility.",
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Coordination With the Concerned Facilities",
    text: "Our team can coordinate with the pickup hospital, receiving hospital and family members regarding the patient's movement and transfer arrangements.",
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
    title: "Care Plan Prepared for the Individual Patient",
    text: "The medical team, equipment, and transportation support are selected according to the patient's condition. Every transfer is planned separately rather than using one fixed arrangement.",
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
    title: "Portable Ventilation Equipment",
    text: "A portable ventilator may be arranged for patients who require breathing assistance during transportation, subject to medical evaluation and appropriate equipment availability.",
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
    title: "Vital Signs Observation",
    text: "Monitoring equipment may be used to observe ECG, pulse, blood pressure, oxygen saturation and other vital parameters during the journey.",
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
    title: "Supplemental Oxygen Facilities",
    text: "Oxygen support can be planned for patients who require additional oxygen, with arrangements based on the patient's requirement and expected travel duration.",
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
    title: "Infusion and Syringe Pump Support",
    text: "Infusion pumps or syringe pumps may be arranged when prescribed medicines or fluids need to be administered in a controlled manner during transit.",
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
    title: "Airway Management Supplies",
    text: "Suction equipment and airway-care supplies may be included for patients who require assistance with airway clearance or secretion management.",
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
    title: "Emergency and Routine Medical Supplies",
    text: "The accompanying medical team may carry essential supplies according to the patient's treatment plan and expected level of medical care.",
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
    title: "Patient Transfer and Stretcher Aids",
    text: "Stretcher equipment and movement aids may be used while transferring the patient between the hospital, ambulance, railway platform and train compartment.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Medical Doctor",
    text: "A critical-care doctor may be arranged for patients who need advanced supervision, intensive observation or specialised medical support during transportation.",
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
    title: "Nursing Professional",
    text: "A nurse may assist with prescribed medicines, vital monitoring, patient positioning and routine nursing care throughout the railway journey.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Trained Patient Attendant",
    text: "A medical attendant can help with basic care, patient comfort, mobility and other assistance required during the transfer.",
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
    title: "Ambulance Transfer Personnel",
    text: "Ambulance attendants assist with stretcher handling, boarding, disembarkation, and movement between the Jaipur pickup location, railway station, and destination hospital.",
  },
];

const CONDITIONS = [
  "Patients recovering after surgery",
  "Patients travelling for advanced medical treatment",
  "Patients requiring continued hospital care",
  "Patients needing specialist consultation",
  "Patients recovering after cardiac treatment",
  "Stroke and neurological patients",
  "Cancer and oncology patients",
  "Orthopaedic and trauma patients",
  "Dialysis and kidney-care patients",
  "Elderly patients requiring travel support",
  "Bedridden patients",
  "Patients being transferred after hospital discharge",
  "Patients travelling for rehabilitation",
  "Patients returning home after treatment",
  "Deceased patient transportation",
];

const ROUTES = [
  [
    "Jaipur to Delhi Train Ambulance",
    "A medically supported transfer from Jaipur to Delhi may be considered for patients travelling for specialised treatment, surgery, specialist consultation or continued hospital care.",
  ],
  [
    "Jaipur to Mumbai Train Ambulance",
    "Patients may require a train ambulance from Jaipur to Mumbai for advanced treatment, rehabilitation, follow-up care or access to specialist hospitals.",
  ],
  [
    "Jaipur to Ahmedabad Train Ambulance",
    "This route may be arranged for patients travelling to Ahmedabad for medical consultation, planned treatment, rehabilitation or post-operative care.",
  ],
  [
    "Jaipur to Pune Train Ambulance",
    "A Jaipur-to-Pune transfer may be considered for patients requiring specialist treatment, recovery support or continued medical care.",
  ],
  [
    "Jaipur to Bengaluru Train Ambulance",
    "Patients may travel to Bengaluru for specialised procedures, long-term treatment, rehabilitation or follow-up appointments.",
  ],
  [
    "Jaipur to Chennai Train Ambulance",
    "A transfer to Chennai may be arranged for patients requiring advanced medical services, planned procedures or continued hospital treatment.",
  ],
  [
    "Jaipur to Hyderabad Train Ambulance",
    "Patients travelling from Jaipur to Hyderabad may need support for specialist consultation, treatment or post-discharge transportation.",
  ],
  [
    "Jaipur to Kolkata Train Ambulance",
    "A medically supported journey to Kolkata may be considered for patients requiring specialised treatment, continued care or a supported return home.",
  ],
  [
    "Jaipur to Varanasi Train Ambulance",
    "This route may be useful for patients travelling to Varanasi for continued treatment, recovery care, or returning home after medical care.",
  ],
  [
    "Jaipur to Lucknow Train Ambulance",
    "Patients may travel from Jaipur to Lucknow for medical consultation, treatment, rehabilitation, or follow-up care.",
  ],
];

const BOOKING = [
  [
    "1. Submit the Patient's Travel Details",
    "Share the patient's current condition, medical reports, Jaipur pickup address, hospital information and destination city with our team.",
  ],
  [
    "2. Explain the Medical Assistance Required",
    "Our team discusses the patient's mobility, oxygen needs, monitoring requirements, medical escort and other support needed during the journey.",
  ],
  [
    "3. Coordinate Railway and Road Transportation",
    "Suitable train arrangements, patient handling, medical support and ambulance transportation are organised according to the transfer requirements.",
  ],
  [
    "4. Confirm the Plan and Start the Transfer",
    "After confirmation, our team coordinates with the relevant parties and manages the patient's movement from the Jaipur hospital or residence to the destination facility.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance Between Jaipur and the Destination",
    "The travel distance can affect the overall cost, particularly when the journey requires extended medical supervision or additional planning.",
  ],
  [
    "02",
    "Train and Patient-Space Requirements",
    "The selected train, berth arrangement, patient space and railway facilities may influence the final quotation.",
  ],
  [
    "03",
    "Medical Escort Level",
    "The charges may vary depending on whether the patient requires an attendant, nurse, doctor or critical-care specialist.",
  ],
  [
    "04",
    "Equipment and Medical Support",
    "Oxygen facilities, monitoring devices, ventilator support, infusion pumps and other medical equipment may affect the total price.",
  ],
  [
    "05",
    "Pickup and Destination Ambulance",
    "Road ambulance transportation between the Jaipur pickup location, railway station and receiving hospital may also contribute to the final charges.",
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
  "Jaipur City",
  "C-Scheme",
  "Malviya Nagar",
  "Mansarovar",
  "Vaishali Nagar",
  "Raja Park",
  "Jagatpura",
  "Tonk Road",
  "Ajmer Road",
  "Sodala",
  "Shyam Nagar",
  "Durgapura",
  "Sanganer",
  "Pratap Nagar",
  "Vidyadhar Nagar",
  "Jhotwara",
  "Murlipura",
  "Amer",
  "Kukas",
  "Sitapura",
  "Muhana",
  "Kanakpura",
  "Chomu",
  "Bagru",
  "Bassi",
  "Jamwa Ramgarh",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Jaipur?",
    "A train ambulance service in Jaipur provides medically supported railway transportation for patients who need assistance while travelling to another city. Depending on the patient's condition, the transfer may include medical personnel, oxygen support, monitoring equipment and road ambulance services.",
  ],
  [
    "2. How can I book a train ambulance from Jaipur?",
    "You can contact Humancare with the patient's medical details, Jaipur pickup location and destination city. Our team will review the requirements and coordinate the railway, medical and ground transportation arrangements.",
  ],
  [
    "3. What is the train ambulance cost from Jaipur?",
    "The train ambulance cost depends on the destination, railway arrangements, medical escort, equipment and road ambulance requirements. A quotation can be prepared after reviewing the patient's medical and travel needs.",
  ],
  [
    "4. What factors affect train ambulance charges?",
    "Train ambulance charges may vary according to the travel distance, train and berth arrangements, medical team, equipment and ambulance transportation required at the pickup and destination locations.",
  ],
  [
    "5. Can a patient travel from Jaipur to Delhi by train ambulance?",
    "A Jaipur-to-Delhi transfer may be considered for patients who are medically suitable for railway travel. The final arrangements depend on the patient's condition, railway availability and the level of medical support required.",
  ],
  [
    "6. Can a doctor or nurse accompany the patient?",
    "A medical attendant, nurse or doctor may be arranged according to the patient's condition and the level of supervision required during the journey.",
  ],
  [
    "7. What equipment is available in a train ambulance from Jaipur?",
    "Depending on the patient's requirements, equipment may include oxygen support, monitoring devices, ventilator assistance, infusion pumps, suction equipment and essential medical supplies.",
  ],
  [
    "8. Does the service include pickup from a Jaipur hospital?",
    "A complete transfer may include road ambulance pickup from a Jaipur hospital or residence, transportation to the railway station and ambulance movement from the destination station to the receiving hospital.",
  ],
  [
    "9. How long does it take to arrange a train ambulance from Jaipur?",
    "The arrangement time depends on railway availability, destination, medical requirements and the urgency of the transfer. Suitable options can be discussed after the patient's travel details are shared.",
  ],
  [
    "10. Is train ambulance travel suitable for critically ill patients?",
    "Rail travel may be suitable only for selected patients after medical assessment. Critically ill or ventilator-dependent patients require careful evaluation and appropriate medical support before the transfer is confirmed.",
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
  alternateName: "Humancare Train Ambulance Service Jaipur",
  description:
    "Need a train ambulance from Jaipur? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-jaipur.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jaipur Junction Railway Station Road, Gopalbari",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.9124, longitude: 75.7873 },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
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
  name: "Train Ambulance Service in Jaipur",
  description:
    "Train Ambulance Service in Jaipur: Organised Medical Travel for Long-Distance Patient Transfers.",
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
      name: "Jaipur",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Jaipur",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-jaipur.jpg`;
  return (
    <>
      <title>
        Train Ambulance Service in Jaipur | Humancare Train Ambulance
      </title>
      <meta
        name="description"
        content="Need a train ambulance from Jaipur? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in jaipur, train ambulance in jaipur, rail ambulance jaipur, patient transfer jaipur, ICU train ambulance jaipur, jaipur to delhi train ambulance, jaipur to mumbai train ambulance, medical train escort jaipur"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Jaipur | Humancare Train Ambulance"
      />
      <meta
        property="og:description"
        content="Need a train ambulance from Jaipur? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Jaipur - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Jaipur | Humancare Train Ambulance"
      />
      <meta
        name="twitter:description"
        content="Need a train ambulance from Jaipur? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Jaipur - Humancare Train Ambulance"
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
function Jaipur() {
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
                    <a href={CONTACT.pageUrl}>Jaipur</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Jaipur</li>
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
                    Train Ambulance Service in Jaipur: Organised Medical Travel
                    for Long-Distance Patient Transfers
                  </h1>
                  <p className="kl-hero-sub">
                    A long-distance patient transfer from Jaipur is more
                    demanding when the patient is unable to travel on his own and
                    would need medical aid during the journey. Humancare Train
                    Ambulance assists relatives and the attending family in
                    organizing the rail based medic support with suitable
                    attending medical staff, oxygen monitoring facilities and road
                    ambulance services. The transfer plan is prepared from
                    hospital pickup in Jaipur till end at admittance hospital
                    based on patient's clinical state, travel needs and receiving
                    hospital guidelines.
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
                      alt="Train Ambulance Service in Jaipur - Organised Medical Travel for Long-Distance Patient Transfers"
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
                  <span className="kl-eyebrow">WHEN TO CONSIDER</span>
                  <h2>
                    When Can a Patient Travel by Train Ambulance from Jaipur?
                  </h2>
                  <p>
                    Patients who are transported by train ambulance from Jaipur
                    are those who are stable, stable enough to travel by train,
                    but require movement assistance, continuous or intermittent
                    observation or basic treatment. The treating physician
                    should assess the patient and authorize the train ambulance
                    transfer.
                  </p>
                  <p>
                    Humancare manages all the critical logistics of a medically
                    assisted Jaipur-rail transfer (medical staff, patient
                    management, railway logistics and ambulance support at both
                    ends of the journey). It could be of benefit to a patient
                    family that needs to transfer the patient from Jaipur to
                    another city for specialist treatment, a second opinion or
                    admission and subsequent convalescence or supervised
                    repatriation.
                  </p>
                  <p className="kl-mt-12" style={{ fontWeight: 500 }}>
                    The type of support provided depends on the patient's
                    health status, travel duration, and medical requirements.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Jaipur"
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
                <span className="kl-eyebrow">HOW WE HELP FAMILIES</span>
                <h2>How Humancare Arranges Patient Transfers from Jaipur</h2>
                <p>
                  A medically supported train journey involves several
                  connected arrangements. The patient's hospital, medical
                  escort, railway travel, and road transportation must be
                  coordinated properly to reduce difficulties during the
                  transfer. Humancare helps manage these arrangements according
                  to the patient's individual requirements.
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
                  <span className="kl-eyebrow">PATIENT-CENTRIC SETUP</span>
                  <h2>
                    Medical Support Equipment for Train Transfers from Jaipur
                  </h2>
                  <p>
                    What sort of devices you carry with you during the train
                    ambulance ride depends first on what condition your patient
                    is and second on how high level of medical attention is
                    going to be needed during the trip. The Humancare
                    organization will be responsible for preparing all required
                    hardware as well as arranging the medical staff for the
                    given transfer.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Jaipur"
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
                  Medical Escort Choices for Jaipur Train Ambulance Services
                </h2>
                <p>
                  The medical escort is selected according to the patient's
                  condition, travel duration and the level of supervision
                  recommended by the treating doctor.
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
                  Patients Who May Need Supported Railway Transportation
                </h2>
                <p>
                  A train ambulance may be considered for patients who are
                  medically suitable for a prolonged journey but need assistance
                  during travel. Common transfer requirements may include:
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
                The suitability of railway travel depends on the patient's
                medical condition and the treating doctor's assessment. Patients
                who need urgent or intensive transportation may require another
                medical transfer option.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes from Jaipur to Major Indian Cities</h2>
                <p>
                  Humancare helps families coordinate long-distance patient
                  transfers from Jaipur to different Indian cities, depending on
                  railway availability, medical requirements and arrangements at
                  the receiving facility.
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
                <h2>How to Arrange a Train Ambulance Booking from Jaipur</h2>
                <p>
                  Providing complete medical and travel information in advance
                  helps the team prepare the patient's transfer more
                  effectively.
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
                  <h2>What Influences Train Ambulance Cost from Jaipur?</h2>
                  <p>
                    The train ambulance cost from Jaipur depends on the
                    patient's medical condition, destination, journey duration
                    and the level of assistance required. Therefore, the train
                    ambulance price may differ from one patient to another.
                  </p>
                  <p className="kl-mt-12">
                    The final train ambulance charges may include railway
                    arrangements, medical staff, equipment, patient handling and
                    road ambulance transportation. These requirements are
                    reviewed before the quotation is prepared.
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
                  <p className="kl-mt-16" style={{ fontWeight: 600 }}>
                    For an accurate train ambulance price, contact our team with
                    the patient's condition, pickup location and destination.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Jaipur"
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
                <h2>Train Ambulance Compared With Air Ambulance</h2>
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
                <h2>Areas Covered Around Jaipur</h2>
                <p>
                  Our road ambulance network can help coordinate patient pickup
                  and drop-off across Jaipur and nearby areas, depending on
                  availability and the requirements of the transfer:
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
                  Train Ambulance Service in Jaipur — Frequently Asked Questions
                </h2>
                <p>
                  Answers to common questions families ask about arranging a
                  train ambulance in Jaipur, medical support, booking, routes
                  and patient transportation by rail. These FAQs are also
                  structured to support clear answers for search engines and
                  AI-generated results.
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Jaipur?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Jaipur, with suitable medical staff, equipment,
                railway coordination, and patient transfer support based on the
                patient's needs.
              </p>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup location, and
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

export default Jaipur;
