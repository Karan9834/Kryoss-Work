import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonial = ({
  theme = "purple", // default theme
  bgGradient = "",
  cardGradient = "",
  headingText = "What Our Clients Say",
  subheadingText = "Join thousands of satisfied businesses that trust our platform",
}) => {
  // Theme-based color mapping
  const themeColors = {
    purple: {
      badge: "bg-purple-100 text-purple-600",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      cardGradient: "from-purple-500 to-pink-500",
    },

     "orange-teal": {
      badge: "bg-orange-100 text-orange-600",
      gradient: "from-orange-500 via-orange-400 to-teal-500",
      cardGradient: "from-orange-500 to-teal-500",
      overlayFrom: "from-[#FFF7ED]",
    },
    
    blue: {
      badge: "bg-blue-100 text-blue-600",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      cardGradient: "from-blue-500 to-cyan-500",
    },
    teal: {
      badge: "bg-cyan-100 text-cyan-600",
      gradient: "from-cyan-600 via-teal-500 to-emerald-500",
      cardGradient: "from-cyan-500 to-emerald-500",
    },

    // ✅ OPTIONAL (for dark theme later)
    dark: {
      badge:
        "bg-white/10 text-cyan-400 border border-white/20 backdrop-blur-md",
      gradient: "from-cyan-400 via-teal-400 to-emerald-400",
      cardGradient: "from-cyan-500 to-emerald-500",
    },
    green: {
      badge: "bg-green-100 text-green-600",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      cardGradient: "from-green-500 to-emerald-500",
    },
    orange: {
      badge: "bg-orange-100 text-orange-600",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      cardGradient: "from-orange-500 to-red-500",
    },
    pink: {
      badge: "bg-pink-100 text-pink-600",
      gradient: "from-pink-600 via-rose-600 to-purple-600",
      cardGradient: "from-pink-500 to-rose-500",
    },
  };

  const colors = themeColors[theme] || themeColors.purple;
  const currentBgGradient = bgGradient || `from-${theme}-50 to-white`;

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, TasteBuds",
      content:
        "This platform transformed our food delivery business. We've seen a 300% increase in orders within just 3 months of launch.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108777-466fd4c2437b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Michael Chen",
      role: "CEO, FreshMart",
      content:
        "The multi-vendor functionality is seamless. Our grocery marketplace now hosts 50+ vendors with zero technical issues.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Owner, SpeedyRides",
      content:
        "Launched our taxi app in just 2 weeks. The real-time tracking and driver management features are exceptional.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "David Kim",
      role: "CTO, ShopEase",
      content:
        "Enterprise-grade security and 99.9% uptime. We process millions in transactions without any concerns.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director, GoFresh",
      content:
        "The analytics dashboard gives us incredible insights. We've optimized our operations and increased profits by 40%.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "James Wilson",
      role: "Founder, QuickCart",
      content:
        "Best decision we ever made. The support team is available 24/7 and helped us scale globally within months.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  // Duplicate testimonials for seamless marquee
  const marqueeTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      className={`w-full bg-gradient-to-b ${currentBgGradient} py-24 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header - Customizable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full mb-6`}
          >
            <Quote size={16} />
            <span className="text-sm font-medium">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {headingText.split(" ").slice(0, -1).join(" ")}
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}
            >
              {headingText.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subheadingText}
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <div className="relative">
          {/* First Row - Moving Right */}
          <div className="marquee-container mb-6">
            <motion.div
              className="marquee-content marquee-right"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {marqueeTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                  cardGradient={cardGradient || colors.cardGradient}
                />
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="marquee-container">
            <motion.div
              className="marquee-content marquee-left"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {marqueeTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                  cardGradient={cardGradient || colors.cardGradient}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-${theme}-50 to-transparent pointer-events-none z-10`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-${theme}-50 to-transparent pointer-events-none z-10`}></div>

        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }

          .marquee-content {
            display: flex;
            gap: 1.5rem;
            width: fit-content;
          }

          .marquee-container:hover .marquee-right,
          .marquee-container:hover .marquee-left {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

// Individual Testimonial Card Component
const TestimonialCard = ({ testimonial, cardGradient }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="w-[350px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group/card"
    >
      {/* Gradient top line - customizable */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cardGradient} rounded-t-2xl`}
      ></div>

      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote size={40} className="text-gray-400" />
      </div>

      {/* Rating stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${cardGradient} rounded-full blur-md opacity-50`}
          ></div>
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="relative w-12 h-12 rounded-full object-cover border-2 border-white"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>

      {/* Bottom gradient on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cardGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
      ></div>
    </motion.div>
  );
};

export default Testimonial;
