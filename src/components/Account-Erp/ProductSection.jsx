import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Eye, CheckCircle2, Sparkles } from "lucide-react";
import prod5 from "../../assets/Products/exp.jpg";
import prod2 from "../../assets/erp-img/erp12.jpg";

const ProductSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "ERP OS: Apex Erp",
      desc: "Complete ERP solution for small to medium businesses with integrated financials, sales, inventory, and customer management in a single platform.",
      image: prod5,
      route: "/products/enterprise/Apex-Erp",
    },
    {
      id: 2,
      title: "Enterprise Sales CRM",
      desc: "Cloud-based ERP platform for growing businesses featuring real-time financials, inventory management, order processing, and global business operations.",
      image: prod2,
      route: "/products/sales-crm",
    }
  ];

  return (
    <section
      id="erp-products-section"
      className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >

      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"></div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>

      {/* Decorative Particles */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>

      {/* 🔝 Premium Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-auto min-h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#gradient-top)" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          <defs>
            <linearGradient id="gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Category Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
        <div className="flex justify-center mb-6">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 shadow-sm">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Enterprise ERP Solutions
              </span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            Industry-Leading
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> ERP Platforms</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full my-6"></div>
          
          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Trusted by thousands of businesses worldwide for seamless operations and growth
          </p>
        </div>

        {/* Cards Grid - 2 Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              {/* CLICKABLE IMAGE */}
              <div
                onClick={() => navigate(product.route)}
                className="cursor-pointer group block"
                role="button"
                tabIndex={0}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </div>

              {/* TITLE AND DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span
                  onClick={() => navigate(product.route)}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  {product.title}
                </span>{" "}
                <span className="text-gray-700">{product.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Updated button typography */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-blue-200 text-blue-600 font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl text-[14px] md:text-[15px]"
          >
            <Sparkles size={18} />
            <span>Explore All ERP Solutions</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* 🔻 Premium Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg className="relative block w-full h-auto min-h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#gradient-bottom)" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <defs>
            <linearGradient id="gradient-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ProductSection;