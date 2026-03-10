import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-page-hero-section-bg.webp')",
      }}

    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-20 md:py-10 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          Logo Badge
          <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
            <div className="bg-[#FF2485] p-3 rounded-lg text-black font-bold">
              <img src="data:image/jpeg;base64,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" className="h-10 w-10" /></div>
            <span className="uppercase tracking-widest text-black text-md font-bold">
              VYOM-MASSAGE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug text-black">
            Uber  <span className="bg-gradient-to-r from-[#EC2768] to-[#EB009D] bg-clip-text text-transparent"> Massage Therapy App Solution </span>
          </h1>

          {/* Paragraph */}
          <p className="text-black text-base sm:text-lg md:text-lg mb-8 max-w-xl">
            Launch your massage therapy business with our Uber for Massage app solution. Our on-demand massage app development will help you scale your spa booking business and take it to the next level, providing a seamless experience for both clients and service providers.
          </p>

          {/* Button */}
          <button className=" w-fit bg-gradient-to-r from-[#FF2485] to-[#C739FF] px-6 sm:px-8 py-3 rounded-full text-black font-semibold text-base shadow-md hover:scale-105 transition duration-300 mx-auto md:mx-0">
            Let's Discuss →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-page-hero-section-image.webp"
            alt="Home Cleaning App"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;