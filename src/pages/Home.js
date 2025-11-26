import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import { FaShieldAlt, FaTools, FaAward, FaUsers, FaClock, FaLeaf } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Premium Kommerling uPVC Windows",
      description: "We deploy certified Kommerling systems and advanced fabrication to deliver long-lasting performance across Andhra Pradesh, Karnataka, and Telangana."
    },
    {
      icon: FaTools,
      title: "Expert Installation Teams",
      description: "Our certified technicians handle complex uPVC and aluminium installations with precision in metros and tier-2 cities throughout South India."
    },
    {
      icon: FaAward,
      title: "Leading South Indian Provider",
      description: "Established in 2025, Tejesh Profine is recognised for premium window and door solutions across the tri-state region."
    },
    {
      icon: FaUsers,
      title: "Customer-Focused Service",
      description: "We prioritise personalised consultations, transparent project tracking, and dedicated after-sales support for every client."
    },
    {
      icon: FaClock,
      title: "Timely Project Delivery",
      description: "Our logistics network keeps fabrication and installation schedules on track across Andhra Pradesh, Karnataka, and Telangana."
    },
    {
      icon: FaLeaf,
      title: "Energy-Efficient Design",
      description: "Our uPVC and aluminium systems are engineered to reduce energy consumption while withstanding coastal, urban, and high-altitude conditions."
    }
  ];

  const stats = [
    { number: "500+", label: "Kommerling Installations Across Andhra Pradesh" },
    { number: "2025", label: "Serving South India Since" },
    { number: "1000+", label: "Happy Customers in AP, KA & TS" },
    { number: "24/7", label: "Dedicated Support Across the Tri-State Region" }
  ];

  return (
    <div>
      <SEO 
        title="uPVC Windows Chittor | Aluminium Doors Tirupathi | Tejesh Profine - Kommerling Partner"
        description="Best uPVC Windows in Chittor & Aluminium Doors in Tirupathi. Authorized Kommerling partner since 2025. Energy-efficient windows, expert installation, free quotes. Call +91 9949360406 for premium windows & doors in Chittor District."
        keywords="uPVC windows Hyderabad, uPVC windows Bangalore, uPVC windows Visakhapatnam, Kommerling windows Andhra Pradesh, Kommerling windows Telangana, Kommerling windows Karnataka, aluminium doors Hyderabad, aluminium doors Bengaluru, sliding windows Vijayawada, facade solutions Warangal, uPVC doors Mysuru, window installation Tirupati, door installation Secunderabad, Tejesh Profine, Kommerling partner South India, WhatsApp consultation uPVC windows"
        url="https://tejeshprofine.com"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Tejesh Profine",
          "description": "Leading provider of premium uPVC windows and aluminium doors in Chittor District, Tirupathi. Authorized Kommerling partner with expert installation services since 2025.",
          "url": "https://tejeshprofine.com",
          "telephone": "+91-9949360406",
          "email": "info@tejeshprofine.com",
          "image": "https://tejeshprofine.com/og-image.jpg",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tirupathi",
            "addressLocality": "Chittor District",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "517501",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.6288",
            "longitude": "79.4192"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
          },
          "founder": {
            "@type": "Person",
            "name": "V. Venkatesulu",
            "description": "Founder with two-century family legacy in carpentry and modern construction"
          },
          "foundingDate": "2025",
          "areaServed": [
            {
              "@type": "City",
              "name": "Tirupathi"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Chittor District"
            },
            {
              "@type": "State",
              "name": "Andhra Pradesh"
            },
            {
              "@type": "State",
              "name": "Karnataka"
            },
            {
              "@type": "State",
              "name": "Telangana"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Windows and Doors Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "uPVC Windows Installation Chittor",
                  "description": "Premium Kommerling uPVC windows installation for residential and commercial properties in Chittor District",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Tejesh Profine"
                  },
                  "areaServed": "Chittor District"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Aluminium Doors Installation Tirupathi",
                  "description": "High-quality aluminium doors with energy-efficient features for homes and offices in Tirupathi",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Tejesh Profine"
                  },
                  "areaServed": "Tirupathi"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sliding Systems Chittor",
                  "description": "Modern sliding window and door systems for space-saving solutions in Chittor",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Tejesh Profine"
                  },
                  "areaServed": "Chittor District"
                }
              }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tejesh Profine?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of expertise with cutting-edge technology to deliver premium windows and doors that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial complexes, we provide comprehensive solutions for all your window and door needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-72 bg-gray-900 flex items-center justify-center">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(1).jpeg"
                  alt="uPVC Windows Chittor - Kommerling"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">uPVC Windows</h3>
                <p className="mb-4">Energy-efficient, weather-resistant Kommerling uPVC windows for projects across Andhra Pradesh, Karnataka, and Telangana.</p>
                <Link to="/upvc-windows" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-72 bg-gray-900 flex items-center justify-center">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(5).jpeg"
                  alt="Aluminium Windows Tirupathi"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Aluminium Windows</h3>
                <p className="mb-4">Modern, durable aluminium windows engineered for South Indian homes, offices, and high-rises.</p>
                <Link to="/aluminium-windows" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-72 bg-gray-900 flex items-center justify-center">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(6).jpeg"
                  alt="Premium Doors Chittor"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Doors</h3>
                <p className="mb-4">Secure and stylish door systems tailored to residential and commercial properties throughout our tri-state network.</p>
                <Link to="/services" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium uPVC Windows & Aluminium Doors Across Andhra Pradesh, Karnataka & Telangana
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Tejesh Profine</strong> combines a two-century family legacy in carpentry with modern <strong>Kommerling uPVC</strong> expertise to serve homeowners,
                  builders, and architects throughout <strong>Andhra Pradesh, Karnataka, and Telangana</strong>. From our base in Chittoor District, we deliver premium uPVC windows,
                  aluminium doors, sliding systems, and facade solutions engineered for South Indian climates.
                </p>
                <p>
                  Our <strong>energy-efficient uPVC windows</strong> and <strong>high-performance aluminium systems</strong> are installed in residential towers, gated communities,
                  commercial campuses, hospitality projects, and industrial facilities across Tirupati, Hyderabad, Bengaluru, Visakhapatnam, Mysuru, Vijayawada, and beyond.
                  Every installation is executed by certified specialists with rigorous quality checks and comprehensive warranties.
                </p>
                <p>
                  Whether you require <strong>uPVC windows in Andhra Pradesh</strong>, <strong>architectural aluminium doors in Karnataka</strong>, or <strong>bespoke facade solutions in Telangana</strong>,
                  our team manages your project end-to-end—from consultation and design to manufacturing and after-sales support. Reach us at <strong>+91 9949360406</strong> or via WhatsApp for a personalised quote.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Service Hubs:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-gray-600">
                  <div>• Andhra Pradesh – Tirupati, Visakhapatnam, Vijayawada, Guntur</div>
                  <div>• Karnataka – Bengaluru, Mysuru, Hubbali-Dharwad, Mangaluru</div>
                  <div>• Telangana – Hyderabad, Warangal, Karimnagar, Nizamabad</div>
                  <div>• Specialist solutions for coastal, heritage, and high-rise projects</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Tejesh Profine for uPVC Windows in Chittor?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Authorized Kommerling uPVC partner</li>
                  <li>• Two-century family legacy in craftsmanship</li>
                  <li>• Expert installation teams across Andhra Pradesh, Karnataka & Telangana</li>
                  <li>• Energy-efficient solutions tailored to diverse South Indian climates</li>
                  <li>• Comprehensive warranty on all products</li>
                  <li>• 24/7 customer support across our tri-state service region</li>
                </ul>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary-900 mb-3">Get Your Free Quote Today</h3>
                <p className="text-primary-700 mb-4">
                  Ready to upgrade your property anywhere in Andhra Pradesh, Karnataka, or Telangana? Contact us for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+919949360406" className="btn-primary bg-accent-500 text-white hover:bg-accent-600 shadow-md">
                    Call: +91 9949360406
                  </a>
                  <Link to="/contact" className="btn-outline border-primary-600 text-primary-600 hover:bg-primary-50">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your next project. Our experts are ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-50 shadow-lg">
              Get Free Quote
            </Link>
            <a href="tel:+919949360406" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 shadow-lg">
              Call Now: +91 9949360406
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
