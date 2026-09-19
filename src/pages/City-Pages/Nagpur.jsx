/**
 * Nagpur.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Nagpur.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-nagpur",
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
  "Travel planning based on the patient's medical requirements",
  "Doctor, nurse, or medical attendant according to the required care level",
  "Stretcher, oxygen, monitoring, and mobility support when needed",
  "Coordinated ambulance services at the pickup and destination locations",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Patient Condition Assessment",
    text: "Our team reviews the patient's diagnosis, recent treatment, current stability, mobility, oxygen requirement, medication needs, and available medical reports.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Route and Service Planning",
    text: "The proposed destination, journey duration, railway setup, medical escort, equipment, and ambulance requirements are discussed before the booking is confirmed.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Pickup From Home or Hospital",
    text: "A road ambulance may be arranged to collect the patient from a Nagpur hospital, residence, nursing home, or rehabilitation facility and transport them to the railway station.",
  },
  {
    tone: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Arrival-Side Ambulance Coordination",
    text: "A destination ambulance can be planned in advance to take the patient from the arrival station to the receiving hospital or care centre.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Detailed Price Estimation",
    text: "The expected train ambulance cost is explained after considering the route, medical team, railway accommodation, equipment, and ground transportation.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Family Communication",
    text: "Updates regarding patient pickup, train departure, arrival, and hospital handover can be shared with family members through phone or WhatsApp.",
  },
];

const EQUIPMENT = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h4l2-7 4 14 2-7h4" />
      </svg>
    ),
    title: "Portable Breathing Assistance",
    text: "A portable ventilator may be included for patients who require assisted breathing. The equipment is operated by the accompanying medical professional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Vital Parameter Monitoring",
    text: "A multiparameter monitor may be used to observe blood pressure, pulse rate, oxygen saturation, ECG, and other relevant vital signs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Emergency Cardiac Support",
    text: "A defibrillator may be carried when the patient requires advanced cardiac supervision and emergency preparedness.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "IV Medication Control",
    text: "Infusion pumps and syringe pumps may help administer prescribed medicines or IV fluids at a controlled rate.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Oxygen Supply During Transit",
    text: "Oxygen cylinders and backup oxygen may be arranged according to the patient's prescription and expected journey duration.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Airway Clearance Support",
    text: "Suction equipment and airway-management supplies may be carried for patients who need respiratory assistance or airway clearance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
    title: "Patient-Specific Medical Supplies",
    text: "The escort team may carry prescribed medicines, dressings, consumables, and other supplies relevant to the patient's condition.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="18" height="6" rx="1" />
        <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "Safe Transfer Equipment",
    text: "Stretcher facilities and transfer aids may support movement between the hospital, road ambulance, railway coach, and receiving hospital.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Physician for Higher-Level Monitoring",
    text: "A doctor may accompany patients who need advanced observation, complex support, or medical intervention during transportation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        <path d="M9 8h6" />
      </svg>
    ),
    title: "Nurse for Bedside Assistance",
    text: "A nurse can monitor vital signs, administer prescribed medicines, manage IV requirements, and assist with positioning and patient comfort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Attendant for Mobility Support",
    text: "A trained medical attendant may help with stretcher movement, boarding, disembarking, repositioning, and transfers between ambulances and the train.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "Journey Coordination Support",
    text: "The coordination team communicates with the family, hospitals, railway authorities, medical staff, and ambulance providers throughout the transfer.",
  },
];

const PATIENTS = [
  "Patients recovering from major surgery",
  "Individuals requiring ventilator assistance",
  "Cardiac patients travelling for treatment or follow-up",
  "Patients recovering from stroke or neurological conditions",
  "Cancer and oncology patients",
  "Individuals with orthopaedic injuries or restricted mobility",
  "Patients travelling for dialysis or renal treatment",
  "Elderly patients requiring assisted transportation",
  "Bedridden patients moving between hospitals",
  "Patients travelling for post-transplant care",
  "High-risk pregnancy cases",
  "Transportation of deceased patients or mortal remains",
];

const ROUTES = [
  [
    "Nagpur to Delhi Train Ambulance",
    "Patients may travel to Delhi for advanced cardiac care, oncology treatment, neurological procedures, major surgery, or specialist consultation.",
  ],
  [
    "Nagpur to Mumbai Train Ambulance",
    "A train ambulance from Nagpur to Mumbai may be arranged for complex treatment, post-operative care, rehabilitation, or hospital-to-hospital transfer.",
  ],
  [
    "Nagpur to Pune Train Ambulance",
    "Patients travelling to Pune may require supervised transportation for surgery, specialist treatment, rehabilitation, or continued medical care.",
  ],
  [
    "Nagpur to Hyderabad Train Ambulance",
    "A medically supported journey to Hyderabad may be considered for advanced procedures, hospital admission, or follow-up treatment.",
  ],
  [
    "Nagpur to Bengaluru Train Ambulance",
    "Patients travelling to Bengaluru for specialised healthcare or rehabilitation may receive medical escort and equipment based on their condition.",
  ],
  [
    "Nagpur to Chennai Train Ambulance",
    "A train ambulance from Nagpur to Chennai can be coordinated with stretcher support, medical supervision, and road ambulance services at both ends.",
  ],
  [
    "Nagpur to Kolkata Train Ambulance",
    "Patients may travel to Kolkata for specialist consultation, surgery, oncology services, or further medical evaluation.",
  ],
  [
    "Nagpur to Ahmedabad Train Ambulance",
    "This route may be planned for cardiac procedures, cancer treatment, surgery, and other specialised medical services.",
  ],
  [
    "Nagpur to Jaipur Train Ambulance",
    "A medically supported journey to Jaipur may be arranged for treatment, rehabilitation, post-operative care, or specialist evaluation.",
  ],
  [
    "Nagpur to Lucknow Train Ambulance",
    "Patients travelling to Lucknow may receive assistance with medical rail transportation when ordinary passenger travel is not suitable.",
  ],
];

const BOOKING = [
  [
    "1. Share the Patient's Medical Information",
    "Provide the patient's medical reports, diagnosis, current location, destination, mobility status, and requirements such as oxygen or monitoring.",
  ],
  [
    "2. Review the Proposed Transfer",
    "Our team discusses the railway arrangement, medical escort, equipment, pickup ambulance, and destination-side transportation after reviewing the case.",
  ],
  [
    "3. Approve the Service Estimate",
    "Once the train ambulance price and service details are explained, the family can confirm the arrangement and complete the required formalities.",
  ],
  [
    "4. Begin the Coordinated Journey",
    "The patient is collected from the current location, taken to the railway station, accompanied during the train journey, and transferred to the receiving hospital after arrival.",
  ],
];

const FACTORS = [
  [
    "01",
    "Destination and Journey Duration",
    "The route and length of travel influence the train ambulance charges, particularly when medical supervision is required for an extended period.",
  ],
  [
    "02",
    "Railway Accommodation",
    "The berth type, cabin arrangement, space for equipment, and patient-handling requirements may affect the overall rail ambulance cost.",
  ],
  [
    "03",
    "Medical Escort Selection",
    "The price may vary depending on whether the patient requires a doctor, nurse, critical-care professional, or trained medical attendant.",
  ],
  [
    "04",
    "Equipment and Oxygen Requirements",
    "Oxygen, ventilator support, monitoring devices, infusion pumps, suction equipment, medicines, and consumables may contribute to the final quotation.",
  ],
  [
    "05",
    "Road Ambulance Connections",
    "The estimate may include transportation from the patient's location to Nagpur railway station and from the destination station to the receiving hospital.",
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
  "Dharampeth",
  "Sadar",
  "Sitabuldi",
  "Wardha Road",
  "Manish Nagar",
  "Pratap Nagar",
  "Trimurti Nagar",
  "Narendra Nagar",
  "Mihan",
  "Hingna Road",
  "Wadi",
  "Jaripatka",
  "Kamptee Road",
  "Koradi Road",
  "Nandanvan",
  "Mahal",
  "Itwari",
  "Medical Square",
  "Civil Lines",
  "Ajni",
];

const FAQS = [
  [
    "1. What does a train ambulance service in Nagpur include?",
    "A train ambulance service in Nagpur provides medically supported rail transportation for patients travelling to another city. Depending on the case, it may include medical staff, stretcher support, oxygen, monitoring equipment, and road ambulance services.",
  ],
  [
    "2. How can I book a train ambulance from Nagpur?",
    "Contact our team with the patient's medical details, pickup location, destination, and required support. After reviewing the case, we prepare a suitable transfer plan and quotation.",
  ],
  [
    "3. How is the train ambulance cost from Nagpur calculated?",
    "The cost depends on the route, travel duration, railway accommodation, medical escort, equipment, oxygen requirement, and ambulance services at both ends.",
  ],
  [
    "4. Why do train ambulance charges vary?",
    "Patients have different medical and logistical requirements. The need for a doctor, nurse, ventilator, oxygen, monitoring, special railway space, or ground ambulance can change the final charges.",
  ],
  [
    "5. Can a doctor or nurse travel with the patient?",
    "Yes. A doctor, nurse, or trained medical attendant may accompany the patient according to the medical condition and level of supervision required.",
  ],
  [
    "6. What facilities may be available inside the train ambulance?",
    "Depending on the case, the setup may include oxygen, ventilator support, vital monitoring, infusion pumps, suction equipment, emergency supplies, and stretcher assistance.",
  ],
  [
    "7. Can the patient be transferred from one hospital to another?",
    "Yes. Hospital-to-hospital transportation can be coordinated through a road ambulance from the current hospital to Nagpur railway station and another ambulance from the destination station to the receiving hospital.",
  ],
  [
    "8. Are railway arrangements connected with IRCTC?",
    "Railway arrangements are made according to the applicable railway process and availability of seats, berths, or coaches. Train ambulance IRCTC-related requirements are coordinated as part of the journey planning.",
  ],
  [
    "9. Should I choose a train ambulance or an air ambulance?",
    "A train ambulance may suit stable patients who can tolerate a longer journey with medical supervision. An air ambulance may be considered when faster transportation or intensive medical support is necessary. The decision should be based on medical advice.",
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
  alternateName: "Humancare Train Ambulance Service Nagpur",
  description:
    "Book train ambulance service from Nagpur with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-nagpur.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nagpur Junction Railway Station Area, Sitabuldi",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    postalCode: "440001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.1458, longitude: 79.0882 },
  areaServed: [
    { "@type": "City", name: "Nagpur" },
    { "@type": "AdministrativeArea", name: "Maharashtra" },
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
      availableLanguage: ["en", "hi", "mr"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Nagpur",
  description:
    "Nagpur Train Ambulance for Long-Distance Patient Transfers — Medical Care from Departure to Destination.",
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
      name: "Nagpur",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Nagpur",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-nagpur.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Nagpur | Medical Rail Ambulance</title>
      <meta
        name="description"
        content="Book train ambulance service from Nagpur with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in nagpur, train ambulance in nagpur, rail ambulance nagpur, patient transfer nagpur, ICU train ambulance nagpur, nagpur to delhi train ambulance, nagpur to mumbai train ambulance, medical train escort nagpur"
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
      <meta name="geo.placename" content="Nagpur" />
      <meta name="geo.position" content="21.1458;79.0882" />
      <meta name="ICBM" content="21.1458, 79.0882" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Nagpur | Medical Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book train ambulance service from Nagpur with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Nagpur - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Nagpur | Medical Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book train ambulance service from Nagpur with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Nagpur - Humancare Train Ambulance"
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
function Nagpur() {
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
                    <a href={CONTACT.pageUrl}>Nagpur</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Nagpur</li>
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
                    Nagpur Train Ambulance for Long-Distance Patient Transfers —
                    Medical Care from Departure to Destination
                  </h1>
                  <p className="kl-hero-sub">
                    When transport of a sick person from a place like Nagpur to
                    other cities in India is the case, it's not easy for the
                    person to get around if oxygen support is needed, the
                    stretcher has to be raised from the bed, constant monitoring
                    is in place, or medicines prescribed to be used with
                    supervision or the like. So, Humancare arrangers for the
                    patients' families a medically equipped train ambulance
                    from Nagpur. A train ambulance from Nagpur is a mobile unit
                    which, given the patient's condition, can be fitted with a
                    doctor, nurse or, trained medical assistant, an area which
                    accommodates the stretcher bed, an oxygen supply station, a
                    few monitoring devices, and the most necessary medical kits.
                    If required, an ambulance on wheels will also be arranged to
                    ferry the patient from their home or the point they are now
                    at via the train station and finally to the hospital.
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
                      alt="Nagpur Train Ambulance for Long-Distance Patient Transfers — Medical Care from Departure to Destination"
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
                  <span className="kl-eyebrow">ORGANISING PATIENT-FRIENDLY RAIL TRAVEL</span>
                  <h2>Organising Patient-Friendly Rail Travel from Nagpur</h2>
                  <p>
                    As Nagpur is a central transportation hub and an important
                    healthcare destination in Maharashtra, it is quite likely
                    that patients from Nagpur and other districts in the
                    surrounding area may have had to travel far to Delhi,
                    Mumbai, Pune, Hyderabad, Bengaluru, Chennai, Kolkata,
                    Ahmedabad, and other cities to receive advanced treatments.
                  </p>
                  <p>
                    The most typical grounds for medical evacuation are
                    procedures on the heart, cancer care, neurological
                    services, significant procedures rehabilitation follow-up
                    care, and the visits of specialists. Stable patients who
                    yet may not be physically sound enough to travel themselves
                    may still need assistance and supervision during medical
                    evacuation.
                  </p>
                  <p>
                    A train ambulance service in Nagpur may be considered after
                    reviewing the patient’s medical condition. The journey can
                    be planned with suitable railway accommodation, stretcher
                    support, oxygen cylinders, monitoring equipment, medical
                    staff, and assistance during boarding and disembarking.
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
                      alt="Medical team preparing patient stretcher for train ambulance transfer at Nagpur"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ WHY US / FAMILY SUPPORT ============ */}
          <section className="kl-section kl-bg-soft" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">FAMILY ASSISTANCE</span>
                <h2>
                  Managing the Practical Requirements of a Medical Train Journey
                </h2>
                <p>
                  A patient transfer involves several connected stages,
                  including hospital pickup, railway arrangements, medical
                  supervision, and destination-side transportation. Humancare
                  helps families coordinate these requirements through a planned
                  transfer process.
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
                <span className="kl-eyebrow">MEDICAL ARRANGEMENT</span>
                <h2>
                  Clinical Equipment Available for a Nagpur Train Ambulance
                </h2>
                <p>
                  The medical setup depends on the patient’s condition and the
                  level of support required during travel. The following
                  facilities may be arranged when medically appropriate.
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
                <span className="kl-eyebrow">CARE TEAM</span>
                <h2>Medical Professionals Who May Accompany the Patient</h2>
                <p>
                  The escort team is selected after reviewing the patient’s
                  medical condition and the level of care required during the
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
                  <span className="kl-eyebrow">PATIENT TRANSFER TYPES</span>
                  <h2>
                    Patients Who May Be Suitable for a Train Ambulance from
                    Nagpur
                  </h2>
                  <p>
                    Every patient is reviewed before rail transportation is
                    arranged. Common categories may include:
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
                    Other medical cases may also be considered after reviewing
                    the patient’s reports and current stability. The treating
                    doctor’s recommendation is important when deciding whether
                    rail transportation is appropriate.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="ICU equipped train ambulance setup for patient transport from Nagpur"
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
                <span className="kl-eyebrow">DESTINATION NETWORK</span>
                <h2>Common Train Ambulance Routes from Nagpur</h2>
                <p>
                  Humancare coordinates medically supported rail transfers from
                  Nagpur to several major cities. The medical team, railway
                  arrangements, equipment, and road ambulance services are
                  planned according to the patient’s requirements.
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
              <div className="kl-mt-16" style={{ textAlign: "center" }}>
                <p>
                  Additional destinations can also be considered depending on
                  railway connectivity, the patient’s medical condition, and the
                  receiving hospital’s requirements.
                </p>
              </div>
            </div>
          </section>

          {/* ============ BOOKING PROCESS ============ */}
          <section className="kl-section" id="booking">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">BOOKING PROCESS</span>
                <h2>Four Steps to Arrange a Train Ambulance from Nagpur</h2>
                <p>
                  Our simple 4-step process ensures clear coordination between
                  doctors, railways, and ground ambulance teams.
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
                  <span className="kl-eyebrow">PRICE INFORMATION</span>
                  <h2>
                    Factors That Influence Train Ambulance Cost from Nagpur
                  </h2>
                  <p>
                    The train ambulance cost from Nagpur varies according to the
                    patient’s medical condition and the arrangements required
                    for the complete journey. The final amount may depend on the
                    following factors.
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
                  <p className="kl-mt-16" style={{ fontSize: "0.9rem" }}>
                    The final train ambulance price is shared after reviewing the
                    patient’s condition, route, and complete transfer
                    requirements. Contact Humancare for a personalised quotation.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Transparent cost estimate for train ambulance service in Nagpur"
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
                <span className="kl-eyebrow">TRANSPORTATION CHOICE</span>
                <h2>
                  Is a Train Ambulance or Air Ambulance Better for Nagpur
                  Transfers?
                </h2>
                <p>
                  Compare key parameters to choose the safest, most suitable
                  transfer mode for your family member.
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
                <span className="kl-eyebrow">SERVICE LOCATIONS</span>
                <h2>Nagpur Areas Covered for Train Ambulance Coordination</h2>
                <p>
                  Our train ambulance service in Nagpur can be arranged from
                  hospitals, homes, nursing facilities, and care centres across
                  the city. Road ambulance support may be coordinated for
                  transportation to the railway station and onward movement at
                  the destination.
                </p>
              </div>
              <div className="kl-areas-cloud">
                {AREAS.map((area) => (
                  <span className="kl-area-tag" key={area}>
                    <IconPin /> {area}
                  </span>
                ))}
              </div>
              <div className="kl-mt-16" style={{ textAlign: "center" }}>
                <p>
                  Transfers from nearby towns and districts may also be planned
                  depending on the patient’s medical condition, railway
                  connectivity, and destination.
                </p>
              </div>
            </div>
          </section>

          {/* ============ FAQS ============ */}
          <section className="kl-section" id="faq">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">FAQ</span>
                <h2>
                  Frequently Asked Questions About Train Ambulance Services in
                  Nagpur
                </h2>
                <p>
                  Clear answers to common questions about booking, medical
                  escorts, equipment, and cost for transfers from Nagpur.
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
              <h2>Need a Train Ambulance from Nagpur?</h2>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup location, and
                destination. Our medical operations desk is available 24x7 to
                arrange railway berths, escort doctors, and ground ambulances.
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

export default Nagpur;
