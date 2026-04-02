import React from "react";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Globe,
  Award,
  Heart,
  Sparkles,
  Star,
  Rocket,
  Headphones,
  Code,
  Database
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized workflows that reduce publishing time by up to 70% with real-time collaboration and instant content delivery.",
      gradient: "from-blue-500 to-indigo-500",
      bgGlow: "from-blue-500/20 to-indigo-500/20",
      delay: "0s"
    },
    {
      id: 2,
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, role-based access, and compliance with global security standards including GDPR and CCPA.",
      gradient: "from-indigo-500 to-purple-500",
      bgGlow: "from-indigo-500/20 to-purple-500/20",
      delay: "0.1s"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Advanced analytics and AI predictions to optimize content strategy, engagement metrics, and audience growth.",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "from-blue-500/20 to-cyan-500/20",
      delay: "0.2s"
    },
    {
      id: 4,
      icon: Users,
      title: "Seamless Collaboration",
      description: "Real-time co-editing, task management, and team communication tools built specifically for modern newsrooms.",
      gradient: "from-indigo-500 to-blue-500",
      bgGlow: "from-indigo-500/20 to-blue-500/20",
      delay: "0.3s"
    },
    {
      id: 5,
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Dedicated support team available around the clock to ensure your operations never stop running smoothly.",
      gradient: "from-blue-500 to-indigo-500",
      bgGlow: "from-blue-500/20 to-indigo-500/20",
      delay: "0.4s"
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Distribution Network",
      description: "Reach audiences worldwide with automated multi-channel publishing across 40+ countries and platforms.",
      gradient: "from-indigo-500 to-purple-500",
      bgGlow: "from-indigo-500/20 to-purple-500/20",
      delay: "0.5s"
    },
    {
      id: 7,
      icon: Rocket,
      title: "Scalable Infrastructure",
      description: "Handle millions of users with auto-scaling architecture that grows with your business needs.",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "from-blue-500/20 to-cyan-500/20",
      delay: "0.6s"
    },
    {
      id: 8,
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning platform trusted by top media organizations worldwide.",
      gradient: "from-indigo-500 to-blue-500",
      bgGlow: "from-indigo-500/20 to-blue-500/20",
      delay: "0.7s"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 py-24 lg:py-32">
      
      {/* Glassy Blue Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-indigo-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-float animation-delay-1500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-indigo-400/30 rounded-full animate-float animation-delay-2500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Heart size={16} className="text-blue-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Smart Choice for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Modern Newsrooms
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Join hundreds of media organizations that trust NewsFlow to power their operations
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-100/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ animationDelay: reason.delay }}
              >
                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${reason.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-500"></div>
                
                {/* Icon Container */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                >
                  <IconComponent size={26} className="text-white" />
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${reason.gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.description}
                </p>
                
                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Card Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-blue-100/30 group-hover:text-blue-200/40 transition-colors duration-300">
                  {reason.id.toString().padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-200 shadow-md">
            <div className="flex items-center gap-2">
              <Award size={20} className="text-blue-500" />
              <span className="text-gray-700 text-sm font-medium">Trusted by 500+ Newsrooms</span>
            </div>
            <div className="w-px h-6 bg-blue-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Star size={20} className="text-indigo-500" />
              <span className="text-gray-700 text-sm font-medium">4.9/5 Customer Rating</span>
            </div>
            <div className="w-px h-6 bg-blue-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Database size={20} className="text-blue-500" />
              <span className="text-gray-700 text-sm font-medium">99.9% Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* Custom CSS for Animations */}
      <style>{`
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
        
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;