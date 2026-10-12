import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SiteLayout, { NotFound } from './components/SiteLayout';
import SEO from './components/SEO';
import { PageSkeleton } from './components/Editorial';
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const ServiceLanding = lazy(() => import('./pages/ServiceLanding'));
const ServicesLanding = lazy(() => import('./pages/ServicesLanding'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Careers = lazy(() => import('./pages/Careers'));
const UPVCWindows = lazy(() => import('./pages/UPVCWindows'));
const AluminiumWindows = lazy(() => import('./pages/AluminiumWindows'));
const UPVCDoors = lazy(() => import('./pages/UPVCDoors'));
const AluminiumDoors = lazy(() => import('./pages/AluminiumDoors'));
const SlidingSystems = lazy(() => import('./pages/SlidingSystems'));
const FacadeSolutions = lazy(() => import('./pages/FacadeSolutions'));
const ResidentialProjects = lazy(() => import('./pages/ResidentialProjects'));
const CommercialProjects = lazy(() => import('./pages/CommercialProjects'));
const IndustrialProjects = lazy(() => import('./pages/IndustrialProjects'));
const Installation = lazy(() => import('./pages/Installation'));
const Maintenance = lazy(() => import('./pages/Maintenance'));
const Warranty = lazy(() => import('./pages/Warranty'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));

export default function App() {
  return <HelmetProvider><BrowserRouter>
    <SEO />
    <SiteLayout>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
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
        </Routes>
      </Suspense>
    </SiteLayout>
  </BrowserRouter></HelmetProvider>;
}
