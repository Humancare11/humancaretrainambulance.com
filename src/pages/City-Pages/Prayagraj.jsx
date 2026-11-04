/**
 * Prayagraj.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Prayagraj.
 * Styles live in the sibling stylesheet ./TrainAmbulanceVaranasi.css.
 * -------------------------------------------------------------------------
 */

import React, { useState } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from "../../assets/City/Hyderabad/what-is-a-train-ambulance-service-in-hyderabad.webp";
import train2 from "../../assets/City/Hyderabad/what-factors-determine-train-ambulance-cost-from-hyderabad.webp";
import HeroBanner from "../../assets/City/Hyderabad/hyderabad-train-ambulance.webp";
import train4 from "../../assets/City/Hyderabad/medical-equipment-used-for-train-ambulance-transfers-in-hyderabad.webp";

const CONTACT = {
  brand: "Humancare Train Ambulance",
  phoneDisplay: "+919833997373",
  phoneHref: "tel:+919833997373",
  waDisplay: "+919833997373",
  waHref: "https://wa.me/919833997373",
  email: "ops@humancareworldwide.com",
  domain: "https://www.humancaretrainambulance.com",
  pageUrl: "https://www.humancaretrainambulance.com/train-ambulance-services-in-prayagraj",
};

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

const ABOUT_POINTS = [
  "Coordinated patient transfers from Prayagraj to cities across India",
  "Medical equipment and trained support based on individual requirements",
  "Rail-based transportation for suitable long-distance patient transfers",
  "Road ambulance connectivity at both origin and destination"
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Trained Medical Professionals",
    text: "Medical professionals can accompany the patient according to the level of medical care required. They can assist with vital monitoring, prescribed medicines, oxygen support, and other necessary care during transit.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Train Ambulance Coordination",
    text: "Our coordination team assists families in arranging a Train Ambulance Service in Prayagraj according to the patient's medical and travel requirements, including railway arrangements, medical staff, equipment, and ambulance connections.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Assistance",
    text: "The journey can begin with road ambulance pickup from a hospital, home, or care facility in Prayagraj. After railway transportation, destination-side ambulance support can be coordinated to complete the transfer to the receiving hospital.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Train Ambulance Cost Planning",
    text: "The Train Ambulance Cost in Prayagraj depends on factors such as destination, railway accommodation, patient's condition, medical team, equipment, and road ambulance requirements. These details are considered while preparing the transfer quotation.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v12H5l-1 4V4Z" />
      </svg>
    ),
    title: "Family Communication & Assistance",
    text: "Long-distance medical transportation involves several stages. Our coordination team assists with journey communication and helps families stay informed about the patient's transfer arrangements.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Customized ICU Support",
    text: "An ICU Train Ambulance in Prayagraj can be organized according to the patient's clinical requirements. Ventilator assistance, oxygen, cardiac monitoring, infusion support, suction equipment, and other critical-care equipment can be arranged when required.",
  },
];

