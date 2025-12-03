import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What materials do you use for windows and doors?",
          answer: "We use premium quality uPVC and Aluminium materials from trusted manufacturers. Our uPVC products are weather-resistant and energy-efficient, while our aluminium products offer superior strength and modern aesthetics."
        },
        {
          question: "Do you provide installation services?",
          answer: "Yes, we provide professional installation services by our certified technicians. Installation is included in all our packages to ensure perfect fit and optimal performance."
        },
        {
          question: "What is your service area?",
          answer: "We primarily serve Tirupathi and surrounding areas in Chittoor District, Andhra Pradesh. We also provide services to other parts of South India. Contact us to check if we serve your location."
        },
        {
          question: "How long does it take to complete a project?",
          answer: "Project timelines vary based on the scope and complexity. Typically, residential projects take 2-4 weeks, while commercial projects may take 4-8 weeks. We provide detailed timelines during the consultation phase."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          question: "What's the difference between uPVC and Aluminium windows?",
          answer: "uPVC windows are more energy-efficient, cost-effective, and require less maintenance. Aluminium windows are stronger, more durable, and offer a modern aesthetic. The choice depends on your budget, aesthetic preferences, and specific requirements."
        },
        {
          question: "Are your products energy efficient?",
          answer: "Yes, all our products are designed with energy efficiency in mind. Our uPVC windows provide excellent thermal insulation, while our aluminium windows can be fitted with thermal breaks to reduce heat transfer."
        },
        {
          question: "Do you offer custom sizes and designs?",
          answer: "Absolutely! We specialize in custom solutions tailored to your specific requirements. We can create windows and doors in any size, shape, or design to match your architectural needs."
        },
        {
          question: "What warranty do you provide?",
          answer: "We provide comprehensive warranty coverage ranging from 1-5 years depending on the package chosen. This covers manufacturing defects, hardware issues, and installation problems."
        }
      ]
    },
    {
      category: "Installation & Maintenance",
      questions: [
        {
          question: "How do you ensure proper installation?",
          answer: "Our certified technicians follow strict installation protocols. We use professional tools, proper sealing techniques, and quality hardware to ensure your windows and doors are installed correctly for optimal performance."
        },
        {
          question: "What maintenance is required for uPVC windows?",
          answer: "uPVC windows require minimal maintenance. Regular cleaning with soapy water and occasional lubrication of moving parts is usually sufficient. We provide detailed maintenance guidelines with every installation."
        },
        {
          question: "Do you provide after-sales support?",
          answer: "Yes, we provide comprehensive after-sales support including warranty service, maintenance guidance, and technical assistance. Our customer support team is available to help with any questions or concerns."
        },
        {
          question: "Can you replace existing windows without major renovation?",
          answer: "Yes, in most cases we can replace existing windows with minimal disruption. Our installation process is designed to be clean and efficient, minimizing the need for major renovation work."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How do you calculate pricing?",
          answer: "Our pricing is based on several factors including size, material choice, glass type, hardware specifications, and installation complexity. We provide transparent, detailed quotes with no hidden costs."
        },
        {
          question: "Do you offer financing options?",
          answer: "We work with various financing partners to offer flexible payment options. Contact us to discuss available financing solutions that suit your budget."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including cash, bank transfers, cheques, and digital payments. We can also arrange financing options for larger projects."
        },
        {
          question: "Do you provide free quotes?",
          answer: "Yes, we provide completely free, no-obligation quotes for all projects. Our team will visit your site, assess your requirements, and provide a detailed quote within 24-48 hours."
        }
      ]
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Find answers to common questions about our products, services, and processes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Questions Answered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Contact us directly and we'll be happy to help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <FaChevronUp className="text-primary-600 flex-shrink-0" />
                          ) : (
                            <FaChevronDown className="text-primary-600 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help. Contact us for personalized assistance with your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="tel:+919949360406" className="btn-outline">
                Call: +91 9949360406
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
