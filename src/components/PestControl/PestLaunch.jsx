import React from "react";
import pestlaunch from "../../assets/PestControl/pestlaunch.webp";

const LaunchSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl bg-[#2b0f00]">

          {/* Background grid lines */}
          <div className="absolute inset-0 opacity-20 bg-[url('/images/grid-pattern.png')]"></div>

          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT IMAGE */}
            <div className="relative h-full flex items-end">
              <img
                src={pestlaunch}
                alt="business"
                className="w-full object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="px-10 py-16 text-white">

              <span className="border border-white/30 px-4 py-1 rounded-full text-sm">
                Get Your Digital Footprints
              </span>

              <h2 className="text-4xl font-semibold mt-6 leading-tight">
                Launch Your
                <span className="text-orange-400">
                  {" "}Uber Pest Control Service App
                </span>
                <br />
                in Just 5 Days
              </h2>

              <p className="text-gray-300 mt-6">
                Get your Uber for Pest Control App live and operational in just
                5 working days with our ready-to-deploy solution. Avoid the
                time-consuming custom development process that often takes
                months.
              </p>

              <p className="text-gray-300 mt-4">
                With our Pest Control App, you can launch a fully functional
                platform that connects customers, providers, and admins.
              </p>

              <p className="text-gray-300 mt-4">
                Focus on scaling your business with an app built to deliver
                seamless user experiences.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LaunchSection;