/**
 * Hubballi.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Hubballi.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-hubballi",
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
  "End-to-end coordination for medical rail transportation from Hubballi",
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
    text: "A train journey is only one part of the transportation process. Road ambulance arrangements can be coordinated for transporting the patient between the hospital or residence in Hubballi, the railway station, and the receiving hospital at the destination.",
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
    title: "Portable Respiratory Support",
    text: "Patients requiring breathing assistance may need portable respiratory support during transportation. The suitability of such equipment depends on medical assessment and the patient's travel requirements.",
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
    title: "Vital Signs Monitoring",
    text: "Monitoring equipment may be used to observe parameters such as oxygen saturation, pulse rate, blood pressure, and other relevant vital signs during the journey.",
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
    title: "Supplemental Oxygen Facilities",
    text: "Portable oxygen support can be arranged for patients who require additional oxygen during transportation. The arrangement depends on the prescribed requirement and expected journey duration.",
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
    title: "Infusion & Syringe Pump Support",
    text: "Patients requiring controlled administration of medication or fluids may need infusion or syringe pumps during transit. These can be arranged when medically prescribed.",
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
    title: "Airway Management Supplies",
    text: "Patients with airway-care requirements may need suction equipment and other appropriate airway-management supplies during the journey according to their medical needs.",
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
    title: "Emergency and Routine Medical Supplies",
    text: "The accompanying medical team can carry essential supplies relevant to the patient's treatment plan and anticipated medical requirements during the transfer.",
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
    title: "Patient Transfer and Stretcher Aids",
    text: "Patients with limited mobility may require stretcher arrangements and transfer aids while moving between the hospital, ambulance, railway platform, and train compartment.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Medical Doctor",
    text: "A doctor may accompany patients who require closer medical supervision, regular clinical assessment or advanced medical support during the journey.",
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
    title: "Nursing Professional",
    text: "A nurse can assist with vital monitoring, prescribed medication, patient positioning and routine nursing care throughout the railway journey.",
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
    title: "Trained Patient Attendant",
    text: "A trained attendant can assist with patient comfort, basic care, movement, and other non-critical requirements during the transfer.",
  },
  {
    icon: <IconPhone />,
    title: "Ambulance Transfer Personnel",
    text: "Ambulance personnel can assist with stretcher handling, boarding, disembarkation, and patient movement between the Hubballi pickup location, railway station, and receiving facility.",
  },
];

const CONDITIONS = [
  "Patients recovering after surgery",
  "Patients travelling for advanced medical treatment",
  "Patients requiring continued hospital care",
  "Patients needing specialist consultation",
  "Patients recovering after cardiac treatment",
  "Stroke and neurological patients",
  "Cancer and oncology patients",
  "Orthopaedic and trauma patients",
  "Dialysis and kidney-care patients",
  "Elderly patients requiring travel support",
  "Bedridden patients",
  "Patients being transferred after hospital discharge",
  "Patients travelling for rehabilitation",
  "Patients returning home after treatment",
  "Deceased patient transportation",
];

const ROUTES = [
  [
    "Hubballi to Bengaluru",
    "A train ambulance from Hubballi to Bengaluru may be arranged for patients travelling for specialised treatment, surgery, specialist consultation, rehabilitation or continued hospital care.",
  ],
  [
    "Hubballi to Mysuru",
    "Patients travelling from Hubballi to Mysuru may require medically supported railway transportation for specialist treatment, follow-up care, rehabilitation or continued medical support.",
  ],
  [
    "Hubballi to Mangaluru",
    "A supported transfer from Hubballi to Mangaluru can be considered for patients requiring specialist consultation, planned treatment or continued healthcare support.",
  ],
  [
    "Hubballi to Hyderabad",
    "Patients travelling to Hyderabad may require medical assistance during the journey for specialised procedures, long-term treatment, rehabilitation or further medical evaluation.",
  ],
  [
    "Hubballi to Chennai",
    "A train ambulance from Hubballi to Chennai may support patients travelling for advanced medical services, planned procedures or continued hospital care.",
  ],
  [
    "Hubballi to Pune",
    "Patients travelling to Pune for specialised treatment or rehabilitation may require supported railway transportation with appropriate medical supervision.",
  ],
  [
    "Hubballi to Mumbai",
    "A long-distance train ambulance from Hubballi to Mumbai can be arranged for patients requiring advanced treatment, specialist consultation, rehabilitation or continued medical care.",
  ],
  [
    "Hubballi to Ahmedabad",
    "Patients travelling to Ahmedabad for specialised healthcare can have the railway journey coordinated with medical escort and road ambulance arrangements.",
  ],
  [
    "Hubballi to Delhi",
    "A medically supported journey from Hubballi to Delhi may be considered for patients travelling for specialist treatment, planned procedures or continued hospital care.",
  ],
  [
    "Hubballi to Jaipur",
    "Patients travelling to Jaipur for treatment, rehabilitation or specialist consultation can have medical and ground transportation support coordinated around the railway journey.",
  ],
];

const BOOKING = [
  [
    "1. Share the Patient's Travel Details",
    "Provide the patient's current condition, medical reports, Hubballi pickup location, hospital information, destination and preferred travel date.",
  ],
  [
    "2. Explain the Required Medical Assistance",
    "Discuss the patient's mobility, oxygen requirement, monitoring needs, medication requirements and required medical escort with the transportation team.",
  ],
  [
    "3. Coordinate Railway and Road Transportation",
    "Railway arrangements, patient handling and road ambulance services can be coordinated between the Hubballi pickup location, railway station and destination hospital.",
  ],
  [
    "4. Confirm the Transfer Plan",
    "Once the medical, railway and ground transportation requirements are confirmed, the relevant teams can coordinate the patient's movement and begin the transfer.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance Between Hubballi and the Destination",
    "The distance between Hubballi and the receiving city can influence the overall cost, particularly when longer journeys require extended medical supervision.",
  ],
  [
    "02",
    "Train and Patient-Space Requirements",
    "The railway arrangement, patient-space requirements, stretcher needs and available travel facilities may affect the final train ambulance price.",
  ],
  [
    "03",
    "Medical Escort Level",
    "Charges can vary depending on whether the patient requires a trained attendant, nurse, doctor or a higher level of medical supervision.",
  ],
  [
    "04",
    "Equipment and Medical Support",
    "Oxygen facilities, monitoring devices, respiratory support, infusion pumps and other medical equipment may contribute to the overall transportation cost.",
  ],
  [
    "05",
    "Pickup and Destination Ambulance",
    "Road ambulance transportation between the Hubballi pickup location, railway station and receiving hospital may also contribute to the final train ambulance charges.",
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
  "Hubballi City",
  "Vidya Nagar",
  "Gokul Road",
  "Keshwapur",
  "Deshpande Nagar",
  "Hosur",
  "Unkal",
  "Old Hubballi",
  "Navanagar",
  "Shirur Park",
  "Tarihal",
  "Amargol",
  "Kusugal Road",
  "Airport Road",
  "CBT Area",
  "Anand Nagar",
  "Bengeri",
  "Sattur",
  "Gabbur",
  "Dharwad",
  "Kundgol",
  "Kalghatgi",
  "Gadag",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Hubballi?",
    "A train ambulance service in Hubballi provides medically supported railway transportation for patients who require assistance during a long-distance journey. Depending on the patient's condition, medical staff, oxygen support, monitoring equipment and road ambulance services can be arranged.",
  ],
  [
    "2. How can I book a train ambulance from Hubballi?",
    "You can share the patient's medical condition, pickup location, destination and travel requirements with Humancare. The team can review the requirements and coordinate railway, medical and ground transportation arrangements.",
  ],
  [
    "3. What is the train ambulance cost from Hubballi?",
    "The train ambulance cost depends on the destination, railway arrangement, medical escort, equipment and road ambulance requirements. A quotation can be prepared after reviewing the patient's specific transfer needs.",
  ],
  [
    "4. What factors affect train ambulance charges?",
    "Train ambulance charges may depend on journey distance, patient-space requirements, railway arrangements, medical staff, equipment and road ambulance transportation at the pickup and destination locations.",
  ],
  [
    "5. Can a patient travel from Hubballi to Bengaluru by train ambulance?",
    "A patient may travel from Hubballi to Bengaluru by train ambulance when the patient's condition is suitable for railway transportation. The appropriate medical escort and ambulance support can be planned according to the patient's requirements.",
  ],
  [
    "6. Can a doctor or nurse accompany the patient?",
    "Yes. A doctor, nurse or trained medical attendant may accompany the patient depending on the patient's medical condition and the level of supervision required during the journey.",
  ],
  [
    "7. What equipment can be arranged in a train ambulance from Hubballi?",
    "Depending on the patient's requirements, equipment may include oxygen support, vital-sign monitoring devices, portable respiratory support, infusion pumps, airway-care supplies and patient transfer equipment.",
  ],
  [
    "8. Does the service include pickup from a Hubballi hospital?",
    "Road ambulance transportation can be coordinated from a hospital or residence in Hubballi to the relevant railway station. Destination-side ambulance transportation can also be arranged for transfer to the receiving hospital.",
  ],
  [
    "9. How long does it take to arrange a train ambulance from Hubballi?",
    "The arrangement time depends on railway availability, destination, medical requirements, escort requirements and ambulance coordination. Sharing the patient's travel details in advance can help with planning.",
  ],
  [
    "10. Is train ambulance travel suitable for critically ill patients?",
    "Train travel may be appropriate only for patients who are medically suitable for railway transportation. Critically ill patients require careful assessment and may need another transportation option depending on their condition.",
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
  alternateName: "Humancare Train Ambulance Service Hubballi",
  description:
    "Arrange train ambulance service in Hubballi with medical escorts, oxygen support, patient monitoring and road ambulance coordination for long-distance patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-hubballi.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hubballi Railway Station Area",
    addressLocality: "Hubballi",
    addressRegion: "Karnataka",
    postalCode: "580020",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 15.3647, longitude: 75.1240 },
  areaServed: [
    { "@type": "City", name: "Hubballi" },
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
  name: "Train Ambulance Service in Hubballi",
  description:
    "Train Ambulance Service in Hubballi: Organised Medical Travel for Long-Distance Patient Transfers.",
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
          name: "Deceased Patient Transportation",
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
      name: "Hubballi",
      item: `${CONTACT.domain}/hubballi`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance in Hubballi",
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

const FAVICON = "/favicon.svg?v=2";

/* =========================================================================
   SEO HEAD
   ========================================================================= */
