/**
 * Bhubaneswar.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Bhubaneswar.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-Bhubaneswar",
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
  "Coordinated patient transfer from Bhubaneswar to the receiving hospital",
  "Medical equipment and trained support selected according to patient requirements",
  "Long-distance rail transportation with onboard medical assistance",
  "Road ambulance connectivity for pickup and destination-side transfer",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Experienced Medical Support",
    text: "Trained medical professionals can accompany patients according to their medical requirements. The accompanying team can assist with vital monitoring, prescribed medications, oxygen support, and other necessary care throughout the railway journey.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Transfer Coordination",
    text: "Our coordination team can assist families with arranging a Train Ambulance from Bhubaneswar at different times of the day. A single point of contact coordinates railway arrangements, medical requirements, ambulance connections, and journey planning.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Bed-to-Bed Patient Transfer",
    text: "The transfer can begin with an ambulance pickup from the patient's home, hospital, or healthcare facility in Bhubaneswar. After the railway journey, destination-side ambulance support can be arranged to complete the transfer to the receiving hospital.",
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
    title: "Transparent Cost Planning",
    text: "The Train Ambulance Cost in Bhubaneswar depends on the destination, railway accommodation, patient's condition, medical team, equipment, and road ambulance requirements. These factors are reviewed before the transfer so families can receive a quotation based on their specific journey.",
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
    title: "Family-Friendly Coordination",
    text: "Long-distance medical transportation can involve several arrangements at once. Our coordination team keeps the family informed about the important stages of the transfer and assists with communication related to the patient's journey.",
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
    title: "Patient-Specific Medical Setup",
    text: "An ICU Train Ambulance in Bhubaneswar can be arranged with medical equipment and personnel based on the patient's condition. From oxygen and monitoring support to ventilator and critical-care requirements, the setup is planned according to the level of care needed during transit.",
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
    text: "Ventilator support can be arranged for patients who require respiratory assistance during transportation. The equipment and support level are selected according to the patient's clinical requirements.",
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
    text: "A multi-parameter monitor allows the medical team to observe important readings such as ECG, oxygen saturation, pulse, and blood pressure during the Rail Ambulance journey from Bhubaneswar.",
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
    text: "A defibrillator can be included as part of the emergency medical setup for patients requiring higher levels of cardiac monitoring and critical-care support during transit.",
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
    text: "Infusion and syringe pumps allow prescribed medicines and fluids to be administered at controlled rates when required during a long-distance Train Ambulance transfer.",
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
    text: "Oxygen support can be arranged according to the patient's condition and expected journey requirements, with appropriate supply planning for the duration of the transfer.",
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
    text: "Portable suction equipment and airway-management supplies can support patients who require respiratory secretion management or airway assistance during transportation.",
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
    text: "The medical team can carry necessary emergency medicines and supplies based on the patient's condition and the clinical requirements identified before the journey.",
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
    text: "Patient-transfer equipment supports safe movement during ambulance pickup, railway boarding, deboarding, and the connection between the railway journey and destination-side ambulance.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "A doctor can accompany patients who require a higher level of medical supervision during a long-distance transfer. The doctor can monitor the patient's condition and provide appropriate medical attention throughout the journey.",
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
    text: "A trained nurse can provide bedside care, monitor vital signs, administer prescribed medications, assist with IV therapy, and support the patient throughout the ICU Train Ambulance from Bhubaneswar.",
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
    text: "Transfer attendants assist with stretcher handling, patient movement, railway boarding and deboarding, and coordination between the road ambulance and railway transportation.",
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
    text: "Our coordination team handles railway arrangements, ambulance connections, medical-team coordination, and communication with the family, helping keep the Train Ambulance transfer from Bhubaneswar organized from beginning to end.",
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
    "Bhubaneswar to Kolkata Train Ambulance",
    "A medically supported rail transfer for patients travelling from Bhubaneswar to Kolkata for specialist consultations, surgery, advanced treatment, rehabilitation, or continued hospital care.",
  ],
  [
    "Bhubaneswar to Hyderabad Train Ambulance",
    "A long-distance Rail Ambulance from Bhubaneswar for patients requiring medical supervision while travelling to Hyderabad for specialized treatment and hospital care.",
  ],
  [
    "Bhubaneswar to Chennai Train Ambulance",
    "A planned railway medical transfer for patients referred to Chennai for specialist treatment, surgery, oncology care, cardiac care, or continued medical management.",
  ],
  [
    "Bhubaneswar to Bengaluru Train Ambulance",
    "A long-distance patient transfer option for patients travelling from Bhubaneswar to Bengaluru for specialized healthcare, follow-up treatment, rehabilitation, or other medical requirements.",
  ],
  [
    "Bhubaneswar to Mumbai Train Ambulance",
    "A medically supported transfer for patients travelling to Mumbai for advanced treatment, specialist consultations, surgery, oncology, cardiac care, or other healthcare needs.",
  ],
  [
    "Bhubaneswar to Delhi Train Ambulance",
    "A long-distance ICU Train Ambulance route from Bhubaneswar for patients requiring supervised travel to Delhi for tertiary-care treatment and specialist medical services.",
  ],
  [
    "Bhubaneswar to Vellore Train Ambulance",
    "A patient-focused rail transfer for families travelling from Bhubaneswar to Vellore for specialized treatment and follow-up care, with medical support arranged according to the patient's condition.",
  ],
  [
    "Bhubaneswar to Pune Train Ambulance",
    "A coordinated medical railway transfer for patients travelling to Pune for specialist treatment, rehabilitation, surgery, or continued medical care.",
  ],
  [
    "Bhubaneswar to Ahmedabad Train Ambulance",
    "A long-distance Train Ambulance from Bhubaneswar for patients requiring medically supervised transportation to Ahmedabad for treatment, specialist care, or follow-up services.",
  ],
  [
    "Bhubaneswar to Jaipur Train Ambulance",
    "A planned rail-based patient transfer for patients travelling from Bhubaneswar to Jaipur, with onboard medical assistance and road ambulance coordination available according to the transfer requirements.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Provide the patient's medical condition, current hospital or home location in Bhubaneswar, destination city, and preferred travel details to our coordination team.",
  ],
  [
    "2. Get Your Transfer Plan & Quote",
    "Our team reviews the patient's requirements, destination, railway arrangements, medical equipment, and required medical staff before preparing the transfer plan and Train Ambulance Cost.",
  ],
  [
    "3. Confirm & Prepare",
    "After confirmation, the required medical documents, railway arrangements, ambulance pickup, medical escort, equipment, and journey schedule are coordinated for the patient.",
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "The patient is picked up from the hospital or home in Bhubaneswar, transferred to the railway station by road ambulance, assisted during railway boarding, medically supported throughout the Rail Ambulance journey, and transferred by destination-side ambulance to the receiving hospital.",
  ],
];

const FACTORS = [
  [
    "01",
    "Travel Distance & Destination",
    "The distance between Bhubaneswar and the receiving city can influence the overall Train Ambulance Charges. Longer journeys may require additional travel time, medical resources, and support arrangements.",
  ],
  [
    "02",
    "Railway Accommodation Requirements",
    "The railway accommodation required for the patient can affect the overall transfer cost. Stretcher arrangements, available space, privacy requirements, and the medical setup needed inside the coach are considered during planning.",
  ],
  [
    "03",
    "Medical Staff & Care Level",
    "The patient's medical condition determines the type of medical team required. Depending on the case, the transfer may require a medical attendant, trained nurse, critical-care nurse, or doctor for continuous supervision during the journey.",
  ],
  [
    "04",
    "Medical Equipment & Supplies",
    "The equipment required during the ICU Train Ambulance from Bhubaneswar can influence the final quotation. Ventilator support, oxygen, cardiac monitoring, infusion pumps, suction equipment, emergency supplies, and other patient-specific requirements are considered.",
  ],
  [
    "05",
    "Road Ambulance Connectivity",
    "Road ambulance services may be needed from the patient's location to the railway station and from the destination station to the receiving hospital. The ambulance type, transfer distance, and medical requirements can therefore contribute to the final Train Ambulance Charges from Bhubaneswar.",
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
  "Bhubaneswar City",
  "Patia",
  "Chandrasekharpur",
  "Khandagiri",
  "Nayapalli",
  "Saheed Nagar",
  "Old Town",
  "Mancheswar",
  "Baramunda",
  "Jaydev Vihar",
  "Bhubaneswar Railway Station Area",
  "Sahid Nagar",
  "Rasulgarh",
  "Jagamara",
  "Tamando",
  "Khordha",
  "Cuttack",
  "Puri",
  "Jatni",
  "Balianta",
  "Baliapatna",
  "Nimapara",
  "Pipili",
  "Athagarh",
];

const FAQS = [
  [
    "1. What is a Train Ambulance Service in Bhubaneswar?",
    "A Train Ambulance Service in Bhubaneswar is a medically supported railway transfer arranged for patients who need to travel to another city for treatment or continued medical care. Depending on the patient's condition, it can include a stretcher, oxygen, monitoring equipment, medical attendants, and road ambulance support.",
  ],

  [
    "2. Who can travel in an ICU Train Ambulance from Bhubaneswar?",
    "Patients who require medical monitoring or additional support during a long-distance railway journey may be considered for an ICU Train Ambulance from Bhubaneswar. The appropriate level of care depends on the patient's condition and the recommendation of their treating medical team.",
  ],

  [
    "3. How much does a Train Ambulance from Bhubaneswar cost?",
    "The Train Ambulance Cost in Bhubaneswar depends on several factors, including the destination, travel distance, railway accommodation, medical staff, equipment, patient's condition, and road ambulance requirements. A quotation can be prepared according to the specific transfer requirements.",
  ],

  [
    "4. Which cities can I travel to by Rail Ambulance from Bhubaneswar?",
    "A Rail Ambulance from Bhubaneswar can be planned to several destinations depending on railway connectivity and availability. Possible destinations include Kolkata, Hyderabad, Chennai, Bengaluru, Mumbai, Delhi, Vellore, Pune, Ahmedabad, Jaipur, and other cities across India.",
  ],

  [
    "5. Does Train Ambulance Service in Bhubaneswar include road ambulance pickup?",
    "Yes. Road ambulance support can be coordinated to transfer the patient from a home, hospital, or care facility in Bhubaneswar to the railway station. Destination-side ambulance support can also be arranged for the final transfer to the receiving hospital.",
  ],

  [
    "6. Can a doctor or nurse accompany the patient during the railway journey?",
    "Yes. Medical escorts can be arranged according to the patient's medical condition and care requirements. Depending on the case, the accompanying team may include a trained nurse, critical-care doctor, or medical attendant.",
  ],

  [
    "7. What equipment is available in an ICU Train Ambulance?",
    "The medical setup depends on the patient's condition and may include a ventilator, oxygen supply, multi-parameter monitor, infusion or syringe pumps, suction equipment, emergency medical supplies, and patient-transfer equipment.",
  ],

  [
    "8. How can I book a Train Ambulance Service in Bhubaneswar?",
    "To book a Train Ambulance Service in Bhubaneswar, share the patient's medical condition, current location or hospital, destination city, and transfer requirements with our team by phone or WhatsApp. The medical and travel requirements can then be assessed and the Train Ambulance Price and transfer plan can be provided before confirmation.",
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
  alternateName: "Humancare Train Ambulance Service Bhubaneswar",
  description:
    "Book Train Ambulance Service in Bhubaneswar with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-siliguri.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Jalpaiguri Railway Station Area",
    addressLocality: "Bhubaneswar",
    addressRegion: "West Bengal",
    postalCode: "734007",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.7271, longitude: 88.3953 },
  areaServed: [
    { "@type": "City", name: "Bhubaneswar" },
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
  name: "Train Ambulance Service in Bhubaneswar",
  description:
    "Train Ambulance in Bhubaneswar — Critical Care Support for Long-Distance Patient Transfers.",
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
      name: "Bhubaneswar",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Bhubaneswar",
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
      <title>Train Ambulance Service in Bhubaneswar | ICU Rail Ambulance</title>
      <meta
        name="description"
        content="Book Train Ambulance Service in Bhubaneswar with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in Bhubaneswar, train ambulance in Bhubaneswar, rail ambulance Bhubaneswar, patient transfer Bhubaneswar, ICU train ambulance Bhubaneswar, Bhubaneswar to kolkata train ambulance, Bhubaneswar to delhi train ambulance, new jalpaiguri train ambulance"
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
      <meta name="geo.placename" content="Bhubaneswar" />
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
        content="Train Ambulance Service in Bhubaneswar | ICU Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book Train Ambulance Service in Bhubaneswar with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Bhubaneswar - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Bhubaneswar | ICU Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book Train Ambulance Service in Bhubaneswar with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Bhubaneswar - Humancare Train Ambulance"
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
function Bhubaneswar() {
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
                    <a href={CONTACT.pageUrl}>Bhubaneswar</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Bhubaneswar</li>
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
                    Train Ambulance Service in Bhubaneswar: ICU-Equipped Rail
                    Transfers for Critical Patients
                  </h1>
                  <p className="kl-hero-sub">
                    When a patient in Bhubaneswar needs to travel to another
                    city for specialized treatment, surgery, rehabilitation, or
                    continued medical care, arranging safe long-distance
                    transportation can be challenging. Humancare provides Train
                    Ambulance Service in Bhubaneswar with medical supervision
                    and patient-specific equipment, including oxygen support,
                    ventilator assistance, cardiac monitoring, and trained
                    medical attendants. From hospital or home pickup to railway
                    transfer and destination-side ambulance support, we
                    coordinate the journey as a connected bed-to-bed patient
                    transfer.
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
                      alt="Train Ambulance in Bhubaneswar — Critical Care Support for Long-Distance Patient Transfers"
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
                    WHAT IS A TRAIN AMBULANCE SERVICE IN Bhubaneswar
                  </span>
                  <h2>
                    What Makes a Train Ambulance Service in Bhubaneswar a
                    Practical Choice for Patient Transfer?
                  </h2>
                  <p>
                    Patients may need to leave Bhubaneswar when a particular
                    specialist, treatment facility, surgery, or advanced medical
                    service is available in another city. For patients who
                    cannot safely manage a conventional train journey without
                    assistance, a Train Ambulance from Bhubaneswar provides a
                    medically planned alternative for long-distance
                    transportation.
                  </p>
                  <p>
                    A Rail Ambulance Service in Bhubaneswar is arranged around
                    the individual patient's condition rather than treating the
                    journey as ordinary railway travel. Depending on medical
                    requirements, the setup may include a patient stretcher,
                    oxygen supply, cardiac monitoring, ventilator support,
                    infusion equipment, and emergency medical supplies. Trained
                    medical personnel can accompany the patient throughout the
                    railway journey.
                  </p>
                  <p>
                    An ICU Train Ambulance in Bhubaneswar can be considered for
                    patients who require closer observation and continuous
                    medical assistance while travelling. Medical support can be
                    planned for patients requiring oxygen, ventilator
                    assistance, vital-sign monitoring, nursing care, or other
                    critical-care arrangements, subject to assessment of their
                    condition and the treating doctor's recommendation.
                  </p>
                  <p>
                    Choosing a Train Ambulance Service in Bhubaneswar also
                    allows different parts of the transfer to be coordinated
                    together. Road ambulance pickup, railway transportation,
                    onboard medical care, and destination-side ambulance support
                    can be arranged as part of one transfer plan. This helps
                    families manage a long-distance patient journey without
                    having to coordinate every stage separately.
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
                      alt="Medical team assisting patient for rail transfer at New Jalpaiguri Bhubaneswar"
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
                  Coordinated Medical Care for Bhubaneswar Patient Transfers
                </h2>
                <p>
                  Moving a patient over a long distance requires more than
                  arranging railway transportation. Our team coordinates the
                  medical staff, equipment, railway journey, and ambulance
                  connections to create a structured Train Ambulance Service in
                  Bhubaneswar for patients travelling to treatment centers in
                  other cities.
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
                  ICU Train Ambulance Equipment for Bhubaneswar Patient
                  Transfers
                </h2>
                <p>
                  A long railway journey requires appropriate preparation when a
                  patient needs medical assistance during transit. Our ICU Train
                  Ambulance Service in Bhubaneswar can include essential
                  critical-care equipment based on the patient's condition,
                  helping medical personnel provide continuous monitoring and
                  support during the journey.
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
                  Medical Team Supporting Your Bhubaneswar Train Ambulance
                  Journey
                </h2>
                <p>
                  Each Train Ambulance Service in Bhubaneswar is planned
                  according to the patient's condition and the level of medical
                  care required during travel. The appropriate medical
                  professionals and support staff can accompany the patient
                  while our coordination team manages the railway and ambulance
                  arrangements.
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
                    Bhubaneswar
                  </h2>
                  <p>
                    A Train Ambulance Service in Bhubaneswar can be planned for
                    patients with different medical and mobility requirements.
                    Before the journey, the patient's condition is assessed so
                    the appropriate equipment, medical personnel, and
                    transportation support can be arranged.
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
                    If a patient's condition does not appear in the list, our
                    medical coordination team can review the case and discuss
                    the appropriate transportation arrangement. Depending on the
                    patient's requirements, this may include an ICU Train
                    Ambulance from Bhubaneswar, medical escort, oxygen support,
                    or another suitable form of patient transportation.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="ICU equipped train ambulance setup for transfers from Bhubaneswar"
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
                <h2>Train Ambulance Routes From Bhubaneswar</h2>
                <p>
                  Humancare can coordinate long-distance Train Ambulance routes
                  from Bhubaneswar based on the patient's destination, medical
                  requirements, railway connectivity, and availability. Some
                  commonly relevant destination routes include:
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
                  Book a Train Ambulance from Bhubaneswar in 4 Simple Steps
                </h2>
                <p>
                  We make the Train Ambulance Service in Bhubaneswar booking
                  process straightforward by coordinating the medical, railway,
                  and road ambulance requirements around the patient's journey.
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
                  <h2>
                    What Affects Train Ambulance Pricing from Bhubaneswar?
                  </h2>
                  <p>
                    There is no single fixed Train Ambulance Price in
                    Bhubaneswar because every patient transfer has different
                    medical and transportation requirements. The final Train
                    Ambulance Cost can depend on the destination, railway
                    accommodation, patient's condition, medical team, equipment,
                    and road ambulance requirements.
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
                      alt="Cost calculation factors for train ambulance in Bhubaneswar"
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
                <h2>Service Areas Around Bhubaneswar</h2>
                <p>
                  Our road ambulance coordination can support patient pickup and
                  drop-off around Bhubaneswar before and after a Train Ambulance
                  Service in Bhubaneswar. This allows families to connect the
                  patient's home or hospital with the railway station and
                  continue the transfer to the receiving hospital at the
                  destination.
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
                  Train Ambulance Service in Bhubaneswar — Frequently Asked
                  Questions
                </h2>
                <p>
                  Families arranging medical transportation often have questions
                  about Train Ambulance Service in Bhubaneswar, including
                  medical support, equipment, routes, booking, pricing, and road
                  ambulance connections.
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
              <h2>Need a Train Ambulance from Bhubaneswar?</h2>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup hospital or residence in
                Bhubaneswar, and destination. Our medical transfer coordinators are
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

export default Bhubaneswar;
