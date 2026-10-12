import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import ProductDemo from '../components/ProductDemo';
import services from '../data/services.json';
import { PageIntro, EnquiryCTA } from '../components/Editorial';
export default function Portfolio() {
 const [filter,setFilter] = useState('All');
 const items = services.filter(s => filter === 'All' || (filter === 'Windows' ? s.title.includes('Windows') : filter === 'Doors' ? s.title.includes('Doors') : !/Windows|Doors/.test(s.title)));
 return <><PageIntro eyebrow="The gallery" title="Ideas for your next opening."><p>Explore product and architectural reference imagery from our collection. Images illustrate design possibilities; specifications are agreed for each project.</p></PageIntro><section className="container section section-panel"><div className="filters" aria-label="Filter gallery">{['All','Windows','Doors','Systems'].map(f => <button type="button" key={f} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>)}</div><p role="status">{items.length} collection images</p><div className="gallery-grid">{items.map(s => <figure key={s.id}><Image src={s.image} alt={`${s.title} collection reference`} /><figcaption>{s.title}</figcaption></figure>)}</div>{filter === 'All' && <><h2 className="gallery-heading">More from the collection</h2><div className="gallery-grid">{Array.from({length:20},(_,i) => <figure key={i}><Image src={`/gallery/upvc windows andhra pradesh kommerling (${i+1}).jpeg`} alt={`Koemmerling window and door collection reference ${i+1}`} /><figcaption>Collection reference {String(i+1).padStart(2,'0')}</figcaption></figure>)}</div></>}<div className="inline-links"><Link to="/residential-projects">Residential spaces</Link><Link to="/commercial-projects">Commercial spaces</Link><Link to="/industrial-projects">Industrial spaces</Link></div></section><ProductDemo /><EnquiryCTA /></>;
}
