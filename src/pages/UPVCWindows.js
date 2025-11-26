import React from 'react';
import { FaCheck, FaShieldAlt, FaLeaf, FaThermometerHalf, FaVolumeMute, FaEye, FaTools } from 'react-icons/fa';
import SEO from '../components/SEO';

const UPVCWindows = () => {
  const features = [
    {
      icon: FaLeaf,
      title: "Energy Efficient",
      description: "Superior thermal insulation reduces energy costs by up to 30%"
    },
    {
      icon: FaShieldAlt,
      title: "Weather Resistant",
      description: "Withstands extreme weather conditions without warping or cracking"
    },
    {
      icon: FaThermometerHalf,
      title: "Temperature Control",
      description: "Excellent thermal performance keeps your home comfortable year-round"
    },
    {
      icon: FaVolumeMute,
      title: "Sound Insulation",
      description: "Reduces external noise for a peaceful indoor environment"
    },
    {
      icon: FaTools,
      title: "Low Maintenance",
      description: "Easy to clean and maintain, no painting or staining required"
    },
    {
      icon: FaEye,
      title: "Modern Design",
      description: "Contemporary aesthetics that complement any architectural style"
    }
  ];

  const specifications = [
    { feature: "Material", value: "High-quality uPVC" },
    { feature: "Glazing", value: "Single/Double/Triple glazing options" },
    { feature: "Hardware", value: "Premium European hardware" },
    { feature: "Security", value: "Multi-point locking system" },
    { feature: "Warranty", value: "Up to 5 years comprehensive warranty" },
    { feature: "Colors", value: "White, Wood grain, Custom colors" }
  ];

  return (
    <div>
      <SEO 
        title="Premium uPVC Windows Chittor | Kommerling uPVC Windows Tirupathi | Energy Efficient"
        description="Best uPVC windows in Chittor by Tejesh Profine. Authorized Kommerling partner offering energy-efficient, weather-resistant uPVC windows for homes & offices in Tirupathi. 30% energy savings, 10-year warranty. Free installation quote +91 9949360406"
        keywords="uPVC windows Hyderabad, uPVC windows Bangalore, uPVC windows Visakhapatnam, Kommerling uPVC windows Tirupati, energy efficient uPVC windows Vijayawada, double glazed uPVC windows Mysuru, soundproof uPVC windows Warangal, premium uPVC window supplier Andhra Pradesh, tilt and turn uPVC windows Bengaluru, sliding uPVC windows Secunderabad"
        url="https://tejeshprofine.com/upvc-windows"
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Premium uPVC Windows",
          "description": "Energy-efficient Kommerling uPVC windows for residential and commercial properties in Chittor District",
          "brand": {
            "@type": "Brand",
            "name": "Kommerling"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Tejesh Profine"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "350"
          }
        }}
      />
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(3).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">uPVC Windows</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Premium quality uPVC windows offering exceptional energy efficiency, durability, and modern aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose uPVC Windows?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  uPVC (unplasticized Polyvinyl Chloride) windows are the perfect choice for modern homes and commercial buildings. They offer an excellent combination of performance, durability, and value for money.
                </p>
                <p>
                  Our uPVC windows are manufactured using the latest technology and premium materials, ensuring they meet the highest standards of quality and performance. They provide superior thermal insulation, excellent weather resistance, and require minimal maintenance.
                </p>
                <p>
                  Whether you're building a new home or renovating an existing one, our uPVC windows will enhance your property's energy efficiency, security, and aesthetic appeal while providing years of trouble-free service.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(4).jpeg"
                alt="uPVC Windows Chittor - Kommerling"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why uPVC windows are the smart choice for your home or business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
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

      {/* Specifications Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 font-semibold text-gray-900">{spec.feature}</td>
                        <td className="py-3 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Available Options
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Window Types</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Casement Windows</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Sliding Windows</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Tilt & Turn Windows</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Bay & Bow Windows</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Glazing Options</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Single Glazing</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Double Glazing</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Triple Glazing</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-3" />
                      <span className="text-gray-700">Laminated Glass</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our uPVC Windows Gallery
            </h2>
            <p className="text-xl text-gray-600">
              See our uPVC windows in various applications and settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(10).jpeg"
                  alt="uPVC Windows - Residential Chittor"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Residential Application</h3>
                <p className="text-gray-600 text-sm">Modern home with energy-efficient uPVC windows in Chittor</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(11).jpeg"
                  alt="uPVC Windows - Commercial Tirupathi"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Commercial Application</h3>
                <p className="text-gray-600 text-sm">Office building with premium uPVC windows in Tirupathi</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(12).jpeg"
                  alt="uPVC Windows - Custom Design"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Custom Design</h3>
                <p className="text-gray-600 text-sm">Custom-sized uPVC windows for unique spaces in Chittor District</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade to uPVC Windows?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your uPVC windows project. Our experts are ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Get Free Quote
            </a>
            <a href="tel:+919949360406" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Call Now: +91 9949360406
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UPVCWindows;
