import React from 'react';
import { Link, useParams } from 'react-router-dom';
import landings from '../data/landingPages.json';
import Image from '../components/Image';
import CallEnquiryPanel from '../components/CallEnquiryPanel';
import ProductDemo from '../components/ProductDemo';
import CompanyShowcase from '../components/CompanyShowcase';
import { NotFound } from '../components/SiteLayout';
import { LandingProcess, LandingLinks, LandingContact } from '../components/LandingSections';
export default function ServiceLanding() {
 const {service:slug} = useParams(); const service = landings.find(s=>s.slug===slug);
 if (!service) return <NotFound />;
 return <>
  <section className="section-panel landing-hero"><div className="landing-story"><p className="eyebrow">{service.title} · Project enquiries</p><h1>{service.heading}</h1><p className="landing-intro">{service.intro}</p><LandingContact title={service.title} /><Image className="landing-image" src={service.image} alt={`${service.title} collection reference`} loading="eager" fetchPriority="high" /></div><aside className="landing-quote"><CallEnquiryPanel service={service.title} /></aside></section>
 <CompanyShowcase /><ProductDemo />
  <section className="section-panel"><p className="eyebrow">Your choices</p><h2>Consider the details that matter.</h2><div className="service-options">{service.options.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="section-panel split"><div><p className="eyebrow">Before we begin</p><h2>Make your enquiry useful.</h2><p>{service.planning}</p><Link className="text-link" to={`/${slug}`}>Read the full {service.title.toLowerCase()} guide</Link></div><div className="service-questions"><h2>Your questions</h2>{service.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
  <section className="section-panel"><h2>Planning in Tirupati, Bengaluru or Hyderabad?</h2><p>We welcome project enquiries from Tirupati, Chittoor, Bengaluru (Bangalore) and Hyderabad. Call with your project location so we can confirm site coverage, installation availability and any travel requirements before quoting.</p><LandingContact title={service.title} /></section><LandingProcess /><section className="section-panel"><h2>Planning more than one service?</h2><p>Coordinate the windows, doors and support your project needs.</p><Link className="text-link" to="/landing/services">Explore the complete service range</Link><LandingLinks exclude={slug} /></section>
 </>;
}
