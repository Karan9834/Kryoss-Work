import React from "react";
import { 
  ShieldCheck, 
  Zap, 
  Layers, 
  Users, 
  Globe, 
  BarChart3,
  Sparkles,
  Trophy,
  Clock,
  Headphones
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, regular audits, and advanced fraud detection to protect your business.",
      gradient: "from-blue-600 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      shadowColor: "shadow-blue-500/20"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Ultra-low latency with <100ms response time for seamless user experience.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      shadowColor: "shadow-amber-500/20"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Trusted by 200+ operators worldwide with over $1B in processed transactions.",
      gradient: "from-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      shadowColor: "shadow-emerald-500/20"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Deployment",
      description: "Launch your platform in under 2 weeks with our streamlined process.",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      shadowColor: "shadow-purple-500/20"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Multi-language, multi-currency support with worldwide availability.",
      gradient: "from-cyan-600 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200",
      shadowColor: "shadow-cyan-500/20"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Expert Support",
      description: "Dedicated account managers and technical support around the clock.",
      gradient: "from-rose-600 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      shadowColor: "shadow-rose-500/20"
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 shadow-sm text-orange-700 px-4 py-2 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={12} className="text-orange-500" />
            <span>Why Choose Us</span>
            <Sparkles size={12} className="text-orange-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              BetPro
            </span>
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
          </div>

          <p className="mt-6 text-gray-500 text-base max-w-2xl mx-auto">
            The premier choice for operators looking to enter the iGaming industry
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-7 border ${reason.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2`}
              style={{ boxShadow: `0 10px 30px -10px rgba(0,0,0,0.05)` }}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/0 to-white/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon container with premium 3D effect */}
              <div className="relative mb-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className="text-white">
                    {reason.icon}
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative dot */}
                <div className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Title */}
              <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {reason.description}
              </p>

              {/* Premium decorative line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;