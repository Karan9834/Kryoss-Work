import React from "react";
import pathologyImg from "../../../../../assets/Hospital-Manage/pathology.png"; // update path

const PathologyManagement = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 font-['Inter']">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          {/* 🔥 PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-purple-200 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
            Pathology Module
          </div>

          {/* HEADING */}
          <h2 className="text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-purple-600">Pathology</span> Management
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Our integrated pathology lab management system is designed to streamline and manage all critical lab operations efficiently. From test bookings to real-time consultations, it enhances productivity while ensuring accuracy and speed.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3">
            {[
              "Add and manage pathology tests for patients",
              "Maintain patient history and download test reports",
              "Conduct live video consultations and manage sessions",
              "Access leave management and payroll information",
              "Communicate seamlessly via email and SMS",
              "Track, view, and download pathology reports instantly",
              "Manage patient lists and upload lab data easily",
              "Update and control test pricing across departments",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center h-full">

          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] bg-purple-200 blur-3xl rounded-full"></div>

          {/* Image wrapper ensures SAME HEIGHT */}
          <div className="relative z-10 w-full max-w-[500px] h-full flex items-stretch">
            
            <img
              src={pathologyImg}
              alt="Pathology Management"
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default PathologyManagement;