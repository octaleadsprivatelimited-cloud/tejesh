import React, { useEffect, useRef, useState } from 'react';
const companies = [
 {name:'My Home Group',src:'/brands/my-home.svg',url:'https://www.myhomeconstructions.com/'},
 {name:'Rajapushpa Properties',src:'/brands/rajapushpa.svg',url:'https://rajapushpa.in/'},
 {name:'Brigade Group',src:'/brands/brigade.webp',url:'https://www.brigadegroup.com/'},
 {name:'Prestige Group',src:'/brands/prestige.svg',url:'https://www.prestigeconstructions.com/'}
];
export default function CompanyShowcase() {
 const strip = useRef(null);
 const [paused, setPaused] = useState(false);
 useEffect(() => {
  if (typeof window.matchMedia !== 'function') return;
  const mobile = window.matchMedia('(max-width:900px)');
  const reduced = window.matchMedia('(prefers-reduced-motion:reduce)');
  let frame, previous, position = strip.current?.scrollLeft || 0, inView = true;
  const running = () => mobile.matches && !reduced.matches && !paused && inView && !document.hidden;
  const move = time => {
   const element = strip.current;
   if (element && running()) {
    const maximum = element.scrollWidth - element.clientWidth;
    if (maximum > 0) {
     position += previous ? Math.min(time - previous, 50) * .025 : 0;
     if (position > maximum + 30) position = -30;
     element.scrollLeft = Math.max(0, Math.min(position, maximum));
    }
   }
   previous = time;
   frame = requestAnimationFrame(move);
  };
  const sync = () => {
   cancelAnimationFrame(frame);
   previous = undefined;
   if (running()) frame = requestAnimationFrame(move);
  };
  const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); }) : null;
  observer?.observe(strip.current);
  mobile.addEventListener('change', sync);
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  sync();
  return () => {
   cancelAnimationFrame(frame); observer?.disconnect();
   mobile.removeEventListener('change', sync); reduced.removeEventListener('change', sync);
   document.removeEventListener('visibilitychange', sync);
  };
 }, [paused]);
 return <section className="section-panel company-showcase" aria-label="Company logos"><div ref={strip} className="company-logos" tabIndex={0} role="region" aria-label="Company logos, swipe to explore" onPointerDown={() => setPaused(true)} onFocusCapture={() => setPaused(true)} onKeyDown={() => setPaused(true)}>{companies.map(c=><a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} official website`}><img src={c.src} alt={c.name} width="180" height="90" loading="lazy" decoding="async" /><span>{c.name}</span></a>)}</div><button className="company-scroll-control" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Resume scrolling' : 'Pause scrolling'}</button></section>;
}
