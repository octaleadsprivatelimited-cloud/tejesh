import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { trackContact, trackForm } from '../analytics';

export function enquiryMessage(name, phone, service) {
  return `Hello Tejesh Profine,\nMy name is ${name.trim()}.\nPhone: ${phone.trim()}\nI would like to discuss ${service || 'windows, doors and related services'}.\nPlease help me with the options and a quotation.`;
}
export default function WhatsAppLeadForm({service, idPrefix = 'whatsapp-enquiry'}) {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [opening,setOpening] = useState(false);
  function submit(event) {
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem(`${idPrefix}-name`);
    const phoneInput = form.elements.namedItem(`${idPrefix}-phone`);
    nameInput.setCustomValidity(name.trim().length >= 2 ? '' : 'Please enter your name.');
    phoneInput.setCustomValidity(/^\+?[\d\s()-]+$/.test(phone.trim()) && phone.replace(/\D/g,'').length >= 7 && phone.replace(/\D/g,'').length <= 15 ? '' : 'Please enter a valid phone number.');
    if (!form.reportValidity()) { event.preventDefault(); return; }
    trackForm('form_submit', 'whatsapp');
    trackContact('whatsapp_form_open', 'form');
    setOpening(true);
  }
  return <form data-clarity-mask="true" className="enquiry-form whatsapp-lead-form" aria-label="WhatsApp enquiry" action="https://wa.me/919949360406" method="get" onSubmit={submit}>
    <label htmlFor={`${idPrefix}-name`}>Your name<input id={`${idPrefix}-name`} autoComplete="name" required minLength="2" maxLength="100" value={name} onChange={e=>{e.target.setCustomValidity('');setName(e.target.value);setOpening(false);}} /></label>
    <label htmlFor={`${idPrefix}-phone`}>Phone number<input id={`${idPrefix}-phone`} type="tel" inputMode="tel" autoComplete="tel" required minLength="7" maxLength="25" value={phone} onChange={e=>{e.target.setCustomValidity('');setPhone(e.target.value);setOpening(false);}} /></label>
    <input type="hidden" name="text" value={enquiryMessage(name,phone,service)} />
    <button className="btn-primary" type="submit"><FaWhatsapp aria-hidden="true" /> Continue on WhatsApp</button>
    <p className="form-note">Opens WhatsApp with your details filled in. You choose when to send. <Link to="/privacy-policy">Privacy policy</Link></p>
    <p role="status" className="form-note">{opening ? 'Opening WhatsApp. Review your message there before sending.' : ''}</p>
  </form>;
}
