import React from "react";
import { 
  Zap, 
  Clock, 
  Globe, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  Users, 
  Shield 
} from "lucide-react";

const ProsConsSection = () => {
  const pros = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Accessibility",
      description: "Customers can access services 24/7 with just a few taps, eliminating wait times and providing unparalleled convenience.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Efficiency",
      description: "Save valuable time by connecting users with service providers instantly, reducing manual effort and delays.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Expand your business beyond geographical boundaries and tap into new markets with digital platforms.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Business Model",
      description: "Easily scale operations up or down based on demand without significant infrastructure investments.",
    },
  ];

  const cons = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "High Competition",
      description: "Intense rivalry from established players and new entrants makes customer acquisition challenging and costly.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Operational Costs",
      description: "Managing logistics, customer support, and technology infrastructure requires significant investment.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Retention",
      description: "Low switching costs make it difficult to retain customers who constantly compare prices and services.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Concerns",
      description: "Handling sensitive user data and payments requires robust security measures to prevent breaches.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20 overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-500/5 to-transparent"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
            <span className="text-xs font-normal text-gray-300 tracking-wide">
              ⚖️ Weighing the Balance
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white mb-3">
            Pros & Cons of{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              On-Demand Solutions
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Understanding both sides before launching your on-demand platform
          </p>
        </div>
        
        {/* Two Large Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* PROS CARD - Green Glassmorphism */}
          <div className="group relative bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-2xl shadow-xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card Header */}
            <div className="relative p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-green-300 text-xs font-semibold uppercase tracking-wider">The Bright Side</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-0.5">Advantages</h3>
                </div>
              </div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>
            
            {/* Pros List */}
            <div className="p-6 pt-4 space-y-5">
              {pros.map((pro, index) => (
                <div key={index} className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-green-500/20 backdrop-blur-sm flex items-center justify-center group-hover/item:bg-green-500/30 transition-colors">
                    <div className="text-green-300">
                      {React.cloneElement(pro.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-0.5 leading-tight">{pro.title}</h4>
                    <p className="text-xs md:text-sm font-normal text-green-100 leading-relaxed">{pro.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative blur elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl"></div>
            
            {/* Glass shine border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
              boxShadow: 'inset 0 0 20px rgba(74, 222, 128, 0.2)'
            }}></div>
          </div>
          
          {/* CONS CARD - Red Glassmorphism */}
          <div className="group relative bg-red-500/10 backdrop-blur-md border border-red-500/30 rounded-2xl shadow-xl hover:shadow-red-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card Header */}
            <div className="relative p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-red-300 text-xs font-semibold uppercase tracking-wider">The Challenging Side</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-0.5">Disadvantages</h3>
                </div>
              </div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full"></div>
            </div>
            
            {/* Cons List */}
            <div className="p-6 pt-4 space-y-5">
              {cons.map((con, index) => (
                <div key={index} className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center group-hover/item:bg-red-500/30 transition-colors">
                    <div className="text-red-300">
                      {React.cloneElement(con.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-0.5 leading-tight">{con.title}</h4>
                    <p className="text-xs md:text-sm font-normal text-red-100 leading-relaxed">{con.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative blur elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-400/20 rounded-full blur-2xl"></div>
            
            {/* Glass shine border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
              boxShadow: 'inset 0 0 20px rgba(248, 113, 113, 0.2)'
            }}></div>
          </div>
          
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-6">
          <p className="text-gray-400 text-sm md:text-base font-normal">
            Ready to launch your on-demand platform? Let us help you navigate both sides
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ProsConsSection;