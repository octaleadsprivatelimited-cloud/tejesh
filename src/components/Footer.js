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
    <div className="mb-8">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left md:justify-start"
      >
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <FaChevronDown 
          className={`md:hidden text-white transition-transform ${
            expandedSections[sectionKey] ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div className={`${expandedSections[sectionKey] ? 'block' : 'hidden'} md:block`}>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
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
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/tp-logo.png"
                alt="Tejesh Profine Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Established in 2016, Tejesh Profine specializes in premium quality uPVC and Aluminium windows and doors for residential, commercial, and industrial properties.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400" />
                <a href="tel:+919949360406" className="text-gray-300 hover:text-white transition-colors">
                  +91 9949360406
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400" />
                <a href="mailto:info@tejeshprofine.com" className="text-gray-300 hover:text-white transition-colors">
                  info@tejeshprofine.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1" />
                <span className="text-gray-300">
                  Tirupathi, Chittor District,<br />
                  Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <FooterSection title="Our Services" items={services} sectionKey="services" />

          {/* Company */}
          <FooterSection title="Company" items={company} sectionKey="company" />

          {/* Projects & Support */}
          <div className="md:col-span-2 lg:col-span-1">
            <FooterSection title="Projects" items={projects} sectionKey="projects" />
            <FooterSection title="Support" items={support} sectionKey="support" />
          </div>
        </div>

        {/* Social Media & WhatsApp */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="hidden md:block md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
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

            <div className="text-center md:text-right w-full md:w-auto mt-6 md:mt-0">
              <p className="text-gray-400 mb-2">Need immediate assistance?</p>
              <a
                href="https://wa.me/919949360406?text=Hi! I need immediate assistance with your services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <FaWhatsapp />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Tejesh Profine. All rights reserved.</p>
            <p>
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
