import React from "react";
import receptionImg from "../../../../../assets/Hospital-Manage/reception.png"; // update path

const ReceptionPortal = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 font-['Inter']">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          {/* 🔥 PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-purple-200 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
            Reception Module
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Reception</span> Portal
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            A comprehensive receptionist portal designed to simplify front desk operations, improve efficiency, and enhance patient experience. It enables seamless management of appointments, visitors, and communication across departments.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3">
            {[
              "Create and manage OPD appointments, visitors, and complaints",
              "Approve and track patient appointment requests easily",
              "Access patient details across OPD, IPD, and OT",
              "Manage payroll data with department-wise filtering",
              "Communicate via messages and emails with staff and patients",
              "Create and broadcast notices across departments",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
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

          {/* Image */}
          <div className="relative z-10 w-full max-w-[500px] h-full flex items-stretch">
            <img
              src={receptionImg}
              alt="Reception Portal"
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default ReceptionPortal;