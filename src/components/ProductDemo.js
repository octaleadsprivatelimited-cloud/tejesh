import React, { useEffect, useRef, useState } from 'react';
import Image from './Image';
export default function ProductDemo() {
  const [playing,setPlaying] = useState(false);
  const [error,setError] = useState(false);
  const [blocked,setBlocked] = useState(false);
  const [mobile,setMobile] = useState(true);
  const [needsSound,setNeedsSound] = useState(false);
  const section = useRef(null);
  const video = useRef(null);
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const query = window.matchMedia('(max-width: 760px)');
    const update = () => { setMobile(query.matches); setNeedsSound(false); };
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setPlaying(true); observer.disconnect(); } }, {rootMargin:'150px'});
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!playing || !video.current) return;
    let cancelled = false;
    const player = video.current;
    player.muted = mobile;
    player.play()?.catch(() => {
      if (cancelled) return;
      if (mobile) { setBlocked(true); return; }
      // Browsers can block audible autoplay. Keep the demo moving and offer sound on tap.
      setNeedsSound(true);
      player.muted = true;
      player.play()?.catch(() => { if (!cancelled) setBlocked(true); });
    });
    return () => { cancelled = true; };
  }, [playing,mobile]);
  const resume = () => {
    const player = video.current;
    if (!player) return;
    player.muted = mobile;
    player.play()?.then(() => {setBlocked(false);setNeedsSound(false);}).catch(() => setBlocked(true));
  };
  return <section ref={section} className="section container split section-panel product-demo"><div><p className="eyebrow">A closer look</p><h2>See the product in motion.</h2><p>On mobile, the video starts without sound. On desktop, sound plays when allowed by your browser; select Play with sound if prompted. Use the controls to pause, adjust the volume or view full screen.</p><p>Final profiles, glazing and hardware are selected for each project.</p></div><div className="demo-frame">{playing ? <video ref={video} controls autoPlay muted={mobile} loop playsInline preload="metadata" onError={() => setError(true)} aria-label="Window and door product demonstration"><source src="/gallery/upvc-windows-near-me.mp4" type="video/mp4" /><track kind="captions" /></video> : <><Image src="/gallery/upvc_windows chittor.jpg" alt="Window product video preview" /><button type="button" className="btn-primary" onClick={() => setPlaying(true)}>Play product video</button></>}{(blocked || needsSound) && !error && <button type="button" className="btn-primary" onClick={resume}>{mobile ? 'Play video without sound' : 'Play with sound'}</button>}{error && <p role="alert">The video could not load. <a href="/gallery/upvc-windows-near-me.mp4">Open the video directly</a>.</p>}</div></section>;
}
