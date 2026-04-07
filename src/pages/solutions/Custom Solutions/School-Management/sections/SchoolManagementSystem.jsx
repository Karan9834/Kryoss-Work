import React from "react";
import schoolImg from "../../../../../assets/School-Manage/management.png";

const SchoolManagementSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-orange-50 via-white to-cyan-50 py-24 font-['Inter']">

      <div className="w-full px-6 lg:px-16 xl:px-24 grid md:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-orange-300/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="relative z-10 w-full max-w-[650px]">
            <img
              src={schoolImg}
              alt="School Management"
              className="w-full object-contain rounded-2xl"
            />
          </div>

        </div>

        {/* 🔥 RIGHT CONTENT */}
        <div className="flex flex-col justify-center max-w-xl">

          {/* PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-cyan-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-5 border border-orange-100 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
            School Solution
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-orange-600">School</span> Management Software
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
              Development Platform
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            Transform the way your institution operates with a modern,
            all-in-one school management system built to simplify academic
            and administrative workflows.
          </p>

          <p className="text-gray-500 mb-8 leading-relaxed">
            Manage admissions, attendance, examinations, finance, payroll,
            and communication — all from one unified digital platform.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "Student & Staff Management",
              "Attendance & Timetable",
              "Online Examinations",
              "Fees & Payroll System",
              "Library Management",
              "Parent Communication",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
              Let's Talk →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SchoolManagementSection;