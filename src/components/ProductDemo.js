import React, { useEffect, useRef, useState } from 'react';
import Image from './Image';
export default function ProductDemo() {
  const [playing,setPlaying] = useState(false);
  const [error,setError] = useState(false);
  const [blocked,setBlocked] = useState(false);
  const section = useRef(null);
  const video = useRef(null);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setPlaying(true); observer.disconnect(); } }, {rootMargin:'150px'});
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!playing || !video.current) return;
    video.current.muted = true;
    video.current.play()?.catch(() => setBlocked(true));
  }, [playing]);
  const resume = () => { video.current?.play()?.then(()=>setBlocked(false)).catch(()=>setBlocked(true)); };
  return <section ref={section} className="section container split section-panel product-demo"><div><p className="eyebrow">A closer look</p><h2>See the product in motion.</h2><p>The video starts without sound when this section comes into view. Use the player controls to pause, adjust the volume or view full screen.</p><p>Final profiles, glazing and hardware are selected for each project.</p></div><div className="demo-frame">{playing ? <video ref={video} controls autoPlay muted loop playsInline preload="metadata" onError={() => setError(true)} aria-label="Window and door product demonstration"><source src="/gallery/upvc-windows-near-me.mp4" type="video/mp4" /><track kind="captions" /></video> : <><Image src="/gallery/upvc_windows chittor.jpg" alt="Window product video preview" /><button type="button" className="btn-primary" onClick={() => setPlaying(true)}>Play product video</button></>}{blocked && !error && <button type="button" className="btn-primary" onClick={resume}>Play video without sound</button>}{error && <p role="alert">The video could not load. <a href="/gallery/upvc-windows-near-me.mp4">Open the video directly</a>.</p>}</div></section>;
}
