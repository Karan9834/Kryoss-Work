import React from "react";
import crmAboutImg from "../../../assets/Enterprise-Product/crmabout.png";

const CRMAbout = () => {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={crmAboutImg}
            alt="CRM About"
            className="w-full max-w-[520px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="
          border border-blue-200 
          rounded-2xl p-8 md:p-10
          bg-white shadow-sm
        ">

          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <span className="inline-block px-4 py-1 mb-5 rounded-full 
            bg-blue-100 text-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase">
            About CRM
          </span>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6">
            Transform Your Sales with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Smart CRM Solutions
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 mb-5 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Our CRM platform helps businesses manage leads, track customer interactions, 
            and streamline sales processes — all in one powerful system designed for growth.
          </p>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            From pipeline management to analytics and automation, our solution empowers teams 
            to close deals faster, improve customer relationships, and drive consistent revenue.
          </p>

        </div>

      </div>

    </section>
  );
};

export default CRMAbout;