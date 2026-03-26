import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Eye, CheckCircle2, Sparkles } from "lucide-react";
import prod1 from "../../assets/SaasProduct/prod1.png";
import prod2 from "../../assets/SaasProduct/prod2.png";

const ProductSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Enterprise ERP System",
      desc: "Complete ERP solution for small to medium businesses with integrated financials, sales, inventory, and customer management in a single platform.",
      image: prod1,
      route: "/products/enterprise/erp",
      rating: 4.9,
      reviews: 2847,
      features: ["Financial Management", "Sales & CRM", "Inventory Control", "Analytics"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      title: "Enterprise Sales CRM",
      desc: "Cloud-based ERP platform for growing businesses featuring real-time financials, inventory management, order processing, and global business operations.",
      image: prod2,
      route: "/products/sales-crm",
      rating: 4.8,
      reviews: 3156,
      features: ["Real-time Financials", "Inventory Management", "Order Management", "Global Operations"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <section 
      id="erp-products-section"  // Add this id
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
          <path fill="url(#gradient-top)" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
          <defs>
            <linearGradient id="gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Category Badge */}
        <div className="flex justify-center mb-6">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 shadow-sm">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Enterprise ERP Solutions
              </span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry-Leading
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> ERP Platforms</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full my-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trusted by thousands of businesses worldwide for seamless operations and growth
          </p>
        </div>

        {/* Cards Grid - 2 Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => navigate(product.route)}
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent">
                
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px' }}>
                  <div className="absolute inset-0 bg-white rounded-2xl"></div>
                </div>
                
                {/* Image Section */}
                <div className="relative overflow-hidden h-72">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg z-10">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10">
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r ${product.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {product.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  
                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${product.bgColor} text-xs font-medium text-gray-700`}>
                        <CheckCircle2 className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(product.route);
                    }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${product.color} text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn`}
                  >
                    <Eye size={18} />
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-blue-200 text-blue-600 font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Sparkles size={20} />
            <span>Explore All ERP Solutions</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* 🔻 Premium Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg className="relative block w-full h-auto min-h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#gradient-bottom)" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          <defs>
            <linearGradient id="gradient-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#3b82f6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ProductSection;