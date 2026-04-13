import React from "react";
import launchImg from "../../../assets/Enterprise-Product/launch.webp";
import whyImg from "../../../assets/Enterprise-Product/whyus.webp";

const HRMLaunchWhy = () => {
  return (
    <section className="
      w-full py-28 overflow-hidden text-white
      bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-800
    ">

      {/* glow */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-500/30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= LAUNCH ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={launchImg}
              alt="HRM Launch"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* TEXT */}
          <div>

            {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
            <span className="inline-block px-4 py-1 mb-4 rounded-full 
              bg-white/10 text-white text-[12px] font-medium tracking-[0.05em] uppercase">
              Launch Your HRM Platform
            </span>

            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-6">
              Launch Your{" "}
              <span className="text-purple-200">
                HRM Platform
              </span>{" "}
              in Days, Not Weeks
            </h2>

            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
            <p className="text-purple-100 mb-5 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Get your HRM system live quickly with our ready-to-use solution.
              No long development cycles — just fast deployment.
            </p>

            <p className="text-purple-100 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Focus on managing your workforce while we handle the technology.
            </p>

          </div>
        </div>

        {/* ================= WHY ================= */}
        <div className="text-center">

          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <span className="inline-block px-4 py-1 mb-4 rounded-full 
            bg-white/10 text-white text-[12px] font-medium tracking-[0.05em] uppercase">
            Why Choose Our HRM?
          </span>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-16">
            Why Choose Our{" "}
            <span className="text-purple-200">
              HRM Solution
            </span>
          </h2>

          {/* FLOW IMAGE */}
          <div className="flex justify-center mb-16">
            <img
              src={whyImg}
              alt="HRM Flow"
              className="w-full max-w-5xl object-contain"
            />
          </div>

          {/* BULLETS - Updated typography */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left text-purple-100">

            <ul className="space-y-4">
              <li className="flex gap-3 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                <span>•</span>
                Easily scalable HRM system that grows with your business.
              </li>
              <li className="flex gap-3 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                <span>•</span>
                Advanced security and employee data protection.
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex gap-3 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                <span>•</span>
                Full customization control for your workflows.
              </li>
              <li className="flex gap-3 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                <span>•</span>
                Smooth and intuitive user experience.
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HRMLaunchWhy;