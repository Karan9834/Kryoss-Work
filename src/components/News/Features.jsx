import React, { useState } from "react";
import {
  Globe,
  Clock,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Headphones,
  Sparkles,
  Star,
  Lock,
  ChevronRight,
} from "lucide-react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Correspondents in 50+ countries delivering local insights with global perspective.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Shield,
      title: "Verified Content",
      description:
        "Triple-checked facts with sources and citations for complete transparency.",
      color: "from-indigo-400 to-purple-400",
    },
    {
      icon: Clock,
      title: "Instant Alerts",
      description:
        "Push notifications for breaking news delivered straight to your device.",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Seasoned journalists and industry experts behind every story.",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description:
        "AI-powered insights showing what stories matter to your community.",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description:
        "Recognized for excellence in journalism and digital innovation.",
      color: "from-rose-400 to-red-400",
    },
  ];

  return (
    <section className="relative bg-[#0a0f1a] px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f172a] to-[#020617]"></div>

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-white/5 px-5 py-2 rounded-full border border-white/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-gray-300">Why Choose Us</span>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white">
            Trusted News Platform for Modern Readers
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
            Reliable journalism, real-time updates, and expert insights — all in one place.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur-md`}></div>

                {/* Card */}
                <div
                  className={`relative backdrop-blur-xl rounded-2xl p-6 border transition duration-500 ${
                    isHovered
                      ? "border-white/30 bg-white/10 -translate-y-2"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {/* Icon */}
                  <div className={`mb-5 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-[1px]`}>
                    <div className="w-full h-full bg-[#0f172a] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                  <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-white mb-2">
                    {feature.title}
                  </h3>

                  {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                  <p className="text-gray-400 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* EXTRA CARDS */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          
          {/* Newsletter */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
            <BookOpen className="text-blue-400" />
            <div>
              <h3 className="text-white font-semibold text-[16px] md:text-[18px]">Daily Newsletter</h3>
              <p className="text-gray-400 text-[13px] md:text-[14px] font-normal">Get top stories delivered every morning.</p>
              <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-2">
                <Lock size={12} /> Free subscription
                <ChevronRight size={12} className="ml-auto" />
              </div>
            </div>
          </div>

          {/* Audio */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
            <Headphones className="text-purple-400" />
            <div>
              <h3 className="text-white font-semibold text-[16px] md:text-[18px]">Audio Articles</h3>
              <p className="text-gray-400 text-[13px] md:text-[14px] font-normal">Listen to news on the go.</p>
              <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-2">
                <Star size={12} /> Premium feature
                <ChevronRight size={12} className="ml-auto" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;