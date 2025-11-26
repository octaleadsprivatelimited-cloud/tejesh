import React from 'react';
import { FaShieldAlt, FaLeaf, FaEye, FaTools, FaFire } from 'react-icons/fa';

const AluminiumWindows = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Maximum Security",
      description: "Superior strength and advanced locking systems for enhanced security"
    },
    {
      icon: FaEye,
      title: "Modern Aesthetics",
      description: "Sleek, contemporary design that complements any architectural style"
    },
    {
      icon: FaFire,
      title: "Fire Resistant",
      description: "Non-combustible material providing excellent fire resistance"
    },
    {
      icon: FaTools,
      title: "Low Maintenance",
      description: "Corrosion-resistant and easy to maintain with minimal upkeep required"
    },
    {
      icon: FaLeaf,
      title: "Eco-Friendly",
      description: "100% recyclable material with minimal environmental impact"
    },
    {
      icon: FaShieldAlt,
      title: "Weather Resistant",
      description: "Excellent durability in all weather conditions"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(15).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluminium Windows</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Premium aluminium windows combining strength, elegance, and superior performance.
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
                Superior Aluminium Windows
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our aluminium windows represent the perfect fusion of strength, durability, and modern aesthetics. Manufactured using high-grade aluminium alloys, these windows offer exceptional performance and longevity.
                </p>
                <p>
                  Aluminium windows are ideal for both residential and commercial applications where security, durability, and contemporary design are priorities. They provide excellent resistance to corrosion, weather, and wear.
                </p>
                <p>
                  With their slim profiles and large glass areas, aluminium windows maximize natural light while providing superior structural integrity. They're the perfect choice for modern buildings and contemporary homes.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(16).jpeg"
                alt="Aluminium Windows Tirupathi"
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
              Discover why aluminium windows are the premium choice for modern buildings.
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Aluminium Windows?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your aluminium windows project.
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

export default AluminiumWindows;
