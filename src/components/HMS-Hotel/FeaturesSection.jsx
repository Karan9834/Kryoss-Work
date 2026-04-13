import React from "react";
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
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: Brain,
      title: "AI-Powered Content Generation",
      description:
        "Leverage advanced AI to draft, edit, and optimize articles in real-time.",
      gradient: "from-orange-500 to-teal-500",
    },
    {
      id: 2,
      icon: Globe,
      title: "Multi-Channel Distribution",
      description:
        "Publish seamlessly across web, mobile, and social platforms.",
      gradient: "from-teal-500 to-orange-500",
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Track engagement and performance with powerful dashboards.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 4,
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and role-based access control.",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 5,
      icon: Zap,
      title: "Fast Workflows",
      description:
        "Optimized pipelines with automation and collaboration tools.",
      gradient: "from-orange-500 to-teal-500",
    },
    {
      id: 6,
      icon: Users,
      title: "Team Collaboration",
      description:
        "Real-time editing, commenting, and team coordination.",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
      
      {/* Orange and Teal Waves Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Wave 1 - Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative w-full h-auto opacity-30 animate-wave-slow" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(249,115,22,0.15)" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        
        {/* Wave 2 - Middle */}
        <div className="absolute top-1/3 left-0 w-full overflow-hidden">
          <svg 
            className="relative w-full h-auto opacity-25 animate-wave-medium" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(13,148,136,0.12)" 
              fillOpacity="1" 
              d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,176C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        
        {/* Wave 3 - Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative w-full h-auto opacity-20 animate-wave-fast" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(249,115,22,0.1)" 
              fillOpacity="1" 
              d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,234.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731605_1px,transparent_1px),linear-gradient(to_bottom,#0d948805_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-teal-400/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-orange-400/40 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-teal-500/40 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-teal-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-orange-500" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Scale
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
            Tools designed for modern, high-performance newsrooms.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* HOVER GLOW */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-500"></div>

                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
                <p className="text-gray-600 text-[14px] md:text-[14px] font-normal leading-[1.6] group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER - Updated typography */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-teal-50 rounded-full px-6 py-3 border border-orange-100">
            <span className="text-gray-600 text-[12px] md:text-[13px] font-normal">And many more powerful features</span>
            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
            <span className="text-orange-600 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.05em]">🚀 Constantly evolving</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes wave-slow {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-15px) translateY(-8px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes wave-medium {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes wave-fast {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(12px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        
        .animate-wave-medium {
          animation: wave-medium 6s ease-in-out infinite;
        }
        
        .animate-wave-fast {
          animation: wave-fast 4s ease-in-out infinite;
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