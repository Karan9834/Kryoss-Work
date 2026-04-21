import React from "react";
import adminImg from "../../../../../assets/Hospital Management/Admin panel.jpg";

const AdminPanel = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 font-['Inter']">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          {/* 🔥 PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-purple-200 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
            Admin Module
          </div>

          {/* HEADING */}
          <h2 className="text-gray-900 mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-purple-600">Admin</span> Panel
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            The Admin Panel serves as the central control system for managing hospital operations, ensuring smooth coordination, compliance, and efficient decision-making across all departments.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3">
            {[
              "Manage departments, users, and their current status",
              "Assign roles and permissions based on responsibilities",
              "Access real-time dashboards with operational insights",
              "Monitor patient data across departments",
              "View and manage appointments with full details",
              "Generate and track invoices, bills, and payments",
              "Track medicine inventory and stock details",
              "Manage payrolls department-wise",
              "Configure system settings and permissions",
              "Create and broadcast notifications",
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

          {/* Image */}
          <div className="relative z-10 w-full max-w-[500px] h-full flex items-stretch">
            <img
              src={adminImg}
              alt="Admin Panel"
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default AdminPanel;