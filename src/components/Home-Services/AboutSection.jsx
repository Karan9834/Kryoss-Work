import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import aboutImg from "../../assets/Home-Service/about.png";

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">

      {/* 🌈 SOFT BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-white" />

      {/* ✨ GLOW */}
      <div className="absolute top-0 right-[15%] w-[400px] h-[400px] bg-purple-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-[15%] w-[400px] h-[400px] bg-pink-200/40 blur-3xl rounded-full" />

      <div className="relative z-10 container mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-[300px] sm:w-[360px] lg:w-[420px]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 blur-2xl opacity-40 rounded-2xl" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src={aboutImg}
                  alt="about"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - Updated Typography */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >

            {/* Badge - Updated: text-[14px] font-medium */}
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-[14px] font-medium text-purple-600">
                About Us
              </span>
            </div>

            {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-6">
              Making Home Services{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                Simple & Reliable
              </span>
            </h2>

            {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 mb-4">
              We provide trusted and professional home services designed to make
              your life easier. From cleaning to repairs, everything is just a
              click away.
            </p>

            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500 mb-6">
              Our platform connects you with verified experts, ensuring quality,
              safety, and convenience — all in one place.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Verified & trusted professionals",
                "Fast booking & real-time tracking",
                "Affordable and transparent pricing",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  {/* Feature text - 14px mobile, 16px desktop */}
                  <span className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;