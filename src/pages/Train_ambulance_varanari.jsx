/**
 * TrainAmbulanceVaranasi.jsx
 * -------------------------------------------------------------------------
 * React conversion of the "Humancare Train Ambulance" landing page.
 * The visual design is unchanged. Styles live in the sibling stylesheet
 * ./TrainAmbulanceVaranasi.css (imported at the top of this file).
 *
 * NOTE: the site header (top bar + nav) and the footer have been removed —
 * this component renders the page body only, so you can drop it inside your
 * app's own layout / header / footer. The floating mobile call+WhatsApp bar
 * (.sticky-cta) is kept; delete it from the JSX if your layout has its own.
 *
 * SEO:
 *   All <head> meta tags, Open Graph / Twitter cards and JSON-LD structured
 *   data are rendered inline. This uses React 19's native document-metadata
 *   support: <title>, <meta> and <link> elements rendered anywhere in the
 *   tree are automatically hoisted into <head>. NO extra library is required
 *   (react-helmet-async is not compatible with React 19).
 *
 *   Put <html lang="en-IN">, <meta charset> and the viewport tag in your
 *   project's index.html — those are not hoisted by React.
 *
 *   NOTE ON SEO STRENGTH: a client-rendered SPA injects these tags after
 *   load, which is weaker than the original static HTML. For the best
 *   crawlability, render this inside a server-rendered framework
 *   (Next.js / Remix). The markup and schema below carry over unchanged.
 *
 * PLACEHOLDERS still to replace before launch (same as the original file):
 *   brand name, phone / WhatsApp / email / address, .example domain,
 *   image slots, testimonials (sample copy only), reviewer name + reg. no.,
 *   GPS coords, social links, and the Google Map embed.
 * -------------------------------------------------------------------------
 */

import React, { useState, useRef } from "react";
import "./TrainAmbulanceVaranasi.css";
import train1 from '../assets/TAM-Varanasi/rail-ambulance-service-in-varanasi.webp';
import train2 from '../assets/TAM-Varanasi/train-ambulance-service-in-varanasi.webp';
import HeroBanner from '../assets/TAM-Varanasi/ICU-equipped-train-ambulance.webp';
import train4 from '../assets/TAM-Varanasi/cost-of-rail-ambulance-in-varanasi.webp';


