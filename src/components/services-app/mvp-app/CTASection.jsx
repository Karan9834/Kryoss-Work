import React from "react";
import cta1 from "../../../assets/MvpApp/cta1.webp";

const CTASection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-800 p-12 lg:p-16 grid lg:grid-cols-2 items-center gap-10 shadow-xl">

          {/* LEFT CONTENT */}

          <div className="text-white">

            <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
              Partner with a Premier White Label <br/>
              MVP App Development Company
            </h2>

            <p className="mt-6 text-indigo-100 max-w-lg">
              Ready to turn your vision into a profitable brand? Secure your
              white label MVP development solution and launch your platform
              with full source code ownership in just a few weeks.
            </p>

            <button className="mt-8 px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:bg-indigo-100 transition">
              Start Your MVP Project
            </button>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative flex justify-center lg:justify-end">

            <img
              src={cta1}
              alt="cta"
              className="w-[320px] lg:w-[380px] relative z-10"
            />

            {/* floating card 1 */}

            <div className="absolute left-0 top-10 bg-white rounded-xl shadow-lg px-4 py-3 text-sm">
              <p className="font-semibold text-slate-800">Almost There</p>
              <p className="text-slate-500">Monthly Target</p>
            </div>

            {/* floating card 2 */}

            <div className="absolute right-0 bottom-6 bg-white rounded-xl shadow-lg px-4 py-3 text-sm">
              <p className="font-semibold text-slate-800">Sales Growth</p>
              <p className="text-slate-500">Performance</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;