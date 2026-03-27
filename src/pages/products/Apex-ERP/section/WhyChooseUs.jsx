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
  Cloud
} from "lucide-react";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Enterprise-level encryption and security protocols to protect your sensitive financial data.",
      gradient: "from-emerald-500 to-sky-500",
      stat: "256-bit",
      statLabel: "Encryption",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times for real-time processing.",
      gradient: "from-sky-500 to-emerald-500",
      stat: "< 100ms",
      statLabel: "Latency",
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Multi-currency, multi-language support worldwide.",
      gradient: "from-emerald-500 to-sky-500",
      stat: "100+",
      statLabel: "Countries",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert support for your business.",
      gradient: "from-sky-500 to-emerald-500",
      stat: "24/7",
      statLabel: "Support",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Financial experts with decades of experience.",
      gradient: "from-emerald-500 to-sky-500",
      stat: "100+",
      statLabel: "Experts",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Globally recognized ERP innovation.",
      gradient: "from-sky-500 to-emerald-500",
      stat: "25+",
      statLabel: "Awards",
    },
  ];

  return (
    <section className="relative bg-white px-6 md:px-12 py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-emerald-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-emerald-600 uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Financial Leaders
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
              Worldwide
            </span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Join enterprises that rely on our ERP for financial operations
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition duration-300"
              >
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 group-hover:bg-emerald-500 transition">
                  <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>

                <div className="text-sm font-semibold text-emerald-600">
                  {feature.stat}{" "}
                  <span className="text-gray-500">
                    {feature.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* TRUST STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-500">Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-500">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">99.99%</div>
            <div className="text-sm text-gray-500">Uptime</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">25+</div>
            <div className="text-sm text-gray-500">Awards</div>
          </div>
        </div>

        {/* BADGES */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <CheckCircle className="text-emerald-500 w-4 h-4" />
            ISO Certified
          </span>
          <span className="flex items-center gap-2">
            <Shield className="text-emerald-500 w-4 h-4" />
            SOC 2
          </span>
          <span className="flex items-center gap-2">
            <Cloud className="text-emerald-500 w-4 h-4" />
            GDPR Compliant
          </span>
          <span className="flex items-center gap-2">
            <Star className="text-yellow-400 w-4 h-4" />
            4.9 Rating
          </span>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;