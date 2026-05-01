import React from "react";
import servicesImg from "../../../../../assets/News-Solution/premium.png"; // update path

const PremiumServices = () => {
  return (
    <section className="w-full bg-[#e6d1d1] py-20">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE LEFT */}
        <div className="md:w-1/2">
          <img
            src={servicesImg}
            alt="Premium Services"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CONTENT RIGHT */}
        <div className="md:w-1/2">

          {/* TITLE */}
          <h2 className="mb-6 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-red-600">Premium</span>{" "}
            <span className="text-gray-800">Services</span>
          </h2>

          {/* LIST */}
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">

            <li className="flex items-start gap-3 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="text-red-500">–</span>
              News Live TV Streaming Channel
            </li>

            <li className="flex items-start gap-3 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="text-red-500">–</span>
              News Mobile Application
            </li>

            <li className="flex items-start gap-3 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="text-red-500">–</span>
              News Web Hosting
            </li>

            <li className="flex items-start gap-3 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="text-red-500">–</span>
              News Website Design
            </li>

            <li className="flex items-start gap-3 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              <span className="text-red-500">–</span>
              News Epaper Magazine
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
};

export default PremiumServices;