import React from "react";
import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Headphones,
  Crown,
  Star,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Crown,
      title: "Industry Leader",
      description: "Trusted by 500+ businesses with proven excellence.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: 2,
      icon: Zap,
      title: "Lightning Fast",
      description: "Boost performance with optimized workflows.",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      id: 3,
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security and data protection.",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Advanced analytics to scale your business.",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 5,
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support anytime you need.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Reach",
      description: "Expand across regions with ease.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 7,
      icon: Rocket,
      title: "Scalable System",
      description: "Built to grow with your business.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 8,
      icon: Users,
      title: "Collaboration",
      description: "Work seamlessly with your team.",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Our Platform
            </span>
          </h2>

          <p className="mt-6 text-gray-600">
            Built for performance, scalability, and modern business needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.id}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                
                {/* GRADIENT TOP BAR */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${reason.gradient}`}></div>

                {/* SOFT GLOW */}
                <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-5 transition duration-500`}></div>

                {/* ICON */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                  {reason.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* BOTTOM LINE */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} scale-x-0 group-hover:scale-x-100 transition origin-left`}></div>

              </div>
            );
          })}

        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-gray-50 rounded-full px-8 py-4 border border-gray-200 shadow-sm">

            <div className="flex items-center gap-2">
              <Crown size={18} className="text-orange-500" />
              <span className="text-gray-700 text-sm">Industry Leader</span>
            </div>

            <div className="w-px h-6 bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <Star size={18} className="text-yellow-500" />
              <span className="text-gray-700 text-sm">4.9 Rating</span>
            </div>

            <div className="w-px h-6 bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" />
              <span className="text-gray-700 text-sm">99.9% Uptime</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;