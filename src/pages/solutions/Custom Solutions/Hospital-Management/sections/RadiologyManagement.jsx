import React from "react";
import radioImg from "../../../../../assets/Hospital Management/Radiology management_.jpg";

const RadiologyManagement = () => {
  return (
    <section className="w-full bg-white py-20 font-['Inter']">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] bg-blue-200 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={radioImg}
              alt="Radiology Management"
              className="w-full max-w-[500px] object-cover"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* 🔥 PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-blue-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
            Radiology Module
          </div>

          {/* HEADING */}
          <h2 className="text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-blue-600">Radiology</span> Management
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            An advanced radiology management platform designed to streamline daily workflows, improve collaboration, and provide actionable insights for better decision-making.
          </p>

          <p className="text-gray-500 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Integrated within the hospital management system, it enables efficient handling of radiology operations with smart and scalable features such as:
          </p>

          {/* FEATURES */}
          <ul className="space-y-3">
            {[
              "Centralized access to radiologist schedules and payroll data",
              "Improved communication via notifications, email, and SMS",
              "Interactive platform for managing radiology data",
              "Easy report access with patient details and prescriptions",
              "Flexible billing system with complete transparency",
              "Detailed tracking of test charges and financials",
              "Real-time collaboration through video consultations",
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

export default RadiologyManagement;