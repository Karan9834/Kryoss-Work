import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../../assets/Home-Service/homehero.png"

const HomeServicesHero = () => {
  const handleScroll = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-20 bg-white">

      {/* 🌈 SOFT GRADIENT BG (NEW STYLE) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50" />

      {/* ✨ LIGHT GLOW */}
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-purple-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-pink-200/40 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="flex-1 max-w-xl text-center lg:text-left">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-purple-600 font-medium">
              Smart Home Services
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Your Home,</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Our Responsibility
            </span>
          </h1>

          {/* DESC */}
          <p className="text-gray-600 text-lg mb-8">
            Book trusted professionals for cleaning, repairs, maintenance, and more —
            all in one seamless platform built for modern homes.
          </p>

          {/* CTA */}
          <button
            onClick={handleScroll}
            className="group px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white rounded-full font-semibold flex items-center gap-2 mx-auto lg:mx-0 hover:scale-105 transition shadow-lg shadow-purple-400/30"
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-[280px] sm:w-[340px] lg:w-[420px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 blur-2xl opacity-40 rounded-2xl" />

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src={heroImg}
                alt="home services"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HomeServicesHero;