/**
 * TrainAmbulanceKolkata.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Kolkata.
 * Styles live in the sibling stylesheet ./TrainAmbulanceVaranasi.css.
 * -------------------------------------------------------------------------
 */

import React, { useState } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from "../../assets/City/Kolkata/medical-equipment-for-train-transfers.webp";
import train2 from "../../assets/City/Kolkata/train-ambulance-from-kolkata.webp";
import HeroBanner from "../../assets/City/Kolkata/train-ambulance-in-kolkata-safe-affordable-and-medically-supervised-patient-transfer.webp";
import train4 from "../../assets/City/Kolkata/what-affects-train-ambulance-pricing-from-kolkata.jpeg";

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
    "https://www.humancaretrainambulance.com/train-ambulance-services-in-kolkata",
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
  "Suitable for planned transfers to specialised hospitals in other cities",
  "Medical equipment and trained attendants arranged according to the patient's condition",
  "Continuous assistance during the railway journey instead of travelling as a regular passenger",
  "Pickup and destination-side ambulance coordination available for a complete transfer",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Medical Team Matched to Patient Needs",
    text: "Doctors, nurses, and trained medical attendants can be arranged according to the patient's condition and the level of care required during the journey from Kolkata.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "Quick 24×7 Coordination",
    text: "Our coordination team is available around the clock to discuss urgent or planned patient transfers, check requirements, and begin arranging the train ambulance service in Kolkata.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Journey Management",
    text: "We coordinate the patient's movement from the pickup location in Kolkata to the railway station and onward to the destination hospital, helping connect each stage of the transfer.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Clear Cost Estimate",
    text: "Before confirming the transfer, families receive a quotation based on the route, railway arrangements, medical support, equipment, and ground ambulance requirements.",
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
    title: "Regular Updates During Transit",
    text: "Families can stay informed while the patient is travelling. Our team coordinates communication and provides updates about the progress of the transfer whenever required.",
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
    title: "Support for Different Medical Conditions",
    text: "Our train ambulance arrangements can be planned for patients requiring oxygen, monitoring, ventilator support, post-operative care, or other medically supervised transportation based on their condition.",
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
    text: "For patients on invasive or non-invasive respiratory support throughout transit.",
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
    title: "Multi-Para Patient Monitor",
    text: "Continuous ECG, SpO₂, blood pressure and pulse tracking during the entire route.",
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
    text: "On-board cardiac emergency response equipment operated by the accompanying doctor.",
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
    text: "Accurate, continuous delivery of IV fluids and medication at a controlled rate.",
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
    text: "Reserve capacity calculated for the full journey, with backup cylinders on board.",
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
    text: "Portable suction apparatus and airway management tools for emergency use.",
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
    text: "Cardiac, resuscitation and pain-management drugs carried as per protocol.",
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
    text: "Patient-transfer stretcher and immobilisation board for safe boarding and transfer.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical Care Doctor",
    text: "For patients requiring intensive medical support, a critical-care doctor can accompany the transfer to monitor the patient's condition and manage urgent medical needs during the journey.",
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
    title: "Trained Medical Nurse",
    text: "The accompanying nurse provides continuous patient care, including monitoring vital signs, administering prescribed medication, and supporting the patient's comfort throughout the transfer.",
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
    title: "Medical Attendant",
    text: "A trained medical attendant assists with patient movement, stretcher handling, boarding, and other practical requirements during the transfer, helping the journey run smoothly.",
  },
  {
    icon: <IconPhone />,
    title: "24x7 Transfer Coordination",
    text: "Our coordination team remains connected with the family and relevant medical teams throughout the transfer, helping manage travel arrangements, updates, and destination-side coordination.",
  },
];

const CONDITIONS = [
  "Post-cardiac event / cardiac patients",
  "Ventilator-dependent patients",
  "Post-surgical / post-operative transfer",
  "Stroke & neurological cases",
  "Cancer / oncology patients",
  "Orthopaedic & trauma patients",
  "Dialysis / renal patients",
  "Elderly & bedridden patients",
  "Stable discharge transfers home",
  "High-risk pregnancy referrals",
  "Organ transplant follow-up transfer",
  "Mortal remains / deceased transport",
];

