import React from "react";

const features = [
  {
    title: "Multilingual Services",
    desc: "Support multiple languages so users from different regions can easily access the platform.",
    icon: "🌐",
  },
  {
    title: "School Bus Tracking",
    desc: "Track buses in real-time with GPS for better safety and visibility.",
    icon: "🚍",
  },
  {
    title: "Homework Entry",
    desc: "Students and parents can track assignments and pending homework easily.",
    icon: "📝",
  },
  {
    title: "Library Management",
    desc: "Manage books, records, and issued materials efficiently.",
    icon: "📚",
  },
  {
    title: "Managing Staff",
    desc: "Track attendance, leaves, and staff data with ease.",
    icon: "👥",
  },
  {
    title: "Fee Management",
    desc: "Simplify fee collection with automated tracking and reminders.",
    icon: "💰",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-20 font-['Inter'] relative overflow-hidden bg-white">

      {/* TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500" />

      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* GLOW */}
      <div className="absolute top-40 -left-32 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-40 -right-32 w-80 h-80 bg-cyan-200/30 blur-3xl rounded-full" />

      {/* 🔥 FIXED CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-12">

          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-orange-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
            Salient Features
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Salient Features Of Our{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
              School Management System
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Designed to streamline school operations and enhance productivity with smart automation.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-cyan-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-cyan-500/5 group-hover:to-orange-500/5 transition-all duration-500" />

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="p-6">

                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-cyan-500 shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600">
                  {feature.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;