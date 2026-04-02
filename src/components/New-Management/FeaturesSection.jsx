import React from "react";
import { 
  Brain, 
  Globe2, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  FileText,
  TrendingUp,
  Layers
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Generation",
      description: "Leverage advanced AI to draft, edit, and optimize articles in real-time, reducing production time by up to 70%.",
      color: "from-orange-500 to-amber-500",
      bgGlow: "from-orange-500/20 to-amber-500/20"
    },
    {
      icon: Globe2,
      title: "Multi-Channel Distribution",
      description: "Publish seamlessly across web, mobile, social media, and partner networks with a single click.",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track engagement, reach, and performance metrics with interactive dashboards and actionable insights.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, role-based access, and compliance with global data protection standards.",
      color: "from-emerald-500 to-teal-500",
      bgGlow: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: Zap,
      title: "Lightning Fast Workflows",
      description: "Optimized editorial pipelines with automated approvals, version control, and collaboration tools.",
      color: "from-yellow-500 to-orange-500",
      bgGlow: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time co-editing, commenting, and task assignment for seamless newsroom coordination.",
      color: "from-indigo-500 to-purple-500",
      bgGlow: "from-indigo-500/20 to-purple-500/20"
    },
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Intelligent content scheduling based on audience behavior patterns and peak engagement times.",
      color: "from-rose-500 to-pink-500",
      bgGlow: "from-rose-500/20 to-pink-500/20"
    },
    {
      icon: FileText,
      title: "Smart Content Management",
      description: "Centralized asset library with AI-powered tagging, search, and version history.",
      color: "from-cyan-500 to-blue-500",
      bgGlow: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI-driven recommendations to improve headlines, SEO, and content engagement metrics.",
      color: "from-green-500 to-emerald-500",
      bgGlow: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      {/* Dark Gradient Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.1),transparent_50%)]"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative w-full h-20 opacity-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="url(#gradient-wave)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
          </path>
          <defs>
            <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316"/>
              <stop offset="100%" stopColor="#F59E0B"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Zap size={16} className="text-orange-400" />
            <span className="text-sm font-semibold text-orange-300 tracking-wide">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">
              Scale Your News Operations
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Discover the tools that empower modern newsrooms to work smarter, faster, and more efficiently
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/10 cursor-pointer"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGlow} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}></div>
                
                {/* Icon Container */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 mb-5 transition-all duration-300 group-hover:scale-110`}>
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <span className="text-gray-300 text-sm">And many more powerful tools</span>
            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
            <span className="text-orange-400 text-sm font-semibold">Constantly evolving</span>
          </div>
        </div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg className="relative w-full h-20 opacity-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="url(#gradient-wave-bottom)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
          </path>
          <defs>
            <linearGradient id="gradient-wave-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316"/>
              <stop offset="100%" stopColor="#F59E0B"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;