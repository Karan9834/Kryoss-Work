import React from "react";
import launch from "../../../assets/FlutterApp/launch.webp";

export default function LaunchSection() {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 rounded-3xl overflow-hidden">

          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT CONTENT */}

            <div className="p-12 text-white">

              <h2 className="text-4xl font-semibold leading-snug">
                Ready to Build Your Next App With Flutter?
              </h2>

              <p className="mt-5 text-white/90 max-w-md">
                Turn your idea into a powerful mobile application with
                Flutter. Our team creates scalable and high-performance
                apps designed to deliver smooth user experiences and
                long-term business growth.
              </p>

              <button className="mt-6 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-purple-700 transition">
                Schedule a Consultation
              </button>

            </div>

            {/* RIGHT IMAGE AREA */}

            <div className="relative flex justify-center items-end">

              {/* You will add image here */}

              <img
                src={launch}
                alt="Flutter developer"
                className="max-h-[420px] object-contain"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}