import React from "react";
import { Shield, TrendingUp, PieChart, Globe } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <p className="text-sm font-semibold text-cyan-600 mb-3 uppercase">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-900">Empowering Wealth Through</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Intelligent Management
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6">
            We help individuals and institutions grow, manage, and protect their
            wealth with advanced analytics, strategic insights, and innovative
            financial solutions.
          </p>

          <p className="text-gray-600 mb-8">
            Our platform combines data-driven intelligence with intuitive tools,
            enabling smarter investment decisions and long-term financial
            success.
          </p>

          {/* Points */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <PieChart className="text-cyan-500 mt-1" />
              <p className="text-gray-700">
                Data-driven portfolio management and optimization
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="text-cyan-500 mt-1" />
              <p className="text-gray-700">
                Secure and transparent financial ecosystem
              </p>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="text-cyan-500 mt-1" />
              <p className="text-gray-700">
                Growth-focused strategies backed by analytics
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="text-cyan-500 mt-1" />
              <p className="text-gray-700">
                Global investment insights and real-time updates
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://picsum.photos/1200/800"
            alt="visual"
            className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
