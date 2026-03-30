import React from "react";
import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Headphones,
  BarChart3,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized workflows for faster execution and delivery.",
    },
    {
      id: 2,
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced protection with role-based access control.",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Gain insights with real-time data and reports.",
    },
    {
      id: 4,
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with real-time communication tools.",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Reach",
      description: "Scale your operations worldwide with ease.",
    },
    {
      id: 6,
      icon: Rocket,
      title: "Scalable System",
      description: "Grow without limits using cloud infrastructure.",
    },
    {
      id: 7,
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support whenever you need help.",
    },
    {
      id: 8,
      icon: BarChart3,
      title: "Advanced Reports",
      description: "Detailed performance tracking and insights.",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">

      {/* SAME HERO BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-purple-900/40 to-blue-900/30"></div>

      {/* GRID PATTERN (same as hero) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Powerful{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              Features
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Everything you need to scale and dominate your workflow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >

                {/* GLASS HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* ICON */}
                <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mb-5 group-hover:scale-110 transition">
                  <Icon size={26} className="text-white" />
                </div>

                {/* TITLE */}
                <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-red-400 transition">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="relative text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* BORDER GLOW */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition"></div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;