import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductDemo from '../components/ProductDemo';
import ContactForm from '../components/ContactForm';
import { ProductList } from './Services';
export default function Home() { return <><HeroSection /><section className="section container section-panel"><div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Designed around the way you live.</h2></div><Link className="text-link" to="/services">All products & services</Link></div><ProductList limit={4} /></section><ProductDemo /><section className="section muted section-panel"><div className="container split"><div><p className="eyebrow">From first sketch to final fit</p><h2>A clear path to your next project.</h2><ol className="process-list"><li>Tell us about your space and preferred style.</li><li>Confirm measurements, materials and a written quotation.</li><li>Agree installation details and aftercare.</li></ol><Link className="text-link" to="/installation">Our installation process</Link></div><div><h2>Start a conversation.</h2><ContactForm compact /></div></div></section></>; }
