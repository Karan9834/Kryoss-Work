import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Users,
  Star,
  Video,
  Heart,
  MessageCircle,
  TrendingUp,
  Zap,
} from "lucide-react";
import prod1 from "../../assets/Socila-media-app/prod1.png";
import prod2 from "../../assets/Socila-media-app/prod2.png";
const ProductSection = () => {
  const navigate = useNavigate();

  const categories = ["Social Products"];

  const [activeCategory, setActiveCategory] = useState("Social Products");

  const products = [
    {
      id: 1,
      category: "Social Products",
      title: "TikTok Clone App",
      description:
        "Create, share, and discover short-form videos. Go viral with trending sounds, effects, and engage with a global community.",
      image: prod1,
      route: "/products/social/video-app",
      badge: "Trending",
      stats: { users: "10M+", rating: "4.9" },
      features: ["Short Videos", "Live Streaming", "Duet", "Trending Sounds"],
    },
    {
      id: 2,
      category: "Social Products",
      title: "WhatsApp Clone",
      description:
        "A modern social networking platform to connect with friends, share moments, and build meaningful relationships.",
      image: prod2,
      route: "/product/social-connect",
      badge: "Popular",
      stats: { users: "5M+", rating: "4.8" },
      features: ["Photo Sharing", "Stories", "Groups", "Messaging"],
    },
  ];

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="products"
      className="w-full bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-600">
              Our Products
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Social Experience
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Discover powerful tools designed to help you connect, create, and
            grow
          </p>
        </motion.div>

        {/* Category Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-600 hover:bg-white hover:text-gray-900"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`
                    inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      product.badge === "Popular"
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                        : product.badge === "Trending"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-gray-100 text-gray-600"
                    }
                  `}
                  >
                    {product.badge === "Trending" && (
                      <TrendingUp className="w-3 h-3" />
                    )}
                    {product.badge === "Popular" && <Zap className="w-3 h-3" />}
                    {product.badge}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[240px] object-fit group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {product.stats.users}
                        </span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-300" />
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-xs text-gray-500">
                          {product.stats.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => navigate(product.route)}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300 hover:text-purple-700"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative Hover Border */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
