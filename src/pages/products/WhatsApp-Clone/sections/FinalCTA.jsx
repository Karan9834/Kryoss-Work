import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MessageCircle, 
  Video, 
  Shield, 
  Users,
  Sparkles,
  Play,
  Download,
  Star
} from "lucide-react";

const FinalCTA = () => {
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

  const floatingIcons = [
    { icon: MessageCircle, delay: 0, x: -50, y: -30 },
    { icon: Video, delay: 1, x: 80, y: 40 },
    { icon: Shield, delay: 2, x: -30, y: 60 },
    { icon: Users, delay: 3, x: 60, y: -20 },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 lg:py-32 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[100px]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Top & Bottom Glow Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </div>

      {/* Floating Icons Animation */}
      {floatingIcons.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0.5, 0],
              x: [0, item.x, item.x + 20, 0],
              y: [0, item.y, item.y + 30, 0],
            }}
            transition={{ 
              duration: 8, 
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
            className="absolute hidden lg:block"
            style={{ top: `${20 + idx * 15}%`, left: `${10 + idx * 20}%` }}
          >
            <Icon className="w-8 h-8 text-green-500/20" />
          </motion.div>
        );
      })}

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Premium Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">
              Ready to Get Started?
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Start Connecting with{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Millions
            </span>
            <br />
            <span className="text-white">of Users Today</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join the world's most secure and feature-rich messaging platform. 
            Experience seamless communication with friends and family, absolutely free.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://preview.codecanyon.net/item/meetzy-mobile-app-addon-whatsapp-clone-chat-realtime-chat-audio-video-calling-group-chat/full_screen_preview/62323991"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Live Demo
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </a>
            <a href="/company/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Let's Discuss
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;