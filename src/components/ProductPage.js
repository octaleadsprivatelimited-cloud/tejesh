import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import ContactForm from './ContactForm';
import services from '../data/services.json';
import details from '../data/serviceDetails.json';
import landings from '../data/landingPages.json';
import { PageIntro } from './Editorial';

export default function ProductPage({index}) {
  const service = services[index];
  const detail = details[index];
  const whatsapp = `https://wa.me/919949360406?text=${encodeURIComponent(`Hello Tejesh Profine, I would like a quote for ${service.title}.`)}`;
  return <>
    <PageIntro eyebrow="Products & services" title={service.title}><p>{service.description}</p><Link className="text-link" to="/services">All products & services</Link></PageIntro>
    <section className="container section split section-panel">
      <Image className="product-detail-image" src={service.image} alt={`${service.title} collection reference`} />
      <div><p className="eyebrow">Plan your project</p><h2>{detail.intro}</h2><p>{detail.planning}</p><p>Available dimensions, finishes and performance depend on the selected system. Ask for the specification with your quotation.</p><div className="actions"><a className="btn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Discuss {service.title}</a><Link className="text-link" to="/portfolio">View the gallery</Link></div></div>
    </section>
    <section className="container section section-panel"><p className="eyebrow">Design considerations</p><h2>Explore your {service.title.toLowerCase()} options.</h2><div className="service-options">{detail.options.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="container section split section-panel"><div className="service-questions"><p className="eyebrow">Useful answers</p><h2>About {service.title.toLowerCase()}</h2>{detail.faq.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}<div className="inline-links"><Link to={`/landing/${landings[index].slug}`}>Plan this service</Link><Link to="/installation">Installation</Link><Link to="/maintenance">Maintenance</Link><Link to="/warranty">Warranty</Link></div></div><div><h2 className="service-enquiry-heading">Request a {service.title.toLowerCase()} quote</h2><ContactForm initialService={service.title} idPrefix={`service-${service.id}`} /></div></section>
  </>;
}
