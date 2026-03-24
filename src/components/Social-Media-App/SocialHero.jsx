import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Users } from "lucide-react";
import socialhero from "../../assets/Socila-media-app/socialhero.png";

const SocialHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0, x: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#020617]">
      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b]" />

      {/* COLOR WAVE - More Controlled */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-[-100px] left-[20%] w-[500px] h-[300px] 
          bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.25)_0%,_rgba(139,92,246,0.15)_40%,_transparent_70%)]
          blur-[80px]"
        />
        <div
          className="absolute top-[-80px] right-[10%] w-[400px] h-[250px] 
          bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.2)_0%,_rgba(139,92,246,0.1)_50%,_transparent_70%)]
          blur-[70px]"
        />
      </div>

      {/* GRID - Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CONTENT - Adjusted Spacing */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* LEFT CONTENT - Better Spacing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-xl mx-auto lg:mx-0"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Next Gen Social Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.2]"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
                Connect, Share,
              </span>
              <br />
              <span className="text-white">Grow Together</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg leading-relaxed"
            >
              Experience meaningful connections with a modern, fast, and
              engaging platform designed for authentic interactions.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const section = document.getElementById("products");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white rounded-full text-base font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* FEATURES - Better Spacing */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-2 border-t border-white/10"
            >
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <div className="p-1.5 rounded-full bg-purple-500/20">
                  <Zap className="w-4 h-4 text-purple-400" />
                </div>
                <span>Lightning Fast</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <div className="p-1.5 rounded-full bg-pink-500/20">
                  <Shield className="w-4 h-4 text-pink-400" />
                </div>
                <span>Bank-Grade Security</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <div className="p-1.5 rounded-full bg-indigo-500/20">
                  <Users className="w-4 h-4 text-indigo-400" />
                </div>
                <span>Global Community</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - Controlled Size & Spacing */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] xl:w-[440px]">
              {/* Premium Glow Effect */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-indigo-500/40 blur-2xl opacity-60" />

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                <img
                  src={socialhero}
                  alt="Social Media App Interface"
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialHero;
