import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import prod3 from "../../assets/Products/prod3.png"
import prod4 from "../../assets/Products/prod4.png"
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Wallet, 
  LineChart,
  Sparkles,
  Target,
  Globe,
  Zap,
  Award
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "FinTech Analytics Pro",
    category: "Analytics Platform",
    points: [
      "Real-time market data & predictive insights",
      "AI-powered risk assessment tools",
      "Customizable dashboards & reporting",
    ],
    image: prod3,
    route: "/products/fintech-analytics",
    gradient: "from-amber-500 to-orange-500",
    icon: TrendingUp,
    stat: "99.9%",
    statLabel: "Accuracy"
  },
  {
    id: 2,
    title: "Wealth Management Suite",
    category: "Wealth Tech",
    points: [
      "Portfolio optimization & asset allocation",
      "Automated rebalancing & tax harvesting",
      "Client reporting & performance analytics",
    ],
    image: prod4,
    route: "/products/wealth-management",
    gradient: "from-orange-500 to-rose-500",
    icon: Wallet,
    stat: "$2.5T+",
    statLabel: "Assets Managed"
  }
];

const ProductSection = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden" id="products-section">
      
      {/* Light Orange Background Decorations */}
      <div className="absolute inset-0">
        {/* Soft Orange Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-3xl"></div>
        
        {/* Subtle Orange Wave Pattern */}
        <svg className="absolute top-0 left-0 w-full h-32 opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#f97316" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        
        {/* Subtle Orange Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731605_1px,transparent_1px),linear-gradient(to_bottom,#f9731605_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-20 right-20 opacity-20">
          <Sparkles className="w-12 h-12 text-amber-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <TrendingUp className="w-12 h-12 text-orange-400" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section Heading in Between */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <Sparkles className="w-5 h-5 text-orange-500" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Intelligence{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-orange-300"></div>
            <p className="text-gray-600 text-lg">
              Enterprise-grade platforms for modern financial institutions
            </p>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-orange-300"></div>
          </div>
        </div>

        {/* GRID with 2 Products */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => {
            const IconComponent = product.icon;
            const isHovered = hoveredId === product.id;
            
            return (
              <div
                key={product.id}
                onClick={() => navigate(product.route)}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer relative"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${product.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Card Content */}
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-500 ${
                  isHovered
                    ? "border-orange-300/50 shadow-2xl -translate-y-1"
                    : "border-orange-100/50 shadow-lg"
                }`}>
                  
                  {/* IMAGE with Overlay */}
                  <div className="relative overflow-hidden h-64 md:h-72">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                        <IconComponent className={`w-3.5 h-3.5 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`} />
                        <span className={`text-xs font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-orange-100/50">
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                            {product.stat}
                          </span>
                          <span className="text-xs text-gray-500">{product.statLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 md:p-8">
                    
                    {/* TITLE with Arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
                        isHovered ? "text-transparent bg-gradient-to-r from-gray-900 to-orange-900 bg-clip-text" : "text-gray-900"
                      }`}>
                        {product.title}
                      </h3>
                      <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                        isHovered ? "text-orange-500 translate-x-1" : "text-gray-400"
                      }`} />
                    </div>

                    {/* BULLET POINTS */}
                    <ul className="space-y-3">
                      {product.points.map((point, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start gap-3 group-hover:text-gray-700 transition-colors">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-1.5 group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge - No Buttons */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-orange-50/30 backdrop-blur-sm border border-orange-100/50 px-8 py-4 rounded-full shadow-sm">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-gray-600">Trusted by 500+ Institutions</span>
            </div>
            <div className="w-px h-4 bg-orange-200"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-gray-600">Bank-Grade Security</span>
            </div>
            <div className="w-px h-4 bg-orange-200"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-gray-600">24/7 Enterprise Support</span>
            </div>
            <div className="w-px h-4 bg-orange-200"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-gray-600">Global Coverage</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Bottom Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;