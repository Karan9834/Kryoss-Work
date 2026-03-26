import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye, Star, CheckCircle } from "lucide-react";
import prod3 from "../../assets/SaasProduct/prod3.png"
import prod4 from "../../assets/SaasProduct/prod4.png"

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "AI Copywriter Saas",
      tagline: "Data Intelligence Platform",
      description: "Transform raw data into actionable insights with AI-powered analytics. Real-time dashboards, predictive modeling, and custom reporting tools that help you make data-driven decisions faster.",
      image: prod3,
      rating: 4.9,
      reviews: 1247,
      features: ["Real-time analytics", "AI predictions", "Custom dashboards"],
      route: "/products/ai-content-generator"
    },
    {
      id: 2,
      name: "WriteFlow AI",
      tagline: "Business Intelligence Suite",
      description: "Comprehensive business intelligence platform with advanced visualization tools. Track KPIs, monitor performance metrics, and get deep insights into your business operations.",
      image: prod4,
      rating: 4.8,
      reviews: 892,
      features: ["KPI tracking", "Visual dashboards", "Export reports"],
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
          <div className="inline-flex items-center justify-center mb-6">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100/50 shadow-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Analytics Suite
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Analytics Solutions
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> For Data-Driven Decisions</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover our range of powerful analytics products designed to help you succeed
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-100"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => handleViewDetails(product.route)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                
                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-sm font-bold text-gray-900">{product.price}</span>
                </div>
              </div>
              
              {/* Product Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-purple-600">{product.tagline}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                
                {/* Features List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium">
                      <CheckCircle size={12} />
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* View Details Button with Navigation */}
                <button 
                  onClick={() => handleViewDetails(product.route)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 font-medium hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 group/btn"
                >
                  <Eye size={18} />
                  <span>View Details</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;