import React from "react";

const steps = [
  {
    number: "1",
    title: "Profile Activation",
    desc: "Participants securely register or authenticate their credentials using core profile data or integrated social protocols like Google or Facebook.",
  },
  {
    number: "2",
    title: "Specialist Discovery",
    desc: "Clients identify proximate stylists, evaluating professional portfolios, service valuations, peer benchmarks, and geographic proximity.",
  },
  {
    number: "3",
    title: "Service Reservation",
    desc: "Following the evaluation of specialist credentials and logistics, participants select their desired treatment and finalize the booking.",
  },
  {
    number: "4",
    title: "Technical Fulfillment",
    desc: "Upon confirming the engagement, the specialist proceeds to the client's designated site to deliver the requested aesthetic care.",
  },
  {
    number: "5",
    title: "Protected Settlement",
    desc: "At the conclusion of the treatment cycle, clients utilize versatile fiscal channels including digital wallets, protected cards, or physical tender.",
  },
  {
    number: "6",
    title: "Performance Validation",
    desc: "Post-settlement, both the participant and specialist provide reciprocal evaluations based on their professional encounter.",
  },
];

const HowitWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
       
      <div className="flex items-center justify-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6 w-fit mx-auto border-2">
  <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
  The Vyom Beauty Workflow
</div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">
          How the <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
          Vyom Beauty Platform Operates
            </span> 
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          The Vyom Beauty framework is engineered to optimize the aesthetic 
          coordination lifecycle for both participants and specialists. From 
          initial reservation to final fulfillment, every module is designed 
          for effortless interaction. Here is our systemic operational flow.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg relative"
            >
              
              {/* Step Number */}
              <div
                className="w-12 h-12 flex items-center justify-center text-white font-bold rounded-lg mb-4"
                style={{
                  background:
                    "linear-gradient(90deg, #FF2485 0%, #C739FF 100%)",
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-500 transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom Hover Border */}
              <span
                className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #FF2485 0%, #C739FF 100%)",
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;