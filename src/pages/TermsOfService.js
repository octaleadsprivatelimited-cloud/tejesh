import React from 'react';
import { ArticlePage } from '../components/Editorial';
export default function TermsOfService() { return <ArticlePage title="Terms of service" intro="Information about using the Tejesh Profine website and requesting our services." sections={[
 ['Website information', 'This site describes window and door products and provides a way to make enquiries. Descriptions and reference images help explain design choices. Product availability, dimensions, finishes and performance must be confirmed for your project.'],
 ['Quotations and orders', 'Sending an enquiry does not place an order. Prices, specifications, taxes, payment terms, delivery, installation scope and cancellation conditions should be agreed in a written quotation or order before work begins.'],
 ['Warranty and aftercare', 'The written terms supplied for your selected product and installation define warranty coverage. Consult those documents and the manufacturer’s care instructions.'],
 ['Appropriate use', 'Provide accurate enquiry details and use the website lawfully. Do not submit abusive material, misuse the contact form or interfere with the website’s operation.'],
 ['Content and external links', 'Brand names and product imagery belong to their respective owners. External services, including WhatsApp, operate under their own terms. Contact us for permission before reusing website content.'],
 ['Questions and applicable rights', 'Contact info@tejeshprofine.com with website or service questions. These website terms do not replace your written order or limit rights that cannot be excluded under applicable law.']
 ]}><p><a href="mailto:info@tejeshprofine.com?subject=Terms%20enquiry">Contact us about these terms</a></p></ArticlePage>; }