function SeoHead() {
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-hubballi.jpg`;
  return (
    <>
      <title>
        Train Ambulance Service in Hubballi | ICU Rail Ambulance 24x7
      </title>
      <meta
        name="description"
        content="Arrange train ambulance service in Hubballi with medical escorts, oxygen support, patient monitoring and road ambulance coordination for long-distance patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance in hubballi, train ambulance service in hubballi, rail ambulance hubballi, patient transfer hubballi, ICU train ambulance hubballi, hubballi to bengaluru train ambulance, hubballi to mumbai train ambulance"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Hubballi" />
      <meta name="geo.position" content="15.3647;75.1240" />
      <meta name="ICBM" content="15.3647, 75.1240" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/svg+xml" href={FAVICON} />
      <link rel="apple-touch-icon" href="/New-LOGO.webp" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Hubballi | ICU Rail Ambulance 24x7"
      />
      <meta
        property="og:description"
        content="Arrange train ambulance service in Hubballi with medical escorts, oxygen support, patient monitoring and road ambulance coordination for long-distance patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Hubballi: Organised Medical Travel for Long-Distance Patient Transfers"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Hubballi | ICU Rail Ambulance 24x7"
      />
      <meta
        name="twitter:description"
        content="Arrange train ambulance service in Hubballi with medical escorts, oxygen support, patient monitoring and road ambulance coordination for long-distance patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Hubballi: Organised Medical Travel for Long-Distance Patient Transfers"
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
function Hubballi() {
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
                    <a href="/hubballi">Hubballi</a>
                  </li>
                  <li aria-current="page">Train Ambulance in Hubballi</li>
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
                    Train Ambulance Service in Hubballi: Organised Medical
                    Travel for Long-Distance Patient Transfers
                  </h1>
                  <p className="kl-hero-sub">
                    Patient transfer for journeys from Hubballi will become
                    difficult if the patient needs help with movement, medical
                    observation, oxygen, or treatment during transit. Humancare
                    Train Ambulance assists families in organising rail travel
                    with necessary medical staff, patient monitoring, and road
                    ambulance arrangements. Transfer can be arranged either from
                    the patient's hospital or his residence in Hubballi to the
                    receiving hospital based upon medical condition, need of
                    travel, and destination.
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
                    When Is Train Ambulance Travel from Hubballi Suitable for
                    a Patient?
                  </h2>
                  <p>
                    The patients coming by train ambulance from Hubballi may be
                    those who can be transferred by train but are nowhere near
                    to reach by their own. Such cases may require help to move
                    in or out, help in handling the stretcher, observation or
                    required support during travel, etc and the deciding
                    physician is alone to judge that condition and may allow
                    such transfer.
                  </p>
                  <p>
                    Humancare co-ordinates the various needs connected to
                    medically escorted Hubballi rail transfer, like patient
                    transfer, railway booking, medical escort and road ambulance
                    services. This shall be able to help the families that had
                    to transfer a patient to another city for specialized
                    treatment, further investigations, planned hospital
                    admissions, rehabilitation or on-going care. The level of
                    support depends on the patient's clinical condition,
                    mobility, travel duration and medical requirements.
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
                  How Humancare Coordinates Patient Transfers from Hubballi
                </h2>
                <p>
                  A medically supported train transfer requires several
                  arrangements to be coordinated together. Patient movement,
                  railway transportation, medical supervision, and road
                  ambulance services are planned according to the patient's
                  individual requirements. Humancare helps organise these
                  components for transfers beginning in Hubballi.
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
                    Medical Support Equipment Used During Train Transfers from
                    Hubballi
                  </h2>
                  <p>
                    The equipment required during a train ambulance journey
                    depends on the patient's medical condition and the level of
                    support needed during transit. Humancare can coordinate
                    appropriate equipment along with suitable medical personnel.
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
                  Medical Escort Options for Hubballi Train Ambulance Services
                </h2>
                <p>
                  The medical escort is selected according to the patient's
                  condition, journey duration and level of supervision required
                  during transportation.
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
                <h2>Patients Who May Require Supported Railway Transportation</h2>
                <p>
                  A train ambulance from Hubballi may be considered for patients
                  who are medically suitable for a prolonged railway journey but
                  require assistance during travel. Common transfer requirements
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
                The suitability of railway transportation depends on the
                patient's medical stability, mobility, travel requirements and
                treating doctor's assessment. Patients requiring urgent or
                intensive transportation may require another medical transfer
                option.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes from Hubballi to Major Indian Cities</h2>
                <p>
                  Humancare can help coordinate long-distance patient transfers
                  from Hubballi to different healthcare destinations depending on
                  railway arrangements, patient requirements and coordination
                  with the receiving facility.
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
                  How to Arrange a Train Ambulance Booking from Hubballi
                </h2>
                <p>
                  Providing complete medical and travel information helps the
                  transportation team prepare the patient's journey according to
                  the required level of support.
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
                    What Influences Train Ambulance Cost from Hubballi?
                  </h2>
                  <p>
                    The train ambulance cost from Hubballi depends on the
                    destination, the patient's medical condition, journey
                    duration, and level of assistance required. Since every
                    patient has different transportation requirements, the train
                    ambulance price can vary from one transfer to another. Train
                    ambulance charges may include railway arrangements, patient
                    handling, medical staff, equipment and road ambulance
                    transportation. These requirements are reviewed before
                    preparing the quotation.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Hubballi"
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
                <h2>Areas Covered Around Hubballi</h2>
                <p>
                  Our road ambulance network can help coordinate patient pickup
                  and drop-off across Hubballi and nearby areas, depending on
                  availability and the requirements of the transfer.
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
                  Train Ambulance Service in Hubballi — Frequently Asked
                  Questions
                </h2>
                <p>
                  Answers to common questions families ask when arranging
                  medical rail transportation from Hubballi. These FAQs are
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

export default Hubballi;
