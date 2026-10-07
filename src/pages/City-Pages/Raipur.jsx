/**
 * Raipur.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Raipur.
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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-Raipur",
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
  "Medical coordination from the patient's location in Raipur to the destination",
  "Patient-specific equipment and professional medical assistance",
  "Practical option for selected long-distance medical transfers",
  "Ambulance connectivity between hospitals, residence, and railway stations",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Dedicated Clinical Support",
    text: "Depending on the patient's condition, a qualified doctor and nurse can accompany the patient and provide bedside supervision, medication assistance, and monitoring throughout the journey from Raipur.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Round-the-Clock Coordination",
    text: "Our team remains available 24×7 to assist families with Train Ambulance Service in Raipur, including urgent enquiries, medical requirements, railway coordination, and transfer planning.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Coordinated Ground Transportation",
    text: "Ambulance support can be arranged to connect the patient's residence or hospital with the railway station in Raipur and the destination station with the receiving hospital.",
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
    title: "Individualized Cost Planning",
    text: "There is no single fixed price for every transfer. The Train Ambulance Cost in Raipur is assessed according to the destination, patient's medical needs, railway arrangements, equipment, medical staff, and ground transportation.",
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
    title: "Communication During Transit",
    text: "Families can remain informed about the patient's transfer through updates from the coordination team, helping them stay connected throughout the medical journey.",
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
    title: "Adaptable Medical Arrangements",
    text: "The medical setup can be planned according to the patient's condition, whether the patient needs assistance with mobility or requires continuous monitoring and critical-care equipment during the Train Ambulance journey from Raipur.",
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
    text: "Can provide respiratory assistance to patients who require mechanical ventilation or other forms of breathing support during transportation.",
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
    title: "Multi-Parameter Monitor",
    text: "Used to observe important vital parameters such as ECG, oxygen saturation, blood pressure, and pulse during the patient's journey.",
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
    text: "An emergency cardiac device that can be kept available when the patient's medical condition requires access to cardiac emergency equipment.",
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
    text: "Help the medical team administer prescribed medicines and fluids at controlled and consistent rates during transit.",
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
    title: "Oxygen Cylinders + Backup",
    text: "Primary and reserve oxygen cylinders can be planned according to the patient's oxygen dependency and anticipated travel duration.",
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
    text: "Provides essential support for airway management and helps the medical team deal with respiratory secretions when necessary.",
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
    text: "Contains essential medicines, emergency supplies, and other medical items selected according to the patient's requirements.",
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
    text: "Helps facilitate safe patient movement during boarding and transfers between the ambulance, railway facility, and receiving hospital.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "Can accompany patients who require advanced medical observation, critical-care intervention, ventilator management, or close supervision during the transfer.",
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
    text: "Provides continuous bedside assistance, monitors the patient's condition, administers prescribed medication, and supports day-to-day medical requirements during transit.",
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
    title: "Trained Ambulance Attendants",
    text: "Assist with stretcher handling and patient movement between the patient's location, road ambulance, railway station, and destination hospital.",
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
    title: "24×7 Coordination Desk",
    text: "Manages the logistics of the Train Ambulance from Raipur, coordinates different teams, follows the transfer, and assists with communication between the family and hospitals.",
  },
];

const PATIENTS = [
  "Cardiac and post-cardiac patients",
  "Patients dependent on ventilator support",
  "Post-operative and surgical transfers",
  "Stroke and neurological patients",
  "Oncology and cancer patients",
  "Trauma and orthopaedic cases",
  "Renal and dialysis patients",
  "Elderly, immobile, and bedridden patients",
  "Patients returning home after discharge",
  "High-risk pregnancy referrals",
  "Patients requiring transplant follow-up",
  "Transportation of mortal remains",
];

const ROUTES = [
  [
    "Raipur to Delhi Train Ambulance",
    "Suitable for patients travelling to Delhi for advanced medical treatment, specialist consultation, complex procedures, or continued hospital care.",
  ],
  [
    "Raipur to Mumbai Train Ambulance",
    "Can be arranged for patients who need specialized healthcare in Mumbai and require medical supervision during the long-distance railway journey.",
  ],
  [
    "Raipur to Kolkata Train Ambulance",
    "A convenient medical transfer option for patients travelling to Kolkata for specialist consultation, treatment, surgery, or further medical care.",
  ],
  [
    "Raipur to Hyderabad Train Ambulance",
    "Designed for patients travelling to Hyderabad for specialized procedures, oncology services, cardiac treatment, and other advanced healthcare requirements.",
  ],
  [
    "Raipur to Bangalore Train Ambulance",
    "Can support patients travelling to Bengaluru for specialized treatment, rehabilitation, specialist consultation, or continued care.",
  ],
  [
    "Raipur to Chennai Train Ambulance",
    "Provides a medically supported rail-transfer option for patients travelling to Chennai for tertiary healthcare and specialized medical services.",
  ],
  [
    "Raipur to Lucknow Train Ambulance",
    "Can be arranged for patients requiring specialist treatment, consultation, or continued medical care in Lucknow.",
  ],
  [
    "Raipur to Patna Train Ambulance",
    "Suitable for patients who require assisted medical transportation from Raipur to Patna, with the journey planned around their mobility and healthcare needs.",
  ],
  [
    "Raipur to Pune Train Ambulance",
    "Can be organized for patients travelling to Pune for specialized treatment, rehabilitation, follow-up care, or specialist consultation.",
  ],
  [
    "Raipur to Jaipur Train Ambulance",
    "Provides a medically coordinated travel option for patients from Raipur requiring specialized treatment or continued healthcare services in Jaipur.",
  ],
];

const BOOKING = [
  [
    "1. Share the Patient's Details",
    "Call or WhatsApp our team with information about the patient's condition, present location in Raipur, destination, and any immediate medical requirements.",
  ],
  [
    "2. Plan the Medical Transfer",
    "We review the patient's requirements and work out suitable railway, berth, medical-team, equipment, and ambulance arrangements before sharing the estimated quotation.",
  ],
  [
    "3. Approve the Arrangement",
    "Once the transfer plan is confirmed, our team coordinates railway arrangements, medical documents, ambulance pickup, equipment, and other requirements needed before departure.",
  ],
  [
    "4. Complete the Patient Transfer",
    "The patient is coordinated from the hospital or residence in Raipur to the railway station and then from the destination station to the receiving hospital, with appropriate medical support during the journey.",
  ],
];

const FACTORS = [
  [
    "01",
    "Journey Length & Destination",
    "The distance between Raipur and the receiving city affects the overall transportation requirement and can influence the final quotation.",
  ],
  [
    "02",
    "Coach, Class & Medical Berth",
    "The selected train class, berth configuration, space required for equipment, and privacy requirements can affect the Train Ambulance Price in Raipur.",
  ],
  [
    "03",
    "Level of Medical Supervision",
    "A patient requiring a critical-care doctor and nurse will have different transfer requirements compared with a stable patient needing basic medical assistance.",
  ],
  [
    "04",
    "Equipment, Oxygen & Consumables",
    "Ventilator support, oxygen supply, monitoring devices, medicines, and other medical consumables can add to the overall transfer cost.",
  ],
  [
    "05",
    "Pickup & Destination Ambulances",
    "The patient's location in Raipur, distance to the railway station, and transportation from the destination station to the receiving hospital can influence the total quotation.",
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
    ["Usually considerably more expensive"],
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
  "Raipur",
  "Pandri",
  "Telibandha",
  "Shankar Nagar",
  "Devendra Nagar",
  "Mowa",
  "Saddu",
  "Tatibandh",
  "Gudhiyari",
  "Kota",
  "Samta Colony",
  "Bhatagaon",
  "Birgaon",
  "Urla",
  "Abhanpur",
  "Arang",
  "Tilda",
  "Bhilai",
  "Durg",
  "Rajnandgaon",
];

const FAQS = [
  [
    "1. What does a Train Ambulance Service in Raipur provide?",
    "A Train Ambulance Service in Raipur provides medically supported railway transportation for patients travelling to another city for treatment, specialist care, or continued medical support.",
  ],

  [
    "2. How do I arrange a Train Ambulance from Raipur?",
    "You can contact Humancare by phone or WhatsApp and provide the patient's medical condition, current location, destination, and treatment requirements. Our team can then plan the appropriate transfer.",
  ],

  [
    "3. Which destinations are available from Raipur by Train Ambulance?",
    "Medical train transfers from Raipur can be coordinated to destinations such as Delhi, Mumbai, Kolkata, Hyderabad, Bengaluru, Chennai, Pune, Jaipur, Lucknow, Patna, and other cities subject to railway connectivity and arrangements.",
  ],

  [
    "4. Can patients on ventilators be transferred by Train Ambulance from Raipur?",
    "A ventilator-dependent patient may be transported by Train Ambulance when the transfer is considered medically suitable. Appropriate ventilator support, oxygen, monitoring equipment, and qualified medical personnel can be arranged according to the case.",
  ],

  [
    "5. Will a medical professional accompany the patient?",
    "Yes, medical assistance can be arranged according to the patient's condition. Depending on the level of care required, the accompanying team may include a doctor, nurse, and trained attendants.",
  ],

  [
    "6. What is the Train Ambulance Cost in Raipur?",
    "The Train Ambulance Cost in Raipur depends on the destination, railway arrangements, berth type, medical team, equipment, oxygen requirements, and road ambulance support. The final quotation is prepared according to the patient's specific requirements.",
  ],

  [
    "7. Can I get ambulance service before and after the train journey?",
    "Yes, road ambulance support can be coordinated for pickup from the patient's residence or hospital in Raipur, transportation to the railway station, and onward transfer from the destination station to the receiving hospital.",
  ],

  [
    "8. Does Humancare provide bed-to-bed Train Ambulance service from Raipur?",
    "Yes. Humancare can coordinate the patient's movement from their residence or hospital in Raipur to the railway station, provide medical assistance during the railway journey, and arrange onward ambulance transportation to the destination hospital.",
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
  alternateName: "Humancare Train Ambulance Service Raipur",
  description:
    "Book train ambulance service in Raipur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-siliguri.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Jalpaiguri Railway Station Area",
    addressLocality: "Raipur",
    addressRegion: "West Bengal",
    postalCode: "734007",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.7271, longitude: 88.3953 },
  areaServed: [
    { "@type": "City", name: "Raipur" },
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
  name: "Train Ambulance Service in Raipur",
  description:
    "Train Ambulance in Raipur — Critical Care Support for Long-Distance Patient Transfers.",
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
      name: "Raipur",
      item: CONTACT.pageUrl,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance Service in Raipur",
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
      <title>
        Train Ambulance Service in Raipur | Medical Rail Ambulance
      </title>
      <meta
        name="description"
        content="Book train ambulance service in Raipur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in Raipur, train ambulance in Raipur, rail ambulance Raipur, patient transfer Raipur, ICU train ambulance Raipur, Raipur to kolkata train ambulance, Raipur to delhi train ambulance, new jalpaiguri train ambulance"
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
      <meta name="geo.placename" content="Raipur" />
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
        content="Train Ambulance Service in Raipur | Medical Rail Ambulance"
      />
      <meta
        property="og:description"
        content="Book train ambulance service in Raipur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance Service in Raipur - Humancare Train Ambulance"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Raipur | Medical Rail Ambulance"
      />
      <meta
        name="twitter:description"
        content="Book train ambulance service in Raipur with ICU ventilator, doctors, nurses, oxygen support, and bed-to-bed patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance Service in Raipur - Humancare Train Ambulance"
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
function Raipur() {
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
                    <a href={CONTACT.pageUrl}>Raipur</a>
                  </li>
                  <li aria-current="page">Train Ambulance Service in Raipur</li>
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
                    Train Ambulance in Raipur — Medically Supervised Patient
                    Transfers by Rail
                  </h1>
                  <p className="kl-hero-sub">
                    Humancare offers a professionally coordinated Train
                    Ambulance Service in Raipur for patients who need to travel
                    to another city for specialized treatment, advanced medical
                    care, or further recovery. Our service can support both
                    critical and stable patients, with the medical setup planned
                    according to their individual condition. Depending on the
                    level of care required, arrangements may include a medical
                    berth, oxygen supply, vital monitoring, ICU equipment, and
                    trained medical professionals. From arranging the railway
                    journey and local ambulance pickup to coordinating arrival
                    at the destination hospital, Humancare manages the complete
                    patient transfer from Raipur.
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
                      alt="Train Ambulance in Raipur — Critical Care Support for Long-Distance Patient Transfers"
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
                    WHAT IS A TRAIN AMBULANCE SERVICE IN Raipur
                  </span>
                  <h2>
                    When Is a Train Ambulance from Raipur the Right Choice?
                  </h2>
                  <p>
                    Raipur has developed into a major healthcare destination in
                    Central India, yet some medical conditions require treatment
                    at specialized centres in other cities. Patients may need to
                    travel for complex surgeries, advanced cancer care, cardiac
                    procedures, neurological treatment, or other specialized
                    services. For patients who cannot manage a conventional
                    long-distance journey, a Train Ambulance from Raipur can
                    offer a medically supported mode of transportation.
                  </p>
                  <p>
                    A Train Ambulance in Raipur enables a patient to travel by
                    rail while remaining under medical supervision. The setup
                    can be customized according to the patient's health needs
                    and may include a suitable medical berth, oxygen, monitoring
                    devices, and professional attendants. Humancare coordinates
                    the journey with the source and receiving hospitals to make
                    the transfer more organized for the patient's family.
                  </p>
                  <p>
                    For suitable patients, a Rail Ambulance Service in Raipur
                    can be a practical option for covering long distances where
                    travelling entirely by road may be difficult or
                    uncomfortable. The patient's medical requirements are
                    assessed before the journey so that appropriate support can
                    be planned.
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
                      alt="Medical team assisting patient for rail transfer at New Jalpaiguri Raipur"
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
                  Why Patients in Raipur Rely on Humancare for Medical Rail
                  Transfers
                </h2>
                <p>
                  A long-distance medical journey involves more than arranging a
                  railway ticket. Families also need to consider patient
                  mobility, medical supervision, equipment, ambulance
                  connectivity, and destination coordination. Humancare brings
                  these requirements together through one coordinated transfer
                  service.
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
                  Medical Facilities That Can Be Arranged Inside a Train
                  Ambulance from Raipur
                </h2>
                <p>
                  Medical transportation requires equipment appropriate to the
                  patient's condition. Humancare can arrange essential
                  facilities for a Train Ambulance in Raipur, allowing the
                  accompanying medical team to provide the required level of
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
                <h2>Medical Professionals Accompanying Patients from Raipur</h2>
                <p>
                  The medical team accompanying a patient is determined by the
                  patient's condition and level of care required. For every
                  Train Ambulance Service in Raipur, arrangements are planned
                  before departure to ensure appropriate medical supervision.
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
                    Patients Who May Benefit from a Train Ambulance in Raipur
                  </h2>
                  <p>
                    Before arranging transportation, the patient's medical
                    condition is reviewed so the appropriate level of assistance
                    can be planned. Our Train Ambulance Service in Raipur
                    commonly supports:
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
                    For conditions not mentioned above, families can contact our
                    team and provide the patient's medical details. The case can
                    be reviewed with the treating doctor to determine whether a
                    Train Ambulance from Raipur is an appropriate transportation
                    option.
                  </p>
                </div>
                <div>
                  <div className="kl-img-slot">
                    <img
                      src={train4}
                      alt="ICU equipped train ambulance setup for transfers from Raipur"
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
                <span className="kl-eyebrow">ROUTES WE COVER</span>
                <h2>Popular Medical Train Routes Starting from Raipur</h2>
                <p>
                  Humancare can coordinate Train Ambulance routes from Raipur to
                  different parts of India depending on railway connectivity,
                  destination requirements, and the patient's medical condition.
                  Some commonly requested destinations include:
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
                <h2>How to Arrange a Train Ambulance from Raipur</h2>
                <p>
                  Humancare simplifies the Train Ambulance booking process in
                  Raipur by coordinating medical requirements, railway
                  arrangements, and ground transportation through a structured
                  four-step process.
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
                    Key Factors That Influence Train Ambulance Charges from
                    Raipur
                  </h2>
                  <p>
                    The cost of a medical railway transfer varies according to
                    the patient's needs and journey requirements. Train
                    Ambulance Cost in Raipur is determined after considering
                    several factors rather than applying one standard rate.
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
                      alt="Cost calculation factors for train ambulance in Raipur"
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
                <h2>
                  Areas We Serve for Train Ambulance Transfers Around Raipur
                </h2>
                <p>
                  Our patient-transfer coordination can extend beyond central
                  Raipur, with road ambulance support available for connecting
                  patients from nearby localities and surrounding areas to the
                  railway station or healthcare facilities required for their
                  journey.
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
                  Frequently Asked Questions About Train Ambulance in Raipur
                </h2>
                <p>
                  Answers to common questions regarding booking, medical
                  escorts, equipment, and costs for transfers from Raipur.
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
              <h2>Need a Train Ambulance from Raipur?</h2>
              <p
                className="kl-mt-8"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Tell us the patient's condition, pickup hospital or residence in
                Raipur, and destination. Our medical transfer coordinators are
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

export default Raipur;
