import React from "react";
import hotelhero from "../../assets//Hotel-Management/hotelhero.png"

const AboutSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT - IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={hotelhero}
                alt="Hotel management system"
                className="w-full h-[360px] md:h-[420px] object-fit"
              />
            </div>

            {/* soft glow */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-teal-100 to-cyan-100 blur-2xl opacity-40 rounded-full"></div>
          </div>

          {/* RIGHT - CONTENT */}
          <div>
            {/* small accent line */}
            <div className="w-14 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-5"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About Our Platform
            </h2>

            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                We are redefining hotel operations with a modern platform built
                for speed, simplicity, and seamless control. From bookings to
                guest management, everything is unified into one intuitive
                experience.
              </p>

              <p>
                Designed with real hospitality challenges in mind, our solution
                reduces manual work, improves coordination, and helps teams
                deliver exceptional service without complexity.
              </p>

              <p>
                Whether you're running a boutique hotel or a large chain, our
                technology empowers you to operate smarter and focus on what
                truly matters — creating unforgettable guest experiences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;