const EQUIPMENT = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h4l2-7 4 14 2-7h4" /></svg>),
    title: "Portable Ventilator",
    text: "Ventilator support can be arranged for patients who require respiratory assistance during transportation. The equipment and medical supervision are selected according to the patient's clinical needs.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h3l2 5 4-10 2 5h7" /></svg>),
    title: "Multi-Parameter Patient Monitor",
    text: "The monitor allows the medical team to observe parameters such as ECG, SpO₂, blood pressure, and pulse during the Rail Ambulance journey from Prayagraj.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" /></svg>),
    title: "Defibrillator",
    text: "Emergency cardiac equipment can be included for transfers where additional cardiac preparedness is required during the railway journey.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M5 9h14M5 15h14" /></svg>),
    title: "Infusion & Syringe Pumps",
    text: "These devices can support controlled administration of prescribed medicines and IV fluids when required during a long-distance Train Ambulance transfer.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>),
    title: "Oxygen Supply & Backup",
    text: "Oxygen support can be arranged according to the patient's condition and journey duration, with supply planning for the complete transfer.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4v16M6 4h9l-2 4 2 4H6" /></svg>),
    title: "Suction Unit & Airway Kit",
    text: "Portable suction and airway-management equipment can assist patients who require secretion management or additional airway support during transportation.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M4 10h16" /></svg>),
    title: "Emergency Medication Kit",
    text: "Emergency medicines and medical supplies can be carried according to the patient's medical condition and the requirements identified before the journey.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="6" rx="1" /><path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" /></svg>),
    title: "Stretcher & Spine Board",
    text: "Patient-transfer equipment assists with safe movement during ambulance pickup, railway boarding, deboarding, and transfers between road ambulance and railway transportation.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "A doctor can accompany patients who require a higher level of medical supervision during transit. The doctor can monitor the patient's condition and provide medical attention according to the patient's requirements.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /><path d="M9 8h6" /></svg>),
    title: "Trained Critical-Care Nurse",
    text: "A trained nurse can provide bedside care, monitor vital signs, administer prescribed medications, assist with IV support, and provide continuous assistance throughout the ICU Train Ambulance from Prayagraj.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></svg>),
    title: "Patient Transfer Attendants",
    text: "Transfer attendants assist with stretcher handling, patient movement, railway boarding and deboarding, and coordination between road ambulance services and railway transportation.",
  },
  {
    icon: <IconPhone />,
    title: "24×7 Journey Coordination Team",
    text: "Our coordination team manages railway arrangements, ambulance connections, medical-team coordination, and family communication to keep the Train Ambulance transfer from Prayagraj organized from beginning to destination.",
  },
];

const CONDITIONS = [
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
  "Palliative & end-of-life transfers"
];

const ROUTES = [
  [
    "Prayagraj to Delhi Train Ambulance",
    "A medically supported rail transfer for patients travelling from Prayagraj to Delhi for advanced treatment, specialist consultations, surgery, oncology care, cardiac treatment, or continued medical management."
  ],
  [
    "Prayagraj to Lucknow Train Ambulance",
    "A coordinated medical transfer for patients travelling to Lucknow for specialist consultations, surgery, advanced treatment, rehabilitation, or continued hospital care."
  ],
  [
    "Prayagraj to Vellore Train Ambulance",
    "A long-distance Rail Ambulance from Prayagraj for patients travelling to Vellore for specialized treatment and follow-up care, with medical support arranged according to the patient's condition."
  ],
  [
    "Prayagraj to Mumbai Train Ambulance",
    "A medically supported long-distance transfer for patients travelling to Mumbai for advanced treatment, oncology services, cardiac care, surgery, rehabilitation, or specialist consultations."
  ],
  [
    "Prayagraj to Hyderabad Train Ambulance",
    "A planned railway patient transfer for patients travelling to Hyderabad for specialized treatment, surgery, advanced healthcare services, or continued medical management."
  ],
  [
    "Prayagraj to Chennai Train Ambulance",
    "A long-distance medical rail transfer for patients referred to Chennai for specialist treatment, surgery, oncology care, cardiac services, or follow-up treatment."
  ],
  [
    "Prayagraj to Bengaluru Train Ambulance",
    "A coordinated Train Ambulance from Prayagraj for patients travelling to Bengaluru for specialist consultations, advanced treatment, rehabilitation, surgery, or continued medical care."
  ],
  [
    "Prayagraj to Ahmedabad Train Ambulance",
    "A medically supervised railway transfer for patients travelling to Ahmedabad for specialist treatment, surgery, consultations, or continued hospital management."
  ],
  [
    "Prayagraj to Pune Train Ambulance",
    "A planned patient transfer by rail for patients travelling to Pune for specialist care, rehabilitation, surgery, consultations, or post-operative treatment."
  ],
  [
    "Prayagraj to Kolkata Train Ambulance",
    "A long-distance ICU Train Ambulance route from Prayagraj for patients requiring medically supervised travel to Kolkata for specialized treatment, oncology care, surgery, or continued medical support."
  ]
];

