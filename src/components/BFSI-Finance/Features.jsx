import React, { useState } from "react";
import {
  Shield,
  Zap,
  Globe,
  Clock,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  BarChart3,
  Wallet,
  LineChart,
  Target,
} from "lucide-react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and security protocols to protect your sensitive financial data.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description:
        "Instant insights and predictive analytics to make informed decisions faster.",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description:
        "AI-powered market trends and competitor analysis for strategic advantage.",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      icon: Wallet,
      title: "Asset Management",
      description:
        "Comprehensive portfolio tracking and risk assessment tools.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: LineChart,
      title: "Predictive Modeling",
      description:
        "Advanced algorithms to forecast market trends and identify opportunities.",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description:
        "Real-time risk scoring and compliance monitoring for informed decisions.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30 px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* Light Orange Background Decorations */}
      <div className="absolute inset-0">
        {/* Soft Orange Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/60 rounded-full blur-3xl"></div>

        {/* Orange Wave Pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-48 opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f97316"
            fillOpacity="0.2"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Subtle Orange Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating Sparkles */}
        <div className="absolute top-1/4 right-1/4 opacity-30 animate-pulse">
          <Sparkles className="w-8 h-8 text-amber-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20">
          <TrendingUp className="w-12 h-12 text-orange-300" strokeWidth={1} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full border border-orange-200/50 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
            <span className="text-gray-900">Everything You Need for</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Financial Excellence
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
            Comprehensive tools and insights to transform your financial
            operations
          </p>
        </div>

        {/* Features Grid with Glassmorphism Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Glassmorphism Card */}
                <div
                  className={`relative backdrop-blur-xl rounded-2xl p-6 md:p-8 border transition-all duration-500 ${
                    isHovered
                      ? "border-orange-300/50 bg-white/90 shadow-2xl -translate-y-2"
                      : "border-orange-100/50 bg-white/70 shadow-lg"
                  }`}
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div
                    className={`relative mb-5 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] shadow-md`}
                  >
                    <div
                      className={`w-full h-full rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "bg-transparent" : "bg-white"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 text-gray-800 group-hover:text-white transition duration-300" />
                    </div>
                  </div>

                  {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                  <h3
                    className={`text-[18px] md:text-[20px] font-bold leading-[1.3] mb-3 transition-all duration-300 ${
                      isHovered
                        ? "text-transparent bg-gradient-to-r from-gray-900 to-orange-900 bg-clip-text"
                        : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Card Description - Updated: text-[14px] md:text-[14px] font-normal leading-[1.6] */}
                  <p
                    className={`text-[14px] md:text-[14px] font-normal leading-[1.6] mb-4 transition-colors duration-300 ${
                      isHovered ? "text-gray-700" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Stats Section Removed */}

                  {/* Decorative Bottom Line */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Feature Cards - Updated typography */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {/* AI-Powered Insights */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
            <div className="relative bg-white/70 backdrop-blur-xl border border-orange-100/50 rounded-2xl p-6 hover:border-orange-300/50 transition-all duration-300 group-hover:bg-white/90">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-[1px]">
                  <div className="w-full h-full bg-white/95 rounded-xl flex items-center justify-center group-hover:bg-transparent transition-all">
                    <TrendingUp className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.3] text-gray-900">
                  AI-Powered Insights
                </h3>
              </div>
              <p className="text-gray-600 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                Machine learning algorithms that adapt to your business needs
              </p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
            <div className="relative bg-white/70 backdrop-blur-xl border border-orange-100/50 rounded-2xl p-6 hover:border-orange-300/50 transition-all duration-300 group-hover:bg-white/90">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 p-[1px]">
                  <div className="w-full h-full bg-white/95 rounded-xl flex items-center justify-center group-hover:bg-transparent transition-all">
                    <Clock className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.3] text-gray-900">
                  24/7 Expert Support
                </h3>
              </div>
              <p className="text-gray-600 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                Dedicated support team available around the clock
              </p>
            </div>
          </div>

          {/* Enterprise Ready */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
            <div className="relative bg-white/70 backdrop-blur-xl border border-orange-100/50 rounded-2xl p-6 hover:border-orange-300/50 transition-all duration-300 group-hover:bg-white/90">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 p-[1px]">
                  <div className="w-full h-full bg-white/95 rounded-xl flex items-center justify-center group-hover:bg-transparent transition-all">
                    <Shield className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-[16px] md:text-[18px] font-bold leading-[1.3] text-gray-900">
                  Enterprise Ready
                </h3>
              </div>
              <p className="text-gray-600 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                Scalable solutions for institutions of all sizes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;