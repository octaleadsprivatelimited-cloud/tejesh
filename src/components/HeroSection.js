import React, { useState, useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const slide = {
    id: 1,
    video: "/gallery/upvc-windows-near-me.mp4",
    title: "Premium uPVC Windows in Chittoor & Aluminium Doors",
    subtitle: "Transform Your Space with Excellence in Tirupathi",
    description: "Experience the perfect blend of durability, energy efficiency, and modern design with our premium Kommerling uPVC windows and aluminium doors in Chittoor District. Excellence in woodwork interiors since 1998."
  };

  const services = [
    "uPVC Windows Chittoor",
    "Aluminium Windows Tirupathi", 
    "uPVC Doors Chittoor District",
    "Aluminium Doors Tirupathi",
    "Sliding Systems Chittoor",
    "Facade Solutions Tirupathi"
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      const attemptPlay = () => {
        videoEl.play().catch(() => {
          // Autoplay might be blocked; retry once metadata is loaded
        });
      };

      if (videoEl.readyState >= 2) {
        attemptPlay();
      } else {
        const onCanPlay = () => {
          attemptPlay();
          videoEl.removeEventListener('canplay', onCanPlay);
        };
        videoEl.addEventListener('canplay', onCanPlay);
        return () => videoEl.removeEventListener('canplay', onCanPlay);
      }
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          service: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
          src={slide.video}
          autoPlay
          playsInline
          loop
          muted
          preload="auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 md:bg-opacity-30"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end md:items-center pt-0 pb-6 md:pt-[25vh] md:pb-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white lg:text-left text-center lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="flex flex-row gap-3 mb-6 w-full max-w-md">
                <a
                  href="tel:+919949360406"
                  className="text-white text-sm px-4 py-3 flex-1 shadow-lg text-center rounded-lg transition-colors duration-200 whitespace-nowrap bg-blue-600 hover:bg-blue-700"
                >
                  Call Us
                </a>
                <a
                  href="https://wa.me/919949360406?text=Hi!%20I'm%20interested%20in%20your%20uPVC%20and%20Aluminium%20windows%20and%20doors%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm px-4 py-3 flex-1 text-center rounded-lg transition-colors duration-200 whitespace-nowrap bg-green-600 hover:bg-green-700"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="hidden lg:block bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md lg:ml-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Get Your Free Quote
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm shadow-md"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center justify-center text-green-600 text-sm">
                    <FaCheck className="mr-2" />
                    Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm text-center">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
