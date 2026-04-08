import { Link } from 'react-router-dom';
import React from "react";

const reasons = [
  {
    image: "/whitelabel-assets/assets/images/why-choose/industry-solutions.webp",
    fallback: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    title: "Industry-Specific Solutions",
    description: "We deeply understand your industry's nuances and deliver solutions crafted for your specific vertical and user base.",
    icon: "🏭"
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/expert-team.webp",
    fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    title: "Expert Team & Support",
    description: "Our 40+ skilled developers, designers, and consultants are with you every step — from planning to post-launch.",
    icon: "👥"
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/track-record.webp",
    fallback: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&q=80",
    title: "Proven Track Record",
    description: "250+ successfully delivered projects across 70+ countries speak to our reliability and commitment to excellence.",
    icon: "🏆"
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/tech.webp",
    fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    title: "Cutting-Edge Technology",
    description: "We leverage the latest frameworks, AI tools, and cloud infrastructure to future-proof your product.",
    icon: "⚡"
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/user-centric.webp",
    fallback: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80",
    title: "User-Centric Approach",
    description: "Every design and development decision is guided by deep user research and proven UX principles.",
    icon: "🎯"
  },
  {
    image: "/whitelabel-assets/assets/images/why-choose/end-to-end.webp",
    fallback: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    title: "End-to-End Service",
    description: "From ideation and design to development, deployment, and ongoing support — we handle it all.",
    icon: "🔄"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-white overflow-hidden">

      {/* 🔥 SUBTLE ORANGE STRIPE CONTAINER - TOP */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-r from-orange-500/15 to-amber-500/15" />

      {/* Top Stripe Inner Glow - Subtle */}
      <div className="absolute top-28 left-0 w-full h-16 bg-gradient-to-b from-orange-500/8 to-transparent" />

      {/* 🔥 SUBTLE ORANGE STRIPE CONTAINER - BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-r from-orange-500/15 to-amber-500/15" />

      {/* Bottom Stripe Inner Glow - Subtle */}
      <div className="absolute bottom-28 left-0 w-full h-16 bg-gradient-to-t from-orange-500/8 to-transparent" />

      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Soft gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-3xl" />

        {/* Warm glow accents */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-300/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-300/20 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-600 text-xs font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why We Are the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Best Choice
            </span>{" "}
            for Your Digital Solution?
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover what makes us the trusted partner for businesses worldwide
          </p>
        </div>

        {/* Cards Grid - No Hover Effects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, index) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-md"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.error) {
                      e.currentTarget.dataset.error = "true";
                      e.currentTarget.src = r.fallback;
                    }
                  }}
                />

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
                  {r.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - No Hover Effects */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-1 pr-6 shadow-md">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-orange-500 text-xl">✨</span>
            </div>
            <span className="text-white font-semibold">Ready to start your journey with us?</span>
            <Link to="/company/contact" className="px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-semibold">
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}