const BOOKING = [
  [
    "1. Call or WhatsApp Us",
    "Share the patient's medical condition, current hospital or home location in Prayagraj, destination city, and important transfer details with our coordination team."
  ],
  [
    "2. Get Your Transfer Plan & Quote",
    "Our team reviews the patient's medical needs, destination, railway requirements, equipment, and medical staff before preparing the transfer plan and Train Ambulance Cost."
  ],
  [
    "3. Confirm & Prepare",
    "After confirmation, our team coordinates medical documents, railway arrangements, ambulance pickup, medical escort, equipment, and journey scheduling."
  ],
  [
    "4. Bedside-to-Bedside Transfer",
    "The patient is picked up from the hospital or home in Prayagraj, transferred to the railway station by road ambulance, assisted during boarding, medically supported throughout the Rail Ambulance journey, and transferred by destination-side ambulance to the receiving hospital."
  ]
];

const FACTORS = [
  [
    "01",
    "Distance & Destination City",
    "The journey distance can influence the overall Train Ambulance Charges from Prayagraj. Longer routes may require additional travel time and medical and transportation resources."
  ],
  [
    "02",
    "Railway Accommodation & Patient Setup",
    "The accommodation required for the patient can affect the transfer quotation. Stretcher arrangements, available space, privacy, and the medical setup required during the journey are considered when planning the Rail Ambulance from Prayagraj."
  ],
  [
    "03",
    "Medical Team & Level of Care",
    "The patient's condition determines the medical assistance required during transit. Depending on the case, the transfer may require a trained attendant, nurse, critical-care nurse, or doctor for medical supervision."
  ],
  [
    "04",
    "ICU Equipment & Medical Supplies",
    "The equipment required for an ICU Train Ambulance from Prayagraj can influence the final cost. Ventilator support, oxygen, cardiac monitoring, infusion pumps, suction equipment, emergency supplies, and other patient-specific requirements are considered."
  ],
  [
    "05",
    "Road Ambulance & Transfer Distance",
    "Road ambulance services may be required between the patient's hospital or home and the railway station, followed by another transfer at the destination. Ambulance type, distance, and medical requirements can therefore contribute to the final Train Ambulance Charges from Prayagraj."
  ]
];

const COMPARE_ROWS = [
  ["Typical Cost", ["kl-yes", "Significantly lower"], ["kl-no", "Considerably higher"]],
  ["Best For", [null, "Medically stable / semi-critical, longer transfer window"], [null, "Extremely time-critical, unstable patients"]],
  ["Travel Time (long distance)", [null, "Longer (hours, overnight for far cities)"], [null, "Much shorter"]],
  ["ICU Equipment On Board", ["kl-yes", "Yes"], ["kl-yes", "Yes"]],
  ["Doctor / Nurse Escort", ["kl-yes", "Yes"], ["kl-yes", "Yes"]],
  ["Bedside-to-Bedside Service", ["kl-yes", "Yes (with road ambulance both ends)"], ["kl-yes", "Yes (with road ambulance both ends)"]],
  ["Weather Dependency", ["kl-yes", "Minimal"], ["kl-no", "Can be affected by weather/airport slots"]],
  ["Comfort for Long Duration", [null, "Space for family attendant, more room to move"], [null, "Compact cabin, limited space"]],
  ["Booking Lead Time", [null, "Few hours, subject to seat availability"], [null, "Can be arranged fast but at premium cost"]],
];

const AREAS = [
  "Prayagraj City",
  "Civil Lines",
  "George Town",
  "Naini",
  "Bai Ka Bagh",
  "Kareli",
  "Allahpur",
  "Tagore Town",
  "Lukerganj",
  "Katra",
  "Daraganj",
  "Jhunsi",
  "Phaphamau",
  "Teliarganj",
  "Rajapur",
  "Mumfordganj",
  "Chowk",
  "Dhoomanganj",
  "Bamrauli",
  "Sulem Sarai",
  "Ashok Nagar",
  "Shantipuram",
  "Handia",
  "Soraon",
  "Naini Industrial Area"
];

