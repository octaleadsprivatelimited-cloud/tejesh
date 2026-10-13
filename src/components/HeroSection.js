import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

export default function HeroSection() {
  return <section className="hero">
    <Image className="hero-background" src="/gallery/Referenzobjekt-Neubau-Einfamilienhaus-bei-Daemmerung-Australien.png" alt="" sizes="100vw" loading="eager" fetchPriority="high" />
    <div className="container hero-content">
      <p className="eyebrow">Windows. Doors. Thoughtful spaces.</p>
      <h1 className="sr-only">uPVC and aluminium windows and doors in Tirupati and Chittoor</h1>
      <p className="hero-copy">uPVC and aluminium windows &amp; doors in Tirupati and Chittoor. Considered designs, carefully fitted to your home.</p>
      <div className="actions"><Link className="btn-primary" to="/services">Explore our collection</Link><Link className="text-link" to="/contact">Discuss your project</Link></div>
      <p className="hero-footnote">Koemmerling profiles · Custom dimensions · Installation support</p>
    </div>
  </section>;
}
