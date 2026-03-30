import React from "react";
import { Sparkles, TrendingUp, Shield, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-orange-500" />
            <span className="text-sm font-semibold text-orange-600 uppercase">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-900">Redefining the Future of</span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Digital News & Insights
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6">
            We are building a next-generation news platform that combines real-time data, 
            artificial intelligence, and expert journalism to deliver accurate, fast, and 
            meaningful information to modern readers.
          </p>

          <p className="text-gray-600 mb-8">
            From breaking news to deep insights, our mission is to empower users with 
            knowledge that matters — without noise, bias, or delay.
          </p>

          {/* Points */}
          <div className="space-y-4">
            
            <div className="flex items-start gap-3">
              <TrendingUp className="text-orange-500 mt-1" />
              <p className="text-gray-700">
                Real-time analytics powered by AI-driven insights
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="text-orange-500 mt-1" />
              <p className="text-gray-700">
                Verified and trusted journalism with high accuracy
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="text-orange-500 mt-1" />
              <p className="text-gray-700">
                Global coverage with localized perspectives
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
            alt="about"
            className="rounded-2xl shadow-xl w-full object-cover"
          />

          {/* floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 border">
            <p className="text-xs text-gray-500">Trusted by</p>
            <p className="font-bold text-gray-900">100K+ Readers</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;