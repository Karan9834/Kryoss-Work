import React, { useState } from "react";
import {
  Zap,
  Brain,
  BarChart3,
  TrendingUp,
  Wallet,
  Shield,
  Database,
  Users,
  Clock,
  Globe,
  Award,
  Sparkles,
} from "lucide-react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Process transactions instantly with sub-second latency.",
      stat: "< 100ms",
      statLabel: "Latency",
      gradient: "from-sky-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced ML algorithms predict trends.",
      stat: "99.9%",
      statLabel: "Accuracy",
      gradient: "from-emerald-500 to-sky-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Custom dashboards with real-time visualization.",
      stat: "50+",
      statLabel: "Reports",
      gradient: "from-sky-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "256-bit encryption & multi-factor authentication.",
      stat: "256-bit",
      statLabel: "Encryption",
      gradient: "from-emerald-500 to-sky-500",
    },
    {
      icon: Database,
      title: "Unified Platform",
      description: "Single source of truth across operations.",
      stat: "100%",
      statLabel: "Integration",
      gradient: "from-sky-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description: "Role-based permissions for teams.",
      stat: "Unlimited",
      statLabel: "Users",
      gradient: "from-emerald-500 to-sky-500",
    },
  ];

  const logos = [
    "https://logo.clearbit.com/google.com",
    "https://logo.clearbit.com/amazon.com",
    "https://logo.clearbit.com/microsoft.com",
    "https://logo.clearbit.com/netflix.com",
    "https://logo.clearbit.com/ibm.com",
    "https://logo.clearbit.com/spotify.com",
  ];

  return (
    <section className="relative bg-gradient-to-b from-sky-950 via-sky-900 to-blue-950 px-6 md:px-12 py-16 md:py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 uppercase">
              Powerful Features
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
              Scale Your Business
            </span>
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition`} />

                {/* Card */}
                <div className={`relative backdrop-blur-lg rounded-xl p-5 border transition ${
                  isHovered
                    ? "border-sky-400/40 bg-sky-950/60"
                    : "border-sky-500/20 bg-sky-950/40"
                }`}>
                  
                  {/* Icon */}
                  <div className="mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-sky-500/10">
                    <Icon className="text-sky-400 w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-400 text-sm mb-3">
                    {feature.description}
                  </p>

                  {/* Stat */}
                  <div className="text-sm text-emerald-400 font-semibold">
                    {feature.stat}{" "}
                    <span className="text-gray-500">
                      {feature.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;