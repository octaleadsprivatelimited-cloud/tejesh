import site from '../data/site.json';
import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
export default function FloatingContactButtons({placement = 'side'}) { return <nav className={`floating-contacts floating-contacts-${placement}`} aria-label={placement === 'side' ? 'Side contact bar' : 'Bottom contact bar'}>
 <a className="floating-map" href={site.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Find Tejesh Profine on Google Maps"><FaMapMarkerAlt aria-hidden="true" /><span>Maps</span></a>
 <a className="floating-call" href="tel:+919949360406" aria-label="Call Tejesh Profine"><FaPhoneAlt aria-hidden="true" /><span>Call</span></a>
 <a className="floating-chat" href="https://wa.me/919949360406" target="_blank" rel="noopener noreferrer" aria-label="Chat with Tejesh Profine on WhatsApp"><FaWhatsapp aria-hidden="true" /><span>WhatsApp</span></a>
 </nav>; }
