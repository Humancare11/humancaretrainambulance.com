/**
 * Lucknow.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Lucknow.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-lucknow",
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
  "Rail transportation planned according to the patient's medical needs",
  "Medical escort and onboard assistance for suitable long-distance transfers",
  "Support for patients who cannot travel independently in a regular coach",
  "Ground ambulance coordination from the pickup location to the destination hospital",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Planning Before Departure",
    text: "Our team reviews the patient's medical reports, mobility, oxygen requirements, current condition, and travel needs before suggesting a suitable train ambulance arrangement.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Support With Railway Arrangements",
    text: "We help coordinate the required railway travel arrangements, suitable berth or coach requirements, travel schedule, and other details related to the patient's journey.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Pickup From Hospital or Residence",
    text: "Road ambulance support can be arranged to move the patient from a hospital, nursing home, or residence in Lucknow to the railway station before departure.",
  },
  {
    tone: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Destination-Side Hospital Transfer",
    text: "At the destination, an ambulance can be coordinated to transfer the patient from the railway station to the receiving hospital or care facility.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Patient-Specific Cost Estimate",
    text: "The train ambulance cost is calculated according to the destination, travel duration, medical team, equipment, railway arrangements, and ambulance services required.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Family Communication and Updates",
    text: "Our coordination team keeps family members informed about the patient's pickup, railway departure, journey progress, arrival, and destination transfer.",
  },
];

const EQUIPMENT = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h4l2-7 4 14 2-7h4" />
      </svg>
    ),
    title: "Ventilator Support",
    text: "A portable ventilator may be arranged for patients who require assisted breathing during travel. Its operation and settings are managed by the accompanying medical professional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Vital Sign Monitoring",
    text: "A multiparameter monitor may be used to observe ECG, oxygen saturation, blood pressure, pulse rate, and other important parameters when required.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Emergency Cardiac Equipment",
    text: "A defibrillator may be included for patients who require advanced medical supervision or may be at risk of cardiac complications during transit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "Controlled Infusion Systems",
    text: "Infusion and syringe pumps may be used for patients requiring controlled delivery of prescribed medicines or intravenous fluids.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Oxygen Arrangement",
    text: "Oxygen cylinders and reserve supply can be planned according to the patient's prescribed oxygen requirement and the expected journey duration.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Airway and Suction Equipment",
    text: "Portable suction and airway-management equipment may be carried for patients who need airway clearance or additional respiratory assistance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
    title: "Essential Emergency Supplies",
    text: "The medical team may carry emergency medicines, dressings, consumables, and other supplies based on the patient's diagnosis and travel requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="18" height="6" rx="1" />
        <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "Stretcher and Transfer Support",
    text: "Stretcher equipment and patient transfer boards may be used to move patients safely between the hospital, railway station, train ambulance, and destination ambulance.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Doctor for Advanced Medical Supervision",
    text: "A doctor may accompany patients who need close clinical observation, advanced interventions, or medical supervision during the rail journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        <path d="M9 8h6" />
      </svg>
    ),
    title: "Nurse for Continuous Patient Care",
    text: "A nurse can assist with vital-sign monitoring, prescribed medicines, IV support, positioning, and routine bedside care during transportation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Medical Attendants for Patient Movement",
    text: "Trained attendants help with stretcher handling, boarding, disembarking, and movement between the hospital, railway station, and ambulance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "Transfer Coordination Team",
    text: "The coordination desk manages railway arrangements, ambulance connections, communication with hospitals, and other logistics involved in the patient transfer.",
  },
];

const CONDITIONS = [
  "Patients recovering after cardiac treatment",
  "Patients requiring ventilator assistance",
  "Individuals travelling after major surgery",
  "Patients with neurological or stroke-related conditions",
  "Cancer and oncology patients",
  "Patients with orthopaedic injuries",
  "Dialysis and kidney-care patients",
  "Elderly or bedridden individuals",
  "Patients returning home after hospital discharge",
  "High-risk pregnancy transfers",
  "Organ transplant patients requiring follow-up care",
  "Transportation of deceased patients or mortal remains",
];

const ROUTES = [
  [
    "Lucknow to Delhi Train Ambulance",
    "This route may be arranged for patients travelling to Delhi for specialised surgery, cancer treatment, cardiac care, neurological treatment, or further consultation.",
  ],
  [
    "Lucknow to Mumbai Train Ambulance",
    "Patients travelling to Mumbai for advanced medical services can receive a coordinated rail transfer with suitable medical assistance and destination-side ambulance support.",
  ],
  [
    "Lucknow to Kolkata Train Ambulance",
    "A medically supported train journey from Lucknow to Kolkata may be considered for patients requiring specialised treatment, rehabilitation, or continued hospital care.",
  ],
  [
    "Lucknow to Hyderabad Train Ambulance",
    "Train ambulance transportation to Hyderabad can be planned for patients travelling for advanced procedures, specialist consultations, or long-term treatment.",
  ],
  [
    "Lucknow to Bengaluru Train Ambulance",
    "This route may be suitable for patients who need to travel to Bengaluru for specialised medical care, rehabilitation, or post-treatment support.",
  ],
  [
    "Lucknow to Chennai Train Ambulance",
    "Patients travelling to Chennai may require oxygen, monitoring, stretcher support, or a medical escort during the long-distance rail journey.",
  ],
  [
    "Lucknow to Ahmedabad Train Ambulance",
    "A train ambulance from Lucknow to Ahmedabad can be coordinated for patients requiring cardiac care, cancer treatment, surgery, or other specialist services.",
  ],
  [
    "Lucknow to Pune Train Ambulance",
    "Patients travelling to Pune for treatment or rehabilitation may receive medical supervision and coordinated road ambulance support during the journey.",
  ],
  [
    "Lucknow to Jaipur Train Ambulance",
    "This route may be arranged for patients travelling to Jaipur for consultation, surgery, recovery, or continued medical care.",
  ],
  [
    "Lucknow to Varanasi Train Ambulance",
    "A train ambulance from Lucknow to Varanasi may be planned for patients requiring monitored transportation between hospitals or medical facilities.",
  ],
];

const BOOKING = [
  [
    "1. Contact Our Coordination Team",
    "Share the patient's medical condition, pickup location, destination city, medical reports, and immediate support requirements by phone or WhatsApp.",
  ],
  [
    "2. Get the Medical Travel Plan",
    "Our team reviews the patient's needs and checks the suitable railway options, medical escort, equipment, and ambulance arrangements required for the transfer.",
  ],
  [
    "3. Approve the Quotation",
    "After discussing the proposed arrangements and train ambulance cost, the family can confirm the booking and provide the required documents.",
  ],
  [
    "4. Complete the Patient Transfer",
    "The patient is collected from the hospital or residence, taken to the railway station, accompanied during the journey, and transferred to the destination hospital with arranged road ambulance support.",
  ],
];

const FACTORS = [
  [
    "01",
    "Route and Total Travel Distance",
    "The destination and journey duration influence the train ambulance charges because longer routes may require additional medical staffing and travel arrangements.",
  ],
  [
    "02",
    "Railway Berth or Coach Arrangement",
    "The type of berth, cabin, coach, and space required for the patient and medical equipment can affect the overall rail ambulance cost.",
  ],
  [
    "03",
    "Medical Staff Required",
    "A patient requiring a doctor, critical-care nurse, or trained medical attendant may have different charges depending on the level of supervision needed.",
  ],
  [
    "04",
    "Equipment and Clinical Support",
    "Oxygen, ventilator support, monitoring equipment, infusion pumps, suction devices, and emergency supplies may influence the train ambulance price.",
  ],
  [
    "05",
    "Ambulance Services Before and After Rail Travel",
    "The cost may also include road ambulance transfers from the hospital or residence to the railway station and from the destination station to the receiving hospital.",
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
  "Gomti Nagar",
  "Indira Nagar",
  "Hazratganj",
  "Aliganj",
  "Mahanagar",
  "Alambagh",
  "Charbagh",
  "Rajajipuram",
  "Jankipuram",
  "Chinhat",
  "Vikas Nagar",
  "Aminabad",
  "Krishna Nagar",
  "Ashiyana",
  "Vrindavan Yojana",
  "Telibagh",
  "Sushant Golf City",
  "Faizabad Road",
  "Sultanpur Road",
  "Kursi Road",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Lucknow?",
    "A train ambulance service in Lucknow provides medically supported rail transportation for patients travelling to another city for treatment, surgery, rehabilitation, follow-up care, or hospital transfer. The service may include a doctor, nurse, medical attendant, equipment, and road ambulance support.",
  ],
  [
    "2. How can I book a train ambulance from Lucknow?",
    "You can contact our team by phone or WhatsApp and share the patient's condition, pickup location, destination, and medical requirements. After reviewing the case, we prepare a suitable travel plan and quotation.",
  ],
  [
    "3. What is the train ambulance cost from Lucknow?",
    "The train ambulance cost depends on the destination, travel duration, railway accommodation, medical escort, equipment, oxygen requirement, and road ambulance services. The final price is provided after assessing the complete transfer.",
  ],
  [
    "4. What are the train ambulance charges in Lucknow?",
    "Train ambulance charges vary according to the patient's medical condition, route, railway arrangements, medical team, equipment, and additional services. A detailed estimate is provided before booking confirmation.",
  ],
  [
    "5. Can a doctor or nurse travel with the patient?",
    "Yes, a doctor, nurse, or trained medical attendant can be arranged according to the patient's medical needs. Critical-care patients may require a doctor and nurse, while stable patients may travel with a trained attendant.",
  ],
  [
    "6. What equipment is available in a Lucknow train ambulance?",
    "Depending on the patient's condition, the train ambulance may include oxygen, ventilator support, multiparameter monitoring, infusion pumps, suction equipment, emergency medicines, and stretcher support.",
  ],
  [
    "7. Is bed-to-bed transfer available?",
    "Yes, bed-to-bed transportation can be coordinated with road ambulance support from the hospital or residence to the railway station and from the destination station to the receiving hospital.",
  ],
  [
    "8. Can train ambulance arrangements be made through IRCTC?",
    "Railway arrangements are coordinated according to the applicable railway process and the availability of seats, berths, or coaches. The team manages the required train ambulance IRCTC-related arrangements for the journey.",
  ],
  [
    "9. Is a train ambulance better than an air ambulance?",
    "The suitable option depends on the patient's condition, urgency, travel distance, and medical requirements. A train ambulance may suit medically stable patients who can tolerate a longer journey, while an air ambulance may be preferred when rapid transportation is necessary.",
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
  alternateName: "Humancare Train Ambulance Service Lucknow",
  description:
    "Looking for train ambulance service in Lucknow? Arrange medically supported rail transfers with doctors, nurses, ICU equipment, oxygen support, and bed-to-bed ambulance coordination across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-lucknow.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Charbagh Railway Station Area",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226004",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.8467, longitude: 80.9462 },
  areaServed: [
    { "@type": "City", name: "Lucknow" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
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
      availableLanguage: ["en", "hi", "ur"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Lucknow",
  description:
    "Lucknow Train Ambulance for Long-Distance Patient Transfers — Medical Assistance During Rail Travel.",
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
      name: "Lucknow",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Lucknow",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-lucknow.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Lucknow | Rail Ambulance</title>
      <meta
        name="description"
        content="Looking for train ambulance service in Lucknow? Arrange medically supported rail transfers with doctors, nurses, ICU equipment, oxygen support, and bed-to-bed ambulance coordination across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in lucknow, train ambulance in lucknow, rail ambulance lucknow, patient transfer lucknow, ICU train ambulance lucknow, lucknow to delhi train ambulance, lucknow to mumbai train ambulance, medical train escort lucknow"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.8467;80.9462" />
      <meta name="ICBM" content="26.8467, 80.9462" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Lucknow | Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Looking for train ambulance service in Lucknow? Arrange medically supported rail transfers with doctors, nurses, ICU equipment, oxygen support, and bed-to-bed ambulance coordination across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Lucknow - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Lucknow | Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Looking for train ambulance service in Lucknow? Arrange medically supported rail transfers with doctors, nurses, ICU equipment, oxygen support, and bed-to-bed ambulance coordination across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Lucknow - Humancare Train Ambulance"
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
function Lucknow() {
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
                    <a href={CONTACT.pageUrl}>Lucknow</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Lucknow</li>
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
                    Lucknow Train Ambulance for Long-Distance Patient Transfers
                    — Medical Assistance During Rail Travel
                  </h1>
                  <p className="kl-hero-sub">
                    A patient who calls for a continuous supply of medical
                    attention during the trip may find it difficult to move from
                    Lucknow to another city for specialized treatment. Humancare
                    takes a train ambulance in Lucknow to help patients needing
                    rail transport under supervision, stretcher help, oxygen
                    support, and medical monitoring, and with trained
                    attendants. Lucknow train ambulance can be tailored based on
                    the patient's medical condition and the travel needs. Given
                    the situation, the transfer of the patient could require the
                    use of doctor, nurse, medical attendant, oxygen equipment,
                    monitoring apparatus, and road ambulance support. Our team
                    arranges also the transportation of the patient from the
                    hospital or home to the railway station and from the
                    destination station to the receiving hospital.
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
                      alt="Lucknow Train Ambulance for Long-Distance Patient Transfers — Medical Assistance During Rail Travel"
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
                  <span className="kl-eyebrow">WHY CHOOSE A TRAIN AMBULANCE</span>
                  <h2>
                    Why Choose a Train Ambulance from Lucknow for Long-Distance
                    Medical Travel?
                  </h2>
                  <p>
                    Lucknow is one of the largest medical centres in North India
                    and a significant portion of patients from the city as well
                    as the nearby districts seek advanced treatments in cities
                    like Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata,
                    Jaipur and others. In some cases, even after surgery or
                    hospital discharge, patients need medical attention or
                    support from time to time while returning home or moving to
                    another health facility.
                  </p>
                  <p>
                    Train ambulance service from Lucknow is an option if the
                    patient is medically suitable for traveling by rail, but due
                    to medical condition or other reasons the patient can't
                    travel on a regular passenger train. This service ensures a
                    journey medically planned with suitable equipment, trained
                    health care assistants, and arranged transfers.
                  </p>
                  <p>
                    Depending on the patient’s condition, the train ambulance
                    arrangement may include a stretcher or suitable berth,
                    oxygen support, vital-sign monitoring, prescribed medicines,
                    medical escort, and emergency supplies. The medical setup is
                    not fixed for every patient and is decided after reviewing
                    the patient’s condition and treatment requirements.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Lucknow"
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
                <h2>Coordinated Patient Transfer Services in Lucknow</h2>
                <p>
                  A long-distance patient transfer requires careful planning at
                  every stage. Humancare coordinates the medical team, railway
                  arrangements, equipment, and road ambulance services so
                  families do not have to manage each part of the journey
                  separately.
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
                    Medical Facilities Available During Lucknow Train Ambulance
                    Travel
                  </h2>
                  <p>
                    The equipment arranged inside a train ambulance depends on
                    the patient’s medical condition and the level of care
                    required during transportation. The onboard facilities are
                    selected to support patient safety, monitoring, and comfort
                    during the journey.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Lucknow"
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
                <h2>Medical Team Accompanying Patients from Lucknow</h2>
                <p>
                  The professionals travelling with the patient are selected
                  according to the patient’s medical condition and the level of
                  care required. The transfer team coordinates with the treating
                  hospital before the journey.
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
                  Patients Who May Require Lucknow Train Ambulance Services
                </h2>
                <p>
                  Before arranging a train ambulance in Lucknow, the patient’s
                  current health condition and travel suitability are reviewed.
                  Commonly supported transfers may include:
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
                If the patient has a different medical requirement, share the
                relevant details with our team. We can review the case and
                determine whether a train ambulance service in Lucknow is
                suitable or whether another transportation option may be
                safer.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Common Train Ambulance Routes from Lucknow</h2>
                <p>
                  Humancare arranges train ambulance transfers from Lucknow to
                  major cities across India. The travel route, medical team,
                  equipment, and ground ambulance arrangements are planned
                  according to the patient’s condition.
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
                <h2>How to Arrange a Train Ambulance from Lucknow in 4 Steps</h2>
                <p>
                  Our train ambulance booking process is designed to help
                  families arrange medical transportation with fewer
                  complications and better coordination.
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
                  <h2>What Affects Train Ambulance Cost in Lucknow?</h2>
                  <p>
                    The train ambulance price from Lucknow differs for every
                    patient because the medical requirements, travel distance,
                    railway arrangements, and support services may vary. A final
                    quotation is prepared after reviewing the complete transfer
                    plan.
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
                    Train ambulance charges are shared after assessing the
                    patient's complete requirements. Contact our team for an
                    individual estimate based on the planned journey.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Lucknow"
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
                <h2>Train Ambulance Service Areas Across Lucknow</h2>
                <p>
                  Our train ambulance service in Lucknow supports patient
                  transfers from hospitals, residences, nursing homes, and care
                  facilities across the city and nearby areas. Road ambulance
                  support can be coordinated to connect the patient with the
                  railway station and the receiving hospital:
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
                  Train Ambulance Service in Lucknow — Frequently Asked Questions
                </h2>
                <p>
                  Here are answers to common questions about Lucknow train
                  ambulance booking, medical escorts, railway arrangements,
                  equipment, train ambulance cost, and long-distance patient
                  transfers.
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Lucknow?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Lucknow, with suitable medical staff, equipment,
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

export default Lucknow;
