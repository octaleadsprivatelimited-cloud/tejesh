import site from '../data/site.json';
import React, { useEffect, useRef, useState } from 'react';
import { trackInteraction } from '../analytics';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Image from './Image';
import { FaMapMarkerAlt } from 'react-icons/fa';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const sentinel = useRef(null);
  const toggle = useRef(null);
  const header = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => {
      setStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const outside = e => { if (!header.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <><div className="header-sentinel" ref={sentinel} aria-hidden="true" /><header className={`site-header${stuck ? ' is-stuck' : ''}`} ref={header}><div className="container header-row">
    <Link to="/" className="brand" aria-label="Tejesh Profine home"><Image src="/tp-logo-transparent.png" sizes="57px" alt="" loading="eager" /><span><strong>Tejesh Profine</strong><small>Authorized Dealer Koemmerling India</small></span></Link>
    <div className="header-controls"><a className="header-location" href={site.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Find Tejesh Profine on Google Maps" title="Find us on Google Maps"><FaMapMarkerAlt aria-hidden="true" /></a><button type="button" className="menu-toggle" aria-label={open ? 'Close menu' : 'Menu'} ref={toggle} aria-expanded={open} aria-controls="main-navigation" onClick={() => { trackInteraction('menu_toggle', open ? 'close' : 'open'); setOpen(!open); }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}</svg></button></div>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'}>
      {[['/', 'Home'], ['/services', 'Products & services'], ['/portfolio', 'Gallery'], ['/about', 'About'], ['/blog', 'Journal'], ['/contact', 'Get a quote']].map(([to, label]) => <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{label}</NavLink>)}
    </nav>
  </div></header></>;
}
