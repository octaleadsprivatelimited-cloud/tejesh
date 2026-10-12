import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services.json';
const empty = {name: '', phone: '', email: '', service: '', message: ''};
export default function ContactForm({compact = false, idPrefix, initialService = ''}) {
  const id = idPrefix || (compact ? 'quick-enquiry' : 'project-enquiry');
  const [data, setData] = useState(() => ({...empty, service: initialService}));
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const pending = useRef(false);
  const endpoint = (process.env.REACT_APP_FORMSPREE_ENDPOINT || '').trim();
  const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
  const change = e => setData({...data, [e.target.name]: e.target.value});
  async function submit(e) {
    e.preventDefault();
    if (pending.current) return;
    if (!configured) { setError('Online enquiries are temporarily unavailable. Please contact our team by phone or WhatsApp.'); setStatus('error'); return; }
    pending.current = true; setStatus('sending'); setError('');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(endpoint, {method: 'POST', headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify(data), signal: controller.signal});
      const result = await response.json().catch(() => { throw new Error('The form service returned an unexpected response. Please call our team to confirm receipt.'); });
      if (!response.ok || result.errors?.length || result.ok === false) {
        const message = result.errors?.map(item => item.message).filter(Boolean).join(' ');
        throw new Error(response.status === 429 ? 'Too many enquiries were submitted. Please wait before trying again or call our team.' : message || 'Your enquiry could not be sent. Please try again or call +91 9949360406.');
      }
      setStatus('success'); setData({...empty, service: initialService});
    } catch (err) {
      setError(err.name === 'AbortError' ? 'The request timed out. Please call to confirm receipt before trying again.' : err instanceof TypeError ? 'Connection failed. Check your internet connection and try again, or call our team.' : err.message);
      setStatus('error');
    } finally { clearTimeout(timeout); pending.current = false; }
  }
  return <form action={configured ? endpoint : undefined} method="POST" onSubmit={submit} className="enquiry-form" aria-label={compact ? 'Quick enquiry' : 'Project enquiry'}>
    <div className="form-grid"><label htmlFor={`${id}-name`}>Full name (required)<input id={`${id}-name`} name="name" autoComplete="name" minLength="2" maxLength="100" required value={data.name} onChange={change} /></label>
    <label htmlFor={`${id}-phone`}>Phone (required)<input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" minLength="7" maxLength="25" pattern="[+0-9 ()-]{7,25}" required value={data.phone} onChange={change} /></label>
    {!compact && <label htmlFor={`${id}-email`}>Email<input id={`${id}-email`} name="email" type="email" autoComplete="email" maxLength="254" value={data.email} onChange={change} /></label>}
    <label htmlFor={`${id}-service`}>Product or service<select id={`${id}-service`} name="service" value={data.service} onChange={change}><option value="">Please select</option>{services.map(s => <option key={s.id}>{s.title}</option>)}<option>Installation</option><option>Maintenance</option><option>Other enquiry</option></select></label></div>
    {!compact && <label htmlFor={`${id}-message`}>Your project<textarea id={`${id}-message`} name="message" rows="5" maxLength="5000" value={data.message} onChange={change} /></label>}
    <p className="form-note">We use Formspree to process your enquiry and respond to you. Read our <Link to="/privacy-policy">privacy policy</Link>.</p>
    <button className="btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry…' : 'Send enquiry'}</button>
    <div role="status" aria-live="polite">{status === 'success' && <p className="form-success">Thank you. Your enquiry was sent successfully. Our team will be in touch.</p>}</div>
    {status === 'error' && <p className="form-error" role="alert">{error} <a href="tel:+919949360406">Call +91 9949360406</a></p>}
  </form>;
}
