// Read-only list of the hand-coded blog pages (src/blogs/*.jsx) so they are
// visible in the admin dashboard. They are edited in code, not in the admin.
// Keep in sync with the `blogPosts` array in src/blogs/BlogCard.jsx.
import img1 from "../assets/Blogs/what-makes-humancare-the-best-rail-ambulance-service-in-india.webp";
import img2 from "../assets/Blogs/train-ambulance-charges-vs-air-ambulance-cost.webp";
import img3 from "../assets/Blogs/irctc-train-ambulance-booking-guide.webp";
import img4 from "../assets/Blogs/inside-a-train-ambulance-services.webp";
import img5 from "../assets/Blogs/train-ambulance-service-in-varanasi.webp";
import img6 from "../assets/Blogs/humancare-train-ambulance-from-kolkata-to-vellore.webp";
import img7 from "../assets/Blogs/rail-ambulance.webp";
import img8 from "../assets/Blogs/what-is-a-train-ambulance.webp";
import img9 from "../assets/Blogs/how-does-a-train-ambulance-work.webp";
import img10 from "../assets/Blogs/train-ambulance-eligibility.webp";
import img11 from "../assets/Blogs/rail-ambulance-service.webp";
import img12 from "../assets/Blogs/mumbai-train-ambulance.webp";
import img13 from "../assets/Blogs/vellore-train-ambulance.webp";

const staticBlogs = [
  { title: "What Makes Humancare the Best Rail Ambulance Service in India", slug: "what-makes-humancare-the-best-rail-ambulance-service-in-india", date: "2025-09-01", image: img1 },
  { title: "Train Ambulance Charges vs Air Ambulance Cost: Which Is More Budget-Friendly?", slug: "train-ambulance-charges-vs-air-ambulance-cost", date: "2025-10-22", image: img2 },
  { title: "IRCTC Train Ambulance Booking Guide: Cost, Process, and Facilities", slug: "irctc-train-ambulance-booking-guide", date: "2025-11-06", image: img3 },
  { title: "Inside a Train Ambulance: How ICU Care Travels Across India on Rails", slug: "inside-a-train-ambulance", date: "2026-01-12", image: img4 },
  { title: "Train Ambulance Service in Varanasi: Complete Guide for Long-Distance Patient Transfer", slug: "train-ambulance-service-in-varanasi", date: "2026-08-03", image: img5 },
  { title: "Train Ambulance from Kolkata to Vellore: Cost, Booking Process & ICU Patient Transfer", slug: "train-ambulance-from-kolkata-to-vellore", date: "2026-08-25", image: img6 },
  { title: "Train Ambulance Services in India: Complete Guide to Long-Distance Patient Transfers", slug: "train-ambulance-service-in-india", date: "2026-08-31", image: img7 },
  { title: "What Is a Train Ambulance? How Medical Train Transfers Work in India", slug: "what-is-train-ambulance", date: "2026-09-02", image: img8 },
  { title: "How Does a Train Ambulance Work? From Hospital Pickup to Final Handover", slug: "train-ambulance-process", date: "2026-09-04", image: img9 },
  { title: "Who Can Travel by Train Ambulance? A Guide for Patients and Families in India", slug: "train-ambulance-eligibility", date: "2026-09-08", image: img10 },
  { title: "Is Train Ambulance Safe for Patients? What Families Should Know Before a Medical Rail Transfer", slug: "train-ambulance-safety", date: "2026-09-11", image: img11 },
  { title: "Train Ambulance for Bedridden Patients: A Practical Guide to Long-Distance Medical Travel", slug: "train-ambulance-for-bedridden-patients", date: "2026-09-14", image: img12 },
  { title: "Train Ambulance with Ventilator Support: A Guide to Safe Medical Rail Transfers in India", slug: "train-ambulance-ventilator-support", date: "2026-09-18", image: img13 },
].sort((a, b) => b.date.localeCompare(a.date));

export default staticBlogs;
