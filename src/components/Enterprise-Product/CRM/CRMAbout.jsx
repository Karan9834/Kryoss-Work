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

          {/* TAG */}
          <span className="inline-block px-4 py-1 mb-5 text-sm rounded-full 
            bg-blue-100 text-blue-600 font-medium">
            About CRM
          </span>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Sales with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Smart CRM Solutions
            </span>
          </h2>

          {/* PARA 1 */}
          <p className="text-gray-600 mb-5 leading-relaxed">
            Our CRM platform helps businesses manage leads, track customer interactions, 
            and streamline sales processes — all in one powerful system designed for growth.
          </p>

          {/* PARA 2 */}
          <p className="text-gray-600 leading-relaxed">
            From pipeline management to analytics and automation, our solution empowers teams 
            to close deals faster, improve customer relationships, and drive consistent revenue.
          </p>

        </div>

      </div>

    </section>
  );
};

export default CRMAbout;