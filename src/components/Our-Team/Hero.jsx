



import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0c0225] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 text-white">
          Meet the <span className="text-orange-500">Team Behind the Innovation</span>
        </h1>

        {/* Paragraph */}
        <p className="text-center text-gray-300 max-w-5xl mx-auto mb-4">
          Our passionate and skilled team is the driving force behind every successful project.
          With 8+ years of experience, 250+ projects delivered, and 40+ expert developers,
          we work together, innovate, and celebrate every milestone—both in the office and beyond!
        </p>

        {/* MAIN GRID */}
        <div className="grid grid-cols-3 gap-6 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* top 2 images */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://whitelabelfox.com/assets/images/our-team/our-team-main-slider-image-1.webp"
                className="w-full h-30 object-cover rounded-xl"
              />
              <img
                src="https://whitelabelfox.com/assets/images/our-team/our-team-main-slider-image-2.webp"
                className="w-full h-30 object-cover rounded-xl"
              />
            </div>

            {/* large bottom image */}
            <img
              src="https://whitelabelfox.com/assets/images/our-team/our-team-main-slider-image-3.webp"
              className="w-full h-62 object-cover rounded-xl"
            />

          </div>


          {/* CENTER IMAGE */}
          <div>
            <img
              src="https://whitelabelfox.com/assets/images/our-team/our-team-main-slider-image-4.webp"
              className="w-full h-[380px] object-contain rounded-xl"
            />
          </div>


          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* big top image */}
            <img
              src="https://whitelabelfox.com/assets/images/our-team/our-team-main-slider-image-5.webp"
              className="w-full h-62 object-cover rounded-xl"
            />

            {/* bottom 2 images */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://whitelabelfox.com/assets/images/our-team/our-team-main-slider-image-6.webp"
                className="w-full h-30 object-cover rounded-xl"
              />
              <img
                src="https://whitelabelfox.com/assets/images/our-team/our-team-main-slider-image-7.webp"
                className="w-full h-30 object-cover rounded-xl"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;