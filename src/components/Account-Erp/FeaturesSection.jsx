import React from "react";
import { BarChart3, Shield, Zap, Layers, Database, Cpu } from "lucide-react";

const FeaturesDark = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Gain real-time insights into your business performance with powerful dashboards.",
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      desc: "Enterprise-grade security with encryption and compliance at every level.",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      desc: "Automate workflows and eliminate repetitive manual tasks effortlessly.",
    },
    {
      icon: Layers,
      title: "Modular System",
      desc: "Customize your ERP with flexible modules tailored to your business needs.",
    },
    {
      icon: Database,
      title: "Centralized Data",
      desc: "Manage all your data in one place with seamless integrations.",
    },
    {
      icon: Cpu,
      title: "High Performance",
      desc: "Optimized for speed and scalability as your business grows.",
    },
  ];

  return (
    <section className="relative py-32 bg-[#0B1220] overflow-hidden">

      {/* 🔝 TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,32,158,28,70.36-5,136.33-33,206.8-37C438.64,32,512.34,53,583,72s141.64,28,212.2,14C872,71,938,37,1008,30c63.64-6,127.36,10,192,26V0Z"
            className="fill-blue-50"
          />
        </svg>
      </div>

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
              Modern ERP
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to manage and scale your business efficiently.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
                  <Icon className="text-white w-6 h-6" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-xl"></div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 🔻 BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,32,158,28,70.36-5,136.33-33,206.8-37C438.64,32,512.34,53,583,72s141.64,28,212.2,14C872,71,938,37,1008,30c63.64-6,127.36,10,192,26V0Z"
            className="fill-blue-50"
          />
        </svg>
      </div>

    </section>
  );
};

export default FeaturesDark;