import React from "react";
import {
  Shield,
  Zap,
  Users,
  CreditCard,
  BarChart3,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Platform",
    desc: "Advanced encryption and fraud protection for safe transactions.",
  },
  {
    icon: Zap,
    title: "Real-time Gameplay",
    desc: "Ultra-fast performance with seamless live gaming experience.",
  },
  {
    icon: Users,
    title: "Multiplayer System",
    desc: "Engage thousands of users with scalable multiplayer features.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    desc: "Supports multiple payment gateways with instant processing.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Track performance, users, and revenue in real-time.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Optimized for worldwide access with high availability.",
  },
];

const KasinoFeatures = () => {
  return (
    <section className="relative w-full py-20 md:py-24 bg-black overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-400 text-xs mb-3 tracking-wide">
            ● Features
          </p>

          <h2 className="text-[28px] md:text-[36px] font-bold text-white">
            Powerful Features for{" "}
            <span className="text-green-400">Modern Casino</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Everything you need to build and scale a next-generation casino platform.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-green-500/20"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-green-500/10 blur-2xl rounded-xl"></div>

                {/* Icon */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-green-500/10 text-green-400 mb-4">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="relative text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default KasinoFeatures;