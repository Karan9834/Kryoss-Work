import React from "react";

const modules = [
  { title: "Account Management", desc: "Track all financial transactions securely with full transparency." },
  { title: "School Admin", desc: "Manage operations, data, and administrative workflows efficiently." },
  { title: "Parents Portal", desc: "Let parents monitor attendance and student performance in real-time." },
  { title: "Student Data", desc: "Organize academic records and student performance in one place." },
  { title: "Fee Collection", desc: "Enable seamless online payments with automatic receipts." },
  { title: "Employee Info", desc: "Manage staff lifecycle, payroll, and employee data." },
  { title: "Certificates", desc: "Generate academic and performance-based certificates easily." },
  { title: "Timetable Plan", desc: "Create and manage schedules for smooth operations." },
  { title: "Inventory", desc: "Track assets, equipment, and stock with smart alerts." },
];

const ModulesSection = () => {
  return (
    <section className="w-full py-16 font-['Inter'] relative overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 via-gray-100/80 to-cyan-200/50" />
      <div className="absolute inset-0 bg-black/5" />

      {/* GLOW */}
      <div className="absolute top-10 -left-20 w-64 h-64 bg-orange-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-10 -right-20 w-64 h-64 bg-cyan-300/30 blur-3xl rounded-full" />

      {/* 🔥 FIXED CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="max-w-2xl mb-10">

          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md text-orange-600 px-3 py-1 rounded-full text-xs font-medium mb-3 border border-white/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
            Modules
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Modules Of{" "}
            <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
              School Management System
            </span>
          </h2>

          <p className="text-gray-700 text-sm">
            Powerful modules designed to streamline operations and improve efficiency.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {modules.map((module, index) => (
            <div
              key={index}
              className="group p-4 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40 hover:scale-[1.02]"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white text-xs font-semibold mb-3">
                {index + 1}
              </div>

              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {module.title}
              </h3>

              <p className="text-gray-600 text-xs leading-relaxed">
                {module.desc}
              </p>

              <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ModulesSection;