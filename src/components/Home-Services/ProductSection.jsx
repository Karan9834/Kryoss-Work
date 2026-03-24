import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  Clock,
  Shield,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import prod1 from "../../assets/Home-Service/prod1.png";
import prod2 from "../../assets/Home-Service/prod2.png";
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
    rating: 4.9,
    reviews: 1240,
    price: "$49",
    duration: "2-3 hrs",
  },
  {
    id: 2,
    title: "Laundry Service",
    category: "Home Essentials",
    description:
      "Fast and reliable laundry pickup and delivery.",
    image: prod2,
    route: "/products/home-service/laundry",
    rating: 4.8,
    reviews: 890,
    price: "$29",
    duration: "24 hrs",
  },
  {
    id: 3,
    title: "Pest Control",
    category: "Home Essentials",
    description:
      "Safe and effective pest removal solutions.",
    image: prod3,
    route: "/products/home-service/pest-control",
    rating: 4.7,
    reviews: 560,
    price: "$89",
    duration: "1-2 hrs",
  },
  {
    id: 4,
    title: "Handyman Services",
    category: "Repairs & Maintenance",
    description:
      "Fix, repair, and maintain your home easily.",
    image: prod4,
    route: "/products/home-service/handyman",
    rating: 4.9,
    reviews: 2100,
    price: "$59",
    duration: "2-4 hrs",
  },
  {
    id: 5,
    title: "Tow Truck",
    category: "On-Demand Services",
    description:
      "Quick roadside assistance whenever needed.",
    image: prod5,
    route: "/products/home-service/tow-truck",
    rating: 4.6,
    reviews: 340,
    price: "$75",
    duration: "30 mins",
  },
  {
    id: 6,
    title: "Snow Removal",
    category: "On-Demand Services",
    description:
      "Efficient snow clearing for your property.",
    image: prod6,
    route: "/products/home-service/snow-removal",
    rating: 4.8,
    reviews: 420,
    price: "$99",
    duration: "1-2 hrs",
  },
  {
    id: 7,
    title: "Tutor Booking",
    category: "Learning & Personal",
    description:
      "Find expert tutors for personalized learning.",
    image: prod7,
    route: "/products/home-service/tutor",
    rating: 4.9,
    reviews: 1560,
    price: "$35",
    duration: "1 hr",
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

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-600">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Home Services
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
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
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[220px] object-cover group-hover:scale-110 group-hover:rotate-[1deg] transition duration-700"
                  />

                  {/* PRICE */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-white/90 rounded-full text-sm font-bold text-purple-600 shadow">
                      {product.price}
                    </span>
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-semibold">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {product.duration}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <Shield className="w-3 h-3" /> Insured
                    <MapPin className="w-3 h-3 ml-2" /> On-site
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => navigate(product.route)}
                    className="relative text-purple-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 blur-xl" />
                </div>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;