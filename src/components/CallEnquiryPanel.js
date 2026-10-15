import React from 'react';
export default function CallEnquiryPanel({ service = 'windows and doors' }) {
  return <><p className="eyebrow">Speak to Tejesh Profine</p><h2>Call about your {service.toLowerCase()} project</h2><p>Discuss your location, approximate dimensions and preferred system with our team. Confirm site coverage and installation availability before quoting.</p><div className="actions"><a className="btn-primary" href="tel:+919949360406">Call Now</a></div><p><a href="tel:+919949360406">+91 9949360406</a></p><p>Monday–Saturday, 9:30 AM–10:30 PM. Sunday closed.</p></>;
}
