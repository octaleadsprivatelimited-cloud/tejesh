import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { applyConsent, contactAction, readConsent, saveConsent, trackContact, trackPage, trackingAvailable } from '../analytics';
import { installInteractionTracking, contactPlacement } from '../interactionTracking';
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
      if (action) trackContact(action, contactPlacement(link));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  useEffect(() => { if (ready) trackPage(pathname); }, [pathname, ready, choice]);
  useEffect(() => {
    if (!ready || !choice?.analytics) return;
    return installInteractionTracking();
  }, [pathname, ready, choice]);
  function choose(analytics, advertising) {
    const next = { analytics, advertising }; saveConsent(next); setChoice(next); setOpen(false);
  }
  if (!ready) return null;
  return <>{open ? <section className="cookie-panel" aria-label="Privacy choices"><h2>Privacy choices</h2><p>Allow visit and ad measurement? Form details stay private. <Link to="/privacy-policy">Details</Link></p><div className="actions"><button onClick={() => choose(false, false)}>No thanks</button><button onClick={() => choose(true, false)}>Analytics</button><button onClick={() => choose(true, true)}>Analytics + ads</button></div></section> : <button className="privacy-settings" onClick={() => setOpen(true)}>Privacy choices</button>}</>;
}
