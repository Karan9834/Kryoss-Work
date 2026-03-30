// Add this to your ProductSection component
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp, Globe2, Sparkles } from "lucide-react";
import prod1 from "../../assets/Products/prod1.png"
import prod2 from "../../assets/Products/prod2.png"

const products = [
  {
    id: 1,
    title: "Tech Daily",
    category: "Technology",
    points: [
      "Latest AI & startup updates",
      "Daily tech insights & trends",
      "Curated global innovations",
    ],
    image: prod1,
    route: "/products/tech-daily",
    gradient: "from-blue-500 to-cyan-500",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Global Times",
    category: "World News",
    points: [
      "International politics coverage",
      "Global economic insights",
      "Breaking world news updates",
    ],
    image: prod2,
    route: "/products/global-times",
    gradient: "from-indigo-500 to-purple-500",
    icon: Globe2,
  },
];

const ProductSection = () => {
  const navigate = useNavigate();

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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => {
            const IconComponent = product.icon;
            
            return (
              <div
                key={product.id}
                onClick={() => navigate(product.route)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200/50 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative"
              >
                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  
                  {/* IMAGE with Overlay */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Category Badge - Repositioned */}
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                        <IconComponent className={`w-3.5 h-3.5 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`} />
                        <span className={`text-xs font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 md:p-8">
                    
                    {/* TITLE with Arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
                        {product.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* BULLET POINTS with Enhanced Icons */}
                    <ul className="space-y-3">
                      {product.points.map((point, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start gap-3 group-hover:text-gray-700 transition-colors">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-1.5 group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                        <span>Learn more about {product.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;