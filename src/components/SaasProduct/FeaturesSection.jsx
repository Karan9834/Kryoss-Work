import React from "react";
import { Zap, Shield, BarChart3, Users, Cloud, Clock, Sparkles, Rocket } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Blazing fast performance with optimized workflows and real-time responses.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and advanced security protocols to protect your data.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights with AI-powered analytics and customizable dashboards.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that keep your team connected and productive.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Fully cloud-native architecture with 99.9% uptime guarantee.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support with dedicated account managers.",
      gradient: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Premium SVG Background */}
      <div className="absolute inset-0">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        
        {/* SVG Wave Pattern - Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-auto min-h-[200px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="url(#feature-gradient-top)"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
            <defs>
              <linearGradient id="feature-gradient-top" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* SVG Wave Pattern - Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-auto min-h-[200px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="url(#feature-gradient-bottom)"
              fillOpacity="0.3"
              d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,218.7C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <defs>
              <linearGradient id="feature-gradient-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Animated Particle Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-white">
                Powerful Features
              </span>
            </div>
          </div>
          
          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white mb-4">
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"> Scale Success</span>
          </h2>
          
          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-300 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Discover powerful tools and features designed to help your business grow faster
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mt-8"></div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl overflow-hidden">
                  
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Card Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
                    <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                    <p className="text-gray-300 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                      {feature.description}
                    </p>
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                
                {/* Floating Shadow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>
        
        {/* Optional: Feature Highlight Badge - Updated typography */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-gray-300">Plus many more powerful features</span>
            <Rocket className="w-4 h-4 text-blue-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;