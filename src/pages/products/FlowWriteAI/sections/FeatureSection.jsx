import React from "react";
import {
  Sparkles,
  Zap,
  FileText,
  Globe,
  Wand2,
  Clock,
} from "lucide-react";

const FeaturesWriteFlow = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Content Generation",
      desc: "Generate high-quality content instantly with advanced AI models.",
    },
    {
      icon: FileText,
      title: "Smart Templates",
      desc: "Create emails, ads, and descriptions using ready-to-use templates.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Get results in seconds with optimized AI performance.",
    },
    {
      icon: Globe,
      title: "Multi-language",
      desc: "Write content in multiple languages with ease.",
    },
    {
      icon: Wand2,
      title: "Tone Control",
      desc: "Adjust tone from professional to casual effortlessly.",
    },
    {
      icon: Clock,
      title: "Save Time",
      desc: "Automate writing tasks and focus on what matters most.",
    },
  ];

  return (
    <section className="relative py-28 bg-[#0A0A0A] text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW - Softer */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-400/5 blur-3xl rounded-full"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 shadow-sm mb-4">
            <span className="text-sm font-medium text-yellow-400">
              Powerful Features
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Powerful Features of{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
              WriteFlow AI
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full my-6"></div>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            Everything you need to create high-quality content faster and smarter
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group transform transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glass Card */}
                <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-500 group-hover:bg-white/10 group-hover:border-yellow-400/30 group-hover:shadow-xl">

                  {/* Icon Container */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-400 mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>

                  {/* Subtle Glow Effect - Less Yellow */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 blur-lg transition duration-500 -z-10"></div>
                  
                  {/* Decorative Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesWriteFlow;