import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden"
    style={{backgroundImage: "url(https://whitelabelfox.com/assets/images/about-us/about-us-page-hero-section-bg.webp)"}}
    
    >
      
      <div className="max-w-8xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT IMAGE */}
        <div className="hidden md:block w-1/4">
          <img
            src="https://whitelabelfox.com/assets/images/about-us/about-us-page-hero-image-1.webp"
            alt="Left Decoration"
            className="w-full max-w-xs"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="text-center md:w-2/4 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            About White Label Fox
          </h1>

          <h2 className="text-xl md:text-4xl font-semibold text-white  mb-4">
            Innovating Digital Solutions
          </h2>

          <p className="text-white leading-relaxed">
            Discover our journey, expertise, and commitment to delivering scalable
            digital solutions. At White Label Fox, we empower businesses with
            cutting-edge technology and seamless development services.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block w-1/4 flex justify-end">
          <img
            src="https://whitelabelfox.com/assets/images/about-us/about-us-page-hero-image-2.webp"
            alt="Right Decoration"
            className="w-full max-w-xs"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;