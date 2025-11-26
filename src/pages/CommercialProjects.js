import React from 'react';

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Projects</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Professional solutions for offices, retail spaces, and commercial buildings.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commercial Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our completed commercial projects showcasing quality and innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 md:h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(10).jpeg"
                  alt="Commercial Project Chittor"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Office Complex in Chittor</h3>
                <p className="text-xs md:text-base text-gray-600">Modern uPVC windows and facade for a corporate office building in Chittor District.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 md:h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(11).jpeg"
                  alt="Commercial Project Tirupathi"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Commercial Building Tirupathi</h3>
                <p className="text-xs md:text-base text-gray-600">Complete Kommerling uPVC windows solutions for commercial property in Tirupathi.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 md:h-64 flex items-center justify-center bg-gray-100">
                <img
                  src="/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(12).jpeg"
                  alt="Commercial Project Chittor District"
                  className="max-h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Retail Store</h3>
                <p className="text-xs md:text-base text-gray-600">Premium uPVC windows and doors for a retail store in Chittor District.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Commercial Project?</h2>
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

export default CommercialProjects;
