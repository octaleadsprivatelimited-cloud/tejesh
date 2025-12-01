import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import ImageWatermark from '../components/ImageWatermark';

const Portfolio = () => {
  const residentialFeatures = [
    "Energy efficient Kommerling frames",
    "Acoustic comfort glazing",
    "Custom colour and finish options",
    "Dedicated post-installation support"
  ];

  const commercialFeatures = [
    "High performance facade integration",
    "Coordinated project scheduling",
    "On-site quality inspections",
    "Extended hardware warranty"
  ];

  const industrialFeatures = [
    "Weather sealed profiles",
    "Low maintenance components",
    "Optimised ventilation strategy",
    "Safety and compliance checks"
  ];

  const projectCatalog = [
    {
      title: "Skyline Residency – Block A",
      category: "Residential",
      location: "Tirupati",
      date: "2025",
      description: "Kommerling window upgrade for premium apartments delivering light-filled interiors and thermal comfort.",
      details: "Complete retrofit across 24 apartments with precision engineered Kommerling profiles, improving insulation and occupant comfort year-round."
    },
    {
      title: "Skyline Residency – Block B",
      category: "Residential",
      location: "Tirupati",
      date: "2025",
      description: "Sister tower to Block A with matching Kommerling window systems for cohesive aesthetics.",
      details: "Coordinated installation schedule ensured minimal disruption while maintaining identical finishes across both residential towers."
    },
    {
      title: "Lotus Villas Premium Upgrade",
      category: "Residential",
      location: "Chandragiri",
      date: "2025",
      description: "Villa community upgrade featuring tilt-and-turn windows for cross ventilation and privacy.",
      details: "Each villa received custom fabricated profiles to suit varied apertures while preserving the design language of the gated community."
    },
    {
      title: "Green Meadows Township",
      category: "Residential",
      location: "Gudivada",
      date: "2025",
      description: "Township-wide Kommerling installation enhancing sustainability goals.",
      details: "Executed in five phases to align with civil works, ensuring airtight seals and long-term performance for monsoon seasons."
    },
    {
      title: "Hillcrest Luxury Villas",
      category: "Residential",
      location: "Tirumala Foothills",
      date: "2025",
      description: "Luxury hillside villas with panoramic Kommerling window walls.",
      details: "Engineered structural reinforcements for wide-span glazing while keeping a frameless visual effect across living areas."
    },
    {
      title: "Oceanic Towers Refurbishment",
      category: "Residential",
      location: "Visakhapatnam",
      date: "2025",
      description: "Seaside apartment refurbishment with salt-resistant Kommerling systems.",
      details: "Specified corrosion-resistant hardware and marine grade sealing to withstand coastal exposure without compromising clarity."
    },
    {
      title: "Riverfront Residences",
      category: "Residential",
      location: "Rajahmundry",
      date: "2025",
      description: "Floor-to-ceiling window replacements opening views of the Godavari river.",
      details: "Integrated shading channels and laminated safety glass to meet riverfront wind-load requirements."
    },
    {
      title: "Heritage Bungalow Conservation",
      category: "Residential",
      location: "Anantapur",
      date: "2025",
      description: "Blending heritage facades with contemporary Kommerling profiles.",
      details: "Custom mullion designs respected heritage guidelines while upgrading performance to modern standards."
    },
    {
      title: "Palm Grove Villas",
      category: "Residential",
      location: "Kakinada",
      date: "2025",
      description: "Climate-smart villa project focusing on indoor comfort and security.",
      details: "Smart locking systems integrated into Kommerling profiles enabling remote monitoring for villa owners."
    },
    {
      title: "Tech Park Tower 1",
      category: "Commercial",
      location: "Vizag IT SEZ",
      date: "2025",
      description: "Curtain-wall compatible Kommerling windows for landmark IT tower.",
      details: "Delivered coordinated logistics for high-rise installation with reflective glazing to control heat gain."
    },
    {
      title: "Tech Park Tower 2",
      category: "Commercial",
      location: "Vizag IT SEZ",
      date: "2025",
      description: "Twin tower installation mirroring Tower 1 performance standards.",
      details: "Implemented synchronized workstreams to ensure identical finishes, enabling uniform facade lighting."
    },
    {
      title: "Harbour View Offices",
      category: "Commercial",
      location: "Visakhapatnam",
      date: "2025",
      description: "Office block upgrade prioritising daylight and noise reduction.",
      details: "Acoustic glazing packages and perimeter sealing dramatically lowered harbour-side noise levels for tenants."
    },
    {
      title: "City Centre Retail Hub",
      category: "Commercial",
      location: "Vijayawada",
      date: "2025",
      description: "Retail complex with display-friendly, secure Kommerling storefront windows.",
      details: "Integrated concealed shutters and tempered glass to balance merchandising visibility with after-hours safety."
    },
    {
      title: "Financial District Annex",
      category: "Commercial",
      location: "Amaravati",
      date: "2025",
      description: "Expansion block with low-e Kommerling systems supporting energy targets.",
      details: "Paired with building management sensors for real-time monitoring of envelope performance."
    },
    {
      title: "Smart Manufacturing Unit",
      category: "Industrial",
      location: "Sri City",
      date: "2025",
      description: "Industrial facility upgrade for controlled environments and compliance.",
      details: "Installed pressure-managed Kommerling windows for clean zones while meeting industrial safety norms."
    },
    {
      title: "Pharma Packaging Plant",
      category: "Industrial",
      location: "Nellore",
      date: "2025",
      description: "Cleanroom-ready Kommerling systems maintaining stringent hygiene standards.",
      details: "Double-sealed frames paired with antimicrobial gaskets to support pharma-grade operations."
    },
    {
      title: "Logistics Distribution Hub",
      category: "Industrial",
      location: "Kurnool",
      date: "2025",
      description: "Daylighting strategy using Kommerling windows for large-format warehousing.",
      details: "Optimised window placement for natural illumination, reducing reliance on artificial lighting during operational hours."
    },
    {
      title: "Agro Processing Facility",
      category: "Industrial",
      location: "Guntur",
      date: "2025",
      description: "Moisture-resistant Kommerling profiles tailored for agro processing environments.",
      details: "Specified easy-clean surfaces and reinforced frames to handle frequent sanitation cycles."
    },
    {
      title: "Food Storage Cold Chain",
      category: "Industrial",
      location: "Eluru",
      date: "2025",
      description: "Cold storage complex with insulated Kommerling windows maintaining temperature stability.",
      details: "Triple-sealed glazing helps maintain constant cold chain temperatures with minimal energy draw."
    },
    {
      title: "Renewable Energy Control Room",
      category: "Industrial",
      location: "Kadapa",
      date: "2025",
      description: "Control room glazing engineered for glare-free monitoring of solar farms.",
      details: "Low-reflective coatings and integrated shading help operators maintain visibility of critical monitoring screens."
    }
  ];

  const galleryImages = projectCatalog.map((project, index) => {
    const categoryFeatures =
      project.category === "Commercial"
        ? commercialFeatures
        : project.category === "Industrial"
          ? industrialFeatures
          : residentialFeatures;

    return {
      ...project,
      id: index + 1,
      image: `/gallery/upvc windows andhra pradesh kommerling (${index + 1}).jpeg`,
      features: categoryFeatures
    };
  });

  const [filteredPortfolio, setFilteredPortfolio] = useState(galleryImages);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredPortfolio(galleryImages);
    } else {
      setFilteredPortfolio(galleryImages.filter(item => item.category === category));
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(1).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Explore our completed projects and see the quality of our work across different sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to large commercial complexes, we've successfully delivered projects across various sectors.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredPortfolio.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[520px] object-contain"
                    loading="lazy"
                  />
                  <ImageWatermark />
                </div>
              </div>
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <FaFilter className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category to view more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg text-primary-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-lg text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg text-primary-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">RK</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-gray-600 text-sm">Hyderabad</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Excellent quality and professional service. The uPVC windows installed in my home are perfect and have significantly improved energy efficiency."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">PS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">Bangalore</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Tejesh Profine delivered exceptional aluminium doors for our office. The installation was smooth and the quality is outstanding."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">AP</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Amit Patel</h4>
                  <p className="text-gray-600 text-sm">Chennai</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Great experience from consultation to installation. The team was professional and the sliding systems are exactly what we wanted."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied customers. Get a free consultation and quote for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Free Quote
            </a>
            <a href="tel:+919949360406" className="btn-outline">
              Call Now: +91 9949360406
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
