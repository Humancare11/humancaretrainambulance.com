/**
 * Hyderabad.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Hyderabad.
 * Styles live in the sibling stylesheet ./TrainAmbulanceVaranasi.css.
 * -------------------------------------------------------------------------
 */

import React, { useState } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from "../../assets/City/Hyderabad/what-is-a-train-ambulance-service-in-hyderabad.webp";
import train2 from "../../assets/City/Hyderabad/what-factors-determine-train-ambulance-cost-from-hyderabad.webp";
import HeroBanner from "../../assets/City/Hyderabad/hyderabad-train-ambulance.webp";
import train4 from "../../assets/City/Hyderabad/medical-equipment-used-for-train-ambulance-transfers-in-hyderabad.webp";

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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-hyderabad",
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
  "End-to-end coordination for medical rail transportation from Hyderabad",
  "Medical support planned according to the patient's condition",
  "Suitable option for selected long-distance patient transfers",
  "Ground ambulance coordination available for connecting road transfers",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Support Throughout the Journey",
    text: "Patients can travel with trained medical personnel based on their clinical requirements. The accompanying team can assist with patient monitoring, prescribed medicines, oxygen support, and other necessary care during the journey.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Assistance Available Around the Clock",
    text: "Patient transfers do not always happen during convenient hours. Humancare Train Ambulance provides round-the-clock assistance for families looking to understand their transportation options, discuss medical requirements, and arrange a suitable rail transfer.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Hospital-to-Hospital Transfer Coordination",
    text: "A train journey is only one part of the transportation process. Road ambulance arrangements can be coordinated for transporting the patient between the hospital or residence in Hyderabad, the railway station, and the receiving hospital at the destination.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Transparent Train Ambulance Pricing",
    text: "The train ambulance cost can vary depending on the route, patient's medical condition, type of accommodation, medical equipment, accompanying personnel, and other transportation requirements. The train ambulance price is therefore determined according to the individual transfer plan rather than using a single fixed rate.",
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
    title: "Communication With the Patient's Family",
    text: "Long-distance medical travel can leave families concerned about their patient's journey. The Humancare Train Ambulance team helps keep attendants informed about important transportation arrangements and the progress of the transfer.",
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
    title: "Care Planned Around Patient Needs",
    text: "Every patient has different medical requirements. From basic assistance and oxygen support to continuous monitoring and specialized equipment, the train ambulance can be planned according to the level of care required for the journey.",
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
    title: "Ventilator Support",
    text: "For patients requiring assisted breathing, a portable ventilator may be arranged when clinically appropriate to provide respiratory support during transportation.",
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
    title: "Multiparameter Monitoring",
    text: "Monitoring equipment can help the accompanying medical team observe vital parameters such as ECG, oxygen saturation, blood pressure, and pulse during the journey.",
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
    text: "A defibrillator may be included when required as part of the emergency medical setup, allowing trained medical personnel to respond to certain cardiac emergencies.",
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
    text: "These devices can be used when prescribed medicines or intravenous fluids need to be administered accurately and at controlled rates during transportation.",
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
    title: "Oxygen Supply",
    text: "Patients requiring supplemental oxygen can have an appropriate oxygen supply arranged for the journey. Backup oxygen capacity can also be planned according to travel duration and clinical needs.",
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
    title: "Suction & Airway Equipment",
    text: "Suction equipment and essential airway-support supplies may be arranged for patients who require respiratory assistance or airway management during the transfer.",
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
    title: "Emergency Medical Supplies",
    text: "The medical team can carry essential medicines and supplies appropriate to the patient's condition and the planned journey, supporting the patient's care during transportation.",
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
    title: "Patient Stretcher & Transfer Equipment",
    text: "Suitable stretcher and patient-transfer equipment can assist with moving the patient between the hospital, railway station, and train while helping maintain a safe and comfortable transfer.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "A qualified doctor can accompany patients requiring advanced medical supervision, including those who need close observation, emergency management, or ongoing critical-care support during transportation.",
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
    title: "Critical-Care Nurse",
    text: "The nurse provides continuous bedside care, monitors the patient's condition, administers prescribed medications, and assists with medical procedures throughout the journey.",
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
    title: "Trained Ambulance Attendants",
    text: "Ambulance attendants assist with patient handling and transfers between the hospital, ground ambulance, railway station, and train, helping minimize unnecessary movement and discomfort.",
  },
  {
    icon: <IconPhone />,
    title: "24×7 Coordination Desk",
    text: "Our coordination team manages transportation arrangements, communicates with the family, coordinates pickup and destination logistics, and keeps the transfer organized from start to finish.",
  },
];

