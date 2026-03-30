import React from "react";
import {
  Shield,
  Zap,
  Globe,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Infrastructure",
      desc: "Enterprise-grade security ensuring data protection across all operations.",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      desc: "Instant insights and updates powered by high-speed processing systems.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Expand your business across multiple markets with seamless scalability.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "Continuous uptime and monitoring for uninterrupted business operations.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      desc: "Built with intuitive experiences tailored for modern enterprises.",
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      desc: "Advanced analytics to drive strategic decisions and growth.",
    },
  ];

  return (
    <section className="relative bg-[#050505] px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-green-400 font-medium mb-2">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Powerful Features for Global Businesses
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Designed to scale, secure, and accelerate your business growth worldwide.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative rounded-xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-green-400/40 transition duration-300 hover:-translate-y-1"
              >
                
                {/* subtle glass glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-green-500/10">
                  <Icon className="text-green-400 w-6 h-6" />
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