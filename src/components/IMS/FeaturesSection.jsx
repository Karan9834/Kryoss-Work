import React from "react";
import { 
  Cpu, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  Users, 
  Database, 
  Cloud,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Bell,
  Activity
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Automation",
      description: "Smart algorithms that learn from your inventory patterns and automate reordering processes.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Sync",
      description: "Instant updates across all channels with zero latency and 99.9% uptime guarantee.",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption with multi-factor authentication and role-based access control.",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with predictive insights and demand forecasting.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Continuous monitoring with instant alerts and automated backup systems.",
      color: "from-red-400 to-rose-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Multi-user support with real-time collaboration and permission management.",
      color: "from-indigo-400 to-blue-400"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Database",
      description: "Handle millions of records effortlessly with our distributed database architecture.",
      color: "from-cyan-400 to-sky-400"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Native",
      description: "Fully cloud-native solution with auto-scaling and disaster recovery.",
      color: "from-violet-400 to-purple-400"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-white">Powerful Features</span>
          </div>
          
          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          
          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-blue-100 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
            Discover the powerful features that make our platform the best choice for modern inventory management
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer overflow-hidden">
                
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className={`relative w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
                <p className="text-blue-100 text-[14px] md:text-[14px] font-normal leading-[1.6]">
                  {feature.description}
                </p>
                
                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Features;