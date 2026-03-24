import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Heart, 
  Globe,
  Clock,
  Users,
  Award,
  Headphones,
  Sparkles,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your conversations are protected with military-grade encryption and advanced security protocols.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      delay: 0,
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience ultra-fast message delivery and real-time synchronization across all devices.",
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      delay: 0.1,
    },
    {
      icon: Heart,
      title: "User-Centric Design",
      description: "Intuitive interface designed for everyone, from tech-savvy users to first-time messengers.",
      gradient: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      delay: 0.2,
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with friends and family anywhere in the world with seamless connectivity.",
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service with 99.9% uptime guarantee and instant support.",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      delay: 0.4,
    },
    {
      icon: Users,
      title: "10M+ Active Users",
      description: "Join a thriving community of millions who trust our platform daily.",
      gradient: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      delay: 0.5,
    },
    {
      icon: Award,
      title: "Industry Award Winner",
      description: "Recognized as the best messaging app for privacy and user experience.",
      gradient: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      delay: 0.6,
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description: "Dedicated support team available 24/7 to assist with any questions or concerns.",
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      delay: 0.7,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="relative w-full bg-white py-24 lg:py-28 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Soft Green Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[80px]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what makes us the preferred choice for millions of users worldwide
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-xl ${reason.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${reason.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${reason.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 opacity-10" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="none">
          <path d="M0 0L1200 0L1200 120C1080 80 960 40 840 40C720 40 600 80 480 80C360 80 240 40 120 40C60 40 30 60 0 80L0 0Z" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22C55E" />
              <stop offset="0.5" stopColor="#10B981" />
              <stop offset="1" stopColor="#14B89E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;