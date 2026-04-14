import React from "react";
import pharmacyImg from "../../../../../assets/Hospital-Manage/pharmacy.png"; // update path

const PharmacyManagement = () => {
  return (
    <section className="w-full bg-white py-20 font-['Inter']">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center h-full">

          {/* Glow */}
          <div className="absolute w-[250px] h-[250px] bg-blue-200 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="relative z-10 w-full max-w-[500px] h-full flex items-stretch">
            <img
              src={pharmacyImg}
              alt="Pharmacy Management"
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">

          {/* 🔥 PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-blue-100 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
            Pharmacy Module
          </div>

          {/* HEADING */}
          <h2 className="text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-blue-600">Pharmacy</span> Management
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            A smart and secure pharmacy management system designed to streamline daily operations, improve inventory control, and enhance efficiency for pharmacists.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3">
            {[
              "Manage medicine categories and add medicines easily",
              "Handle billing, stock updates, and quantity tracking",
              "Receive alerts for reports and inventory updates",
              "View and download billing and stock reports",
              "Track expired medicines and maintain compliance",
              "Manage supplier purchases with automated costs",
              "Import stock using CSV/Excel files",
              "Enable live consultation with patients",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
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

export default PharmacyManagement;