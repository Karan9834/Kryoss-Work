import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Building2, Star, Users, TrendingUp, Clock, Shield } from "lucide-react";
import prod1 from "../../assets/Business Directory product 1/Book Trusted Professionals with Ease.jpg"
import prod2 from "../../assets/Business Directory product 1/Book Trusted Services Instantly.jpg" 

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "local-business-directory",
      image: prod1,
      title: "ProBook: Professionals Directory",
      description: "A powerful platform to discover nearby businesses with verified listings, real customer reviews, and detailed business profiles. Find the best services around you in seconds.",
      route: "/products/business-directory",
    },
    {
      id: "service-booking-platform",
      image: prod2,
      title: "QuickService: Booking Platform",
      description: "Book trusted professionals like electricians, plumbers, and salon experts instantly. A complete service marketplace with scheduling and customer reviews.",
      route: "/products/service-booking",
    },
  ];

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <section id="explore-business" className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 overflow-hidden">

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
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-[12px] font-medium tracking-[0.05em] uppercase">Our Products</span>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Solutions for{" "}
            {/* Highlighted Gradient Text - Updated: same typography as H2 */}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Businesses & Customers
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed to help businesses grow and customers find the best services.
          </p>
        </div>

        {/* ===== CATEGORY BUTTON (Single) ===== */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => navigate("/products")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-[14px] md:text-[16px]"
          >
            🔥 Popular Products
          </button>
        </div>

        {/* ===== PRODUCT CARDS GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              {/* CLICKABLE IMAGE */}
              <div
                onClick={() => handleNavigate(product.route)}
                className="cursor-pointer group block"
                role="button"
                tabIndex={0}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square rounded-xl border-[5px] border-transparent hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-contain bg-gray-50"
                />
              </div>

              {/* TITLE AND DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span
                  onClick={() => handleNavigate(product.route)}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  {product.title}
                </span>{" "}
                <span className="text-gray-700">{product.description}</span>
              </p>
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