import React from "react";
import processImg from "../../assets/Appointment/develop.webp";

const steps = [
  {
    title: "Requirement Analysis",
    desc: "We start by evaluating your precise objectives and targets, guaranteeing we adapt the platform functions to fulfill clinical and consumer demands."
  },
  {
    title: "UI/UX & Coding",
    desc: "Our specialists concentrate on drafting a highly accessible interface, subsequently backed by powerful backend engineering."
  },
  {
    title: "Integration Services",
    desc: "Implementing required transactional portals, varied APIs, automated messaging modules, and external connectivity."
  },
  {
    title: "Quality Assurance",
    desc: "Our testing squad executes rigorous validation cycles to absolutely guarantee flawless application performance."
  },
  {
    title: "Release & Handover",
    desc: "Post-validation, we publish your software onto digital marketplaces and configure the central management dashboard."
  }
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#020b2c] text-white py-24 rounded-[40px]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="border border-white/40 px-4 py-1 rounded-full text-sm">
            Creation Methodology
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Our <span className="text-cyan-400">Custom Medical App Engineering</span> Workflow
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Our structured methodology guarantees a flawless, tailored product journey from conception until deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT IMAGE */}
          <div className="sticky top-28 h-fit">
            <img
              src={processImg}
              alt="development process"
              className="w-full max-w-lg"
            />
          </div>

          {/* RIGHT SIDE SCROLLABLE */}
          <div className="relative h-[520px] overflow-y-scroll pr-4 scrollbar-hide">

            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/20"></div>

            <div className="space-y-10">

              {steps.map((step, index) => (
                <div key={index} className="relative pl-12">

                  {/* timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-[#1b2a57] border border-white/20 rounded-lg flex items-center justify-center">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {step.title}
                  </h3>

                  <div className="bg-[#1a2550] border border-white/10 rounded-xl p-5 text-gray-300 hover:scale-[1.02] transition">
                    {step.desc}
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}