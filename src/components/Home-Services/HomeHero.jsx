import React from "react";
import { ArrowRight, Sparkles, Wrench, Paintbrush, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../../assets/homeservices-product/Your Home Our Responsibility.jpg";

const HomeServicesHero = () => {
  const handleScroll = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20 bg-white">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50" />

      {/* ✨ GLOW */}
      <div className="absolute top-0 left-[20%] w-[350px] h-[350px] bg-purple-200/40 blur-2xl rounded-full" />
      <div className="absolute bottom-0 right-[20%] w-[350px] h-[350px] bg-pink-200/40 blur-2xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <div className="max-w-xl text-center lg:text-left">

          {/* Hero Badge - Updated: text-xs font-medium tracking-wider uppercase */}
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-[12px] font-medium tracking-wider uppercase text-purple-600">
              Smart Home Services
            </span>
          </div>

          {/* Hero H1 - Updated: text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-gray-900">Your Home,</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Our Responsibility
            </span>
          </h1>

          {/* Hero Description - Updated: text-base md:text-lg font-normal leading-relaxed */}
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-600 mb-8">
            Book trusted professionals for cleaning, repairs, maintenance, and more —
            all in one seamless platform built for modern homes.
          </p>
          {/* Hero Button - Updated: text-sm md:text-base font-semibold tracking-wide uppercase */}
          <button
            onClick={handleScroll}
            className="group px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white rounded-full font-semibold flex items-center gap-2 mx-auto lg:mx-0 hover:scale-105 transition shadow-lg shadow-purple-400/30 text-sm md:text-base tracking-wide uppercase"
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[500px] lg:max-w-[600px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 via-pink-300/30 to-indigo-300/30 blur-2xl rounded-2xl" />

            {/* IMAGE */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/50 bg-white p-2">
              <img
                src={heroImg}
                alt="home services"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HomeServicesHero;