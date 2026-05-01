import React from "react";
import { Sparkles, Zap, Shield, Globe, Award, Heart, ChevronRight, Users, Clock } from "lucide-react";
import about from "../../../../assets/Mars hotel management/2.jpg"
const AboutUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
      
      {/* Glassy Blue Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30"></div>
      
      {/* Glassy Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl"></div>
      
      {/* Glassmorphism Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating Glass Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-indigo-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT - IMAGE with Glass Effect */}
          <div className="relative order-2 lg:order-1">
            {/* Glass Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-2xl"></div>
            
            {/* Glass Image Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-blue-100/50">
                <img
                  src={about}
                  alt="Team collaboration in modern workspace"
                  className="w-full rounded-xl shadow-lg transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Glass Overlay */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - TEXT with Glassy Blue Theme */}
          <div className="order-1 lg:order-2">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Heart size={16} className="text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                About Mars
              </span>
            </div>

            {/* Heading with Glassy Blue Gradient */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Revolutionizing How{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                News Gets Made
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              NewsFlow is the world's first AI-powered news management platform designed for modern media enterprises. We combine cutting-edge artificial intelligence with intuitive workflows to help newsrooms produce, distribute, and optimize content at scale.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded by journalists and technologists, we understand the unique challenges of modern newsrooms. Our platform empowers over 500 news organizations across 40 countries to deliver accurate, timely, and engaging content while reducing operational complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Glass Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;