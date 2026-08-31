/**
 * Delhi.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Delhi.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-delhi",
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
  "One coordinated service for the patient's complete Delhi-to-destination transfer",
  "Medical escort and essential patient-care equipment based on clinical requirements",
  "Practical option for eligible patients requiring long-distance transportation by rail",
  "Road ambulance coordination for hospital pickup in Delhi and transfer to the receiving hospital",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Escort Matched to the Patient",
    text: "The medical team is selected according to the patient's condition and transfer requirements. Medical professionals can provide monitoring, medication support and assistance throughout the rail journey.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Transfer Assistance",
    text: "Our coordination team is available to help families arrange a train ambulance in Delhi, including medical requirements, railway travel arrangements, and ground ambulance coordination.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Transfer",
    text: "We coordinate transportation from the patient's hospital or residence in Delhi to the railway station and arrange onward road ambulance support from the destination station to the receiving hospital.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Clear & Detailed Quotation",
    text: "The train ambulance service in Delhi is quoted according to the route, the patient's medical requirements, train arrangements, medical escort and equipment needed for the transfer.",
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
    title: "Family Communication Throughout the Journey",
    text: "Families can receive updates about the patient's transfer through phone or WhatsApp, helping them stay informed about the journey and important coordination details.",
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
    title: "Support for Different Medical Requirements",
    text: "Our rail ambulance in Delhi can be arranged for patients requiring oxygen, cardiac monitoring, stretcher transportation, post-operative care, or other medical support, depending on the patient's condition.",
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
    text: "A compact ventilator can be arranged for patients who need assisted breathing, allowing respiratory support to continue during the rail journey under medical supervision.",
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
    title: "Vital Signs Monitor",
    text: "The medical team can track ECG, oxygen saturation, blood pressure, heart rate, and other important parameters to identify changes in the patient's condition.",
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
    title: "Cardiac Defibrillator",
    text: "Emergency cardiac equipment is carried when required for the patient's medical profile, enabling the accompanying team to respond promptly to serious cardiac events.",
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
    title: "IV & Medication Pumps",
    text: "Controlled infusion devices help deliver prescribed fluids and medicines at the required rate, particularly for patients who need continuous medication during transportation.",
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
    title: "Medical Oxygen Supply",
    text: "Oxygen cylinders are provided based on the patient's prescribed requirement, with additional supply planned to maintain adequate oxygen availability throughout the journey.",
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
    title: "Portable Suction & Airway Equipment",
    text: "Suction equipment and airway-management supplies assist patients who may need help managing secretions or maintaining a clear airway during transit.",
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
    text: "The onboard medical kit is prepared around the patient's condition and may include emergency medicines, consumables, and other supplies required by the accompanying medical team.",
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
    text: "Specialised patient-transfer equipment helps the team move stretcher-bound patients safely between the Delhi pickup point, railway station, train and destination ambulance.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "For patients needing advanced supervision, the doctor monitors the clinical condition, manages urgent medical situations, and makes necessary treatment decisions during the journey.",
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
    text: "The nurse provides continuous bedside care, records vital signs, supports medication administration, and helps maintain the patient's comfort throughout the rail transfer.",
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
    text: "Attendants assist with stretcher handling, boarding, railway station movement and transfers between the Delhi pickup location, train and destination ambulance.",
  },
  {
    icon: <IconPhone />,
    title: "24×7 Coordination Desk",
    text: "The coordination team handles railway arrangements, ground ambulance scheduling and communication with the sending and receiving hospitals to keep the transfer organised from start to finish.",
  },
];

const CONDITIONS = [
  "Cardiac and post-cardiac patients",
  "Patients requiring ventilator support",
  "Post-operative and post-surgical transfers",
  "Stroke and neurological conditions",
  "Cancer and oncology patients",
  "Orthopaedic and trauma cases",
  "Dialysis and kidney-related patients",
  "Elderly, bedridden and mobility-limited patients",
  "Stable patients returning home after hospital discharge",
  "High-risk pregnancy transfers",
  "Patients travelling for transplant-related follow-up care",
  "Mortal remains / deceased patient transportation",
];

const ROUTES = [
  [
    "Delhi to Kolkata Train Ambulance",
    "A long-distance train ambulance from Delhi for patients travelling to Kolkata for specialised treatment, continued hospital care or a medically supported return journey.",
  ],
  [
    "Delhi to Jabalpur Train Ambulance",
    "Suitable for patients requiring medical assistance while travelling from Delhi to Jabalpur for further treatment, rehabilitation or transfer closer to family.",
  ],
  [
    "Delhi to Prayagraj Train Ambulance",
    "A practical rail transfer option for patients travelling from Delhi to Prayagraj who require medical supervision, stretcher assistance or oxygen support during the journey.",
  ],
  [
    "Delhi to Ranchi Train Ambulance",
    "Helps patients travel from Delhi to Ranchi with appropriate medical support when a regular railway journey may not be suitable for their condition.",
  ],
  [
    "Delhi to Vellore Train Ambulance",
    "An important medical transfer route for patients travelling from Delhi to Vellore for specialised treatment, including care at major hospitals and medical centres in the city.",
  ],
  [
    "Delhi to Chennai Train Ambulance",
    "Designed for long-distance patient transportation from Delhi to Chennai, with medical escort and onboard support planned according to the patient's healthcare requirements.",
  ],
  [
    "Delhi to Hyderabad Train Ambulance",
    "Provides medically supported rail transportation for patients travelling from Delhi to Hyderabad for specialist consultation, surgery, ongoing treatment or recovery care.",
  ],
  [
    "Delhi to Mumbai Train Ambulance",
    "A rail-based patient transfer option between Delhi and Mumbai for patients who require medical supervision, oxygen or assisted transportation throughout the journey.",
  ],
  [
    "Delhi to Patna Train Ambulance",
    "Supports patients travelling from Delhi to Patna for continued medical treatment, post-hospital care or a medically supervised journey back to their home region.",
  ],
  [
    "Delhi to Ahmedabad Train Ambulance",
    "A long-distance Rail ambulance option for patients travelling from Delhi to Ahmedabad, with medical escort, patient-care equipment and ground ambulance coordination arranged according to need.",
  ],
];

const BOOKING = [
  [
    "1. Share Patient & Journey Details",
    "Call or WhatsApp our team with the patient's current medical condition, pickup location in Delhi, present hospital details and intended destination.",
  ],
  [
    "2. Receive a Medical Transfer Plan",
    "Our team reviews the patient's requirements, explores suitable railway options, determines the required medical support and prepares a transfer quotation.",
  ],
  [
    "3. Confirm the Arrangement",
    "Once the plan is approved, we coordinate with the hospital, medical team and ground ambulance service while preparing the patient and required equipment for departure.",
  ],
  [
    "4. Complete Bed-to-Bed Transfer",
    "The patient is collected from the Delhi hospital or residence, transferred to the railway station, medically supported throughout the train journey and handed over to the receiving hospital through the destination-side ambulance.",
  ],
];

const FACTORS = [
  [
    "01",
    "Journey Distance & Destination",
    "A longer journey from Delhi generally involves higher transportation and medical-support costs than a shorter rail transfer to a nearby destination.",
  ],
  [
    "02",
    "Coach, Cabin & Berth Arrangement",
    "The type of railway accommodation required for the patient can affect the overall cost. A private cabin or additional space may cost more than standard berth arrangements.",
  ],
  [
    "03",
    "Medical Team & Level of Care",
    "The patient's condition determines the level of medical supervision required. A critical-care doctor and nurse arrangement will differ in cost from basic medical attendant support.",
  ],
  [
    "04",
    "Equipment & Medical Requirements",
    "The equipment needed during the journey, such as oxygen, ventilator support, patient monitoring, or infusion devices, can influence the quotation based on the patient's condition.",
  ],
  [
    "05",
    "Road Ambulance at Both Ends",
    "The total price may include road ambulance coordination between the hospital or residence and the railway station in Delhi, along with the destination-side transfer to the receiving hospital.",
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
  "New Delhi",
  "Dwarka",
  "Rohini",
  "Saket",
  "Karol Bagh",
  "Vasant Kunj",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurugram",
  "Faridabad",
  "Sonipat",
  "Bahadurgarh",
  "Panipat (on request)",
  "Meerut (on request)",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Delhi?",
    "A train ambulance service in Delhi provides medically supported rail transportation for patients who need assistance during a long-distance journey. Depending on the patient's condition, the transfer may include a medical escort, oxygen, monitoring equipment, stretcher support and road ambulance coordination.",
  ],
  [
    "2. Who can use a train ambulance from Delhi?",
    "Patients who are medically suitable for rail travel can use a train ambulance from Delhi for specialised treatment, post-operative care, rehabilitation, follow-up appointments or returning home after hospitalisation. The required medical support is decided according to the patient's condition.",
  ],
  [
    "3. How do I book a train ambulance in Delhi?",
    "To book a train ambulance in Delhi, contact our coordination team with the patient's medical condition, current location, destination and preferred travel date. We assess the requirements and arrange the railway journey, medical team, equipment and ground transportation.",
  ],
  [
    "4. Does a rail ambulance in Delhi include road ambulance service?",
    "Yes, road ambulance coordination can be arranged at both ends of the journey. The patient can be transferred from the hospital or residence to the railway station in Delhi and from the destination station to the receiving hospital.",
  ],
  [
    "5. Can ventilator patients travel by train ambulance?",
    "Ventilator-dependent patients may be transported by train ambulance when their condition is considered suitable for rail travel. Appropriate respiratory support, monitoring equipment and trained medical personnel can be arranged based on the treating doctor's recommendations.",
  ],
  [
    "6. Which cities can I travel to by train ambulance from Delhi?",
    "A train ambulance from Delhi can be arranged for several major destinations across India, subject to railway availability and the patient's medical requirements. Common destinations include Vellore, Mumbai, Kolkata, Chennai, Hyderabad, Ranchi, Patna, Ahmedabad and Jabalpur.",
  ],
  [
    "7. How much does a train ambulance in Delhi cost?",
    "The cost of a train ambulance in Delhi varies according to the destination, travel distance, berth or coach arrangement, medical escort, equipment, patient condition and road ambulance requirements. A customised quotation is provided after assessing the patient's transfer needs.",
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
  alternateName: "Humancare Train Ambulance Service Delhi",
  description:
    "Get reliable train ambulance service in Delhi with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-delhi.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Delhi Railway Station Area",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.6139, longitude: 77.209 },
  areaServed: [
    { "@type": "City", name: "Delhi" },
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
  name: "Train Ambulance Service in Delhi",
  description:
    "Train Ambulance in Delhi — Safe Long-Distance Patient Transportation.",
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
      name: "Delhi",
      item: `${CONTACT.domain}/delhi`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance in Delhi",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-delhi.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Delhi | ICU Rail Ambulance</title>
      <meta
        name="description"
        content="Get reliable train ambulance service in Delhi with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance in delhi, train ambulance service in delhi, rail ambulance delhi, patient transfer delhi, ICU train ambulance delhi, delhi to vellore train ambulance, delhi to kolkata train ambulance"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Delhi | ICU Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Get reliable train ambulance service in Delhi with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance in Delhi — Safe Long-Distance Patient Transportation"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Delhi | ICU Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Get reliable train ambulance service in Delhi with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance in Delhi — Safe Long-Distance Patient Transportation"
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
function Delhi() {
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
                    <a href="/delhi">Delhi</a>
                  </li>
                  <li aria-current="page">Train Ambulance in Delhi</li>
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
                    Train Ambulance in Delhi — Safe Long-Distance Patient
                    Transportation
                  </h1>
                  <p className="kl-hero-sub">
                    Humancare train ambulance in Delhi can help families get
                    medically equipped rail travel for patients who want to
                    travel from Delhi to another city for specialized treatment,
                    continuous care, or safe return home. We can arrange a
                    medical train ambulance with a medically escorted train from
                    Delhi, equipped with oxygen, monitoring, and handling
                    facilities based on the patient's condition. We provide our
                    train ambulance services with road ambulances for the
                    journey road before and after railway trip so, that our
                    train ambulance service at Delhi offers a convenient mode of
                    transferring patients who cannot do the railway journey by
                    themselves due to some medical condition.
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
                      alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Delhi"
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
                    What is a Train Ambulance Service in Delhi, and Who Needs
                    It?
                  </h2>
                  <p>
                    Delhi ranks as a significant healthcare hub in India with a
                    great number of patients coming from all over the country to
                    get specialist treatment surgeries rehab, and follow-ups. If
                    these patients have to carry on their treatment in one other
                    city a normal train journey may fail to provide the medical
                    attention they might need.
                  </p>
                  <p>
                    A patient on the road for medical treatment by rail will be
                    given a chance for a train ambulance service in Delhi. A
                    patient in a wheelchair or with special needs tends to
                    require a stretcher or a suitable bed, oxygen support,
                    vital-sign monitoring, medical devices and a qualified
                    healthcare professional. The journey is managed by Humancare
                    from the hospital or house in Delhi, through the railway
                    trip and then on to the hospital that is going to receive
                    the patient.
                  </p>
                  <p>
                    Rail ambulances from Delhi are good for those who are
                    capable of handling the longer trip but cannot be left alone
                    without some form of medical care. Those patients may also
                    be traveling from Delhi to places like Vellore Kolkata
                    Mumbai, Chennai Hyderabad Ranchi, Patna or various hospital
                    centres in India. The team of doctors and the medical gear
                    to be used is decided based on one's health condition.
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
                      alt="Medical transport team with patient stretcher at Delhi railway station"
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
                  Our Train Ambulance Team Makes Long-Distance Transfers Easier
                  for Families
                </h2>
                <p>
                  Arranging medical transport from Delhi is very challenging in
                  particular when the medical condition of a patient takes
                  round-the-clock supervision during a prolonged trip by train.
                  We ensure a seamless transition from medical services to
                  travel and ground transfers such that the patient's family are
                  almost entirely free from the burden of other arrangements.
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
                    Medical Equipment for Train Ambulance Transfers from Delhi
                  </h2>
                  <p>
                    The key to arranging long-distance transport of patients is
                    to have both the adequate medical equipment and well-trained
                    support personnel. Humancare sets up the equipment inside a
                    train ambulance from Delhi in the way that suits the medical
                    condition of the patient, to ensure that continuous
                    monitoring, respiratory support, and emergency care will be
                    provided during the journey to the destination city.
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
                <h2>Medical Professionals Who Travel With the Patient</h2>
                <p>
                  A patient who needs medical care can be transferred by train
                  ambulance that will go a long distance from Delhi. Plus
                  medical equipment, this train ambulance also necessitates the
                  presence of competent staff who know how to use the equipment
                  and who can respond to a patient's everchanging condition. The
                  patient's condition, the destination, and the level of medical
                  care needed are the reasons per which the medical team is
                  selected and arranged before the trip begins.
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
                <h2>Conditions of the Patients We Transfer Regularly</h2>
                <p>
                  Our medical team reviews the patient's health status before
                  arranging a train ambulance from Delhi, allowing the level of
                  medical support and onboard equipment to be planned around the
                  transfer. Common patient categories include:
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
                For situations not listed on our page, reach out to our
                coordination team via medical details. We would go over the case
                with the treating physician to decide if a train ambulance
                service is a fit for the situation, otherwise we may recommend a
                different method of medical transportation which would be safer
                for the patient.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes from Delhi</h2>
                <p>
                  Below are some of the commonly requested Train ambulance
                  routes from Delhi. Travel time, train availability and medical
                  arrangements can vary according to the destination, railway
                  schedule and patient's condition.
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
                <h2>Book a Train Ambulance from Delhi in 4 Simple Steps</h2>
                <p>
                  We make the Train ambulance booking process straightforward,
                  helping families arrange medical transportation from Delhi
                  without unnecessary complications during a stressful
                  situation.
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
                  <h2>What Affects Train Ambulance Pricing from Delhi?</h2>
                  <p>
                    The pricing of train ambulances in Delhi depends mainly on
                    patient's condition, length of journey and type of
                    travelling arrangement. Several elements including
                    berth/coach category, accompanying medical staff, medical
                    equipment onboard, availability train seat/berth and
                    additional road ambulance requirements will determine the
                    final quotation. These are all assessed and cross-verified
                    by our team in the process of booking the train ambulance in
                    Delhi, and we will then present the family with a
                    transparent cost break up.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Delhi"
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
                <h2>Service Areas Around Delhi</h2>
                <p>
                  Beyond Delhi city, our road ambulance network can coordinate
                  patient pickup and drop-off across Delhi NCR and nearby areas
                  before and after a train ambulance from Delhi, including:
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
                  Train Ambulance Service in Delhi — Frequently Asked Questions
                </h2>
                <p>
                  Answers to common questions families ask about arranging a
                  train ambulance in Delhi, medical support, booking, routes and
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Delhi?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Delhi, with suitable medical staff, equipment,
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
export default Delhi;
