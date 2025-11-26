import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollRestoration from './components/ScrollRestoration';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import UPVCWindows from './pages/UPVCWindows';
import AluminiumWindows from './pages/AluminiumWindows';
import UPVCDoors from './pages/UPVCDoors';
import AluminiumDoors from './pages/AluminiumDoors';
import SlidingSystems from './pages/SlidingSystems';
import FacadeSolutions from './pages/FacadeSolutions';
import ResidentialProjects from './pages/ResidentialProjects';
import CommercialProjects from './pages/CommercialProjects';
import IndustrialProjects from './pages/IndustrialProjects';
import Installation from './pages/Installation';
import Maintenance from './pages/Maintenance';
import Warranty from './pages/Warranty';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollRestoration />
        <div className="App">
          <TopBar />
          <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            
            {/* Service Pages */}
            <Route path="/upvc-windows" element={<UPVCWindows />} />
            <Route path="/aluminium-windows" element={<AluminiumWindows />} />
            <Route path="/upvc-doors" element={<UPVCDoors />} />
            <Route path="/aluminium-doors" element={<AluminiumDoors />} />
            <Route path="/sliding-systems" element={<SlidingSystems />} />
            <Route path="/facade-solutions" element={<FacadeSolutions />} />
            
            {/* Project Pages */}
            <Route path="/residential-projects" element={<ResidentialProjects />} />
            <Route path="/commercial-projects" element={<CommercialProjects />} />
            <Route path="/industrial-projects" element={<IndustrialProjects />} />
            
            {/* Additional Pages */}
            <Route path="/installation" element={<Installation />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/warranty" element={<Warranty />} />
          </Routes>
        </main>
        <FloatingWhatsAppButton />
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;