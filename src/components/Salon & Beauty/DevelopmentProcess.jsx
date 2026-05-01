import React from "react";
import { ClipboardList, Plug, Code, Rocket } from "lucide-react";

const DevelopmentProcess = () => {
  const features = [
    {
      title: "Strategic Analysis",
      desc: "The foundational phase involves auditing your specific aesthetic enterprise objectives. We prioritize deep collaboration to synthesize technical requirements, ensuring the architectural alignment of the final module.",
      icon: ClipboardList,
    },
    {
      title: "Technical Integration",
      desc: "Subsequently, we configure vital external API protocols including fiscal settlement gateways, synchronized communication modules, and geographic positioning systems.",
      icon: Plug,
    },
    {
      title: "Prototyping & Logic",
      desc: "Our architects and engineers synthesize high-fidelity visual interfaces while simultaneously constructing the underlying technical logic.",
      icon: Code,
    },
    {
      title: "Quality Assurance & Deployment",
      desc: "Prior to final initialization, your platform undergoes rigorous validation protocols to guarantee maximum operational stability and performance.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Engineering Lifecycle
          </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">
            <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
              Our Integrated
            </span>{" "}
            Deployment Methodology
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We utilize a systemic framework to facilitate the arrival of your 
            aesthetic service ecosystem.
          </p>

        </div>

        {/* ===== Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-development-process-vector.webp"
              alt="Provider Admin Panel"
              className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
              style={{ backgroundColor: "#F4D9FF" }}
            />
          </div>

          {/* RIGHT SCROLLABLE CARDS */}
          <div className="max-h-[600px] overflow-y-auto pr-3 space-y-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group border rounded-2xl p-6 transition duration-300
                           border-[#C739FF]
                           hover:bg-gradient-to-r 
                           hover:from-[#FF2485] 
                           hover:to-[#C739FF] 
                           hover:text-black"
                >

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-3">

                    <Icon className="w-12 h-12 text-[#C739FF] group-hover:text-white transition" />

                    <h4 className="font-semibold text-lg text-[#C739FF] group-hover:text-white">
                      {item.title}
                    </h4>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default DevelopmentProcess;