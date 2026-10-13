import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
const groups = [
 ['Products', [['uPVC windows','/upvc-windows'],['Aluminium windows','/aluminium-windows'],['uPVC doors','/upvc-doors'],['Aluminium doors','/aluminium-doors'],['Sliding systems','/sliding-systems'],['Facades','/facade-solutions']]],
 ['Explore', [['About us','/about'],['Gallery','/portfolio'],['Journal','/blog'],['Pricing guide','/pricing'],['Careers','/careers']]],
 ['Support', [['Installation','/installation'],['Maintenance','/maintenance'],['Warranty','/warranty'],['FAQs','/faq'],['Contact','/contact']]]
];
function FooterGroup({title, links}) {
 const [expanded, setExpanded] = useState(false);
 const id = `footer-${title.toLowerCase()}`;
 return <nav className="footer-group" aria-label={`Footer ${title}`}>
  <h2 className="footer-desktop-heading">{title}</h2>
  <button className="footer-toggle" type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)}>{title}<span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
  <div id={id} className={`footer-group-links${expanded ? ' is-expanded' : ''}`}>{links.map(([label,to]) => <Link key={to} to={to}>{label}</Link>)}</div>
 </nav>;
}
export default function Footer() { return <footer className="site-footer"><div className="container footer-grid"><div><Link to="/" className="footer-brand" aria-label="Tejesh Profine home"><Image src="/tp-logo-transparent.png" alt="" sizes="48px" /><span><strong>Tejesh Profine</strong><small>By Koemmerling India</small></span></Link><p>uPVC and aluminium windows, doors and sliding systems for your space.</p><a href="tel:+919949360406">+91 9949360406</a><a href="mailto:sriadithayinteiors@gmail.com">sriadithayinteiors@gmail.com</a></div>{groups.map(([title,links]) => <FooterGroup key={title} title={title} links={links} />)}</div><div className="container footer-bottom"><span>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Tejesh Profine. All rights reserved.</span><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms-of-service">Terms of service</Link><a href="https://www.octaleads.com/" target="_blank" rel="noopener noreferrer">Website by Octaleads</a></div></footer>; }
