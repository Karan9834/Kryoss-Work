import React from "react";

const WhyChooseUs = () => {
  const points = [
    "Initialize your dedicated aesthetic application within a 5-day operational window, facilitating immediate synchronization between clients and elite practitioners.",
    "Adapt the framework to align with your specific commercial requirements, integrating specialized modules and unique branding to optimize participant engagement.",
    "Leverage a sophisticated UI architecture that guarantees a frictionless interactions for both participants and specialists, optimizing platform usability.",
    "Engineered for expansion, our framework evolves with your enterprise, utilizing rigorous defensive protocols to safeguard participant data and system integrity.",
    "Maintain participant awareness through immediate broadcast alerts for new reservations, technical updates, and critical operational milestones.",
    "Exercise comprehensive governance via an intuitive administrative console, facilitating orchestration of participants, fiscal settlements, and core operations from a unified center." ];

  return (
    <section className="py-14  text-white"
    style={{background:"linear-gradient(0deg, #1F030F 0%, #2C0617 100%)"}}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
          
            Our Value Proposition
          </div>

          <h2 className="text-[38px] font-semibold">
           <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Why Select the</span> Vyom Beauty Ecosystem?
          </h2>
          <p>The Vyom Beauty platform represents the definitive architecture for rapid and high-efficiency deployment of your aesthetic services firm. Here is why our framework is the industry benchmark:</p>

        </div>

        {/* ===== Center Image ===== */}
        <div className="flex justify-center mb-20">
          <img
            src="https://whitelabelfox.com/assets/images/why-choose-us/why-choose-our-gojek-clone-script-image.webp"
            alt="Why Choose Our Script"
            className="w-full max-w-4xl rounded-2xl shadow-xl"
          />
        </div>

        {/* ===== 6 Points Grid ===== */}
        <div className="grid md:grid-cols-2 gap-12">

          {points.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-2 w-3 h-3 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full flex-shrink-0"></div>
              <p className="text-white/80 leading-relaxed text-sm">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
