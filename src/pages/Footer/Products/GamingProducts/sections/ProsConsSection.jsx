import React from "react";
import { 
  TrendingUp, 
  Clock, 
  Lightbulb, 
  Crown, 
  AlertTriangle, 
  Brain, 
  DollarSign, 
  Target 
} from "lucide-react";

const ProsConsSection = ({
  badge = "⚖️ Market Analysis",
  title = "Pros & Cons of Gaming",
  highlight = "Ventures",
  description = "Understanding both sides before taking the entrepreneurial leap",
  prosData,
  consData
}) => {
  const defaultPros = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Greater learning opportunities",
      description: "Work across multiple domains and gain hands-on experience in every aspect of business operations.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible work culture",
      description: "Enjoy adaptable schedules, remote work options, and a results-driven environment.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Encourages innovation",
      description: "Freedom to experiment, implement creative ideas, and bring disruptive solutions to market.",
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Increased responsibility",
      description: "Take ownership of critical decisions and directly impact company growth and direction.",
    },
  ];

  const defaultCons = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Risk of failure",
      description: "High probability of business failure with potential financial and personal losses.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "High stress environment",
      description: "Constant pressure to meet deadlines, secure funding, and achieve growth targets.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fundraising challenges",
      description: "Difficulties in securing investment, managing cash flow, and sustaining operations.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Competitive market pressure",
      description: "Intense rivalry from established players and other start-ups in the same space.",
    },
  ];

  const displayPros = prosData || defaultPros;
  const displayCons = consData || defaultCons;

  return (
    <section className="bg-gradient-to-br from-red-900 via-orange-900 to-gray-900 py-16 md:py-20 overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading - Mobile: 30px, Desktop: 36px, Weight: 700 */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
            <span className="text-xs font-normal text-purple-300 tracking-wide">
              {badge}
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white mb-3">
            {title} <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">{highlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-normal">
            {description}
          </p>
        </div>
        
        {/* Two Medium Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* PROS CARD - Medium Size */}
          <div className="group relative bg-gradient-to-br from-emerald-500/10 to-teal-500/5 backdrop-blur-sm rounded-2xl border border-emerald-500/30 shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            {/* Card Header */}
            <div className="relative p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-emerald-400 text-xs font-normal uppercase tracking-wider">The Bright Side</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">Advantages</h3>
                </div>
              </div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>
            
            {/* Pros List */}
            <div className="p-6 pt-4 space-y-4">
              {displayPros.map((pro, index) => (
                <div key={index} className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover/item:bg-emerald-500/30 transition-colors">
                    <div className="text-emerald-400">
                      {React.cloneElement(pro.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-0.5 leading-tight">{pro.title}</h4>
                    <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">{pro.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>
          
          {/* CONS CARD - Medium Size */}
          <div className="group relative bg-gradient-to-br from-rose-500/10 to-orange-500/5 backdrop-blur-sm rounded-2xl border border-rose-500/30 shadow-xl hover:shadow-rose-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            {/* Card Header */}
            <div className="relative p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-md">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-rose-400 text-xs font-normal uppercase tracking-wider">The Challenging Side</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">Disadvantages</h3>
                </div>
              </div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"></div>
            </div>
            
            {/* Cons List */}
            <div className="p-6 pt-4 space-y-4">
              {displayCons.map((con, index) => (
                <div key={index} className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center group-hover/item:bg-rose-500/30 transition-colors">
                    <div className="text-rose-400">
                      {React.cloneElement(con.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-0.5 leading-tight">{con.title}</h4>
                    <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">{con.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
          </div>
          
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-10 pt-6">
          <p className="text-gray-400 text-xs md:text-sm font-normal">
            Thinking of starting your journey? Let us help you navigate both sides.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ProsConsSection;