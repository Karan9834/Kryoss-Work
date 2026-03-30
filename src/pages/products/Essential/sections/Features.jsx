import React, { useState } from "react";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Globe,
  Puzzle,
  Box,
  Cpu,
  Sparkles,
  Rocket,
  Headphones,
  Star,
  Database,
  Code
} from "lucide-react";

const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState("core");

  const coreFeatures = [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized code that doesn't slow down your site. Load times reduced by up to 60%.",
      gradient: "from-purple-400 to-fuchsia-400"
    },
    {
      id: 2,
      icon: Puzzle,
      title: "Modular Architecture",
      description: "Install only what you need. Each plugin works independently without bloat.",
      gradient: "from-fuchsia-400 to-purple-400"
    },
    {
      id: 3,
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, regular security audits, and proactive threat protection.",
      gradient: "from-purple-400 to-indigo-400"
    },
    {
      id: 4,
      icon: Code,
      title: "Developer Friendly",
      description: "Clean, documented code with hooks and filters for unlimited customization.",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      id: 5,
      icon: Database,
      title: "Scalable Database",
      description: "Optimized queries that handle millions of records without performance degradation.",
      gradient: "from-purple-400 to-fuchsia-400"
    },
    {
      id: 6,
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access and collaborative tools for seamless team workflows.",
      gradient: "from-fuchsia-400 to-purple-400"
    }
  ];

  const advancedFeatures = [
    {
      id: 7,
      icon: Rocket,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms that predict trends and optimize content strategy.",
      gradient: "from-purple-400 to-fuchsia-400"
    },
    {
      id: 8,
      icon: Globe,
      title: "Global CDN Integration",
      description: "Built-in CDN support for lightning-fast delivery to users worldwide.",
      gradient: "from-fuchsia-400 to-purple-400"
    },
    {
      id: 9,
      icon: Headphones,
      title: "24/7 Priority Support",
      description: "Round-the-clock expert support with guaranteed 30-minute response time.",
      gradient: "from-purple-400 to-indigo-400"
    },
    {
      id: 10,
      icon: Box,
      title: "Automatic Updates",
      description: "Seamless updates with rollback capability and compatibility testing.",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      id: 11,
      icon: Cpu,
      title: "Edge Computing",
      description: "Process data at the edge for reduced latency and improved performance.",
      gradient: "from-purple-400 to-fuchsia-400"
    },
    {
      id: 12,
      icon: Star,
      title: "White Label Solutions",
      description: "Rebrand and customize plugins to match your agency's identity.",
      gradient: "from-fuchsia-400 to-purple-400"
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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 lg:py-32">
      
      {/* Glassy Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-300/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-fuchsia-300/40 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-indigo-300/40 rounded-full animate-float animation-delay-1500"></div>
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
            <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 text-transparent bg-clip-text">
              Build Better
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
                ? "bg-white text-purple-600 shadow-lg scale-105"
                : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:scale-105"
            }`}
          >
            <Star size={18} />
            Core Features ({coreFeatures.length})
          </button>
          
          <button
            onClick={handleAdvancedFeatures}
            className={`group relative px-8 py-3.5 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 ${
              activeCategory === "advanced"
                ? "bg-white text-purple-600 shadow-lg scale-105"
                : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:scale-105"
            }`}
          >
            <Rocket size={18} />
            Advanced Features ({advancedFeatures.length})
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/40 transition-all duration-500"></div>
                
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                >
                  <IconComponent size={26} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
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
                ? `${coreFeatures.length} Core Features to get you started` 
                : `${advancedFeatures.length} Advanced Features for power users`}
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