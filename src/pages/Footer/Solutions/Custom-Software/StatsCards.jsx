import React from "react";
import { Code, Rocket, Award, Shield } from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      number: "250+",
      title: "Expert Developers",
      description: "Highly skilled software engineers delivering cutting-edge custom solutions worldwide.",
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: 2,
      icon: <Rocket className="w-8 h-8" />,
      number: "500+",
      title: "Custom Projects",
      description: "Successfully delivered enterprise-grade software solutions for diverse industries.",
      color: "from-rose-500 to-orange-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8" />,
      number: "98%",
      title: "Client Retention",
      description: "Exceptional satisfaction rate with long-term partnerships and repeat business.",
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      id: 4,
      icon: <Shield className="w-8 h-8" />,
      number: "50+",
      title: "Enterprise Clients",
      description: "Trusted by leading organizations for secure and scalable software solutions.",
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading - Mobile: 30px, Desktop: 36px, Weight: 700 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 border border-orange-200 mb-5">
            <span className="text-xs font-normal text-orange-700 tracking-wide">
              🔥 Why Choose Us
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-3">
            Driving Innovation Through{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Custom Software
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Empowering businesses with tailor-made software solutions that drive growth and efficiency
          </p>
        </div>
        
        {/* Stats Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`group relative ${stat.bgColor} border ${stat.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              
              {/* Ember gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-xl ${stat.iconBg} shadow-md mb-5 group-hover:scale-110 transition-all duration-300`}>
                <div className={`${stat.iconColor}`}>
                  {React.cloneElement(stat.icon, { className: "w-7 h-7" })}
                </div>
              </div>
              
              {/* Project Title - Mobile: 24px, Desktop: 30px, Weight: 700 */}
              <div className="relative z-10">
                <div className={`text-2xl md:text-[1.875rem] font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
              </div>
              
              {/* Project Subtitle - Mobile: 24px, Desktop: 30px, Weight: 700 */}
              <h3 className="relative z-10 text-2xl md:text-[1.875rem] font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300 leading-tight">
                {stat.title}
              </h3>
              
              {/* Description Text - Mobile: 14px, Desktop: 16px, Weight: 400 */}
              <p className="relative z-10 text-sm md:text-base font-normal text-gray-600 leading-relaxed">
                {stat.description}
              </p>
              
              {/* Animated bottom border */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-300`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
              
            </div>
          ))}
          
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-6">
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Join 500+ businesses that trust us for their custom software needs
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default StatsCards;