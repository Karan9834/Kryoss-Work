import React from "react";
import launchImg from "../../../assets/Enterprise-Product/launch.webp";
import whyImg from "../../../assets/Enterprise-Product/whyus.webp";

const CRMLaunchWhy = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ================= LAUNCH PART ================= */}
        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={launchImg}
              alt="CRM Launch"
              className="w-full max-w-[420px] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
            <span className="inline-block px-4 py-1 mb-5 rounded-full 
              bg-white/10 border border-white/20 text-[12px] font-medium tracking-[0.05em] uppercase">
              Launch Your CRM
            </span>

            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-5">
              Launch Your{" "}
              <span className="text-blue-300">
                CRM Platform in Days
              </span>{" "}
              (Not Weeks!)
            </h2>

            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
            <p className="text-white/80 mb-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Get your CRM system up and running quickly with our ready-to-deploy solution. 
              Unlike traditional development cycles, our platform ensures a fast and seamless launch.
            </p>

            <p className="text-white/80 text-[14px] md:text-[16px] font-normal leading-[1.6]">
              Focus on scaling your business while we handle the technical complexity 
              behind your CRM infrastructure.
            </p>

          </div>

        </div>

        {/* ================= WHY PART ================= */}
        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
            <span className="inline-block px-4 py-1 mb-5 rounded-full 
              bg-white/10 border border-white/20 text-[12px] font-medium tracking-[0.05em] uppercase">
              Why Choose Our CRM?
            </span>

            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-10">
              Why Choose Our{" "}
              <span className="text-blue-300">
                CRM Solution?
              </span>
            </h2>

            {/* POINTS - Updated typography */}
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-[13px] md:text-[14px] font-normal">
                Full Customization
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-[13px] md:text-[14px] font-normal">
                Ready to Deploy
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-[13px] md:text-[14px] font-normal">
                Multi-Platform Support
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-[13px] md:text-[14px] font-normal">
                Advanced Analytics
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={whyImg}
              alt="CRM Why"
              className="w-full max-w-[420px] object-contain"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default CRMLaunchWhy;