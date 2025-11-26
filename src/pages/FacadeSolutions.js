import React from 'react';

const FacadeSolutions = () => {
  return (
    <div>
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(5).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Facade Solutions</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Complete facade solutions for modern architectural requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Facade Solutions</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our facade solutions combine architectural excellence with functional performance. Perfect for modern buildings and commercial complexes.</p>
                <p>Featuring energy-efficient designs, weather resistance, and customizable aesthetics to enhance your building's appearance and performance.</p>
              </div>
            </div>
            <div>
              <img
                src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(6).jpeg"
                alt="Facade Solutions"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Facade Solutions Quote</h2>
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

export default FacadeSolutions;
