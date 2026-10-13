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
  let frame, previous, position = 0;
  const move = time => {
   const element = strip.current;
   if (element && mobile.matches && !reduced.matches && !paused && !element.contains(document.activeElement)) {
    const maximum = element.scrollWidth - element.clientWidth;
    if (maximum > 0) {
     position += previous ? Math.min(time - previous, 50) * .025 : 0;
     if (position > maximum + 30) position = -30;
     element.scrollLeft = Math.max(0, Math.min(position, maximum));
    }
   } else if (element) position = element.scrollLeft;
   previous = time;
   frame = requestAnimationFrame(move);
  };
  frame = requestAnimationFrame(move);
  return () => cancelAnimationFrame(frame);
 }, [paused]);
 return <section className="section-panel company-showcase" aria-label="Company logos"><div ref={strip} className="company-logos" tabIndex={0} role="region" aria-label="Company logos, swipe to explore" onPointerDown={() => setPaused(true)} onKeyDown={() => setPaused(true)}>{companies.map(c=><a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} official website`}><img src={c.src} alt={c.name} width="180" height="90" loading="lazy" decoding="async" /><span>{c.name}</span></a>)}</div><button className="company-scroll-control" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Resume scrolling' : 'Pause scrolling'}</button></section>;
}
