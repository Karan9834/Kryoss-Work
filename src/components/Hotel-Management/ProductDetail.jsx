import React from 'react';
import { useNavigate } from 'react-router-dom';
import product1 from "../../assets/Hotel-Management/product1.png"

const ProductsSection = () => {
  const navigate = useNavigate();

  // Single category button
  const category = {
    id: 1,
    name: 'Hotel Management Solutions'
  };

  // Dummy products data
  const products = [
    {
      id: 1,
      name: 'Hotel Booking System',
      route: "/product/booking-engine",
      description: 'Complete all-in-one solution for hotels of all sizes. Includes booking engine, PMS, channel manager, and guest experience tools. Perfect for growing properties.',
      image: product1,
    },
    {
      id: 2,
      name: 'Hotel Management System',
      route: "/product/booking-engine",
      description: 'Cloud-based platform with real-time analytics, automated check-in, and intelligent room management. Ideal for modern hotels seeking efficiency.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Products
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Innovative solutions designed for modern hospitality
          </p>
        </div>

        {/* Single Category Button */}
        <div className="flex justify-center mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl shadow-md hover:shadow-teal-500/30 hover:scale-105 transform transition-all duration-300">
            {category.name}
          </button>
        </div>

        {/* Products Grid - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                {/* Heading */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                
                {/* View Details Button with Routing */}
                <button
                  onClick={() => handleViewDetails(product.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105 transform transition-all duration-300"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12">
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;