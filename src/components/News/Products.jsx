// Add this to your ProductSection component
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import prod1 from "../../assets/Products/platfrom.png"
import prod2 from "../../assets/Products/Tech daily.jpg"

const products = [
  {
    id: 1,
    title: "News: Tech Daily",
    desc: "Stay updated with the latest in technology and startups worldwide.",
    image: prod1,
    route: "/products/tech-daily",
  },
  {
    id: 2,
    title: "Elespare Pro: Global Times",
    desc: "Comprehensive worldwide news portal for global citizens.",
    image: prod2,
    route: "/products/global-times",
  },
];

const ProductSection = () => {
  return (
    <section
      id="products-section"  // Add this id for scrolling
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 px-6 md:px-16 py-20 md:py-28 overflow-hidden"
    >

      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER with Enhanced Design */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wider">
              Our Products
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              News Platforms
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl">
            Discover specialized news platforms tailored to your interests,
            delivering curated content that matters to you.
          </p>
        </div>

        {/* GRID with Enhanced Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              {/* CLICKABLE IMAGE */}
              <Link
                to={product.route}
                className="cursor-pointer group block"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </Link>

              {/* TITLE AND DESCRIPTION */}
              <p className="mt-4 text-sm md:text-base">
                <Link to={product.route} className="text-blue-600 font-semibold hover:underline">
                  {product.title}
                </Link>{" "}
                <span className="text-gray-700">- {product.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;