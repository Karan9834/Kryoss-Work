import React from "react";
import { 
  Cloud,
  Server,
  GitBranch,
  Figma,
  Database,
  Shield,
  Activity,
  Chrome,
  Apple,
  Terminal,
  Package,
  Sparkles
} from "lucide-react";

const TechStack = () => {
  const techStack = [
    { name: "AWS", icon: Cloud, gradient: "from-yellow-400 to-orange-500" },
    { name: "Docker", icon: Server, gradient: "from-blue-400 to-blue-600" },
    { name: "GitHub", icon: GitBranch, gradient: "from-gray-400 to-gray-600" },
    { name: "Figma", icon: Figma, gradient: "from-purple-400 to-pink-500" },
    { name: "MongoDB", icon: Database, gradient: "from-green-400 to-teal-500" },
    { name: "Firebase", icon: Database, gradient: "from-yellow-500 to-orange-500" },
    { name: "Vercel", icon: Activity, gradient: "from-gray-500 to-gray-700" },
    { name: "Netlify", icon: Cloud, gradient: "from-teal-400 to-cyan-500" },
    { name: "Chrome", icon: Chrome, gradient: "from-green-400 to-red-500" },
    { name: "Safari", icon: Apple, gradient: "from-blue-400 to-blue-500" },
    { name: "GraphQL", icon: Terminal, gradient: "from-pink-400 to-red-500" },
    { name: "Next.js", icon: Package, gradient: "from-gray-600 to-gray-800" },
    { name: "Vue.js", icon: Terminal, gradient: "from-green-400 to-emerald-500" },
    { name: "TypeScript", icon: Shield, gradient: "from-blue-400 to-cyan-500" },
    { name: "Redis", icon: Database, gradient: "from-red-400 to-red-600" },
    { name: "Kubernetes", icon: Server, gradient: "from-blue-400 to-indigo-500" }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-16 lg:py-20">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-300/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-fuchsia-300/30 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
            <Sparkles size={14} className="text-white" />
            <span className="text-xs font-mono text-white/80">PLATFORM & TOOLS</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Infrastructure &{" "}
            <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 text-transparent bg-clip-text">
              Development Tools
            </span>
          </h3>
          <p className="text-white/60 text-sm mt-2">Enterprise-grade tools for modern development</p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${tech.gradient} flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>
                
                {/* Tech Name */}
                <p className="text-center text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </p>
                
                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${tech.gradient} group-hover:w-8 transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
            <Activity size={14} className="text-yellow-400" />
            <span className="text-white/70 text-xs">And many more cutting-edge technologies</span>
            <Activity size={14} className="text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-10px) translateX(5px); opacity: 0.6; }
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