import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const services = [
    { name: 'uPVC Windows', href: '/upvc-windows' },
    { name: 'Aluminium Windows', href: '/aluminium-windows' },
    { name: 'uPVC Doors', href: '/upvc-doors' },
    { name: 'Aluminium Doors', href: '/aluminium-doors' },
    { name: 'Sliding Systems', href: '/sliding-systems' },
    { name: 'Facade Solutions', href: '/facade-solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' }
  ];

  const projects = [
    { name: 'Residential Projects', href: '/residential-projects' },
    { name: 'Commercial Projects', href: '/commercial-projects' },
    { name: 'Industrial Projects', href: '/industrial-projects' },
    { name: 'Portfolio', href: '/portfolio' }
  ];

  const support = [
    { name: 'Installation', href: '/installation' },
    { name: 'Maintenance', href: '/maintenance' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' }
  ];

  const FooterSection = ({ title, items, sectionKey }) => (
    <div className="mb-3 md:mb-8">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left py-2 md:py-0 md:justify-start hover:bg-gray-800 md:hover:bg-transparent rounded md:rounded-none px-2 md:px-0 -mx-2 md:mx-0 transition-colors duration-200 min-h-[44px] md:min-h-auto"
      >
        <h3 className="text-base md:text-lg font-semibold text-white mb-0 md:mb-4">{title}</h3>
        <FaChevronDown 
          className={`md:hidden text-white transition-transform duration-200 text-sm ${
            expandedSections[sectionKey] ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${
        expandedSections[sectionKey] ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
      } md:block md:max-h-none md:opacity-100 md:mt-0`}>
        <ul className="space-y-1.5 md:space-y-2 pb-2 md:pb-0">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base block py-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-6 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 mb-2 md:mb-0 pb-3 md:pb-0 border-b md:border-b-0 border-gray-700">
            <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-6">
              <img 
                src="/tp-logo.png"
                alt="Tejesh Profine Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Established in 2025, Tejesh Profine specializes in premium quality uPVC and Aluminium windows and doors for residential, commercial, and industrial properties.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400 text-sm" />
                <a href="tel:+919949360406" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  +91 9949360406
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400 text-sm" />
                <a href="mailto:info@tejeshprofine.com" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  info@tejeshprofine.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 text-sm" />
                <span className="text-gray-300 text-sm md:text-base">
                  Tirupathi, Chittor District,<br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="border-b md:border-b-0 border-gray-700 pb-2 md:pb-0 mb-2 md:mb-0">
            <FooterSection title="Our Services" items={services} sectionKey="services" />
          </div>

          {/* Company */}
          <div className="border-b md:border-b-0 border-gray-700 pb-2 md:pb-0 mb-2 md:mb-0">
            <FooterSection title="Company" items={company} sectionKey="company" />
          </div>

          {/* Projects & Support - Hidden on Mobile */}
          <div className="hidden md:block md:col-span-2 lg:col-span-1">
            <div className="space-y-1 md:space-y-4">
              <div className="border-b md:border-b-0 border-gray-700 pb-2 md:pb-0 mb-2 md:mb-0">
                <FooterSection title="Projects" items={projects} sectionKey="projects" />
              </div>
              <div className="pb-2 md:pb-0">
                <FooterSection title="Support" items={support} sectionKey="support" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Social Media */}
        <div className="md:hidden border-t border-gray-700 mt-3 pt-3">
          <h3 className="text-base font-semibold mb-3 text-center">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="text-white text-sm" />
              </a>
            ))}
            <a
              href="https://wa.me/919949360406?text=Hi! I'm interested in your uPVC and Aluminium windows and doors services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-white text-sm" />
            </a>
          </div>
        </div>

        {/* Desktop Social Media Only */}
        <div className="hidden md:block border-t border-gray-700 mt-6 md:mt-12 pt-4 md:pt-8">
          <div className="flex justify-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">Connect With Us</h3>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="text-white" />
                  </a>
                ))}
                <a
                  href="https://wa.me/919949360406?text=Hi! I'm interested in your uPVC and Aluminium windows and doors services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4 md:py-6">
        <div className="container-custom px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 space-y-2 md:space-y-0">
            <p>&copy; 2025 Tejesh Profine. All rights reserved.</p>
            <p className="text-center md:text-right">
              Designed and developed by{' '}
              <a
                href="https://www.octaleads.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Octaleads Pvt Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
