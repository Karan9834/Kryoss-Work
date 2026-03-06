import React from "react";
import processImg from "../../assets/Appointment/develop.webp";

const steps = [
  {
    title: "Gathering Requirements",
    desc: "We begin by understanding your specific needs and goals, ensuring we tailor the app features to meet both healthcare provider and patient requirements."
  },
  {
    title: "Design & Development",
    desc: "Our team focuses on creating an intuitive and user-friendly design followed by robust development."
  },
  {
    title: "Collect Third-Party Accounts",
    desc: "Integration of payment gateways, APIs, SMS notifications and other services."
  },
  {
    title: "Testing & QA",
    desc: "Our QA team performs multiple testing phases ensuring smooth functionality."
  },
  {
    title: "Launch & Deployment",
    desc: "After testing we launch the application on app stores and deploy the web admin panel."
  }
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#020b2c] text-white py-24 rounded-[40px]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="border border-white/40 px-4 py-1 rounded-full text-sm">
            Development Process
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Our <span className="text-cyan-400">Uber For Doctors App</span> Development Process
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Our development process ensures a seamless and customized solution from idea to launch.
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