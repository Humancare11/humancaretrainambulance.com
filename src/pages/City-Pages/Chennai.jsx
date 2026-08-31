/**
 * Chennai.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Chennai.
 * Styles live in the sibling stylesheet ./TrainAmbulanceVaranasi.css.
 * -------------------------------------------------------------------------
 */

import React, { useState } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from "../../assets/City/Chennai/medical-team-with-patient-stretcher-at-chennai-railway-station.webp";
import train2 from "../../assets/City/TAM-Varanasi/train-ambulance-service-in-varanasi.webp";
import HeroBanner from "../../assets/City/Chennai/train-ambulance-service-in-chennai.webp";
import train4 from "../../assets/City/Chennai/icu-equipt-train-ambulance-service-in-chennai.webp";

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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-chennai",
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
  "Medical transportation planned around the patient's condition and destination",
  "Medical escort and onboard support for eligible long-distance rail journeys",
  "Suitable alternative to a regular train journey when medical assistance is required",
  "Coordinated ground transfers between the Chennai pickup point, railway station and destination hospital",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Support Based on Patient Needs",
    text: "The accompanying medical professional is selected according to the patient's condition and level of care required, with support for monitoring, prescribed medicines, and changes during transit.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Round-the-Clock Booking Assistance",
    text: "Our coordination team helps families arrange a train ambulance service at any time, including route planning, medical requirements, railway arrangements and transfer coordination.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Transportation",
    text: "We coordinate the patient's movement from the hospital or residence to the Chennai railway station and arrange onward road ambulance support from the destination station to the receiving hospital.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Clear Train Ambulance Pricing",
    text: "Before confirming the journey, families receive a quotation based on the route, railway arrangement, medical team, equipment and ground transportation involved. Train ambulance cost can therefore vary according to the patient's specific requirements.",
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
    title: "Regular Updates for the Family",
    text: "From departure arrangements to destination transfer, our team keeps the family informed through phone or WhatsApp so they know the progress of the patient's journey.",
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
    title: "Experience With Different Patient Needs",
    text: "Our rail ambulance service can support a range of transfers, including patients requiring oxygen, monitoring, stretcher transportation, post-operative care or other medical assistance as assessed for the journey.",
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
    title: "Portable Ventilator",
    text: "Provides assisted breathing for patients who require respiratory support during transportation, with settings managed by the accompanying medical team.",
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
    title: "Multiparameter Monitor",
    text: "Tracks key vital signs such as ECG, SpO₂, blood pressure and pulse, helping the team observe the patient's condition throughout the journey.",
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
    text: "Provides emergency cardiac support when clinically required, allowing the medical team to respond to serious cardiac events during transit.",
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
    text: "Enable controlled delivery of prescribed medicines and IV fluids when continuous or accurately regulated infusion is required.",
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
    title: "Oxygen Cylinders & Reserve Supply",
    text: "Oxygen support is arranged according to the patient's needs, with sufficient reserve planned for the expected duration of the rail journey.",
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
    text: "Portable suction and airway-management equipment can assist patients who require airway clearance or additional respiratory support during travel.",
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
    title: "Emergency Medical Kit",
    text: "The medical team carries relevant emergency medicines, consumables and essential supplies based on the patient's clinical requirements.",
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
    title: "Stretcher & Patient Transfer Board",
    text: "Designed to assist with safe movement of stretcher-bound patients between the hospital, railway station, train ambulance and destination-side road ambulance.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "For patients requiring advanced clinical supervision, the doctor monitors their condition, manages medical interventions and responds to changes during the journey.",
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
    text: "Provides continuous bedside care, including vital-sign observation, prescribed medication support and routine patient monitoring throughout the rail transfer.",
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
    text: "Assist with stretcher handling, patient movement and transfers at the hospital, railway station and destination, helping make boarding and disembarking safer.",
  },
  {
    icon: <IconPhone />,
    title: "24×7 Coordination Desk",
    text: "Coordinates railway arrangements, ground ambulance connections and communication between the sending and receiving hospitals, keeping the entire rail ambulance service organised.",
  },
];

