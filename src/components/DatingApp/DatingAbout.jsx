import React from "react";
import AboutDating from "../../assets/Datingkit/about.jpg";

const DatingAppAbout = () => {
  return (
    <section className="bg-[#f5f5f7] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-36 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-end order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-xl w-full max-w-[400px] md:max-w-[500px]">
            <img
              src={AboutDating}
              alt="Dating Platform"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="bg-white border border-pink-200 rounded-3xl p-6 md:p-10 shadow-sm md:-ml-12 max-w-xl order-1 lg:order-2">

          {/* TAG */}
          <span className="inline-block text-xs md:text-sm bg-pink-50 text-pink-500 px-3 py-1 rounded-full mb-3">
            About Our Dating Platform
          </span>

          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Build a Powerful <span className="text-pink-500">Online Dating Platform</span>
            with Smart Matching Features
          </h2>

          {/* TEXT */}
          <p className="text-gray-600 text-sm md:text-base mb-3">
            The online dating market continues to grow rapidly, creating
            opportunities for startups and businesses to launch modern
            matchmaking platforms.
          </p>

          <p className="text-gray-600 text-sm md:text-base mb-3">
            From profile matching and real-time messaging to intelligent
            recommendation systems, our platform is designed to deliver a
            smooth and engaging experience for users.
          </p>

          <p className="text-gray-600 text-sm md:text-base">
            Whether you are launching a niche dating community or a global
            matchmaking platform, our customizable architecture allows your
            business to scale and stand out.
          </p>

        </div>
      </div>
    </section>
  );
};

export default DatingAppAbout;