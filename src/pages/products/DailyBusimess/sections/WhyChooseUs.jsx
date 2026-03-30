import React from "react";
import {
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      desc: "Built with enterprise-grade security ensuring complete data protection.",
    },
    {
      icon: Zap,
      title: "High Performance",
      desc: "Optimized systems delivering real-time insights with zero delay.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Operate across multiple countries with seamless scalability.",
    },
    {
      icon: Users,
      title: "Trusted by Businesses",
      desc: "Used by thousands of companies worldwide for growth and insights.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      desc: "Tools and analytics designed to accelerate your business growth.",
    },
    {
      icon: Clock,
      title: "Always Available",
      desc: "24/7 uptime ensuring your business never stops.",
    },
  ];

  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-green-600 font-medium mb-2">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Built for Modern Global Businesses
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine technology, scalability, and reliability to deliver unmatched business solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                
                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-500 transition">
                  <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm">
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

export default WhyChooseUs;