const CONDITIONS = [
  "Cardiac patients requiring supervised transportation",
  "Patients dependent on ventilator support",
  "Post-operative and post-surgical transfers",
  "Stroke and other neurological conditions",
  "Cancer and oncology-related transfers",
  "Orthopaedic and trauma cases",
  "Patients undergoing dialysis or requiring renal care",
  "Elderly, weak, or bedridden patients",
  "Patients being discharged and returning home",
  "High-risk pregnancy referrals requiring medical supervision",
  "Patients travelling for transplant-related follow-up care",
  "Transportation of mortal remains",
];

const ROUTES = [
  [
    "Hyderabad to Delhi Train Ambulance",
    "A suitable option for patients travelling from Hyderabad to Delhi for specialized cardiac, neurological, oncology, or other advanced medical treatment, with medical support arranged according to the patient's condition.",
  ],
  [
    "Hyderabad to Mumbai Train Ambulance",
    "Useful for patients requiring treatment at Mumbai's specialized hospitals. The journey can be planned with appropriate medical supervision and equipment for extended rail travel.",
  ],
  [
    "Hyderabad to Chennai Train Ambulance",
    "A practical rail transfer option for patients referred to Chennai for specialized medical care, with the required medical assistance arranged for the duration of the journey.",
  ],
  [
    "Hyderabad to Bangalore Train Ambulance",
    "Suitable for patients travelling to Bangalore for advanced treatment, follow-up care, or specialist consultation, with transportation planned around their medical needs.",
  ],
  [
    "Hyderabad to Kolkata Train Ambulance",
    "Long-distance patient transportation to Kolkata can be coordinated with appropriate medical support, ground transfers, and arrangements for the receiving hospital.",
  ],
  [
    "Hyderabad to Pune Train Ambulance",
    "Patients travelling from Hyderabad to Pune for specialized treatment or rehabilitation can be supported with a medically supervised rail transfer based on their condition.",
  ],
  [
    "Hyderabad to Ahmedabad Train Ambulance",
    "A long-distance medical transportation option for patients referred to Ahmedabad for specialized treatment, with the journey organized around required clinical support.",
  ],
  [
    "Hyderabad to Jaipur Train Ambulance",
    "Humancare Train Ambulance can coordinate rail transportation from Hyderabad to Jaipur for patients who require continued medical care away from home.",
  ],
  [
    "Hyderabad to Lucknow Train Ambulance",
    "A rail-based patient transfer option for patients travelling between Hyderabad and Lucknow, with medical assistance and connecting ground transportation planned as required.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Share the patient's medical condition, current location in Hyderabad, destination, and preferred travel details with our coordination team.",
  ],
  [
    "2. Receive a Transfer Plan & Quote",
    "Our team reviews the patient's requirements, checks suitable railway options, and prepares a transfer plan with an estimated train ambulance cost and required medical support.",
  ],
  [
    "3. Confirm & Prepare",
    "After confirmation, we coordinate the necessary documentation, medical arrangements, railway formalities, and pickup schedule with the family and relevant healthcare providers.",
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "The patient is supported from the initial pickup through the rail journey and onward ground transportation until arrival at the destination hospital.",
  ],
];

