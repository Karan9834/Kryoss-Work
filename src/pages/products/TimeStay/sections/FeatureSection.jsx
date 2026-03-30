import React, { useState } from "react";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Globe,
  Brain,
  BarChart3,
  Sparkles,
  Calendar,
  Star,
  Rocket
} from "lucide-react";

const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState("core");

  const coreFeatures = [
    {
      id: 1,
      icon: Clock,
      title: "Smart Time Tracking",
      description: "Real-time time tracking with automated logging and intelligent insights.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "AI-powered scheduling that optimizes bookings and reduces conflicts.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      id: 3,
      icon: Users,
      title: "Guest Management",
      description: "Comprehensive guest profiles with preferences and stay history.",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  const advancedFeatures = [
    {
      id: 4,
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and role-based access control for complete protection.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      id: 5,
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline operations with custom automation and smart triggers.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Distribution",
      description: "Reach customers worldwide with multi-channel booking integration.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      id: 7,
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights to optimize performance and revenue.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 8,
      icon: Rocket,
      title: "Scalable Infrastructure",
      description: "Handle unlimited users with auto-scaling cloud architecture.",
      gradient: "from-teal-500 to-emerald-500"
    }
    
  ];

  const handleCoreFeatures = () => {
    setActiveCategory("core");
  };

  const handleAdvancedFeatures = () => {
    setActiveCategory("advanced");
  };

  const currentFeatures = activeCategory === "core" ? coreFeatures : advancedFeatures;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-700 via-green-700 to-teal-800 py-24 lg:py-32">
      
      {/* Glassy Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-emerald-300/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-teal-300/40 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm font-semibold text-white">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-emerald-200 to-teal-200 text-transparent bg-clip-text">
              Scale Your Operations
            </span>
          </h2>
          
          <p className="mt-4 text-lg text-white/80">
            Choose between core essentials or explore advanced capabilities
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={handleCoreFeatures}
            className={`group relative px-8 py-3.5 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 ${
              activeCategory === "core"
                ? "bg-white text-emerald-600 shadow-lg scale-105"
                : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:scale-105"
            }`}
          >
            <Star size={18} />
            Core Features
          </button>
          
          <button
            onClick={handleAdvancedFeatures}
            className={`group relative px-8 py-3.5 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 ${
              activeCategory === "advanced"
                ? "bg-white text-emerald-600 shadow-lg scale-105"
                : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:scale-105"
            }`}
          >
            <Rocket size={18} />
            Advanced Features
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/40 transition-all duration-500"></div>
                
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                >
                  <IconComponent size={26} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Feature Count Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm text-white/80">
              {activeCategory === "core" 
                ? `${coreFeatures.length} Core Features available` 
                : `${advancedFeatures.length} Advanced Features available`}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-15px) translateX(8px); opacity: 0.6; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;