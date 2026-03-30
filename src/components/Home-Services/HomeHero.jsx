import React from "react";
import { ArrowRight, Sparkles, Wrench, Paintbrush, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../../assets/Home-Service/homehero.png";

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

          {/* FEATURES */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-purple-100">
              <Wrench className="w-3.5 h-3.5 text-purple-500" />
              <span className="text-xs text-gray-600">Repairs</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-pink-100">
              <Paintbrush className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-xs text-gray-600">Painting</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-indigo-100">
              <Shield className="w-3.5 h-3.5 text-indigo-500" />
              <span className="text-xs text-gray-600">Verified Pros</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-purple-100">
              <Clock className="w-3.5 h-3.5 text-purple-500" />
              <span className="text-xs text-gray-600">Same Day Service</span>
            </div>
          </div>

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

            {/* BADGE */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              ⚡ Trusted by 10K+ Homes
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HomeServicesHero;