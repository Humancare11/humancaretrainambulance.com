/**
 * Bengaluru.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Bengaluru.
 * Styles live in the sibling stylesheet ./TrainAmbulanceVaranasi.css.
 * -------------------------------------------------------------------------
 */

import React, { useState } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from "../../assets/City/Bengaluru/what-is-a-train-ambulance-service.webp";
import train2 from "../../assets/City/Bengaluru/what-determines-train-ambulance-cost-in-bengaluru.webp";
import HeroBanner from "../../assets/City/Bengaluru/train-ambulance-service-in-bengaluru.webp";
import train4 from "../../assets/City/Bengaluru/icu-train-ambulance-equipment-for-patient-safety.webp";

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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-bengaluru",
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
  "Medical coordination from the Bengaluru hospital or residence to the destination hospital",
  "Trained medical attendant and essential patient-care equipment during the rail journey",
  "Oxygen, cardiac monitoring and critical-care support based on the patient's medical requirements",
  "Road ambulance connectivity for pickup in Bengaluru and transfer to the receiving hospital",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Experienced Medical Escort",
    text: "Patients are accompanied by trained medical professionals selected according to their condition and transfer requirements. The escort team monitors the patient throughout the journey and provides the required medical support during transit.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Transfer Coordination",
    text: "Our coordination team is available around the clock to assist with urgent and planned Train Ambulance Service in Bengaluru. We help families organise the transfer, confirm medical requirements and coordinate the journey without unnecessary delays.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Transfer",
    text: "The journey can include road ambulance pickup from the Bengaluru hospital or residence, transfer to the railway station, onboard medical support and road ambulance transportation from the destination station to the receiving hospital.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Clear Pricing Before Booking",
    text: "Families receive a detailed quotation based on the patient's medical requirements, travel route, train arrangements, medical team and equipment required. This helps them understand the expected Train Ambulance cost from Bengaluru before confirming the transfer.",
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
    title: "Regular Family Communication",
    text: "We keep family members informed during the transfer through regular communication. Updates regarding the patient's journey and transfer progress help families stay connected even when they are not travelling with the patient.",
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
    title: "Support for Different Patient Conditions",
    text: "Our team coordinates transfers for patients with varying medical needs, including patients requiring oxygen support, cardiac monitoring, stretcher transportation or continuous medical observation. The level of medical support is planned according to the patient's condition.",
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
    text: "Provides respiratory support for patients who require invasive or non-invasive ventilation during the journey.",
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
    text: "Tracks essential parameters such as ECG, SpO₂, blood pressure and pulse during the rail transfer.",
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
    title: "Oxygen Cylinders + Backup",
    text: "Oxygen support is arranged according to the patient's requirement, with sufficient supply planned for the complete journey and contingency needs.",
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
    text: "Portable suction and airway-management equipment is available for patients who may require airway support or emergency intervention.",
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
    text: "Essential emergency medicines and supplies are carried according to the patient's clinical requirements and medical escort's assessment.",
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
    text: "Patient-transfer equipment supports safe movement during boarding, disembarkation and road ambulance transfers at both ends of the journey.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "Provides medical supervision for patients requiring intensive monitoring, oxygen therapy or advanced support, and responds to changes in the patient's condition during transit.",
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
    text: "Monitors vital signs, manages prescribed medications and supports the patient's day-to-day clinical needs throughout the journey.",
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
    text: "Assist with stretcher handling, patient movement and transfers between the Bengaluru hospital, ambulance, railway station and destination hospital.",
  },
  {
    icon: <IconPhone />,
    title: "24×7 Coordination Desk",
    text: "Coordinates train arrangements, ground ambulances, medical staff and communication between the sending and receiving hospitals for a smooth patient transfer.",
  },
];

const CONDITIONS = [
  "Post-cardiac event / cardiac patients",
  "Ventilator-dependent patients",
  "Post-surgical / post-operative transfers",
  "Stroke and neurological cases",
  "Cancer/oncology patients",
  "Orthopaedic and trauma patients",
  "Dialysis / renal patients",
  "Elderly and bedridden patients",
  "Stable patients requiring discharge transfer",
  "High-risk pregnancy referrals",
  "Organ transplant follow-up transfers",
  "Mortal remains / deceased patient transport",
];

