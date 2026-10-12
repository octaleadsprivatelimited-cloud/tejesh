import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Image from './Image';
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
    <Link to="/" className="brand" aria-label="Tejesh Profine home"><Image src="/tp-logo-transparent.png" sizes="57px" alt="" loading="eager" /><span><strong>Tejesh Profine</strong><small>By Koemmerling India</small></span></Link>
    <button type="button" className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'}>
      {[['/', 'Home'], ['/services', 'Products & services'], ['/portfolio', 'Gallery'], ['/about', 'About'], ['/blog', 'Journal'], ['/contact', 'Get a quote']].map(([to, label]) => <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{label}</NavLink>)}
    </nav>
  </div></header></>;
}
