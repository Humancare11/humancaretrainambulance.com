/**
 * Surat.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Surat.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-Surat",
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
  "One coordinated transfer plan from Surat to the destination hospital",
  "Medical support arranged according to the patient's condition and journey requirements",
  "Rail-based option for patients facing long-distance intercity transfers",
  "Pickup and destination ambulance coordination for smoother bed-to-bed movement",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Critical-Care Medical Team",
    text: "A trained doctor or nurse can accompany the patient throughout the journey, providing medical supervision, administering prescribed medicines, monitoring vital signs, and responding to changes in the patient's condition. The level of medical support is arranged according to the patient's requirements.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Train Ambulance Coordination",
    text: "Our coordination team is available around the clock to arrange urgent Train Ambulance Service in Surat, including transfers planned during weekends and holidays. We coordinate the railway journey and medical requirements so families have a single point of contact.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Assistance",
    text: "The transfer can begin with road ambulance pickup from a hospital, home, or care facility in Surat and continue through the railway journey to the destination. A destination-side road ambulance can then complete the transfer to the receiving hospital, creating a connected bed-to-bed patient transfer.",
  },
  {
    tone: "",
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
    title: "Clear Train Ambulance Cost Details",
    text: "Before the journey is arranged, families receive a quotation based on factors such as route distance, medical equipment, onboard medical staff, ambulance requirements, and patient condition. This helps families understand the expected train ambulance cost in Surat before confirming the transfer.",
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
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    title: "Regular Family Communication",
    text: "Long-distance medical travel can leave families anxious about the patient's journey. Our team provides updates regarding important stages of the transfer, helping family members stay informed while the patient is travelling by Rail Ambulance from Surat.",
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Support for Different Patient Requirements",
    text: "Our ICU Train Ambulance in Surat can be planned for different levels of medical support, from patients requiring oxygen and monitoring to those needing more intensive care arrangements. Equipment and medical personnel are selected according to the patient's condition and treating doctor's recommendations.",
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
    text: "For patients requiring invasive or non-invasive respiratory support, with ventilator assistance arranged according to the patient's clinical requirements throughout transit.",
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
    title: "Multi-Parameter Patient Monitor",
    text: "Continuous monitoring of vital parameters such as ECG, SpO₂, blood pressure, pulse rate, and other readings required during the Rail Ambulance journey.",
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
    text: "Emergency cardiac equipment available for critical situations and operated by appropriately trained medical personnel accompanying the patient.",
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
    text: "Controlled delivery of prescribed medicines and IV fluids when precise infusion rates are required during a long-distance train ambulance transfer from Surat.",
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
    title: "Oxygen Supply & Backup",
    text: "Adequate oxygen support planned according to the patient's condition and journey duration, with reserve capacity considered for uninterrupted medical assistance.",
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
    title: "Suction Unit & Airway Kit",
    text: "Portable suction equipment and airway-management supplies available for patients who require respiratory secretion management or emergency airway support.",
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
    title: "Emergency Medication Kit",
    text: "Essential emergency medicines and supplies carried according to the patient's medical needs and the clinical protocol followed by the accompanying medical team.",
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
    title: "Stretcher & Spine Board",
    text: "Patient-transfer equipment designed to support safe movement during boarding, railway transfers, and the road ambulance connection at the beginning or end of the journey.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "A doctor can accompany patients requiring higher levels of medical supervision, including those dependent on ventilator or advanced monitoring support. The doctor oversees the patient's condition and responds to medical needs during transit.",
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
    title: "Trained Critical-Care Nurse",
    text: "The nurse provides continuous bedside care, monitors vital signs, administers prescribed medications, manages IV support, and assists the patient throughout the ICU Train Ambulance from Surat.",
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
    title: "Patient Transfer Attendants",
    text: "Trained attendants assist with stretcher handling, boarding and deboarding, station movement, and transfers between the Rail Ambulance and road ambulance, helping reduce unnecessary movement and discomfort for the patient.",
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
    title: "24×7 Journey Coordination Team",
    text: "Our coordination team manages railway arrangements, ambulance connections, medical-team coordination, and communication between the sending and receiving hospitals, helping keep the train ambulance transfer from Surat organized from start to finish.",
  },
];

const PATIENTS = [
  "Cardiac & post-heart procedure patients",
  "Ventilator-dependent patients",
  "Post-operative & surgical transfers",
  "Stroke & neurological patients",
  "Cancer & oncology patients",
  "Fracture, trauma & orthopaedic cases",
  "Kidney disease & dialysis patients",
  "Elderly, weak & bedridden patients",
  "Hospital-to-home discharge transfers",
  "High-risk pregnancy referrals",
  "Organ transplant & follow-up patients",
  "Palliative & end-of-life transfers",
];

const ROUTES = [
  [
    "Surat to Mumbai Train Ambulance",
    "A practical route for patients travelling to Mumbai for advanced cardiac care, oncology treatment, surgery, rehabilitation, or specialist consultations with medical support throughout the journey.",
  ],
  [
    "Surat to Ahmedabad Train Ambulance",
    "A frequently arranged medical transfer for patients requiring specialized treatment in Ahmedabad, with onboard medical assistance and road ambulance coordination at both ends.",
  ],
  [
    "Surat to Delhi Train Ambulance",
    "A long-distance Rail Ambulance option for patients referred to Delhi for advanced treatment, tertiary-care services, oncology, neurology, cardiac care, and other specialist medical needs.",
  ],
  [
    "Surat to Vellore Train Ambulance",
    "A planned medical rail transfer for patients travelling to Vellore for specialized treatment and follow-up care, with ICU-level support available according to the patient's condition.",
  ],
  [
    "Surat to Chennai Train Ambulance",
    "A suitable long-distance route for patients referred to Chennai for specialized medical treatment, surgery, cancer care, or continued hospital management.",
  ],
  [
    "Surat to Hyderabad Train Ambulance",
    "A medically supported railway transfer for patients travelling to Hyderabad for advanced healthcare services, with appropriate equipment and trained medical attendants arranged for the journey.",
  ],
  [
    "Surat to Bengaluru Train Ambulance",
    "A longer-distance Train Ambulance from Surat for patients requiring specialist care in Bengaluru, with medical monitoring and road ambulance support coordinated around the railway journey.",
  ],
  [
    "Surat to Pune Train Ambulance",
    "A convenient intercity medical transfer for patients travelling from Surat to Pune for specialist consultations, treatment, rehabilitation, or post-operative care.",
  ],
  [
    "Surat to Kolkata Train Ambulance",
    "A long-distance ICU Train Ambulance route for patients requiring medically supervised travel to Kolkata, with onboard critical-care support planned according to their medical requirements.",
  ],
  [
    "Surat to Jaipur Train Ambulance",
    "A medical rail transfer option for patients travelling from Surat to Jaipur for treatment, specialist care, or continued medical support, with bed-to-bed ambulance coordination available.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Share the patient's medical condition, current location or hospital in Surat, and the required destination with our coordination team.",
  ],
  [
    "2. Get Your Transfer Plan & Quote",
    "We assess the patient's requirements, route, railway availability, medical equipment, and required medical staff before providing the train ambulance cost and transfer plan.",
  ],
  [
    "3. Confirm & Prepare",
    "Once the transfer is confirmed, our team coordinates the required medical documents, railway arrangements, ambulance pickup, medical escort, and journey schedule with the family.",
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "Our team coordinates pickup from the hospital or home in Surat, assists with railway boarding, manages the Rail Ambulance journey, and arranges destination-side ambulance support until the patient reaches the receiving hospital.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance & Destination City",
    "The destination has a direct impact on the overall train ambulance charges from Surat. A longer journey to cities such as Delhi, Chennai, Kolkata, or Bengaluru may require more travel time and medical resources than a shorter transfer to Ahmedabad or Mumbai.",
  ],
  [
    "02",
    "Railway Coach & Patient Accommodation",
    "The type of railway accommodation required for the patient can affect the transfer cost. The required space, privacy, stretcher arrangement, medical equipment setup, and availability of suitable berths are considered while planning the Rail Ambulance from Surat.",
  ],
  [
    "03",
    "Medical Team & Level of Care",
    "The patient's condition determines the level of medical assistance needed during transit. A stable patient may require a trained medical attendant, while a critically ill patient may need a nurse, critical-care doctor, or specialized ICU Train Ambulance support.",
  ],
  [
    "04",
    "ICU Equipment & Medical Supplies",
    "The equipment required during the journey is another important component of the Train Ambulance Cost in Surat. Ventilator support, oxygen, cardiac monitoring, infusion pumps, suction equipment, emergency medicines, and other patient-specific supplies may influence the overall quotation.",
  ],
  [
    "05",
    "Road Ambulance & Transfer Distance",
    "The journey may require road ambulance transportation between the patient's hospital or home and the railway station, along with another ambulance at the destination. The distance, ambulance type, and patient's medical requirements at both ends can therefore affect the final Train Ambulance Charges from Surat.",
  ],
];

const COMPARE_ROWS = [
  [
    "Long-distance journey",
    [null, "Appropriate for many medically suitable long-distance transfers"],
    [null, "Preferred when rapid transportation is medically necessary"],
  ],
  [
    "Overall expense",
    ["kl-yes", "Generally a more economical option"],
    ["kl-yes", "Usually considerably more expensive"],
  ],
  [
    "Medical assistance",
    ["kl-yes", "Doctor, nurse and ICU equipment can be arranged"],
    [
      "kl-yes",
      "Specialized medical team and critical-care equipment can be arranged",
    ],
  ],
  [
    "Patient suitability",
    [
      null,
      "Suitable for patients who can safely travel by rail with medical supervision",
    ],
    [null, "Suitable for patients requiring faster transportation"],
  ],
  [
    "Ground transfer",
    ["kl-yes", "Road ambulance can be coordinated at both ends"],
    [null, "Ground ambulance is generally needed at both ends"],
  ],
];

const AREAS = [
  "Surat City",
  "Adajan",
  "Vesu",
  "Piplod",
  "Varachha",
  "Katargam",
  "Udhna",
  "Athwa",
  "Rander",
  "Pal",
  "Amroli",
  "Dindoli",
  "Limbayat",
  "Sachin",
  "Palsana",
  "Bardoli",
  "Navsari",
  "Bharuch",
  "Ankleshwar",
  "Olpad",
  "Kamrej",
  "Kosamba",
  "Vyara (on request)",
  "Valsad (on request)",
];

const FAQS = [
  [
    "1. What is a Train Ambulance Service in Surat?",
    "A Train Ambulance Service in Surat is a medically supported railway transfer for patients who need to travel from Surat to another city for treatment or continued care. Depending on the patient's condition, the journey can include a stretcher, oxygen, monitoring equipment, medical attendants, and road ambulance support.",
  ],
  [
    "2. Who can use an ICU Train Ambulance from Surat?",
    "An ICU Train Ambulance from Surat can be arranged for patients who require continuous medical monitoring or critical-care support during a long-distance journey. Patients requiring ventilator support, oxygen, cardiac monitoring, or other specialized care may be considered based on their medical condition and treating doctor's advice.",
  ],
  [
    "3. How much does a Train Ambulance from Surat cost?",
    "The Train Ambulance Cost in Surat depends on factors such as the destination, journey distance, railway accommodation, medical team, equipment, patient condition, and road ambulance requirements. A customized quotation is provided after assessing the patient's transfer requirements.",
  ],
  [
    "4. Which cities can I travel to by Rail Ambulance from Surat?",
    "A Rail Ambulance from Surat can be planned to several major cities depending on railway connectivity and availability. Common destinations may include Mumbai, Ahmedabad, Delhi, Vellore, Chennai, Hyderabad, Bengaluru, Pune, Kolkata, and Jaipur.",
  ],
  [
    "5. Does the Train Ambulance Service in Surat include road ambulance pickup?",
    "Yes. Road ambulance support can be coordinated to collect the patient from a home, hospital, or care facility in Surat and transfer them to the railway station. Destination-side ambulance support can also be arranged for the final transfer to the receiving hospital.",
  ],
  [
    "6. Can a doctor or nurse accompany the patient on the train?",
    "Yes. Medical escorts can be arranged according to the patient's condition and care requirements. Depending on the case, the transfer may include a trained nurse, critical-care doctor, or medical attendant to provide monitoring and assistance during the journey.",
  ],
  [
    "7. What equipment is available in an ICU Train Ambulance?",
    "Equipment is selected according to the patient's medical needs and may include a ventilator, oxygen supply, multi-parameter monitor, infusion or syringe pumps, suction equipment, emergency medicines, and patient-transfer equipment.",
  ],
  [
    "8. How can I book a Train Ambulance Service in Surat?",
    "You can contact Humancare by phone or WhatsApp and provide the patient's condition, current hospital or location in Surat, and destination city. Our team can then assess the medical requirements, coordinate the railway and ambulance arrangements, and provide the Train Ambulance Price before confirmation.",
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
  alternateName: "Humancare Train Ambulance Service Surat",
  description:
    "Book a Train Ambulance Service in Surat with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed transfers to cities across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-siliguri.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Jalpaiguri Railway Station Area",
    addressLocality: "Surat",
    addressRegion: "West Bengal",
    postalCode: "734007",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.7271, longitude: 88.3953 },
  areaServed: [
    { "@type": "City", name: "Surat" },
    { "@type": "AdministrativeArea", name: "West Bengal" },
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
      availableLanguage: ["en", "hi", "bn"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Surat",
  description:
    "Train Ambulance in Surat — Critical Care Support for Long-Distance Patient Transfers.",
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
      name: "Surat",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Surat",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-siliguri.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Surat | ICU Rail Ambulance 24x7</title>
      <meta
        name="description"
        content="Book a Train Ambulance Service in Surat with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed transfers to cities across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in Surat, train ambulance in Surat, rail ambulance Surat, patient transfer Surat, ICU train ambulance Surat, Surat to kolkata train ambulance, Surat to delhi train ambulance, new jalpaiguri train ambulance"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Surat" />
      <meta name="geo.position" content="26.7271;88.3953" />
      <meta name="ICBM" content="26.7271, 88.3953" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Surat | ICU Rail Ambulance 24x7"
      />
      <meta
        property="og:description"
        content="Book a Train Ambulance Service in Surat with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed transfers to cities across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Surat - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Surat | ICU Rail Ambulance 24x7"
      />
      <meta
        name="twitter:description"
        content="Book a Train Ambulance Service in Surat with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed transfers to cities across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Surat - Humancare Train Ambulance"
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
function Surat() {
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
                    <a href={CONTACT.pageUrl}>Surat</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Surat</li>
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
                    Train Ambulance Service in Surat: Critical Care Rail
                    Transfers for Long-Distance Patients
                  </h1>
                  <p className="kl-hero-sub">
                    When a patient needs to travel from Surat to another city
                    for advanced or continued medical treatment, Humancare Train
                    Ambulance provides a practical option for long-distance
                    medical transportation. Our Train Ambulance Service in Surat
                    is arranged with essential critical-care support, including
                    oxygen, ventilator support, cardiac monitoring, medical
                    equipment, and trained medical attendants. From coordinating
                    the rail journey to arranging bed-to-bed patient transfer,
                    we help families move patients safely from hospitals or
                    homes in Surat to destinations such as Mumbai, Ahmedabad,
                    Delhi, Chennai, Hyderabad, Bengaluru, and other cities
                    across India.
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
                      alt="Train Ambulance in Surat — Critical Care Support for Long-Distance Patient Transfers"
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
                  <span className="kl-eyebrow">
                    WHAT IS A TRAIN AMBULANCE SERVICE IN Surat
                  </span>
                  <h2>
                    What Makes a Train Ambulance Service in Surat a Practical
                    Choice for Patient Transfer?
                  </h2>
                  <p>
                    Patients in Surat may need to travel outside the city when
                    their treatment, specialist consultation, surgery,
                    rehabilitation, or follow-up care is available at a
                    different medical center. For families arranging such
                    journeys, the challenge is not simply finding a train
                    ticket. A patient who requires continuous oxygen,
                    monitoring, nursing assistance, or mobility support needs a
                    transportation arrangement built around their medical
                    condition. This is where a Train Ambulance Service in Surat
                    can provide a dedicated solution for intercity patient
                    movement.
                  </p>
                  <p>
                    Rather than placing a patient in an ordinary railway coach,
                    a Rail Ambulance Service is planned around the patient's
                    healthcare requirements. A reserved railway space can be
                    equipped with a stretcher, oxygen supply, cardiac monitor,
                    emergency medical equipment, and other necessary support
                    based on the patient's condition. Humancare also coordinates
                    the supporting road ambulance at the starting point and
                    destination, helping families arrange the transfer from a
                    Surat hospital, residence, or care facility to the
                    destination hospital.
                  </p>
                  <p>
                    An ICU Train Ambulance in Surat can be considered when a
                    patient needs medical observation during a long railway
                    journey but does not require air transportation. The medical
                    team accompanying the patient can monitor their condition
                    throughout the trip and provide necessary assistance during
                    transit. This can be particularly useful for families
                    planning transfers to cities such as Mumbai, Ahmedabad,
                    Delhi, Hyderabad, Chennai, Bengaluru, or other treatment
                    destinations connected by rail.
                  </p>
                  <p>
                    The biggest advantage of choosing a Train Ambulance from
                    Surat is that the journey can be planned as one coordinated
                    medical transfer rather than several disconnected
                    arrangements. Depending on the patient's condition and
                    route, families can arrange railway transportation, medical
                    attendants, onboard equipment, and road ambulance
                    connectivity together. The final setup should always be
                    selected according to the patient's medical needs and the
                    recommendation of their treating doctor.
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
                      alt="Medical team assisting patient for rail transfer at New Jalpaiguri Surat"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ WHY US / DEPENDABLE CARE ============ */}
          <section className="kl-section kl-bg-soft" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">WHY FAMILIES CHOOSE US</span>
                <h2>
                  Reliable Medical Support for Surat-to-Destination Patient
                  Transfers
                </h2>
                <p>
                  A long-distance transfer can be difficult for both the patient
                  and family. Our team coordinates the medical team, railway
                  journey, equipment, and road ambulance support so the entire
                  Train Ambulance Service in Surat is handled through one
                  coordinated process.
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
                <span className="kl-eyebrow">INSIDE THE COACH</span>
                <h2>
                  ICU Train Ambulance Equipment Critical Care Support During
                  Surat Patient Transfers
                </h2>
                <p>
                  An ICU Train Ambulance in Surat is planned around the
                  patient's medical requirements and the demands of
                  long-distance railway travel. Humancare arranges essential
                  medical equipment and trained medical support to help maintain
                  continuous care during the journey, making Train Ambulance
                  Service in Surat a practical option for patients who cannot
                  travel safely in a regular train coach.
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
                <span className="kl-eyebrow">WHO TRAVELS WITH THE PATIENT</span>
                <h2>
                  Medical Professionals and Support Staff for Your Surat Train
                  Transfer
                </h2>
                <p>
                  Every Train Ambulance Service in Surat is planned according to
                  the patient's condition, travel distance, and level of medical
                  support required. The accompanying team is selected to provide
                  appropriate monitoring and assistance throughout the railway
                  journey, while our coordination staff manages the transfer
                  between the hospitals, railway station, and road ambulances.
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
                  <span className="kl-eyebrow">WHO WE TRANSFER</span>
                  <h2>
                    Patient Conditions We Commonly Support on Train Ambulance
                    Transfers
                  </h2>
                  <p>
                    Every Train Ambulance Service in Surat is planned after
                    considering the patient's current condition, mobility,
                    treatment requirements, and travel needs. The medical team
                    prepares the necessary equipment and support before
                    departure. Common patient transfers include:
                  </p>
                  <div
                    className="kl-feature-list kl-mt-16"
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(240px, 1fr))",
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
                    If your patient's condition is not mentioned above, contact
                    our medical coordination team. We can discuss the case with
                    the treating doctor and assess the appropriate level of
                    support for a Train Ambulance from Surat, including whether
                    an ICU Train Ambulance or another form of medical
                    transportation would be more suitable.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="ICU equipped train ambulance setup for transfers from Surat"
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
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes From Surat</h2>
                <p>
                  Below are some of the most frequently planned Train Ambulance
                  routes from Surat. Route availability, journey duration,
                  railway connections, and medical arrangements depend on the
                  patient's condition and destination requirements.
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
            </div>
          </section>

          {/* ============ BOOKING PROCESS ============ */}
          <section className="kl-section" id="booking">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">HOW IT WORKS</span>
                <h2>Book a Train Ambulance from Surat in 4 Simple Steps</h2>
                <p>
                  We keep the Train Ambulance Service in Surat booking process
                  straightforward, so families can focus on the patient's care
                  while our team coordinates the medical and travel
                  arrangements.
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
                  <span className="kl-eyebrow">UNDERSTANDING COST</span>
                  <h2>What Affects Train Ambulance Pricing from Surat?</h2>
                  <p>
                    Every patient transfer from Surat has different medical and
                    travel requirements, so the Train Ambulance Cost in Surat is
                    calculated according to the specific journey rather than a
                    fixed price. Factors such as the destination, railway
                    arrangements, patient's condition, medical team, ICU
                    equipment, and road ambulance requirements can all influence
                    the final Train Ambulance Price. Our coordination team
                    reviews these requirements before sharing a clear transfer
                    quotation.
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
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train2}
                      alt="Cost calculation factors for train ambulance in Surat"
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
                <span className="kl-eyebrow">TRANSPORTATION COMPARISON</span>
                <h2>Train Ambulance vs Air Ambulance — A Quick Comparison</h2>
                <p>
                  Key factors to help families evaluate whether rail or air
                  ambulance is the most suitable choice for their loved one.
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
                <span className="kl-eyebrow">LOCAL COVERAGE</span>
                <h2>Service Areas Around Surat</h2>
                <p>
                  Beyond Surat city, our road ambulance network can support
                  patient pickup and drop-off across nearby areas before and
                  after a Train Ambulance Service in Surat, helping families
                  coordinate the complete transfer from the patient's location
                  to the railway station and destination hospital.
                </p>
              </div>
              <div className="kl-areas-cloud">
                {AREAS.map((area) => (
                  <span className="kl-area-tag" key={area}>
                    <IconPin /> {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ============ FAQS ============ */}
          <section className="kl-section" id="faq">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                <h2>
                  Train Ambulance Service in Surat — Frequently Asked Questions
                </h2>
                <p>
                  Answers to the questions families commonly ask about arranging
                  a Train Ambulance Service in Surat, including medical support,
                  booking, routes, equipment, pricing, and patient transfer
                  arrangements. Structured data for these FAQs can be included
                  for search engines.
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
              <h2>Need a Train Ambulance from Surat?</h2>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup hospital or residence in
                Surat, and destination. Our medical transfer coordinators are
                available 24x7 to assist you.
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

export default Surat;