const FAQS = [
  [
    "1. What is a Train Ambulance Service in Prayagraj?",
    "A Train Ambulance Service in Prayagraj is a medically supported railway transfer for patients travelling from Prayagraj to another city for treatment or continued medical care. Depending on the patient's condition, it can include a stretcher, oxygen, monitoring equipment, medical attendants, and road ambulance support."
  ],
  [
    "2. Who can use an ICU Train Ambulance from Prayagraj?",
    "Patients who require medical observation or critical-care support during a long-distance railway journey may be considered for an ICU Train Ambulance from Prayagraj. The level of support depends on the patient's condition and treating doctor's recommendation."
  ],
  [
    "3. How much does a Train Ambulance from Prayagraj cost?",
    "The Train Ambulance Cost in Prayagraj depends on the destination, journey distance, railway accommodation, patient's condition, medical team, equipment, and road ambulance requirements. A customized quotation can be prepared after reviewing the patient's transfer needs."
  ],
  [
    "4. Which cities can I travel to by Rail Ambulance from Prayagraj?",
    "A Rail Ambulance from Prayagraj can be planned to several cities depending on railway connectivity and availability. Possible destinations include Delhi, Lucknow, Vellore, Mumbai, Hyderabad, Chennai, Bengaluru, Ahmedabad, Pune, Kolkata, and other cities across India."
  ],
  [
    "5. Does Train Ambulance Service in Prayagraj include road ambulance pickup?",
    "Yes. Road ambulance support can be coordinated to transfer the patient from a home, hospital, or care facility in Prayagraj to the railway station. Destination-side ambulance support can also be arranged to complete the transfer to the receiving hospital."
  ],
  [
    "6. Can a doctor or nurse accompany the patient?",
    "Yes. Medical escorts can be arranged according to the patient's condition and required level of care. Depending on the case, the accompanying team may include a trained nurse, critical-care doctor, or medical attendant."
  ],
  [
    "7. What equipment is available in an ICU Train Ambulance?",
    "The medical equipment depends on the patient's requirements and may include a ventilator, oxygen supply, multi-parameter monitor, infusion or syringe pumps, suction equipment, emergency medicines, and patient-transfer equipment."
  ],
  [
    "8. How can I book a Train Ambulance Service in Prayagraj?",
    "To arrange a Train Ambulance Service in Prayagraj, provide the patient's medical condition, current hospital or home location, destination city, and transfer requirements by phone or WhatsApp. Our team can assess the requirements, coordinate railway and ambulance arrangements, and provide the Train Ambulance Price before confirmation."
  ]
];

