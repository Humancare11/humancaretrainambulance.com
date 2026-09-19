import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy-loaded Main Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Trainambulance = lazy(() => import("./pages/Trainambulance"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const TrainAmbulanceSection = lazy(() => import("./components/TrainAmbulanceSection"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonial = lazy(() => import("./pages/Testimonial"));
const VideoPlayer = lazy(() => import("./components/VideoPlayer"));
const Herobanner = lazy(() => import("./components/Herobanner"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Privacypolicy = lazy(() => import("./pages/Privacypolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const Success = lazy(() => import("./pages/Success"));
const Failure = lazy(() => import("./pages/Failure"));

// City Pages
const Train_ambulance_varanari = lazy(() => import("./pages/City-Pages/Train_ambulance_varanari"));
const TrainAmbulanceServiceMumbai = lazy(() => import("./pages/City-Pages/TrainAmbulanceServiceMumbai"));
const TrainAmbulanceKolkata = lazy(() => import("./pages/City-Pages/TrainAmbulanceKolkata"));
const Chennai = lazy(() => import("./pages/City-Pages/Chennai"));
const Delhi = lazy(() => import("./pages/City-Pages/Delhi"));
const Bengaluru = lazy(() => import("./pages/City-Pages/Bengaluru"));
const Hyderabad = lazy(() => import("./pages/City-Pages/Hyderabad"));
const Guwahati = lazy(() => import("./pages/City-Pages/Guwahati"));
const Pune = lazy(() => import("./pages/City-Pages/Pune"));
const Jaipur = lazy(() => import("./pages/City-Pages/Jaipur"));
const Ahmedabad = lazy(() => import("./pages/City-Pages/Ahmedabad"));
const Lucknow = lazy(() => import("./pages/City-Pages/Lucknow"));
const Patna = lazy(() => import("./pages/City-Pages/Patna"));
const Bhopal = lazy(() => import("./pages/City-Pages/Bhopal"));
const Indore = lazy(() => import("./pages/City-Pages/Indore"));
const Nagpur = lazy(() => import("./pages/City-Pages/Nagpur"));
const Ranchi = lazy(() => import("./pages/City-Pages/Ranchi"));
const Jamshedpur = lazy(() => import("./pages/City-Pages/Jamshedpur"));
const Siliguri = lazy(() => import("./pages/City-Pages/Siliguri"));

// Google ADS
const LandingPage = lazy(() => import("./ads/LandingPage"));
const Core = lazy(() => import("./ads/Core"));
const Cost = lazy(() => import("./ads/Cost"));
const Location = lazy(() => import("./ads/Location"));

// Blogs
const BlogCard = lazy(() => import("./blogs/BlogCard"));
const Blog1 = lazy(() => import("./blogs/Blog1"));
const Blog2 = lazy(() => import("./blogs/Blog2"));
const Blog3 = lazy(() => import("./blogs/Blog3"));
const Blog4 = lazy(() => import("./blogs/Blog4"));
const Blog5 = lazy(() => import("./blogs/Blog5"));
const KolkataToVellore = lazy(() => import("./blogs/KolkatatoVellore"));
const TrainAmbulanceServicesIndia = lazy(() => import("./blogs/TrainAmbulanceServicesIndia"));
const WhatIsaTrainAmbulance = lazy(() => import("./blogs/WhatIsaTrainAmbulance"));
const HowDoesTrainAmbulanceWork = lazy(() => import("./blogs/HowDoesTrainAmbulanceWork"));
const TrainAmbulanceEligibility = lazy(() => import("./blogs/TrainAmbulanceEligibility"));
const TrainAmbulanceSafety = lazy(() => import("./blogs/TrainAmbulancesafety"));
const TrainAmbulanceBedRiddenPatients = lazy(() => import("./blogs/TrainAmbulanceBedRiddenPatients"));
const TrainAmbulanceVentilatorSupport = lazy(() => import("./blogs/TrainAmbulanceVentilatorSupport"));

// Loading fallback component
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
      width: "100%",
    }}
  >
    <div
      style={{
        width: "48px",
        height: "48px",
        border: "4px solid #e2e8f0",
        borderTop: "4px solid #2563eb",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// ✅ ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional for smooth scrolling
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/AboutSection" element={<AboutSection />} />

          <Route
            path="/TrainAmbulanceSection"
            element={<TrainAmbulanceSection />}
          />
          <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
          <Route path="/TestimonialsSection" element={<TestimonialsSection />} />
          <Route path="/ContactSection" element={<ContactSection />} />
          <Route path="/Trainambulance" element={<Trainambulance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/VideoPlayer" element={<VideoPlayer />} />
          <Route path="/Herobanner" element={<Herobanner />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="*" element={<NotFound />} />

          {/* City Pages */}
          <Route
            path="/train-ambulance-services-in-varanasi"
            element={<Train_ambulance_varanari />}
          />
          <Route
            path="/train-ambulance-services-in-mumbai"
            element={<TrainAmbulanceServiceMumbai />}
          />
          <Route
            path="/train-ambulance-services-in-kolkata"
            element={<TrainAmbulanceKolkata />}
          />
          <Route
            path="/train-ambulance-services-in-chennai"
            element={<Chennai />}
          />
          <Route path="/train-ambulance-services-in-delhi" element={<Delhi />} />
          <Route
            path="/train-ambulance-services-in-bengaluru"
            element={<Bengaluru />}
          />
          <Route
            path="/train-ambulance-services-in-hyderabad"
            element={<Hyderabad />}
          />
          <Route
            path="/train-ambulance-services-in-guwahati"
            element={<Guwahati />}
          />
          <Route
            path="/train-ambulance-services-in-pune"
            element={<Pune />}
          />
          <Route
            path="/train-ambulance-services-in-jaipur"
            element={<Jaipur />}
          />
          <Route
            path="/train-ambulance-services-in-ahmedabad"
            element={<Ahmedabad />}
          />
          <Route
            path="/train-ambulance-services-in-lucknow"
            element={<Lucknow />}
          />
          <Route
            path="/train-ambulance-services-in-patna"
            element={<Patna />}
          />
          <Route
            path="/train-ambulance-services-in-bhopal"
            element={<Bhopal />}
          />
          <Route
            path="/train-ambulance-services-in-indore"
            element={<Indore />}
          />
          <Route
            path="/train-ambulance-services-in-nagpur"
            element={<Nagpur />}
          />
          <Route
            path="/train-ambulance-services-in-ranchi"
            element={<Ranchi />}
          />
          <Route
            path="/train-ambulance-services-in-jamshedpur"
            element={<Jamshedpur />}
          />
          <Route
            path="/train-ambulance-services-in-siliguri"
            element={<Siliguri />}
          />

          {/* ----------------Ads--------------- */}
          <Route path="/train-ambulance-services" element={<LandingPage />} />
          <Route path="/rail-ambulance-services" element={<Core />} />
          <Route path="/train-ambulance-cost" element={<Cost />} />
          <Route path="/pan-india" element={<Location />} />

          {/* -----------blogs------------------- */}
          <Route path="/blogs" element={<BlogCard />} />

          {/* Blog routes (supporting both with and without /blogs/ prefix) */}
          <Route
            path="/blogs/what-makes-humancare-the-best-rail-ambulance-service-in-india"
            element={<Blog1 />}
          />
          <Route
            path="/what-makes-humancare-the-best-rail-ambulance-service-in-india"
            element={<Blog1 />}
          />

          <Route
            path="/blogs/train-ambulance-charges-vs-air-ambulance-cost"
            element={<Blog2 />}
          />
          <Route
            path="/train-ambulance-charges-vs-air-ambulance-cost"
            element={<Blog2 />}
          />

          <Route
            path="/blogs/irctc-train-ambulance-booking-guide"
            element={<Blog3 />}
          />
          <Route
            path="/irctc-train-ambulance-booking-guide"
            element={<Blog3 />}
          />

          <Route
            path="/blogs/inside-a-train-ambulance"
            element={<Blog4 />}
          />
          <Route
            path="/inside-a-train-ambulance"
            element={<Blog4 />}
          />

          <Route
            path="/blogs/train-ambulance-service-in-varanasi"
            element={<Blog5 />}
          />
          <Route
            path="/train-ambulance-service-in-varanasi"
            element={<Blog5 />}
          />

          <Route
            path="/blogs/train-ambulance-from-kolkata-to-vellore"
            element={<KolkataToVellore />}
          />
          <Route
            path="/train-ambulance-from-kolkata-to-vellore"
            element={<KolkataToVellore />}
          />

          <Route
            path="/blogs/train-ambulance-service-in-india"
            element={<TrainAmbulanceServicesIndia />}
          />
          <Route
            path="/train-ambulance-service-in-india"
            element={<TrainAmbulanceServicesIndia />}
          />

          <Route
            path="/blogs/what-is-train-ambulance"
            element={<WhatIsaTrainAmbulance />}
          />
          <Route
            path="/what-is-train-ambulance"
            element={<WhatIsaTrainAmbulance />}
          />

          <Route
            path="/blogs/train-ambulance-process"
            element={<HowDoesTrainAmbulanceWork />}
          />
          <Route
            path="/train-ambulance-process"
            element={<HowDoesTrainAmbulanceWork />}
          />

          <Route
            path="/blogs/train-ambulance-eligibility"
            element={<TrainAmbulanceEligibility />}
          />
          <Route
            path="/train-ambulance-eligibility"
            element={<TrainAmbulanceEligibility />}
          />

          <Route
            path="/blogs/train-ambulance-safety"
            element={<TrainAmbulanceSafety />}
          />
          <Route
            path="/train-ambulance-safety"
            element={<TrainAmbulanceSafety />}
          />

          <Route
            path="/blogs/train-ambulance-for-bedridden-patients"
            element={<TrainAmbulanceBedRiddenPatients />}
          />
          <Route
            path="/blogs/train-ambulance-for-bedridden-patients"
            element={<TrainAmbulanceBedRiddenPatients />}
          />

          <Route
            path="/blogs/train-ambulance-ventilator-support"
            element={<TrainAmbulanceVentilatorSupport />}
          />

        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