/* =========================================================================
   CONTACT CONSTANTS (single source of truth — replace before launch)
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
    "https://www.humancaretrainambulance.com/train-ambulance-varanasi",
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
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
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
// const STATS = [
//   ["1,200+", "Patients transferred by rail"],
//   ["10+", "Cities on our route network"],
//   ["24x7", "Helpline & coordination desk"],
//   ["100%", "Bedside-to-bedside handling"],
// ];

// const TRUST = [
//   [<IconShield />, "State-Registered Ambulance Operator"],
//   [<IconUser />, "Certified Critical-Care Paramedics"],
//   [<IconBill />, "GST-Registered Billing"],
//   [<IconPin />, "Patient Data Kept Confidential"],
// ];

const ABOUT_POINTS = [
  "Single point of coordination for the entire Varanasi-to-destination journey",
  "ICU-grade equipment and trained medical escorts on board",
  "Meaningfully lower cost than air ambulance for the same distance",
  "Road ambulance included on both the Varanasi and destination side",
];

const WHY_US = [
  { tone: "", icon: <IconShield />, title: "Doctor-Led Medical Escort", text: "A critical care-trained doctor and nurse travel with the patient throughout the journey, managing medications, monitoring vital signs, and responding immediately to any changes in the patient's condition. Every medical escort is selected according to the patient's medical requirements." },
  { tone: "kl-accent", icon: <IconBolt />, title: "Fast, 24x7 Response", text: "Our coordination desk operates round the clock, including nights and holidays, ensuring that every request for a Train Ambulance Service in Varanasi receives immediate attention." },
  { tone: "kl-gold", icon: <IconPin />, title: "Bed-to-Bed Transfer", text: "Road ambulance coverage at both ends is included in every transfer, allowing our team to move the patient safely from the Varanasi hospital bed to the destination hospital bed without interruption." },
  { tone: "", icon: <IconBill />, title: "Transparent, Upfront Pricing", text: "You receive a detailed quotation before booking that includes train fare, coach or berth type, medical staff, ambulance charges, and equipment costs. The Train Ambulance Cost in Varanasi depends on the patient's condition, travel distance, medical equipment required, and railway availability, with no hidden charges." },
  { tone: "kl-accent", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v12H5l-1 4V4Z" /></svg>), title: "Constant Family Updates", text: "Family members receive regular updates throughout the journey by phone or WhatsApp, so they always know how the transfer is progressing." },
  { tone: "kl-gold", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l3 8 4-16 3 8h4" /></svg>), title: "Experience Across Conditions", text: "From ventilator-dependent ICU cases to stable post-treatment discharges, our team has successfully handled a wide range of patient conditions through Train Ambulance and Rail Ambulance services across India." },
];

const EQUIPMENT = [
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h4l2-7 4 14 2-7h4" /></svg>), title: "Portable Ventilator", text: "For patients on invasive or non-invasive respiratory support throughout transit." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h3l2 5 4-10 2 5h7" /></svg>), title: "Multi-Para Patient Monitor", text: "Continuous ECG, SpO\u2082, blood pressure and pulse tracking during the entire route." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" /></svg>), title: "Defibrillator", text: "On-board cardiac emergency response equipment operated by the accompanying doctor." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M5 9h14M5 15h14" /></svg>), title: "Infusion & Syringe Pumps", text: "Accurate, continuous delivery of IV fluids and medication at a controlled rate." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>), title: "Oxygen Cylinders + Backup", text: "Reserve capacity calculated for the full journey, with backup cylinders on board." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4v16M6 4h9l-2 4 2 4H6" /></svg>), title: "Suction Unit & Airway Kit", text: "Portable suction apparatus and airway management tools for emergency use." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M4 10h16" /></svg>), title: "Emergency Medication Kit", text: "Cardiac, resuscitation and pain-management drugs carried as per protocol." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="10" width="18" height="6" rx="1" /><path d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" /></svg>), title: "Stretcher & Spine Board", text: "Patient-transfer stretcher and immobilisation board for safe boarding and transfer." },
];

const TEAM = [
  { icon: <IconUser />, title: "Critical-Care Doctor", text: "Assigned for ICU and ventilator-dependent cases; manages emergencies and medication decisions en route." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /><path d="M9 8h6" /></svg>), title: "Critical-Care Nurse", text: "Handles continuous monitoring, medication administration and patient comfort throughout the journey." },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></svg>), title: "Trained Ambulance Attendants", text: "Manage stretcher transfers at the hospital, station platform and destination, minimising jolts and delays." },
  { icon: <IconPhone />, title: "24x7 Coordination Desk", text: "Books tickets, tracks the journey and stays in touch with both the sending and receiving hospitals." },
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

const HOSPITALS = [
  ["SS", "Sir Sunderlal Hospital, BHU", "Major teaching-hospital campus at Banaras Hindu University, frequently the origin point for onward referral transfers."],
  ["HH", "Heritage Hospital, Varanasi", "Private multi-specialty hospital with a regular flow of patients requiring outstation transfer for advanced treatment."],
  ["VI", "Varanasi Institute of Medical Sciences", "Multi-specialty facility from which we frequently coordinate stable and critical-care rail transfers."],
  ["KH", "Kashi Hospital & Trauma Centre", "Trauma and emergency-care centre; we support step-down transfers once a patient is fit for long-distance travel."],
  ["MH", "Marwari Hospital, Varanasi", "One of the city's established charitable hospitals, from where we regularly assist families with outstation transfers."],
  ["PD", "Pandit Deendayal Upadhyay Hospital", "Government district hospital; we coordinate with treating physicians here for onward private-hospital referrals."],
];

const ROUTES = [
  ["Varanasi to Delhi Train Ambulance", "One of our most requested routes, used for patients being referred to Delhi's tertiary cardiac, neuro and oncology centres, and for families returning home after treatment in Varanasi."],
  ["Varanasi to Mumbai Train Ambulance", "A longer transfer typically booked for stable patients heading to Mumbai's specialty transplant and cancer-care hospitals, staffed with a full ICU escort for the extended journey."],
  ["Varanasi to Chennai Train Ambulance", "Common among families connecting to Chennai's cardiac and multi-organ specialty hospitals, with careful planning for the longer on-board duration."],
  ["Varanasi to Hyderabad Train Ambulance", "Frequently used for oncology and advanced surgical referrals, with a doctor-led escort maintaining continuous monitoring through the journey."],
  ["Varanasi to Bangalore Train Ambulance", "Our longest regularly booked route, reserved for medically stable patients only, with staged monitoring checkpoints planned in advance by the escorting doctor."],
  ["Varanasi to Kolkata Train Ambulance", "A well-connected, comparatively shorter transfer often used for onward referral to Kolkata's specialty hospitals or for patients returning home."],
  ["Varanasi to Lucknow Train Ambulance", "A short, frequently booked in-state transfer for patients moving between Varanasi and Lucknow's larger referral hospitals."],
  ["Varanasi to Patna Train Ambulance", "One of our quickest cross-state transfers, commonly used by families travelling between eastern UP and Bihar for continued treatment."],
  ["Varanasi to Pune Train Ambulance", "Booked for patients referred to Pune's specialty and rehabilitation centres, with full ICU support for the multi-hour transfer."],
  ["Varanasi to Jaipur Train Ambulance", "A moderate-distance route used both for onward treatment referrals to Jaipur and for patients travelling home after treatment in Varanasi."],
];

const BOOKING = [
  ["Call or WhatsApp Us", "Share the patient's condition, current hospital in Varanasi, and the destination city with our coordination desk."],
  ["Get a Transfer Plan & Quote", "We check train and berth availability, assign the right medical escort, and share an itemised cost estimate."],
  ["Confirm & Prepare", "Once confirmed, we coordinate documentation with the treating hospital and schedule pickup timing with your family."],
  ["Bedside-to-Bedside Transfer", "Our team collects the patient, manages the full rail journey, and hands over safely at the destination hospital."],
];

const FACTORS = [
  ["01", "Distance & Destination City", "Longer routes such as Varanasi\u2013Bangalore naturally cost more than shorter ones like Varanasi\u2013Patna."],
  ["02", "Train Class & Berth Type", "A private coupe/cabin for privacy and equipment space costs more than standard reserved berths."],
  ["03", "Medical Escort Required", "A doctor-plus-nurse ICU escort is priced differently from a single trained attendant for a stable patient."],
  ["04", "Equipment & Consumables", "Ventilator use, oxygen quantity, and specific medications required add to the base cost."],
  ["05", "Both-Side Road Ambulance", "Distance between the hospital and railway station at both the Varanasi and destination end."],
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
  "Varanasi Cantonment", "Lanka", "Sigra", "Bhelupur", "Sarnath", "Ramnagar",
  "Manduadih", "Chandauli", "Mirzapur", "Jaunpur", "Bhadohi", "Ghazipur",
  "Prayagraj (on request)", "Azamgarh (on request)",
];

const TESTIMONIALS = [
  ["R.S.", "R. Sharma", "Family member, Varanasi to Delhi transfer", "My father needed to be moved from Varanasi to Delhi after his surgery. The team managed everything — ambulance to the station, the coach setup, all of it. We just had to be with him."],
  ["A.P.", "A. Pandey", "Family member, Varanasi to Mumbai transfer", "We were worried about the long journey to Mumbai on a ventilator, but the doctor on board kept us updated the entire way and everything went smoothly."],
  ["S.K.", "S. Kumar", "Family member, Varanasi to Patna transfer", "Cost was our biggest concern after weeks in hospital. The train ambulance option to Patna was a fraction of what an air ambulance would have cost, and just as caring."],
  ["N.T.", "N. Tiwari", "Family member, Varanasi to Lucknow transfer", "Booking was quick even though it was late at night. The coordinator stayed on call with us until the ambulance actually reached the hospital."],
  ["D.G.", "D. Ghosh", "Family member, Varanasi to Kolkata transfer", "My mother is elderly and anxious about travel. The nurse on board was patient with her the whole way to Kolkata and made her feel safe."],
  ["V.M.", "V. Mishra", "NRI family member, Varanasi to Bangalore transfer", "We are based abroad and couldn't be there in person. The team sent updates over WhatsApp at every stage of my uncle's transfer to Bangalore."],
];

const RESOURCES = [
  ["Guide", "How to Prepare a Patient for a Long-Distance Train Transfer", "What to pack, how to brief the medical escort, and what families can do to make the journey easier on the patient."],
  ["Comparison", "Train Ambulance vs Air Ambulance: Which One Do You Actually Need?", "A deeper look at how patient condition, distance and budget should shape this decision, beyond the quick comparison above."],
  ["Cost Guide", "Understanding Train Ambulance Costs in India", "A transparent breakdown of what typically drives the final bill, so you can ask the right questions when comparing providers."],
];

const RELATED = [
  "Road Ambulance Service in Varanasi",
  "Air Ambulance Service in Varanasi",
  "ICU Ambulance Service Near Me",
  "Train Ambulance Service in Lucknow",
  "Train Ambulance Service in Patna",
  "Mortal Remains Transport Service",
];

const FAQS = [
  ["What is a Train Ambulance Service in Varanasi?", "A Train Ambulance Service in Varanasi is a specialized patient transport service that converts a reserved train coach or berth into a mobile ICU. It is equipped with a ventilator, oxygen, cardiac monitor, emergency medicines, and a trained medical escort to safely transfer patients to hospitals across India."],
  ["Who can use a Train Ambulance Service in Varanasi?", "Patients recovering from surgery, accident victims, cancer patients, stroke patients, cardiac patients, ventilator-supported patients, and individuals requiring long-distance patient transfer can benefit from our Train Ambulance Service in Varanasi."],
  ["Is an ICU Train Ambulance suitable for critically ill patients?", "Yes. An ICU Train Ambulance is suitable for medically stable critical patients who require continuous monitoring during long-distance travel. Every transfer is planned according to the patient's condition and the treating doctor's recommendations."],
  ["What medical equipment is available in your ICU Train Ambulance?", "Our ICU Train Ambulance is equipped with a ventilator, oxygen cylinders, cardiac monitor, infusion pump, suction machine, emergency medicines, and other ICU equipment required for safe patient transfer."],
  ["Does a doctor travel with the patient during the journey?", "Yes. Every Train Ambulance Service in Varanasi includes a trained medical escort. Depending on the patient's condition, the team may include a critical care doctor, ICU nurse, paramedic, or all of them."],
  ["What is included in the medical escort service?", "Our medical escort team continuously monitors the patient's condition, administers medications, manages oxygen support, and provides emergency medical care throughout the journey until the patient reaches the destination hospital."],
  ["What is the Train Ambulance Cost in Varanasi?", "The Train Ambulance Cost in Varanasi depends on factors such as the patient's medical condition, destination city, train availability, ICU equipment required, medical escort team, and ambulance support at both ends."],
  ["Is Train Ambulance more affordable than an Air Ambulance?", "Yes. A Train Ambulance is generally much more cost-effective than an air ambulance while still providing advanced ICU care, making it an ideal choice for long-distance patient transfer."],
  ["Which cities can you transfer patients to from Varanasi?", "We provide Train Ambulance from Varanasi to Delhi, Mumbai, Chennai, Bangalore, Hyderabad, Kolkata, Lucknow, Pune, Jaipur, Patna, and many other cities across India."],
  ["How do I book a Train Ambulance from Varanasi?", "Simply contact our 24\u00d77 coordination team, share the patient's medical reports, receive a treatment assessment, approve the quotation, and our team will arrange the complete bed-to-bed patient transfer."],
  ["Do you provide bed-to-bed patient transfer?", "Yes. Our service includes bed-to-bed patient transfer, with road ambulance support at both the pickup and destination hospitals for a seamless journey."],
  ["How quickly can a Train Ambulance Service in Varanasi be arranged?", "Depending on train availability and the patient's medical condition, we strive to arrange an Emergency Train Ambulance as quickly as possible, often within a few hours of confirmation."],
  ["Is oxygen support available throughout the journey?", "Yes. Every ICU Train Ambulance includes continuous oxygen support, and our medical escort team closely monitors oxygen levels throughout the transfer."],
  ["Can ventilator-supported patients travel by Train Ambulance?", "Yes. Ventilator-supported patients can be transferred if they are medically fit for rail travel. Our ICU Train Ambulance is equipped with ventilator support and managed by experienced critical care professionals."],
  ["Why should I choose the Humancare Train Ambulance in Varanasi?", "Humancare offers 24\u00d77 availability, experienced medical escorts, ICU-equipped Train Ambulance services, transparent pricing, bed-to-bed patient transfer, and nationwide coverage from Varanasi."],
  ["Is Rail Ambulance safe for long-distance patient transfer?", "Yes. A Rail Ambulance provides a stable and comfortable environment for patients who require continuous monitoring over long distances, making it a safe option for many medical conditions."],
  ["Can a family member travel with the patient?", "Yes. Subject to railway availability and medical requirements, one or more family members can usually accompany the patient during the Train Ambulance journey."],
  ["What documents are required to book a Train Ambulance Service in Varanasi?", "You typically need the patient's medical reports, doctor's advice, valid identification, hospital discharge summary (if applicable), and basic travel details. Our coordination team will guide you through the process."],
  ["Do you provide Emergency Train Ambulance services 24\u00d77?", "Yes. Our Emergency Train Ambulance coordination team is available 24 hours a day, 7 days a week, including weekends and holidays, to assist families with urgent patient transfers."],
  ["How is a Train Ambulance different from a Rail Ambulance?", "The terms Train Ambulance and Rail Ambulance are commonly used interchangeably. Both refer to medically equipped train-based patient transfer services that provide ICU care, medical escort, and long-distance transport."],
  ["Can patients be transferred from any hospital in Varanasi?", "Yes. We coordinate Train Ambulance Service in Varanasi from major government and private hospitals, ensuring smooth hospital-to-hospital patient transfer with complete medical assistance."],
  ["How do I know if my patient is eligible for a Train Ambulance?", "Our medical coordination team reviews the patient's condition and consults with the treating doctor before recommending a Train Ambulance. If rail transfer is not medically suitable, we will suggest the safest alternative."],
];

/* =========================================================================
   STRUCTURED DATA (JSON-LD) — same content as the original <head> blocks
   ========================================================================= */