const ROUTES = [
  [
    "Kolkata to Delhi Train Ambulance",
    "A suitable option for patients travelling from Kolkata to major hospitals and specialised treatment centres in Delhi, with medical assistance coordinated throughout the journey.",
  ],
  [
    "Kolkata to Mumbai Train Ambulance",
    "Designed for long-distance transfers to Mumbai, including patients who require continued medical supervision while travelling by rail instead of undertaking an extended road journey.",
  ],
  [
    "Kolkata to Chennai Train Ambulance",
    "A practical rail transfer option for patients heading to Chennai for specialised treatment, planned procedures, follow-up care, or access to advanced hospital facilities.",
  ],
  [
    "Kolkata to Vellore Train Ambulance",
    "Frequently considered by families travelling from Kolkata to Vellore for specialised medical treatment, with patient support arranged according to the required level of care.",
  ],
  [
    "Kolkata to Hyderabad Train Ambulance",
    "A medically coordinated transfer option for patients travelling to Hyderabad for advanced treatment, specialist consultations, procedures, or continued hospital care.",
  ],
  [
    "Kolkata to Bangalore Train Ambulance",
    "A long-distance rail ambulance service for patients requiring supervised transportation from Kolkata to Bengaluru, with medical support planned around the patient's condition.",
  ],
  [
    "Kolkata to Pune Train Ambulance",
    "Suitable for patients travelling from Kolkata to Pune for specialised treatment or rehabilitation, with ground transportation and medical assistance coordinated for the journey.",
  ],
  [
    "Kolkata to Ahmedabad Train Ambulance",
    "A long-distance patient transfer option connecting Kolkata with Ahmedabad's specialised healthcare facilities, with onboard medical support arranged when required.",
  ],
  [
    "Kolkata to Patna Train Ambulance",
    "A comparatively shorter interstate transfer option for patients travelling between Kolkata and Patna who need assisted transportation and medical supervision during the journey.",
  ],
];

const BOOKING = [
  [
    "1. Call or WhatsApp Our Team",
    "Tell us the patient's medical condition, current location in Kolkata, destination hospital or city, and any specific medical support required.",
  ],
  [
    "2. Discuss the Medical Transfer Plan",
    "Our team reviews the patient's requirements, route, railway options, equipment, and medical staff needed for the train ambulance service in Kolkata.",
  ],
  [
    "3. Confirm the Arrangement",
    "Once the transfer plan is finalised, we coordinate the required documentation, railway arrangements, medical team, equipment, and pickup schedule.",
  ],
  [
    "4. Complete the Patient Transfer",
    "The patient is picked up from the agreed location, transferred to the railway station, medically supported throughout the journey, and handed over safely to the destination-side ambulance or hospital team.",
  ],
];

