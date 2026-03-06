import React from "react";
import launch from "../../assets/DatingApp/datinglaunch.webp";

export default function LaunchSection() {
  return (
    <section className="px-6 py-20 bg-white">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0b0f3b] via-[#0b0f3b] to-[#07071f] rounded-[40px] overflow-hidden">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <div className="relative h-full">

            <img
              src={launch}
              alt="business discussion"
              className="w-full h-full object-cover"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="px-10 md:px-16 py-14 text-white">

            {/* Badge */}
            <span className="border border-white/40 px-4 py-1 rounded-full text-sm">
              Get Your Digital Footprint
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold mt-6 leading-snug">
              Launch Your{" "}
              <span className="text-blue-400">
                Uber For Doctors App
              </span>{" "}
              in Just 5 Days
            </h2>

            {/* Paragraph */}
            <div className="space-y-6 text-gray-300 mt-6 text-[15px] leading-relaxed">

              <p>
                Get your Uber For Doctors App up and running in just 5 working
                days with our rapid deployment solution. Skip long development
                timelines and launch a fully functional doctor appointment
                platform without delays.
              </p>

              <p>
                Our ready-made platform connects patients with trusted
                healthcare professionals instantly. Essential features like
                appointment scheduling, doctor availability tracking and secure
                payments are available from day one.
              </p>

              <p>
                The platform is scalable and reliable so you can focus on
                providing quality healthcare services while we handle the
                technical infrastructure.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}