const SCHEMA_BUSINESS = {
  "@context": "https://schema.org","@type": "MedicalBusiness","@id": `${CONTACT.domain}/#business`,
  name: CONTACT.brand, alternateName: "Humancare Train Ambulance Service Prayagraj",
  description: "Book Train Ambulance Service in Prayagraj with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl, telephone: CONTACT.phoneDisplay, email: CONTACT.email, priceRange: "₹₹",
  address: { "@type": "PostalAddress", streetAddress: "Prayagraj Railway Station Area", addressLocality: "Prayagraj", addressRegion: "Uttar Pradesh", postalCode: "211001", addressCountry: "IN" },
  geo: { "@type": "GeoCoordinates", latitude: 25.4358, longitude: 81.8463 },
  areaServed: [{ "@type": "City", name: "Prayagraj" }, { "@type": "Country", name: "India" }],
  medicalSpecialty: "Emergency Medical Transport",
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
};
const SCHEMA_ORG = { "@context": "https://schema.org", "@type": "Organization", "@id": `${CONTACT.domain}/#organization`, name: CONTACT.brand, url: CONTACT.domain, contactPoint: [{ "@type": "ContactPoint", telephone: CONTACT.phoneDisplay, contactType: "customer service", areaServed: "IN", availableLanguage: ["en","hi"] }] };
const SCHEMA_SERVICE = { "@context": "https://schema.org", "@type": "Service", serviceType: "Train Ambulance Service", provider: { "@id": `${CONTACT.domain}/#business` }, areaServed: { "@type": "Country", name: "India" }, name: "Train Ambulance Service in Prayagraj", description: "Train Ambulance Service in Prayagraj — ICU-Equipped Rail Transfers for Critical Patients" };
const SCHEMA_BREADCRUMB = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${CONTACT.domain}/` }, { "@type": "ListItem", position: 2, name: "Prayagraj", item: `${CONTACT.domain}/prayagraj` }, { "@type": "ListItem", position: 3, name: "Train Ambulance in Prayagraj", item: CONTACT.pageUrl }] };
const SCHEMA_FAQ = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const SCHEMA_MEDPAGE = { "@context": "https://schema.org", "@type": "MedicalWebPage", url: CONTACT.pageUrl, lastReviewed: "2026-08-01", reviewedBy: { "@type": "Physician", name: "Medical Advisory Lead", medicalSpecialty: "https://schema.org/Emergency", description: "Medical Advisory Lead, Humancare Train Ambulance" }, about: { "@id": `${CONTACT.domain}/#business` } };
const FAVICON = "/favicon.svg?v=2";

function SeoHead() {
  const ogImg = "https://www.humancaretrainambulance.com/images/og-train-ambulance-prayagraj.jpg";
  return (
    <>
      <title>Train Ambulance Service in Prayagraj | ICU Rail Ambulance</title>
      <meta name="description" content={`Book Train Ambulance Service in Prayagraj with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India.`} />
      <meta name="keywords" content="train ambulance in prayagraj, train ambulance service in prayagraj, ICU rail ambulance prayagraj, patient transfer prayagraj" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Prayagraj" />
      <meta name="geo.position" content="25.4358;81.8463" />
      <meta name="ICBM" content="25.4358, 81.8463" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/svg+xml" href={FAVICON} />
      <link rel="apple-touch-icon" href="/New-LOGO.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta property="og:title" content={`Train Ambulance Service in Prayagraj | ICU Rail Ambulance`} />
      <meta property="og:description" content={`Book Train Ambulance Service in Prayagraj with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India.`} />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Train Ambulance Service in Prayagraj — ICU-Equipped Rail Transfers for Critical Patients" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Train Ambulance Service in Prayagraj | ICU Rail Ambulance`} />
      <meta name="twitter:description" content={`Book Train Ambulance Service in Prayagraj with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India.`} />
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:image:alt" content="Train Ambulance Service in Prayagraj — ICU-Equipped Rail Transfers for Critical Patients" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BUSINESS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_MEDPAGE) }} />
    </>
  );
}

