import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye, Star, CheckCircle } from "lucide-react";
import prod1 from "../../assets/SaasProduct/prod1.jpg"
import prod2 from "../../assets/SaasProduct/prod2.jpg"

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Lightning Content AI",
      description: "Generate high-quality content at lightning speed. Our AI understands your brand voice and creates perfectly tailored articles in seconds.",
      image: prod1,
      route: "/products/ai-content-generator"
    },
    {
      id: 2,
      title: "Smart Writer Pro",
      description: "Built to help you write faster and smarter. Advanced writing suggestions, grammar checking, and tone optimization for professional results.",
      image: prod2,
      route: "/product/visionboard-metrics"
    }
  ];

  const handleViewDetails = (route) => {
    navigate(route);
  };

  return (
    <section className="py-24 bg-white" id="products-section">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-slate-200"></div>
            <span className="text-purple-600 text-[12px] font-medium tracking-[0.05em] uppercase">
              Analytics Suite
            </span>
            <div className="w-8 h-px bg-slate-200"></div>
          </div>

          {/* H2 Heading */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-700 to-[#0F172A]">
              Powerful Analytics Solutions For Data-Driven Decisions
            </span>
          </h2>
          
          {/* Description Text */}
          <p className="text-slate-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto mt-6">
            Discover our range of powerful analytics products designed to help you succeed
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              {/* CLICKABLE IMAGE */}
              <div
                onClick={() => handleViewDetails(product.route)}
                className="cursor-pointer group block"
                role="button"
                tabIndex={0}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-purple-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </div>

              {/* TITLE AND DESCRIPTION */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span
                  onClick={() => handleViewDetails(product.route)}
                  className="text-purple-600 font-semibold hover:underline cursor-pointer"
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