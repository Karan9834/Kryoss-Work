import React from "react";
import { Shield, Zap, Users, Award, Globe, Headphones, Rocket, Heart, Sparkles, Building2, Star, TrendingUp, Clock, CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Businesses",
      description: "All businesses are thoroughly verified to ensure authenticity and trustworthiness for our users.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Discovery",
      description: "Find the right businesses instantly with our powerful search and smart matching algorithms.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Authentic Reviews",
      description: "Genuine customer reviews help you make informed decisions with confidence.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "10K+ Businesses",
      description: "Join thousands of trusted businesses already listed on our platform.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      gradient: "from-rose-500 to-rose-600",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you anytime, anywhere.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Nationwide Reach",
      description: "Access businesses from all across the country with our extensive network.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Get instant updates on business hours, offers, and new listings.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Analytics",
      description: "Track your business performance with detailed insights and analytics.",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Premium Listings",
      description: "Stand out with featured listings and priority placement in search results.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      gradient: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 overflow-hidden">
      
      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.08"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-[12px] font-medium tracking-[0.05em] uppercase">Why Choose Us</span>
          </div>
          
          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Why Thousands{" "}
            {/* Highlighted Text - Updated: same typography as H2 */}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Trust Our Platform
            </span>
          </h2>
          
          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for businesses and customers nationwide.
          </p>
        </div>

        {/* ===== REASONS GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              {/* Icon - Keep as is */}
              <div className={`w-14 h-14 ${reason.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <div className={reason.iconColor}>
                  {reason.icon}
                </div>
              </div>
              
              {/* Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
              <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              
              {/* Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
              <p className="text-[14px] md:text-[15px] font-normal leading-[1.6] text-gray-600">
                {reason.description}
              </p>
              
              {/* Decorative Line */}
              <div className={`w-12 h-1 bg-gray-200 rounded-full mt-5 group-hover:w-20 group-hover:bg-gradient-to-r ${reason.gradient} transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Blue Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;