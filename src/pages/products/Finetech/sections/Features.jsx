import React from "react";
import {
  Shield,
  Zap,
  BarChart3,
  TrendingUp,
  Globe,
  Clock,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Gain deep financial insights with powerful data visualization tools.",
    },
    {
      icon: Zap,
      title: "Real-Time Data",
      desc: "Track financial performance with instant updates and live dashboards.",
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      desc: "Enterprise-level security ensures safe and reliable data handling.",
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      desc: "Identify opportunities and optimize strategies for maximum returns.",
    },
    {
      icon: Globe,
      title: "Global Markets",
      desc: "Access worldwide financial data with seamless integration.",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      desc: "Continuous tracking of your financial ecosystem without interruption.",
    },
  ];

  return (
    <section className="relative bg-[#050505] px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-yellow-400 font-medium mb-2">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Powerful Tools for Financial Analytics
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Everything you need to analyze, optimize, and scale your financial operations.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative rounded-xl p-6 bg-white/5 border border-white/10 hover:border-yellow-400/40 transition duration-300 hover:-translate-y-1"
              >
                
                {/* subtle glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-500/10">
                  <Icon className="text-yellow-400 w-6 h-6" />
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