const ROUTES = [
  [
    "Bengaluru to Vellore Train Ambulance",
    "A frequently requested route for patients travelling from Bengaluru to CMC Vellore and other specialised hospitals in Vellore for advanced medical treatment.",
  ],
  [
    "Bengaluru to Chennai Train Ambulance",
    "A practical option for patients requiring specialised treatment in Chennai, with medical support planned according to the patient's condition and journey requirements.",
  ],
  [
    "Bengaluru to Hyderabad Train Ambulance",
    "Used for patients travelling to Hyderabad for specialised consultations, procedures, post-operative care or continued hospital treatment under medical supervision.",
  ],
  [
    "Bengaluru to Kolkata Train Ambulance",
    "A long-distance rail transfer option for patients from Bengaluru who need continued treatment in Kolkata or require medically supported travel closer to family.",
  ],
  [
    "Bengaluru to Patna Train Ambulance",
    "A commonly considered long-distance route for patients returning to Bihar or travelling to Patna for further treatment, rehabilitation or specialist care.",
  ],
  [
    "Bengaluru to Delhi Train Ambulance",
    "Suitable for patients who need medically supervised rail transportation from Bengaluru to hospitals and specialised healthcare facilities in Delhi.",
  ],
  [
    "Bengaluru to Mumbai Train Ambulance",
    "Provides a practical alternative for patients requiring long-distance medical transportation between Bengaluru and Mumbai, with onboard medical support based on their needs.",
  ],
  [
    "Bengaluru to Pune Train Ambulance",
    "An option for patients travelling to Pune for specialised treatment, rehabilitation or follow-up care while requiring medical assistance throughout the journey.",
  ],
  [
    "Bengaluru to Ahmedabad Train Ambulance",
    "A long-distance patient transfer option connecting Bengaluru with Ahmedabad, with medical escort and equipment arranged according to the patient's condition.",
  ],
  [
    "Bengaluru to Jaipur Train Ambulance",
    "For patients who need to travel from Bengaluru to Jaipur for continued treatment, specialist consultation, recovery care or a medically supported return home.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Share the patient's current condition, pickup location in Bengaluru, present hospital details and the destination city with our coordination team.",
  ],
  [
    "2. Get a Transfer Plan & Quote",
    "We assess the patient's medical requirements, check suitable train and berth options, arrange the appropriate medical team and provide the expected transfer cost.",
  ],
  [
    "3. Confirm & Prepare",
    "After confirmation, our team coordinates with the treating hospital, prepares the required medical equipment and arranges pickup and railway travel details.",
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "Our team manages the patient's transfer from the Bengaluru hospital or residence to the railway station, provides medical support during the train journey and coordinates the final ambulance transfer to the destination hospital.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance & Destination City",
    "The distance between Bengaluru and the destination is a major factor. Longer transfers such as Bengaluru to Kolkata or Bengaluru to Patna generally require different arrangements compared with shorter routes such as Bengaluru to Chennai or Vellore.",
  ],
  [
    "02",
    "Train Class & Berth Type",
    "The selected train, coach category, berth arrangement and space required for the patient can affect the overall transfer cost. Special arrangements may be required for stretcher patients or cases needing additional space.",
  ],
  [
    "03",
    "Medical Escort Required",
    "The medical team is selected according to the patient's condition. A transfer requiring a critical-care doctor and nurse will have different costs from a stable patient who needs a trained medical attendant.",
  ],
  [
    "04",
    "Equipment & Medical Support",
    "Ventilator support, oxygen requirements, cardiac monitoring, infusion pumps and other specialised equipment can influence the final quotation depending on what the patient needs during transit.",
  ],
  [
    "05",
    "Road Ambulance at Both Ends",
    "The cost can also depend on the road ambulance distance between the Bengaluru pickup location and railway station, as well as the transfer required from the destination railway station to the receiving hospital.",
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
  "Bengaluru City",
  "Yeshwanthpur",
  "Whitefield",
  "Electronic City",
  "Hebbal",
  "Jayanagar",
  "Rajajinagar",
  "Koramangala",
  "Indiranagar",
  "Banashankari",
  "Marathahalli",
  "KR Puram",
  "Hosur (on request)",
  "Tumakuru (on request)",
  "Kolar (on request)",
  "Ramanagara (on request)",
];

const FAQS = [
  [
    "1. What is a Train Ambulance Service in Bengaluru?",
    "A Train Ambulance Service in Bengaluru is a medically supported rail transfer for patients who need to travel long distances with appropriate medical supervision. Depending on the patient's condition, the transfer can include a medical escort, oxygen, monitoring equipment and road ambulances at both ends.",
  ],
  [
    "2. Which cities can a patient travel to from Bengaluru by Train Ambulance?",
    "Patients can be transferred from Bengaluru to destinations across India, including Vellore, Chennai, Hyderabad, Kolkata, Patna, Delhi, Mumbai, Pune, and Ahmedabad. We plan the route based on train availability and the patient's medical requirements.",
  ],
  [
    "3. Can I book a Train Ambulance from Bengaluru to CMC Vellore?",
    "Yes. Bengaluru to CMC Vellore is a common medical transfer route. Humancare can coordinate the rail journey along with medical assistance and road ambulance transportation between the Bengaluru location, railway station, and CMC Vellore.",
  ],
  [
    "4. Is a doctor or nurse available during the train journey?",
    "Medical escort requirements depend on the patient's condition. A trained medical attendant, nurse or doctor can be arranged when clinically required, with the appropriate level of supervision determined before the journey.",
  ],
  [
    "5. What equipment is available in a Train Ambulance from Bengaluru?",
    "Equipment can include oxygen support, a cardiac monitor, a ventilator, a suction unit, infusion or syringe pumps, emergency medical supplies, and patient-transfer equipment. The equipment provided depends on the patient's condition and medical assessment.",
  ],
  [
    "6. How much does a Train Ambulance from Bengaluru cost?",
    "There is no fixed price because every transfer is different. The Train Ambulance Cost in Bengaluru depends on the destination, train and berth availability, medical escort, equipment, patient condition and road ambulance requirements at both ends.",
  ],
  [
    "7. Does the Train Ambulance service include pickup from the hospital?",
    "Yes. A complete transfer can include road ambulance pickup from the hospital or residence in Bengaluru, transportation to the railway station, medical assistance during the train journey and road ambulance transfer from the destination station to the receiving hospital.",
  ],
  [
    "8. How long does it take to arrange a Train Ambulance from Bengaluru?",
    "The arrangement time depends on train and berth availability, the destination, medical requirements and urgency of the transfer. Our coordination team can check suitable options once the patient's condition and travel details are shared.",
  ],
  [
    "9. Is a Train Ambulance suitable for critically ill or ventilator-dependent patients?",
    "It can be suitable for selected patients when the treating medical team considers rail travel appropriate. Ventilator-dependent or critically ill patients require careful assessment, appropriate equipment and trained medical supervision before the transfer is confirmed.",
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
  alternateName: "Humancare Train Ambulance Service Bengaluru",
  description:
    "Get reliable Train Ambulance Service in Bengaluru with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-bengaluru.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bengaluru Railway Station Area",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9716, longitude: 77.5946 },
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
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
      availableLanguage: ["en", "hi", "ka"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "Train Ambulance Service in Bengaluru",
  description:
    "Bengaluru Train Ambulance for Long-Distance Patient Transfers — Medical Care Throughout the Journey.",
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
      name: "Bengaluru",
      item: `${CONTACT.domain}/bengaluru`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance in Bengaluru",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-bengaluru.jpg`;
  return (
    <>
      <title>
        Train Ambulance Service in Bengaluru | Humancare Train Ambulance
      </title>
      <meta
        name="description"
        content="Get reliable Train Ambulance Service in Bengaluru with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India."
      />
      <meta
        name="keywords"
        content="train ambulance service in bengaluru, train ambulance bengaluru, rail ambulance bengaluru, patient transfer bengaluru, ICU train ambulance bengaluru, bengaluru to vellore train ambulance, bengaluru to chennai train ambulance"
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
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance Service in Bengaluru | Humancare Train Ambulance"
      />
      <meta
        property="og:description"
        content="Get reliable Train Ambulance Service in Bengaluru with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Bengaluru Train Ambulance for Long-Distance Patient Transfers — Medical Care Throughout the Journey"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance Service in Bengaluru | Humancare Train Ambulance"
      />
      <meta
        name="twitter:description"
        content="Get reliable Train Ambulance Service in Bengaluru with medical escorts, ICU equipment, oxygen support and bed-to-bed patient transfers across India."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Bengaluru Train Ambulance for Long-Distance Patient Transfers — Medical Care Throughout the Journey"
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
function Bengaluru() {
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
                    <a href="/bengaluru">Bengaluru</a>
                  </li>
                  <li aria-current="page">Train Ambulance in Bengaluru</li>
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
                    Train Ambulance Service in Bengaluru: Critical Care Support
                    for Long-Distance Patient Transfers
                  </h1>
                  <p className="kl-hero-sub">
                    Moving a critically ill or recovering patient from Bengaluru
                    to another city requires more than a regular railway
                    journey. Humancare Train Ambulance provides medically
                    supervised rail transfers from Bengaluru with trained
                    healthcare professionals, onboard oxygen support, cardiac
                    monitoring, and other essential critical-care equipment.
                    From Bengaluru to Vellore, Chennai, Kolkata, Patna,
                    Hyderabad, or other destinations across India, we coordinate
                    the patient's journey from hospital or home to the
                    destination facility, focusing on safety, comfort, and
                    continuous medical care.
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
                      alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Bengaluru"
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
                    What is a Train Ambulance Service in Bengaluru, and Who Can
                    Use It?
                  </h2>
                  <p>
                    A train ambulance service in Bengaluru is a medically
                    supported patient transfer where individuals travel by train
                    with healthcare professionals, medical equipment, and
                    appropriate supervision based on their clinical condition.
                    Instead of prolonged travel by road ambulance, which may be
                    uncomfortable or risky for critically ill or recovering
                    patients, rail travel provides a smoother and potentially
                    less distressing journey. This service is especially
                    valuable for patients being transferred from Bengaluru to
                    other cities for specialised treatment, admission to
                    tertiary-care hospitals, follow-up procedures, or discharge
                    care.
                  </p>
                  <p>
                    Patients who have experienced a stroke, cardiac event, or
                    are recovering from surgery can travel safely by train when
                    medical support is arranged. Elderly patients, those with
                    chronic conditions, patients recovering after discharge, and
                    individuals requiring ongoing medication or monitoring can
                    use this service. The arrangement is not suited to patients
                    in acute respiratory distress or those with unstable vital
                    signs that cannot be managed during a multi-hour train
                    journey; in such cases, air ambulance or road ambulance
                    transport might be more appropriate.
                  </p>
                  <p>
                    A train ambulance from Bengaluru to another city is
                    typically coordinated by our support team working closely
                    with the treating hospital, the patient's family, the
                    railway authorities, and the receiving hospital. The patient
                    is collected from the hospital or residence in Bengaluru,
                    transported to the railway station, assisted during the
                    railway journey, and handed over to a receiving facility via
                    ground ambulance at the destination. The medical team,
                    oxygen, monitoring equipment and other resources are
                    arranged before travel to match the patient's condition and
                    the journey duration.
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
                      alt="Medical transport team with patient stretcher at Bengaluru railway station"
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
                <h2>Our Train Ambulance Team Puts Patient Safety First</h2>
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
                    ICU Train Ambulance Equipment for Patient Safety During
                    Bengaluru Transfers
                  </h2>
                  <p>
                    An ICU train ambulance in Bengaluru is equipped with medical
                    devices according to the patient's condition and care level.
                    The onboard setup helps the accompanying medical team
                    provide continuous observation and necessary support during
                    long-distance rail travel.
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
                  A Trained Medical Team for Every Bengaluru Rail Transfer
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
                <h2>Conditions of the Patients We Handle Regularly</h2>
                <p>
                  Before arranging a train ambulance from Bengaluru, our team
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
                determine whether a train ambulance service in Bengaluru is
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
                <h2>Popular Train Ambulance Routes from Bengaluru</h2>
                <p>
                  We arrange train ambulance transfers from Bengaluru to major
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
                Bengaluru can be coordinated for other cities based on railway
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
                  How to Book a Train Ambulance from Bengaluru in 4 Simple Steps
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
                  <h2>What Determines Train Ambulance Cost in Bengaluru?</h2>
                  <p>
                    The train ambulance cost in Bengaluru varies from one
                    patient transfer to another because the required medical
                    care, journey length and railway arrangements can differ.
                    The final train ambulance price is calculated after
                    reviewing the patient's condition, destination and services
                    required.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Bengaluru"
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
                <h2>Train Ambulance Service Areas Across Bengaluru</h2>
                <p>
                  Our train ambulance service in Bengaluru supports patient
                  transfers from hospitals, residences, and care facilities
                  across Bengaluru and nearby areas. Road ambulance coordination
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
                  Train Ambulance Service in Bengaluru — Frequently Asked
                  Questions
                </h2>
                <p>
                  Answers to common questions about train ambulance service in
                  Bengaluru, including booking, medical support, train ambulance
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
              <h2 className="kl-mt-8">
                Need a Train Ambulance from Bengaluru?
              </h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                When a patient needs to travel to another city for treatment,
                you should not have to manage the medical transfer alone.
                Humancare helps arrange medically supported train ambulance
                service in Bengaluru, with suitable medical staff, equipment,
                railway coordination, and patient transfer support based on the
                patient's needs.
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

export default Bengaluru;
