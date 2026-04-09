import React from "react";
import { 
  TrendingUp, 
  Clock, 
  Shield, 
  Globe, 
  AlertTriangle, 
  DollarSign, 
  Users, 
  Settings 
} from "lucide-react";

const ProsConsSection = () => {
  const pros = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Operational Efficiency",
      description: "Streamline complex processes, reduce manual errors, and automate workflows across departments.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Time-to-Market",
      description: "Accelerate product launches and service delivery with industry-specific ready solutions.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Built-in compliance with industry standards, GDPR, HIPAA, and local regulations.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description: "Grow from local operations to global enterprise without changing your core systems.",
    },
  ];

  const cons = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Implementation Complexity",
      description: "Integration with legacy systems and employee training requires time and resources.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Initial Investment",
      description: "Higher upfront costs compared to generic software solutions for specialized needs.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Change Management",
      description: "Resistance from staff accustomed to traditional processes and workflows.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customization Needs",
      description: "Ongoing adjustments required as business needs and regulations evolve.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-800 py-16 md:py-20 overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-500/10 to-transparent"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <span className="text-xs font-normal text-amber-200 tracking-wide">
              ⚖️ Weighing the Balance
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white mb-3">
            Pros & Cons of{" "}
            <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
              Industry Solutions
            </span>
          </h2>
          <p className="text-amber-100 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Understanding both sides before transforming your industry operations
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
                  <TrendingUp className="w-6 h-6 text-white" />
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
          <p className="text-amber-200 text-sm md:text-base font-normal">
            Ready to transform your industry operations? Let us help you navigate both sides
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ProsConsSection;