import React from "react";
import {
  Shield,
  Zap,
  BarChart3,
  TrendingUp,
  Globe,
  Clock,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      desc: "Bank-level security ensuring your financial data is always protected.",
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      desc: "Access live financial data and analytics instantly without delay.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Powerful tools to visualize and interpret financial performance.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      desc: "Strategies and insights designed to maximize your business growth.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Seamless access to financial markets across the world.",
    },
    {
      icon: Clock,
      title: "Always Available",
      desc: "24/7 monitoring and support for uninterrupted operations.",
    },
  ];

  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-yellow-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-amber-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-yellow-600 font-medium mb-2">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Built for Smarter Financial Decisions
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine advanced technology, security, and real-time insights to deliver unmatched financial intelligence.
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
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-100 group-hover:bg-yellow-500 transition">
                  <Icon className="w-6 h-6 text-yellow-600 group-hover:text-black transition" />
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