const SCHEMA_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${CONTACT.domain}/#business`,
  name: CONTACT.brand,
  alternateName: "Humancare Train Ambulance Service Varanasi",
  description:
    "24x7 ICU-equipped train ambulance service based in Varanasi, offering bedside-to-bedside emergency and non-emergency patient transfer by rail across India, with a qualified doctor, nurse and full life-support equipment on board.",
  url: CONTACT.pageUrl,
  image: `${CONTACT.domain}/images/og-train-ambulance-varanasi.jpg`,
  logo: `${CONTACT.domain}/images/logo.png`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  priceRange: "\u20B9\u20B9",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cantonment Road",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221002",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 25.3176, longitude: 82.9739 },
  areaServed: [
    { "@type": "City", name: "Varanasi" },
    { "@type": "Country", name: "India" },
  ],
  medicalSpecialty: "Emergency Medical Transport",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/example",
    "https://www.instagram.com/example",
    "https://www.linkedin.com/company/example",
    "https://twitter.com/example",
  ],
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
      availableLanguage: ["en", "hi"],
    },
  ],
};

const SCHEMA_SERVICE = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Train Ambulance Service",
  provider: { "@id": `${CONTACT.domain}/#business` },
  areaServed: { "@type": "Country", name: "India" },
  name: "ICU Train Ambulance Service in Varanasi",
  description:
    "End-to-end ICU train ambulance service from Varanasi covering bedside pickup, road ambulance to the railway station, a fully equipped ICU coach with doctor and nurse escort, and road ambulance to the destination hospital.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Train Ambulance Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ICU Train Ambulance (Ventilator Support)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Non-ICU Train Ambulance (Stable Patients)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bedside-to-Bedside Patient Transfer" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deceased / Mortal Remains Transport" } },
    ],
  },
};

