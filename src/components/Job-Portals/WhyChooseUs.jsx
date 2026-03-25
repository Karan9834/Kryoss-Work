import React from "react";
import { Shield, Zap, Users, Award, Globe, Headphones, Rocket, Heart, Sparkles } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Trusted & Verified",
      description: "All companies and jobs are verified to ensure legitimate opportunities for job seekers.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      shadowColor: "shadow-blue-500/20",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Fast Matching",
      description: "AI-powered algorithm matches you with relevant jobs in real-time with 98% accuracy.",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      shadowColor: "shadow-indigo-500/20",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "98% Success Rate",
      description: "Thousands of successful placements with satisfied candidates and employers worldwide.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      shadowColor: "shadow-purple-500/20",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "10K+ Companies",
      description: "Partnered with leading companies across various industries globally.",
      gradient: "from-rose-500 to-rose-600",
      bgGradient: "from-rose-50 to-rose-100",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      shadowColor: "shadow-rose-500/20",
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock to assist you instantly.",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      shadowColor: "shadow-green-500/20",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Reach",
      description: "Access job opportunities from companies across 50+ countries worldwide.",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      shadowColor: "shadow-cyan-500/20",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 overflow-hidden">
      
      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.08"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
          <path
            fill="#2563eb"
            fillOpacity="0.05"
            d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,112C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Thousands{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Trust Our Platform
            </span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what makes us the preferred choice for job seekers and employers worldwide.
          </p>
        </div>

        {/* ===== REASONS GRID with Enhanced Hover Effects ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)' }}></div>
              
              {/* Card Content */}
              <div className="relative bg-white rounded-2xl p-2">
                {/* Icon Container with Enhanced Hover */}
                <div className={`relative w-16 h-16 ${reason.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl ${reason.shadowColor}`}>
                  <div className={`${reason.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    {reason.icon}
                  </div>
                  {/* Ripple Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
                
                {/* Title with Gradient on Hover */}
                <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-all duration-500 group-hover:bg-gradient-to-r ${reason.gradient} group-hover:bg-clip-text group-hover:text-transparent`}>
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">
                  {reason.description}
                </p>
                
                {/* Animated Underline */}
                <div className={`w-12 h-1 bg-gradient-to-r ${reason.gradient} rounded-full mt-5 group-hover:w-24 transition-all duration-500`}></div>
                
                {/* Decorative Corner */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 rounded-full transition-all duration-500 group-hover:scale-150`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Blue Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.08"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            fill="#2563eb"
            fillOpacity="0.05"
            d="M0,48L80,53.3C160,59,320,69,480,64C640,59,800,37,960,37.3C1120,37,1280,59,1360,69.3L1440,80L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;