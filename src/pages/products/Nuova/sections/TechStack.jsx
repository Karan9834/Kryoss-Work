import React from "react";
import {
  FileCode,
  Code,
  Database,
  Braces,
  Terminal,
  Globe,
  Coffee,
  Figma,
  GitBranch,
  Cloud,
  Zap,
  Layers
} from "lucide-react";

const TechStack = () => {
  const techStack = [
    { name: "JavaScript", icon: Code, color: "from-yellow-400 to-yellow-500" },
    { name: "React", icon: Terminal, color: "from-cyan-400 to-blue-500" },
    { name: "HTML5", icon: FileCode, color: "from-orange-400 to-red-500" },
    { name: "CSS3", icon: Braces, color: "from-blue-400 to-indigo-500" },
    { name: "Tailwind", icon: Layers, color: "from-teal-400 to-cyan-500" },
    { name: "Sass", icon: Braces, color: "from-pink-400 to-rose-500" },
    { name: "PHP", icon: Code, color: "from-purple-400 to-indigo-500" },
    { name: "Laravel", icon: Coffee, color: "from-red-400 to-red-600" },
    { name: "Python", icon: Code, color: "from-blue-400 to-indigo-500" },
    { name: "MySQL", icon: Database, color: "from-blue-400 to-blue-600" },
    { name: "MongoDB", icon: Database, color: "from-green-400 to-teal-500" },
    { name: "Git", icon: GitBranch, color: "from-orange-400 to-orange-600" },
    { name: "AWS", icon: Cloud, color: "from-yellow-500 to-orange-500" },
    { name: "Figma", icon: Figma, color: "from-purple-400 to-pink-500" },
    { name: "Node.js", icon: Terminal, color: "from-green-400 to-emerald-500" },
    { name: "TypeScript", icon: Code, color: "from-blue-400 to-cyan-500" }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-24 lg:py-32">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-300/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-300/30 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Code size={16} className="text-white" />
            <span className="text-sm font-semibold text-white">Tech Stack</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Modern Technologies
            </span>
          </h2>
          
          <p className="mt-4 text-lg text-white/70">
            Cutting-edge tools and frameworks for powerful, scalable solutions
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-pointer"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  
                  {/* Tech Name */}
                  <p className="text-xs font-medium text-white/80 text-center group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </p>
                </div>
                
                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${tech.color} group-hover:w-8 transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Tech Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Zap size={18} className="text-yellow-400" />
            <span className="text-white/80 text-sm">And many more industry-standard technologies</span>
            <Zap size={18} className="text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-12px) translateX(6px); opacity: 0.6; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default TechStack;