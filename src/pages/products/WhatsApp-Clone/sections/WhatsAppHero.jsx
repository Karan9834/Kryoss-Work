import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Video,
  Lock,
  Sparkles,
  Send,
} from "lucide-react";
import whatshero from "../../../../assets/Socila-media-app/whatshero.png";

const WhatsAppHero = () => {
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

  const features = [
    { icon: MessageCircle, text: "Instant Messaging", color: "text-green-400" },
    { icon: Phone, text: "Voice Calls", color: "text-blue-400" },
    { icon: Video, text: "Video Calls", color: "text-purple-400" },
    { icon: Lock, text: "End-to-End Encrypted", color: "text-emerald-400" },
  ];

  return (
    <section className="relative w-full min-h-[80vh] py-16 flex items-center overflow-hidden bg-gradient-to-br from-[#0a2b1a] via-[#0f3a22] to-[#0a2b1a]">

      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-xl"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-green-300">
                WhatsApp Clone • Secure Messaging
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-white">Connect with</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Friends & Family
              </span>
              <br />
              <span className="text-white">Instantly</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg mb-8"
            >
              Experience seamless communication with our WhatsApp-inspired
              platform. Send messages, make voice and video calls.
            </motion.p>

            {/* FEATURES */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${feature.color}`} />
                    <span className="text-sm text-gray-300">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://preview.codecanyon.net/item/meetzy-mobile-app-addon-whatsapp-clone-chat-realtime-chat-audio-video-calling-group-chat/full_screen_preview/62323991"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center gap-2 shadow-lg"
                >
                  Live Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
              <a href="/company/contact">
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Let's Discuss
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-[260px] sm:w-[300px] lg:w-[340px]">

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20">
                <img
                  src={whatshero}
                  alt="WhatsApp Clone"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              {/* FLOATING MESSAGE */}
              <div className="absolute -top-4 left-2 bg-gray-900/90 rounded-xl p-3 flex gap-2 text-white text-xs shadow-lg">
                <MessageCircle className="w-4 h-4 text-green-400" />
                Hey! How are you?
              </div>

              {/* CALL */}
              <div className="absolute -bottom-4 right-2 bg-gray-900/90 rounded-xl p-3 flex gap-2 text-white text-xs shadow-lg">
                <Video className="w-4 h-4 text-blue-400" />
                Incoming Call
              </div>

              {/* LOCK */}
              <div className="absolute bottom-16 left-2 bg-gray-900/80 px-3 py-1 rounded-lg text-xs flex gap-1 items-center text-gray-300">
                <Lock className="w-3 h-3 text-green-400" />
                Encrypted
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppHero;