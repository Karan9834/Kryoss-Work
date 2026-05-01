import React from "react";
import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Award,
  Heart,
  Sparkles,
  Star,
  Rocket,
  Headphones,
  CheckCircle,
  Crown,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Crown,
      title: "Industry Leader",
      description:
        "Trusted by 500+ businesses worldwide with proven track record of excellence.",
      gradient: "from-amber-500 to-orange-500",
      delay: "0s",
    },
    {
      id: 2,
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized workflows that reduce processing time by up to 70% with real-time automation.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0.1s",
    },
    {
      id: 3,
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, role-based access, and compliance with global security standards.",
      gradient: "from-emerald-500 to-teal-500",
      delay: "0.2s",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description:
        "Advanced analytics and AI predictions to optimize strategy and maximize growth.",
      gradient: "from-purple-500 to-pink-500",
      delay: "0.3s",
    },
    {
      id: 5,
      icon: Headphones,
      title: "24/7 Expert Support",
      description:
        "Dedicated support team available around the clock with guaranteed response times.",
      gradient: "from-indigo-500 to-purple-500",
      delay: "0.4s",
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Distribution",
      description:
        "Reach audiences worldwide with multi-channel publishing across 40+ countries.",
      gradient: "from-cyan-500 to-blue-500",
      delay: "0.5s",
    },
    {
      id: 7,
      icon: Rocket,
      title: "Scalable Infrastructure",
      description:
        "Handle unlimited growth with auto-scaling architecture that evolves with you.",
      gradient: "from-orange-500 to-red-500",
      delay: "0.6s",
    },
    {
      id: 8,
      icon: Users,
      title: "Seamless Collaboration",
      description:
        "Real-time co-editing, task management, and team communication tools.",
      gradient: "from-teal-500 to-emerald-500",
      delay: "0.7s",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 via-transparent to-purple-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-50 via-transparent to-amber-50 rounded-full blur-3xl opacity-40"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-emerald-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-amber-400/30 rounded-full animate-float animation-delay-1500"></div>
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-float animation-delay-2500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-emerald-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <Heart size={16} className="text-rose-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Smart Choice for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 text-transparent bg-clip-text">
              Modern Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Join thousands of satisfied customers who trust our platform for
            their success
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ animationDelay: reason.delay }}
              >
                {/* Premium Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                  style={{ padding: "2px" }}
                >
                  <div className="absolute inset-0 bg-white rounded-2xl m-[2px] opacity-0"></div>
                </div>

                {/* Icon Container */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md`}
                >
                  <IconComponent size={26} className="text-white" />

                  {/* Icon Glow */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${reason.gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}
                  ></div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 transition-all duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Decorative Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}
                ></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Card Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                  {reason.id.toString().padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl px-8 py-4 border border-gray-200 shadow-md">
            <div className="flex items-center gap-2">
              <Crown size={20} className="text-amber-500" />
              <span className="text-gray-700 text-sm font-medium">
                Industry Leader 2024
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-500" />
              <span className="text-gray-700 text-sm font-medium">
                4.9/5 Customer Rating
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-emerald-500" />
              <span className="text-gray-700 text-sm font-medium">
                99.9% Uptime Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-12px) translateX(6px);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
