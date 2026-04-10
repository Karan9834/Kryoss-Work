import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import prod1 from "../../assets/Socila-media-app/prod1.jpg";
import prod2 from "../../assets/Socila-media-app/prod2.jpg";

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
    },
    {
      id: 2,
      category: "Social Products",
      title: "Meetzy: WhatsApp Clone",
      description:
        "A modern social networking platform to connect with friends, share moments, and build meaningful relationships.",
      image: prod2,
      route: "/product/social-connect",
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

  return (
    <section
      id="products"
      className="w-full bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header - Updated Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            {/* Badge - Updated: text-[14px] font-semibold */}
            <span className="text-[14px] font-semibold text-purple-600">
              Our Products
            </span>
          </div>

          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Social Experience
            </span>
          </h2>

          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="text-[16px] font-normal leading-[1.6] text-gray-600">
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
                  ${activeCategory === cat
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="text-center">
              {/* CLICKABLE IMAGE */}
              <div
                onClick={() => navigate(product.route)}
                className="cursor-pointer group block"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") navigate(product.route);
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-purple-500 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </div>

              {/* TITLE AND DESCRIPTION - Updated Typography */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span
                  onClick={() => navigate(product.route)}
                  className="text-purple-600 font-semibold hover:underline cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") navigate(product.route);
                  }}
                >
                  {product.title}
                </span>{" "}
                <span className="text-gray-700">- {product.description}</span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;