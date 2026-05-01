import React from "react";
import { 
  Rocket, 
  Shield, 
  Clock, 
  Trophy, 
  Users, 
  Headphones,
  DollarSign,
  Star,
  Sparkles,
  Zap
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Lightning Fast Setup",
      description: "Get your casino platform up and running in under 2 weeks with our streamlined deployment process.",
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      shadowColor: "shadow-blue-500/20"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, regular audits, and advanced fraud detection systems to protect your business.",
      gradient: "from-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      shadowColor: "shadow-emerald-500/20"
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "24/7 Operations",
      description: "99.9% uptime guarantee with automated monitoring and instant failover systems.",
      gradient: "from-purple-600 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      shadowColor: "shadow-purple-500/20"
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      title: "Proven Track Record",
      description: "Trusted by 200+ operators worldwide with over $1B in processed transactions.",
      gradient: "from-amber-600 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      shadowColor: "shadow-amber-500/20"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Expert Support Team",
      description: "Dedicated account managers and 24/7 technical support to assist you every step of the way.",
      gradient: "from-rose-600 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      shadowColor: "shadow-rose-500/20"
    },
    {
      icon: <Headphones className="w-7 h-7" />,
      title: "White-Label Solution",
      description: "Fully customizable platform that reflects your brand identity and unique requirements.",
      gradient: "from-violet-600 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      borderColor: "border-violet-200",
      shadowColor: "shadow-violet-500/20"
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "Competitive Revenue Share",
      description: "Industry-leading revenue share models with transparent daily settlements.",
      gradient: "from-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      shadowColor: "shadow-green-500/20"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Regular Updates",
      description: "Monthly feature releases and game additions to keep your platform fresh and engaging.",
      gradient: "from-yellow-600 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
      shadowColor: "shadow-yellow-500/20"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header - Premium */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200/80 shadow-sm text-amber-700 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles size={12} className="text-amber-500" />
            <span>Why Industry Leaders Choose Us</span>
            <Sparkles size={12} className="text-amber-500" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Stake1
            </span>
          </h2>
          
          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
          </div>
          
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            The premier choice for operators looking to enter the iGaming industry
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-7 border ${reason.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2`}
              style={{ boxShadow: `0 10px 30px -10px rgba(0,0,0,0.05)` }}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon container with premium 3D effect */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="text-white">
                    {reason.icon}
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative dot */}
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
              
              {/* Title */}
              <h3 className="relative text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="relative text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {reason.description}
              </p>

              {/* Premium decorative line that slides in on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;