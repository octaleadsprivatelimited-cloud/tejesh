import React from 'react';

const Careers = () => {
  return (
    <div>
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/gallery/upvc_windows%20chittor.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Join our team and be part of the leading provider of premium windows and doors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Openings</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Sales Executive</h4>
                  <p className="text-gray-600">Full-time • Tirupathi</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Installation Technician</h4>
                  <p className="text-gray-600">Full-time • Field Work</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Customer Service Representative</h4>
                  <p className="text-gray-600">Full-time • Tirupathi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">Competitive salary and benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">Professional development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">Supportive work environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span className="text-gray-700">Growth opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8">Send us your resume and we'll get back to you.</p>
          <a href="mailto:info@tejeshprofine.com" className="btn-primary">Send Resume</a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
