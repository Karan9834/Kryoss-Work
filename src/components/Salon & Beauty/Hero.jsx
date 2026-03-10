import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-Hero-section-BG.webp')",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-20 md:py-10 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          {/* Logo Badge */}
          <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
            {/* Icon */}
            <div
              className="p-3 rounded-lg 
      bg-gradient-to-br from-pink-500 to-purple-500
      flex items-center justify-center
      shadow-[0_0_18px_rgba(236,72,153,0.85)]"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksQIa73yXmNVFCuDtOLzM4tgZ7chgUIlJsQ&s"
                className="h-8 w-8 rounded-md drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                alt="beauty"
              />
            </div>

            {/* Brand */}
            <span className="uppercase tracking-widest text-md font-bold">
              <span
                className="text-pink-400 
            drop-shadow-[0_0_8px_rgba(236,72,153,0.9)]"
              >
                VYOM
              </span>

              <span className="text-white ml-1">BEAUTY</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug text-white">
            Launch Your{" "}
            <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] bg-clip-text text-transparent">
              {" "}
              Own Uber for Beauty{" "}
            </span>
            App
          </h1>

          {/* Paragraph */}
          <p className="text-gray-200 text-base sm:text-lg md:text-lg mb-8 max-w-xl">
            Transform your salon business or startup with a cutting-edge beauty
            service app. We offer on-demand beauty app development, delivering
            advanced solutions tailored to your needs.
          </p>

          {/* Button */}
          <button className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-base shadow-md hover:scale-105 transition duration-300 mx-auto md:mx-0">
            Let's Discuss →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-Hero-section-image.webp"
            alt="Home Cleaning App"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
