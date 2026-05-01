import React, { useState } from "react";
import {
  Shield,
  Zap,
  Globe,
  Clock,
  Users,
  Award,
} from "lucide-react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Verified Content",
      desc: "Every story is fact-checked and verified before publishing.",
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      desc: "Breaking news delivered instantly with zero delay.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      desc: "News from across the world with local perspectives.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "Stay updated anytime, anywhere without interruption.",
    },
    {
      icon: Users,
      title: "Expert Journalists",
      desc: "Content curated by experienced reporters and analysts.",
    },
    {
      icon: Award,
      title: "Award Winning",
      desc: "Recognized globally for excellence in journalism.",
    },
  ];

  return (
    <section className="relative bg-[#0a0a0f] px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-orange-400 font-medium mb-2">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Powerful Features for Modern Readers
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Experience next-generation news with real-time updates and intelligent insights.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-xl p-6 border transition duration-300 ${
                  isHovered
                    ? "bg-white/5 border-orange-400/40 -translate-y-1"
                    : "bg-white/3 border-white/10"
                }`}
              >
                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/10">
                  <Icon className="text-orange-400 w-6 h-6" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;