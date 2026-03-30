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
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized workflows that reduce publishing time by up to 70% with real-time collaboration.",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 2,
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "Bank-level encryption, role-based access, and compliance with global security standards.",
      color: "from-orange-400 to-yellow-500",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description:
        "Advanced analytics and AI predictions to optimize content strategy and audience engagement.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      icon: Users,
      title: "Seamless Collaboration",
      description:
        "Real-time co-editing, task management, and team communication tools built for newsrooms.",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 5,
      icon: Clock,
      title: "24/7 Expert Support",
      description:
        "Dedicated support team available around the clock to ensure your operations never stop.",
      color: "from-orange-400 to-pink-500",
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Distribution Network",
      description:
        "Reach audiences worldwide with automated multi-channel publishing capabilities.",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-28">

      {/* 🌊 TOP WAVE */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#FFF7ED"
            d="M0,192L80,176C160,160,320,128,480,117.3C640,107,800,117,960,144C1120,171,1280,213,1360,234.7L1440,256V0H0Z"
          ></path>
        </svg>
      </div>

      {/* 🌊 BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#FFF7ED"
            d="M0,128L80,138.7C160,149,320,171,480,186.7C640,203,800,213,960,192C1120,171,1280,117,1360,90.7L1440,64V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Glow blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 blur-3xl opacity-40 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-300 blur-3xl opacity-40 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Built for{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 text-transparent bg-clip-text">
              Modern Newsrooms
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Powerful features designed to scale your newsroom operations efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.id}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Hover Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-10 transition duration-500`}></div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition`}>
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                  {reason.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} scale-x-0 group-hover:scale-x-100 transition origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 bg-orange-50 rounded-full px-8 py-4 border border-orange-100">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-orange-500" />
              <span className="text-orange-700 text-sm">
                Trusted by 500+ Newsrooms
              </span>
            </div>
            <div className="w-px h-6 bg-orange-200"></div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-orange-500" />
              <span className="text-orange-700 text-sm">
                98% Satisfaction Rate
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;