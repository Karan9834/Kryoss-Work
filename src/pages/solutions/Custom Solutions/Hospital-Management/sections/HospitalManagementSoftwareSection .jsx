import React from "react";

const HospitalManagementSoftwareSection = () => {
  const features = [
    {
      title: "Hospital Information System",
      description:
        "Comprehensive HIS solutions to streamline clinical, administrative, and financial workflows while managing patient records, billing, and inventory efficiently.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M9 7h1m-1 4h1m4-4h1m-1 4h1" />
        </svg>
      ),
    },
    {
      title: "Practice Management",
      description:
        "Efficient patient registration, scheduling, billing, and administrative automation to simplify healthcare operations and staff coordination.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6M7 3h5l5 5v13H7z" />
        </svg>
      ),
    },
    {
      title: "Case Management",
      description:
        "Track patient journeys from admission to discharge with real-time updates, EMR integration, and automated notifications.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0" />
        </svg>
      ),
    },
    {
      title: "System Integrations",
      description:
        "Seamless integration with EHR, labs, PACS, and third-party systems using modern healthcare standards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342l6.632 3.316m0-6l-6.632-3.316" />
        </svg>
      ),
    },
    {
      title: "Architecture & Data",
      description:
        "Robust system architecture with secure databases to handle medical records and enterprise-level healthcare data.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
        </svg>
      ),
    },
    {
      title: "Patient Portal",
      description:
        "Enable patients to book appointments, access records, and communicate with doctors through secure portals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2 7-7 7 7 2 2" />
        </svg>
      ),
    },
    {
      title: "Analytics & Reporting",
      description:
        "Gain insights with real-time analytics on operations, patient care, financials, and performance metrics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6m4 13V10m4 9V4" />
        </svg>
      ),
    },
    {
      title: "Revenue Cycle Management",
      description:
        "Automate billing, insurance processing, and payment tracking to optimize revenue and reduce errors.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.5 0-3 .8-3 2s1.5 2 3 2 3 .8 3 2-1.5 2-3 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#0b0f19] py-20 font-['Inter'] overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* 🔥 Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 text-blue-300 px-4 py-1.5 rounded-full text-sm mb-4 border border-white/10">
            Healthcare Solutions
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Smart Hospital Management <br />
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powered by Technology
            </span>
          </h1>

          <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-400 mt-4 max-w-2xl mx-auto">
            Automate operations, improve patient care, and manage everything from one unified platform.
          </p>
        </div>

        {/* 🔥 Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 mb-4 group-hover:text-purple-400 transition">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-400">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HospitalManagementSoftwareSection;