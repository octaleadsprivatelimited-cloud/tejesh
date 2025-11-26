import React from 'react';

const Warranty = () => {
  return (
    <div>
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/gallery/upvc_windows%20chittor.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Warranty Information</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Comprehensive warranty coverage for all our products and services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Warranty Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our products with comprehensive warranty coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">uPVC Products</h3>
              <p className="text-gray-600">5 years comprehensive warranty on frames and hardware.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aluminium Products</h3>
              <p className="text-gray-600">3 years comprehensive warranty on frames and hardware.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">2 years warranty on installation workmanship.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Glass & Glazing</h3>
              <p className="text-gray-600">1 year warranty on glass and glazing components.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hardware</h3>
              <p className="text-gray-600">3 years warranty on locks, handles, and moving parts.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance</h3>
              <p className="text-gray-600">Free maintenance service during warranty period.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warranty Terms & Conditions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our warranty covers manufacturing defects and installation issues. Normal wear and tear, misuse, or damage from external causes are not covered.
            </p>
            <a href="/contact" className="btn-primary">Contact Us for Warranty Claims</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Warranty;
