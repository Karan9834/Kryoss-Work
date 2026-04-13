import React from "react";
import hrmImage from "../../../assets/Enterprise-Product/hrmabout.png";

const features = [
  {
    title: "Employee Lifecycle Management",
    desc: "Manage onboarding, promotions, and employee records in one unified system.",
  },
  {
    title: "Attendance & Leave Tracking",
    desc: "Track working hours, leaves, and shifts with real-time updates.",
  },
  {
    title: "Payroll Automation",
    desc: "Automate salaries, tax deductions, and payslip generation seamlessly.",
  },
  {
    title: "Performance Monitoring",
    desc: "Evaluate employee performance using analytics and KPI tracking.",
  },
  {
    title: "Recruitment & Hiring",
    desc: "Streamline hiring workflows with applicant tracking systems.",
  },
  {
    title: "Data Security & Compliance",
    desc: "Ensure secure HR data with enterprise-grade protection.",
  },
  {
    title: "AI-Powered Insights",
    desc: "Use smart analytics to improve productivity and decision-making.",
  },
];

const StickyFeatures = () => {
  return (
    <section className="w-full bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Optional Section Header - Add if needed */}
        {/* <div className="text-center mb-12">
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            Powerful <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">HR Features</span>
          </h2>
          <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Everything you need to manage your workforce efficiently
          </p>
        </div> */}

        {/* CONTAINER */}
        <div className="grid md:grid-cols-2 gap-16 h-[620px] overflow-hidden">

          {/* LEFT (SCROLLABLE CARDS) */}
          <div className="overflow-y-auto pr-4 space-y-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="
                  p-6 rounded-2xl
                  bg-white border border-gray-200
                  shadow-sm
                  hover:shadow-md
                  transition duration-300
                "
              >
                {/* Accent Line */}
                <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4"></div>

                {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
                <p className="text-gray-600 text-[14px] md:text-[14px] font-normal leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* RIGHT (BIG IMAGE - 50% AREA) */}
          <div className="relative flex items-center justify-center">

            <div className="sticky top-10 w-full h-full flex items-center justify-center">

              <img
                src={hrmImage}
                alt="HRM Preview"
                className="
                  w-full 
                  max-w-[650px] 
                  h-auto 
                  object-contain
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default StickyFeatures;