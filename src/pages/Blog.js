import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaTag } from 'react-icons/fa';

const Blog = () => {
  const POSTS_PER_PAGE = 3;
  const [displayedPosts, setDisplayedPosts] = useState(POSTS_PER_PAGE);

  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Choosing uPVC Windows for Your Home",
      excerpt: "Discover the benefits of uPVC windows and learn how to select the perfect ones for your home.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(1).jpeg",
      author: "Tejesh Profine Team",
      date: "2024-01-15",
      category: "Windows",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Aluminium vs uPVC: Which is Better for Your Windows?",
      excerpt: "Compare the pros and cons of aluminium and uPVC windows to make an informed decision.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(2).jpeg",
      author: "Tejesh Profine Team",
      date: "2024-01-10",
      category: "Comparison",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Energy Efficiency Tips: How Windows Can Reduce Your Bills",
      excerpt: "Learn how energy-efficient windows can significantly reduce your electricity bills.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(3).jpeg",
      author: "Tejesh Profine Team",
      date: "2024-01-05",
      category: "Energy Efficiency",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Modern Door Designs for Contemporary Homes",
      excerpt: "Explore the latest trends in door design and find inspiration for your home.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(4).jpeg",
      author: "Tejesh Profine Team",
      date: "2023-12-28",
      category: "Design",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Maintenance Guide for uPVC Windows and Doors",
      excerpt: "Keep your uPVC windows and doors in perfect condition with our maintenance tips.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(5).jpeg",
      author: "Tejesh Profine Team",
      date: "2023-12-20",
      category: "Maintenance",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Sliding Door Systems: Space-Saving Solutions",
      excerpt: "Discover how sliding door systems can maximize space and enhance your home's functionality.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(6).jpeg",
      author: "Tejesh Profine Team",
      date: "2023-12-15",
      category: "Sliding Systems",
      readTime: "5 min read"
    }
  ];

  // const categories = ["All", "Windows", "Doors", "Energy Efficiency", "Design", "Maintenance", "Comparison"];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(7).jpeg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center z-10">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-primary-100 max-w-2xl">
              Stay updated with the latest trends, tips, and insights about windows and doors.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, displayedPosts).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 flex items-center justify-center bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="max-h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <FaTag className="text-primary-600 mr-2" />
                    <span className="text-sm text-primary-600 font-semibold">{post.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FaUser className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      Read More
                      <FaArrowRight className="ml-1 text-sm" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {displayedPosts < blogPosts.length && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setDisplayedPosts(prev => Math.min(prev + POSTS_PER_PAGE, blogPosts.length))}
                className="btn-outline"
              >
                Load More Posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
