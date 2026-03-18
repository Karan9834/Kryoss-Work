import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import crmHero from "../../../assets/Enterprise-Product/crmhero.png";

const CRMHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#030B1F]">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-12 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >

          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center
              bg-white/10 backdrop-blur-md border border-white/20">
              📊
            </div>

            <span className="uppercase tracking-widest text-sm font-semibold text-gray-300">
              VYOM CRM
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Customer Relationship
            </span>
            <br />
            Management Platform
          </h1>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-xl text-lg">
            Manage leads, track sales, and build stronger customer relationships 
            with a powerful CRM platform designed for modern businesses.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-3 
              bg-gradient-to-r from-blue-500 to-indigo-600
              px-8 py-3 rounded-full font-semibold text-white
              shadow-lg hover:shadow-blue-500/40 
              hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight size={18} />
          </a>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={crmHero}
            alt="CRM Dashboard"
            className="w-full max-w-[620px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CRMHero;