import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import prod1 from "../../assets/Home-Service/prod1.png";
import prod2 from "../../assets/Home-Service/prod2.jpg";
import prod3 from "../../assets/Home-Service/prod3.png";
import prod4 from "../../assets/Home-Service/prod4.png";
import prod5 from "../../assets/Home-Service/prod5.png";
import prod6 from "../../assets/Home-Service/prod6.png";
import prod7 from "../../assets/Home-Service/prod7.png";

const categories = [
  "Home Essentials",
  "Repairs & Maintenance",
  "On-Demand Services",
  "Learning & Personal",
];

const products = [
  {
    id: 1,
    title: "Home Cleaning",
    category: "Home Essentials",
    description:
      "Professional cleaning services for your home. Sparkling clean guaranteed.",
    image: prod1,
    route: "/products/home-service/cleaning",
  },
  {
    id: 2,
    title: "Laundry Service",
    category: "Home Essentials",
    description:
      "Fast and reliable laundry pickup and delivery.",
    image: prod2,
    route: "/products/home-service/laundry",
  },
  {
    id: 3,
    title: "Pest Control",
    category: "Home Essentials",
    description:
      "Safe and effective pest removal solutions.",
    image: prod3,
    route: "/products/home-service/pest-control",
  },
  {
    id: 4,
    title: "Handyman Services",
    category: "Repairs & Maintenance",
    description:
      "Fix, repair, and maintain your home easily.",
    image: prod4,
    route: "/products/home-service/handyman",
  },
  {
    id: 5,
    title: "Tow Truck",
    category: "On-Demand Services",
    description:
      "Quick roadside assistance whenever needed.",
    image: prod5,
    route: "/products/home-service/tow-truck",
  },
  {
    id: 6,
    title: "Snow Removal",
    category: "On-Demand Services",
    description:
      "Efficient snow clearing for your property.",
    image: prod6,
    route: "/products/home-service/snow-removal",
  },
  {
    id: 7,
    title: "Tutor Booking",
    category: "Learning & Personal",
    description:
      "Find expert tutors for personalized learning.",
    image: prod7,
    route: "/products/home-service/tutor",
  },
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (p) =>
      p.category.trim().toLowerCase() ===
      activeCategory.trim().toLowerCase()
  );

  return (
    <section
      id="products"
      className="w-full bg-gradient-to-b from-white via-purple-50/30 to-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">

        {/* HEADER - Updated Typography */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            {/* Badge - Updated: text-[14px] font-semibold */}
            <span className="text-[14px] font-semibold text-purple-600">
              Our Services
            </span>
          </div>

          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-3">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Home Services
            </span>
          </h2>

          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="text-[16px] font-normal leading-[1.6] text-gray-600">
            Explore services designed for your convenience
          </p>
        </div>

        {/* CATEGORY */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
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
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-purple-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
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
        </div>

      </div>
    </section>
  );
};

export default ProductSection;