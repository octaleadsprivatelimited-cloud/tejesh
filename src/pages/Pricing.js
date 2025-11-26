import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Package",
      price: "₹450",
      unit: "per sq ft",
      description: "Perfect for budget-conscious homeowners",
      features: [
        "Standard uPVC frames",
        "Single glazing",
        "Basic hardware",
        "1 year warranty",
        "Installation included"
      ],
      notIncluded: [
        "Premium finishes",
        "Energy efficient glass",
        "Extended warranty"
      ],
      popular: false
    },
    {
      name: "Premium Package",
      price: "₹650",
      unit: "per sq ft",
      description: "Most popular choice for quality and value",
      features: [
        "High-quality uPVC frames",
        "Double glazing",
        "Premium hardware",
        "3 year warranty",
        "Professional installation",
        "Energy efficient design",
        "Custom color options"
      ],
      notIncluded: [
        "Luxury finishes",
        "Extended warranty"
      ],
      popular: true
    },
    {
      name: "Luxury Package",
      price: "₹850",
      unit: "per sq ft",
      description: "Top-tier solution for premium homes",
      features: [
        "Premium uPVC/Aluminium frames",
        "Triple glazing",
        "Luxury hardware",
        "5 year warranty",
        "Expert installation",
        "Maximum energy efficiency",
        "Custom designs",
        "Premium finishes",
        "24/7 support"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  const factors = [
    "Window/Door size and dimensions",
    "Material choice (uPVC vs Aluminium)",
    "Glass type and glazing options",
    "Hardware specifications",
    "Installation complexity",
    "Location and accessibility",
    "Custom design requirements"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/gallery/upvc_windows%20chittor.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Transparent pricing for all our premium windows and doors solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect package that meets your needs and budget. All packages include professional installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.unit}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center opacity-50">
                        <FaTimes className="text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Affects Pricing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our pricing is transparent and depends on several factors. We provide detailed quotes with no hidden costs.
              </p>
              
              <ul className="space-y-4">
                {factors.map((factor, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <p className="text-gray-600 mb-6">
                Ready to get started? Contact us for a personalized quote based on your specific requirements.
              </p>
              
              <div className="space-y-4">
                <a
                  href="/contact"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                >
                  Request Free Quote
                </a>
                <a
                  href="tel:+919949360406"
                  className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
                >
                  Call: +91 9949360406
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Get Free Quote
            </a>
            <a href="tel:+919949360406" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
