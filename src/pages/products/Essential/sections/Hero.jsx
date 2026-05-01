import React, { useState, useEffect } from "react";
import {
  Play,
  ArrowRight,
  ExternalLink,
  Puzzle,
  Zap,
  Shield,
  Globe,
  Sparkles,
  Box,
  Layers,
  Cpu
} from "lucide-react";

import hero from "../../../../assets/Essential plugins/1.jpg"

const EssentialPluginHero = () => {
  const previewUrl =
    "https://preview.codecanyon.net/item/wp-news-and-scrolling-widgets-pro-wordpress-news-plugin/full_screen_preview/19274189";

  const handlePreview = () => {
    window.open(previewUrl, "_blank");
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] lg:h-[75vh] overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950">

      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Interactive Glow Following Mouse */}
      <div
        className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      ></div>

      {/* Animated Cubes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-purple-500/20 rounded-lg animate-float-cube"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Futuristic Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
              <Sparkles size={14} className="text-purple-400 animate-pulse" />
              <span className="text-xs font-mono text-purple-300 tracking-wider">[ PLUGIN ECOSYSTEM v2.0 ]</span>
            </div>

            {/* Main Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Essential</span>
              <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 text-transparent bg-clip-text">
                Plugins
              </span>
            </h1>

            {/* Description with Cyberpunk Style */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg border-l-2 border-purple-500 pl-4">
              <span className="text-purple-400 font-mono">{'>'}</span> Modular. Scalable. Deadly fast.
              <br />
              <span className="text-gray-500 text-sm">Unleash the power of 50+ high-performance plugins</span>
            </p>

            {/* Tech Specs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur rounded-full px-3 py-1.5 border border-purple-500/30">
                <Cpu size={12} className="text-purple-400" />
                <span className="text-xs text-gray-400">Optimized</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur rounded-full px-3 py-1.5 border border-purple-500/30">
                <Box size={12} className="text-purple-400" />
                <span className="text-xs text-gray-400">Modular</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur rounded-full px-3 py-1.5 border border-purple-500/30">
                <Zap size={12} className="text-yellow-400" />
                <span className="text-xs text-gray-400">Lightning Fast</span>
              </div>
            </div>

            {/* Dual Buttons with Holographic Effect */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handlePreview}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play size={18} />
                  LIVE DEMO
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient-x"></div>
              </button>
            </div>
          </div>

          {/* RIGHT - 3D Holographic Card */}
          <div className="relative flex justify-center items-center perspective">
            {/* Rotating Ring */}
            <div className="absolute w-[380px] h-[380px] border-2 border-purple-500/30 rounded-full animate-spin-slow"></div>
            <div className="absolute w-[320px] h-[320px] border-2 border-blue-500/30 rounded-full animate-spin-reverse"></div>

            {/* Main Image with Holographic Effect */}
            <div className="relative group transform-style-3d hover:rotate-y-12 transition-all duration-700">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition"></div>
              <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-3 border border-purple-500/30 shadow-2xl">
                <img
                  src={hero}
                  alt="Plugin Dashboard"
                  className="w-full max-w-md rounded-xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float-cube {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-50px) rotate(90deg); opacity: 0.3; }
        }
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes float-glow {
          0%, 100% { transform: translateY(0px); box-shadow: 0 0 20px rgba(168,85,247,0.3); }
          50% { transform: translateY(-10px); box-shadow: 0 0 40px rgba(168,85,247,0.6); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-float-cube { animation: float-cube 15s ease-in-out infinite; }
        .animate-particle { animation: particle 4s ease-out infinite; }
        .animate-gradient-x { background-size: 200% 100%; animation: gradient-x 2s ease infinite; }
        .animate-float-glow { animation: float-glow 3s ease-in-out infinite; }
        .perspective { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .hover\\:rotate-y-12:hover { transform: rotateY(12deg); }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default EssentialPluginHero;