const CONDITIONS = [
  "Cardiac recovery and post-cardiac patients",
  "Patients dependent on ventilator support",
  "Post-operative and surgical recovery transfers",
  "Stroke and neurological conditions",
  "Cancer and oncology patients",
  "Orthopaedic injuries and trauma cases",
  "Dialysis and renal-care patients",
  "Elderly and bedridden patients",
  "Stable patients being transferred home after discharge",
  "High-risk pregnancy transfers",
  "Organ transplant and follow-up care transfers",
  "Deceased patient / mortal remains transportation",
];

const ROUTES = [
  [
    "Chennai to Delhi Train Ambulance",
    "A long-distance option for patients requiring specialised treatment in Delhi, with medical support planned for the duration of the rail journey.",
  ],
  [
    "Chennai to Mumbai Train Ambulance",
    "Suitable for patients travelling to Mumbai for advanced treatment, follow-up care or specialist consultation with appropriate medical assistance onboard.",
  ],
  [
    "Chennai to Kolkata Train Ambulance",
    "A practical rail transfer option for patients moving between Chennai and Kolkata when extended travel by road may not be suitable.",
  ],
  [
    "Chennai to Hyderabad Train Ambulance",
    "Frequently arranged for patients requiring treatment or follow-up at Hyderabad hospitals, with the medical escort selected according to care requirements.",
  ],
  [
    "Chennai to Bengaluru Train Ambulance",
    "A convenient short-to-medium-distance rail transfer for patients who need monitored transportation between Chennai and Bengaluru.",
  ],
  [
    "Chennai to Ahmedabad Train Ambulance",
    "Long-distance patient transfers to Ahmedabad can be coordinated with suitable medical equipment, trained escorts and ground ambulance support.",
  ],
  [
    "Chennai to Pune Train Ambulance",
    "An option for patients travelling to Pune for specialised treatment, rehabilitation or continued medical care.",
  ],
  [
    "Chennai to Patna Train Ambulance",
    "We coordinate rail-based patient transfers from Chennai to Patna, including medical escort and station-to-hospital assistance where required.",
  ],
  [
    "Chennai to Jaipur Train Ambulance",
    "A long-distance medical transfer option for patients travelling from Chennai to Jaipur for treatment, consultation or post-treatment care.",
  ],
  [
    "Chennai to Lucknow Train Ambulance",
    "Rail ambulance arrangements from Chennai to Lucknow can be planned for patients who need a monitored and medically supported journey.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Our Team",
    "Share the patient's medical condition, current hospital location in Chennai, destination city and any immediate care requirements with our coordination team.",
  ],
  [
    "2. Receive a Travel Plan & Cost Estimate",
    "We assess the patient's needs, check suitable railway options and plan the required medical escort, equipment and ground ambulance support. You receive the expected train ambulance cost before confirmation.",
  ],
  [
    "3. Confirm the Arrangement",
    "After you approve the plan, our team coordinates the required documentation, railway arrangements, medical staff and pickup schedule with the concerned hospitals.",
  ],
  [
    "4. Bed-to-Bed Patient Transfer",
    "The patient is collected from the hospital, transferred safely to the railway station, accompanied throughout the journey and handed over at the destination hospital with ground ambulance support as arranged.",
  ],
];

