import React from "react";
import { 
  Sparkles, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Headphones, 
  Rocket, 
  Award,
  Clock,
  Heart,
  Star,
  Cpu
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Cutting-Edge Technology",
      description: "Leverage the latest AI and machine learning innovations to stay ahead of the competition.",
      icon: Cpu,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: 0
    },
    {
      id: 2,
      title: "Enterprise Security",
      description: "Bank-grade encryption and advanced security protocols to protect your valuable data.",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      delay: 0.1
    },
    {
      id: 3,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with 99.9% uptime guarantee and millisecond response times.",
      icon: Zap,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      delay: 0.2
    },
    {
      id: 4,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance from our team of dedicated support specialists.",
      icon: Headphones,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.3
    },
    {
      id: 5,
      title: "Global Scale",
      description: "Serve customers worldwide with our distributed infrastructure and multi-region deployment.",
      icon: Globe,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      delay: 0.4
    },
    {
      id: 6,
      title: "Award-Winning Solution",
      description: "Recognized by industry leaders for innovation and excellence in SaaS technology.",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      delay: 0.5
    },
    {
      id: 7,
      title: "Seamless Integration",
      description: "Connect effortlessly with 500+ popular tools and platforms your team already uses.",
      icon: Rocket,
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
      delay: 0.6
    },
    {
      id: 8,
      title: "Customer-Centric Approach",
      description: "Built with your success in mind, we prioritize features that deliver real value.",
      icon: Heart,
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      delay: 0.7
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50/50 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100/20 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 shadow-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Businesses
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Trust Us</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover what makes us the preferred choice for thousands of successful businesses worldwide
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-8"></div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative transform transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${reason.delay}s` }}
              >
                {/* Card with Glassmorphism Effect */}
                <div className="relative h-full rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent">
                  
                  {/* Animated Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 z-10">
                    {/* Icon Container */}
                    <div className="relative mb-5">
                      <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r ${reason.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {reason.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {reason.description}
                    </p>
                    
                    {/* Decorative Bottom Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
                
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;