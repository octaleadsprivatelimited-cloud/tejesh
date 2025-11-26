import React from 'react';

const SlidingSystems = () => {
  return (
    <div>
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(19).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sliding Systems</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Smooth and space-efficient sliding door and window systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Sliding Systems</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our sliding systems are designed for maximum space efficiency and smooth operation. Perfect for modern homes and commercial spaces.</p>
                <p>Featuring advanced hardware, weather sealing, and customizable designs to meet your specific needs.</p>
              </div>
            </div>
            <div>
              <img
                src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(20).jpeg"
                alt="Premium Sliding Systems Chittor"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Sliding Systems Quote</h2>
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

export default SlidingSystems;
