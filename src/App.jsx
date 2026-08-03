import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
const Home = lazy(() => import('./pages/Home'));
import About from './pages/About';
import Trainambulance from './pages/Trainambulance';
import AboutSection from './components/AboutSection';
import TrainAmbulanceSection from './components/TrainAmbulanceSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';
import VideoPlayer from './components/VideoPlayer';
import Herobanner from './components/Herobanner';
import TermsAndConditions from './pages/TermsAndConditions';
import Privacypolicy from './pages/Privacypolicy';
import NotFound from './pages/NotFound';
import PaymentPage from './pages/PaymentPage';
import Success from './pages/Success';
import Failure from './pages/Failure';
import Train_ambulance_varanari from './pages/Train_ambulance_varanari';

// ADS
import LandingPage from './ads/LandingPage';
import Core from './ads/Core';
import Cost from './ads/Cost';
import Location from './ads/Location';

// blogs
import BlogCard from "./blogs/BlogCard";
import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";
import Blog3 from "./blogs/Blog3";
import Blog4 from "./blogs/Blog4";


// ✅ ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // optional for smooth scrolling
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />TrainAmbulanceCities
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/AboutSection" element={<AboutSection />} />

        <Route path="/TrainAmbulanceSection" element={<TrainAmbulanceSection />} />
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
        <Route path="/train-ambulance-varanasi" element={<Train_ambulance_varanari />} />

        {/* ----------------Ads--------------- */}
        <Route path="/train-ambulance-services" element={<LandingPage />} />
        <Route path="/rail-ambulance-services" element={<Core />} />
        <Route path="/train-ambulance-cost" element={<Cost />} />
        <Route path="/pan-india" element={<Location />} />


        {/* -----------blogs------------------- */}
        <Route path="/blogs" element={<BlogCard />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
