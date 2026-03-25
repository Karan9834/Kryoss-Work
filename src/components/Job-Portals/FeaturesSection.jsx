import React from "react";
import { Search, FileText, Bell, Lightbulb, MessageSquare, TrendingUp, Shield, Video, Sparkles, ArrowRight } from "lucide-react";
import feature from "../../assets/Job-Portals/features.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Easy Job Search",
      desc: "Find jobs quickly with advanced filters and smart recommendations.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Resume Builder",
      desc: "Create professional resumes in minutes with AI-powered templates.",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Job Alerts",
      desc: "Get notified instantly about new job postings matching your preferences.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Career Advice",
      desc: "Expert tips, interview guidance, and career development resources.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Direct Messaging",
      desc: "Communicate directly with employers and hiring managers.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Video Interviews",
      desc: "Schedule and conduct video interviews directly on our platform.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Verified Companies",
      desc: "All companies are verified to ensure legitimate opportunities.",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Salary Insights",
      desc: "Get accurate salary data and negotiate better offers.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      
      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.08"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
          <path
            fill="#2563eb"
            fillOpacity="0.05"
            d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,112C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION with Larger Image ===== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">Platform Features</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Powerful Features to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Boost Your Career
              </span>
            </h2>
            
            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              Everything you need to find your dream job, all in one place.
            </p>
          </div>

          {/* Right Side - Larger Image (No Container) */}
          <div className="relative">
            <img
              src={feature}
              alt="Features illustration"
              className="w-48 h-48 object-contain drop-shadow-lg"
            />
            {/* Decorative Dots Around Image */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500/30 rounded-full blur-sm"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-indigo-500/30 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* ===== FEATURES CARDS GRID (8 Cards) ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-5"
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={item.iconColor}>
                  {item.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
              
              {/* Decorative Line on Hover */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mt-4 group-hover:w-full transition-all duration-300"></div>
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

export default FeaturesSection;