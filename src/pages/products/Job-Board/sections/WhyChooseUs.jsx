import React from "react";
import { ShieldCheck, Zap, Users, Star, Sparkles, Award, TrendingUp, Clock, Heart, ArrowRight, CheckCircle } from "lucide-react";

const reasons = [
  { 
    icon: ShieldCheck, 
    title: "Trusted Platform", 
    desc: "10,000+ successful placements with verified companies and legitimate job opportunities.",
    stats: "98% Trust Score",
    color: "blue",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-500 to-blue-600"
  },
  { 
    icon: Zap, 
    title: "Fast Hiring", 
    desc: "Get hired 3x faster with our AI-powered matching and instant application system.",
    stats: "2-3 Days Avg",
    color: "yellow",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    gradient: "from-yellow-500 to-orange-500"
  },
  { 
    icon: Users, 
    title: "Large Network", 
    desc: "Connect with 10,000+ top companies and 500,000+ active job seekers.",
    stats: "500K+ Users",
    color: "green",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    icon: Star, 
    title: "Top Rated", 
    desc: "Join thousands of satisfied users who found their dream jobs through our platform.",
    stats: "4.9/5 Rating",
    color: "purple",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    gradient: "from-purple-500 to-indigo-500"
  },
];

const JobWhyChoose = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 px-6 overflow-hidden">
      
      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Thousands{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Trust Our Platform
            </span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg">
            Discover what makes us the preferred choice for job seekers and employers worldwide.
          </p>
        </div>

        {/* ===== REASONS GRID ===== */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
              >
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}></div>
                
                <div className="relative">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 ${reason.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={26} className={reason.iconColor} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                      style={{ backgroundImage: `linear-gradient(to right, ${reason.gradient.split(' ')[1]}, ${reason.gradient.split(' ')[2]})` }}>
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {reason.desc}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full mb-4 group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-50 transition-all duration-300">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs font-semibold text-gray-700">{reason.stats}</span>
                  </div>
                  
                  {/* Decorative Line */}
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${reason.gradient} rounded-full group-hover:w-20 transition-all duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== BOTTOM CTA ===== */}
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

export default JobWhyChoose;