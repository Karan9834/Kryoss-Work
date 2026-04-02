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
  Cpu,
  Box,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Crown,
      title: "Industry Leader",
      description:
        "Trusted by 50,000+ websites worldwide with proven track record of excellence.",
      gradient: "from-purple-500 to-fuchsia-500",
      delay: "0s",
    },
    {
      id: 2,
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized code that reduces load times by up to 60% without compromising functionality.",
      gradient: "from-fuchsia-500 to-purple-500",
      delay: "0.1s",
    },
    {
      id: 3,
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, regular security audits, and proactive threat protection.",
      gradient: "from-purple-500 to-indigo-500",
      delay: "0.2s",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description:
        "Advanced analytics and AI predictions to optimize your content strategy.",
      gradient: "from-indigo-500 to-purple-500",
      delay: "0.3s",
    },
    {
      id: 5,
      icon: Headphones,
      title: "24/7 Expert Support",
      description:
        "Round-the-clock support with guaranteed 30-minute response time from real humans.",
      gradient: "from-purple-500 to-fuchsia-500",
      delay: "0.4s",
    },
    {
      id: 6,
      icon: Globe,
      title: "Global CDN Network",
      description:
        "Built-in CDN support for lightning-fast delivery to users in 200+ countries.",
      gradient: "from-fuchsia-500 to-purple-500",
      delay: "0.5s",
    },
    {
      id: 7,
      icon: Cpu,
      title: "Edge Computing Ready",
      description:
        "Process data at the edge for reduced latency and improved performance.",
      gradient: "from-purple-500 to-indigo-500",
      delay: "0.6s",
    },
    {
      id: 8,
      icon: Box,
      title: "Modular Architecture",
      description:
        "Install only what you need. Each plugin works independently without bloat.",
      gradient: "from-indigo-500 to-purple-500",
      delay: "0.7s",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
      {/* Subtle Purple/Blue Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-50 to-fuchsia-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-40"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f708_1px,transparent_1px),linear-gradient(to_bottom,#a855f708_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border border-purple-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-fuchsia-100 rounded-full opacity-20"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-fuchsia-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-400/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-100 rounded-full px-4 py-2 mb-6">
            <Heart size={16} className="text-purple-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-transparent bg-clip-text">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Smart Choice for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-transparent bg-clip-text">
              WordPress Excellence
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Join thousands of satisfied customers who trust our plugins for
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
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
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
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all duration-300">
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
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-purple-100 transition-colors duration-300">
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
              <Crown size={20} className="text-purple-500" />
              <span className="text-gray-700 text-sm font-medium">
                Top Rated 2024
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
                100% Money Back Guarantee
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
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
