import React from 'react';
const companies = [
 {name:'My Home Group',src:'/brands/my-home.svg',url:'https://www.myhomeconstructions.com/'},
 {name:'Rajapushpa Properties',src:'/brands/rajapushpa.svg',url:'https://rajapushpa.in/'},
 {name:'Brigade Group',src:'/brands/brigade.webp',url:'https://www.brigadegroup.com/'},
 {name:'Prestige Group',src:'/brands/prestige.svg',url:'https://www.prestigeconstructions.com/'}
];
export default function CompanyShowcase() { return <section className="section-panel company-showcase" aria-label="Company logos"><div className="company-logos" tabIndex={0} role="region" aria-label="Company logos, scroll horizontally to explore">{companies.map(c=><a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} official website`}><img src={c.src} alt={c.name} width="180" height="90" loading="lazy" decoding="async" /><span>{c.name}</span></a>)}</div></section>; }
