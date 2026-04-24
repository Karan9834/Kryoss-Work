import React from "react";
import overview from '../../../../assets/custom-software/over.jpg'

const WhatIsCustomSoftware = ({
  badge = "📊 Product Overview",
  title = "Snapshot of",
  highlight = "Our Products",
  descriptionParagraphs = [
    "Start-ups represent entrepreneurial ventures focused on delivering specific products or services that solve authentic market challenges. These enterprises typically launch with limited capital and flexible operational approaches.",
    "During early stages, founders primarily self-fund operations before approaching family circles, professional networks, angel investors, or venture capital firms for external financing. While creativity powers start-up momentum, sustained success hinges on scaling capabilities, regulatory compliance, and precise implementation."
  ],
  badge2 = "Active Users",
  badge2Val = "1M+"
}) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-rose-50 via-pink-50 to-white py-20 md:py-28 overflow-hidden">

      {/* Modern diagonal background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-purple-100/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/40 to-transparent"></div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6b21a5 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT CONTENT - Modern Layout */}
          <div className="relative">

            {/* Badge with arrow */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-gradient-to-r from-purple-600 to-transparent"></div>
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                {badge}
              </span>
            </div>

            {/* Section Heading with modern styling */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {highlight}
                  </span>
                  {/* Animated underline */}
                  <svg className="absolute bottom-0 left-0 w-full h-3 -z-0" preserveAspectRatio="none" viewBox="0 0 200 10">
                    <path d="M0 5 Q 50 10, 100 5 T 200 5" stroke="url(#gradient)" fill="none" strokeWidth="2" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="100%" stopColor="#4f46e5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
            </div>

            {/* Description with modern styling */}
            <div className="space-y-5 mb-10">
              {descriptionParagraphs.map((para, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>

          </div>

          {/* RIGHT IMAGE - Modern Design */}
          <div className="relative">

            {/* Main image container with modern styling */}
            <div className="relative">

              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              {/* Image card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">

                {/* Image */}
                <img
                  src={overview}
                  alt="Start-up Growth Illustration"
                  className="relative w-full h-auto"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default WhatIsCustomSoftware;