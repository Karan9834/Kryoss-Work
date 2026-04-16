import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Video,
  Phone,
  Lock,
  Users,
  Globe,
  Camera,
  Shield,
  Zap,
  Star,
  Smile,
  Heart,
} from "lucide-react";

const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Features", icon: Star },
    { id: "communication", name: "Communication", icon: MessageCircle },
    { id: "security", name: "Security", icon: Shield },
    { id: "social", name: "Social", icon: Users },
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "Instant Messaging",
      description: "Real-time chat with lightning-fast delivery.",
      category: "communication",
      color: "text-green-400",
      glow: "shadow-green-500/30",
    },
    {
      icon: Phone,
      title: "Voice Calls",
      description: "Crystal clear HD voice calls worldwide.",
      category: "communication",
      color: "text-blue-400",
      glow: "shadow-blue-500/30",
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "High-quality video with low latency.",
      category: "communication",
      color: "text-purple-400",
      glow: "shadow-purple-500/30",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your messages are fully secure.",
      category: "security",
      color: "text-emerald-400",
      glow: "shadow-emerald-500/30",
    },
    {
      icon: Shield,
      title: "Privacy Controls",
      description: "Full control over your visibility.",
      category: "security",
      color: "text-indigo-400",
      glow: "shadow-indigo-500/30",
    },
    {
      icon: Zap,
      title: "Two-Factor Auth",
      description: "Extra layer of account protection.",
      category: "security",
      color: "text-yellow-400",
      glow: "shadow-yellow-500/30",
    },
    {
      icon: Users,
      title: "Group Chats",
      description: "Connect with large communities easily.",
      category: "social",
      color: "text-pink-400",
      glow: "shadow-pink-500/30",
    },
    {
      icon: Camera,
      title: "Media Sharing",
      description: "Send photos, videos & files instantly.",
      category: "social",
      color: "text-cyan-400",
      glow: "shadow-cyan-500/30",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#0b1f17] via-[#0f2e21] to-[#0b1f17] overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-3">
            Powerful{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-400">
            Everything you need for modern communication
          </p>
        </div>

        {/* CATEGORY */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2 rounded-full text-sm flex items-center gap-2 transition
                ${activeCategory === c.id
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {c.name}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filtered.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group"
              >
                <div className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-green-500/40 transition-all shadow-md hover:shadow-xl ${f.glow}`}>

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4 group-hover:scale-110 transition">
                    <Icon className={`w-6 h-6 ${f.color}`} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white font-semibold mb-2 group-hover:text-green-400 transition">
                    {f.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm">
                    {f.description}
                  </p>

                  {/* GLOW LINE */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-green-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition origin-left" />
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* TRUST */}
        <div className="text-center mt-12 text-gray-500 text-sm flex justify-center gap-2 items-center">
          <Heart className="w-4 h-4 text-green-400" />
          Trusted by millions
          <Heart className="w-4 h-4 text-green-400" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;