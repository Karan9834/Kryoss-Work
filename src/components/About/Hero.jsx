import { Link } from 'react-router-dom';
import React from "react";
import img1 from "../../assets/about-top-banner-images/top-banner-left-img.png";
import img2 from "../../assets/about-top-banner-images/top-banner-right-img.png";

const Hero = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      style={{
        backgroundImage:
          "url(https://whitelabelfox.com/assets/images/about-us/about-us-page-hero-section-bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 1. Main Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* 2. LEFT DECORATIVE IMAGE */}
      <div className="absolute left-0 top-0 h-full w-[25%] lg:w-[30%] hidden md:block z-10 select-none">
        <img
          src={img1}
          alt="Left Decoration"
          className="w-full h-full object-contain object-left opacity-90"
        />
      </div>

      {/* 3. RIGHT DECORATIVE IMAGE */}
      <div className="absolute right-0 top-0 h-full w-[25%] lg:w-[30%] hidden md:block z-10 select-none">
        <img
          src={img2}
          alt="Right Decoration"
          className="w-full h-full object-contain object-right opacity-90"
        />
      </div>

      {/* 4. CENTER CONTENT BOX */}
      <div className="relative z-20 max-w-3xl mx-auto text-center px-6 py-12">
        <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-widest text-orange-500 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">
          Our Story
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Meet <span className="text-orange-500">Kryoss Work</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-200 mb-6 max-w-2xl mx-auto">
          Crafting Tomorrow's Digital Landscape
        </h2>

        <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-xl mx-auto mb-8">
          Explore our path, expertise, and dedication to providing robust
          digital solutions. We enable enterprises with advanced technology
          and streamlined development services.
        </p>

        <Link to="/company/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20">
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default Hero;