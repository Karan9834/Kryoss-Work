import React from "react";
import {
  Shield,
  TrendingUp,
  PieChart,
  Globe,
  Clock,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: PieChart,
      title: "Portfolio Intelligence",
      desc: "Advanced tools to manage and optimize your investments efficiently.",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      desc: "Track and predict financial growth with real-time insights.",
    },
    {
      icon: Shield,
      title: "Secure Wealth",
      desc: "Bank-grade security ensures your assets are always protected.",
    },
    {
      icon: Globe,
      title: "Global Investments",
      desc: "Access and manage investments across global markets.",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      desc: "Continuous tracking of your financial portfolio anytime.",
    },
    {
      icon: Zap,
      title: "Real-Time Data",
      desc: "Instant updates and analytics for smarter decision making.",
    },
  ];

  return (
    <section className="relative bg-[#040608] px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-cyan-400 font-medium mb-2">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Smart Features for Wealth Management
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Powerful tools designed to grow, protect, and optimize your wealth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative rounded-xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-1"
              >
                
                {/* glass glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-500/10">
                  <Icon className="text-cyan-400 w-6 h-6" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm">
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

export default Features;