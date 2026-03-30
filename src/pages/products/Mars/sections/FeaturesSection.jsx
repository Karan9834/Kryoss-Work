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
  ArrowRight,
  Play,
  CheckCircle,
  Rocket,
  Star,
  Award
} from "lucide-react";

const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState("core");

  // Core Features
  const coreFeatures = [
    {
      id: 1,
      icon: Brain,
      title: "AI-Powered Content Generation",
      description: "Leverage advanced AI to draft, edit, and optimize articles in real-time.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      icon: Globe,
      title: "Multi-Channel Distribution",
      description: "Publish seamlessly across web, mobile, and social platforms.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track engagement and performance with powerful dashboards.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  // Advanced Features
  const advancedFeatures = [
    {
      id: 4,
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and role-based access control.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 5,
      icon: Zap,
      title: "Lightning Fast Workflows",
      description: "Optimized pipelines with automation and collaboration tools.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 6,
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time editing, commenting, and team coordination.",
      gradient: "from-indigo-500 to-cyan-500"
    },
    {
      id: 7,
      icon: Clock,
      title: "Automated Scheduling",
      description: "Intelligent content scheduling based on audience behavior.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 8,
      icon: Rocket,
      title: "Scalable Infrastructure",
      description: "Handle millions of users with auto-scaling architecture.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  // Button handlers
  const handleCoreFeatures = () => {
    setActiveCategory("core");
    console.log("Showing Core Features");
    // Optional: Scroll to features section
    document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAdvancedFeatures = () => {
    setActiveCategory("advanced");
    console.log("Showing Advanced Features");
    // Optional: Scroll to features section
    document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentFeatures = activeCategory === "core" ? coreFeatures : advancedFeatures;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 py-24 lg:py-32">
      
      {/* Glassy Blue Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-indigo-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-blue-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Scale Your Operations
            </span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-600">
            Choose between core essentials or explore advanced capabilities
          </p>
        </div>

        {/* TWO BUTTONS - Category Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={handleCoreFeatures}
            className={`group relative px-8 py-3.5 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 ${
              activeCategory === "core"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                : "bg-white/50 backdrop-blur-sm border border-blue-200 text-gray-700 hover:bg-blue-50/80 hover:scale-105"
            }`}
          >
            <Star size={18} className={activeCategory === "core" ? "text-white" : "text-blue-500"} />
            Core Features
            {activeCategory === "core" && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 blur-md opacity-50 -z-10"></div>
            )}
          </button>
          
          <button
            onClick={handleAdvancedFeatures}
            className={`group relative px-8 py-3.5 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 ${
              activeCategory === "advanced"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white/50 backdrop-blur-sm border border-blue-200 text-gray-700 hover:bg-blue-50/80 hover:scale-105"
            }`}
          >
            <Rocket size={18} className={activeCategory === "advanced" ? "text-white" : "text-indigo-500"} />
            Advanced Features
            {activeCategory === "advanced" && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 blur-md opacity-50 -z-10"></div>
            )}
          </button>
        </div>

        {/* Features Grid */}
        <div id="features-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-100/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-500"></div>
                
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                >
                  <IconComponent size={26} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Category Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50/50 backdrop-blur-sm rounded-full px-6 py-2 border border-blue-200">
            <CheckCircle size={16} className="text-blue-500" />
            <span className="text-sm text-gray-600">
              {activeCategory === "core" 
                ? `${coreFeatures.length} Core Features available` 
                : `${advancedFeatures.length} Advanced Features available`}
            </span>
          </div>
        </div>
      </div>

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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;