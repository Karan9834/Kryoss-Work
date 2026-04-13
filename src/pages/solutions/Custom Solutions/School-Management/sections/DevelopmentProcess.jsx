import React from "react";
import processImg from "../../../../../assets/School-Manage/process.png";

const DevelopmentProcess = () => {
  return (
    <section className="w-full bg-white py-20 font-['Inter']">

      {/* 🔥 FIXED CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10 items-center">

        {/* 🔥 LEFT CONTENT */}
        <div className="flex flex-col justify-center max-w-[520px]">

          {/* PILL */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-cyan-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-5 border border-orange-100 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
            Development Process
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            <span className="text-orange-600">Our School</span> Management Software
            <br />
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>

          {/* LIST */}
          <ul className="space-y-3">
            {[
              "Analyze client requirements and future goals",
              "Create a complete roadmap from start to deployment",
              "Integrate secure third-party payment systems",
              "Develop scalable and high-performance solutions",
              "Perform rigorous testing for reliability",
              "Deploy with ongoing support and maintenance",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-cyan-300/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="relative z-10 w-full max-w-[520px]">
            <img
              src={processImg}
              alt="Development Process"
              className="w-full object-contain rounded-2xl"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default DevelopmentProcess;