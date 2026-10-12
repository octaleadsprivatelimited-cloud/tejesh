import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import posts from '../data/blogPosts';
import { PageIntro, EnquiryCTA } from '../components/Editorial';
export default function Blog() { return <><PageIntro eyebrow="The journal" title="Good spaces begin with good questions."><p>Guides to materials, design choices and caring for your windows and doors.</p></PageIntro><section className="container section journal-list section-panel">{posts.map(p => <article key={p.id}><Image src={p.image} alt={p.title} /><div><p className="eyebrow">{p.category} · {p.readTime}</p><h2><Link to={`/blog/${p.id}`}>{p.title}</Link></h2><p>{p.excerpt}</p><Link className="text-link" to={`/blog/${p.id}`}>Read the guide</Link></div></article>)}</section><EnquiryCTA /></>; }
