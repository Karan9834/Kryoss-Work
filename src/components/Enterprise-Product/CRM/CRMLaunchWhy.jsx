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

            <span className="inline-block px-4 py-1 mb-5 text-sm rounded-full 
              bg-white/10 border border-white/20">
              Launch Your CRM
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-5">
              Launch Your{" "}
              <span className="text-blue-300">
                CRM Platform in Days
              </span>{" "}
              (Not Weeks!)
            </h2>

            <p className="text-white/80 mb-4 leading-relaxed">
              Get your CRM system up and running quickly with our ready-to-deploy solution. 
              Unlike traditional development cycles, our platform ensures a fast and seamless launch.
            </p>

            <p className="text-white/80 leading-relaxed">
              Focus on scaling your business while we handle the technical complexity 
              behind your CRM infrastructure.
            </p>

          </div>

        </div>

        {/* ================= WHY PART ================= */}
        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block px-4 py-1 mb-5 text-sm rounded-full 
              bg-white/10 border border-white/20">
              Why Choose Our CRM?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-10">
              Why Choose Our{" "}
              <span className="text-blue-300">
                CRM Solution?
              </span>
            </h2>

            {/* POINTS */}
            <div className="grid grid-cols-2 gap-6 text-sm">

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                Full Customization
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                Ready to Deploy
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                Multi-Platform Support
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
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