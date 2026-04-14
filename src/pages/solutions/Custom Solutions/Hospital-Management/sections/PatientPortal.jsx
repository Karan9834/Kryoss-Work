import React from "react";
import patientImg from "../../../../../assets/Hospital-Manage/patient.png"; // update path

const PatientPortal = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 font-['Inter']">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* 🔥 PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-purple-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
            Patient Module
          </div>

          {/* HEADING */}
          <h2 className="text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-purple-600">Patient</span> Portal
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Provide patients with a seamless digital experience through an interactive portal designed to enhance satisfaction, improve engagement, and ensure transparency across healthcare services.
          </p>

          <p className="text-gray-500 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Our modern patient portal simplifies access to essential healthcare services and empowers patients with features such as:
          </p>

          {/* FEATURES */}
          <ul className="space-y-3">
            {[
              "Easy online appointment booking",
              "Real-time tracking of appointments and status updates",
              "Access to digital prescriptions and medication details",
              "Monitoring OPD visits, IPD treatments, and history",
              "View doctor profiles and communicate directly",
              "Access reports and administrative records",
              "Download invoices and billing details",
              "Get notifications, updates, and documents in one place",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">

                {/* Bullet */}
                <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>

                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] bg-purple-200 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={patientImg}
              alt="Patient Portal"
              className="w-full max-w-[500px] object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default PatientPortal;