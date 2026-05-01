import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Shield,
  Users,
  Globe,
  Lock,
  Heart
} from "lucide-react";
import whatsabout from "../../../../assets/Meetzy/2.png"

const AboutUs = () => {
  const stats = [
    { value: "10M+", label: "Active Users", icon: Users },
    { value: "1B+", label: "Messages Daily", icon: MessageCircle },
    { value: "180+", label: "Countries", icon: Globe },
  ];

  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your conversations are private and secure with military-grade encryption.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "We never share your data. Complete control over your information.",
    },
    {
      icon: Heart,
      title: "User-Centric Design",
      description: "Built for seamless and intuitive user experience.",
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0, x: -30 },
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

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Soft Green Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[80px]" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-18">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md lg:max-w-[500px]">
              {/* Premium Glow Effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-green-200/40 via-emerald-200/40 to-teal-200/40 blur-2xl" />

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10 border border-gray-100">
                <img
                  src={whatsabout}
                  alt="About Us - Team Collaboration"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 max-w-xl order-1 lg:order-2"
          >
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Connecting People
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {" "}Across the Globe
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              We're on a mission to revolutionize how people communicate. Our platform brings
              friends, families, and communities closer together through seamless, secure, and
              delightful messaging experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed mb-8"
            >
              Founded with a vision to create a safer, more connected world, we've grown into
              a trusted platform used by millions worldwide. Privacy, security, and user
              experience are at the heart of everything we do.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 mb-8"
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-50 flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 opacity-20" preserveAspectRatio="none" viewBox="0 0 1200 120" fill="none">
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

export default AboutUs;