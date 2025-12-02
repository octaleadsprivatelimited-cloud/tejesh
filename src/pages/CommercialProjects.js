import React from 'react';
import ImageWatermark from '../components/ImageWatermark';

const CommercialProjects = () => {
  return (
    <div>
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(9).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">Commercial Projects</h1>
            <p className="text-sm md:text-xl text-primary-100 max-w-2xl">
              Professional solutions for offices, retail spaces, and commercial buildings.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Our Commercial Portfolio</h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our completed commercial projects showcasing quality and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-40 md:h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(10).jpeg"
                  alt="Commercial Project Chittor"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
                <ImageWatermark />
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Office Complex in Chittor</h3>
                <p className="text-[10px] md:text-base text-gray-600 hidden md:block">Modern uPVC windows and facade for a corporate office building in Chittor District.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-40 md:h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(11).jpeg"
                  alt="Commercial Project Tirupathi"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
                <ImageWatermark />
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Commercial Building Tirupathi</h3>
                <p className="text-[10px] md:text-base text-gray-600 hidden md:block">Complete Kommerling uPVC windows solutions for commercial property in Tirupathi.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-40 md:h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(12).jpeg"
                  alt="Commercial Project Chittor District"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
                <ImageWatermark />
              </div>
              <div className="p-2 md:p-6">
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Retail Store</h3>
                <p className="text-[10px] md:text-base text-gray-600 hidden md:block">Premium uPVC windows and doors for a retail store in Chittor District.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Ready for Your Commercial Project?</h2>
          <p className="text-sm md:text-xl mb-6 md:mb-8">Contact us for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">Get Free Quote</a>
            <a href="tel:+919949360406" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialProjects;
