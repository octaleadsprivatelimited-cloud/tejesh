import React from 'react';
import { FaAward, FaUsers, FaHandshake, FaLightbulb, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: "Quality First",
      description: "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards."
    },
    {
      icon: FaHandshake,
      title: "Trust & Integrity",
      description: "We build lasting relationships through honest communication, transparent pricing, and reliable service."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We stay ahead of industry trends and continuously improve our products and services."
    },
    {
      icon: FaLeaf,
      title: "Sustainability",
      description: "Our eco-friendly solutions help reduce environmental impact while providing superior performance."
    }
  ];

  const milestones = [
    { year: "2016", title: "Company Founded", description: "Started with a vision to provide premium quality windows and doors" },
    { year: "2018", title: "Expansion", description: "Extended services to commercial and industrial sectors" },
    { year: "2020", title: "Technology Upgrade", description: "Invested in state-of-the-art manufacturing equipment" },
    { year: "2022", title: "Regional Leader", description: "Became a leading provider in South India" },
    { year: "2024", title: "Digital Presence", description: "Launched comprehensive online platform for better customer service" }
  ];

  return (
    <div>
      <SEO 
        title="About Tejesh Profine | Kommerling uPVC Windows Partner in Chittor | V. Venkatesulu"
        description="Learn about Tejesh Profine - Authorized Kommerling uPVC partner in Chittor, Tirupathi. Founded by V. Venkatesulu in 2025 with a two-century family legacy in carpentry. Premium windows & doors installation across Chittor District."
        keywords="Tejesh Profine story, Kommerling partner Andhra Pradesh, uPVC windows company Hyderabad, uPVC windows company Bangalore, premium window installer South India, family-owned window business Tirupati, heritage carpentry Telangana, aluminium doors experts Karnataka, Kommerling legacy Chittoor District"
        url="https://tejeshprofine.com/about"
      />
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/gallery/upvc_windows%20chittor.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tejesh Profine</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Established in 2025, Tejesh Profine represents a legacy of craftsmanship spanning two centuries, now embracing modern innovation. Premium uPVC and Aluminium windows and doors with Kommerling partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tejesh Profine represents a remarkable journey of transformation and innovation, rooted in a rich heritage of craftsmanship spanning over two centuries. Our founder, V. Venkatesulu, hails from a distinguished family lineage of master carpenters, whose expertise and dedication have been passed down through generations.
                </p>
                <p>
                  With the evolution of modern technology and changing architectural demands, V. Venkatesulu recognized the need to adapt traditional craftsmanship to contemporary requirements. He successfully transitioned from traditional carpentry to modern interior renovations, serving a diverse clientele ranging from local communities to top celebrities and political figures across the region.
                </p>
                <p>
                  In 2025, V. Venkatesulu established Tejesh Profine as a strategic venture into the uPVC windows industry, securing an exclusive vendship with Kommerling, a globally recognized leader in uPVC manufacturing. This partnership enables us to deliver premium quality, energy-efficient solutions that combine our traditional values of craftsmanship with cutting-edge technology.
                </p>
                <p>
                  Today, Tejesh Profine stands as a testament to the seamless integration of heritage craftsmanship with modern innovation, serving customers across Tirupathi, Chittor District, and beyond with the same commitment to excellence that has defined our family for generations.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/v.venktesulu.png"
                alt="Venkatesulu - Our Team"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with customers, partners, and employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a regional leader in the industry.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    {milestone.year}
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <FaAward className="text-6xl mx-auto mb-6 text-primary-200" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-primary-100">
                To bridge the gap between traditional craftsmanship and modern innovation, delivering premium quality uPVC and Aluminium windows and doors that honor our two-century heritage while meeting contemporary needs for comfort, security, and energy efficiency.
              </p>
            </div>
            
            <div className="text-center">
              <FaUsers className="text-6xl mx-auto mb-6 text-primary-200" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-primary-100">
                To become the most trusted and preferred provider of premium fenestration solutions in South India, known for our quality, innovation, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tejesh Profine?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">8+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">With over 8 years in the industry, we bring extensive knowledge and expertise to every project.</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">500+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Projects Completed</h3>
              <p className="text-gray-600 leading-relaxed">We've successfully completed hundreds of projects across residential, commercial, and industrial sectors.</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">1K+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Happy Customers</h3>
              <p className="text-gray-600 leading-relaxed">Our satisfied customers are our greatest testament to the quality of our products and services.</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Premium Materials</h3>
              <p className="text-gray-600 leading-relaxed">We use only the finest quality materials from trusted manufacturers to ensure longevity.</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Expert Installation</h3>
              <p className="text-gray-600 leading-relaxed">Our certified technicians ensure perfect installation with attention to every detail.</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Warranty Support</h3>
              <p className="text-gray-600 leading-relaxed">We provide comprehensive warranty coverage and ongoing maintenance support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
