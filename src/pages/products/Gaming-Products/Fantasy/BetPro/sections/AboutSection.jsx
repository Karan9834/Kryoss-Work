import React from "react";
import aboutImg from "../../../../../../assets/Games-Product/betproabout.jpg";

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">

      {/* Orange Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">

          {/* Soft orange glow */}
          <div className="absolute w-[260px] h-[260px] bg-orange-100 blur-[80px] rounded-full"></div>

          <img
            src={aboutImg}
            alt="About Platform"
            className="relative w-full max-w-md rounded-xl shadow-lg border border-orange-100"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Label */}
          <p className="text-orange-600 text-xs mb-3 tracking-wide">
            ● About Platform
          </p>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Build Powerful{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Gaming Platforms
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Our platform delivers a seamless and scalable gaming experience
            designed for modern businesses. From real-time gameplay to secure
            payment integrations, everything is built for performance.
          </p>

          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            With advanced architecture and high availability, you can easily
            manage users, track performance, and scale your operations globally.
          </p>

          {/* Features */}
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Real-time gaming experience
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Secure & scalable backend
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Global-ready infrastructure
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;