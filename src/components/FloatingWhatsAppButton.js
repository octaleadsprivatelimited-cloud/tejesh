import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/919949360406?text=Hi!%20I'm%20interested%20in%20your%20uPVC%20and%20Aluminium%20windows%20and%20doors%20services."
    className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/40 transition-all duration-200 w-16 h-16"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp size={28} />
  </a>
);

export default FloatingWhatsAppButton;

