import React from "react";
import { 
  Shield, 
  Zap, 
  Trophy, 
  Users, 
  CreditCard, 
  Headphones,
  Star,
  Rocket,
  Globe,
  BarChart3
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Lightning Fast",
      description: "Real-time odds updates and instant bet placement with <100ms latency."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure & Safe",
      description: "Bank-grade encryption and advanced fraud protection for all transactions."
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "High Odds",
      description: "Competitive odds with best-in-class returns for your users."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multi-User Support",
      description: "Handle thousands of concurrent users with scalable infrastructure."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Multiple Payments",
      description: "50+ payment methods including crypto, cards, and e-wallets."
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Dedicated support team available round the clock for assistance."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Reach",
      description: "Multi-language and multi-currency support for worldwide users."
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Advanced Analytics",
      description: "Real-time insights into user behavior, revenue, and performance."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Quick Deployment",
      description: "Launch your platform in under 2 weeks with our streamlined process."
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f0f1a]"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%234f46e5' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-600/10 blur-[90px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-5 text-sm font-semibold">
            <Star size={14} className="fill-white" />
            <span>Premium Features</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Betting
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-base max-w-2xl mx-auto">
            Everything you need to launch and scale a successful betting platform
          </p>
        </div>

        {/* Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              {/* Decorative line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;