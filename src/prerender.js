import React, { Suspense } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import SiteLayout, { NotFound } from './components/SiteLayout';
import { HelmetProvider } from 'react-helmet-async';
import ServiceLanding from './pages/ServiceLanding';
import ServicesLanding from './pages/ServicesLanding';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
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
import BlogPostDetail from './pages/BlogPostDetail';
export { getPageSEO, pagePaths, origin } from './seo';
export function renderPage(path) {
  return renderToString(<HelmetProvider><StaticRouter location={path}>
    <SiteLayout><Suspense fallback={null}><Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing/services" element={<ServicesLanding />} />
          <Route path="/landing/:service" element={<ServiceLanding />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/upvc-windows" element={<UPVCWindows />} />
          <Route path="/aluminium-windows" element={<AluminiumWindows />} />
          <Route path="/upvc-doors" element={<UPVCDoors />} />
          <Route path="/aluminium-doors" element={<AluminiumDoors />} />
          <Route path="/sliding-systems" element={<SlidingSystems />} />
          <Route path="/facade-solutions" element={<FacadeSolutions />} />
          <Route path="/residential-projects" element={<ResidentialProjects />} />
          <Route path="/commercial-projects" element={<CommercialProjects />} />
          <Route path="/industrial-projects" element={<IndustrialProjects />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/warranty" element={<Warranty />} />
      <Route path="/blog/:id" element={<BlogPostDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes></Suspense></SiteLayout>
  </StaticRouter></HelmetProvider>);
}
