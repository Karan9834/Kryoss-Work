import React from "react";
import { 
  Zap, 
  Clock, 
  Shield, 
  Smartphone
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <Zap className="w-7 h-7" />,
      title: "Lightning Fast Deployment",
      description: "Get your on-demand platform up and running in days, not months. Our ready-to-deploy solutions accelerate your time to market.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      icon: <Clock className="w-7 h-7" />,
      title: "24/7 Operations",
      description: "Run your business round the clock with automated systems that never sleep. Serve customers anytime, anywhere.",
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      id: 3,
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile-First Experience",
      description: "Seamless apps for iOS and Android with intuitive UI/UX that keeps your customers coming back.",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: 4,
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, secure payments, and data protection to build trust with your users.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-200 mb-5">
            <span className="text-xs font-normal text-blue-700 tracking-wide">
              ⚡ Why Choose Us
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-3">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              On-Demand Advantage
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Everything you need to launch and scale your on-demand business successfully
          </p>
        </div>
        
        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className={`group relative ${reason.bgColor} border ${reason.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-xl ${reason.iconBg} shadow-md mb-5 group-hover:scale-110 transition-all duration-300`}>
                <div className={reason.iconColor}>
                  {React.cloneElement(reason.icon, { className: "w-7 h-7" })}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-sm md:text-base font-normal text-gray-600 leading-relaxed flex-grow">
                {reason.description}
              </p>
              
              {/* Animated bottom border */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${reason.color} group-hover:w-full transition-all duration-300`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
            </div>
          ))}
          
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-6">
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Join thousands of successful on-demand businesses powered by our platform
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;