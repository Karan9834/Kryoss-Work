import React from "react";
import {
  Shield,
  Zap,
  Globe,
  Clock,
  Users,
  Award,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Verified",
      desc: "Every story is fact-checked from reliable sources before publishing.",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      desc: "Breaking news delivered in real-time without delay.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      desc: "Stay informed with news from around the world.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      desc: "Access news anytime, anywhere with continuous updates.",
    },
    {
      icon: Users,
      title: "Expert Journalists",
      desc: "Content curated by experienced reporters and analysts.",
    },
    {
      icon: Award,
      title: "Award Winning",
      desc: "Recognized globally for quality journalism and innovation.",
    },
  ];

  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-orange-600 font-medium mb-2">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Modern Readers Worldwide
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine technology, expertise, and real-time insights to deliver the best news experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-500 transition">
                  <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm">
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

export default WhyChooseUs;