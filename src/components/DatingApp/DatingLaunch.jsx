import React from "react";
import teamImg from "../../assets/DatingApp/datinglaunch.webp";

const LaunchSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#120018] via-[#1c0026] to-[#2a0033] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <img
              src={teamImg}
              alt="team"
              className="w-full max-w-[520px] object-contain"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white md:pl-12">

            <span className="inline-block border border-white/30 px-4 py-1 rounded-full text-sm mb-6">
              Get Your Digital Footprint
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
              Launch Your <span className="text-pink-500">Tinder Clone App</span> in Just 5 Days
            </h2>

            <p className="text-white/80 mb-5 leading-relaxed">
              Get your Tinder Clone App live in just 5 working days with our ready-to-launch platform.
              Unlike lengthy custom development, our solution helps you launch quickly and start
              connecting users instantly.
            </p>

            <p className="text-white/80 mb-5 leading-relaxed">
              Our platform includes essential features such as matchmaking, chat systems,
              location-based discovery, and more — ensuring a smooth and engaging experience.
            </p>

            <p className="text-white/80 leading-relaxed">
              Skip months of development and focus on growing your business with a reliable
              and scalable Tinder clone solution.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LaunchSection;