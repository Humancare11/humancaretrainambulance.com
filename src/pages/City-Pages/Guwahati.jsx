/**
 * Guwahati.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Guwahati.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-guwahati",
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
  "Medical assessment and transfer planning according to the patient's condition",
  "Assistance with railway travel arrangements and patient movement",
  "Medical escort and equipment based on the required level of care",
  "Road ambulance coordination between the pickup location, railway station and receiving facility",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Requirements Reviewed Before Travel",
    text: "We discuss the patient's current condition, treatment requirements and travel details before arranging the transfer. This helps determine what type of medical assistance may be required during the journey.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Assistance With Railway Arrangements",
    text: "Our team helps coordinate suitable train and berth arrangements for the patient, depending on availability and the requirements of the transfer.",
  },
  {
    tone: "kl-gold",
    icon: <IconUser />,
    title: "Medical Support During Transit",
    text: "A trained medical attendant, nurse or doctor may be arranged according to the patient's condition and the level of supervision required during travel.",
  },
  {
    tone: "",
    icon: <IconPin />,
    title: "Ground Transportation at Both Ends",
    text: "The transfer can include road ambulance transportation from the Guwahati hospital or residence to the railway station, followed by transportation from the destination station to the receiving facility.",
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
    title: "Communication With the Family",
    text: "We keep family members informed about the arrangements and progress of the transfer so they can stay updated throughout the journey.",
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
    title: "Planning Around the Patient's Condition",
    text: "Every transfer is different. The medical team and equipment are selected according to the patient's requirements rather than using the same setup for every journey.",
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
    text: "May be arranged for patients who require ventilatory support during transportation, subject to medical assessment and the appropriate equipment setup.",
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
    title: "Patient Monitoring Equipment",
    text: "Can be used to monitor vital parameters such as ECG, SpO₂, blood pressure and pulse during the journey.",
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
    title: "Oxygen Support",
    text: "Oxygen arrangements are planned according to the patient's requirement, with the supply and equipment selected for the expected travel duration.",
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
    text: "May be required for patients who need controlled administration of prescribed IV fluids or medications during transit.",
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
    text: "Can be arranged for patients who require airway support or suction during transportation.",
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
    text: "The accompanying medical team carries essential supplies according to the patient's clinical requirements and the planned level of care.",
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
    title: "Stretcher & Patient-Transfer Equipment",
    text: "Used to assist with patient movement during boarding, disembarkation and transfers between the ambulance and railway station.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "May be arranged for patients who require intensive medical supervision, advanced support or close monitoring during the journey.",
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
    text: "Can assist with vital-sign monitoring, prescribed medications and ongoing patient care during transit.",
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
    title: "Trained Medical Attendant",
    text: "Assists with patient movement, basic care, and other requirements during the railway journey.",
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
    title: "Ambulance Attendants",
    text: "Help with stretcher handling and transfers between the Guwahati pickup location, railway station, and destination hospital.",
  },
];

const CONDITIONS = [
  "Patients recovering after surgery",
  "Patients requiring continued treatment in another city",
  "Patients recovering after a cardiac event",
  "Stroke and neurological patients",
  "Cancer and oncology patients",
  "Orthopaedic and trauma patients",
  "Dialysis and renal patients",
  "Elderly or bedridden patients",
  "Patients requiring discharge transportation",
  "Patients travelling for specialist consultation",
  "Patients returning home after treatment",
  "Deceased patient transportation",
];

const ROUTES = [
  [
    "Guwahati to Kolkata Train Ambulance",
    "A commonly considered route for patients travelling to Kolkata for specialised treatment, continued hospital care or consultation with medical specialists.",
  ],
  [
    "Guwahati to Delhi Train Ambulance",
    "An option for patients who need to travel to Delhi for treatment, follow-up care or access to specialised healthcare facilities.",
  ],
  [
    "Guwahati to Mumbai Train Ambulance",
    "A long-distance transfer option for patients travelling to Mumbai for medical treatment, rehabilitation or continued care.",
  ],
  [
    "Guwahati to Bengaluru Train Ambulance",
    "A possible route for patients travelling to Bengaluru for specialised treatment or follow-up care, subject to suitable travel arrangements.",
  ],
  [
    "Guwahati to Chennai Train Ambulance",
    "A medical transportation option for patients requiring treatment or continued care in Chennai.",
  ],
  [
    "Guwahati to Hyderabad Train Ambulance",
    "A route that may be considered for patients travelling to Hyderabad for specialist consultation, treatment or post-operative care.",
  ],
  [
    "Guwahati to Varanasi Train Ambulance",
    "An option for patients travelling to Varanasi for continued treatment, recovery care or a supported return home.",
  ],
  [
    "Guwahati to Pune Train Ambulance",
    "A long-distance patient transfer option for patients travelling to Pune for treatment, rehabilitation or follow-up care.",
  ],
  [
    "Guwahati to Patna Train Ambulance",
    "A route that may be considered for patients travelling to Patna for further treatment, specialist consultation or continued care.",
  ],
  [
    "Guwahati to Lucknow Train Ambulance",
    "An option for patients travelling to Lucknow for treatment, recovery care or a medically supported return home.",
  ],
];

const BOOKING = [
  [
    "1. Share the Patient's Details",
    "Contact our team and provide the patient's current condition, pickup location in Guwahati, hospital details and destination city.",
  ],
  [
    "2. Discuss Medical Requirements",
    "Our team reviews the information and discusses the level of medical support, equipment and travel arrangements required.",
  ],
  [
    "3. Receive the Transfer Plan",
    "We coordinate suitable railway options, medical escort arrangements and ground transportation based on the patient's requirements.",
  ],
  [
    "4. Confirm & Complete the Transfer",
    "Once the arrangements are confirmed, our team coordinates with the relevant parties, prepares for the journey and manages the patient's transfer from the Guwahati hospital or residence to the destination hospital.",
  ],
];

const FACTORS = [
  [
    "01",
    "Travel Distance",
    "The distance between Guwahati and the destination can affect the overall cost. Longer journeys may require different arrangements from shorter transfers.",
  ],
  [
    "02",
    "Railway Arrangements",
    "The selected train, berth arrangement and space required for the patient can influence the quotation.",
  ],
  [
    "03",
    "Medical Escort",
    "The cost depends on whether the patient requires a trained attendant, nurse, doctor or a higher level of medical supervision.",
  ],
  [
    "04",
    "Equipment Required",
    "Oxygen support, monitoring equipment, ventilator support and other medical requirements may affect the final cost.",
  ],
  [
    "05",
    "Road Ambulance Support",
    "The pickup and drop-off arrangements between the hospital, railway station and receiving facility can also influence the total transfer cost.",
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
  "Guwahati City",
  "Dispur",
  "Paltan Bazaar",
  "Maligaon",
  "Six Mile",
  "Khanapara",
  "Beltola",
  "Chandmari",
  "Jalukbari",
  "Panjabari",
  "Noonmati",
  "Narengi",
  "Basistha",
  "Borbari",
  "Sonapur",
  "North Guwahati",
  "Kamalpur",
  "Hajo",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Guwahati?",
    "A train ambulance service in Guwahati is a medically supported rail transfer for patients who need assistance while travelling to another city. Depending on the patient's condition, the transfer may include medical escort, oxygen support, monitoring equipment and road ambulance transportation.",
  ],
  [
    "2. How can I book a train ambulance from Guwahati?",
    "You can contact Humancare with the patient's medical details, pickup location and destination. Our team will discuss the requirements and help coordinate the railway, medical and ground transportation arrangements.",
  ],
  [
    "3. What is the train ambulance cost from Guwahati?",
    "The train ambulance cost depends on the destination, railway arrangements, medical escort, equipment and road ambulance requirements. A quotation can be provided after reviewing the patient's travel and medical needs.",
  ],
  [
    "4. What factors affect train ambulance charges?",
    "Train ambulance charges may vary according to the travel distance, train and berth arrangements, medical team, equipment and transportation required at the pickup and destination locations.",
  ],
  [
    "5. Can a patient travel from Guwahati to Kolkata by train ambulance?",
    "A Guwahati to Kolkata transfer may be considered for patients who are medically suitable for rail travel. The journey arrangements depend on the patient's condition, railway availability and the required level of medical support.",
  ],
  [
    "6. Is a doctor or nurse available during the train journey?",
    "A medical attendant, nurse or doctor may be arranged according to the patient's condition and the level of supervision required during the journey.",
  ],
  [
    "7. What equipment is available in a train ambulance from Guwahati?",
    "Equipment may include oxygen support, patient monitoring equipment, ventilator support, infusion pumps, suction equipment and other medical supplies, depending on the patient's requirements.",
  ],
  [
    "8. Does the train ambulance service include hospital pickup?",
    "A complete transfer can include road ambulance pickup from the Guwahati hospital or residence, transportation to the railway station and road ambulance transfer from the destination station to the receiving facility.",
  ],
  [
    "9. How long does it take to arrange a train ambulance from Guwahati?",
    "The arrangement time depends on railway availability, the destination, medical requirements and the urgency of the transfer. Our team can discuss suitable options once the travel details are shared.",
  ],
  [
    "10. Is train ambulance travel suitable for critically ill patients?",
    "Rail travel may be suitable for selected patients after medical assessment. Critically ill or ventilator-dependent patients require careful evaluation and appropriate medical support before the transfer is confirmed.",
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
  alternateName: "Humancare Train Ambulance Service Guwahati",
  description:
    "Need a train ambulance from Guwahati? Humancare provides medically supported rail transfers with medical escorts, oxygen support and ground ambulance coordination across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-guwahati.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Guwahati Railway Station Area, Paltan Bazaar",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    postalCode: "781001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.1445, longitude: 91.7362 },
  areaServed: [
    { "@type": "City", name: "Guwahati" },
    { "@type": "AdministrativeArea", name: "Assam" },
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
      availableLanguage: ["en", "hi", "as"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Guwahati",
  description:
    "Train Ambulance Service in Guwahati: Medical Support for Long-Distance Patient Transfers.",
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
      name: "Guwahati",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Guwahati",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-guwahati.jpg`;
  return (
    <>
      <title>
        Train Ambulance Service in Guwahati | Humancare Train Ambulance
      </title>
      <meta
        name="description"
        content="Need a train ambulance from Guwahati? Humancare provides medically supported rail transfers with medical escorts, oxygen support and ground ambulance coordination across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in guwahati, train ambulance in guwahati, rail ambulance guwahati, patient transfer guwahati, ICU train ambulance guwahati, guwahati to kolkata train ambulance, guwahati to delhi train ambulance, medical train escort guwahati"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-AS" />
      <meta name="geo.placename" content="Guwahati" />
      <meta name="geo.position" content="26.1445;91.7362" />
      <meta name="ICBM" content="26.1445, 91.7362" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Guwahati | Humancare Train Ambulance"
      />
      <meta
        property="og:description"
        content="Need a train ambulance from Guwahati? Humancare provides medically supported rail transfers with medical escorts, oxygen support and ground ambulance coordination across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Guwahati - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Guwahati | Humancare Train Ambulance"
      />
      <meta
        name="twitter:description"
        content="Need a train ambulance from Guwahati? Humancare provides medically supported rail transfers with medical escorts, oxygen support and ground ambulance coordination across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Guwahati - Humancare Train Ambulance"
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
function Guwahati() {
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
                    <a href={CONTACT.pageUrl}>Guwahati</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Guwahati</li>
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
                    Train Ambulance Service in Guwahati: Medical Support for
                    Long-Distance Patient Transfers
                  </h1>
                  <p className="kl-hero-sub">
                    Arranging medical transportation from Guwahati to another
                    city can be difficult when a patient needs assistance
                    throughout the journey. Humancare Train Ambulance helps
                    families coordinate medically supported rail transfers, with
                    suitable medical attendants, oxygen support, monitoring
                    equipment, and ground ambulance arrangements based on the
                    patient's condition. Whether the journey begins at a hospital
                    or residence in Guwahati, our team works to organise the
                    transfer to the receiving facility with attention to patient
                    safety and continuity of care.
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
                      alt="Train Ambulance Service in Guwahati - Medical Support for Long-Distance Patient Transfers"
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
                    When Should You Consider a Train Ambulance from Guwahati?
                  </h2>
                  <p>
                    In some cases, long-haul train travel may not be the best
                    choice or suitable for the medical conditions of a particular
                    patient. But, a patient who has been medically certified to
                    travel by train and who would benefit from physical help
                    during transit, it may be useful to talk to a treating
                    physician about the possibility of a train ambulance.
                  </p>
                  <p>
                    Humancare is in charge of the logistics related to a train
                    ambulance from Guwahati i.e. medical escort, patient
                    handling, rail transit, and road ambulance handover. This can
                    also be of great help to families who find it difficult to
                    travel with a passenger train alone if it doesn't have
                    medical support as their patient may be the one needing it
                    the most. In India, a rail ambulance service can be suggested
                    as an emergency measure for a limited group of patients who
                    want to travel by train between cities for treatment, care,
                    rehabilitation, or returning home supported. The kind of
                    support a patient would receive and the medical team
                    available during a trip mainly depend on that patient's
                    health status and the medical needs that a healthcare
                    system has identified before the journey.
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
                      alt="Medical transport team assisting patient for train ambulance transfer in Guwahati"
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
                  How We Help Families Arrange Medical Transfers from Guwahati
                </h2>
                <p>
                  <strong>A Coordinated Journey, From Pickup to Destination:</strong>{" "}
                  Planning a patient transfer involves more than arranging a
                  railway ticket. Families may need to coordinate the treating
                  hospital, medical team, railway arrangements and transportation
                  at both ends. Our team helps bring these arrangements together
                  so the journey can be planned around the patient's needs.
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
                    Medical Equipment Arranged According to Patient Requirements
                  </h2>
                  <p>
                    The equipment required for a rail transfer depends on the
                    patient's condition and the level of medical support needed.
                    Humancare coordinates the appropriate equipment and medical
                    personnel for the planned journey.
                  </p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="Medical equipment setup for train ambulance transfers from Guwahati"
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
                <h2>Medical Escort Options for Train Ambulance Travel</h2>
                <p>
                  The medical team accompanying a patient is selected according
                  to the patient's condition and the treating doctor's advice.
                  The level of supervision required may vary from one transfer
                  to another.
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
                <h2>Patients Who May Require Medically Supported Rail Travel</h2>
                <p>
                  A train ambulance may be considered for selected patients who
                  are medically suitable for a prolonged journey and require
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
                condition. If a patient requires a different mode of
                transportation, the treating doctor and our coordination team
                can discuss the available options.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance from Guwahati to Major Indian Cities</h2>
                <p>
                  Humancare helps families coordinate long-distance patient
                  transfers from Guwahati to other cities, depending on railway
                  availability, medical requirements and the receiving facility.
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
                <h2>How to Book a Train Ambulance from Guwahati</h2>
                <p>
                  Arranging a train ambulance booking becomes easier when the
                  patient's medical details and travel requirements are shared
                  in advance.
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
                  <h2>What Determines Train Ambulance Cost from Guwahati?</h2>
                  <p>
                    Train ambulance charges mainly depend on the patient's
                    medical condition. Also, a few factors like distance of
                    travel and arrangements to be done during the journey are
                    taken into account. A particular fee is not the same for all
                    train ambulance patients; rather, it is based on the
                    conditions.
                  </p>
                  <p className="kl-mt-12">
                    In some cases, the end result of the train ambulance fee
                    will depend on the destination, railway facilities, level of
                    medical attendance, equipment, and road ambulance. Before
                    the quotation phase, we analyze the transfer information.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Guwahati"
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
                <h2>Service Areas Around Guwahati</h2>
                <p>
                  Our road ambulance network can help coordinate patient pickup
                  and drop-off across Guwahati and nearby areas, depending on
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
                  Train Ambulance Service in Guwahati — Frequently Asked Questions
                </h2>
                <p>
                  Answers to common questions families ask about arranging a
                  train ambulance in Guwahati, medical support, booking, routes
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Guwahati?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Guwahati, with suitable medical staff, equipment,
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

export default Guwahati;