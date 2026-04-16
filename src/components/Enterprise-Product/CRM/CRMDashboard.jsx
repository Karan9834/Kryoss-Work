import React from "react";
import crmDashboard from "../../../assets/Enterprise-Product/crmdashboard.jpg";

import {
  BarChart3,
  Users,
  Activity,
  Zap,
  Layers,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Real-time Sales Tracking",
    icon: BarChart3,
  },
  {
    title: "Lead & Contact Management",
    icon: Users,
  },
  {
    title: "Advanced Analytics Dashboard",
    icon: Activity,
  },
  {
    title: "Automated Follow-ups",
    icon: Zap,
  },
  {
    title: "Customizable Pipelines",
    icon: Layers,
  },
  {
    title: "Team Performance Insights",
    icon: TrendingUp,
  },
];

const CRMDashboard = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-blue-50 via-white to-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          {/* Optional Badge - Add if needed */}
          {/* <div className="inline-flex items-center justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-blue-600">Dashboard</span>
            </div>
          </div> */}

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            Powerful CRM Dashboard for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Smarter Decisions
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-xl mx-auto">
            Track sales, manage leads, and analyze performance — all from one clean dashboard.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mb-14">
          <img
            src={crmDashboard}
            alt="CRM Dashboard"
            className="
              w-full max-w-3xl 
              rounded-3xl 
              shadow-[0_20px_60px_rgba(37,99,235,0.15)]
            "
          />
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group relative p-6 rounded-xl 
                  border border-blue-100 
                  bg-white
                  overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_35px_rgba(37,99,235,0.15)]
                "
              >
                {/* HOVER GLOW */}
                <div className="
                  absolute inset-0 
                  bg-gradient-to-br from-blue-500/10 to-indigo-500/10 
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                "></div>

                {/* ICON */}
                <div className="
                  relative z-10 mb-4 w-11 h-11 flex items-center justify-center
                  rounded-lg bg-blue-50
                  group-hover:bg-gradient-to-br 
                  group-hover:from-blue-500 group-hover:to-indigo-600
                  transition
                ">
                  <Icon
                    size={20}
                    className="text-blue-600 group-hover:text-white transition"
                  />
                </div>

                {/* Card Title - Updated: text-[15px] md:text-[16px] font-semibold */}
                <h3 className="
                  relative z-10 font-semibold text-[15px] md:text-[16px] text-gray-800 
                  group-hover:text-blue-700 transition
                ">
                  {item.title}
                </h3>

                {/* ANIMATED LINE */}
                <div className="
                  relative z-10 mt-3 h-[2px] w-0 
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  group-hover:w-12 transition-all duration-300
                "></div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default CRMDashboard;