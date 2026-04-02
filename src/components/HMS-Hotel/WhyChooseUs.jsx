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
  Brain,
  BarChart3
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized workflows that reduce publishing time by up to 70% with real-time collaboration and instant content delivery.",
      color: "from-orange-500 to-teal-500"
    },
    {
      id: 2,
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, role-based access, and compliance with global security standards including GDPR and CCPA.",
      color: "from-teal-500 to-orange-500"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Advanced analytics and AI predictions to optimize content strategy, engagement metrics, and audience growth.",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      icon: Users,
      title: "Seamless Collaboration",
      description: "Real-time co-editing, task management, and team communication tools built specifically for modern newsrooms.",
      color: "from-teal-500 to-emerald-500"
    },
    {
      id: 5,
      icon: Clock,
      title: "24/7 Expert Support",
      description: "Dedicated support team available around the clock to ensure your operations never stop running smoothly.",
      color: "from-orange-500 to-teal-500"
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Distribution Network",
      description: "Reach audiences worldwide with automated multi-channel publishing across 40+ countries and platforms.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-orange-50/40 py-24 lg:py-32">
      
      {/* Orange and Teal Waves Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Wave 1 - Top Left */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative w-full h-auto opacity-30 animate-wave-slow" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(249,115,22,0.2)" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        
        {/* Wave 2 - Middle Right */}
        <div className="absolute top-1/3 right-0 w-full overflow-hidden">
          <svg 
            className="relative w-full h-auto opacity-25 animate-wave-medium" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(13,148,136,0.18)" 
              fillOpacity="1" 
              d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,176C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        
        {/* Wave 3 - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative w-full h-auto opacity-35 animate-wave-fast" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(249,115,22,0.15)" 
              fillOpacity="1" 
              d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,234.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        {/* Wave 4 - Additional Teal Wave */}
        <div className="absolute top-2/3 right-0 w-full overflow-hidden">
          <svg 
            className="relative w-full h-auto opacity-20 animate-wave-medium" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="rgba(13,148,136,0.15)" 
              fillOpacity="1" 
              d="M0,192L60,186.7C120,181,240,171,360,170.7C480,171,600,181,720,197.3C840,213,960,235,1080,234.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Subtle Dark Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#0d948808_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-teal-500/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-orange-500/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-teal-400/40 rounded-full animate-float animation-delay-1500"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-orange-300/40 rounded-full animate-float animation-delay-2500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6">
            <Heart size={16} className="text-orange-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Smart Choice for{" "}
            <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Modern Newsrooms
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Join hundreds of media organizations that trust NewsFlow to power their operations
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/80 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                ></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-300/50 transition-all duration-500"></div>
                
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                >
                  <IconComponent size={26} className="text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.description}
                </p>
                
                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-orange-200/50 shadow-md">
            <div className="flex items-center gap-2">
              <Award size={20} className="text-orange-500" />
              <span className="text-gray-700 text-sm font-medium">Trusted by 500+ Newsrooms</span>
            </div>
            <div className="w-px h-6 bg-orange-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Brain size={20} className="text-teal-500" />
              <span className="text-gray-700 text-sm font-medium">98% Customer Satisfaction</span>
            </div>
            <div className="w-px h-6 bg-orange-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <BarChart3 size={20} className="text-orange-500" />
              <span className="text-gray-700 text-sm font-medium">24/7 Premium Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes wave-slow {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-20px) translateY(-10px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes wave-medium {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(25px) translateY(12px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        @keyframes wave-fast {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-30px) translateY(15px); }
          100% { transform: translateX(0) translateY(0); }
        }
        
        .animate-wave-slow {
          animation: wave-slow 10s ease-in-out infinite;
        }
        
        .animate-wave-medium {
          animation: wave-medium 7s ease-in-out infinite;
        }
        
        .animate-wave-fast {
          animation: wave-fast 5s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(12px); opacity: 0.6; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
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