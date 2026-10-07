/**
 * Ahmedabad.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Ahmedabad.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-ahmedabad",
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
  "Pre-travel review of medical and mobility requirements",
  "Coordination of train travel and safe patient handling",
  "Arrangement of medical personnel and necessary support equipment",
  "Ambulance connectivity from the pickup location to the station and destination hospital",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Patient Condition and Travel Needs",
    text: "We collect details about the patient's diagnosis, current treatment, mobility, oxygen requirement and travel destination to understand the type of support needed.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Selection of Suitable Travel Arrangements",
    text: "Our team reviews available railway options and discusses berth or compartment requirements according to the patient's condition and expected journey duration.",
  },
  {
    tone: "kl-gold",
    icon: <IconUser />,
    title: "Medical Supervision During Transit",
    text: "A medical attendant, nurse or doctor may be arranged to provide supervision, prescribed care and assistance throughout the railway journey.",
  },
  {
    tone: "",
    icon: <IconPin />,
    title: "Station-to-Hospital Transportation",
    text: "Road ambulance support can be coordinated from the patient's Ahmedabad residence or hospital to the railway station and from the destination station to the receiving facility.",
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
    title: "Coordination With Hospitals and Family",
    text: "Important transfer details can be shared with the family and concerned healthcare facilities to help maintain continuity during the movement.",
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
    title: "Support Based on the Patient's Actual Needs",
    text: "The medical team, equipment and transportation arrangements are decided according to the individual patient rather than following a fixed package for every transfer.",
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
    title: "Portable Respiratory Assistance",
    text: "A portable ventilator may be arranged for patients who require breathing support during transportation, subject to medical evaluation and suitable equipment availability.",
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
    title: "Continuous Vital Monitoring",
    text: "Monitoring devices may help observe parameters such as pulse, ECG, oxygen saturation and blood pressure during the journey.",
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
    title: "Oxygen Delivery System",
    text: "Oxygen support may be planned for patients who require supplemental oxygen, with arrangements based on the expected travel duration and clinical requirement.",
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
    title: "Medication Administration Devices",
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
    title: "Suction and Airway Support",
    text: "Suction equipment and airway-care supplies may be included for patients who need assistance with airway clearance or secretion management.",
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
    title: "Patient-Care Supplies",
    text: "The accompanying medical team may carry essential medical supplies according to the patient's treatment plan and anticipated care needs.",
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
    title: "Movement and Transfer Aids",
    text: "Stretchers and patient-transfer equipment may be used while moving the patient between the hospital, ambulance, railway platform, and train compartment.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Specialist Critical-Care Physician",
    text: "A critical-care doctor may be arranged for patients who need advanced supervision, close observation or specialised support during transportation.",
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
    title: "Travel Nurse",
    text: "A nurse may assist with prescribed medicines, vital monitoring, patient positioning and routine nursing care throughout the journey.",
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
    title: "Patient-Care Attendant",
    text: "A trained attendant can help with personal assistance, basic care, mobility and patient comfort during the railway transfer.",
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
    title: "Ambulance Support Team",
    text: "Ambulance attendants assist with stretcher movement, boarding, disembarkation and transfers between the pickup location, railway station and receiving hospital.",
  },
];

const CONDITIONS = [
  "Patients recovering from major operations",
  "Patients needing treatment in another city",
  "Patients travelling for specialist evaluation",
  "Patients requiring post-operative follow-up",
  "Patients recovering from cardiac conditions",
  "Patients with neurological or stroke-related conditions",
  "Patients undergoing cancer treatment",
  "Patients with orthopaedic or trauma-related needs",
  "Patients requiring dialysis or renal care",
  "Elderly patients who need assistance while travelling",
  "Bedridden patients",
  "Patients being transferred after hospital discharge",
  "Patients travelling for rehabilitation",
  "Patients returning home after treatment",
  "Deceased patient transportation",
];

const ROUTES = [
  [
    "Ahmedabad to Mumbai Train Ambulance",
    "Patients may require this route for specialised treatment, rehabilitation, follow-up appointments or continued hospital care in Mumbai.",
  ],
  [
    "Ahmedabad to Delhi Train Ambulance",
    "A medically supported transfer to Delhi may be considered for advanced treatment, specialist consultation, surgery or further medical evaluation.",
  ],
  [
    "Ahmedabad to Pune Train Ambulance",
    "This route may be useful for patients travelling to Pune for rehabilitation, post-operative care, specialist treatment or continued recovery support.",
  ],
  [
    "Ahmedabad to Bengaluru Train Ambulance",
    "Patients may travel to Bengaluru for specialised procedures, consultation, treatment or long-term follow-up care.",
  ],
  [
    "Ahmedabad to Chennai Train Ambulance",
    "A transfer to Chennai may be arranged for patients requiring specialist medical services, planned procedures or continued hospital treatment.",
  ],
  [
    "Ahmedabad to Hyderabad Train Ambulance",
    "This route may be considered for patients travelling to Hyderabad for advanced consultation, treatment or post-discharge care.",
  ],
  [
    "Ahmedabad to Kolkata Train Ambulance",
    "Patients may require medically supported transportation to Kolkata for specialised treatment, continued care or a supported return journey.",
  ],
  [
    "Ahmedabad to Varanasi Train Ambulance",
    "A train ambulance transfer to Varanasi may be considered for continued treatment, recovery support or returning home after medical care.",
  ],
  [
    "Ahmedabad to Lucknow Train Ambulance",
    "Patients may travel to Lucknow for specialist consultation, treatment, rehabilitation or follow-up care.",
  ],
  [
    "Ahmedabad to Patna Train Ambulance",
    "A transfer to Patna may be arranged for patients requiring further treatment, medical evaluation or continued care.",
  ],
];

const BOOKING = [
  [
    "1. Send the Patient's Transfer Information",
    "Provide details about the patient's current condition, medical reports, Ahmedabad pickup address, hospital information and destination city.",
  ],
  [
    "2. Identify the Required Medical Assistance",
    "Our team discusses the patient's mobility, oxygen needs, monitoring requirements, medical escort, and other support needed during the journey.",
  ],
  [
    "3. Organise the Train and Ground Movement",
    "Suitable railway arrangements, patient handling, medical support, and ambulance transportation are coordinated according to the transfer plan.",
  ],
  [
    "4. Approve the Arrangement and Begin Travel",
    "After confirmation, the team coordinates with the relevant parties and manages the patient's movement from the Ahmedabad pickup location to the destination hospital.",
  ],
];

const FACTORS = [
  [
    "01",
    "Length of the Railway Journey",
    "The distance between Ahmedabad and the destination can influence the overall cost, particularly when the journey requires extended medical supervision.",
  ],
  [
    "02",
    "Passenger and Berth Arrangements",
    "The selected train, berth configuration, patient space and railway requirements may affect the final quotation.",
  ],
  [
    "03",
    "Level of Medical Supervision",
    "The cost may vary depending on whether the patient needs an attendant, nurse, doctor or critical-care specialist.",
  ],
  [
    "04",
    "Clinical Equipment",
    "Oxygen facilities, monitoring equipment, ventilator support, infusion pumps and other medical devices may contribute to the total price.",
  ],
  [
    "05",
    "Ambulance Connectivity",
    "Road ambulance transportation between the Ahmedabad pickup point, railway station and destination hospital may also affect the final charges.",
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
  "Ahmedabad City",
  "Navrangpura",
  "Paldi",
  "Ellis Bridge",
  "Ashram Road",
  "Satellite",
  "Vastrapur",
  "Bodakdev",
  "Thaltej",
  "Sola",
  "Gota",
  "Bopal",
  "Prahlad Nagar",
  "Maninagar",
  "Shahibaug",
  "Memnagar",
  "Chandkheda",
  "Motera",
  "Sabarmati",
  "Naroda",
  "Nikol",
  "Vastral",
  "Isanpur",
  "Vatva",
  "Sarkhej",
  "Sanand",
  "Gandhinagar",
  "Kalol",
  "Changodar",
];

const FAQS = [
  [
    "1. What does a train ambulance service in Ahmedabad provide?",
    "A train ambulance service in Ahmedabad provides medically supported railway transportation for patients who need assistance while travelling to another city. Depending on the patient's condition, the transfer may include medical staff, oxygen support, monitoring equipment, and road ambulance services.",
  ],
  [
    "2. How do I arrange a train ambulance from Ahmedabad?",
    "Contact Humancare with the patient's medical details, pickup location, and destination. Our team will review the requirements and coordinate the railway, medical, and road transportation arrangements.",
  ],
  [
    "3. How much does a train ambulance from Ahmedabad cost?",
    "The train ambulance cost depends on the destination, travel duration, railway arrangements, medical escort, equipment, and ambulance requirements. The final quotation is prepared after reviewing the patient's needs.",
  ],
  [
    "4. Why do train ambulance charges differ between patients?",
    "Train ambulance charges vary because every patient may require a different medical team, equipment, berth arrangement, travel distance and level of road ambulance support.",
  ],
  [
    "5. Can a patient travel from Ahmedabad to Mumbai by train ambulance?",
    "An Ahmedabad-to-Mumbai transfer may be considered for a patient who is medically suitable for railway travel. The final arrangement depends on the patient's condition, railway availability and required medical support.",
  ],
  [
    "6. Is a doctor or nurse provided during the journey?",
    "A doctor, nurse or trained medical attendant may be arranged according to the patient's condition and the level of supervision required during travel.",
  ],
  [
    "7. What medical equipment can be arranged?",
    "Depending on the patient's requirements, equipment may include oxygen support, monitoring devices, ventilator assistance, infusion pumps, suction equipment and essential medical supplies.",
  ],
  [
    "8. Can the patient be picked up from an Ahmedabad hospital?",
    "Yes, a complete transfer may include road ambulance pickup from an Ahmedabad hospital or residence, transportation to the railway station and ambulance support from the destination station to the receiving hospital.",
  ],
  [
    "9. How long does train ambulance booking from Ahmedabad take?",
    "The time required depends on railway availability, destination, medical requirements and the urgency of the transfer. Suitable options can be discussed after the patient's details are shared.",
  ],
  [
    "10. Can critically ill patients travel by train ambulance?",
    "Train travel may be suitable only for selected patients after medical assessment. Critically ill or ventilator-dependent patients require careful evaluation and appropriate medical support before the transfer is confirmed.",
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
  alternateName: "Humancare Train Ambulance Service Ahmedabad",
  description:
    "Need a train ambulance from Ahmedabad? Humancare arranges medically supported rail transfers with medical escorts, oxygen support and road ambulance coordination across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-ahmedabad.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad Junction Railway Station, Kalupur",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380002",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.0225, longitude: 72.5714 },
  areaServed: [
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "AdministrativeArea", name: "Gujarat" },
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
      availableLanguage: ["en", "hi", "gu"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Ahmedabad",
  description:
    "Train Ambulance Service in Ahmedabad: Reliable Rail-Based Patient Transportation with Medical Assistance.",
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
      name: "Ahmedabad",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Ahmedabad",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-ahmedabad.jpg`;
  return (
    <>
      <title>
        Train Ambulance Service in Ahmedabad | Humancare Train Ambulance
      </title>
      <meta
        name="description"
        content="Need a train ambulance from Ahmedabad? Humancare arranges medically supported rail transfers with medical escorts, oxygen support and road ambulance coordination across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in ahmedabad, train ambulance in ahmedabad, rail ambulance ahmedabad, patient transfer ahmedabad, ICU train ambulance ahmedabad, ahmedabad to mumbai train ambulance, ahmedabad to delhi train ambulance, medical train escort ahmedabad"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Ahmedabad | Humancare Train Ambulance"
      />
      <meta
        property="og:description"
        content="Need a train ambulance from Ahmedabad? Humancare arranges medically supported rail transfers with medical escorts, oxygen support and road ambulance coordination across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Ahmedabad - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Ahmedabad | Humancare Train Ambulance"
      />
      <meta
        name="twitter:description"
        content="Need a train ambulance from Ahmedabad? Humancare arranges medically supported rail transfers with medical escorts, oxygen support and road ambulance coordination across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Ahmedabad - Humancare Train Ambulance"
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
function Ahmedabad() {
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
                    <a href={CONTACT.pageUrl}>Ahmedabad</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Ahmedabad</li>
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
                    Train Ambulance Service in Ahmedabad: Reliable Rail-Based
                    Patient Transportation with Medical Assistance
                  </h1>
                  <p className="kl-hero-sub">
                    Transferring a patient from Ahmedabad to a different city
                    with the use of regular trains is not always a medically
                    suitable option, so adequate coordination is essential.
                    Humancare Train Ambulance makes patient transfers by train
                    easier with medical attendants, nursing support, oxygen
                    supply, monitoring devices and road ambulance connections.
                    All the arrangements are made based on the patient's
                    medical condition, the distance that needs to be covered,
                    and the requirements of the receiving hospital.
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
                      alt="Train Ambulance Service in Ahmedabad - Reliable Rail-Based Patient Transportation with Medical Assistance"
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
                    Who Can Benefit from a Train Ambulance from Ahmedabad?
                  </h2>
                  <p>
                    Possible candidate patients for a train ambulance in
                    Ahmedabad are able to undergo a long rail trip, provided
                    their condition enables ambulatory assistance or medical
                    monitoring at different railway stations during the trip.
                    The doctor must first determine this through the patient's
                    medical condition before making an assessment on suitability
                    for the trip by train.
                  </p>
                  <p>
                    Taking of charge at different stages of the transfer
                    process is Humancare which covers medical staff hiring,
                    patient transportation handling, coordination through the
                    railway, and providing ambulance facilities at the initial
                    point and also at the final destination. Patients' families
                    might opt to take benefit of the service when the patient's
                    requirement is to move from Ahmedabad to another location
                    for specialist consultation, post-treatment care, advanced
                    medical treatments, homecoming support or to take advantage
                    of an organized return trip.
                  </p>
                  <p className="kl-mt-12" style={{ fontWeight: 500 }}>
                    The type of assistance provided depends on the patient's
                    medical condition and the level of care recommended before
                    travel.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Ahmedabad"
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
                <h2>
                  How Humancare Manages Patient Transfers from Ahmedabad
                </h2>
                <p>
                  <strong>A Planned Transfer With Medical and Travel Coordination:</strong>{" "}
                  A patient transfer by train involves several connected
                  arrangements. Hospital communication, medical supervision,
                  railway travel, patient movement and road transportation must
                  be planned together. Humancare helps coordinate these
                  requirements so the patient's journey is organised before
                  departure.
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
                    Medical Facilities That May Be Included During the Journey
                  </h2>
                  <p>
                    The equipment required for a train ambulance transfer depends
                    on the patient's health condition and the level of medical
                    supervision needed. Humancare coordinates the relevant
                    equipment after reviewing the transfer requirements.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Ahmedabad"
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
                  Medical Personnel Available for Ahmedabad Train Transfers
                </h2>
                <p>
                  The medical escort is selected according to the patient's
                  condition, the length of the journey and the supervision
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
                  Medical Situations That May Require Supported Train Travel
                </h2>
                <p>
                  A train ambulance may be considered for patients who are
                  medically stable for a prolonged journey but cannot travel
                  independently. Such transfers may be required for:
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
                Whether train travel is suitable depends on the patient's
                medical stability and the treating doctor's recommendation.
                Patients requiring a different level of urgency or critical care
                may need another form of medical transportation.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes from Ahmedabad to Other Cities</h2>
                <p>
                  Humancare helps coordinate rail-based patient transportation
                  from Ahmedabad to several major Indian cities, subject to
                  railway availability, patient requirements and
                  receiving-hospital arrangements.
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
                <h2>
                  Steps to Arrange a Train Ambulance Booking from Ahmedabad
                </h2>
                <p>
                  Sharing complete medical and travel information in advance
                  helps the coordination team prepare the transfer more
                  efficiently.
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
                  <h2>
                    Factors That Influence Train Ambulance Charges from Ahmedabad
                  </h2>
                  <p>
                    The fee to hire a train ambulance from Ahmedabad varies
                    greatly depending, among other things, on the patient's
                    medical condition, final destination, duration of the
                    journey, and the degree of medical attention needed. The
                    train's ambulance fare differs per transportation because of
                    these variations.
                  </p>
                  <p className="kl-mt-12">
                    In the last stage of the quote, the charges include, besides
                    medicines and doctors, railway service, medical personnel,
                    equipment, patient care services, and road ambulance
                    assistance. Such a quote is determined after these elements
                    are discussed and settled upon before fixing the train
                    ambulance fees.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Ahmedabad"
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
                <h2>Is a Train Ambulance Better Than an Air Ambulance?</h2>
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
                <h2>Locations Covered Around Ahmedabad</h2>
                <p>
                  Our road ambulance arrangements may support patient pickup and
                  drop-off across Ahmedabad and nearby areas, depending on
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
                  Train Ambulance Service in Ahmedabad — Frequently Asked Questions
                </h2>
                <p>
                  Answers to common questions families ask about arranging a
                  train ambulance in Ahmedabad, medical support, booking, routes
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Ahmedabad?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Ahmedabad, with suitable medical staff, equipment,
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

export default Ahmedabad;
