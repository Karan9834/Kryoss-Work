import React from "react";
import overview from "../../../../../assets/Application-Solutions/overview.png"

const OverviewSection = ({
  badge = "🎯 Niche Insights",
  title = "Exploring",
  highlight = "Specialized Products",
  descriptionParagraphs = [
    "Start-ups represent entrepreneurial ventures focused on delivering specific products or services that solve authentic market challenges. These enterprises typically launch with limited capital and flexible operational approaches.",
    "During early stages, founders primarily self-fund operations before approaching family circles, professional networks, angel investors, or venture capital firms for external financing. While creativity powers start-up momentum, sustained success hinges on scaling capabilities, regulatory compliance, and precise implementation."
  ],
  stats = [
    { id: 1, text: "Bootstrapped Friendly" },
    { id: 2, text: "Investor Ready" },
    { id: 3, text: "Scalable Growth" }
  ],
  badge2 = "Niche Platforms",
  badge2Val = "1,000+"
}) => {
  return (
    <section className="relative w-full bg-gradient-to-r from-purple-50 via-white to-indigo-50 py-16 md:py-20 overflow-hidden">

      {/* Stronger purple glassy background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-transparent to-indigo-600/15"></div>

      {/* Additional dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent"></div>

      {/* Glassy decorative circles - more opaque */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="relative">
            {/* Content overlay glow */}
            <div className="absolute -inset-4 bg-purple-500/5 rounded-2xl blur-xl -z-10"></div>

            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-200/80 backdrop-blur-sm border border-purple-300/50 mb-6 shadow-sm">
              <span className="text-xs font-normal text-purple-800 tracking-wide">
                {badge}
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-4">
              {title} <span className="text-purple-700">{highlight}</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mt-6">
              {descriptionParagraphs.map((para, index) => (
                <p key={index} className="text-sm md:text-base font-normal text-gray-800 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Stats with glassy cards */}
            <div className="mt-8 flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex items-center gap-2 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200/50 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with Enhanced Glassy Effect */}
          <div className="relative flex justify-center md:justify-end">

            {/* Multiple glassy background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-3xl blur-2xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-3xl blur-3xl"></div>

            {/* Main glassy image container with stronger overlay */}
            <div className="relative bg-white/40 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/60">

              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-2xl"></div>

              {/* Strong glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-xl -z-10"></div>

              {/* Image */}
              <img
                src={overview}
                alt="Start-up Growth Illustration"
                className="relative w-full max-w-md lg:max-w-lg h-auto rounded-xl shadow-2xl"
              />

              {/* Stronger glassy overlay on image */}
              <div className="absolute inset-5 rounded-xl bg-gradient-to-t from-purple-600/30 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-5 rounded-xl bg-gradient-to-r from-indigo-500/20 to-transparent pointer-events-none"></div>

              {/* Decorative glassy elements - more prominent */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/40 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-500/40 rounded-full blur-xl"></div>

              {/* Floating badge on image - glassier */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-lg px-4 py-2 shadow-xl border border-purple-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">{badge2}</span>
                  <span className="text-xs font-bold text-purple-700">{badge2Val}</span>
                </div>
              </div>

              {/* Top right floating badge */}
              <div className="absolute top-6 right-6 bg-purple-600/90 backdrop-blur-md rounded-lg px-3 py-1.5 shadow-xl border border-purple-400/50">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-white">🔥</span>
                  <span className="text-xs font-semibold text-white">Growing Fast</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OverviewSection;