/**
 * Indore.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Indore.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-indore",
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
  "Patient-specific planning before the journey",
  "Medical escort selected according to the required care level",
  "Stretcher, oxygen, monitoring, and mobility assistance when needed",
  "Coordinated ambulance support at both ends of the route",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Review of Medical Records",
    text: "The team reviews the patient's diagnosis, recent treatment, current stability, mobility, oxygen dependency, medication needs, and relevant medical reports.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Planning the Route and Care Level",
    text: "The proposed route, travel duration, railway arrangements, medical team, equipment, and ambulance requirements are discussed before the booking is confirmed.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Ambulance Pickup in Indore",
    text: "A road ambulance may collect the patient from a hospital, home, nursing facility, or rehabilitation centre and transport them to the railway station.",
  },
  {
    tone: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Destination Hospital Arrangement",
    text: "The receiving-side ambulance can be scheduled to take the patient from the arrival station to the destination hospital or care facility.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Clear Cost Estimate",
    text: "The expected train ambulance price is explained after reviewing the route, medical support, equipment, railway requirements, and ground transportation.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Updates for the Family",
    text: "The family can receive updates regarding pickup, departure, arrival, and hospital handover through phone or WhatsApp communication.",
  },
];

const EQUIPMENT = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h4l2-7 4 14 2-7h4" />
      </svg>
    ),
    title: "Respiratory Support",
    text: "A portable ventilator may be arranged for patients who need assisted breathing during transportation. The device is handled by the accompanying medical professional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Vital-Sign Observation",
    text: "A multiparameter monitor may be used to observe blood pressure, pulse rate, oxygen saturation, ECG, and other relevant parameters.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Cardiac Emergency Equipment",
    text: "A defibrillator may be carried when the patient requires advanced cardiac monitoring and emergency preparedness.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "Controlled Medicine Administration",
    text: "Infusion pumps and syringe pumps may help deliver prescribed medicines or IV fluids at a controlled rate.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Oxygen and Backup Supply",
    text: "Oxygen cylinders and reserve oxygen may be arranged according to the patient's prescription and the expected duration of travel.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Suction and Airway Management",
    text: "Suction devices and airway supplies may be carried for patients who need assistance with airway clearance or respiratory care.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
    title: "Emergency Consumables",
    text: "The medical team may carry prescribed medicines, dressings, disposable supplies, and other items relevant to the patient's condition.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="18" height="6" rx="1" />
        <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "Stretcher and Transfer Support",
    text: "Stretcher facilities and transfer aids may help move the patient between the hospital, ambulance, railway coach, and receiving hospital.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Doctor for Critical Supervision",
    text: "A doctor may accompany patients who need advanced observation, complex support, or the possibility of medical intervention during the journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        <path d="M9 8h6" />
      </svg>
    ),
    title: "Nurse for Regular Care",
    text: "A nurse can monitor vital signs, administer prescribed medicines, manage IV requirements, and assist with positioning and comfort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Medical Attendant for Physical Assistance",
    text: "A trained attendant may help with stretcher movement, boarding, disembarking, repositioning, and transfers between ambulances and the train.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "Transfer Coordinator",
    text: "The coordination team manages communication between the family, hospitals, railway authorities, medical staff, and ambulance providers.",
  },
];

const CONDITIONS = [
  "Patients recovering from major operations",
  "Individuals dependent on ventilator support",
  "Cardiac patients travelling for treatment or follow-up",
  "Patients recovering from stroke or neurological conditions",
  "Oncology and cancer-care patients",
  "Individuals with orthopaedic injuries",
  "Patients travelling for dialysis or renal treatment",
  "Elderly patients with restricted mobility",
  "Bedridden patients requiring hospital transfer",
  "Patients travelling for post-transplant care",
  "High-risk pregnancy cases",
  "Transportation of deceased patients or mortal remains",
];

const ROUTES = [
  [
    "Indore to Delhi Train Ambulance",
    "Patients may travel to Delhi for advanced cardiac treatment, oncology care, neurological procedures, surgery, or specialist consultation.",
  ],
  [
    "Indore to Mumbai Train Ambulance",
    "A train ambulance from Indore to Mumbai may be arranged for complex treatment, post-operative care, rehabilitation, or hospital-to-hospital transfer.",
  ],
  [
    "Indore to Pune Train Ambulance",
    "Patients travelling to Pune may require medical supervision during the journey for surgery, specialist treatment, or recovery-related care.",
  ],
  [
    "Indore to Ahmedabad Train Ambulance",
    "This route may be planned for patients travelling for cardiac procedures, cancer treatment, surgery, and other specialised medical services.",
  ],
  [
    "Indore to Hyderabad Train Ambulance",
    "A medically supported rail journey to Hyderabad may be considered for advanced procedures, hospital admission, or continued treatment.",
  ],
  [
    "Indore to Bengaluru Train Ambulance",
    "Patients travelling to Bengaluru for specialised healthcare or rehabilitation may receive medical escort and equipment based on their condition.",
  ],
  [
    "Indore to Chennai Train Ambulance",
    "A train ambulance from Indore to Chennai can be arranged with stretcher support, medical supervision, and ambulance connections at both ends.",
  ],
  [
    "Indore to Kolkata Train Ambulance",
    "Patients may travel to Kolkata for specialist treatment, surgery, oncology services, or further medical evaluation.",
  ],
  [
    "Indore to Jaipur Train Ambulance",
    "A medically supported journey to Jaipur may be organised for consultation, surgery, rehabilitation, or post-treatment care.",
  ],
  [
    "Indore to Lucknow Train Ambulance",
    "Patients travelling to Lucknow may receive assistance with medical rail transportation when ordinary travel is not suitable.",
  ],
];

const BOOKING = [
  [
    "1. Submit the Patient's Information",
    "Share the patient's medical reports, diagnosis, current location, destination, mobility status, and requirements such as oxygen or monitoring.",
  ],
  [
    "2. Finalise the Medical Travel Plan",
    "Our team reviews the case and discusses the railway arrangement, medical escort, equipment, pickup ambulance, and destination-side transfer.",
  ],
  [
    "3. Confirm the Quotation",
    "After the train ambulance cost and service details are explained, the family can approve the arrangement and complete the necessary formalities.",
  ],
  [
    "4. Begin the Patient Transfer",
    "The patient is collected from the current location, taken to the railway station, accompanied during the journey, and transferred to the receiving hospital after arrival.",
  ],
];

const FACTORS = [
  [
    "01",
    "Destination and Travel Time",
    "The distance, route, and journey duration influence the train ambulance charges, especially when medical supervision is required for several hours.",
  ],
  [
    "02",
    "Railway Berth or Coach Requirements",
    "The type of berth, cabin arrangement, space for equipment, and patient-handling requirements may affect the overall rail ambulance cost.",
  ],
  [
    "03",
    "Type of Medical Escort",
    "The price may vary depending on whether the patient needs a doctor, nurse, critical-care professional, or trained medical attendant.",
  ],
  [
    "04",
    "Equipment and Medical Supplies",
    "Oxygen, ventilator support, monitors, infusion pumps, suction equipment, medicines, and consumables may contribute to the final quotation.",
  ],
  [
    "05",
    "Origin and Destination Ambulances",
    "The estimate may include road ambulance transportation from the patient's location to Indore railway station and from the destination station to the receiving hospital.",
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
  "Vijay Nagar",
  "Palasia",
  "Bhanwar Kuan",
  "Rau",
  "Rajendra Nagar",
  "Sudama Nagar",
  "Annapurna Road",
  "Bengali Square",
  "Nipania",
  "Scheme No. 54",
  "Scheme No. 78",
  "AB Road",
  "Mhow Naka",
  "Bhawarkua",
  "Geeta Bhawan",
  "Sapna Sangeeta Road",
  "MG Road",
  "Choithram",
  "Airport Road",
];

const FAQS = [
  [
    "1. What does a train ambulance service in Indore include?",
    "A train ambulance service in Indore provides medically supported rail transportation for patients travelling to another city. Depending on the case, it may include medical staff, stretcher support, oxygen, monitoring equipment, and road ambulance services.",
  ],
  [
    "2. How can I book a train ambulance from Indore?",
    "Contact our team with the patient's medical details, pickup location, destination, and required support. After reviewing the case, we prepare a suitable transfer plan and quotation.",
  ],
  [
    "3. How is the train ambulance cost from Indore calculated?",
    "The cost depends on the route, travel duration, railway accommodation, medical escort, equipment, oxygen requirement, and ambulance services at both ends.",
  ],
  [
    "4. Why do train ambulance charges differ?",
    "Patients have different medical and logistical requirements. The need for a doctor, nurse, ventilator, oxygen, monitoring, special railway space, or ground ambulance can change the final charges.",
  ],
  [
    "5. Can a doctor or nurse accompany the patient?",
    "Yes. A doctor, nurse, or trained medical attendant may accompany the patient according to the medical condition and level of supervision required.",
  ],
  [
    "6. What facilities can be arranged inside the train ambulance?",
    "Depending on the case, the setup may include oxygen, ventilator support, vital monitoring, infusion pumps, suction equipment, emergency supplies, and stretcher assistance.",
  ],
  [
    "7. Can the patient be moved from one hospital to another?",
    "Yes. Hospital-to-hospital transportation can be coordinated through a road ambulance from the current hospital to Indore railway station and another ambulance from the destination station to the receiving hospital.",
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
  alternateName: "Humancare Train Ambulance Service Indore",
  description:
    "Book train ambulance service from Indore with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-indore.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Indore Junction Railway Station Area, Chhoti Gwaltoli",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.7196, longitude: 75.8577 },
  areaServed: [
    { "@type": "City", name: "Indore" },
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
  name: "Train Ambulance Service in Indore",
  description:
    "Indore Train Ambulance for Long-Distance Patient Transfers: Medical Assistance Throughout the Journey.",
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
      name: "Indore",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Indore",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-indore.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Indore | Medical Rail Ambulance</title>
      <meta
        name="description"
        content="Book train ambulance service from Indore with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in indore, train ambulance in indore, rail ambulance indore, patient transfer indore, ICU train ambulance indore, indore to delhi train ambulance, indore to mumbai train ambulance, medical train escort indore"
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
      <meta name="geo.placename" content="Indore" />
      <meta name="geo.position" content="22.7196;75.8577" />
      <meta name="ICBM" content="22.7196, 75.8577" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Indore | Medical Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book train ambulance service from Indore with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Indore - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Indore | Medical Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book train ambulance service from Indore with medical escorts, oxygen support, stretcher assistance, ICU equipment, and coordinated patient transfers to cities across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Indore - Humancare Train Ambulance"
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
function Indore() {
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
                    <a href={CONTACT.pageUrl}>Indore</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Indore</li>
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
                    Indore Train Ambulance for Long-Distance Patient Transfers:
                    Medical Assistance Throughout the Journey
                  </h1>
                  <p className="kl-hero-sub">
                    Transporting a patient requiring oxygen, stretcher support,
                    regular monitoring, or assistance with medications from
                    Indore to another city is really daunting. Humancare takes
                    care of families by arranging a medically supported train
                    ambulance for patients from Indore who are going to
                    different hospitals in India. Train medical ambulance
                    services in Indore can have a doctor, nurse, and a trained
                    medical attendant apart from stretcher facilities, oxygen
                    support, monitoring equipment, and prescribed medical
                    supplies given the patient condition. Alternatively, a road
                    ambulance can also be set up between the place where the
                    patient is staying currently, and the railway station where
                    they'll catch the train ambulance, and the destination
                    hospital.
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
                      alt="Indore Train Ambulance for Long-Distance Patient Transfers: Medical Assistance Throughout the Journey"
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
                  <span className="kl-eyebrow">ORGANISING MEDICALLY SUPPORTED RAIL TRAVEL</span>
                  <h2>Organising Medically Supported Rail Travel from Indore</h2>
                  <p>
                    Indore is one of the most important cities in Madhya
                    Pradesh when it comes to healthcare. It is not so rare to
                    see patients going to other big cities like Delhi, Mumbai,
                    Ahmedabad, Pune, Hyderabad, Bengaluru, Chennai and many
                    others for more advanced and better medical procedures.
                    Mainly, patients who have had heart surgery and are
                    receiving cancer treatment, those who need neurological
                    interventions or any major surgical treatment are sent back
                    or have to go to hospitals that can provide those
                    facilities. Rehabilitation and specialist consultations are
                    also major transfers.
                  </p>
                  <p>
                    People who are not physically fit due to surgery, are not
                    able to get around well without support or still depend on
                    medical supervision, may feel uneasy or unable to travel via
                    normal passenger transport. A train ambulance facility in
                    Indore could be the right and safer alternative after the
                    medical examination for such cases.
                  </p>
                  <p>
                    The journey is planned according to the patient’s condition.
                    Depending on the requirements, the arrangement may include a
                    suitable berth, stretcher support, oxygen cylinders,
                    monitoring devices, medical escorts, emergency supplies,
                    and assistance during boarding and disembarking.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Indore"
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
                <span className="kl-eyebrow">FAMILY COORDINATION</span>
                <h2>Helping Families Manage the Complete Patient Transfer</h2>
                <p>
                  A long-distance medical journey involves several stages,
                  including hospital pickup, railway travel, medical
                  supervision, and destination-side transportation. Humancare
                  coordinates these requirements so that families do not have
                  to manage every part separately.
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
                  <span className="kl-eyebrow">MEDICAL EQUIPMENT</span>
                  <h2>
                    Facilities That May Be Arranged Inside an Indore Train
                    Ambulance
                  </h2>
                  <p>
                    The equipment provided during the journey depends on the
                    patient’s medical condition and the level of care
                    prescribed. The following facilities may be included when
                    clinically required.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Indore"
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
                <span className="kl-eyebrow">MEDICAL ESCORT TEAM</span>
                <h2>Medical Professionals Assigned for the Journey</h2>
                <p>
                  The escort team is selected after reviewing the patient’s
                  condition and the level of care required during travel. The
                  team helps maintain continuity of medical support from
                  departure to handover.
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
                <span className="kl-eyebrow">PATIENT CATEGORIES</span>
                <h2>Patients Who May Need a Train Ambulance from Indore</h2>
                <p>
                  A medical review is completed before arranging rail
                  transportation. Common patient categories may include:
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
                Other medical cases may also be considered after reviewing the
                patient’s reports and current stability. The treating doctor’s
                advice is important when deciding whether rail travel is
                appropriate.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">MAJOR DESTINATIONS</span>
                <h2>Train Ambulance Routes Available from Indore</h2>
                <p>
                  Humancare coordinates medically supported rail transfers from
                  Indore to several major cities. The medical team, equipment,
                  railway arrangements, and road ambulance services are
                  selected according to the patient’s needs.
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
                <span className="kl-eyebrow">BOOKING STEPS</span>
                <h2>How to Arrange a Train Ambulance from Indore</h2>
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
                  <span className="kl-eyebrow">COST FACTORS</span>
                  <h2>Understanding Train Ambulance Cost from Indore</h2>
                  <p>
                    The train ambulance cost from Indore varies according to
                    the patient’s medical needs and the arrangements required
                    for the complete transfer. The final amount may depend on
                    the following factors:
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
                    The final train ambulance price is shared after reviewing
                    the patient’s condition, route, and complete transfer
                    requirements. Contact Humancare for a personalised
                    quotation.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Indore"
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
                <span className="kl-eyebrow">TRANSPORTATION COMPARISON</span>
                <h2>
                  Train Ambulance or Air Ambulance for Patients from Indore?
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
                <span className="kl-eyebrow">LOCAL SERVICE AREA</span>
                <h2>Indore Locations Covered for Train Ambulance Coordination</h2>
                <p>
                  Our train ambulance service in Indore can be arranged from
                  hospitals, homes, nursing facilities, and care centres across
                  the city. Road ambulance support may be coordinated for
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
                <span className="kl-eyebrow">FAQ</span>
                <h2>
                  Frequently Asked Questions About Train Ambulance Services in
                  Indore
                </h2>
                <p>
                  Find answers to common questions about booking, escorts,
                  equipment, costs, and transfer arrangements from Indore.
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Indore?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Indore, with suitable medical staff, equipment,
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

export default Indore;
