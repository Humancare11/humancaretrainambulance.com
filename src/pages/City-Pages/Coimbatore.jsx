/**
 * Coimbatore.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page for Coimbatore.
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
  pageUrl: "https://www.humancaretrainambulance.com/train-ambulance-services-in-coimbatore",
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
  "Coordinated patient transfer from Coimbatore to the destination hospital",
  "Medical support and equipment arranged around individual patient needs",
  "Rail-based transportation for long-distance intercity medical transfers",
  "Road ambulance support for pickup and destination-side connectivity",
];

const WHY_US = [
  {
    tone: "",
    icon: <IconShield />,
    title: "Trained Medical Professionals",
    text: "Medical professionals can accompany the patient according to the level of support required during the journey. They can assist with vital monitoring, prescribed medicines, oxygen support, and other necessary medical care throughout transit.",
  },
  {
    tone: "kl-accent",
    icon: <IconBolt />,
    title: "24×7 Train Ambulance Coordination",
    text: "Our coordination team can assist families in arranging a Train Ambulance Service in Coimbatore according to their travel and medical requirements. Railway arrangements, medical staff, equipment, and ambulance connections are coordinated as part of the transfer plan.",
  },
  {
    tone: "kl-gold",
    icon: <IconPin />,
    title: "Complete Bed-to-Bed Transfer",
    text: "The patient's journey can begin with road ambulance pickup from a hospital, home, or care facility in Coimbatore. After the railway journey, destination-side ambulance support can be arranged to complete the transfer to the receiving hospital.",
  },
  {
    tone: "",
    icon: <IconBill />,
    title: "Train Ambulance Cost Planning",
    text: "The Train Ambulance Cost in Coimbatore varies according to the destination, railway accommodation, patient's condition, medical team, equipment, and road ambulance requirements. These factors are reviewed before providing the transfer quotation.",
  },
  {
    tone: "kl-accent",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v12H5l-1 4V4Z" />
      </svg>
    ),
    title: "Family Communication & Assistance",
    text: "Medical transfers can involve multiple stages, from hospital pickup to railway boarding and final hospital admission. Our coordination team assists with important journey communication and helps families stay informed during the transfer.",
  },
  {
    tone: "kl-gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    title: "Customized ICU Support",
    text: "An ICU Train Ambulance in Coimbatore can be planned according to the patient's medical requirements. Oxygen, ventilator assistance, cardiac monitoring, infusion support, and other equipment can be arranged based on the level of care required.",
  },
];

const EQUIPMENT = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h4l2-7 4 14 2-7h4" /></svg>),
    title: "Portable Ventilator",
    text: "Ventilator support can be arranged for patients requiring respiratory assistance during transportation. The equipment and medical supervision are selected according to the patient's clinical requirements.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h3l2 5 4-10 2 5h7" /></svg>),
    title: "Multi-Parameter Patient Monitor",
    text: "The monitor allows the medical team to track important parameters such as ECG, SpO₂, blood pressure, and pulse during the Rail Ambulance journey from Coimbatore.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" /></svg>),
    title: "Defibrillator",
    text: "Emergency cardiac equipment can be included for transfers where higher levels of critical-care preparedness and cardiac monitoring are required during the journey.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M5 9h14M5 15h14" /></svg>),
    title: "Infusion & Syringe Pumps",
    text: "These devices help deliver prescribed medicines and IV fluids at controlled rates when required during a long-distance Train Ambulance transfer.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>),
    title: "Oxygen Supply & Backup",
    text: "Oxygen support can be arranged according to the patient's medical condition and expected journey requirements, with supply planning for the duration of the transfer.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4v16M6 4h9l-2 4 2 4H6" /></svg>),
    title: "Suction Unit & Airway Kit",
    text: "Portable suction and airway-management equipment can assist patients who require respiratory secretion management or airway support during transportation.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M4 10h16" /></svg>),
    title: "Emergency Medication Kit",
    text: "Necessary emergency medicines and medical supplies can be carried according to the patient's condition and the clinical requirements established before the journey.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="6" rx="1" /><path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" /></svg>),
    title: "Stretcher & Spine Board",
    text: "Patient-transfer equipment supports safe movement during ambulance pickup, railway boarding, deboarding, and transfers between road ambulance and railway transportation.",
  },
];

const TEAM = [
  {
    icon: <IconUser />,
    title: "Critical-Care Doctor",
    text: "A doctor can accompany patients who require a higher level of medical supervision during transit. The doctor can monitor the patient's condition and provide appropriate medical attention based on the patient's requirements.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /><path d="M9 8h6" /></svg>),
    title: "Trained Critical-Care Nurse",
    text: "A trained nurse can provide bedside care, monitor vital signs, administer prescribed medications, assist with IV support, and provide continuous assistance throughout the ICU Train Ambulance from Coimbatore.",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></svg>),
    title: "Patient Transfer Attendants",
    text: "Transfer attendants assist with stretcher handling, patient movement, railway boarding and deboarding, and coordination between road ambulance services and the railway journey.",
  },
  {
    icon: <IconPhone />,
    title: "24×7 Journey Coordination Team",
    text: "Our coordination team manages railway arrangements, ambulance connections, medical-team coordination, and family communication to keep the Train Ambulance transfer from Coimbatore organized from start to finish.",
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
  "Palliative & end-of-life transfers",
];

const ROUTES = [
  ["Coimbatore to Chennai Train Ambulance", "A medically supported rail transfer for patients travelling from Coimbatore to Chennai for specialist treatment, surgery, oncology care, cardiac treatment, or continued medical management."],
  ["Coimbatore to Bengaluru Train Ambulance", "A convenient intercity medical transfer for patients travelling to Bengaluru for specialist consultations, advanced treatment, surgery, rehabilitation, or follow-up care."],
  ["Coimbatore to Vellore Train Ambulance", "A planned Rail Ambulance from Coimbatore for patients travelling to Vellore for specialized medical treatment and follow-up care, with onboard support arranged according to the patient's condition."],
  ["Coimbatore to Hyderabad Train Ambulance", "A long-distance patient transfer for patients travelling to Hyderabad for advanced healthcare services, specialist treatment, surgery, or continued hospital care."],
  ["Coimbatore to Mumbai Train Ambulance", "A medically coordinated long-distance journey for patients travelling to Mumbai for advanced treatment, oncology services, cardiac care, surgery, or specialist consultations."],
  ["Coimbatore to Delhi Train Ambulance", "A long-distance ICU Train Ambulance route from Coimbatore for patients referred to Delhi for tertiary-care services, specialist treatment, surgery, or continued medical management."],
  ["Coimbatore to Pune Train Ambulance", "A planned railway patient transfer for patients travelling to Pune for specialist care, rehabilitation, surgery, consultations, or post-operative treatment."],
  ["Coimbatore to Ahmedabad Train Ambulance", "A medically supported rail transfer for patients travelling to Ahmedabad for specialized treatment, specialist consultations, surgery, or continued medical care."],
  ["Coimbatore to Kolkata Train Ambulance", "A long-distance Train Ambulance from Coimbatore for patients requiring medically supervised travel to Kolkata for specialist treatment, oncology care, surgery, or other healthcare requirements."],
  ["Coimbatore to Jaipur Train Ambulance", "A coordinated medical railway transfer for patients travelling to Jaipur for specialist treatment, surgery, rehabilitation, or continued hospital care, with road ambulance connectivity available according to requirements."],
];

const BOOKING = [
  ["1. Call or WhatsApp Us", "Share the patient's medical condition, current hospital or home location in Coimbatore, destination city, and important transfer details with our coordination team."],
  ["2. Get Your Transfer Plan & Quote", "Our team reviews the patient's medical needs, route, railway requirements, equipment, and required medical staff before preparing the transfer plan and Train Ambulance Cost."],
  ["3. Confirm & Prepare", "After confirmation, our team coordinates the required medical documents, railway arrangements, ambulance pickup, medical escort, equipment, and journey schedule."],
  ["4. Bedside-to-Bedside Transfer", "The patient is picked up from the hospital or home in Coimbatore, transferred to the railway station by road ambulance, assisted during boarding, medically supported throughout the Rail Ambulance journey, and transferred by destination-side ambulance to the receiving hospital."],
];

const FACTORS = [
  ["01", "Distance & Destination City", "The journey distance can influence the overall Train Ambulance Charges from Coimbatore. Longer routes may require additional travel time and medical and transportation resources."],
  ["02", "Railway Accommodation & Patient Setup", "The accommodation required for the patient can affect the transfer quotation. Stretcher arrangements, available space, privacy, and the medical setup required during the journey are considered when planning the Rail Ambulance from Coimbatore."],
  ["03", "Medical Team & Level of Care", "The patient's condition determines the medical assistance required during transit. Depending on the case, the transfer may require a trained attendant, nurse, critical-care nurse, or doctor for medical supervision."],
  ["04", "ICU Equipment & Medical Supplies", "The equipment required for an ICU Train Ambulance from Coimbatore can influence the final cost. Ventilator support, oxygen, cardiac monitoring, infusion pumps, suction equipment, emergency supplies, and other patient-specific requirements are considered."],
  ["05", "Road Ambulance & Transfer Distance", "Road ambulance services may be required between the patient's hospital or home and the railway station, followed by another transfer at the destination. Ambulance type, distance, and medical requirements can therefore contribute to the final Train Ambulance Charges from Coimbatore."],
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
  "Coimbatore City","RS Puram","Gandhipuram","Saibaba Colony","Peelamedu",
  "Singanallur","Ukkadam","Race Course","Ramanathapuram","Ganapathy",
  "Saravanampatti","Vadavalli","Kuniyamuthur","Podanur","Sundarapuram",
  "Kovaipudur","Thudiyalur","Kalapatti","Sulur","Mettupalayam",
  "Pollachi","Tiruppur","Avinashi","Annur","Kinathukadavu",
];

const FAQS = [
  ["1. What is a Train Ambulance Service in Coimbatore?", "A Train Ambulance Service in Coimbatore is a medically supported railway transfer for patients travelling from Coimbatore to another city for treatment or continued medical care. Depending on the patient's condition, it can include a stretcher, oxygen, monitoring equipment, medical attendants, and road ambulance support."],
  ["2. Who can use an ICU Train Ambulance from Coimbatore?", "Patients who require medical observation or critical-care support during a long-distance railway journey may be considered for an ICU Train Ambulance from Coimbatore. The level of support depends on the patient's condition and treating doctor's recommendation."],
  ["3. How much does a Train Ambulance from Coimbatore cost?", "The Train Ambulance Cost in Coimbatore depends on the destination, journey distance, railway accommodation, patient's condition, medical team, equipment, and road ambulance requirements. A customized quotation can be prepared after reviewing the patient's transfer needs."],
  ["4. Which cities can I travel to by Rail Ambulance from Coimbatore?", "A Rail Ambulance from Coimbatore can be planned to several cities depending on railway connectivity and availability. Possible destinations include Chennai, Bengaluru, Vellore, Hyderabad, Mumbai, Delhi, Pune, Ahmedabad, Kolkata, Jaipur, and other cities across India."],
  ["5. Does Train Ambulance Service in Coimbatore include road ambulance pickup?", "Yes. Road ambulance support can be coordinated to transfer the patient from a home, hospital, or care facility in Coimbatore to the railway station. Destination-side ambulance support can also be arranged to complete the transfer to the receiving hospital."],
  ["6. Can a doctor or nurse accompany the patient?", "Yes. Medical escorts can be arranged according to the patient's condition and required level of care. Depending on the case, the accompanying team may include a trained nurse, critical-care doctor, or medical attendant."],
  ["7. What equipment is available in an ICU Train Ambulance?", "The medical equipment depends on the patient's requirements and may include a ventilator, oxygen supply, multi-parameter monitor, infusion or syringe pumps, suction equipment, emergency medicines, and patient-transfer equipment."],
  ["8. How can I book a Train Ambulance Service in Coimbatore?", "To arrange a Train Ambulance Service in Coimbatore, provide the patient's medical condition, current hospital or home location, destination city, and transfer requirements by phone or WhatsApp. Our team can assess the requirements, coordinate railway and ambulance arrangements, and provide the Train Ambulance Price before confirmation."],
];

const SCHEMA_BUSINESS = {
  "@context": "https://schema.org","@type": "MedicalBusiness","@id": `${CONTACT.domain}/#business`,
  name: CONTACT.brand, alternateName: "Humancare Train Ambulance Service Coimbatore",
  description: "Book Train Ambulance Service in Coimbatore with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India.",
  url: CONTACT.pageUrl, telephone: CONTACT.phoneDisplay, email: CONTACT.email, priceRange: "₹₹",
  address: { "@type": "PostalAddress", streetAddress: "Coimbatore Railway Station Area", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", postalCode: "641001", addressCountry: "IN" },
  geo: { "@type": "GeoCoordinates", latitude: 11.0168, longitude: 76.9558 },
  areaServed: [{ "@type": "City", name: "Coimbatore" }, { "@type": "Country", name: "India" }],
  medicalSpecialty: "Emergency Medical Transport",
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
};
const SCHEMA_ORG = { "@context": "https://schema.org", "@type": "Organization", "@id": `${CONTACT.domain}/#organization`, name: CONTACT.brand, url: CONTACT.domain, contactPoint: [{ "@type": "ContactPoint", telephone: CONTACT.phoneDisplay, contactType: "customer service", areaServed: "IN", availableLanguage: ["en","hi","ta"] }] };
const SCHEMA_SERVICE = { "@context": "https://schema.org", "@type": "Service", serviceType: "Train Ambulance Service", provider: { "@id": `${CONTACT.domain}/#business` }, areaServed: { "@type": "Country", name: "India" }, name: "Train Ambulance Service in Coimbatore", description: "Train Ambulance Service in Coimbatore: ICU-Equipped Rail Transfers for Critical Patients." };
const SCHEMA_BREADCRUMB = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${CONTACT.domain}/` }, { "@type": "ListItem", position: 2, name: "Coimbatore", item: `${CONTACT.domain}/coimbatore` }, { "@type": "ListItem", position: 3, name: "Train Ambulance in Coimbatore", item: CONTACT.pageUrl }] };
const SCHEMA_FAQ = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const SCHEMA_MEDPAGE = { "@context": "https://schema.org", "@type": "MedicalWebPage", url: CONTACT.pageUrl, lastReviewed: "2026-08-01", reviewedBy: { "@type": "Physician", name: "Medical Advisory Lead", medicalSpecialty: "https://schema.org/Emergency", description: "Medical Advisory Lead, Humancare Train Ambulance" }, about: { "@id": `${CONTACT.domain}/#business` } };
const FAVICON = "/favicon.svg?v=2";

function SeoHead() {
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-coimbatore.jpg`;
  return (
    <>
      <title>Train Ambulance Service in Coimbatore | ICU Rail Ambulance</title>
      <meta name="description" content="Book Train Ambulance Service in Coimbatore with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India." />
      <meta name="keywords" content="train ambulance in coimbatore, train ambulance service in coimbatore, ICU rail ambulance coimbatore, patient transfer coimbatore, coimbatore to chennai train ambulance, coimbatore to bengaluru train ambulance" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="11.0168;76.9558" />
      <meta name="ICBM" content="11.0168, 76.9558" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/svg+xml" href={FAVICON} />
      <link rel="apple-touch-icon" href="/New-LOGO.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta property="og:title" content="Train Ambulance Service in Coimbatore | ICU Rail Ambulance" />
      <meta property="og:description" content="Book Train Ambulance Service in Coimbatore with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India." />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Train Ambulance Service in Coimbatore: ICU-Equipped Rail Transfers for Critical Patients" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Train Ambulance Service in Coimbatore | ICU Rail Ambulance" />
      <meta name="twitter:description" content="Book Train Ambulance Service in Coimbatore with ICU support, medical escorts, oxygen, ventilator, and bed-to-bed patient transfers across India." />
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:image:alt" content="Train Ambulance Service in Coimbatore: ICU-Equipped Rail Transfers for Critical Patients" />
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

function Coimbatore() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <SeoHead />
      <div className="kl-pad-bottom-sticky">
        <main id="top">
          <section className="kl-hero">
            <div className="kl-container">
              <nav aria-label="Breadcrumb" className="kl-visually-hidden">
                <ol><li><a href="/">Home</a></li><li><a href="/coimbatore">Coimbatore</a></li><li aria-current="page">Train Ambulance in Coimbatore</li></ol>
              </nav>
              <div className="kl-hero-grid">
                <div>
                  <div className="kl-hero-badges">
                    {["24x7 Available","Doctor & Nurse On Board","Pan-India Coverage"].map((b) => (
                      <span className="kl-hero-badge" key={b}><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>{" "}{b}</span>
                    ))}
                  </div>
                  <h1>Train Ambulance Service in Coimbatore — ICU-Equipped Rail Transfers for Critical Patients</h1>
                  <p className="kl-hero-sub">
                    When a patient in Coimbatore needs to travel to another city for advanced treatment, specialist consultation, surgery, rehabilitation, or continued medical care, arranging suitable transportation can be challenging. Humancare provides Train Ambulance Service in Coimbatore with medical arrangements based on the patient's condition, including oxygen support, ventilator assistance, cardiac monitoring, and trained medical attendants. From hospital or home pickup to railway boarding and destination-side ambulance support, we coordinate the journey as a complete bed-to-bed patient transfer.
                  </p>
                  <div className="kl-hero-cta-row">
                    <a href={CONTACT.phoneHref} className="kl-btn kl-btn-accent"><IconPhone /> Call the 24x7 Helpline</a>
                    <a href={CONTACT.waHref} className="kl-btn kl-btn-outline" target="_blank" rel="noopener noreferrer"><IconWhatsAppGlyph /> Chat on WhatsApp</a>
                  </div>
                </div>
                <div className="kl-hero-visual">
                  <div className="kl-img-slot">
                    <img src={HeroBanner} alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Coimbatore" loading="eager" width="640" height="480" />
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
                  <h2>What Makes a Train Ambulance Service in Coimbatore a Practical Choice for Patient Transfer?</h2>
                  <p>Coimbatore is an important healthcare center in Tamil Nadu and serves patients from several surrounding districts who may require specialized treatment or continued care. When a patient needs to travel outside Coimbatore for a particular specialist or medical facility, a regular railway journey may not provide the assistance required for patients with limited mobility or ongoing medical needs. A Train Ambulance Service in Coimbatore provides a medically coordinated option for such long-distance transfers.</p>
                  <p>A Rail Ambulance Service in Coimbatore is organized around the patient's medical requirements and the planned destination. An ICU Train Ambulance in Coimbatore can be considered when a patient requires closer medical observation during a long-distance journey. A Train Ambulance from Coimbatore also allows families to coordinate the different stages of a medical transfer through one planned journey.</p>
                  <ul className="kl-check-list kl-mt-16">
                    {ABOUT_POINTS.map((t) => (<li key={t}><IconCheck /> {t}</li>))}
                  </ul>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot">
                    <img src={train1} alt="Medical transport team with patient stretcher at Coimbatore railway station" loading="lazy" width="600" height="440" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="kl-section kl-section-alt" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHY FAMILIES CHOOSE US</span>
                <h2>Coordinated Medical Support for Coimbatore Patient Transfers</h2>
                <p>A long-distance patient journey requires coordination between medical professionals, railway arrangements, equipment, and road ambulance services. Our team brings these requirements together to provide a structured Train Ambulance Service in Coimbatore based on the patient's condition and travel requirements.</p>
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
                  <h2>ICU Train Ambulance Equipment for Coimbatore Patient Transfers</h2>
                  <p>A patient travelling by rail with medical requirements needs an appropriate setup before the journey begins. Our ICU Train Ambulance Service in Coimbatore can include essential critical-care equipment selected according to the patient's condition, allowing the accompanying medical team to provide monitoring and support during transit.</p>
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
                <h2>Medical Professionals Supporting Your Coimbatore Train Transfer</h2>
                <p>Every Train Ambulance Service in Coimbatore is planned according to the patient's condition, travel distance, and required level of medical assistance. The appropriate medical team can accompany the patient while our coordination staff handles the railway and ambulance arrangements.</p>
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
                <h2>Patients Commonly Supported by Train Ambulance from Coimbatore</h2>
                <p>A Train Ambulance Service in Coimbatore can be planned for patients with different medical conditions and mobility requirements. The patient's condition is reviewed before travel so that suitable medical equipment, personnel, and transportation support can be arranged.</p>
              </div>
              <div className="kl-tag-grid">
                {CONDITIONS.map((c) => (<div className="kl-tag-item" key={c}><IconCheck />{c}</div>))}
              </div>
              <p className="kl-mt-24">If a patient's condition is not listed above, our medical coordination team can review the case and discuss the appropriate transportation arrangement. Depending on the patient's requirements, this may include an ICU Train Ambulance from Coimbatore, medical escort, oxygen support, or another suitable patient-transfer option.</p>
            </div>
          </section>

          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">WHERE WE TRAVEL</span>
                <h2>Train Ambulance Routes From Coimbatore</h2>
                <p>Humancare can coordinate Train Ambulance routes from Coimbatore according to the patient's destination, medical condition, railway connectivity, and journey requirements. Commonly relevant destination routes include:</p>
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
                <h2>Book a Train Ambulance from Coimbatore in 4 Simple Steps</h2>
                <p>We simplify the Train Ambulance Service in Coimbatore booking process by coordinating the medical, railway, and road ambulance requirements around the patient's journey.</p>
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
                  <h2>What Affects Train Ambulance Pricing from Coimbatore?</h2>
                  <p>The Train Ambulance Cost in Coimbatore varies because every patient transfer has different medical and travel requirements. The final Train Ambulance Price can depend on the destination, railway accommodation, patient's condition, medical team, equipment, and road ambulance arrangements.</p>
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
                    <img src={train2} alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Coimbatore" loading="lazy" width="600" height="440" />
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
                <h2>Service Areas Around Coimbatore</h2>
                <p>Our road ambulance coordination can support patient pickup and drop-off around Coimbatore before and after a Train Ambulance Service in Coimbatore, helping connect the patient's home or hospital with the railway station and receiving hospital at the destination.</p>
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
                <h2>Train Ambulance Service in Coimbatore — Frequently Asked Questions</h2>
                <p>Families arranging a Train Ambulance Service in Coimbatore often need information about medical support, equipment, routes, pricing, booking, and ambulance connections. Here are answers to common questions about medically supported railway transfers.</p>
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
              <h2 className="kl-mt-8">Need a Train Ambulance from Coimbatore?</h2>
              <p className="kl-mt-16" style={{ maxWidth: "64ch", marginInline: "auto" }}>
                When a patient needs to travel to another city for treatment, you should not have to manage the medical transfer alone. Humancare helps arrange medically supported Train Ambulance Service in Coimbatore, with suitable medical staff, equipment, railway coordination, and patient transfer support based on the patient's needs.
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

export default Coimbatore;
