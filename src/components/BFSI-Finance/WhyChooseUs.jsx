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
  Heart,
  Star,
  CheckCircle,
  Lock,
  Headphones,
} from "lucide-react";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Enterprise-level encryption and security protocols to protect your sensitive financial data at all times.",
      gradient: "from-amber-500 to-orange-500",
      delay: "0s",
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description:
        "Sub-millisecond response times for real-time trading and analytics, ensuring you never miss an opportunity.",
      gradient: "from-orange-500 to-rose-500",
      delay: "0.1s",
    },
    {
      icon: Globe,
      title: "Global Market Coverage",
      description:
        "Access to 100+ financial markets worldwide with localized insights and global perspectives.",
      gradient: "from-amber-500 to-rose-500",
      delay: "0.2s",
    },
    {
      icon: Clock,
      title: "24/7 Real-Time Monitoring",
      description:
        "Round-the-clock surveillance of market movements and portfolio performance with instant alerts.",
      gradient: "from-orange-500 to-amber-500",
      delay: "0s",
    },
    {
      icon: Users,
      title: "Expert Team of Analysts",
      description:
        "Seasoned financial experts and data scientists with decades of combined industry experience.",
      gradient: "from-rose-500 to-orange-500",
      delay: "0.1s",
    },
    {
      icon: Award,
      title: "Award-Winning Platform",
      description:
        "Recognized globally for innovation in financial technology and excellence in service delivery.",
      gradient: "from-amber-500 to-orange-500",
      delay: "0.2s",
    },
  ];

  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* Light Orange Background Decorations */}
      <div className="absolute inset-0">
        {/* Soft Orange Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-3xl"></div>

        {/* Subtle Orange Wave Pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-32 opacity-10"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f97316"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Subtle Orange Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731605_1px,transparent_1px),linear-gradient(to_bottom,#f9731605_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating Sparkles */}
        <div className="absolute top-20 right-20 opacity-20">
          <Sparkles className="w-12 h-12 text-amber-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <TrendingUp className="w-12 h-12 text-orange-400" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <Heart className="w-5 h-5 text-orange-500" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
            Why Financial Leaders{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-orange-300"></div>
            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
            <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl">
              Trusted by top institutions for our commitment to excellence,
              security, and innovation
            </p>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-orange-300"></div>
          </div>
        </div>

        {/* Features Grid */}
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
                style={{ animationDelay: feature.delay }}
              >
                {/* Glow Effect on Hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Glassmorphism Card */}
                <div
                  className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-500 ${
                    isHovered
                      ? "border-orange-300/50 shadow-2xl -translate-y-2"
                      : "border-orange-100/50 shadow-lg"
                  }`}
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div
                    className={`relative mb-5 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] shadow-md`}
                  >
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center group-hover:bg-transparent transition duration-500">
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

        {/* Decorative Bottom Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;