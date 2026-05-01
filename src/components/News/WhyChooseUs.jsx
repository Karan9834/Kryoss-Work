import React from "react";
import {
  Shield,
  Zap,
  Globe,
  Clock,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Verified",
      description:
        "Every story undergoes rigorous fact-checking and verification from multiple reliable sources before publication.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s",
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description:
        "Breaking news delivered instantly with live updates as events unfold around the world.",
      gradient: "from-indigo-500 to-purple-500",
      delay: "0.1s",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description:
        "Journalists and correspondents in 50+ countries bringing you diverse perspectives from every corner.",
      gradient: "from-purple-500 to-pink-500",
      delay: "0.2s",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock news coverage ensuring you're always informed, day or night.",
      gradient: "from-amber-500 to-orange-500",
      delay: "0s",
    },
    {
      icon: Users,
      title: "Expert Journalists",
      description:
        "Seasoned reporters and industry experts with decades of combined experience.",
      gradient: "from-emerald-500 to-teal-500",
      delay: "0.1s",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description:
        "Recognized globally for excellence in journalism and digital innovation.",
      gradient: "from-rose-500 to-red-500",
      delay: "0.2s",
    },
  ];

  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-50 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f604_1px,transparent_1px),linear-gradient(to_bottom,#3b82f604_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
            <Sparkles className="w-5 h-5 text-indigo-500" />
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Trusted Choice
            </span>
            <br />
            for Modern Readers
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
            Discover why millions of readers rely on us for accurate, timely,
            and insightful news coverage
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: feature.delay }}
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Card Content */}
                <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div
                    className={`relative mb-5 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px]`}
                  >
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center group-hover:bg-transparent transition">
                      <IconComponent className="w-6 h-6 text-gray-800 group-hover:text-white transition" />
                    </div>
                  </div>

                  {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                  <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
                  <p className="text-gray-600 text-[14px] md:text-[14px] font-normal leading-[1.6] group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;