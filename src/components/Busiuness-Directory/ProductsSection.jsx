import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Building2, Star, Users, TrendingUp, Clock, Shield } from "lucide-react";
import prod1 from "../../assets/Busiuness-directory/prod1.jpg"
import prod2 from "../../assets/Busiuness-directory/prod2.jpg" 

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
    <section id="explore-business" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ===== HEADER SECTION (Matching Logistics Style) ===== */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-slate-200"></div>
            <span className="text-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase">
              Our Products
            </span>
            <div className="w-8 h-px bg-slate-200"></div>
          </div>

          {/* H2 Heading */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-700 to-[#0F172A]">
              Solutions for Businesses & Customers
            </span>
          </h2>
          
          {/* Description Text */}
          <p className="text-slate-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto mt-6">
            Powerful tools designed to help businesses grow and customers find the best services.
          </p>
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
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </div>

              {/* TITLE AND DESCRIPTION */}
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

      <style>{`
        .shadow-inner {
          box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.02);
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;