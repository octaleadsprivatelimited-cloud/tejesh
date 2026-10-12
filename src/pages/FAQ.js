import React from 'react';
import { PageIntro, EnquiryCTA } from '../components/Editorial';
const questions = [
 ['Which areas do you serve?', 'Contact our Tirupati and Chittoor team with your project location to confirm survey and installation availability.'],
 ['How do I get a quotation?', 'Send your approximate dimensions, location, photographs or drawings and preferred material through the contact page. The final specification and measurements determine the price.'],
 ['Should I choose uPVC or aluminium?', 'The choice depends on dimensions, appearance, glazing, exposure and budget. Our team can help compare suitable systems for your project.'],
 ['How long does installation take?', 'Timing depends on the number of openings, site preparation and the selected system. Confirm the schedule in your project quotation.'],
 ['What warranty applies?', 'Coverage varies by product and component. Request the written warranty for the selected profiles, glass, hardware and installation before ordering.'],
 ['How should I maintain my windows?', 'Use mild soap and a soft cloth, keep tracks clear and follow the manufacturer’s care instructions. Contact us before attempting hardware adjustments.']
];
export default function FAQ() { return <><PageIntro title="Questions, answered."><p>Practical guidance before you choose your windows and doors.</p></PageIntro><section className="container reading section faq-list section-panel">{questions.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section><EnquiryCTA /></>; }