const FACTORS = [
  [
    "01",
    "Distance & Destination",
    "The distance between Kolkata and the destination city affects the overall rail ambulance cost. A longer journey generally requires more travel time, medical supervision, and coordination than a shorter transfer.",
  ],
  [
    "02",
    "Railway Accommodation & Travel Arrangement",
    "The type of railway accommodation required for the patient can influence the train ambulance charges. The arrangement depends on patient mobility, stretcher requirements, privacy, equipment space, and available railway options.",
  ],
  [
    "03",
    "Medical Team & Level of Care",
    "The patient's condition determines the level of medical assistance needed during transit. A transfer requiring a doctor, critical-care nurse, or additional medical attendants will have different costs from a journey requiring basic medical assistance.",
  ],
  [
    "04",
    "ICU Equipment & Medical Supplies",
    "Equipment requirements are assessed according to the patient's condition. Oxygen support, ventilator assistance, cardiac monitoring, suction equipment, medicines, and other medical supplies can affect the overall train ambulance price.",
  ],
  [
    "05",
    "Pickup & Destination-Side Ambulance",
    "The total transfer may include road ambulance transportation between the patient's location and railway station in Kolkata, followed by transportation from the destination station to the receiving hospital. The distance and medical requirements at both ends can influence the final train ambulance charges.",
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
  "Kolkata",
  "Salt Lake",
  "New Town",
  "Rajarhat",
  "Dum Dum",
  "Howrah",
  "Behala",
  "Garia",
  "Jadavpur",
  "Tollygunge",
  "Alipore",
  "Barasat",
  "Barrackpore",
  "Serampore",
  "Chandannagar",
  "Kalyani",
  "Hooghly",
  "Howrah District",
  "North 24 Parganas",
  "South 24 Parganas",
];

const FAQS = [
  [
    "1. What is a train ambulance service in Kolkata?",
    "A train ambulance is a medically supported patient transportation service that uses railway travel for long-distance transfers. Depending on the patient's condition, the arrangement can include a stretcher, oxygen, monitoring equipment, ventilator support, and trained medical staff.",
  ],
  [
    "2. How can I book a train ambulance in Kolkata?",
    "You can contact Humancare by phone or WhatsApp and share the patient's medical condition, current location, destination city or hospital, and required medical support. Our team assesses the requirements and coordinates the appropriate train ambulance service in Kolkata.",
  ],
  [
    "3. How much does a train ambulance from Kolkata cost?",
    "The train ambulance cost depends on factors such as the destination, journey distance, railway availability, patient condition, medical equipment, medical staff, and ground ambulance requirements. A personalised quotation is provided after reviewing the transfer details.",
  ],
  [
    "4. What is included in train ambulance charges?",
    "Train ambulance charges may include railway travel arrangements, patient accommodation, medical equipment, medical attendants, and related coordination. Ground ambulance services at the pickup or destination location may be arranged separately depending on the transfer plan.",
  ],
  [
    "5. Is a doctor available in a train ambulance from Kolkata?",
    "A doctor can be arranged when the patient's medical condition requires doctor-level supervision. The medical team may include a doctor, nurse, paramedic, or trained medical escort depending on the patient's clinical needs.",
  ],
  [
    "6. Can a ventilator patient travel by train ambulance from Kolkata?",
    "Ventilator-dependent patients may be transferred by train when they are medically suitable for railway transportation. The required ventilator, oxygen supply, monitoring equipment, and appropriately trained medical personnel can be arranged according to the patient's condition.",
  ],
  [
    "7. Does a train ambulance include oxygen and ICU equipment?",
    "Yes, medical equipment can be arranged based on the patient's requirements. Depending on the case, this may include oxygen, ventilator support, cardiac monitoring, suction equipment, emergency medicines, and other critical-care equipment.",
  ],
  [
    "8. Can you arrange a train ambulance from Kolkata to Vellore?",
    "Yes. A train ambulance from Kolkata to Vellore can be coordinated for patients travelling to specialised hospitals in Vellore. The complete transfer can include Kolkata-side pickup, medical support during the railway journey, and destination-side ambulance coordination.",
  ],
  [
    "9. Can I book a train ambulance from Kolkata to other cities in India?",
    "Yes. Train ambulance transfers can be coordinated from Kolkata to various cities depending on railway connectivity, patient requirements, and availability. Common destinations may include Delhi, Mumbai, Chennai, Vellore, Hyderabad, Bengaluru, Pune, and Ahmedabad.",
  ],
  [
    "10. Is train ambulance the same as a regular train journey?",
    "No. A regular train journey does not provide dedicated medical supervision or critical-care transportation. A train ambulance is specifically organised around the patient's medical requirements, with appropriate equipment and trained medical personnel arranged for the transfer.",
  ],
  [
    "11. Does IRCTC provide train ambulance services directly?",
    "Railway travel arrangements for a medical transfer are different from booking a normal passenger ticket. Train ambulance IRCTC searches generally relate to railway booking or medical travel information. Humancare coordinates the patient transfer, medical requirements, railway arrangements, and associated ground transportation.",
  ],
  [
    "12. Do you provide bed-to-bed train ambulance transfer from Kolkata?",
    "Yes. Depending on the patient's requirements, Humancare can coordinate transportation from the patient's hospital or residence in Kolkata to the railway station, medical support during the train journey, and onward ambulance transportation to the destination hospital.",
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
  alternateName: "Humancare Train Ambulance Service Kolkata",
  description:
    "Book a train ambulance in Kolkata for safe, medically supervised patient transfers across India. 24x7 medical support, ICU equipment & bed-to-bed care.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-kolkata.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Howrah Railway Station Area",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.5726, longitude: 88.3639 },
  areaServed: [
    { "@type": "City", name: "Kolkata" },
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
  name: "Train Ambulance Service in Kolkata",
  description:
    "Safe, Affordable & Medically Supervised Patient Transfer from Kolkata to hospitals across India.",
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
      name: "Kolkata",
      item: `${CONTACT.domain}/kolkata`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Train Ambulance in Kolkata",
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
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-kolkata.jpg`;
  return (
    <>
      <title>Train Ambulance in Kolkata | 24x7 Rail Ambulance Service</title>
      <meta
        name="description"
        content="Book a train ambulance in Kolkata for safe, medically supervised patient transfers across India. 24x7 medical support, ICU equipment & bed-to-bed care."
      />
      <meta
        name="keywords"
        content="train ambulance in kolkata, train ambulance service in kolkata, rail ambulance kolkata, patient transfer kolkata, ICU train ambulance kolkata, kolkata to vellore train ambulance, kolkata to delhi train ambulance"
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
      <meta name="geo.placename" content="Kolkata" />
      <meta name="geo.position" content="22.5726;88.3639" />
      <meta name="ICBM" content="22.5726, 88.3639" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/webp" href={FAVICON} />
      <link rel="apple-touch-icon" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta
        property="og:title"
        content="Train Ambulance in Kolkata | 24x7 Rail Ambulance Service"
      />
      <meta
        property="og:description"
        content="Book a train ambulance in Kolkata for safe, medically supervised patient transfers across India. 24x7 medical support, ICU equipment & bed-to-bed care."
      />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Train Ambulance in Kolkata - Safe, Affordable & Medically Supervised Patient Transfer"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Train Ambulance in Kolkata | 24x7 Rail Ambulance Service"
      />
      <meta
        name="twitter:description"
        content="Book a train ambulance in Kolkata for safe, medically supervised patient transfers across India. 24x7 medical support, ICU equipment & bed-to-bed care."
      />
      <meta name="twitter:image" content={ogImg} />
      <meta
        name="twitter:image:alt"
        content="Train Ambulance in Kolkata - Safe, Affordable & Medically Supervised Patient Transfer"
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
function TrainAmbulanceKolkata() {
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
                    <a href="/kolkata">Kolkata</a>
                  </li>
                  <li aria-current="page">Train Ambulance in Kolkata</li>
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
                    Train Ambulance in Kolkata Safe, Affordable &amp; Medically
                    Supervised Patient Transfer
                  </h1>
                  <p className="kl-hero-sub">
                    Human care Railway Ambulance Kolkata is a reliable train
                    ambulance service for patients who wish for a risk-free,
                    hospital-assisted transportation to different hospitals in
                    India. Our train ambulance service is ideal for
                    long-distance patient transfers who require constant medical
                    care. We have qualified medical staff, life-support
                    equipment, and oxygen facilities and can make a
                    well-synchronized and hassle-free hospital-to-hospital
                    transport arrangement thereby enabling families to arrange
                    an easier patient transfer from Kolkata to the targeted
                    healthcare destination.
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
                      alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Kolkata"
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
                    How Does a Train Ambulance from Kolkata Help During
                    Long-Distance Patient Transfers?
                  </h2>
                  <p>
                    Moving a patient from one city to another for advanced
                    treatment may require travel over hundreds or even thousands
                    of kilometers and become challenging as the distance
                    increases. Families in Kolkata might have to organize the
                    transfer of a patient who needs specialist care,
                    postoperative follow-up, cancer treatment, heart treatment,
                    neurological treatment, or any other hospital services
                    available only outside the city. The train ambulance
                    available in Kolkata can make such long journeys easier by
                    providing continuous health medical support plus railway
                    travel. A regular train travel differs from a train
                    ambulance journey in several respects. The latter service is
                    tailored based on the requirement of the patient.
                  </p>
                  <p>
                    The transfer team in a Kolkata train ambulance service not
                    only checks the patient's medical condition but also
                    prepares the right kind of medical equipment and arranges
                    the journey details before the actual departure. The train
                    ambulance may vary its setup from carrying a patient
                    stretcher, supply of oxygen, and life-support systems
                    including medicines, and well-trained medical crew according
                    to the medical requirements of an individual patient. The
                    idea is to ensure that patient healthcare continues as
                    smoothly during travel as at the treating hospital rather
                    than leaving them alone to handle such a big transportation
                    risk without any medical support.
                  </p>
                  <p>
                    Families would find it really helpful if a rail ambulance is
                    utilized mainly when the patient is perfectly healthy enough
                    to travel by train, but still calls for a level of care that
                    cannot be provided during an everyday passenger trip.
                    Humancare can handle all the aspects of the transfer that
                    might involve a patient leaving from Kolkata by train
                    ambulance, going to the railway station, receiving medical
                    care during the train journey, and finally traveling to the
                    destination on an ambulance. This way the train ambulance
                    works as a good transport option for families needing a
                    medically supported alternative for moving patients
                    cross-state.
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
                      alt="Medical transport team with patient stretcher at Kolkata railway station"
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
                <h2>Reliable Support for Every Kolkata Patient Transfer</h2>
                <p>
                  Moving a patient across cities involves medical planning,
                  railway coordination, and constant communication. Our team
                  manages these details so families can focus on making the
                  right healthcare decisions.
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
                    Medical Equipment for Train Transfers — Support Designed
                    Around the Patient
                  </h2>
                  <p>
                    The provision of a medically supported train ambulance calls
                    for more than only a reserved railway seat. The care team of
                    Humancare determines the train ambulance setup based on the
                    condition of the patient and the transfer requirements so
                    that the necessary medical help is accessible throughout the
                    trip. Different arrangements would be made per each case
                    ranging from oxygen support, ventilator assistance, cardiac
                    monitoring, suction device, first aid medicines, and
                    presence of trained personnel for the patient who is being
                    moved from Kolkata to the destination healthcare center as
                    per his/her condition.
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
                  Medical Professionals On Board — Care That Continues During
                  the Journey
                </h2>
                <p>
                  It is quite important to have medically sound supervision
                  matching the patient's condition while moving from a great
                  distance for treatment. Based on the level of support needed,
                  we are able to arrange qualified doctors, nurses, and trained
                  medical attendants in our train ambulance service at Kolkata.
                  Our team looks over the whole process making sure that the
                  patient gets timely support during transit, help in
                  medication, medical tools, and also in handling change of
                  condition in case the patient is en route to the destination
                  hospital.
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
                <h2>Who we transfer</h2>
                <p>
                  Every patient has different medical and travel requirements,
                  so the level of support is planned before the journey begins.
                  Humancare coordinates train ambulance transfers for patients
                  who need medical supervision or assistance while travelling
                  from Kolkata to another city. Common transfer requirements
                  include:
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
                If your patient's condition isn't listed here, call our
                coordination desk. We will consult with the treating doctor to
                determine whether a Train Ambulance Service in Kolkata is
                medically appropriate or recommend the safest alternative.
              </p>
            </div>
          </section>

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes From Kolkata</h2>
                <p>
                  Below are some of the commonly arranged train ambulance routes
                  from Kolkata for patients travelling to specialised hospitals
                  and treatment centres across India. Travel time, railway
                  availability, medical requirements, and the patient's
                  condition are assessed before arranging each transfer.
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
                  Arrange a Train Ambulance From Kolkata in 4 Simple Steps
                </h2>
                <p>
                  We make long-distance patient transportation easier by
                  handling the planning, medical coordination, and journey
                  arrangements while your family focuses on the patient's care.
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
                  <h2>What Affects Train Ambulance Pricing From Kolkata?</h2>
                  <p>
                    The train ambulance cost from Kolkata varies from one
                    patient transfer to another because medical requirements,
                    travel arrangements, and destinations are different. The
                    final train ambulance price may depend on the patient's
                    condition, travel distance, railway accommodation, medical
                    team, equipment, route availability, and ambulance support
                    required before and after the train journey. Our team
                    reviews these details to prepare a transfer plan and provide
                    a clear estimate.
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
                      alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Kolkata"
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
                <h2>Service Areas Around Kolkata</h2>
                <p>
                  Our train ambulance service in Kolkata can coordinate patient
                  pickup and drop-off across Kolkata and surrounding areas,
                  connecting patients with the railway transfer point and
                  destination-side ambulance. Ground transportation can be
                  arranged before and after the rail journey based on the
                  patient's location and medical requirements.
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
                  Train Ambulance Service in Kolkata — Frequently Asked
                  Questions
                </h2>
                <p>
                  Find clear answers about train ambulance booking in Kolkata,
                  medical support, routes, equipment, train ambulance cost,
                  railway arrangements, and the patient transfer process. These
                  FAQs help families understand what to expect before arranging
                  a long-distance rail ambulance transfer.
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
              <h2 className="kl-mt-8">Need to Move a Patient From Kolkata?</h2>
              <p
                className="kl-mt-16"
                style={{ maxWidth: "64ch", marginInline: "auto" }}
              >
                Arrange a medically supported train ambulance from Kolkata with
                the right equipment, trained medical staff, and coordinated
                ground transportation. Share the patient's condition and
                destination with our team, and we'll help you understand the
                available transfer options.
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
export default TrainAmbulanceKolkata;
