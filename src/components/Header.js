import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'uPVC Windows', href: '/upvc-windows' },
        { name: 'Aluminium Windows', href: '/aluminium-windows' },
        { name: 'uPVC Doors', href: '/upvc-doors' },
        { name: 'Aluminium Doors', href: '/aluminium-doors' },
        { name: 'Sliding Systems', href: '/sliding-systems' },
        { name: 'Facade Solutions', href: '/facade-solutions' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-secondary-100 relative">
      <div className="container-custom relative">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 overflow-hidden flex items-start">
              <img 
                src="/tp-logo.png"
                alt="Tejesh Profine Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                style={{ marginTop: '-2px' }}
              />
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-900 whitespace-nowrap">
                Tejesh Profine
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-700 bg-primary-50 font-bold'
                      : 'text-gray-900 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.submenu && <FaChevronDown className="text-xs" />}
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-900 hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-900 hover:text-primary-700 hover:bg-primary-50 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50 rounded-b-lg overflow-hidden"
            >
              {/* Backdrop for mobile */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-20 -z-10"
                onClick={() => setIsMenuOpen(false)}
              />
              

              {/* Menu Content */}
              <nav className="p-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="mb-3">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex-1 ${
                            isActive(item.href)
                              ? 'text-gray-900 bg-primary-400 shadow-md font-bold'
                              : 'text-gray-900 hover:text-gray-900 hover:bg-primary-50 font-semibold'
                          }`}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className={`ml-2 p-2 rounded-lg transition-all duration-200 ${
                              isServicesOpen 
                                ? 'text-primary-600 bg-primary-50' 
                                : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'
                            }`}
                          >
                            <FaChevronDown 
                              className={`transition-transform duration-200 text-xs ${isServicesOpen ? 'rotate-180' : ''}`} 
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {item.submenu && isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="bg-gray-50 rounded-lg mt-2 overflow-hidden ml-2"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.03 }}
                              >
                                <Link
                                  to={subItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block px-4 py-2.5 text-xs text-gray-800 hover:text-gray-900 hover:bg-primary-50 transition-colors border-b border-gray-200 last:border-b-0 font-medium"
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.08 }}
                  className="mt-6 p-3 bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg"
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">Get In Touch</h3>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center space-x-2 text-gray-800">
                      <span className="font-medium">📞</span>
                      <a href="tel:+919949360406" className="hover:text-primary-600">
                        +91 9949360406
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-800">
                      <span className="font-medium">📧</span>
                      <a href="mailto:info@tejeshprofine.com" className="hover:text-primary-700">
                        info@tejeshprofine.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-800">
                      <span className="font-medium">📍</span>
                      <span>Tirupathi, Chittor District</span>
                    </div>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
