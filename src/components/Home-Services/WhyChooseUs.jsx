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
  Clock,
  CreditCard,
  Headphones,
  ThumbsUp,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience instant service booking with response times under 30 seconds.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-100",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Every service is backed by comprehensive insurance for your peace of mind.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Users,
    title: "Vetted Professionals",
    description:
      "All service providers undergo rigorous background checks and training.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock service for emergencies and last-minute needs.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-100",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Encrypted transactions with multiple payment options available.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    iconBg: "bg-cyan-100",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    description:
      "Dedicated support team available 24/7 to assist with any concerns.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    iconBg: "bg-indigo-100",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Access to trusted service providers across multiple cities worldwide.",
    gradient: "from-teal-500 to-emerald-500",
    bgGradient: "from-teal-50 to-emerald-50",
    iconBg: "bg-teal-100",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized as the best home service platform for 3 years running.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-100/40 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* HEADING - Updated Typography ONLY */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-500" />
            {/* Badge - Updated: text-[14px] font-semibold */}
            <span className="text-[14px] font-semibold text-purple-600">
              Why Choose Us
            </span>
          </div>

          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Smart Choice
            </span>
          </h2>

          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="text-[16px] font-normal leading-[1.6] text-gray-600 max-w-xl mx-auto">
            Discover why thousands trust us for their home services
          </p>
        </div>

        {/* GRID - Card fonts KEPT ORIGINAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div key={index} whileHover={{ y: -10 }} className="group">
                <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden">
                  {/* Hover BG */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-30 blur-xl transition duration-300`}
                  ></div>

                  {/* ICON */}
                  <div
                    className={`relative mb-5 w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center group-hover:scale-110 transition`}
                  >
                    <Icon className="w-7 h-7 text-gray-700 group-hover:text-purple-600 transition-all duration-300" />
                  </div>

                  {/* Card Title - ORIGINAL FONT (unchanged) */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                    {feature.title}
                  </h3>

                  {/* Card Description - ORIGINAL FONT (unchanged) */}
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
                    {feature.description}
                  </p>

                  {/* Bottom Line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "50K+", label: "Customers", icon: Heart },
            { value: "10K+", label: "Professionals", icon: Users },
            { value: "99%", label: "Satisfaction", icon: ThumbsUp },
            { value: "24/7", label: "Support", icon: Headphones },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx}>
                <Icon className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <p className="text-xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;