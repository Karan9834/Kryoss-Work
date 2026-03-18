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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Everything You Need in One{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Powerful Dashboard
              </span>
            </h2>

            <p className="text-gray-500 text-lg">
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

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm leading-relaxed">
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