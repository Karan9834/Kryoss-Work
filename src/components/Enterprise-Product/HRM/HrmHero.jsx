import { Link } from 'react-router-dom';

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import hrmImage from "../../../assets/Enterprise-Product/hrmhero.png";

const HRMHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-indigo-500/20 blur-[100px] rounded-full"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-start gap-12 relative z-10">

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
              👥
            </div>

            <span className="uppercase tracking-widest text-sm font-semibold text-gray-300">
              VYOM HRM
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Human Resource
            </span>
            <br />
            Management Platform
          </h1>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-xl text-lg">
            Manage hiring, payroll, and employee performance seamlessly with a
            modern HRM system built for growing teams.
          </p>

          {/* CTA */}
          <Link to="/company/contact"
            
            className="inline-flex items-center gap-3 
              bg-gradient-to-r from-purple-500 to-indigo-600
              px-8 py-3 rounded-full font-semibold text-white
              shadow-lg hover:shadow-purple-500/40 
              hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </Link>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={hrmImage}
            alt="HRM System"
            className="block max-h-[500px] w-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HRMHero;