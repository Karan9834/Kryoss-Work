import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    category: "Food Delivery Apps",
    icon: "🍔",
    items: [
      {
        title: "Food Delivery App",
        desc: "Launch your own food delivery platform with real-time tracking, smart ordering, and seamless payments.",
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        gradient: "from-orange-500 to-red-500",
        route: "/products/food-delivery",
        features: ["Real-time tracking", "Smart ordering", "Seamless payments"],
      },
      {
        title: "Restaurant App",
        desc: "Empower restaurants with digital menus, order management, and customer engagement tools.",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        gradient: "from-pink-500 to-rose-500",
        route: "/products/restaurant-app",
        features: ["Digital menus", "Order management", "Customer engagement"],
      },
    ],
  },
  {
    category: "Grocery Delivery Apps",
    icon: "🛒",
    items: [
      {
        title: "Grocery App",
        desc: "Build a grocery delivery solution with real-time inventory, quick checkout, and delivery tracking.",
        img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        gradient: "from-green-500 to-emerald-500",
        route: "/products/grocery-app",
        features: ["Real-time inventory", "Quick checkout", "Delivery tracking"],
      },
      {
        title: "Multi-Vendor Grocery",
        desc: "Create a marketplace where multiple vendors can sell groceries with centralized management.",
        img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        gradient: "from-teal-500 to-green-500",
        route: "/products/multi-vendor-grocery",
        features: ["Multi-vendor support", "Centralized management", "Vendor dashboard"],
      },
    ],
  },
  {
    category: "Taxi Booking Apps",
    icon: "🚖",
    items: [
      {
        title: "Taxi App",
        desc: "Develop a ride-booking app with live tracking, driver management, and secure payments.",
        img: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        gradient: "from-yellow-500 to-orange-500",
        route: "/products/taxi-app",
        features: ["Live tracking", "Driver management", "Secure payments"],
      },
      {
        title: "Ride Sharing App",
        desc: "Enable users to share rides with optimized routes and cost-efficient travel options.",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        gradient: "from-blue-500 to-indigo-500",
        route: "/products/ride-sharing",
        features: ["Route optimization", "Cost-efficient", "User sharing"],
      },
    ],
  },
];

// Get all unique categories for buttons
const categories = products.map(p => p.category);

const Products = () => {
  const navigate = useNavigate();
  // Set "Food Delivery Apps" as the default active category
  const [activeCategory, setActiveCategory] = useState("Food Delivery Apps");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Filter products based on active category
  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              E-Commerce Solutions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of ready-to-launch e-commerce applications
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => {
            const categoryIcon = products.find(p => p.category === category)?.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span>{categoryIcon}</span>
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Categories with Cards */}
        <AnimatePresence mode="wait">
          {filteredProducts.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              {/* Category Header with decorative line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {category.category}
                  </h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    onHoverStart={() => setHoveredCard(`${categoryIndex}-${itemIndex}`)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Gradient overlay on image */}
                    <div className="relative h-56 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      {/* Gradient badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold shadow-lg z-20`}>
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                      {/* Animated gradient line */}
                      <motion.div 
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredCard === `${categoryIndex}-${itemIndex}` ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Title with icon */}
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                          {item.title}
                        </h4>
                        <span className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-xl shadow-md`}>
                          {category.icon}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Button with navigation */}
                      <motion.button
                        onClick={() => navigate(item.route)}
                        whileHover={{ x: 5 }}
                        className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text hover:from-purple-600 hover:to-pink-600 transition-all duration-300`}
                      >
                        View Details
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Empty state if no products */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No products found in this category</p>
          </motion.div>
        )}

        {/* View All Products Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate("/products/all")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            View All Solutions
            <span className="ml-2">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Products;