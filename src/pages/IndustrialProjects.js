import React from 'react';

const IndustrialProjects = () => {
  return (
    <div>
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(17).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Projects</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Heavy-duty solutions for industrial facilities with enhanced security and durability.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industrial Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our completed industrial projects showcasing quality and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(18).jpeg"
                  alt="Industrial Project 1"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Facility</h3>
                <p className="text-gray-600">Heavy-duty aluminium doors and windows for industrial application.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(19).jpeg"
                  alt="Industrial Project 2"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warehouse Complex</h3>
                <p className="text-gray-600">Large-scale sliding systems for warehouse facilities.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(20).jpeg"
                  alt="Industrial Project 3"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Factory Building</h3>
                <p className="text-gray-600">Complete facade solutions for industrial factory buildings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Industrial Project?</h2>
          <p className="text-xl mb-8">Contact us for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">Get Free Quote</a>
            <a href="tel:+919949360406" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialProjects;
