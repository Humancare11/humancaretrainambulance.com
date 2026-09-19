/**
 * Pune.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Pune.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-pune",
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
  "Assessment of the patient's condition before travel",
  "Coordination of railway travel and patient movement",
  "Medical escort and equipment according to the required care level",
  "Road ambulance support between the pickup point, railway station and receiving hospital",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Patient Details Collected Before Planning",
    text: "Our team discusses the patient's current condition, medical history, mobility, pickup location and destination before preparing the transfer arrangements.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Travel Options Reviewed According to Patient Needs",
    text: "Suitable railway options and patient travel requirements are reviewed based on train availability, journey duration and the patient's ability to travel.",
  },
  {
    tone: "kl-gold",
    icon: <IconUser />,
    title: "Medical Escort Arranged for the Journey",
    text: "A trained medical attendant, nurse or doctor may accompany the patient depending on the level of observation, treatment and assistance required during transit.",
  },
  {
    tone: "",
    icon: <IconPin />,
    title: "Ambulance Support From Pune to the Destination",
    text: "Road ambulance transportation can be coordinated from the patient's Pune hospital or residence to the railway station and from the destination station to the receiving facility.",
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
    title: "Family Kept Informed During Coordination",
    text: "Our team communicates important arrangements and transfer updates to family members so they remain informed before and during the journey.",
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
    title: "Support Selected for Each Individual Patient",
    text: "The medical team, equipment and transportation setup are selected according to the patient's condition. The same arrangement is not used for every patient transfer.",
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
    title: "Portable Breathing Support",
    text: "A portable ventilator may be arranged for patients who require assisted breathing during transit, subject to medical assessment and suitable equipment availability.",
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
    title: "Patient Observation Devices",
    text: "Monitoring equipment may be used to observe vital parameters such as ECG, oxygen saturation, blood pressure, pulse and heart rate during the journey.",
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
    text: "Oxygen arrangements are planned according to the patient's requirement, expected travel duration and the equipment needed for safe transportation.",
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
    title: "Infusion and Syringe Pumps",
    text: "Infusion or syringe pumps may be arranged for patients who need controlled administration of prescribed fluids or medicines while travelling.",
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
    title: "Suction and Airway-Care Equipment",
    text: "Suction devices and airway equipment may be included for patients who require assistance with airway management or secretion removal.",
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
    text: "The accompanying medical team carries essential supplies according to the patient's condition, prescribed treatment and expected level of medical care.",
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
    title: "Stretcher and Patient-Movement Equipment",
    text: "Stretcher and transfer equipment help with movement between the Pune pickup location, ambulance, railway station, train compartment and destination hospital.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "A critical-care doctor may be arranged for patients who need advanced medical supervision, intensive monitoring or specialised support during the journey.",
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
    title: "Trained Nurse",
    text: "A nurse can assist with vital-sign monitoring, prescribed medication, patient positioning and ongoing care throughout the railway transfer.",
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
    title: "Medical Attendant",
    text: "A trained medical attendant may help with basic care, patient comfort, mobility and other assistance required during the journey.",
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
    title: "Ambulance Transfer Staff",
    text: "Ambulance attendants assist with stretcher handling, boarding, disembarkation and patient transfers between the Pune location, railway station and receiving hospital.",
  },
];

const CONDITIONS = [
  "Patients recovering after surgery",
  "Patients travelling for specialised treatment",
  "Patients requiring continued hospital care",
  "Patients recovering after a cardiac event",
  "Stroke and neurological patients",
  "Cancer and oncology patients",
  "Orthopaedic and trauma patients",
  "Dialysis and renal-care patients",
  "Elderly patients requiring travel assistance",
  "Bedridden patients",
  "Patients being discharged from a hospital",
  "Patients travelling for specialist consultation",
  "Patients returning home after treatment",
  "Deceased patient transportation",
];

const ROUTES = [
  [
    "Pune to Mumbai Train Ambulance",
    "A Pune-to-Mumbai transfer may be considered for patients travelling for specialised treatment, follow-up care, rehabilitation or continued hospital support.",
  ],
  [
    "Pune to Delhi Train Ambulance",
    "Patients may require a medically supported journey from Pune to Delhi for advanced treatment, specialist consultation, surgery or post-operative care.",
  ],
  [
    "Pune to Bengaluru Train Ambulance",
    "This route may be arranged for patients travelling to Bengaluru for specialised medical services, rehabilitation or continued treatment.",
  ],
  [
    "Pune to Chennai Train Ambulance",
    "A Pune-to-Chennai transfer may be considered for patients requiring medical consultation, planned treatment or further hospital care.",
  ],
  [
    "Pune to Hyderabad Train Ambulance",
    "Patients travelling from Pune to Hyderabad may require support for specialist treatment, follow-up care or post-discharge transportation.",
  ],
  [
    "Pune to Kolkata Train Ambulance",
    "A medically supported transfer to Kolkata may be considered for patients requiring specialised treatment, continued care or a supported return home.",
  ],
  [
    "Pune to Varanasi Train Ambulance",
    "This route may be arranged for patients travelling to Varanasi for continued treatment, recovery care or returning home after hospitalisation.",
  ],
  [
    "Pune to Lucknow Train Ambulance",
    "Patients may travel from Pune to Lucknow for medical consultation, treatment, rehabilitation or post-operative care.",
  ],
  [
    "Pune to Patna Train Ambulance",
    "A Pune-to-Patna transfer may be considered for patients requiring further treatment, specialist consultation or continued medical support.",
  ],
  [
    "Pune to Guwahati Train Ambulance",
    "A long-distance train ambulance from Pune to Guwahati may be arranged for patients returning home or travelling for continued treatment, depending on medical suitability and railway arrangements.",
  ],
];

const BOOKING = [
  [
    "1. Share the Patient's Medical Details",
    "Provide the patient's current condition, medical documents, Pune pickup location, hospital details and destination city to our coordination team.",
  ],
  [
    "2. Discuss the Required Level of Care",
    "Our team reviews the patient's mobility, oxygen requirement, monitoring needs, medical escort and other support required during the journey.",
  ],
  [
    "3. Prepare the Transfer Arrangements",
    "We coordinate suitable railway options, patient movement, medical support and road ambulance transportation from Pune to the railway station and onward to the destination hospital.",
  ],
  [
    "4. Confirm the Journey and Complete the Transfer",
    "Once the arrangements are confirmed, our team coordinates with the concerned parties and manages the patient's movement from the Pune hospital or residence to the receiving facility.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance to the Destination",
    "The distance between Pune and the receiving city can influence the overall cost. Longer journeys may require additional planning and medical arrangements.",
  ],
  [
    "02",
    "Railway and Berth Arrangements",
    "The selected train, berth type, patient space and railway facilities may affect the final train ambulance quotation.",
  ],
  [
    "03",
    "Medical Team Required",
    "The charges may vary depending on whether the patient needs a trained attendant, nurse, doctor or critical-care professional.",
  ],
  [
    "04",
    "Equipment and Oxygen Support",
    "Oxygen arrangements, monitoring devices, ventilator support, infusion pumps and other equipment may influence the total price.",
  ],
  [
    "05",
    "Road Ambulance Transportation",
    "Pickup and drop-off transportation between the Pune location, railway station and receiving hospital may also be included in the overall cost.",
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
  "Pune City",
  "Shivajinagar",
  "Swargate",
  "Kothrud",
  "Deccan",
  "Hadapsar",
  "Kharadi",
  "Viman Nagar",
  "Koregaon Park",
  "Baner",
  "Balewadi",
  "Aundh",
  "Wakad",
  "Hinjawadi",
  "Pimpri",
  "Chinchwad",
  "Bhosari",
  "Nigdi",
  "Yerawada",
  "Kalyani Nagar",
  "Kondhwa",
  "Wanowrie",
  "Camp",
  "Wagholi",
  "Pashan",
  "Bavdhan",
  "Warje",
  "Sinhagad Road",
  "Talegaon",
  "Lonavala",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Pune?",
    "A train ambulance service in Pune is a medically supported railway transfer for patients who need assistance while travelling to another city. Depending on the patient's condition, the service may include a medical escort, oxygen support, monitoring equipment and road ambulance transportation.",
  ],
  [
    "2. How can I book a train ambulance from Pune?",
    "You can contact Humancare with the patient's medical details, Pune pickup location and destination city. Our team will review the requirements and coordinate the railway, medical and ground ambulance arrangements.",
  ],
  [
    "3. What is the train ambulance cost from Pune?",
    "The train ambulance cost depends on the destination, railway arrangements, medical escort, equipment and road ambulance requirements. A quotation can be provided after reviewing the patient's medical and travel needs.",
  ],
  [
    "4. What affects train ambulance charges in Pune?",
    "Train ambulance charges may vary according to the travel distance, train and berth arrangements, medical team, equipment and ambulance transportation required at the pickup and destination locations.",
  ],
  [
    "5. Can a patient travel from Pune to Mumbai by train ambulance?",
    "A Pune-to-Mumbai transfer may be considered for patients who are medically suitable for railway travel. The arrangements depend on the patient's condition, railway availability and the level of medical support required.",
  ],
  [
    "6. Can a nurse or doctor accompany the patient?",
    "A medical attendant, nurse or doctor may be arranged according to the patient's condition and the level of supervision required during the journey.",
  ],
  [
    "7. What equipment can be arranged for a train ambulance from Pune?",
    "Depending on the patient's requirements, equipment may include oxygen support, monitoring devices, ventilator assistance, infusion pumps, suction equipment and essential medical supplies.",
  ],
  [
    "8. Does the service include pickup from a Pune hospital?",
    "A complete transfer may include road ambulance pickup from a Pune hospital or residence, transportation to the railway station and road ambulance movement from the destination station to the receiving hospital.",
  ],
  [
    "9. How quickly can a train ambulance from Pune be arranged?",
    "The arrangement time depends on railway availability, destination, medical requirements and the urgency of the transfer. Our team can discuss suitable options after receiving the patient's travel details.",
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
  alternateName: "Humancare Train Ambulance Service Pune",
  description:
    "Need a train ambulance from Pune? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-pune.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pune Railway Station Area, Agarkar Nagar",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 18.5204, longitude: 73.8567 },
  areaServed: [
    { "@type": "City", name: "Pune" },
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
  name: "Train Ambulance Service in Pune",
  description:
    "Train Ambulance Service in Pune: Coordinated Medical Transfers for Patients Travelling Across India.",
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
      name: "Pune",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Pune",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-pune.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Pune | Humancare Train Ambulance</title>
      <meta
        name="description"
        content="Need a train ambulance from Pune? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in pune, train ambulance in pune, rail ambulance pune, patient transfer pune, ICU train ambulance pune, pune to mumbai train ambulance, pune to delhi train ambulance, medical train escort pune"
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
      <meta name="geo.placename" content="Pune" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Pune | Humancare Train Ambulance"
      />
      <meta
        property="og:description"
        content="Need a train ambulance from Pune? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Pune - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Pune | Humancare Train Ambulance"
      />
      <meta
        name="twitter:description"
        content="Need a train ambulance from Pune? Humancare coordinates medically supported rail transfers with medical escorts, oxygen support and road ambulance arrangements across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Pune - Humancare Train Ambulance"
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
function Pune() {
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
                    <a href={CONTACT.pageUrl}>Pune</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Pune</li>
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
                    Train Ambulance Service in Pune: Coordinated Medical
                    Transfers for Patients Travelling Across India
                  </h1>
                  <p className="kl-hero-sub">
                    Organising for medical transportation to Pune can get
                    tricky, particularly when a patient needs to be accompanied
                    on more than a usual passenger trip. Humancare Train
                    Ambulance comes to the rescue by helping families to prepare
                    for medically aided rail transportation with suitable
                    medical staff, oxygen supplies, monitoring devices, and a
                    road ambulance as necessary. If a patient is to be shifted
                    from a hospital, nursing home, or home in Pune, we will first
                    assess the medical state of the patient, the destination,
                    and plan the journey accordingly.
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
                      alt="Train Ambulance Service in Pune - Coordinated Medical Transfers for Patients Travelling Across India"
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
                  <h2>When Should You Consider a Train Ambulance from Pune?</h2>
                  <p>
                    In addition, it is highly recommended to travel with a
                    railway ambulance if one can receive medical advice that one
                    can travel in train for several hours without risk but has a
                    little difficulty with independent movement. One of the
                    major factors of the decision is that the patient's doctor
                    or health professional should also consult whether railway
                    travel is safe for the patient at the moment.
                  </p>
                  <p>
                    Among the major activities of the Humancare organization
                    during a medical train transfer from Pune, coordination will
                    first and foremost be with the medical staff, patient
                    transportation, railway journey and pick up/drop off point
                    ambulance support. We are happy to provide this kind of
                    service to help those families who require the help of
                    moving a sick person from Pune to another city in order not
                    to miss the time of specialized consultation or
                    post-therapeutic care, including but not limited to
                    physical, occupational, psychological or vocational
                    rehabilitation services, and returning home with support.
                  </p>
                  <p className="kl-mt-12" style={{ fontWeight: 500 }}>
                    The medical support provided during the journey depends on
                    the patient's health status, travel duration and clinical
                    requirements.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Pune"
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
                <h2>How We Coordinate Medical Transfers from Pune</h2>
                <p>
                  A long-distance patient transfer involves more than arranging
                  a train ticket. Families may need to coordinate with the
                  treating hospital, medical team, railway authorities and
                  transportation providers at both ends. Humancare helps bring
                  these arrangements together for a more organised transfer.
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
                  <h2>Medical Equipment for Train Ambulance Travel from Pune</h2>
                  <p>
                    The equipment required for a train ambulance journey depends
                    on the patient's medical condition and the level of support
                    needed during transportation. Humancare coordinates suitable
                    equipment and medical personnel according to the planned
                    transfer.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Pune"
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
                <h2>Medical Escort Options for Pune Train Ambulance Transfers</h2>
                <p>
                  The medical escort is selected according to the patient's
                  condition, travel requirements and treating doctor's advice.
                  The level of supervision may differ for every patient.
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
                <h2>Patients Who May Need Medically Supported Rail Travel</h2>
                <p>
                  A train ambulance may be considered for patients who are
                  medically suitable for a prolonged journey but require
                  assistance during transportation. Common transfer requirements
                  may include:
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
                The suitability of rail travel depends on the patient's medical
                condition and the treating doctor's assessment. If train travel
                is not appropriate, the family can discuss other transportation
                options with the medical team.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance from Pune to Major Indian Cities</h2>
                <p>
                  Humancare helps families coordinate long-distance patient
                  transfers from Pune to different Indian cities, depending on
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
                <h2>How to Book a Train Ambulance from Pune</h2>
                <p>
                  A train ambulance booking becomes easier when the patient's
                  medical information and travel requirements are shared before
                  the journey is planned.
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
                  <h2>What Determines Train Ambulance Cost from Pune?</h2>
                  <p>
                    The train ambulance cost from Pune varies based on the
                    patient's condition, destination, journey duration, and level
                    of medical support required. There is no single train
                    ambulance price applicable to every patient.
                  </p>
                  <p className="kl-mt-12">
                    The final train ambulance charges may also depend on
                    railway arrangements, medical escort, equipment, patient
                    handling and road ambulance transportation. These
                    requirements are reviewed before a quotation is prepared.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Pune"
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
                <h2>
                  Train Ambulance or Air Ambulance: Which Is More Suitable?
                </h2>
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
                <h2>Service Areas Around Pune</h2>
                <p>
                  Our road ambulance network can help coordinate patient pickup
                  and drop-off across Pune and nearby areas, depending on
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
                  Train Ambulance Service in Pune — Frequently Asked Questions
                </h2>
                <p>
                  Answers to common questions families ask about arranging a
                  train ambulance in Pune, medical support, booking, routes and
                  patient transportation by rail. These FAQs are also structured
                  to support clear answers for search engines and AI-generated
                  results.
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Pune?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Pune, with suitable medical staff, equipment, railway
                coordination, and patient transfer support based on the
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

export default Pune;
