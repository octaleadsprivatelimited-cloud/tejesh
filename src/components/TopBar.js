import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const TopBar = () => {
  const phoneNumber = "+91 9949360406";
  const whatsappNumber = "919949360406";
  const whatsappMessage = "Hi! I'm interested in your uPVC and Aluminium windows and doors services.";

  return (
    <div className="bg-gradient-to-r from-secondary-800 to-secondary-700 text-white py-2 px-4">
      <div className="container-custom">
        <div className="flex flex-row justify-between items-center text-sm">
          {/* Mobile & WhatsApp */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <FaPhone className="text-xs" />
              <a href={`tel:${phoneNumber}`} className="hover:text-primary-200 transition-colors text-xs sm:text-sm">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <FaWhatsapp className="text-xs" />
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors text-xs sm:text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Call Now Button - Desktop Only */}
          <div className="hidden md:block">
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent-600 transition-colors shadow-md"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
