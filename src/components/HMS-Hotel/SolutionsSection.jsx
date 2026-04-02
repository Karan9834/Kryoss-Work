import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import sol1 from "../../assets/HMS-Hotel/sol1.png";
import sol2 from "../../assets/HMS-Hotel/sol2.png";
import sol3 from "../../assets/HMS-Hotel/sol3.png";
import sol4 from "../../assets/HMS-Hotel/sol4.png";

const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      title: "AI-Powered Content Creation",
      description: "Transform your content workflow with advanced AI that helps draft, edit, and optimize articles in real-time. Our intelligent algorithms analyze trends, suggest headlines, and ensure your content resonates with your audience.",
      image: sol1,
      gradient: "from-orange-500 to-teal-500",
      alignment: "left"
    },
    {
      id: 2,
      title: "Intelligent Distribution Network",
      description: "Reach your audience wherever they are with our smart distribution engine. Automatically publish across web, mobile apps, social media, and partner networks while optimizing for each platform's unique requirements.",
      image: sol2,
      gradient: "from-teal-500 to-orange-500",
      alignment: "right"
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Make data-driven decisions with comprehensive analytics that track engagement, reach, and performance metrics. Get actionable insights to optimize your content strategy and maximize audience growth.",
      image: sol3,
      gradient: "from-orange-500 to-amber-500",
      alignment: "left"
    },
    {
      id: 4,
      title: "Enterprise Security & Compliance",
      description: "Rest easy knowing your content and data are protected with bank-grade encryption, role-based access control, and full compliance with global data protection standards including GDPR and CCPA.",
      image: sol4,
      gradient: "from-teal-500 to-emerald-500",
      alignment: "right"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-24 lg:py-32">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731605_1px,transparent_1px),linear-gradient(to_bottom,#0d948805_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-teal-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-orange-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Comprehensive Solutions
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Complete Solutions for{" "}
            <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Modern Newsrooms
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Integrated tools and workflows designed to streamline your entire news operation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Animated Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-200 via-orange-400 to-teal-400 hidden md:block">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
          </div>

          {/* Solutions */}
          <div className="space-y-24 md:space-y-32">
            {solutions.map((solution, index) => {
              const isLeft = solution.alignment === "left";
              
              return (
                <div key={solution.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 flex items-center justify-center shadow-lg ring-4 ring-white">
                        <span className="text-white font-bold text-sm">{solution.id}</span>
                      </div>
                      <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 animate-ping opacity-50"></div>
                    </div>
                  </div>

                  {/* Mobile Dot */}
                  <div className="md:hidden flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{solution.id}</span>
                    </div>
                  </div>

                  {/* Content with equal height columns */}
                  <div className={`grid md:grid-cols-2 gap-12 items-stretch ${isLeft ? '' : 'md:text-right'}`}>
                    
                    {/* Text Section - Full height */}
                    <div className={`group flex flex-col justify-center ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                      <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300 ${isLeft ? '' : 'md:text-right'}`}>
                        {solution.title}
                      </h3>
                      <p className={`text-gray-600 leading-relaxed text-base md:text-lg ${isLeft ? '' : 'md:text-right'}`}>
                        {solution.description}
                      </p>
                    </div>

                    {/* Image Section - Fixed size container */}
                    <div className={`group flex items-center ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-teal-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 aspect-video">
                          <img
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-full object-fit rounded-2xl transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;