const FACTORS = [
  [
    "01",
    "Travel Distance & Destination",
    "Long-distance transfers generally involve higher train ambulance charges because of the extended journey, medical staffing and associated travel arrangements.",
  ],
  [
    "02",
    "Coach, Cabin & Berth Selection",
    "The type of railway accommodation required can affect the overall rail ambulance cost. Private cabins or additional space for equipment may cost more than standard berth arrangements.",
  ],
  [
    "03",
    "Level of Medical Assistance",
    "A patient requiring a critical-care doctor and nurse will have different costs from a stable patient who only needs a trained medical attendant during the journey.",
  ],
  [
    "04",
    "Medical Equipment & Supplies",
    "The use of ventilators, oxygen, monitors, infusion pumps, emergency medicines and other patient-specific equipment can influence the train ambulance price.",
  ],
  [
    "05",
    "Road Ambulance at Both Ends",
    "If the transfer requires road ambulances for hospital-to-station and station-to-hospital movement, the distance at both locations is considered while preparing the final quotation.",
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
  "Chennai Central",
  "Anna Nagar",
  "T. Nagar",
  "Adyar",
  "Velachery",
  "Tambaram",
  "Guindy",
  "Porur",
  "Ambattur",
  "Perambur",
  "Royapettah",
  "Egmore",
  "Sholinganallur",
  "OMR",
  "Chromepet",
  "Avadi",
  "Saidapet",
  "Mylapore",
  "Nungambakkam",
  "Pallavaram",
  "Chengalpattu",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Chennai?",
    "A train ambulance service in Chennai provides medically supported rail transportation for patients who need to travel long distances for specialised treatment, hospital admission, follow-up care or recovery. Depending on the patient's condition, the transfer can include a doctor, nurse, medical attendant, equipment and road ambulance support.",
  ],
  [
    "2. How can I book a train ambulance in Chennai?",
    "You can contact our coordination team by phone or WhatsApp and share the patient's current condition, pickup location, destination and medical requirements. We then assess the case, check suitable railway options and prepare a transfer plan and quotation.",
  ],
  [
    "3. What is the train ambulance cost from Chennai?",
    "The train ambulance cost depends on factors such as travel distance, berth or coach requirements, medical escort, equipment, oxygen requirements and road ambulance services. Since every patient transfer is different, the final train ambulance price is provided after assessing the complete journey.",
  ],
  [
    "4. What are the train ambulance charges in Chennai?",
    "Train ambulance charges vary according to the patient's medical condition, destination, railway arrangements, medical team and additional services required. A detailed quotation can be provided before the transfer is confirmed.",
  ],
  [
    "5. Does a train ambulance include a doctor and nurse?",
    "Yes, a medical escort can be arranged according to the patient's condition. Critical-care patients may require a doctor and critical-care nurse, while stable patients may travel with an appropriately trained medical attendant.",
  ],
  [
    "6. What medical equipment is available in a train ambulance?",
    "Depending on the patient's requirements, a train ambulance may be equipped with oxygen, ventilator support, multiparameter monitoring, infusion or syringe pumps, suction equipment, emergency medicines and other essential medical supplies.",
  ],
  [
    "7. Can a rail ambulance provide bed-to-bed patient transfer?",
    "Yes. A rail ambulance service can be coordinated as a bed-to-bed transfer, including road ambulance transportation between the hospital and railway station at the origin and destination, subject to the planned transfer requirements.",
  ],
  [
    "8. Can a train ambulance be arranged through IRCTC?",
    "Railway arrangements for a patient transfer are coordinated according to the applicable railway process and seat, berth or coach availability. The coordination team handles the required train ambulance IRCTC-related arrangements as applicable to the journey.",
  ],
  [
    "9. Is train ambulance better than air ambulance for long-distance transfers?",
    "It depends on the patient's medical condition and urgency. A train ambulance can be a practical option for medically stable or semi-critical patients who can tolerate a longer journey, while an air ambulance may be more suitable when rapid transportation is medically necessary.",
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
  alternateName: "Humancare Train Ambulance Service Chennai",
  description:
    "Looking for train ambulance service in Chennai? Get doctor-assisted rail ambulance transfers with ICU equipment, medical escorts, and bed-to-bed support across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-chennai.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chennai Central Railway Station Area",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 13.0827, longitude: 80.2707 },
  areaServed: [
    { "@type": "City", name: "Chennai" },
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
      availableLanguage: ["en", "hi", "ta"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Chennai",
  description:
    "Chennai Train Ambulance for Long-Distance Patient Transfers — Medical Care Throughout the Journey.",
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
      name: "Chennai",
      item: `${CONTACT.domain}/chennai`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance in Chennai",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-chennai.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Chennai | Rail Ambulance</title>
      <meta
        name="description"
        content="Looking for train ambulance service in Chennai? Get doctor-assisted rail ambulance transfers with ICU equipment, medical escorts, and bed-to-bed support across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in chennai, train ambulance chennai, rail ambulance chennai, patient transfer chennai, ICU train ambulance chennai, chennai to delhi train ambulance, chennai to mumbai train ambulance"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0827;80.2707" />
      <meta name="ICBM" content="13.0827, 80.2707" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Chennai | Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Looking for train ambulance service in Chennai? Get doctor-assisted rail ambulance transfers with ICU equipment, medical escorts, and bed-to-bed support across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Chennai Train Ambulance for Long-Distance Patient Transfers — Medical Care Throughout the Journey"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Chennai | Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Looking for train ambulance service in Chennai? Get doctor-assisted rail ambulance transfers with ICU equipment, medical escorts, and bed-to-bed support across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Chennai Train Ambulance for Long-Distance Patient Transfers — Medical Care Throughout the Journey"
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
function Chennai() {
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
                    <a href="/chennai">Chennai</a>
                  </li>
                  <li aria-current="page">Train Ambulance in Chennai</li>
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
                    Chennai Train Ambulance for Long-Distance Patient Transfers
                    — Medical Care Throughout the Journey
                  </h1>
                  <p className="kl-hero-sub">
                    If travelling to another city for specialised intervention,
                    the patient may require additional assistance beyond that of
                    standard train travel. Humancare helps organise an ambulance
                    train in Chennai where patients can travel by rail under
                    medical supervision, assisted vehicle movement, or clinical
                    assistance. The Chennai train ambulance can be operated with
                    a doctor or nurse, an oxygen monitor for various parameters,
                    stretcher support, and other medical facilities required on
                    a train according to the nature of the case. We seek to help
                    reschedule the travel plan in Chennai and co-ordinate
                    transfer arrangements in the destination city to facilitate
                    a safe and comfortable journey.
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
                      alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Chennai"
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
                    Why Choose a Train Ambulance from Chennai for Long-Distance
                    Medical Travel?
                  </h2>
                  <p>
                    Chennai is not only one of the major cities in South India,
                    but also one of the leading destinations for seeking medical
                    care in the region because patients, particularly from the
                    Tamil Nadu state and the states adjacent to Tamil Nadu, need
                    to travel there for specialized procedures, cancer care,
                    cardiac treatment, rehabilitation, and other medically
                    advanced services. After a treatment, some patients may want
                    to continue their aftercare in the new city or return home
                    while still under a doctor's care. In these cases, getting a
                    train ambulance from Chennai may be a better option if you
                    need help during a trip in a conventional railway coach.
                  </p>
                  <p>
                    The use of a train ambulance service changes regular railway
                    travel into a medically monitored patient-transfer
                    situation. Given the illness or the patient's situation, the
                    train ambulance will consist of providing oxygen support, a
                    stretcher or a suitable berth, vital sign monitor, medical
                    escort, and other necessary apparatus. Humancare plans and
                    coordinates the entire journey for a patient to travel from
                    the Chennai hospital or home all the way to the destination
                    hospital and have appropriate medical care available for the
                    patient in transfer mode at all points in time during the
                    journey.
                  </p>
                  <p>
                    It is different to plan a rail ambulance than to plan a
                    normal passenger journey as one has to consider the
                    patient's medical necessities in choosing the facilities.
                    For example, a stable patient or one who has been
                    appropriately assessed for travel can be thought of
                    transporting to cities like Bengaluru, Hyderabad, Kolkata,
                    Delhi, Mumbai, Vellore or other destinations for treatment.
                    The medical team and equipment are decided based on the
                    health condition of the patient rather than making it a
                    fixed routine for each ambulance transfer.
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
                      alt="Medical transport team with patient stretcher at Chennai railway station"
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
                  Reliable Medical Coordination for Every Chennai Rail Transfer
                </h2>
                <p>
                  Moving a patient over a long distance involves more than
                  arranging a railway ticket. Our team coordinates the medical
                  support, railway journey, and ground transportation so
                  families can focus on the patient's care instead of managing
                  multiple arrangements themselves.
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
                    Medical Equipment Supporting Patients During Chennai Rail
                    Transfers
                  </h2>
                  <p>
                    A train ambulance in Chennai is arranged with medical
                    equipment according to the patient's condition and level of
                    care required. The onboard setup helps the accompanying team
                    provide continuous observation and essential support during
                    a long-distance journey.
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
                  Medical Professionals Supporting the Patient During the
                  Journey
                </h2>
                <p>
                  A train ambulance service involves more than arranging rail
                  travel. The people accompanying the patient are selected
                  according to the level of medical assistance required, with
                  coordination between the patient's current care team and our
                  transfer staff before departure.
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
                <h2>Patient Conditions We Support Through Train Ambulance</h2>
                <p>
                  Before arranging a train ambulance in Chennai, our team
                  reviews the patient's current condition and the level of care
                  required during travel. The medical escort and onboard setup
                  are planned accordingly. Common transfers include:
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
                If the patient's condition is not listed above, contact our team
                with the relevant medical details. We can review the case and
                determine whether a train ambulance service in Chennai is
                appropriate or whether another mode of medical transportation
                would be safer.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Popular Train Ambulance Routes from Chennai</h2>
                <p>
                  We arrange train ambulance transfers from Chennai to major
                  cities across India, with the route, railway availability,
                  medical team and onboard care planned according to the
                  patient's condition. Commonly requested routes include:
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
              <p className="kl-mt-24 kl-text-center">
                Need a different destination? Our train ambulance service in
                Chennai can be coordinated for other cities based on railway
                connectivity, patient condition and medical requirements.
              </p>
            </div>
          </section>

          {/* ============ BOOKING ============ */}
          <section className="kl-section kl-section-tint" id="booking">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">HOW IT WORKS</span>
                <h2>
                  How to Book a Train Ambulance from Chennai in 4 Simple Steps
                </h2>
                <p>
                  We keep the train ambulance booking process straightforward,
                  so families can arrange medically supported rail
                  transportation without dealing with multiple service
                  providers.
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
                  <h2>What Determines Train Ambulance Cost in Chennai?</h2>
                  <p>
                    The train ambulance cost in Chennai varies from one patient
                    transfer to another because the required medical care,
                    journey length and railway arrangements can differ. The
                    final train ambulance price is calculated after reviewing
                    the patient's condition, destination and services required.
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
                  <p className="kl-mt-16">
                    Train ambulance charges are quoted after assessing the
                    complete transfer requirement. Contact our team for a
                    patient-specific estimate rather than relying on a fixed
                    price.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Chennai"
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
                <h2>Train Ambulance Service Areas Across Chennai</h2>
                <p>
                  Our train ambulance service in Chennai supports patient
                  transfers from hospitals, residences, and care facilities
                  across Chennai and nearby areas. Road ambulance coordination
                  can be arranged to connect the patient with the railway
                  station before departure and the destination hospital after
                  arrival.
                </p>
                <p className="kl-mt-8">
                  <strong>Service areas include:</strong>
                </p>
              </div>
              <div className="kl-area-chip-wrap">
                {AREAS.map((a) => (
                  <span className="kl-area-chip" key={a}>
                    {a}
                  </span>
                ))}
              </div>
              <p className="kl-mt-24">
                Need a transfer from another location? Rail ambulance
                arrangements can also be coordinated from nearby towns and
                districts based on the patient's medical needs and railway
                connectivity.
              </p>
            </div>
          </section>

          {/* ============ FAQ ============ */}
          <section className="kl-section" id="faqs">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">COMMON QUESTIONS</span>
                <h2>
                  Train Ambulance Service in Chennai — Frequently Asked
                  Questions
                </h2>
                <p>
                  Answers to common questions about train ambulance service in
                  Chennai, including booking, medical support, train ambulance
                  cost, railway arrangements, onboard equipment and
                  long-distance patient transfers. Structured FAQ content can
                  help search engines understand these common patient-transfer
                  queries.
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Chennai?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Chennai, with suitable medical staff, equipment,
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
export default Chennai;
