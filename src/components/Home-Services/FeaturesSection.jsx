import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Clock,
  Star,
  MapPin,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    desc: "Book any home service in seconds with a seamless experience.",
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    desc: "All service providers are background-checked and trusted.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    desc: "Track service status and professional location live.",
    color: "from-blue-400 to-cyan-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Star,
    title: "Top Rated Services",
    desc: "Choose from highly rated professionals with reviews.",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: MapPin,
    title: "Nearby Services",
    desc: "Find trusted services near you instantly.",
    color: "from-purple-400 to-indigo-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Smartphone,
    title: "Easy Mobile Access",
    desc: "Manage bookings and services directly from your phone.",
    color: "from-indigo-400 to-blue-500",
    bg: "bg-indigo-500/10",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0B0F1A]">

      {/* 🌈 SOFT DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#111827] to-[#1e1b4b]" />

      {/* ✨ GLOW */}
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Powerful{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text">
              Features
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to manage home services effortlessly and efficiently.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

                  {/* 🔥 HOVER GRADIENT BORDER */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition`} />

                  {/* ICON */}
                  <div className={`relative mb-5 w-14 h-14 rounded-xl flex items-center justify-center ${feature.bg} group-hover:scale-110 transition`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition">
                    {feature.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition">
                    {feature.desc}
                  </p>

                  {/* 🔥 BOTTOM LINE */}
                  <div className={`absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition origin-left`} />

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;