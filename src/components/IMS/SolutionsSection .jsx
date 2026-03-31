import React, { useState } from "react";
import { 
  Target, 
  Search, 
  Lightbulb, 
  Settings, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  BarChart3
} from "lucide-react";

const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 0,
      name: "Discovery",
      icon: <Search className="w-5 h-5" />,
      title: "Discovery & Requirements",
      description: "We dive deep into your business needs, analyze current workflows, and identify opportunities for improvement.",
      features: [
        "Business requirements analysis",
        "Current system evaluation",
        "Stakeholder interviews",
        "Technical feasibility study"
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      stat: "100+",
      statLabel: "Projects Analyzed"
    },
    {
      id: 1,
      name: "Strategy",
      icon: <Target className="w-5 h-5" />,
      title: "Strategy & Planning",
      description: "We create a comprehensive roadmap with clear milestones, technology stack selection, and resource planning.",
      features: [
        "Technology stack selection",
        "Architecture design",
        "Timeline & milestone planning",
        "Resource allocation"
      ],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      stat: "98%",
      statLabel: "Project Success"
    },
    {
      id: 2,
      name: "Design",
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Design & Prototyping",
      description: "Our designers create intuitive UI/UX designs with interactive prototypes for your feedback.",
      features: [
        "User experience design",
        "Interactive prototypes",
        "Design system creation",
        "User testing & feedback"
      ],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      stat: "500+",
      statLabel: "Designs Created"
    },
    {
      id: 3,
      name: "Develop",
      icon: <Settings className="w-5 h-5" />,
      title: "Development & Testing",
      description: "Agile development with continuous integration, testing, and regular sprint reviews.",
      features: [
        "Agile development process",
        "Automated testing",
        "Regular sprint reviews",
        "Quality assurance"
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      stat: "1000+",
      statLabel: "Features Built"
    },
    {
      id: 4,
      name: "Launch",
      icon: <Rocket className="w-5 h-5" />,
      title: "Deployment & Support",
      description: "Smooth deployment, training, and ongoing support to ensure your success.",
      features: [
        "Seamless deployment",
        "Team training sessions",
        "24/7 technical support",
        "Performance monitoring"
      ],
      color: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
      stat: "24/7",
      statLabel: "Support Available"
    }
  ];

  const activeData = solutions[activeSolution];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full mb-6">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Process
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Business Ideas
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results for your business
          </p>
        </div>

        {/* Category Buttons - 5 Solutions */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution.id)}
              className={`
                relative group px-6 py-2.5 rounded-full font-semibold text-sm
                transition-all duration-300 transform hover:scale-105
                ${activeSolution === solution.id 
                  ? `bg-gradient-to-r ${solution.color} text-white shadow-lg shadow-${solution.color.split(' ')[1]}/50` 
                  : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }
              `}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-r from-transparent via-white/30 to-transparent
                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000
                `}></div>
              </div>
              
              <div className="relative flex items-center gap-2">
                <span className={activeSolution === solution.id ? "text-white" : "text-gray-600"}>
                  {solution.icon}
                </span>
                <span>{solution.name}</span>
                {activeSolution === solution.id && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Active Solution Content - Shiny Section */}
        <div 
          className={`
            relative rounded-2xl overflow-hidden transition-all duration-500
            bg-gradient-to-br ${activeData.bgGradient}
            border ${activeData.borderColor}
            shadow-xl hover:shadow-2xl
          `}
        >
          {/* Shiny Background Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[100%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45"></div>
          </div>
          
          {/* Gradient Border Glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${activeData.color} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
          
          <div className="relative p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left Content */}
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${activeData.color} flex items-center justify-center text-white shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300`}>
                    {React.cloneElement(activeData.icon, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {activeData.title}
                    </h3>
                    <div className={`w-20 h-1 bg-gradient-to-r ${activeData.color} rounded-full mt-2`}></div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {activeData.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  {activeData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${activeData.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
              </div>
              
              {/* Right Content - Stats & Visual */}
              <div className="space-y-6">
                {/* Stats Card */}
                <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 border ${activeData.borderColor} shadow-lg`}>
                  <div className="text-center">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${activeData.color} bg-clip-text text-transparent`}>
                      {activeData.stat}
                    </div>
                    <div className="text-gray-600 mt-2">{activeData.statLabel}</div>
                    <div className="flex justify-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeData.color} ${i < 4 ? 'opacity-100' : 'opacity-30'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Progress Indicator */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Process Progress</span>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${activeData.color} bg-clip-text text-transparent`}>
                      Step {activeSolution + 1}/5
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${activeData.color} rounded-full transition-all duration-500`}
                      style={{ width: `${((activeSolution + 1) / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-3">
                    {solutions.map((_, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveSolution(idx)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                          idx <= activeSolution 
                            ? `bg-gradient-to-r ${activeData.color}` 
                            : 'bg-gray-300'
                        } ${idx === activeSolution ? 'w-4' : ''}`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-yellow-500" />
                    <span className="text-xs text-gray-600">Fast Delivery</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-green-500" />
                    <span className="text-xs text-gray-600">Proven Results</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-blue-500" />
                    <span className="text-xs text-gray-600">Expert Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-lg font-bold text-gray-900">5+</div>
            <div className="text-xs text-gray-500">Years Experience</div>
          </div>
          <div className="text-center p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-lg font-bold text-gray-900">50+</div>
            <div className="text-xs text-gray-500">Team Members</div>
          </div>
          <div className="text-center p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-lg font-bold text-gray-900">100+</div>
            <div className="text-xs text-gray-500">Projects Delivered</div>
          </div>
          <div className="text-center p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-lg font-bold text-gray-900">98%</div>
            <div className="text-xs text-gray-500">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(-45deg);
          }
          100% {
            transform: translateX(100%) rotate(-45deg);
          }
        }
        
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;