import React from 'react';
import ImageWatermark from '../components/ImageWatermark';

const AluminiumDoors = () => {
  return (
    <div>
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(17).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluminium Doors</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Premium aluminium doors offering superior strength and contemporary aesthetics.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Aluminium Doors</h2>
              <div className="space-y-4 text-gray-600">
                <p>Our aluminium doors provide maximum security and modern aesthetics. Perfect for commercial and high-end residential applications.</p>
                <p>Featuring advanced locking systems, fire resistance, and customizable designs to meet your specific requirements.</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(18).jpeg"
                alt="Aluminium Doors"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
              <ImageWatermark className="rounded-b-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Aluminium Doors Quote</h2>
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

export default AluminiumDoors;