const FACTORS = [
  [
    "01",
    "Travel Distance & Destination",
    "The distance between Hyderabad and the receiving city is one of the major factors affecting the overall train ambulance price. Longer journeys generally involve higher transportation and medical-support requirements.",
  ],
  [
    "02",
    "Railway Accommodation & Berth Arrangement",
    "The type of railway accommodation required for the patient can influence the train ambulance charges. The final arrangement depends on availability, patient requirements, privacy needs, and the space needed for medical care.",
  ],
  [
    "03",
    "Medical Team & Level of Care",
    "The medical personnel required during transportation depends on the patient's condition. A patient needing intensive monitoring may require a different level of medical support than someone who is medically stable.",
  ],
  [
    "04",
    "Medical Equipment & Supplies",
    "The equipment required during the journey can affect the overall train ambulance cost. Oxygen, ventilator support, monitoring devices, medicines, consumables, and other specialized equipment are considered according to the patient's medical needs.",
  ],
  [
    "05",
    "Ground Ambulance & Connecting Transfers",
    "The train ambulance service may also require road ambulance transportation between the patient's hospital or residence, railway station, and receiving hospital. The distance and medical requirements for these connecting transfers can contribute to the total cost.",
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
  "Hyderabad",
  "Secunderabad",
  "Banjara Hills",
  "Jubilee Hills",
  "Gachibowli",
  "Madhapur",
  "Kondapur",
  "Hitech City",
  "Kukatpally",
  "Miyapur",
  "Begumpet",
  "Ameerpet",
  "Mehdipatnam",
  "LB Nagar",
  "Uppal",
  "Dilsukhnagar",
  "Shamshabad",
  "Medchal",
  "Rangareddy",
  "Sangareddy",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Hyderabad?",
    "A train ambulance service provides medically supported patient transportation by rail for people who need to travel long distances for treatment, hospital transfer, rehabilitation, or to return home. Medical assistance and required equipment can be arranged according to the patient's condition.",
  ],
  [
    "2. How can I book a train ambulance from Hyderabad?",
    "You can contact Humancare Train Ambulance with the patient's medical details, pickup location, destination, and travel requirements. Our team will assess the case, discuss the available rail and medical arrangements, and provide a suitable transfer plan.",
  ],
  [
    "3. How much does a train ambulance cost from Hyderabad?",
    "The train ambulance cost varies according to the destination, journey distance, railway accommodation, patient's condition, medical team, equipment, and ground ambulance requirements. A customized quotation is provided after reviewing the patient's requirements.",
  ],
  [
    "4. What factors affect train ambulance charges?",
    "Train ambulance charges may depend on the travel route, berth or accommodation arrangement, level of medical supervision, oxygen or ventilator support, medical equipment, accompanying staff, and road ambulance transfers at the starting or destination location.",
  ],
  [
    "5. Can a critical patient travel by train ambulance?",
    "Some medically stable critical-care patients may be transported by train ambulance when rail travel is considered appropriate by the treating medical team. The required medical personnel, equipment, oxygen, monitoring, and other support are planned according to the patient's condition.",
  ],
  [
    "6. Does Humancare Train Ambulance provide medical staff during the journey?",
    "Yes. Medical support can be arranged based on the patient's needs. Depending on the case, the transfer may include a doctor, nurse, or trained medical attendant to provide observation and necessary care throughout the journey.",
  ],
  [
    "7. Is a road ambulance included with the train ambulance service?",
    "Ground ambulance transportation can be coordinated for connecting transfers between the patient's residence or hospital, railway station, and receiving hospital. The exact arrangement depends on the patient's location and transfer requirements.",
  ],
  [
    "8. What is the difference between a train ambulance and a regular train journey?",
    "A regular train journey does not provide dedicated medical supervision or patient-transfer equipment. A train ambulance is planned specifically around the patient's medical requirements and can include medical personnel, oxygen, monitoring equipment, stretcher support, and other necessary arrangements.",
  ],
  [
    "9. How quickly can a train ambulance be arranged from Hyderabad?",
    "The time required depends on railway availability, destination, patient condition, documentation, and the medical support needed. Humancare Train Ambulance can review the requirements and begin coordinating the transfer as soon as the necessary details are available.",
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
  alternateName: "Humancare Train Ambulance Service Hyderabad",
  description:
    "Get reliable train ambulance service in Hyderabad with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-hyderabad.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Secunderabad Railway Station Area",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500003",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.385, longitude: 78.4867 },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
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
      availableLanguage: ["en", "hi", "te"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Hyderabad",
  description:
    "Hyderabad Train Ambulance: Specialized Medical Rail Transport for Long-Distance Patient Transfers.",
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
      name: "Hyderabad",
      item: `${CONTACT.domain}/hyderabad`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance in Hyderabad",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-hyderabad.jpg`;
  return (
    <>
      <title>
        Train Ambulance Service in Hyderabad | Specialized Medical Rail
        Transport
      </title>
      <meta
        name="description"
        content="Humancare Train Ambulance provides medically attended railway transport facility for patients from Hyderabad to different hospitals located in various cities around the country."
      />
      <meta
        name="keywords"
        content="train ambulance in hyderabad, train ambulance service in hyderabad, rail ambulance hyderabad, patient transfer hyderabad, ICU train ambulance hyderabad, hyderabad to delhi train ambulance, hyderabad to mumbai train ambulance"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.3850;78.4867" />
      <meta name="ICBM" content="17.3850, 78.4867" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Hyderabad | Specialized Medical Rail Transport"
      />
      <meta
        property="og:description"
        content="Humancare Train Ambulance provides medically attended railway transport facility for patients from Hyderabad to different hospitals located in various cities around the country."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Hyderabad Train Ambulance: Specialized Medical Rail Transport for Long-Distance Patient Transfers"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Hyderabad | Specialized Medical Rail Transport"
      />
      <meta
        name="twitter:description"
        content="Humancare Train Ambulance provides medically attended railway transport facility for patients from Hyderabad to different hospitals located in various cities around the country."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Hyderabad Train Ambulance: Specialized Medical Rail Transport for Long-Distance Patient Transfers"
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
function Hyderabad() {
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
                    <a href="/hyderabad">Hyderabad</a>
                  </li>
                  <li aria-current="page">Train Ambulance in Hyderabad</li>
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
                    Hyderabad Train Ambulance: Specialized Medical Rail
                    Transport for Long-Distance Patient Transfers
                  </h1>
                  <p className="kl-hero-sub">
                    Getting from one place to another is not only a
                    time-consuming but also a stressful task mostly when the
                    patient is not capable of standing on his feet
                    alone.Humancare Train Ambulance provides medically attended
                    railway transport facility for patients from Hyderabad to
                    different hospitals located in various cities around the
                    country. With this medically attended transport option,
                    patients are assured of continuous medical surveillance,
                    oxygen supply, and other life-supporting systems throughout
                    the trip. The hospital bed from which the patient is being
                    transferred because of illness or injury is arranged by
                    ground ambulance transportation at the starting point and
                    the receiving end so that the bed-to-bed transfer of the
                    patient is not hindered by any obstacles.
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
                      alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Hyderabad"
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
                    What is a Train Ambulance Service in Hyderabad, and When
                    Should You Consider One?
                  </h2>
                  <p>
                    Hyderabad is a major healthcare hub for patients from
                    Telangana as well as the neighboring areas. Although the
                    city is home to some of the best hospitals, at times,
                    patients might either require continuing their treatment in
                    another city or going home after finishing their care.
                    Patient transportation by train ambulance could that means a
                    viable option for a medically supported, lengthy trip mostly
                    for the patients finding it tough making long travel by road
                  </p>
                  <p>
                    A Train Ambulance is a patient transportation system in
                    which medical assistance is provided through India Railway
                    network during the journey. The service can consist of
                    providing the patient a appropriate bed or stretcher oxygen
                    medical instruments medicines the whole support system
                    including the presence of medical staff, depending upon the
                    patients need. The human care Train Ambulance will
                    streamline the medical transport process so that families
                    can plan their journeys without having to personally manage
                    every aspect of the transfer. Rail Ambulance Service is a
                    good option for a patient who is a medically fit for rail
                    journey and yet calls for help that cannot be made at
                    regular passenger travel. Such kind of facility may be opted
                    for example by an intercity hospital transfer, patients who
                    have just recovered and because of this want to go home,
                    elderly patients, or for a very distant journey where going
                    by road would be a physically exhausting.
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
                      alt="Medical transport team with patient stretcher at Hyderabad railway station"
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
                  Our Hyderabad Train Ambulance Team Handles Every Transfer With
                  Care
                </h2>
                <p>
                  Moving a patient from one city to another is much more than
                  making a train journey. Humancare Train Ambulance manages both
                  the medical and transport elements, which enables families to
                  concentrate solely on their patient's care without having to
                  deal with several things themselves.
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
                    Medical Equipment Used for Train Ambulance Transfers in
                    Hyderabad
                  </h2>
                  <p>
                    Medical transportation over a distant and long train trip
                    will only be possible if the right and suitable medical
                    transport devices are chosen for the illness or disease of
                    the patient. The Humancare Train Ambulance will take care of
                    setting up and arranging all that is required from a medical
                    standpoint to make sure that all the support and care that a
                    patient needs remains continuously available for them all
                    the way along the travel. Actually, the precise selection
                    and supply of the equipment will probably be different for
                    various patients.
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
                  A Dedicated Medical Team Supporting Your Patient Throughout
                  the Journey
                </h2>
                <p>
                  A person's medical status and travel needs dictate a patient
                  transfer. The Humancare rail Ambulance staff reach out to the
                  patient's doctors on arrival for information about the level
                  of care needed. Next, a suitable medical team and transport
                  personnel are selected and assigned to go with the patient all
                  the way along the railway transport.
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
                <h2>Conditions of the Patients We Commonly Support</h2>
                <p>
                  Our medical team reviews the patient's condition before the
                  journey and plans the required medical support accordingly.
                  Depending on the patient's needs, a Humancare Train Ambulance
                  transfer may be arranged for:
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
                If the patient's illness is not among the listed conditions, our
                team is happy to still check the matter and talk the best
                transporting method over with the doctor taking care of the
                patient. The possibility of using the train ambulance is
                determined based on the patient's medical condition, length and
                purpose of the journey, and level of medical care the patient
                needs.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes From Hyderabad</h2>
                <p>
                  Humancare Train Ambulance supports long-distance patient
                  transfers from Hyderabad to major healthcare destinations
                  across India. Routes can be planned according to railway
                  availability, patient condition, medical requirements, and the
                  location of the receiving hospital.
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
                  How to Book Our Train Ambulance from Hyderabad in 4 Simple
                  Steps
                </h2>
                <p>
                  We make the booking process straightforward for families
                  arranging long-distance medical transportation from Hyderabad.
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
                    What Factors Determine Train Ambulance Cost from Hyderabad?
                  </h2>
                  <p>
                    It is clear that the train ambulance cost varies per patient
                    and journey. In general way, train ambulance cost can be
                    said to depend on things like the travelling distance, the
                    patient's medical condition at a particular time, the level
                    of care required, railway facilities, and any other
                    additional transportation needed. By assessing these
                    different conditions, Humancare Train Ambulance is enabled
                    to make a transfer plan and prepare a quotation which in
                    turn will help the families get an idea about the train
                    ambulance charges after their journey.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Hyderabad"
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
                <h2>Service Areas Around Hyderabad</h2>
                <p>
                  Our train ambulance service in Hyderabad can be coordinated
                  for patients across the city and surrounding areas. Ground
                  ambulance support can be arranged for pickup and drop-off
                  between hospitals, residences, railway stations, and other
                  required locations, including:
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
                  Train Ambulance Service in Hyderabad — Frequently Asked
                  Questions
                </h2>
                <p>
                  Answers to common questions families ask when arranging
                  medical rail transportation from Hyderabad. These FAQs are
                  designed to provide clear information about train ambulance
                  booking, train ambulance cost, medical support, routes, and
                  patient transfer arrangements.
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
              <h2 className="kl-mt-8">
                Need a Train Ambulance from Hyderabad?
              </h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Hyderabad, with suitable medical staff, equipment,
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

export default Hyderabad;