const SCHEMA_BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${CONTACT.domain}/` },
    { "@type": "ListItem", position: 2, name: "Varanasi", item: `${CONTACT.domain}/varanasi` },
    { "@type": "ListItem", position: 3, name: "Train Ambulance Service in Varanasi", item: CONTACT.pageUrl },
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
  lastReviewed: "2026-07-01",
  reviewedBy: {
    "@type": "Physician",
    name: "Dr. [Name]",
    medicalSpecialty: "https://schema.org/Emergency",
    description: "Medical Advisory Lead, Humancare Train Ambulance",
  },
  about: { "@id": `${CONTACT.domain}/#business` },
};

const FAVICON =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23163B6D'/><path d='M8 20h16v2a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z' fill='%23F5F7FA'/><rect x='9' y='11' width='14' height='9' rx='2' fill='%23F5F7FA'/><circle cx='12' cy='23' r='1.6' fill='%23163B6D'/><circle cx='20' cy='23' r='1.6' fill='%23163B6D'/><path d='M16 13v5M13.5 15.5h5' stroke='%23D6402D' stroke-width='1.4' stroke-linecap='round'/></svg>";

/* =========================================================================
   SEO HEAD
   ========================================================================= */
function SeoHead() {
  const ogImg = `${CONTACT.domain}/images/og-train-ambulance-varanasi.jpg`;
  return (
    <>
      {/* React 19 hoists <title>, <meta> and <link> into <head> automatically.
          Put <html lang>, <meta charset> and viewport in your index.html. */}
      <title>Train Ambulance Service in Varanasi | ICU Rail Ambulance 24x7</title>
      <meta name="description" content="Book Train Ambulance Service in Varanasi with ICU setup, doctor escort, ventilator support, oxygen, and bed-to-bed patient transfer across India." />
      <meta name="keywords" content="train ambulance service in varanasi, ICU train ambulance varanasi, rail ambulance varanasi, patient transfer varanasi, medical transport varanasi, emergency train ambulance varanasi" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={CONTACT.pageUrl} />
      <meta name="author" content={CONTACT.brand} />
      <meta name="language" content="en-IN" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Varanasi" />
      <meta name="geo.position" content="25.3176;82.9739" />
      <meta name="ICBM" content="25.3176, 82.9739" />
      <meta name="theme-color" content="#163B6D" />
      <link rel="icon" type="image/svg+xml" href={FAVICON} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONTACT.brand} />
      <meta property="og:title" content="Train Ambulance Service in Varanasi | 24x7 ICU Train Ambulance" />
      <meta property="og:description" content="ICU-equipped train ambulance from Varanasi with doctor, nurse & ventilator support for safe long-distance patient transfer anywhere in India. Available 24x7." />
      <meta property="og:url" content={CONTACT.pageUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ICU-equipped train ambulance coach used for patient transfer from Varanasi" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Train Ambulance Service in Varanasi | 24x7 ICU Train Ambulance" />
      <meta name="twitter:description" content="ICU-equipped train ambulance from Varanasi with doctor, nurse & ventilator support for safe long-distance patient transfer anywhere in India." />
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:image:alt" content="ICU-equipped train ambulance coach used for patient transfer from Varanasi" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet" />

      {/* JSON-LD structured data. Regular (non-async) scripts are not hoisted
          by React 19, so these render in the body — which is fine for SEO,
          Google reads JSON-LD from anywhere in the document. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BUSINESS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_MEDPAGE) }} />
    </>
  );
}

/* =========================================================================
   PAGE
   ========================================================================= */
function TrainAmbulanceVaranasiPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSuccess, setFormSuccess] = useState(false);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // TODO: replace with actual submission (fetch to your API / CRM / lead endpoint)
    setFormSuccess(true);
    if (form) form.reset();
    if (successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
                  <li><a href="/">Home</a></li>
                  <li><a href="/varanasi">Varanasi</a></li>
                  <li aria-current="page">Train Ambulance Service in Varanasi</li>
                </ol>
              </nav>
              <div className="kl-hero-grid">
                <div>
                  <div className="kl-hero-badges">
                    {["24x7 Available", "Doctor & Nurse On Board", "Pan-India Coverage"].map((b) => (
                      <span className="kl-hero-badge" key={b}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg> {b}
                      </span>
                    ))}
                  </div>
                  <h1>Train Ambulance Service in Varanasi — <span>ICU-Equipped</span> Rail and Bed-to-Bed Transfer</h1>
                  <p className="kl-hero-sub">Humancare Train Ambulance arranges safe, doctor-escorted Train Ambulance Service in Varanasi for patients who need reliable Rail Ambulance and Emergency Train Ambulance transfers from Varanasi to any city in India. Every transfer is equipped with a ventilator, oxygen, cardiac monitor, and a critical care nurse, making it a dependable solution for long-distance patient transfer without the high cost of an air ambulance.</p>
                  <div className="kl-hero-cta-row">
                    <a href={CONTACT.phoneHref} className="kl-btn kl-btn-accent"><IconPhone /> Call the 24x7 Helpline</a>
                    <a href={CONTACT.waHref} className="kl-btn kl-btn-outline" target="_blank" rel="noopener noreferrer"><IconWhatsAppGlyph /> Chat on WhatsApp</a>
                  </div>
                  {/* <div className="kl-hero-trust">
                    <div><b>9+ yrs</b><span>Patient transport experience</span></div>
                    <div><b>60&nbsp;min</b><span>Avg. dispatch after confirmation*</span></div>
                    <div><b>10+</b><span>Major city routes covered</span></div>
                  </div> */}
                </div>
                <div className="kl-hero-visual">
                  <div className="kl-img-slot">
                    <img src={HeroBanner} alt="ICU-equipped train ambulance coach interior with ventilator and monitor, Varanasi" loading="eager" width="640" height="480" />
                  </div>
                  {/* <div className="kl-hero-float-card">
                    <span className="kl-dot" aria-hidden="true"></span>
                    <div><b>Live coordination desk</b><span>Someone is available right now</span></div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="kl-hero-rail" aria-hidden="true"></div>
          </section>

          {/* ============ STATS STRIP ============ */}
          {/* <section className="kl-stats-strip">
            <div className="kl-container kl-stats-grid">
              {STATS.map(([n, l]) => (
                <div className="kl-stat-item" key={l}><b>{n}</b><span>{l}</span></div>
              ))}
            </div>
          </section> */}

          {/* ============ TRUST STRIP ============ */}
          {/* <section className="kl-trust-strip">
            <div className="kl-container kl-trust-grid">
              {TRUST.map(([icon, label]) => (
                <div className="kl-trust-item" key={label}>{icon} {label}</div>
              ))}
            </div>
          </section> */}

          {/* ============ ABOUT ============ */}
          <section className="kl-section" id="about">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">About The Service</span>
                  <h2>What is a Train Ambulance Service in Varanasi, and Who is it for?</h2>
                  <p>Varanasi is one of the busiest medical and pilgrimage hubs in eastern Uttar Pradesh, drawing patients and families from Bihar, eastern UP, and neighbouring districts for treatment at the city's major hospitals. When a patient here needs specialised care in another city, whether it is a cardiac case being shifted to Delhi, a transplant follow-up in Mumbai, or a stable patient returning home to Chennai or Bangalore after treatment, road ambulances become impractical beyond a few hundred kilometres and air ambulances are often financially out of reach for many families.</p>
                  <p>A <strong>Train Ambulance Service in Varanasi</strong> bridges this gap. It converts a reserved train coach, cabin, or set of berths into a mobile critical care unit. It comes with a stretcher, oxygen supply, monitoring equipment, and a trained medical escort, allowing the patient to travel comfortably and safely over long distances at a fraction of the cost of an air ambulance. Humancare Train Ambulance coordinates every part of this Train Ambulance from Varanasi, managing the journey from the hospital bed in Varanasi to the hospital bed in the destination city as one seamless transfer instead of multiple separate arrangements for the family.</p>
                  <p>This kind of <strong>Rail Ambulance</strong> transfer particularly suits patients who are medically stable enough to tolerate a multi-hour journey, families looking for a cost-effective alternative to air transport, and situations where the destination city is well connected by rail but a direct road ambulance drive would be too long or too tiring for the patient.</p>
                  <ul className="kl-check-list kl-mt-16">
                    {ABOUT_POINTS.map((t) => (
                      <li key={t}><IconCheck /> {t}</li>
                    ))}
                  </ul>
                </div>
                <div className="kl-split-visual">
                  <div className="kl-img-slot" style={{ minHeight: "360px" }}>
                    <img src={train1} alt="Medical transport team with patient stretcher at Varanasi railway station" loading="lazy" width="600" height="440" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ WHY CHOOSE US ============ */}
          <section className="kl-section kl-section-alt" id="why-us">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Why Families Choose Us</span>
                <h2>Our Train Ambulance Team Treats Every Transfer Like Family</h2>
                <p>Coordinating a long-distance patient transfer while worrying about a loved one is stressful enough. Here is what we handle so you don't have to.</p>
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

          {/* ============ ICU EQUIPMENT ============ */}
          <section className="kl-section" id="equipment">
            <div className="kl-container">
              <div className="kl-split kl-reverse">
                <div className="kl-split-visual">
                  <div className="kl-img-slot" style={{ minHeight: "380px" }}>
                    <img src={train4} alt="ICU equipment used in train ambulance including ventilator, monitor and oxygen cylinders" loading="lazy" width="600" height="460" />
                  </div>
                </div>
                <div>
                  <span className="kl-eyebrow">Inside The Coach</span>
                  <h2>ICU Train Ambulance Equipment – Hospital-Grade Care on the Move</h2>
                  <p>An <strong>ICU Train Ambulance</strong> is only as good as the equipment on board. Every critical care coach arranged by Humancare Train Ambulance is designed to function as closely as possible to a hospital ICU, allowing the patient's condition to be continuously monitored and managed throughout the journey instead of being checked only at intervals.</p>
                  <div className="kl-equip-list kl-mt-24">
                    {EQUIPMENT.map((e) => (
                      <div className="kl-equip-item" key={e.title}>
                        <span className="kl-card-icon">{e.icon}</span>
                        <div><h4>{e.title}</h4><p>{e.text}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ MEDICAL TEAM ============ */}
          <section className="kl-section kl-section-tint" id="team">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Who Travels With The Patient</span>
                <h2>A Trained Medical Team, Not Just People Who Operate Equipment</h2>
                <p>Every long-distance patient transfer is staffed according to the patient's actual medical needs, decided in consultation with the treating doctor before departure. Our experienced doctors, nurses, and medical escorts ensure safe monitoring throughout the journey.</p>
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

              {/* Replace reviewer name / qualification / reg. no. with real, verifiable values (E-E-A-T). */}
              {/* <div className="kl-reviewer-card kl-mt-32">
                <span className="kl-reviewer-avatar">Dr</span>
                <div>
                  <b>Medically Reviewed by Dr. [Name], MBBS, MD (Critical Care Medicine)</b>
                  <span className="kl-reviewer-role">Medical Advisory Lead, Humancare Train Ambulance · State Medical Council Reg. No. [XXXXX]</span>
                  <p>This page's medical claims — equipment, escort staffing and patient-handling protocols — are reviewed by our advisory doctor for accuracy before publishing.</p>
                </div>
                <div className="kl-reviewer-meta">Content last reviewed:<br />July 2026</div>
              </div> */}
            </div>
          </section>

          {/* ============ PATIENT CONDITIONS ============ */}
          <section className="kl-section" id="conditions">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">Who We Transfer</span>
                <h2>Conditions of the Patients We Handle Regularly</h2>
                <p>Our medical escorts are briefed on the patient's condition before every mission, and equipment is prepared accordingly. Common cases include:</p>
              </div>
              <div className="kl-tag-grid">
                {CONDITIONS.map((c) => (
                  <div className="kl-tag-item" key={c}><IconCheck />{c}</div>
                ))}
              </div>
              <p className="kl-mt-24">If your patient's condition isn't listed here, call our coordination desk. We will consult with the treating doctor to determine whether a Train Ambulance Service in Varanasi is medically appropriate or recommend the safest alternative.</p>
            </div>
          </section>

          {/* ============ HOSPITALS ============ */}
          {/* <section className="kl-section kl-section-alt" id="hospitals">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Pickup Coverage</span>
                <h2>Hospitals in Varanasi We Regularly Coordinate With</h2>
                <p>We arrange bedside pickup from all major hospitals and nursing homes across Varanasi, including but not limited to:</p>
              </div>
              <div className="kl-grid kl-grid-3">
                {HOSPITALS.map(([badge, name, desc]) => (
                  <div className="kl-card kl-hospital-card" key={name}>
                    <span className="kl-hospital-badge">{badge}</span>
                    <div><h3>{name}</h3><p>{desc}</p></div>
                  </div>
                ))}
              </div>
              <p className="kl-mt-24">Don't see your hospital listed? Our road ambulances collect patients from <strong>any hospital, nursing home or residence in Varanasi and surrounding districts</strong> — just share the pickup location when you call.</p>
            </div>
          </section> */}

          {/* ============ ROUTES ============ */}
          <section className="kl-section" id="routes">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Where We Travel</span>
                <h2>Train Ambulance Routes From Varanasi</h2>
                <p>Below are the most frequently booked Train Ambulance from Varanasi routes. Distances are approximate rail distances, and journey duration depends on the selected train, route availability, and the patient's medical condition.</p>
              </div>
              <div className="kl-route-rail">
                {ROUTES.map(([title, desc]) => (
                  <div className="kl-route-stop" key={title}>
                    <div className="kl-route-head"><h3>{title}</h3></div>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              {/* <p className="kl-mt-24 kl-text-center">Need a route not listed here? <a href={CONTACT.phoneHref} style={{ color: "var(--color-accent)", fontWeight: 700 }}>Call our helpline</a> — we plan transfers to virtually any city on the Indian rail network.</p> */}
            </div>
          </section>

          {/* ============ BOOKING ============ */}
          <section className="kl-section kl-section-tint" id="booking">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">How It Works</span>
                <h2>Book Our Train Ambulance from Varanasi in 4 Simple Steps</h2>
                <p>We have kept the process simple for families already dealing with medical emergencies and stressful situations.</p>
              </div>
              <div className="kl-step-list">
                {BOOKING.map(([title, text]) => (
                  <div className="kl-step-item" key={title}><h4>{title}</h4><p>{text}</p></div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ PRICING ============ */}
          <section className="kl-section" id="pricing">
            <div className="kl-container">
              <div className="kl-split">
                <div>
                  <span className="kl-eyebrow">Understanding Cost</span>
                  <h2>What Affects Train Ambulance Pricing from Varanasi?</h2>
                  <p>Every transfer is quoted individually because no two patients or routes are identical. The Train Ambulance Cost in Varanasi depends on factors such as the patient's medical condition, ICU equipment, doctor or nurse requirement, coach availability, destination city, ambulance support at both ends, and railway schedule. Our coordination desk evaluates every requirement before providing a transparent quotation.</p>
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
                  <div className="kl-img-slot" style={{ minHeight: "340px" }}>
                    <img src={train2} alt="Coordinator preparing a train ambulance cost estimate for a patient transfer from Varanasi" loading="lazy" width="600" height="440" />
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

          {/* ============ COMPARISON ============ */}
          <section className="kl-section kl-section-alt" id="comparison">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Which Should You Choose?</span>
                <h2>Train Ambulance vs Air Ambulance — A Quick Comparison</h2>
                <p>Both options include a medical escort and equipment; the right choice depends on the patient's condition, timeline and budget.</p>
              </div>
              <div className="kl-table-wrap">
                <table className="kl-compare">
                  <thead>
                    <tr><th>Factor</th><th>Train Ambulance</th><th>Air Ambulance</th></tr>
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
              <p className="kl-mt-24">Not sure which is right for your situation? Call our team with the patient's current condition — we'll give you an honest recommendation, even if that means suggesting <a href="#" data-internal="true" style={{ color: "var(--color-primary)", fontWeight: 600 }}>our air ambulance coordination partners</a> instead.</p>
            </div>
          </section>

          {/* ============ SERVICE AREAS ============ */}
          <section className="kl-section" id="service-areas">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">Local Coverage</span>
                <h2>Service Areas Around Varanasi</h2>
                <p>Beyond Varanasi city, our road ambulances regularly collect and drop patients across the wider region before and after train transfers, including:</p>
              </div>
              <div className="kl-area-chip-wrap">
                {AREAS.map((a) => (
                  <span className="kl-area-chip" key={a}>{a}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ============ TESTIMONIALS (SAMPLE COPY ONLY — replace before launch) ============ */}
          <section className="kl-section kl-section-tint" id="testimonials">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Families We've Helped</span>
                <h2>What Patients & Families Say</h2>
              </div>
              <div className="kl-grid kl-grid-3">
                {TESTIMONIALS.map(([initials, name, role, quote]) => (
                  <div className="kl-testi-card" key={name}>
                    <div className="kl-testi-stars">★★★★★</div>
                    <p>&quot;{quote}&quot;</p>
                    <div className="kl-testi-person">
                      <span className="kl-testi-avatar">{initials}</span>
                      <div><b>{name}</b><span>{role}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ CONTACT / FORM ============ */}


          {/* ============ RESOURCES ============ */}
          {/* <section className="kl-section" id="resources">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">Guides & Resources</span>
                <h2>Helpful Reading Before You Book</h2>
                <p>Longer guides for families who want to understand the process before calling — placeholders for now, meant to become full articles on your blog.</p>
              </div>
              <div className="kl-grid kl-grid-3">
                {RESOURCES.map(([tag, title, text]) => (
                  <a href="#" data-internal="true" className="kl-card kl-resource-card" key={title}>
                    <span className="kl-resource-tag">{tag}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="kl-resource-read">Read the guide <IconChevron /></span>
                  </a>
                ))}
              </div>
            </div>
          </section> */}

          {/* ============ INTERNAL LINKS ============ */}
          {/* <section className="kl-section kl-section-alt">
            <div className="kl-container">
              <div className="kl-section-head">
                <span className="kl-eyebrow">Explore More</span>
                <h2>Related Pages</h2>
                <p>Internal linking placeholders — connect these to their live URLs once published.</p>
              </div>
              <div className="kl-link-chip-wrap">
                {RELATED.map((label) => (
                  <a href="#" data-internal="true" className="kl-link-chip" key={label}><IconChevron />{label}</a>
                ))}
              </div>
            </div>
          </section> */}

          {/* ============ FAQ ============ */}
          <section className="kl-section" id="faqs">
            <div className="kl-container">
              <div className="kl-section-head kl-center">
                <span className="kl-eyebrow">Common Questions</span>
                <h2>Train Ambulance Service in Varanasi — Frequently Asked Questions</h2>
                <p>Answers to the questions we hear most often from families. Structured data for these FAQs is included for search engines.</p>
              </div>
              <div className="kl-faq-list" id="faqList">
                {FAQS.map(([q, a], i) => {
                  const open = openFaq === i;
                  return (
                    <div className={`kl-faq-item${open ? " kl-open" : ""}`} key={q}>
                      <button
                        className="kl-faq-q"
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? -1 : i)}
                      >
                        {q}<span className="kl-plus">+</span>
                      </button>
                      <div className="kl-faq-a"><p>{a}</p></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ============ FINAL CTA ============ */}
          {/* <section className="kl-section kl-section-dark">
            <div className="kl-container kl-text-center">
              <span className="kl-eyebrow" style={{ color: "var(--color-accent)" }}>Every Minute Matters</span>
              <h2 className="kl-mt-8">Need a Train Ambulance From Varanasi Right Now?</h2>
              <p className="kl-mt-16" style={{ maxWidth: "56ch", marginInline: "auto" }}>Call our 24x7 helpline or message us on WhatsApp — our coordination desk will start planning the transfer immediately.</p>
              <div className="kl-hero-cta-row" style={{ justifyContent: "center" }}>
                <a href={CONTACT.phoneHref} className="kl-btn kl-btn-accent"><IconPhone /> {CONTACT.phoneDisplay}</a>
                <a href={CONTACT.waHref} className="kl-btn kl-btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </div>
            </div>
          </section> */}
        </main>

        {/* ============ STICKY MOBILE CTA ============ */}
        <div className="kl-sticky-cta">
          <a href={CONTACT.phoneHref}><IconPhone /> Call Now</a>
          <a href={CONTACT.waHref} className="kl-wa" target="_blank" rel="noopener noreferrer"><IconWhatsAppGlyph /> WhatsApp</a>
        </div>
      </div>
    </>
  );
}

/* =========================================================================
   EXPORT — no provider needed. React 19 handles metadata natively.
   ========================================================================= */
export default function TrainAmbulanceVaranasi() {
  return <TrainAmbulanceVaranasiPage />;
}