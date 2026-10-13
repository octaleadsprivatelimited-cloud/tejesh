import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { applyConsent, contactAction, readConsent, saveConsent, trackContact, trackPage, trackingAvailable } from '../analytics';
export default function Analytics() {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!trackingAvailable()) return;
    const stored = readConsent(); applyConsent(stored); setChoice(stored); setReady(true); setOpen(!stored);
    const onClick = event => {
      const link = event.target.closest?.('a[href]');
      const action = link && contactAction(link.href);
      if (action) trackContact(action);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  useEffect(() => { if (ready) trackPage(pathname); }, [pathname, ready, choice]);
  function choose(analytics, advertising) {
    const next = { analytics, advertising }; saveConsent(next); setChoice(next); setOpen(false);
  }
  if (!ready) return null;
  return <>{open ? <section className="cookie-panel" aria-label="Privacy choices"><h2>Your privacy choices</h2><p>With your permission, Google Analytics and Microsoft Clarity help us understand visits and improve the site. Advertising measurement helps us understand which ads lead to enquiries. Form details are excluded from tracking. <Link to="/privacy-policy">Privacy policy</Link></p><div className="actions"><button onClick={() => choose(false, false)}>Necessary only</button><button onClick={() => choose(true, false)}>Allow analytics</button><button onClick={() => choose(true, true)}>Allow analytics & ads</button></div></section> : <button className="privacy-settings" onClick={() => setOpen(true)}>Privacy choices</button>}</>;
}
