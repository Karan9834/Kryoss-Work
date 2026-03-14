import React from "react";
import pestwhy from "../../assets/PestControl/pestwhy.webp";
import pestlaunch from "../../assets/PestControl/pestlaunch.webp";
const LaunchWhySection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN DARK CONTAINER */}
        <div className="rounded-3xl overflow-hidden bg-[#2b0f00] text-white relative">

          {/* TOP PART */}
          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT IMAGE (touching edge) */}
            <div>
              <img
                src={pestlaunch}
                alt="launch"
                className="w-full object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="px-12 py-20">

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
                5 working days with our ready-to-deploy solution.
              </p>

              <p className="text-gray-300 mt-4">
                Avoid the time-consuming custom development process that often
                takes months. Our pre-built platform fast-tracks your
                time-to-market.
              </p>

              <p className="text-gray-300 mt-4">
                Focus on scaling your business with an app that's ready to
                deliver seamless experiences.
              </p>

            </div>

          </div>

          {/* WHY CHOOSE PART */}
          <div className="px-12 pb-20 text-center">

            <span className="border border-white/30 px-4 py-1 rounded-full text-sm">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-semibold mt-6">
              Why Choose
              <span className="text-orange-400">
                {" "}Our Uber for Pest Control Service App?
              </span>
            </h2>

            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
              Our Uber for Pest Control Service App is the ideal solution for
              quickly launching your on-demand pest control business with
              minimal effort.
            </p>

            {/* IMAGE PLACEHOLDER (YOU WILL REPLACE THIS) */}
            <div className="flex justify-center mt-16">
              <img
                src={pestwhy}
                alt="why choose diagram"
                className="max-w-5xl w-full"
              />
            </div>

            {/* BULLET POINTS */}
            <div className="grid md:grid-cols-2 gap-12 text-left mt-16 text-gray-300">

              <ul className="space-y-4 list-disc pl-6">
                <li>Get your pest control app live in just 5 working days.</li>
                <li>Tailor the app to fit your unique business needs.</li>
                <li>Simple intuitive design for smooth user experience.</li>
              </ul>

              <ul className="space-y-4 list-disc pl-6">
                <li>Built with top-tier security and reliability.</li>
                <li>Real-time notifications for service updates.</li>
                <li>Manage bookings, users and payments easily.</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LaunchWhySection;