import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "❤️",
      title: "Meaningful Connections",
      description: "Build genuine relationships with people who share your interests.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Experience ultra-fast loading times and real-time updates.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: "🔒",
      title: "Bank-Grade Security",
      description: "Your data is protected with advanced encryption.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Connect with millions of users worldwide.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📸",
      title: "Rich Media Sharing",
      description: "Share photos, videos, and moments that matter.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: "📹",
      title: "Live Streaming",
      description: "Go live and connect in real-time with crystal clear quality.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Track your growth with powerful insights.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Stay updated with intelligent alerts.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 py-24 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header - Updated Typography ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-5">
            <span className="text-purple-400">✨</span>
            <span className="text-sm font-medium text-purple-300">Features</span>
          </div>

          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Modern Connection</span>
          </h2>

          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="text-[16px] font-normal leading-[1.6] text-gray-400">
            Everything you need to create meaningful connections
          </p>
        </motion.div>

        {/* Features Grid - Card fonts KEPT ORIGINAL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 text-2xl">
                  {feature.icon}
                </div>

                {/* Card Title - ORIGINAL FONT (unchanged) */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Card Description - ORIGINAL FONT (unchanged) */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Bottom Line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;