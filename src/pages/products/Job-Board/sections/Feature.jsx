import React from "react";
import { Search, Filter, Star, MapPin, Briefcase, Shield, Sparkles, ArrowRight, TrendingUp, Clock, Users, Award } from "lucide-react";

const features = [
  { 
    icon: Search, 
    title: "Smart Search", 
    desc: "Find jobs easily with AI-powered recommendations tailored to your skills and experience.",
    color: "blue",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    hoverColor: "hover:bg-blue-500/20"
  },
  { 
    icon: Filter, 
    title: "Advanced Filters", 
    desc: "Refine results by salary, experience, location, and company culture.",
    color: "purple",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    hoverColor: "hover:bg-purple-500/20"
  },
  { 
    icon: Star, 
    title: "Company Reviews", 
    desc: "Read authentic employee reviews and ratings before applying.",
    color: "yellow",
    bgColor: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    hoverColor: "hover:bg-yellow-500/20"
  },
  { 
    icon: MapPin, 
    title: "Location Based", 
    desc: "Discover nearby jobs with our smart location tracking system.",
    color: "green",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-400",
    hoverColor: "hover:bg-green-500/20"
  },
  { 
    icon: Briefcase, 
    title: "Multiple Roles", 
    desc: "Browse thousands of jobs across various industries and seniority levels.",
    color: "orange",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    hoverColor: "hover:bg-orange-500/20"
  },
  { 
    icon: Shield, 
    title: "Verified Jobs", 
    desc: "All listings are verified to ensure legitimate opportunities.",
    color: "red",
    bgColor: "bg-red-500/10",
    iconColor: "text-red-400",
    hoverColor: "hover:bg-red-500/20"
  },
];

const JobFeatures = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] py-24 px-6 overflow-hidden">
      
      {/* ===== Background Effects ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* ===== Grid Pattern ===== */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm">Platform Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Powerful{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Job Features
            </span>
          </h2>
          
          <p className="mt-4 text-gray-400 text-lg">
            Everything you need to find your dream job faster and smarter.
          </p>
        </div>

        {/* ===== FEATURES GRID ===== */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden`}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon size={26} className={feature.iconColor} />
                </div>
                
                {/* Title */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r from-blue-400 to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="relative text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </p>
                
                {/* Decorative Line */}
                <div className={`relative w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-5 group-hover:w-20 transition-all duration-500`}></div>
                
                {/* Learn More Link */}
                <div className="relative mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <button className={`inline-flex items-center gap-1 text-sm font-semibold ${feature.iconColor} hover:gap-2 transition-all`}>
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== BOTTOM STATS ===== */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          <div className="text-center group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-2xl font-bold text-white">50K+</p>
            <p className="text-sm text-gray-500">Active Jobs</p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-2xl font-bold text-white">10K+</p>
            <p className="text-sm text-gray-500">Companies</p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-green-400" />
            </div>
            <p className="text-2xl font-bold text-white">98%</p>
            <p className="text-sm text-gray-500">Success Rate</p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-orange-400" />
            </div>
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-sm text-gray-500">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobFeatures;