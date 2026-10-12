import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import services from '../data/services.json';
import { PageIntro, EnquiryCTA } from '../components/Editorial';
export const servicePaths = ['/upvc-windows','/aluminium-windows','/upvc-doors','/aluminium-doors','/sliding-systems','/facade-solutions'];
export function ProductList({limit = 6}) { return <div className="product-list">{services.slice(0,limit).map((s,i) => <article className="product-row" key={s.id}><Link to={servicePaths[i]} tabIndex={-1} aria-hidden="true"><Image src={s.image} alt="" /></Link><div><p className="eyebrow">0{s.id} / Collection</p><h3><Link to={servicePaths[i]}>{s.title}</Link></h3><p>{s.description}</p><Link className="text-link" to={servicePaths[i]}>Explore {s.title}</Link></div></article>)}</div>; }
export default function Services() { return <><PageIntro eyebrow="Products & services" title="A considered collection."><p>Explore materials, opening styles and installation support for your project.</p></PageIntro><section className="container section section-panel"><ProductList /><div className="inline-links"><Link to="/landing/services">Plan your complete project</Link><Link to="/installation">Installation</Link><Link to="/maintenance">Maintenance</Link><Link to="/warranty">Warranty information</Link></div></section><EnquiryCTA /></>; }
