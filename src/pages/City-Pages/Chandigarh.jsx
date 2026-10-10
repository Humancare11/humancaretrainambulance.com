/**
 * Chandigarh.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Chandigarh.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-Chandigarh",
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
  "Complete transfer coordination from Chandigarh to the receiving hospital",
  "Patient-specific medical equipment and trained medical support",
  "Rail-based transportation for long-distance intercity patient movement",
  "Road ambulance support for pickup and destination-side transfer",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Trained Medical Professionals",
    text: "Medical professionals can accompany the patient according to the level of care required. They can assist with vital monitoring, prescribed medications, oxygen support, and other necessary medical needs throughout the railway journey.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Train Ambulance Coordination",
    text: "Families can contact our coordination team for arranging a Train Ambulance Service in Chandigarh according to their transfer requirements. We coordinate railway arrangements, medical staff, equipment, and ambulance connections through one process.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Transfer",
    text: "The patient's journey can begin with road ambulance pickup from a hospital, residence, or care facility in Chandigarh. After the railway journey, destination-side ambulance support can be coordinated to complete the transfer to the receiving hospital.",
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
    title: "Train Ambulance Cost Planning",
    text: "The Train Ambulance Cost in Chandigarh depends on factors such as destination, railway accommodation, patient's condition, medical team, equipment, and road ambulance requirements. These requirements are assessed before providing the transfer quotation.",
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
    title: "Family Communication & Coordination",
    text: "A long-distance medical journey involves several stages, and families may need regular information about the patient's transfer. Our coordination team assists with important journey updates and helps keep the transfer organized.",
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
    title: "Customized ICU Support",
    text: "An ICU Train Ambulance in Chandigarh can be equipped according to the patient's medical requirements. Oxygen, ventilator assistance, cardiac monitoring, infusion support, and other equipment can be arranged depending on the level of care required.",
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
    text: "Ventilator support can be arranged for patients who require respiratory assistance during transportation. The equipment and medical supervision are selected according to the patient's clinical requirements.",
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
    text: "The monitor allows the medical team to track important parameters such as ECG, SpO₂, blood pressure, and pulse during the Rail Ambulance journey from Chandigarh.",
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
    text: "Emergency cardiac equipment can be included for transfers requiring a higher level of critical-care preparedness and cardiac monitoring during the journey.",
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
    text: "These devices allow prescribed medicines and IV fluids to be delivered at controlled rates when required during a long-distance Train Ambulance transfer.",
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
    text: "Oxygen support can be arranged according to the patient's condition and expected travel requirements, with appropriate supply planning for the complete journey.",
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
    text: "Portable suction and airway-management equipment can assist patients who require respiratory secretion management or airway support during transit.",
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
    text: "Necessary emergency medicines and medical supplies can be carried according to the patient's condition and the clinical requirements established before the transfer.",
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
    text: "Patient-transfer equipment assists with safe movement during ambulance pickup, railway boarding, deboarding, and transfers between road ambulance and railway transportation.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "A doctor can accompany patients requiring a higher level of medical supervision during transit. The doctor can monitor the patient's condition and provide appropriate medical attention based on the patient's requirements.",
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
    text: "A trained nurse can provide bedside care, monitor vital signs, administer prescribed medications, assist with IV support, and provide continuous assistance throughout the ICU Train Ambulance from Chandigarh.",
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
    text: "Transfer attendants assist with stretcher handling, station movement, railway boarding and deboarding, and coordination between road ambulance services and the train.",
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
    text: "Our coordination team manages railway arrangements, ambulance connections, medical-team coordination, and family communication to keep the Train Ambulance transfer from Chandigarh organized from beginning to end.",
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
    "Chandigarh to Delhi Train Ambulance",
    "A medically supported rail transfer for patients travelling from Chandigarh to Delhi for advanced treatment, specialist consultations, surgery, oncology care, cardiac treatment, or continued medical management.",
  ],
  [
    "Chandigarh to Mumbai Train Ambulance",
    "A long-distance Rail Ambulance from Chandigarh for patients requiring specialist treatment, surgery, oncology care, cardiac treatment, rehabilitation, or other advanced healthcare services in Mumbai.",
  ],
  [
    "Chandigarh to Jaipur Train Ambulance",
    "A planned medical railway transfer for patients travelling to Jaipur for specialist consultations, surgery, treatment, rehabilitation, or continued hospital care.",
  ],
  [
    "Chandigarh to Ahmedabad Train Ambulance",
    "A coordinated long-distance patient transfer for patients travelling from Chandigarh to Ahmedabad for specialist treatment, advanced medical services, or follow-up care.",
  ],
  [
    "Chandigarh to Vellore Train Ambulance",
    "A medically supervised rail transfer for patients travelling to Vellore for specialized treatment and follow-up care, with medical equipment and onboard support arranged according to the patient's condition.",
  ],
  [
    "Chandigarh to Hyderabad Train Ambulance",
    "A long-distance ICU Train Ambulance route from Chandigarh for patients travelling to Hyderabad for advanced medical treatment, specialist care, surgery, or continued hospital management.",
  ],
  [
    "Chandigarh to Chennai Train Ambulance",
    "A planned railway medical transfer for patients referred to Chennai for specialized treatment, oncology services, surgery, cardiac care, or other specialist medical requirements.",
  ],
  [
    "Chandigarh to Bengaluru Train Ambulance",
    "A medically coordinated transfer for patients travelling from Chandigarh to Bengaluru for specialist healthcare, treatment, rehabilitation, or follow-up medical care.",
  ],
  [
    "Chandigarh to Kolkata Train Ambulance",
    "A long-distance Train Ambulance from Chandigarh for patients requiring medically supported travel to Kolkata for specialized treatment, surgery, oncology care, or continued medical management.",
  ],
  [
    "Chandigarh to Pune Train Ambulance",
    "A coordinated patient transfer by rail for patients travelling to Pune for specialist consultations, treatment, rehabilitation, surgery, or post-operative care.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Share the patient's medical condition, current hospital or home location in Chandigarh, destination city, and other important transfer details with our coordination team.",
  ],
  [
    "2. Get Your Transfer Plan & Quote",
    "Our team reviews the patient's medical needs, route, railway requirements, equipment, and medical staff before preparing the transfer plan and Train Ambulance Cost.",
  ],
  [
    "3. Confirm & Prepare",
    "Once the transfer is confirmed, our team coordinates medical documents, railway arrangements, ambulance pickup, medical escort, required equipment, and the journey schedule.",
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "The patient is collected from the hospital or home in Chandigarh, transferred to the railway station by road ambulance, assisted during boarding, medically supported throughout the Rail Ambulance journey, and transferred by destination-side ambulance to the receiving hospital.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance & Destination City",
    "The journey distance can influence the overall Train Ambulance Charges from Chandigarh. Longer routes generally require more travel time and may require additional medical and transportation arrangements.",
  ],
  [
    "02",
    "Railway Accommodation & Patient Setup",
    "The accommodation required for the patient can affect the transfer quotation. Stretcher requirements, available space, privacy, and the medical setup needed during the railway journey are considered when planning the Rail Ambulance from Chandigarh.",
  ],
  [
    "03",
    "Medical Team & Level of Care",
    "The patient's condition determines the level of medical assistance needed. Depending on the case, the transfer may require a trained attendant, nurse, critical-care nurse, or doctor for medical supervision during the journey.",
  ],
  [
    "04",
    "ICU Equipment & Medical Supplies",
    "The equipment required for an ICU Train Ambulance from Chandigarh can influence the final cost. Ventilator support, oxygen, cardiac monitoring, infusion pumps, suction equipment, emergency supplies, and other patient-specific requirements are considered.",
  ],
  [
    "05",
    "Road Ambulance & Transfer Distance",
    "Road ambulance services may be required between the patient's hospital or home and the railway station, followed by another transfer at the destination. Ambulance type, distance, and medical requirements can therefore contribute to the final Train Ambulance Charges from Chandigarh.",
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
  "Chandigarh",
  "Sector 17",
  "Sector 22",
  "Sector 34",
  "Sector 35",
  "Sector 43",
  "Sector 44",
  "Sector 15",
  "Sector 32",
  "Manimajra",
  "Industrial Area",
  "Zirakpur",
  "Mohali",
  "Kharar",
  "Panchkula",
  "Pinjore",
  "Kalka",
  "Dera Bassi",
  "New Chandigarh",
  "SAS Nagar",
  "Ambala",
  "Baddi",
  "Solan",
  "Ropar",
  "Kurali",
];

const FAQS = [
  [
    "1. What is a Train Ambulance Service in Chandigarh?",
    "A Train Ambulance Service in Chandigarh is a medically supported railway transfer for patients travelling from Chandigarh to another city for treatment or continued medical care. Depending on the patient's condition, the service can include a stretcher, oxygen, monitoring equipment, medical attendants, and road ambulance support.",
  ],
  [
    "2. Who can use an ICU Train Ambulance from Chandigarh?",
    "Patients who require medical observation or critical-care support during a long-distance journey may be considered for an ICU Train Ambulance from Chandigarh. The level of medical support is determined according to the patient's condition and treating doctor's recommendation.",
  ],
  [
    "3. How much does a Train Ambulance from Chandigarh cost?",
    "The Train Ambulance Cost in Chandigarh depends on the destination, journey distance, railway accommodation, patient's condition, medical team, equipment, and road ambulance requirements. A customized quotation can be prepared after reviewing the patient's transfer needs.",
  ],
  [
    "4. Which cities can I travel to by Rail Ambulance from Chandigarh?",
    "A Rail Ambulance from Chandigarh can be planned to several cities depending on railway connectivity and availability. Possible destinations include Delhi, Mumbai, Jaipur, Ahmedabad, Vellore, Hyderabad, Chennai, Bengaluru, Kolkata, Pune, and other cities across India.",
  ],
  [
    "5. Does Train Ambulance Service in Chandigarh include road ambulance pickup?",
    "Yes. Road ambulance support can be coordinated to transfer the patient from a home, hospital, or care facility in Chandigarh to the railway station. Destination-side road ambulance support can also be arranged to complete the transfer to the receiving hospital.",
  ],
  [
    "6. Can a doctor or nurse accompany the patient?",
    "Yes. Medical escorts can be arranged according to the patient's condition and required level of care. Depending on the case, the accompanying team may include a trained nurse, critical-care doctor, or medical attendant.",
  ],
  [
    "7. What equipment is available in an ICU Train Ambulance?",
    "The medical equipment depends on the patient's requirements and may include a ventilator, oxygen supply, multi-parameter monitor, infusion or syringe pumps, suction equipment, emergency medicines, and patient-transfer equipment.",
  ],
  [
    "8. How can I book a Train Ambulance Service in Chandigarh?",
    "To arrange a Train Ambulance Service in Chandigarh, provide the patient's medical condition, current hospital or home location, destination city, and transfer requirements by phone or WhatsApp. Our team can assess the requirements, coordinate railway and ambulance arrangements, and provide the Train Ambulance Price before confirmation.",
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
  alternateName: "Humancare Train Ambulance Service Chandigarh",
  description:
    "Book Train Ambulance Service in Chandigarh with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-siliguri.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Jalpaiguri Railway Station Area",
    addressLocality: "Chandigarh",
    addressRegion: "West Bengal",
    postalCode: "734007",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.7271, longitude: 88.3953 },
  areaServed: [
    { "@type": "City", name: "Chandigarh" },
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
  name: "Train Ambulance Service in Chandigarh",
  description:
    "Train Ambulance in Chandigarh — Critical Care Support for Long-Distance Patient Transfers.",
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
      name: "Chandigarh",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Chandigarh",
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
      <title>Train Ambulance Service in Chandigarh | ICU Rail Ambulance</title>
      <meta
        name="description"
        content="Book Train Ambulance Service in Chandigarh with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in Chandigarh, train ambulance in Chandigarh, rail ambulance Chandigarh, patient transfer Chandigarh, ICU train ambulance Chandigarh, Chandigarh to kolkata train ambulance, Chandigarh to delhi train ambulance, new jalpaiguri train ambulance"
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
      <meta name="geo.placename" content="Chandigarh" />
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
        content="Train Ambulance Service in Chandigarh | ICU Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book Train Ambulance Service in Chandigarh with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Chandigarh - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Chandigarh | ICU Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book Train Ambulance Service in Chandigarh with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Chandigarh - Humancare Train Ambulance"
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
function Chandigarh() {
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
                    <a href={CONTACT.pageUrl}>Chandigarh</a>
                  </li>
                  <li aria-current="page">
                    Train Ambulance Service in Chandigarh
                  </li>
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
                    Train Ambulance Service in Chandigarh — ICU-Equipped Rail
                    Transfers for Critical Patients
                  </h1>
                  <p className="kl-hero-sub">
                    When a patient in Chandigarh needs to travel to another city
                    for advanced treatment, specialist consultation, surgery,
                    rehabilitation, or continued care, a regular journey may not
                    provide the medical support they require. Humancare provides
                    Train Ambulance Service in Chandigarh with patient-specific
                    medical arrangements, including oxygen support, ventilator
                    assistance, cardiac monitoring, and trained medical
                    attendants. From hospital or home pickup to railway boarding
                    and destination-side ambulance support, the journey can be
                    coordinated as a complete bed-to-bed patient transfer.
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
                      alt="Train Ambulance in Chandigarh — Critical Care Support for Long-Distance Patient Transfers"
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
                    WHAT IS A TRAIN AMBULANCE SERVICE IN Chandigarh
                  </span>
                  <h2>
                    What Makes a Train Ambulance Service in Chandigarh a
                    Practical Choice for Patient Transfer?
                  </h2>
                  <p>
                    Chandigarh serves as an important healthcare center for
                    patients from the city as well as nearby areas of Punjab,
                    Haryana, Himachal Pradesh, and other northern regions. When
                    a patient's required specialist treatment or continued care
                    is available outside Chandigarh, travelling over a long
                    distance can become difficult, particularly when the patient
                    needs medical assistance throughout the journey. A Train
                    Ambulance Service in Chandigarh provides a structured option
                    for such intercity medical transfers.
                  </p>
                  <p>
                    A Rail Ambulance Service in Chandigarh is planned around the
                    patient's individual medical requirements. Instead of
                    travelling as an ordinary passenger, the patient can be
                    transferred with a stretcher and appropriate medical
                    equipment such as oxygen, cardiac monitoring, ventilator
                    support, infusion equipment, and emergency supplies. Trained
                    medical personnel can remain with the patient during the
                    railway journey.
                  </p>
                  <p>
                    An ICU Train Ambulance in Chandigarh can be considered for
                    patients who require closer observation during long-distance
                    transportation. Depending on the medical assessment, the
                    transfer may include ventilator support, oxygen, continuous
                    vital monitoring, nursing assistance, or other critical-care
                    arrangements. The appropriate setup should be determined
                    according to the patient's condition and treating doctor's
                    recommendation.
                  </p>
                  <p>
                    Another advantage of choosing a Train Ambulance from
                    Chandigarh is the ability to coordinate multiple stages of
                    the transfer together. Road ambulance pickup, railway
                    transportation, onboard medical support, and
                    destination-side ambulance arrangements can be connected
                    into one transfer plan, helping families manage the
                    patient's journey more efficiently.
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
                      alt="Medical team assisting patient for rail transfer at New Jalpaiguri Chandigarh"
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
                  Coordinated Medical Support for Chandigarh Patient Transfers
                </h2>
                <p>
                  Long-distance patient transportation requires careful
                  coordination between medical staff, railway arrangements,
                  equipment, and road ambulance services. Our team brings these
                  requirements together to provide a structured Train Ambulance
                  Service in Chandigarh based on the patient's condition and
                  destination.
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
                  ICU Train Ambulance Equipment for Chandigarh Patient Transfers
                </h2>
                <p>
                  Patients requiring medical assistance during a long-distance
                  railway journey need an appropriate medical setup before
                  departure. Our ICU Train Ambulance Service in Chandigarh can
                  include essential equipment selected according to the
                  patient's condition, allowing the accompanying medical team to
                  provide monitoring and support throughout transit.
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
                  Medical Professionals Supporting Your Chandigarh Train
                  Transfer
                </h2>
                <p>
                  Every Train Ambulance Service in Chandigarh is planned
                  according to the patient's condition, travel distance, and
                  level of medical assistance required. The appropriate medical
                  team can accompany the patient while our coordination staff
                  handles the railway and ambulance arrangements.
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
                    Patients Commonly Supported by Train Ambulance from
                    Chandigarh
                  </h2>
                  <p>
                    A Train Ambulance Service in Chandigarh can be planned for
                    patients with different medical conditions and mobility
                    requirements. The patient's condition is reviewed before
                    travel so that appropriate medical equipment and personnel
                    can be arranged.
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
                    If a patient's condition is not included above, our medical
                    coordination team can review the case and discuss the
                    appropriate transportation arrangement. Depending on the
                    patient's medical requirements, this may include an ICU
                    Train Ambulance from Chandigarh, medical escort, oxygen
                    support, or another suitable patient-transfer option.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="ICU equipped train ambulance setup for transfers from Chandigarh"
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
                <h2>Train Ambulance Routes From Chandigarh</h2>
                <p>
                  Humancare can coordinate Train Ambulance routes from
                  Chandigarh according to the patient's destination, medical
                  condition, railway connectivity, and journey requirements.
                  Commonly relevant destination routes include:
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
                <h2>
                  Book a Train Ambulance from Chandigarh in 4 Simple Steps
                </h2>
                <p>
                  We simplify the Train Ambulance Service in Chandigarh booking
                  process by coordinating the medical, railway, and road
                  ambulance requirements around the patient's journey.
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
                  <h2>What Affects Train Ambulance Pricing from Chandigarh?</h2>
                  <p>
                    The Train Ambulance Cost in Chandigarh is not the same for
                    every patient because medical and travel requirements vary
                    from one transfer to another. The final Train Ambulance
                    Price can depend on the destination, railway accommodation,
                    patient's condition, medical team, equipment, and road
                    ambulance arrangements.
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
                      alt="Cost calculation factors for train ambulance in Chandigarh"
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
                <h2>Service Areas Around Chandigarh</h2>
                <p>
                  Our road ambulance coordination can support patient pickup and
                  drop-off around Chandigarh before and after a Train Ambulance
                  Service in Chandigarh, helping connect the patient's home or
                  hospital with the railway station and the receiving hospital
                  at the destination.
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
                  Train Ambulance Service in Chandigarh — Frequently Asked
                  Questions
                </h2>
                <p>
                  Families arranging a Train Ambulance Service in Chandigarh
                  often need information about medical support, equipment,
                  routes, pricing, booking, and ambulance connections. Here are
                  answers to common questions about medically supported railway
                  transfers.
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
              <h2>Need a Train Ambulance from Chandigarh?</h2>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup hospital or residence in
                Chandigarh, and destination. Our medical transfer coordinators
                are available 24x7 to assist you.
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

export default Chandigarh;
