import React from "react";
import girlImg from "../../assets/DatingApp/cta4.webp";

const DatingCTA3 = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Gradient Card */}
        <div className="relative bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 rounded-3xl px-10 py-14 overflow-visible">

          <div className="grid md:grid-cols-2 items-center gap-10">

            {/* LEFT CONTENT */}
            <div className="text-white z-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Your Tinder Clone App,
                <br /> Ready in 5 Days
              </h2>

              <p className="text-white/90 mb-6 max-w-md">
                Launch your Tinder clone in just 5 days with our ready-to-go
                platform. Fully customizable, feature-rich, and scalable for
                modern dating businesses.
              </p>

              <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition">
                Get Demo Now
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center md:justify-end">

              <img
                src={girlImg}
                alt="Dating app user"
                className="
                  w-60 md:w-80
                  relative
                  md:absolute
                  md:-top-20
                  md:right-0
                  object-contain
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DatingCTA3;