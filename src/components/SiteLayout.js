import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import site from '../data/site.json';
import FloatingContactButtons from './FloatingContactButtons';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import ScrollRestoration from './ScrollRestoration';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';
export function NotFound() { return <section className="container section not-found section-panel"><p className="eyebrow">404 / Page not found</p><h1>Let’s find the right opening.</h1><p>This address doesn’t lead to a page on our website. Explore the collection or contact us for help.</p><div className="actions"><Link className="btn-primary" to="/">Return home</Link><Link className="btn-outline" to="/services">Browse products</Link><Link className="text-link" to="/contact">Contact us</Link></div></section>; }
export default function SiteLayout({children}) { const {pathname} = useLocation(); const landing = pathname.startsWith('/landing/') && !!site.routes[pathname.replace(/\/$/,'')]; return <div className={landing ? 'App is-landing-page' : 'App'}><ScrollRestoration /><a href="#main-content" className="skip-link">Skip to content</a><TopBar /><Header /><main id="main-content" tabIndex={-1}>{children}</main>{landing ? <><FloatingContactButtons placement="side" /><FloatingContactButtons placement="bottom" /></> : <><FloatingWhatsAppButton /><div className="mobile-contact-dock"><FloatingContactButtons placement="bottom" /></div></>}{!landing && <Footer />}</div>; }
