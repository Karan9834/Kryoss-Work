import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Users,
  Sparkles,
  Rocket,
  Heart,
  Globe,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Experience ultra-fast performance with optimized architecture and instant load times.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "Your data is protected with enterprise-grade security and 99.9% uptime guarantee.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Users,
    title: "User Focused",
    desc: "Designed for real users with seamless interactions and intuitive experiences.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    desc: "Modern UI with smooth animations, clean design, and delightful micro-interactions.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    desc: "Built to scale with your audience from thousands to millions of users.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
  },
  {
    icon: Heart,
    title: "Dedicated Support",
    desc: "24/7 customer support and dedicated account managers for your success.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Connect with users worldwide with multi-language and localization support.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
  },
  {
    icon: Award,
    title: "Industry Leader",
    desc: "Recognized as a top platform with multiple awards and industry accolades.",
    gradient: "from-yellow-500 to-amber-500",
    bgGradient: "from-yellow-50 to-amber-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-100/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24">

        {/* Heading - Updated Typography ONLY */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            {/* Badge - Updated: text-[14px] font-semibold */}
            <span className="text-[14px] font-semibold text-purple-600">
              Why Choose Us
            </span>
          </div>

          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Smart Choice
            </span>
          </h2>

          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="text-[16px] font-normal leading-[1.6] text-gray-600">
            Discover why leading brands trust us to power their platforms
          </p>
        </div>

        {/* Cards - Fonts KEPT ORIGINAL (unchanged) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition duration-500`} />

                  {/* ICON */}
                  <div className={`relative mb-5 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center group-hover:scale-110 transition`}>

                    {/* Glow layer */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-md transition`} />

                    <Icon className="w-7 h-7 text-gray-700 group-hover:text-purple-600 transition" />
                  </div>

                  {/* Card Title - ORIGINAL FONT (unchanged) */}
                  <h3 className="relative text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                    {feature.title}
                  </h3>

                  {/* Card Description - ORIGINAL FONT (unchanged) */}
                  <p className="relative text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
                    {feature.desc}
                  </p>

                  {/* Bottom Line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition origin-left`} />
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;