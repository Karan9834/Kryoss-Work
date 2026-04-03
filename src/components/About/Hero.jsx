import React from "react";
import img1 from "../../assets/about-top-banner-images/top-banner-left-img.png";
import img2 from "../../assets/about-top-banner-images/top-banner-right-img.png";

const Hero = () => {
  return (
    <section 
      className="relative bg-white py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url(https://whitelabelfox.com/assets/images/about-us/about-us-page-hero-section-bg.webp)"}}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-8xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT IMAGE - Increased Height */}
        <div className="hidden md:block w-1/4">
          <img
            src={img1}
            alt="Left Decoration"
            className="w-full max-w-xs h-auto md:h-[300px] lg:h-[350px] object-contain"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center md:w-2/4 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            About Kryoss Work
          </h1>

          <h2 className="text-xl md:text-4xl font-semibold text-white mb-4">
            Innovating Digital Solutions
          </h2>

          <p className="text-white leading-relaxed text-base md:text-lg">
            Discover our journey, expertise, and commitment to delivering scalable
            digital solutions. At White Label Fox, we empower businesses with
            cutting-edge technology and seamless development services.
          </p>
        </div>

        {/* RIGHT IMAGE - Increased Height */}
        <div className="hidden md:block w-1/4 flex justify-end">
          <img
            src={img2}
            alt="Right Decoration"
            className="w-full max-w-xs h-auto md:h-[300px] lg:h-[350px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;