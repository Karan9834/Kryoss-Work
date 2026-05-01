import React from "react";
import doctorImg from "../../../../../assets/Hospital Management/Doctor portal.jpg";

const DoctorPortal = () => {
  return (
    <section className="w-full bg-white py-20 font-['Inter']">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">

          {/* Soft Glow */}
          <div className="absolute w-[250px] h-[250px] bg-blue-200 blur-3xl rounded-full"></div>

          {/* Image Card */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={doctorImg}
              alt="Doctor Portal"
              className="w-full max-w-[500px] object-cover"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* 🔥 PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-blue-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
            Doctor Module
          </div>

          {/* HEADING */}
          <h2 className="text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="leading-[1.2] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Doctor
            </span>{" "}
            Portal
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Our hospital management platform provides a powerful Doctor Portal designed to enhance patient care, streamline workflows, and improve operational efficiency — all within a clean and intuitive interface.
          </p>

          <p className="text-gray-500 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            The system is fully customizable and includes essential tools to help doctors manage their daily activities effectively:
          </p>

          {/* FEATURES LIST */}
          <ul className="space-y-3">

            {[
              "Smart appointment scheduling for efficient patient management",
              "Seamless handling of OPD, IPD, and OT workflows",
              "Digital prescription tools for faster treatment",
              "Optimized bed allocation to reduce wait times",
              "Easy patient admission and real-time updates",
              "Integrated reporting for better decisions",
              "Access to payroll and administrative data",
              "Intelligent scheduling for availability management",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">

                {/* Bullet */}
                <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>

                {item}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </section>
  );
};

export default DoctorPortal;