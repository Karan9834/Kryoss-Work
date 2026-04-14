import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Sparkles, ArrowRight } from "lucide-react";
import aboutImg from "../../assets/socialmedia-product/About Us.jpg";

const AboutSection = () => {
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

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Privacy first approach",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect worldwide",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: Sparkles,
      title: "Premium Experience",
      description: "Clean & intuitive",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-[360px] sm:w-[420px] lg:w-[520px]"
            >
              {/* Glow */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 blur-2xl opacity-40" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-100">
                <img
                  src={aboutImg}
                  alt="about"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 border">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">
                  10K+ Active Users
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - Updated Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex-1 max-w-xl"
          >

            {/* Badge - Updated: text-[14px] font-semibold */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-[14px] font-semibold text-purple-600">
                  About Us
                </span>
              </span>
            </motion.div>

            {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
            <motion.h2
              variants={itemVariants}
              className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-6"
            >
              A Better Way to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Connect & Share
              </span>
            </motion.h2>

            {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
            <motion.p
              variants={itemVariants}
              className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 mb-4"
            >
              Our platform empowers users to connect, share experiences, and build
              meaningful relationships through a seamless digital environment.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 mb-8"
            >
              Designed with performance, privacy, and scalability in mind, we bring
              people closer with a secure and intuitive experience.
            </motion.p>

            {/* Features - Card fonts kept original */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-5 mb-8"
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl ${feature.bgColor} border hover:shadow-md transition`}
                >
                  <feature.icon
                    className={`w-8 h-8 ${feature.iconColor} mb-3`}
                  />
                  {/* Card Title - ORIGINAL FONT (unchanged) */}
                  <h4 className="font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  {/* Card Description - ORIGINAL FONT (unchanged) */}
                  <p className="text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;