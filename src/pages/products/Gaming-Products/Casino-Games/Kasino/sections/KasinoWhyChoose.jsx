import React from "react";
import {
  ShieldCheck,
  Zap,
  Layers,
  Users,
  Globe,
  BarChart3,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    desc: "Built with enterprise-grade security to protect users and transactions.",
    gradient: "from-blue-600 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Lightning-fast gameplay with optimized backend and real-time processing.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
  },
  {
    icon: Layers,
    title: "Scalable System",
    desc: "Easily handle thousands of users with robust and scalable architecture.",
    gradient: "from-purple-600 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Users,
    title: "User Engagement",
    desc: "Designed to maximize retention with immersive gaming experiences.",
    gradient: "from-emerald-600 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
  },
  {
    icon: Globe,
    title: "Global Ready",
    desc: "Optimized for worldwide users with high availability and low latency.",
    gradient: "from-cyan-600 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Gain insights into users, gameplay, and revenue in real-time.",
    gradient: "from-rose-600 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
  },
];

const KasinoWhyChoose = () => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 shadow-sm text-green-700 px-4 py-2 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={12} className="text-green-500" />
            <span>Why Choose Kasino</span>
            <Sparkles size={12} className="text-green-500" />
          </div>

          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900">
            Built for Performance &{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
          </div>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Everything you need to launch, scale, and dominate the casino market.
          </p>
        </div>

        {/* Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-7 border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2`}
                style={{ boxShadow: `0 10px 30px -10px rgba(0,0,0,0.05)` }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/0 to-white/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Icon container with premium 3D effect */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon size={22} className="text-white" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Decorative dot */}
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Premium decorative line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KasinoWhyChoose;