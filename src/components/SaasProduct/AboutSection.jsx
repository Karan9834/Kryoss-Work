import React from "react";
import saasabout from "../../assets/saas products 1/What is an AIContent Generator.jpg"

const AboutSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Clean White Background - No SVG Waves */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30"></div>

      {/* Subtle Dot Pattern Instead of Waves */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

      {/* Soft Gradient Blobs - Abstract Shapes, No Waves */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-50/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-50/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header with Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100/50 shadow-sm backdrop-blur-sm">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Us
              </span>
            </div>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            Redefining How Businesses
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Scale Digitally</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Image */}
          <div className="relative group order-2 lg:order-1">
            {/* Premium Frame Effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 pointer-events-none"></div>
              <img
                src={saasabout}
                alt="Team collaboration and analytics"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Elements - Circles Instead of Waves */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-purple-100/60 bg-white/40 backdrop-blur-sm"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-blue-100/60 bg-white/40 backdrop-blur-sm"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Subheading - Updated: text-[24px] md:text-[28px] font-bold leading-[1.3] */}
            <h3 className="text-[24px] md:text-[28px] font-bold leading-[1.3] text-gray-800">
              Built for Modern Teams
            </h3>

            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
            <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              We believe that great software should empower teams to do their best work.
              Our platform combines powerful analytics, seamless automation, and intuitive
              design to create an experience that your entire team will love.
            </p>

            <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              From startups to enterprises, thousands of organizations trust us to handle
              their most critical operations. We're committed to continuous innovation,
              ensuring you always have access to cutting-edge tools that drive real results.
            </p>

            {/* Feature Highlights - Updated typography */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 group/item">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-1 group-hover/item:scale-110 transition-transform"></div>
                <div>
                  {/* Feature Title - Updated: text-[16px] font-semibold */}
                  <h4 className="font-semibold text-[16px] text-gray-800">Intelligent Insights</h4>
                  {/* Feature Description - Updated: text-[13px] md:text-[14px] font-normal */}
                  <p className="text-[13px] md:text-[14px] font-normal text-gray-500">Data-driven decisions</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-1 group-hover/item:scale-110 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-[16px] text-gray-800">Seamless Integration</h4>
                  <p className="text-[13px] md:text-[14px] font-normal text-gray-500">Connect your stack</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-1 group-hover/item:scale-110 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-[16px] text-gray-800">Enterprise Security</h4>
                  <p className="text-[13px] md:text-[14px] font-normal text-gray-500">Bank-grade protection</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-1 group-hover/item:scale-110 transition-transform"></div>
                <div>
                  <h4 className="font-semibold text-[16px] text-gray-800">24/7 Support</h4>
                  <p className="text-[13px] md:text-[14px] font-normal text-gray-500">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Separator - No Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default AboutSection;