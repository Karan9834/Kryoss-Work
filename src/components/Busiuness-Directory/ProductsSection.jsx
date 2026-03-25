import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Building2, Star, Users, TrendingUp, Clock, Shield } from "lucide-react";

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
  {
    id: "local-business-directory",
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1170&q=80",
    title: "Local Business Directory (Yelp / JustDial Clone)",
    description: "A powerful platform to discover nearby businesses with verified listings, real customer reviews, and detailed business profiles. Find the best services around you in seconds.",
    features: [
      "Location-Based Search",
      "Ratings & Reviews System",
      "Verified Business Profiles",
      "Category-Based Discovery"
    ],
    buttonText: "Explore Directory",
    route: "/products/business-directory",
  },
  {
    id: "service-booking-platform",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1170&q=80",
    title: "Service Booking Platform (Urban Company Clone)",
    description: "Book trusted professionals like electricians, plumbers, and salon experts instantly. A complete service marketplace with scheduling and customer reviews.",
    features: [
      "Service Booking System",
      "Professional Profiles",
      "Scheduling & Time Slots",
      "Customer Reviews & Ratings"
    ],
    buttonText: "Book Services",
    route: "/products/service-booking",
  },
];

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 overflow-hidden">
      
      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.08"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Our Products</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Businesses & Customers
            </span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Powerful tools designed to help businesses grow and customers find the best services.
          </p>
        </div>

        {/* ===== CATEGORY BUTTON (Single) ===== */}
        <div className="flex justify-center mb-12">
          <button 
            onClick={() => navigate("/products")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            🔥 Popular Products
          </button>
        </div>

        {/* ===== PRODUCT CARDS GRID ===== */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => handleNavigate(product.route)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  Business Solution
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button 
                  onClick={() => handleNavigate(product.route)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all group-hover:gap-3"
                >
                  {product.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Blue Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ProductsSection;