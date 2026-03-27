import React from "react";
import { Shield, TrendingUp, BarChart3, Globe } from "lucide-react";

const About = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <p className="text-sm font-semibold text-yellow-600 mb-3 uppercase">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-900">Transforming Finance with</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Smart Analytics
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6">
            We are redefining how businesses leverage financial data by
            providing powerful analytics, real-time insights, and intelligent
            tools for smarter decisions.
          </p>

          <p className="text-gray-600 mb-8">
            Our platform combines advanced algorithms, scalable infrastructure,
            and intuitive design to empower organizations in a fast-paced
            financial ecosystem.
          </p>

          {/* Points */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <BarChart3 className="text-yellow-500 mt-1" />
              <p className="text-gray-700">
                Advanced analytics for accurate financial forecasting
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="text-yellow-500 mt-1" />
              <p className="text-gray-700">
                Secure and reliable data infrastructure
              </p>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="text-yellow-500 mt-1" />
              <p className="text-gray-700">
                Growth-focused insights for strategic decisions
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="text-yellow-500 mt-1" />
              <p className="text-gray-700">
                Global financial intelligence with real-time updates
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
              alt="visual"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 border">
            <p className="text-xs text-gray-500">Analytics Growth</p>
            <p className="font-bold text-gray-900">+35% Efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
