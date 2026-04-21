import React from "react";
import hospitalImg from "../../../../../assets/Hospital Management/Custom Hms.jpg";

const HMSSoftwareSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={hospitalImg}
            alt="Hospital Management Software"
            className="w-full max-w-[500px] rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* HEADING - Blue Purple Gradient */}
          <h2 className="text-[1.875rem] md:text-[2.25rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Custom HMS Software Development
          </h2>

          {/* DESCRIPTION - Simple with a span highlight somewhere */}
          <p className="text-[0.875rem] md:text-[1rem] text-gray-700 mb-5 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            The healthcare application development landscape is witnessing unprecedented expansion, drawing substantial investments and active participation from both public and private organizations. This remarkable momentum has empowered hospitals to embrace <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">cutting-edge software technologies</span> within their healthcare facilities, ultimately delivering superior medical care to patients. Just as ERP solutions have transformed numerous industries, healthcare has emerged as a key beneficiary of this digital revolution.
          </p>

          <p className="text-[0.875rem] md:text-[1rem] text-gray-700 mb-5 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            From capturing patient demographics and streamlining appointment scheduling to maintaining meticulous electronic health records — modern HMS platforms simplify clinical workflows and elevate the quality of patient care.
          </p>

          <p className="text-[0.875rem] md:text-[1rem] text-gray-700 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            At Kryoss Work, our seasoned development team specializes in building robust healthcare medical software tailored to medical clinics of all sizes. Our solutions empower healthcare providers to efficiently manage patient demographics, coordinate appointments, and maintain <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">systematic electronic health records</span> for every individual under their care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HMSSoftwareSection;