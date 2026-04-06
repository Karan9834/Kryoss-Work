import React from "react";
import { 
  Shield, 
  Zap, 
  Trophy, 
  Users, 
  CreditCard, 
  Headphones,
  Star,
  Rocket
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Real-time odds updates and instant bet placement with <100ms latency."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Safe",
      description: "Bank-grade encryption and advanced fraud protection for all transactions."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "High Odds",
      description: "Competitive odds with best-in-class returns for your users."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-User Support",
      description: "Handle thousands of concurrent users with scalable infrastructure."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Multiple Payments",
      description: "50+ payment methods including crypto, cards, and e-wallets."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support team available round the clock for assistance."
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Light Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%23ea580c' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-300/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-300/30 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 text-orange-700 px-4 py-2 rounded-full mb-5 text-sm font-semibold">
            <Star size={14} className="fill-orange-500" />
            <span>Premium Features</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Features for{" "}
            <span className="text-orange-600">Modern Betting</span>
          </h2>

          <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
            Everything you need to launch and scale a successful betting platform
          </p>
        </div>

        {/* Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/40 rounded-2xl p-6 border border-white/50 hover:bg-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;