function Prayagraj() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <SeoHead />
      <div className="kl-pad-bottom-sticky">
        <main id="top">
          <section className="kl-hero">
            <div className="kl-container">
              <nav aria-label="Breadcrumb" className="kl-visually-hidden">
                <ol><li><a href="/">Home</a></li><li><a href="/prayagraj">Prayagraj</a></li><li aria-current="page">Train Ambulance in Prayagraj</li></ol>
              </nav>
              <div className="kl-hero-grid">
                <div>
                  <div className="kl-hero-badges">
                    {["24x7 Available","Doctor & Nurse On Board","Pan-India Coverage"].map((b) => (
                      <span className="kl-hero-badge" key={b}><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>{" "}{b}</span>
                    ))}
                  </div>
                  <h1>Train Ambulance Service in Prayagraj — ICU-Equipped Rail Transfers for Critical Patients</h1>
                  <p className="kl-hero-sub">
                    When a patient in Prayagraj needs to travel to another city for advanced treatment, specialist consultation, surgery, rehabilitation, or continued medical care, arranging safe long-distance transportation requires careful planning. Humancare provides Train Ambulance Service in Prayagraj with medical arrangements based on the patient’s condition, including oxygen support, ventilator assistance, cardiac monitoring, and trained medical attendants. From hospital or home pickup to railway boarding and destination-side ambulance support, we coordinate the journey as a complete bed-to-bed patient transfer.
                  </p>
                  <div className="kl-hero-cta-row">
                    <a href={CONTACT.phoneHref} className="kl-btn kl-btn-accent"><IconPhone /> Call the 24x7 Helpline</a>
                    <a href={CONTACT.waHref} className="kl-btn kl-btn-outline" target="_blank" rel="noopener noreferrer"><IconWhatsAppGlyph /> Chat on WhatsApp</a>
                  </div>
                </div>
                <div className="kl-hero-visual">
                  <div className="kl-img-slot">
                    <img src={HeroBanner} alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Prayagraj" loading="eager" width="640" height="480" />
                  </div>
                </div>
              </div>
            </div>
            <div className="kl-hero-rail" aria-hidden="true"></div>
          </section>

          <section className="kl-section" id="about">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">ABOUT THE SERVICE</span>
                  <h2>What Makes a Train Ambulance Service in Prayagraj a Practical Choice for Patient Transfer?</h2>
                  <p>Prayagraj is an important healthcare and transportation hub in Uttar Pradesh, serving patients from the city as well as surrounding districts. Some patients may need to travel to larger medical centers for specialized surgery, oncology, cardiac treatment, neurological care, transplantation, or rehabilitation. For patients who are medically stable enough for railway travel but require support throughout a long journey, a Train Ambulance Service in Prayagraj can provide a structured transportation option.</p>
                  <p>A Rail Ambulance Service in Prayagraj can be arranged around the patient's individual medical requirements. Depending on the case, the setup may include a stretcher, oxygen supply, cardiac monitoring, ventilator support, infusion equipment, suction equipment, and emergency medical supplies. Trained medical personnel can accompany the patient and provide continuous assistance during the railway journey.</p>
                  <p>For patients who need closer medical supervision, an ICU Train Ambulance in Prayagraj can be planned with critical-care equipment and an appropriate medical escort. Depending on the clinical requirements, this may include ventilator assistance, oxygen, continuous vital monitoring, nursing care, infusion support, and other necessary equipment.</p>
                  <p>A Train Ambulance from Prayagraj can also connect road and railway transportation into one coordinated journey. Road ambulance pickup can be arranged from the patient's home or hospital, followed by railway transfer and destination-side ambulance support to help complete the movement to the receiving hospital.</p>
                  <ul className="kl-check-list kl-mt-16">
                    {ABOUT_POINTS.map((t) => (<li key={t}><IconCheck /> {t}</li>))}
                  </ul>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img src={train1} alt="Medical transport team with patient stretcher at Prayagraj railway station" loading="lazy" width="600" height="440" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="kl-section kl-section-alt" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHY FAMILIES CHOOSE US</span>
                <h2>Coordinated Medical Support for Prayagraj Patient Transfers</h2>
                <p>A long-distance medical transfer requires coordination between the patient's family, medical team, railway arrangements, and road ambulances. Our team plans these elements together to provide a structured Train Ambulance Service in Prayagraj based on the patient's condition and destination.</p>
              </div>
              <div className="kl-grid kl-grid-3">
                {WHY_US.map((c) => (
                  <div className={`kl-card${c.tone ? " " + c.tone : ""}`} key={c.title}>
                    <div className="kl-card-icon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="kl-section" id="equipment">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">INSIDE THE COACH</span>
                  <h2>ICU Train Ambulance Equipment for Prayagraj Patient Transfers</h2>
                  <p>A medically supported railway journey requires appropriate equipment to be prepared before departure. Our ICU Train Ambulance Service in Prayagraj can include critical-care equipment selected according to the patient's condition and expected level of medical support.</p>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img src={train4} alt="ICU equipment used in train ambulance including ventilator, monitor and oxygen cylinders" loading="lazy" width="600" height="460" />
                  </div>
                </div>
              </div>
              <div className="kl-equip-grid kl-mt-32">
                {EQUIPMENT.map((e) => (
                  <div className="kl-equip-item" key={e.title}>
                    <span className="kl-card-icon">{e.icon}</span>
                    <div><h4>{e.title}</h4><p>{e.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="kl-section kl-section-tint" id="team">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHO TRAVELS WITH THE PATIENT</span>
                <h2>Medical Professionals Supporting Your Prayagraj Train Transfer</h2>
                <p>Every Train Ambulance Service in Prayagraj is planned according to the patient's condition, journey distance, and level of medical support required. The appropriate medical team can accompany the patient while our coordination team manages the railway and ambulance arrangements.</p>
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

          <section className="kl-section" id="conditions">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">WHO WE TRANSFER</span>
                <h2>Patients Commonly Supported by Train Ambulance from Prayagraj</h2>
                <p>A Train Ambulance Service in Prayagraj can be planned for patients with different medical conditions and mobility requirements. The patient's condition is reviewed before travel so appropriate equipment, personnel, and transportation support can be arranged.</p>
              </div>
              <div className="kl-tag-grid">
                {CONDITIONS.map((c) => (<div className="kl-tag-item" key={c}><IconCheck />{c}</div>))}
              </div>
              <p className="kl-mt-24">If a patient's condition is not listed above, our medical coordination team can review the case and discuss an appropriate transportation arrangement. Depending on the patient's requirements, this may include an ICU Train Ambulance from Prayagraj, medical escort, oxygen support, or another suitable patient-transfer option.</p>
            </div>
          </section>

          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes From Prayagraj</h2>
                <p>Humancare can coordinate Train Ambulance routes from Prayagraj according to the patient's destination, medical condition, railway connectivity, and journey requirements. Commonly relevant destination routes include:</p>
              </div>
              <div className="kl-route-rail">
                {ROUTES.map(([title, desc]) => (
                  <div className="kl-route-stop" key={title}>
                    <div className="kl-route-head"><h3>{title}</h3></div>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="kl-section kl-section-tint" id="booking">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">HOW IT WORKS</span>
                <h2>Book a Train Ambulance from Prayagraj in 4 Simple Steps</h2>
                <p>We simplify the Train Ambulance Service in Prayagraj booking process by coordinating medical, railway, and road ambulance requirements around the patient's journey.</p>
              </div>
              <div className="kl-step-list">
                {BOOKING.map(([title, text]) => (
                  <div className="kl-step-item" key={title}><h4>{title}</h4><p>{text}</p></div>
                ))}
              </div>
            </div>
          </section>

          <section className="kl-section" id="pricing">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">UNDERSTANDING COST</span>
                  <h2>What Affects Train Ambulance Pricing from Prayagraj?</h2>
                  <p>The Train Ambulance Cost in Prayagraj varies because every patient transfer has different medical and travel requirements. The final Train Ambulance Price can depend on the destination, railway accommodation, patient's condition, medical team, equipment, and road ambulance arrangements.</p>
                  <div className="kl-mt-24">
                    {FACTORS.map(([num, title, text]) => (
                      <div className="kl-factor-row" key={num}>
                        <span className="kl-factor-num">{num}</span>
                        <div><h4>{title}</h4><p>{text}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img src={train2} alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Prayagraj" loading="lazy" width="600" height="440" />
                  </div>
                  <div className="kl-card kl-mt-24" style={{ textAlign: "center" }}>
                    <h4>Want an exact number?</h4>
                    <p className="kl-mt-8">Share the patient's origin, destination and condition and we'll send a written quote — no obligation.</p>
                    <a href={CONTACT.phoneHref} className="kl-btn kl-btn-primary kl-btn-block kl-mt-16">Get My Free Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="kl-section kl-section-alt" id="comparison">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Which Should You Choose?</span>
                <h2>Train Ambulance vs Air Ambulance — A Quick Comparison</h2>
                <p>Both options include a medical escort and equipment; the right choice depends on the patient's condition, timeline and budget.</p>
              </div>
              <div className="kl-table-wrap">
                <table className="kl-compare">
                  <thead><tr><th>Factor</th><th>Train Ambulance</th><th>Air Ambulance</th></tr></thead>
                  <tbody>
                    {COMPARE_ROWS.map(([label, train, air]) => (
                      <tr key={label}><td>{label}</td><td className={train[0] || undefined}>{train[1]}</td><td className={air[0] || undefined}>{air[1]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="kl-section" id="service-areas">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">LOCAL COVERAGE</span>
                <h2>Service Areas Around Prayagraj</h2>
                <p>Our road ambulance coordination can support patient pickup and drop-off around Prayagraj before and after a Train Ambulance Service in Prayagraj, helping connect the patient's home or hospital with the railway station and receiving hospital at the destination.</p>
              </div>
              <div className="kl-area-chip-wrap">
                {AREAS.map((a) => (<span className="kl-area-chip" key={a}>{a}</span>))}
              </div>
            </div>
          </section>

          <section className="kl-section" id="faqs">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">COMMON QUESTIONS</span>
                <h2>Train Ambulance Service in Prayagraj — Frequently Asked Questions</h2>
                <p>Families arranging a Train Ambulance Service in Prayagraj often need information about medical support, equipment, routes, pricing, booking, and ambulance connections. Here are answers to common questions about medically supported railway transfers.</p>
              </div>
              <div className="kl-faq-list" id="faqList">
                {FAQS.map(([q, a], i) => {
                  const open = openFaq === i;
                  return (
                    <div className={`kl-faq-item${open ? " kl-open" : ""}`} key={q}>
                      <button className="kl-faq-q" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)}>
                        {q}<span className="kl-plus">+</span>
                      </button>
                      <div className="kl-faq-a"><p>{a}</p></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="kl-section kl-section-dark">
            <div className="kl-container kl-text-center">
              <span className="kl-eyebrow" style={{ color: "var(--color-accent)" }}>Every Minute Matters</span>
              <h2 className="kl-mt-8">Need a Train Ambulance from Prayagraj?</h2>
              <p className="kl-mt-16" style={{ maxWidth: "64ch", marginInline: "auto" }}>
                When a patient needs to travel to another city for treatment, you should not have to manage the medical transfer alone. Humancare helps arrange medically supported Train Ambulance Service in Prayagraj, with suitable medical staff, equipment, railway coordination, and patient transfer support based on the patient's needs.
              </p>
              <p className="kl-mt-8" style={{ maxWidth: "64ch", marginInline: "auto" }}>
                Tell us the patient's condition, pickup location, and destination. Our team will help you understand the available transfer options and guide you through the booking process.
              </p>
              <div className="kl-hero-cta-row" style={{ justifyContent: "center" }}>
                <a href={CONTACT.phoneHref} className="kl-btn kl-btn-accent"><IconPhone /> Call Humancare 24x7</a>
                <a href={CONTACT.waHref} className="kl-btn kl-btn-outline" target="_blank" rel="noopener noreferrer"><IconWhatsAppGlyph /> Chat on WhatsApp</a>
              </div>
            </div>
          </section>
        </main>

        <div className="kl-sticky-cta">
          <a href={CONTACT.phoneHref}><IconPhone /> Call Now</a>
          <a href={CONTACT.waHref} className="kl-wa" target="_blank" rel="noopener noreferrer"><IconWhatsAppGlyph /> WhatsApp</a>
        </div>
      </div>
    </>
  );
}

export default Prayagraj;
