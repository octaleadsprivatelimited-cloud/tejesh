import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';

const BlogPostDetail = () => {
  const { id } = useParams();

  // In a real app, you'd fetch this from an API based on the id
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Choosing uPVC Windows for Your Home",
      excerpt: "Discover the benefits of uPVC windows and learn how to select the perfect ones for your home.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      author: "Tejesh Profine Team",
      date: "2024-01-15",
      category: "Windows",
      readTime: "5 min read",
      content: `
        <p>uPVC (unplasticized Polyvinyl Chloride) windows have become increasingly popular in modern homes due to their excellent durability, energy efficiency, and low maintenance requirements. In this comprehensive guide, we'll explore everything you need to know about choosing the right uPVC windows for your home.</p>
        
        <h2>Why Choose uPVC Windows?</h2>
        <p>uPVC windows offer numerous advantages over traditional window materials. They provide excellent thermal insulation, which can significantly reduce your energy bills. Unlike wooden windows, uPVC doesn't require painting, sanding, or regular maintenance. They're also resistant to rot, corrosion, and weather damage.</p>
        
        <h2>Key Factors to Consider</h2>
        <h3>1. Frame Quality</h3>
        <p>The quality of the uPVC frame is crucial. Look for multi-chambered frames that provide better insulation. At Tejesh Profine, we use premium Kommerling uPVC frames that meet the highest quality standards.</p>
        
        <h3>2. Glass Type</h3>
        <p>Double or triple glazing can significantly improve energy efficiency. Low-E (low emissivity) glass coatings help reflect heat, keeping your home cooler in summer and warmer in winter.</p>
        
        <h3>3. Security Features</h3>
        <p>Modern uPVC windows come with advanced locking mechanisms. Multi-point locking systems provide enhanced security for your home.</p>
        
        <h3>4. Design and Aesthetics</h3>
        <p>uPVC windows are available in various colors and finishes. You can choose from classic white, woodgrain effects, or custom colors to match your home's exterior.</p>
        
        <h2>Installation in Chittoor District</h2>
        <p>Proper installation is crucial for optimal performance. Our certified technicians in Chittoor District ensure precise fitting and sealing, maximizing the benefits of your uPVC windows.</p>
        
        <h2>Conclusion</h2>
        <p>Choosing the right uPVC windows involves considering factors like frame quality, glass type, security features, and design. At Tejesh Profine, we help you make informed decisions and provide expert installation services across Chittoor District and Tirupathi.</p>
      `
    },
    {
      id: 2,
      title: "Aluminium vs uPVC: Which is Better for Your Windows?",
      excerpt: "Compare the pros and cons of aluminium and uPVC windows to make an informed decision.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      author: "Tejesh Profine Team",
      date: "2024-01-10",
      category: "Comparison",
      readTime: "7 min read",
      content: `
        <p>When choosing windows for your home, one of the most important decisions is selecting between aluminium and uPVC frames. Both materials have their advantages, and the best choice depends on your specific needs, budget, and preferences.</p>
        
        <h2>uPVC Windows: Advantages</h2>
        <p>uPVC windows are known for their excellent thermal insulation properties. They help maintain consistent indoor temperatures, reducing heating and cooling costs. uPVC is also highly durable, resistant to weather damage, and requires minimal maintenance.</p>
        
        <h2>Aluminium Windows: Advantages</h2>
        <p>Aluminium windows offer superior strength and durability. They can support larger glass panes and provide a more modern, sleek appearance. Aluminium is also fire-resistant and 100% recyclable, making it an eco-friendly choice.</p>
        
        <h2>Cost Comparison</h2>
        <p>Generally, uPVC windows are more cost-effective initially, while aluminium windows may have a higher upfront cost but offer long-term value through durability and minimal maintenance.</p>
        
        <h2>Which Should You Choose?</h2>
        <p>The choice depends on your priorities. If energy efficiency and budget are your main concerns, uPVC is an excellent choice. If you need maximum strength, modern aesthetics, and larger glass areas, aluminium might be better suited for your needs.</p>
      `
    },
    {
      id: 3,
      title: "Energy Efficiency Tips: How Windows Can Reduce Your Bills",
      excerpt: "Learn how energy-efficient windows can significantly reduce your electricity bills.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      author: "Tejesh Profine Team",
      date: "2024-01-05",
      category: "Energy Efficiency",
      readTime: "6 min read",
      content: `
        <p>Energy-efficient windows are one of the best investments you can make for your home. They not only reduce your carbon footprint but also significantly lower your monthly energy bills. Here's how energy-efficient windows work and why they're essential.</p>
        
        <h2>Understanding Energy-Efficient Windows</h2>
        <p>Energy-efficient windows are designed to minimize heat transfer between your home's interior and the outside environment. They use advanced glazing technologies, high-quality frames, and proper sealing to achieve this.</p>
        
        <h2>Key Features</h2>
        <h3>Double or Triple Glazing</h3>
        <p>Multiple panes of glass with air or gas-filled gaps between them provide excellent insulation, reducing heat loss in winter and heat gain in summer.</p>
        
        <h3>Low-E Coatings</h3>
        <p>Low-emissivity coatings reflect infrared light, helping maintain comfortable indoor temperatures year-round.</p>
        
        <h3>Quality Frames</h3>
        <p>uPVC and thermally broken aluminium frames prevent heat transfer, contributing to overall energy efficiency.</p>
        
        <h2>Savings Potential</h2>
        <p>Energy-efficient windows can reduce your heating and cooling costs by up to 30%. In Chittoor District's climate, this translates to significant annual savings on your electricity bills.</p>
      `
    },
    {
      id: 4,
      title: "Modern Door Designs for Contemporary Homes",
      excerpt: "Explore the latest trends in door design and find inspiration for your home.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      author: "Tejesh Profine Team",
      date: "2023-12-28",
      category: "Design",
      readTime: "4 min read",
      content: `
        <p>Modern door designs are evolving to combine functionality with aesthetic appeal. Contemporary homes in Chittoor District and Tirupathi are embracing innovative door solutions that enhance both security and style.</p>
        
        <h2>Current Trends</h2>
        <p>Sliding glass doors, bi-fold doors, and frameless designs are gaining popularity. These designs maximize natural light and create seamless indoor-outdoor connections.</p>
        
        <h2>Material Choices</h2>
        <p>Aluminium and uPVC doors offer modern aesthetics with practical benefits. Both materials provide durability and low maintenance while supporting contemporary design preferences.</p>
      `
    },
    {
      id: 5,
      title: "Maintenance Guide for uPVC Windows and Doors",
      excerpt: "Keep your uPVC windows and doors in perfect condition with our maintenance tips.",
      image: "/gallery/Premium uPVC Doors .jpeg",
      author: "Tejesh Profine Team",
      date: "2023-12-20",
      category: "Maintenance",
      readTime: "8 min read",
      content: `
        <p>One of the major advantages of uPVC windows and doors is their low maintenance requirements. However, proper care ensures they continue to look and function perfectly for years to come. Here's your complete maintenance guide.</p>
        
        <h2>Regular Cleaning</h2>
        <p>Clean your uPVC windows and doors regularly with a soft cloth and mild soap solution. Avoid abrasive cleaners that can scratch the surface. For best results, use a solution of warm water and a gentle detergent.</p>
        
        <h2>Frame Maintenance</h2>
        <p>Inspect frames periodically for any signs of damage or wear. Clean the tracks and moving parts to ensure smooth operation. Lubricate hinges and locks annually with silicone-based lubricants.</p>
        
        <h2>Glass Care</h2>
        <p>Keep glass clean using a non-abrasive glass cleaner. Check seals around double or triple glazing units regularly to ensure they remain intact and effective.</p>
        
        <h2>Weather Seals</h2>
        <p>Inspect weather seals for any cracks or deterioration. Replace them if necessary to maintain optimal energy efficiency and weather protection.</p>
        
        <h2>Professional Inspection</h2>
        <p>Schedule annual professional inspections with Tejesh Profine to ensure your windows and doors remain in optimal condition. Our technicians can identify and address any issues before they become major problems.</p>
        
        <h2>Common Issues and Solutions</h2>
        <p>If windows become difficult to open or close, check for debris in tracks or worn hardware. For condensation issues, ensure proper ventilation. If problems persist, contact our maintenance team in Chittoor District.</p>
      `
    },
    {
      id: 6,
      title: "Sliding Door Systems: Space-Saving Solutions",
      excerpt: "Discover how sliding door systems can maximize space and enhance your home's functionality.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      author: "Tejesh Profine Team",
      date: "2023-12-15",
      category: "Sliding Systems",
      readTime: "5 min read",
      content: `
        <p>Sliding door systems are an excellent solution for maximizing space while maintaining functionality and style. They're particularly popular in modern homes where space optimization is crucial.</p>
        
        <h2>Benefits of Sliding Doors</h2>
        <p>Sliding doors don't require swing space, making them ideal for areas with limited room. They provide seamless transitions between indoor and outdoor spaces, creating a more open and airy feel.</p>
        
        <h2>Types of Sliding Systems</h2>
        <p>From single-panel sliders to multi-panel systems, there's a sliding door solution for every need. Bi-fold and stacking systems offer even more flexibility for larger openings.</p>
        
        <h2>Installation in Chittoor District</h2>
        <p>Our expert team in Chittoor District provides professional installation of sliding door systems, ensuring smooth operation and optimal performance.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white hover:text-primary-200 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center mb-4">
              <FaTag className="text-primary-200 mr-2" />
              <span className="text-sm text-primary-200 font-semibold bg-primary-600 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-6 text-primary-100">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* CTA Section */}
            <div className="mt-12 p-8 bg-primary-50 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help with Your Windows or Doors?
              </h2>
              <p className="text-gray-600 mb-6">
                Contact Tejesh Profine for expert consultation and installation services in Chittoor District and Tirupathi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Free Quote
                </Link>
                <a href="tel:+919949360406" className="btn-outline">
                  Call: +91 9949360406
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;

