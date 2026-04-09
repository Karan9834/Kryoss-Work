import React from "react";
import { 
  Building, 
  Factory, 
  TrendingUp, 
  Shield 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <Building className="w-7 h-7" />,
      title: "Enterprise Expertise",
      description: "20+ years of experience delivering digital solutions to manufacturing, healthcare, and retail sectors worldwide.",
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      hoverColor: "group-hover:border-amber-300",
    },
    {
      id: 2,
      icon: <Factory className="w-7 h-7" />,
      title: "Industry 4.0 Ready",
      description: "Smart factory solutions with IoT integration, predictive maintenance, and real-time production monitoring.",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverColor: "group-hover:border-yellow-300",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Scalable Growth",
      description: "Solutions that grow with your business from local operations to global enterprise-level demands.",
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      hoverColor: "group-hover:border-orange-300",
    },
    {
      id: 4,
      icon: <Shield className="w-7 h-7" />,
      title: "Compliance & Security",
      description: "ISO certified, GDPR compliant, and enterprise-grade security for sensitive industry data.",
      color: "from-amber-600 to-orange-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      hoverColor: "group-hover:border-amber-300",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 border border-amber-200 mb-5">
            <span className="text-xs font-normal text-amber-700 tracking-wide">
              🏭 Why Choose Us
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-3">
            The{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Industry Advantage
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Empowering businesses across sectors with tailored industrial solutions
          </p>
        </div>
        
        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className={`group relative ${reason.bgColor} border ${reason.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-amber-200/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col h-full`}
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
              <h3 className="relative z-10 text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300 leading-tight">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-sm md:text-base font-normal text-gray-600 leading-relaxed flex-grow">
                {reason.description}
              </p>
              
              {/* Animated bottom border */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${reason.color} group-hover:w-full transition-all duration-300`}></div>
              
              {/* Shine effect on hover - subtle */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent skew-x-12"></div>
            </div>
          ))}
          
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-6">
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Trusted by 500+ enterprises across manufacturing, healthcare, retail, and more
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;