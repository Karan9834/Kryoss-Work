import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye, Star, CheckCircle } from "lucide-react";
import prod1 from "../../assets/saas products 1/Generate Content at Lightning Speed.jpg"
import prod2 from "../../assets/saas products 1/Built to Help You Write Faster & Smarter.jpg"

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
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="products-section">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(168,85,247,0.02)_50%,transparent_75%)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100/50 shadow-sm">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Analytics Suite
              </span>
            </div>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            Powerful Analytics Solutions
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> For Data-Driven Decisions</span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
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
                  className="w-full aspect-square rounded-xl border-[5px] border-transparent hover:border-purple-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover h-full"
                />
              </div>

              {/* TITLE AND DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
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
    </section>
  );
};

export default ProductsSection;