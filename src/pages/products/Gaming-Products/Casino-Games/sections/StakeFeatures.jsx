import React, { useState } from "react";
import { 
  Shield, 
  Zap, 
  CreditCard, 
  Gamepad2, 
  Headphones, 
  BarChart3,
  Trophy,
  Users,
  Globe,
  Lock,
  Smartphone,
  Gift
} from "lucide-react";

const StakeFeatures = () => {
  const [activeTab, setActiveTab] = useState("gaming");

  const gamingFeatures = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "2,000+ Casino Games",
      description: "Extensive library of slots, table games, and live dealer experiences from top providers."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Tournaments & Leaderboards",
      description: "Engaging competitions with real-time rankings and attractive prize pools."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Gameplay",
      description: "Optimized performance with <100ms latency for seamless gaming experience."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Fully responsive platform that works flawlessly on all devices and screen sizes."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Bonus & Reward System",
      description: "Automated welcome bonuses, deposit matches, and loyalty rewards program."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiplayer Tables",
      description: "Real-time multiplayer poker, blackjack, and other social casino games."
    }
  ];

  const platformFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, DDoS protection, and regular security audits."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "50+ Payment Methods",
      description: "Support for crypto, cards, e-wallets, and local payment solutions worldwide."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "KYC & Compliance",
      description: "Automated identity verification and regulatory compliance tools built-in."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time dashboards for player behavior, revenue, and game performance."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support System",
      description: "Multi-channel customer support with ticketing and live chat integration."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language & Currency",
      description: "Support for 20+ languages and 100+ currencies including crypto."
    }
  ];

  const features = activeTab === "gaming" ? gamingFeatures : platformFeatures;

  return (
    <section className="relative w-full py-20 md:py-28 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-amber-500/0 via-amber-500/0 to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 text-amber-400 px-3 py-1.5 rounded-full mb-5 text-xs font-normal tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
            Platform Capabilities
          </div>

          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white">
            Powerful <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Features</span>
          </h2>
          
          <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
            Everything you need to launch and scale a successful iGaming platform
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("gaming")}
            className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 ${
              activeTab === "gaming"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/25"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            Gaming Features
          </button>
          <button
            onClick={() => setActiveTab("platform")}
            className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 ${
              activeTab === "platform"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/25"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            Platform Features
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-amber-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default StakeFeatures;