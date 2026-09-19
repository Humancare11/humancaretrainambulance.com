/**
 * Bhopal.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Bhopal.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-bhopal",
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
  "Medical assessment before arranging the journey",
  "Suitable medical escort based on the patient's condition",
  "Oxygen, stretcher, monitoring, and mobility assistance when required",
  "Road ambulance coordination at the origin and destination",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Information Collection",
    text: "Our team reviews the patient's diagnosis, treatment history, mobility status, oxygen requirement, current condition, and medical reports before recommending a travel arrangement.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Journey Planning",
    text: "The route, expected travel duration, railway requirements, medical escort, equipment, and ambulance connections are discussed with the family in advance.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Pickup From the Current Location",
    text: "A road ambulance may be arranged to collect the patient from a Bhopal hospital, residence, nursing home, or care facility and take them to the railway station.",
  },
  {
    tone: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Destination Transfer Arrangement",
    text: "The receiving-side ambulance can be coordinated to transport the patient from the arrival station to the destination hospital or care centre.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Quotation and Service Explanation",
    text: "The expected train ambulance cost is explained after considering the patient's condition, route, travel duration, medical team, equipment, and ground transportation.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Communication During the Transfer",
    text: "Families can receive updates regarding pickup, railway departure, arrival, and handover through phone or WhatsApp communication.",
  },
];

const EQUIPMENT = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h4l2-7 4 14 2-7h4" />
      </svg>
    ),
    title: "Portable Ventilator Support",
    text: "A portable ventilator may be used for patients who need assisted breathing during transportation. It is managed by the accompanying medical professional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Bedside Monitoring",
    text: "A multiparameter monitor may help track blood pressure, pulse rate, oxygen saturation, ECG, and other relevant vital signs during the journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Defibrillator Availability",
    text: "A defibrillator may be included for patients who require advanced cardiac observation and emergency support.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "Infusion and Syringe Pumps",
    text: "These devices may be used to administer prescribed medicines or IV fluids at a controlled rate during transit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Medical Oxygen Supply",
    text: "Oxygen cylinders and reserve oxygen may be arranged based on the patient's prescription, oxygen dependency, and expected journey duration.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Suction and Airway Equipment",
    text: "Suction devices and airway-management supplies may be carried for patients who require assistance with airway clearance or respiratory care.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
    title: "Emergency Medical Supplies",
    text: "The medical team may carry prescribed medicines, dressings, consumables, and other emergency supplies relevant to the patient's condition.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="18" height="6" rx="1" />
        <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "Stretcher and Transfer Aids",
    text: "Stretcher facilities, transfer boards, and other handling equipment may support safe movement between the hospital, ambulance, railway coach, and receiving hospital.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Doctor for Advanced Medical Supervision",
    text: "A doctor may accompany patients who need closer observation, advanced support, or the possibility of medical intervention during travel.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        <path d="M9 8h6" />
      </svg>
    ),
    title: "Nurse for Ongoing Bedside Care",
    text: "A nurse can monitor vital signs, administer prescribed medicines, manage IV requirements, and assist with patient comfort and positioning.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Trained Attendant for Patient Handling",
    text: "A trained medical attendant can help with stretcher movement, boarding, disembarking, repositioning, and transfers between the ambulance and train.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "Coordination Team for Travel Management",
    text: "The coordination team communicates with the family, hospitals, railway authorities, medical staff, and ambulance providers to keep the transfer organised.",
  },
];

const CONDITIONS = [
  "Patients recovering from major surgery",
  "Individuals requiring ventilator assistance",
  "Cardiac patients travelling for treatment or follow-up",
  "Patients recovering from stroke or neurological illness",
  "Cancer and oncology patients",
  "Patients with orthopaedic injuries or mobility limitations",
  "Individuals travelling for dialysis or renal treatment",
  "Elderly patients requiring assisted transportation",
  "Bedridden patients moving between hospitals",
  "Patients requiring post-transplant consultation",
  "High-risk pregnancy transfers",
  "Transportation of deceased patients or mortal remains",
];

const ROUTES = [
  [
    "Bhopal to Delhi Train Ambulance",
    "Patients may travel to Delhi for advanced cardiac care, cancer treatment, neurological procedures, surgery, or specialist consultations.",
  ],
  [
    "Bhopal to Mumbai Train Ambulance",
    "A train ambulance from Bhopal to Mumbai may be arranged for complex medical treatment, post-operative care, rehabilitation, or hospital transfer.",
  ],
  [
    "Bhopal to Pune Train Ambulance",
    "Patients travelling to Pune may require supervised transportation for surgery, specialist treatment, rehabilitation, or continued medical care.",
  ],
  [
    "Bhopal to Ahmedabad Train Ambulance",
    "This route may support patients travelling for cardiac procedures, oncology treatment, surgery, and other specialised healthcare services.",
  ],
  [
    "Bhopal to Hyderabad Train Ambulance",
    "A medically supported rail transfer to Hyderabad may be considered for patients requiring advanced procedures, hospital admission, or follow-up treatment.",
  ],
  [
    "Bhopal to Bengaluru Train Ambulance",
    "Patients travelling to Bengaluru for specialised treatment or rehabilitation may receive medical escort and equipment according to their condition.",
  ],
  [
    "Bhopal to Chennai Train Ambulance",
    "A train ambulance from Bhopal to Chennai can be coordinated with stretcher support, medical supervision, and road ambulance connections.",
  ],
  [
    "Bhopal to Kolkata Train Ambulance",
    "Patients may travel to Kolkata for specialist consultation, surgery, oncology services, or continued hospital-based treatment.",
  ],
  [
    "Bhopal to Jaipur Train Ambulance",
    "A medically supported journey to Jaipur may be planned for treatment, rehabilitation, post-operative care, or further evaluation.",
  ],
  [
    "Bhopal to Lucknow Train Ambulance",
    "Patients travelling to Lucknow may receive assistance with medical rail transportation when independent travel is not suitable.",
  ],
];

const BOOKING = [
  [
    "1. Share the Patient's Medical Details",
    "Provide the patient's reports, diagnosis, current location, destination, mobility status, and requirements such as oxygen, monitoring, or stretcher assistance.",
  ],
  [
    "2. Discuss the Required Arrangements",
    "Our team reviews the case and explains the proposed medical escort, railway setup, equipment, pickup ambulance, and destination-side transfer.",
  ],
  [
    "3. Confirm the Estimate",
    "After the train ambulance price and service details are explained, the family can approve the proposed arrangement and complete the required formalities.",
  ],
  [
    "4. Start the Coordinated Transfer",
    "The patient is collected from the current location, moved to the railway station, accompanied during the train journey, and transferred to the receiving hospital after arrival.",
  ],
];

const FACTORS = [
  [
    "01",
    "Route and Journey Length",
    "The destination and duration of travel influence the overall train ambulance charges, especially when the patient needs medical supervision for an extended period.",
  ],
  [
    "02",
    "Railway Accommodation",
    "The type of berth, coach arrangement, cabin requirement, and space needed for medical equipment may affect the rail ambulance cost.",
  ],
  [
    "03",
    "Medical Escort Requirement",
    "The price may differ depending on whether the patient needs a doctor, nurse, critical-care professional, or trained medical attendant.",
  ],
  [
    "04",
    "Equipment and Oxygen Needs",
    "Ventilator support, oxygen cylinders, monitoring devices, infusion pumps, suction equipment, and emergency supplies may contribute to the final estimate.",
  ],
  [
    "05",
    "Ground Ambulance Services",
    "The quotation may include transportation from the patient's location to Bhopal railway station and from the destination station to the receiving hospital.",
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
  "MP Nagar",
  "Arera Colony",
  "Shahpura",
  "Kolar Road",
  "Hoshangabad Road",
  "Bawadia Kalan",
  "Govindpura",
  "Ayodhya Bypass",
  "Karond",
  "Lalghati",
  "Kohefiza",
  "Hamidia Road",
  "Bairagarh",
  "Ashoka Garden",
  "Govindpura Industrial Area",
  "Berasia Road",
  "Jawahar Chowk",
  "New Minal Residency",
  "Habibganj",
];

const FAQS = [
  [
    "1. What is included in a train ambulance service in Bhopal?",
    "A train ambulance service in Bhopal provides medically supported rail transportation for patients travelling to another city. Depending on the case, it may include medical staff, stretcher support, oxygen, monitoring equipment, and road ambulance services.",
  ],
  [
    "2. How can I book a train ambulance from Bhopal?",
    "Contact our team with the patient's medical details, pickup location, destination, and required support. After reviewing the case, we prepare a suitable travel plan and quotation.",
  ],
  [
    "3. How is the train ambulance cost from Bhopal decided?",
    "The cost depends on the route, journey duration, railway accommodation, medical escort, equipment, oxygen requirement, and ambulance services at both ends.",
  ],
  [
    "4. Why do train ambulance charges vary between patients?",
    "Every patient requires a different level of care. The need for a doctor, nurse, ventilator, oxygen, monitoring, special railway space, or ground ambulance can change the final charges.",
  ],
  [
    "5. Can a nurse or doctor travel with the patient?",
    "Yes. A doctor, nurse, or trained medical attendant may accompany the patient depending on the medical condition and level of supervision required.",
  ],
  [
    "6. What medical facilities may be available inside the train ambulance?",
    "Depending on the case, facilities may include oxygen, ventilator support, vital monitoring, infusion pumps, suction equipment, emergency supplies, and stretcher assistance.",
  ],
  [
    "7. Can the patient be transported from one hospital to another?",
    "Yes. Hospital-to-hospital transportation can be coordinated with a road ambulance from the current hospital to Bhopal railway station and another ambulance from the destination station to the receiving hospital.",
  ],
  [
    "8. Is train ambulance booking connected with IRCTC?",
    "Railway arrangements are made according to the applicable railway process and availability of seats, berths, or coaches. Train ambulance IRCTC-related requirements are coordinated as part of the journey planning.",
  ],
  [
    "9. Is a train ambulance better than an air ambulance?",
    "A train ambulance may be suitable for stable patients who can tolerate a longer journey with medical supervision. An air ambulance may be considered when faster transportation or intensive medical support is necessary. The decision should be based on medical advice.",
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
  alternateName: "Humancare Train Ambulance Service Bhopal",
  description:
    "Book train ambulance service from Bhopal with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-bhopal.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhopal Junction Railway Station Area, Hamidia Road",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.2599, longitude: 77.4126 },
  areaServed: [
    { "@type": "City", name: "Bhopal" },
    { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
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
  name: "Train Ambulance Service in Bhopal",
  description:
    "Bhopal Train Ambulance for Long-Distance Patient Transfers: Medical Support from Pickup to Hospital.",
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
      name: "Bhopal",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Bhopal",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-bhopal.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Bhopal | Medical Rail Ambulance</title>
      <meta
        name="description"
        content="Book train ambulance service from Bhopal with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in bhopal, train ambulance in bhopal, rail ambulance bhopal, patient transfer bhopal, ICU train ambulance bhopal, bhopal to delhi train ambulance, bhopal to mumbai train ambulance, medical train escort bhopal"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Bhopal" />
      <meta name="geo.position" content="23.2599;77.4126" />
      <meta name="ICBM" content="23.2599, 77.4126" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Bhopal | Medical Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book train ambulance service from Bhopal with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Bhopal - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Bhopal | Medical Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book train ambulance service from Bhopal with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Bhopal - Humancare Train Ambulance"
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
function Bhopal() {
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
                    <a href={CONTACT.pageUrl}>Bhopal</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Bhopal</li>
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
                    Bhopal Train Ambulance for Long-Distance Patient Transfers:
                    Medical Support from Pickup to Hospital
                  </h1>
                  <p className="kl-hero-sub">
                    Getting a patient on a stretcher to another city via train
                    when they require oxygen, monitoring, or supervision from
                    time to time can be tough. The Humancare service helps
                    families get one of their medically accompanied train
                    ambulances in Bhopal for patients who qualify and who are on
                    their way to various hospitals in India with their families.
                    Patients on a Bhopal train ambulance can get a doctor, a
                    nurse, a trained medical companion, a stretcher, oxygen
                    facility, monitoring devices, and medicines as per
                    prescriptions as the patient's need. A road ambulance can be
                    arranged between the patient's home/hospital, railway
                    station, and the hospital to which they are admitted.
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
                      alt="Bhopal Train Ambulance for Long-Distance Patient Transfers: Medical Support from Pickup to Hospital"
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
                  <span className="kl-eyebrow">SAFE MEDICAL RAIL TRAVEL</span>
                  <h2>Arranging Safe Medical Rail Travel from Bhopal</h2>
                  <p>
                    Bhopal is the healthcare and transportation hub of Madhya
                    Pradesh. Patients from here and adjacent districts mostly
                    end up going to Delhi, Mumbai, Hyderabad, Bengaluru,
                    Chennai, Pune, Ahmedabad, etc. to get specialist treatment,
                    surgery, cancer care, cardiac procedures, neurologic
                    treatment, and rehabilitation.
                  </p>
                  <p>
                    Some patients might not be physically fit or stable enough
                    to travel after an operation, accident, or discharge from a
                    hospital but are otherwise okay medically. In some
                    instances, they might need a doctor's help on board during
                    the trip. After a careful evaluation by the medical team,
                    train ambulance service in Bhopal is considered.
                  </p>
                  <p>
                    The transfer is planned around the patient’s needs rather
                    than ordinary passenger travel. Depending on the case, the
                    arrangement may include a suitable berth, stretcher
                    support, oxygen cylinders, vital-sign monitoring, medical
                    staff, emergency supplies, and assistance with boarding and
                    disembarking.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Bhopal"
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
                <span className="kl-eyebrow">FAMILY SUPPORT</span>
                <h2>Coordinating Every Stage of a Patient’s Journey from Bhopal</h2>
                <p>
                  A long-distance medical relocation also goes beyond train
                  travel. Families might need assistance with communication at
                  the hospital, arranging a transfer by ambulance, provision of
                  medical equipment, and liaison with the receiving hospital.
                  Humancare can help families sort out all these arrangements by
                  a single comprehensive transfer plan.
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
                  <span className="kl-eyebrow">MEDICAL SETUP</span>
                  <h2>Equipment That May Be Included in a Bhopal Train Ambulance</h2>
                  <p>
                    The medical setup is selected according to the patient’s
                    condition and the level of care required during travel. The
                    following facilities may be arranged when clinically
                    appropriate.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Bhopal"
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
                <span className="kl-eyebrow">MEDICAL ESCORT</span>
                <h2>Professionals Supporting the Patient During Rail Transportation</h2>
                <p>
                  The medical team is selected after reviewing the patient’s
                  condition and the level of supervision required. The assigned
                  professionals help maintain continuity of care throughout the
                  journey.
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
                <span className="kl-eyebrow">PATIENTS WE SUPPORT</span>
                <h2>
                  Medical Conditions That May Require a Train Ambulance from
                  Bhopal
                </h2>
                <p>
                  A patient’s suitability for rail transportation is reviewed
                  before booking. Common transfer categories may include:
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
                Other cases may also be considered after reviewing the
                patient’s medical reports and current stability. The treating
                doctor’s recommendation is important when deciding whether
                rail travel is appropriate.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">DESTINATIONS</span>
                <h2>Major Cities Covered by Our Bhopal Train Ambulance Service</h2>
                <p>
                  Humancare helps coordinate medically supported train journeys
                  from Bhopal to several major treatment destinations. The
                  required medical staff, equipment, railway arrangements, and
                  ground ambulance services are planned according to the
                  patient’s needs.
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
                <span className="kl-eyebrow">BOOKING PROCESS</span>
                <h2>How to Book a Train Ambulance from Bhopal in 4 Steps</h2>
                <p>
                  Follow our simple 4-step coordination flow to ensure safe,
                  well-equipped rail transfer for your loved one.
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
                  <span className="kl-eyebrow">COST DETAILS</span>
                  <h2>What Affects Train Ambulance Cost from Bhopal?</h2>
                  <p>
                    The train ambulance cost from Bhopal depends on the
                    patient's medical requirements and the arrangements needed
                    for the complete journey. The total amount may vary
                    according to the following factors:
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
                    The final train ambulance price is provided after reviewing
                    the patient’s condition, route, and complete transfer
                    requirements. Contact Humancare for a case-specific
                    quotation.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Bhopal"
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
                <span className="kl-eyebrow">TRAVEL OPTIONS</span>
                <h2>Train Ambulance or Air Ambulance for a Patient from Bhopal?</h2>
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
                <span className="kl-eyebrow">SERVICE COVERAGE</span>
                <h2>Areas in Bhopal Covered for Medical Rail Transfers</h2>
                <p>
                  Our train ambulance service in Bhopal can be coordinated from
                  hospitals, residences, nursing homes, and care facilities
                  across the city. Road ambulance support may be arranged for
                  transportation to the railway station and onward movement at
                  the destination:
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
                <span className="kl-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                <h2>Common Questions About Train Ambulance Services in Bhopal</h2>
                <p>
                  Find quick answers about train ambulance booking in Bhopal,
                  escorting doctors, ICU equipment, and intercity patient
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Bhopal?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Bhopal, with suitable medical staff, equipment,
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

export default Bhopal;
