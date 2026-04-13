import React from "react";
import dashboardImg from "../../../assets/Enterprise-Product/dashboard.png";
import { Users, Clock, CreditCard, BarChart3, Shield, Sparkles } from "lucide-react";

const features = [
  { icon: Users, title: "Employee Management", desc: "Manage employee data and roles efficiently." },
  { icon: Clock, title: "Attendance Tracking", desc: "Monitor working hours and leave requests." },
  { icon: CreditCard, title: "Payroll System", desc: "Automate salaries and financial workflows." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track performance with real-time insights." },
  { icon: Shield, title: "Secure System", desc: "Enterprise-grade data security and compliance." },
  { icon: Sparkles, title: "Smart Automation", desc: "Reduce manual work with AI-powered tools." },
];

const DashboardShowcase = () => {
  return (
    <section className="w-full bg-white py-28 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* DASHBOARD IMAGE */}
        <div className="flex justify-center relative mb-20">

          {/* Subtle Glow */}
          <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full"></div>

          <img
            src={dashboardImg}
            alt="HRM Dashboard"
            className="
              relative
              w-full
              max-w-5xl
              rounded-xl
              shadow-2xl
              border border-gray-200
              -mb-24
            "
          />

        </div>

        {/* CONTENT BELOW IMAGE */}
        <div className="pt-24">

          {/* HEADING */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            {/* Optional Badge - Add if needed */}
            {/* <div className="inline-flex items-center justify-center mb-4">
              <div className="px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100">
                <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-purple-600">Dashboard</span>
              </div>
            </div> */}
            
            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-5">
              Everything You Need in One{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Powerful Dashboard
              </span>
            </h2>

            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
            <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Manage your workforce with a clean, intuitive, and powerful HR platform.
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    p-6 rounded-2xl
                    bg-white border border-gray-200
                    shadow-sm
                    hover:shadow-lg
                    transition duration-300
                  "
                >

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4
                                  bg-gradient-to-br from-purple-600 to-indigo-600">
                    <Icon className="text-white" size={20} />
                  </div>

                  {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                  <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
                  <p className="text-gray-600 text-[14px] md:text-[14px] font-normal leading-[1.6]">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardShowcase;