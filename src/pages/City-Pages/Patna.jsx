/**
 * Patna.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Patna.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-patna",
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
  "Medical travel arrangements based on the patient's condition",
  "Appropriate medical staff for eligible rail transfers",
  "Support with stretcher, oxygen, monitoring, and mobility requirements",
  "Coordinated ambulance movement at the starting and destination locations",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Initial Case Review",
    text: "The team collects relevant information about the patient's diagnosis, recent treatment, mobility, oxygen dependency, medications, and current medical condition before planning the journey.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Travel Arrangement Assistance",
    text: "We help identify the railway travel requirements and coordinate the berth, coach, medical escort, and equipment needed for the patient's transfer.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Pre-Departure Ambulance Support",
    text: "If required, a road ambulance can be arranged to take the patient from a Patna hospital, residence, or care facility to the railway station.",
  },
  {
    tone: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Receiving Hospital Coordination",
    text: "The destination-side transfer can be planned so that an ambulance is available to take the patient from the arrival station to the receiving hospital.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Advance Cost Communication",
    text: "The expected train ambulance price is prepared after considering the route, travel duration, medical team, equipment, and ambulance services involved.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Journey-Related Family Updates",
    text: "Family members can receive updates about the pickup, departure, arrival, and handover process through phone or WhatsApp communication.",
  },
];

const EQUIPMENT = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h4l2-7 4 14 2-7h4" />
      </svg>
    ),
    title: "Assisted Breathing Equipment",
    text: "A portable ventilator may be arranged for patients who need respiratory assistance during travel. The equipment is operated by the accompanying medical professional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3l2 5 4-10 2 5h7" />
      </svg>
    ),
    title: "Continuous Vital Monitoring",
    text: "A multiparameter monitor may be used to observe ECG, oxygen saturation, blood pressure, pulse rate, and other relevant vital signs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    title: "Cardiac Emergency Support",
    text: "A defibrillator may be included when the patient's condition requires advanced cardiac supervision during transportation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M5 9h14M5 15h14" />
      </svg>
    ),
    title: "Medication Delivery Devices",
    text: "Infusion and syringe pumps may support the controlled administration of prescribed medicines or IV fluids during the journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Medical Oxygen Provision",
    text: "Oxygen cylinders and reserve supply may be arranged according to the patient's prescribed requirement and the expected travel time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4v16M6 4h9l-2 4 2 4H6" />
      </svg>
    ),
    title: "Airway Clearance Equipment",
    text: "Suction devices and airway-management supplies may be carried for patients who require assistance with airway clearance or respiratory support.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
    title: "Patient-Specific Emergency Supplies",
    text: "The accompanying team may carry emergency medicines, dressings, consumables, and other essential supplies based on the patient's treatment needs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="10" width="18" height="6" rx="1" />
        <path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      </svg>
    ),
    title: "Safe Movement and Positioning",
    text: "A stretcher and patient transfer board may be used to support movement between the hospital, railway station, train, and destination ambulance.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Doctor-Led Clinical Oversight",
    text: "A doctor may accompany patients who need advanced observation, medical intervention, or closer supervision during the rail journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        <path d="M9 8h6" />
      </svg>
    ),
    title: "Nursing Care During Transit",
    text: "A nurse can provide bedside assistance, monitor vital signs, support prescribed medicines, manage IV requirements, and help maintain patient comfort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Assistance With Transfers and Handling",
    text: "Trained medical attendants help with stretcher movement, boarding, disembarking, positioning, and transfers between the ambulance and railway coach.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    title: "Coordination Between All Transfer Points",
    text: "The coordination team manages communication with the hospitals, railway arrangements, ambulance connections, and other logistical requirements.",
  },
];

const CONDITIONS = [
  "Patients recovering from cardiac procedures",
  "Patients requiring ventilator assistance",
  "Individuals travelling after major surgery",
  "Patients with neurological disorders or stroke-related conditions",
  "Oncology and cancer-care patients",
  "Patients recovering from orthopaedic injuries",
  "Individuals undergoing dialysis or renal treatment",
  "Elderly patients with limited mobility",
  "Bedridden patients travelling after discharge",
  "High-risk pregnancy transfers",
  "Patients requiring post-transplant follow-up",
  "Transportation of deceased patients or mortal remains",
];

const ROUTES = [
  [
    "Patna to Delhi Train Ambulance",
    "Patients may travel to Delhi for advanced surgery, oncology services, cardiac treatment, neurological care, or specialist hospital consultation.",
  ],
  [
    "Patna to Mumbai Train Ambulance",
    "A medically supervised journey from Patna to Mumbai may be arranged for patients requiring complex treatment, follow-up care, or rehabilitation.",
  ],
  [
    "Patna to Kolkata Train Ambulance",
    "Patients travelling to Kolkata may require support with mobility, oxygen, monitoring, or medical supervision during the rail journey.",
  ],
  [
    "Patna to Hyderabad Train Ambulance",
    "This route may be planned for patients travelling to Hyderabad for specialist procedures, surgery, or continued hospital-based care.",
  ],
  [
    "Patna to Bengaluru Train Ambulance",
    "A train ambulance from Patna to Bengaluru can be considered for patients requiring advanced treatment, rehabilitation, or long-term medical support.",
  ],
  [
    "Patna to Chennai Train Ambulance",
    "Patients travelling to Chennai may receive a coordinated rail transfer with suitable equipment, medical escort, and ambulance support at both ends.",
  ],
  [
    "Patna to Ahmedabad Train Ambulance",
    "A medically supported journey to Ahmedabad may be arranged for cardiac care, cancer treatment, surgery, and other specialised medical services.",
  ],
  [
    "Patna to Pune Train Ambulance",
    "Patients travelling to Pune for treatment or recovery may require supervised transportation when independent rail travel is not suitable.",
  ],
  [
    "Patna to Jaipur Train Ambulance",
    "This route may be used for patients travelling to Jaipur for consultation, surgery, rehabilitation, or post-treatment care.",
  ],
  [
    "Patna to Lucknow Train Ambulance",
    "A train ambulance from Patna to Lucknow may help patients move between hospitals or travel for further medical evaluation and treatment.",
  ],
];

const BOOKING = [
  [
    "1. Provide the Patient's Details",
    "Contact our team with the patient's medical reports, current location in Patna, destination, diagnosis, mobility status, and any oxygen or monitoring requirements.",
  ],
  [
    "2. Review the Proposed Transfer",
    "Our team evaluates the case and discusses the required medical staff, railway arrangements, equipment, pickup service, and destination-side ambulance support.",
  ],
  [
    "3. Approve the Travel Estimate",
    "Once the train ambulance cost and proposed arrangements are explained, the family can confirm the plan and complete the required documentation.",
  ],
  [
    "4. Begin the Coordinated Journey",
    "The patient is transferred to the railway station, accompanied during the train journey, and moved onward to the receiving hospital through the arranged destination ambulance.",
  ],
];

const FACTORS = [
  [
    "01",
    "Destination and Duration of Travel",
    "The route and length of the journey influence the train ambulance charges, particularly when the transfer requires extended medical supervision.",
  ],
  [
    "02",
    "Space and Railway Accommodation",
    "The berth, cabin, coach arrangement, and space needed for the patient and equipment may affect the overall rail ambulance cost.",
  ],
  [
    "03",
    "Medical Team Composition",
    "The cost may differ depending on whether the patient needs a doctor, nurse, critical-care professional, or trained medical attendant.",
  ],
  [
    "04",
    "Equipment and Consumables",
    "Ventilator support, oxygen, monitors, infusion pumps, suction equipment, emergency medicines, and other supplies may contribute to the final estimate.",
  ],
  [
    "05",
    "Ambulance Transfers on Both Sides",
    "The quotation may include road ambulance movement from the hospital or residence to the Patna railway station and from the destination station to the receiving hospital.",
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
  "Kankarbagh",
  "Rajendra Nagar",
  "Boring Road",
  "Patliputra Colony",
  "Bailey Road",
  "Danapur",
  "Phulwari Sharif",
  "Gardanibagh",
  "Anisabad",
  "Ashiana Nagar",
  "Digha",
  "Kurji",
  "Patna City",
  "Mithapur",
  "Agam Kuan",
  "Gulzarbagh",
  "Jakkanpur",
  "Kadamkuan",
  "Frazer Road",
  "Exhibition Road",
];

const FAQS = [
  [
    "1. What does a train ambulance service in Patna provide?",
    "A train ambulance service in Patna provides medically supported rail transportation for patients travelling to another city for treatment, surgery, rehabilitation, follow-up care, or hospital transfer. Depending on the case, the service may include medical staff, equipment, and road ambulance support.",
  ],
  [
    "2. How do I arrange a train ambulance from Patna?",
    "You can contact our team and provide the patient's medical condition, pickup location, destination, and required assistance. After reviewing the case, our team prepares a suitable transfer plan and cost estimate.",
  ],
  [
    "3. How is the train ambulance cost from Patna calculated?",
    "The cost depends on the route, travel duration, railway accommodation, medical escort, equipment, oxygen requirement, and road ambulance services. The final price is shared after assessing the complete journey.",
  ],
  [
    "4. Why do train ambulance charges vary?",
    "Train ambulance charges differ because patients may require different levels of medical care, equipment, railway space, and ambulance support. A patient-specific quotation is prepared before confirmation.",
  ],
  [
    "5. Can a doctor or nurse accompany the patient?",
    "Yes, a doctor, nurse, or trained medical attendant may be arranged according to the patient's medical needs and the level of supervision required during travel.",
  ],
  [
    "6. What facilities can be available inside the train ambulance?",
    "Depending on the patient's condition, the setup may include oxygen, ventilator support, multiparameter monitoring, infusion pumps, suction equipment, emergency supplies, and stretcher support.",
  ],
  [
    "7. Can the patient receive hospital-to-hospital transportation?",
    "Yes, the transfer can be coordinated from the current hospital to the railway station and from the destination station to the receiving hospital through road ambulance services.",
  ],
  [
    "8. Are train ambulance arrangements connected with IRCTC?",
    "Railway arrangements are coordinated according to the applicable railway process and the availability of seats, berths, or coaches. Train ambulance IRCTC-related arrangements are handled as required for the journey.",
  ],
  [
    "9. Should I choose a train ambulance or an air ambulance?",
    "The appropriate option depends on the patient's medical condition, urgency, travel distance, and required level of care. A train ambulance may suit stable patients who can tolerate a longer journey, while an air ambulance may be considered when faster transportation is medically necessary.",
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
  alternateName: "Humancare Train Ambulance Service Patna",
  description:
    "Arrange train ambulance service from Patna with medical escorts, oxygen support, ICU equipment, stretcher assistance, and bed-to-bed patient transfer across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-patna.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Patna Junction Railway Station Area, Fraser Road",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 25.5941, longitude: 85.1376 },
  areaServed: [
    { "@type": "City", name: "Patna" },
    { "@type": "AdministrativeArea", name: "Bihar" },
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
      availableLanguage: ["en", "hi", "bho"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Patna",
  description:
    "Patna Train Ambulance for Long-Distance Patient Transfers Medical Care Throughout the Journey.",
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
      name: "Patna",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Patna",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-patna.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Patna | Medical Rail Ambulance</title>
      <meta
        name="description"
        content="Arrange train ambulance service from Patna with medical escorts, oxygen support, ICU equipment, stretcher assistance, and bed-to-bed patient transfer across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in patna, train ambulance in patna, rail ambulance patna, patient transfer patna, ICU train ambulance patna, patna to delhi train ambulance, patna to kolkata train ambulance, medical train escort patna"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Patna" />
      <meta name="geo.position" content="25.5941;85.1376" />
      <meta name="ICBM" content="25.5941, 85.1376" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Patna | Medical Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Arrange train ambulance service from Patna with medical escorts, oxygen support, ICU equipment, stretcher assistance, and bed-to-bed patient transfer across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Patna - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Patna | Medical Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Arrange train ambulance service from Patna with medical escorts, oxygen support, ICU equipment, stretcher assistance, and bed-to-bed patient transfer across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Patna - Humancare Train Ambulance"
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
function Patna() {
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
                    <a href={CONTACT.pageUrl}>Patna</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Patna</li>
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
                    Patna Train Ambulance for Long-Distance Patient Transfers
                    — Medical Care Throughout the Journey
                  </h1>
                  <p className="kl-hero-sub">
                    If you are transporting a person whose mobility is
                    restricted and he needs oxygen, monitoring, or other medical
                    care, it is very difficult to travel from Patna to another
                    city. Humancare assists families of such patients in securing
                    transportation through medically assisted trains. The train
                    ambulance service of Patna allows patients suitable for
                    travel accompanied by clinical care to be admitted in a
                    train ambulance. A hospital train from Patna can be provided
                    with a team of medical professionals - physician, nurse, and
                    medical attendant - a stretcher, oxygen monitoring equipment
                    and medical support as per patient condition. We also manage
                    the road ambulance transfer at the start from hospital or
                    residence to railway station, railway station to receiving
                    hospital so that the whole movement of patient remains
                    planned & systematic.
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
                      alt="Patna Train Ambulance for Long-Distance Patient Transfers — Medical Care Throughout the Journey"
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
                  <span className="kl-eyebrow">MEDICALLY SUPPORTED RAIL TRAVEL</span>
                  <h2>Planning Medically Supported Rail Travel from Patna</h2>
                  <p>
                    Patna is one of the key city centers for medicine and
                    transport in Bihar and the surrounding areas, patients
                    often come all the way from this city to the bigger cities
                    like Delhi, Mumbai, Kolkata, Hyderabad, Bengaluru, Chennai,
                    etc. for complex surgery, cancer treatment, heart care,
                    brain care, recovery, and specialist consultation.
                  </p>
                  <p>
                    Sometimes after the doctor releases the patient back to his
                    home, the patient might not be fit for an unaccompanied
                    journey, or he might be asked to change the hospital but at
                    the same time needs medical attention. If after the
                    doctor's assessment the patient seems suitable for rail
                    transport then the patient's family could opt for a train
                    ambulance from Patna.
                  </p>
                  <p>
                    Unlike ordinary passenger travel, a medical rail transfer is
                    planned around the patient’s condition. The arrangement may
                    include a suitable berth, stretcher support, oxygen
                    cylinders, vital-sign monitoring, prescribed medicines,
                    medical staff, and emergency supplies. The exact facilities
                    depend on the patient’s medical requirements and the journey
                    being planned.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Patna"
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
                <h2>Making Long-Distance Patient Movement Easier for Families</h2>
                <p>
                  A patient transfer involves several connected arrangements,
                  including medical supervision, railway travel, hospital
                  communication, and road transportation. Humancare helps
                  families coordinate these requirements through a single
                  transfer plan.
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
                    Clinical Facilities That May Be Arranged for Patna Rail
                    Transfers
                  </h2>
                  <p>
                    The onboard medical arrangement is selected according to the
                    patient’s condition. Depending on the level of support
                    required, the train ambulance may include the following
                    facilities.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Patna"
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
                <h2>The Medical Team Assigned to a Patna Train Ambulance</h2>
                <p>
                  The people accompanying the patient are selected according to
                  the level of care required during the journey. The transfer
                  plan is reviewed before departure to ensure that the medical
                  team matches the patient’s needs.
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
                  Medical Cases That May Be Considered for Rail Ambulance Travel
                </h2>
                <p>
                  Every patient is assessed before a train ambulance in Patna is
                  arranged. The following are common types of transfers that
                  may require medically supported rail transportation:
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
                Patients with other medical conditions may also be considered
                after reviewing their medical details. The treating doctor’s
                assessment and the patient’s stability are important when
                deciding whether rail transportation is appropriate.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Frequently Requested Rail Ambulance Destinations from Patna</h2>
                <p>
                  Humancare coordinates medically supported train journeys from
                  Patna to several major cities. The medical team, equipment,
                  railway arrangements, and ground transportation are selected
                  according to the patient’s requirements.
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
                <h2>Arranging a Patna Train Ambulance in 4 Simple Steps</h2>
                <p>
                  The booking process is designed to help families organise
                  medical rail transportation without handling separate
                  arrangements for every stage of the transfer.
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
                  <h2>Understanding the Price of a Train Ambulance from Patna</h2>
                  <p>
                    There is no single train ambulance price for every patient
                    transfer. The total amount depends on the destination,
                    travel duration, level of medical assistance, equipment,
                    railway arrangements, and road ambulance requirements.
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
                    The final train ambulance charges are shared after reviewing
                    the patient’s complete transfer requirements. Contact our
                    team for a case-specific quotation.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Patna"
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
                <h2>Patna Areas Covered for Train Ambulance Coordination</h2>
                <p>
                  Our train ambulance service in Patna can support patient
                  transfers from hospitals, homes, nursing facilities, and care
                  centres across the city and surrounding areas. Road ambulance
                  arrangements can be coordinated for the journey to the railway
                  station and the receiving hospital:
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
                  Questions Families Ask About Patna Train Ambulance Services
                </h2>
                <p>
                  The following answers explain common concerns related to
                  medical rail transportation from Patna, including booking,
                  equipment, escorts, pricing, railway arrangements, and
                  hospital transfers.
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Patna?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Patna, with suitable medical staff, equipment,
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

export default Patna;
