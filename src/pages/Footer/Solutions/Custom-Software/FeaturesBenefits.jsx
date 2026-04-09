import React from "react";
import { 
  Settings, 
  Globe, 
  Users, 
  Heart, 
  Building, 
  Shield, 
  Award, 
  TrendingUp, 
  Target, 
  Zap,
  Code,
  Lock,
  BarChart
} from "lucide-react";

const FeaturesBenefits = () => {
  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Fully Customizable",
      description: "Tailored workflows, rules, and policies designed specifically for your business processes.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scalability",
      description: "Built to support international operations, multiple languages, and cross-border transactions.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Role-based access, real-time updates, and seamless communication across departments.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Revenue Generation",
      description: "Monetization features, subscription models, and payment gateway integrations.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Enterprise Ready",
      description: "Robust architecture for large-scale operations, not just profit-driven solutions.",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Government Compliance",
      description: "Automated regulatory compliance, tax calculations, and legal reporting features.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Tax Benefits",
      description: "Smart tax deduction management, GST integration, and financial optimization tools.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Long-term Savings",
      description: "Reduced operational costs, no recurring license fees, and scalable infrastructure.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Asset Management",
      description: "Complete control over digital assets, intellectual property, and data ownership.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Legal Entity Status",
      description: "Separate legal identity with complete data sovereignty and compliance protection.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-orange-900 to-amber-900 py-16 md:py-20 overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500/10 to-transparent"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 mb-5">
            <span className="text-xs font-normal text-orange-300 tracking-wide">
              🔥 Why Choose Custom Software
            </span>
          </div>
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-white mb-3">
            Features & Benefits of{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Custom Software
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-normal">
            Discover how tailored solutions transform your business operations
          </p>
        </div>
        
        {/* Two Large Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* FEATURES CARD */}
          <div className="group relative bg-gradient-to-br from-orange-500/10 to-amber-500/5 backdrop-blur-sm rounded-2xl border border-orange-500/30 shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            {/* Card Header */}
            <div className="relative p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-md">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-orange-400 text-xs font-normal uppercase tracking-wider">What You Get</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">Features</h3>
                </div>
              </div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full"></div>
            </div>
            
            {/* Features List */}
            <div className="p-6 pt-4 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover/item:bg-orange-500/30 transition-colors">
                    <div className="text-orange-400">
                      {React.cloneElement(feature.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-0.5 leading-tight">{feature.title}</h4>
                    <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
          </div>
          
          {/* BENEFITS CARD */}
          <div className="group relative bg-gradient-to-br from-amber-500/10 to-orange-500/5 backdrop-blur-sm rounded-2xl border border-amber-500/30 shadow-xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            {/* Card Header */}
            <div className="relative p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-amber-400 text-xs font-normal uppercase tracking-wider">What You Gain</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">Benefits</h3>
                </div>
              </div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
            </div>
            
            {/* Benefits List */}
            <div className="p-6 pt-4 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center group-hover/item:bg-amber-500/30 transition-colors">
                    <div className="text-amber-400">
                      {React.cloneElement(benefit.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-0.5 leading-tight">{benefit.title}</h4>
                    <p className="text-xs md:text-sm font-normal text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
          </div>
          
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-10 pt-6">
          <p className="text-gray-400 text-xs md:text-sm font-normal">
            Transform your business with tailor-made software solutions designed for your success
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturesBenefits;