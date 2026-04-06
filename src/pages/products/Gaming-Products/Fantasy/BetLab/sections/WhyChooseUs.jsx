import React from "react";
import { 
  ShieldCheck, 
  Zap, 
  Trophy, 
  Users, 
  Globe, 
  Headphones,
  Sparkles,
  Rocket,
  Clock,
  Star,
  Award,
  TrendingUp
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Lightning Fast Setup",
      description: "Get your platform up and running in under 2 weeks with our streamlined deployment process.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, regular audits, and advanced fraud detection systems.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Proven Track Record",
      description: "Trusted by 200+ operators worldwide with over $1B in processed transactions.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Operations",
      description: "99.9% uptime guarantee with automated monitoring and instant failover systems.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Reach",
      description: "Multi-language, multi-currency support with worldwide availability.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "24/7 Expert Support",
      description: "Dedicated account managers and technical support around the clock.",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Industry Leader",
      description: "Recognized as the best betting platform by industry experts.",
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalable Growth",
      description: "Easily scale your platform as your user base grows exponentially.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 shadow-sm text-blue-700 px-4 py-2 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={12} className="text-blue-500" />
            <span>Why Choose Us</span>
            <Sparkles size={12} className="text-blue-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              BetPro
            </span>
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>

          <p className="mt-6 text-gray-500 text-base max-w-2xl mx-auto">
            The premier choice for operators looking to enter the iGaming industry
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl p-5 border ${reason.borderColor} shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2`}
              style={{ boxShadow: `0 10px 30px -10px rgba(0,0,0,0.05)` }}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon container with premium 3D effect */}
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${reason.gradient} shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className="text-white">
                    {reason.icon}
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative dot */}
                <div className={`absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Title */}
              <h3 className="relative text-base font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-500 text-xs leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {reason.description}
              </p>

              {/* Premium decorative line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${reason.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;