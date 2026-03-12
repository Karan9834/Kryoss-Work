import React from "react";

const services = [
  {
    id: "01",
    title: "MVP App Development",
    desc: "We develop scalable MVPs keeping scalability in mind. Essential features remain the focus so you can launch faster and at an affordable price.",
  },
  {
    id: "02",
    title: "Product Strategy & MVP Consulting",
    desc: "With a clear vision, we help transform your idea into a market-ready product aligned with your business goals.",
  },
  {
    id: "03",
    title: "MVP UI/UX Design",
    desc: "We craft intuitive and engaging user interfaces that enhance user experience and improve product adoption.",
  },
  {
    id: "04",
    title: "Prototyping & Wireframing",
    desc: "Visualize your product early with rapid prototyping and wireframes that clearly communicate your product vision.",
  },
  {
    id: "05",
    title: "Backend & API Development",
    desc: "We build scalable backend architectures and APIs that power your MVP with reliability and performance.",
  },
  {
    id: "06",
    title: "Third-Party Integrations",
    desc: "Extend your MVP capabilities with seamless integrations of essential services and third-party APIs.",
  },
];

const MvpServices = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 text-sm rounded-full border border-slate-200 text-slate-600">
            Strategic MVP Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-slate-800 max-w-4xl mx-auto">
          Comprehensive White Label{" "}
          <span className="text-indigo-500">
            MVP App Development Solutions
          </span>{" "}
          for Growth
        </h2>

        {/* Description */}
        <p className="text-center text-slate-600 max-w-3xl mx-auto mt-6">
          We deliver scalable platforms that allow businesses to launch
          high-performance apps under their own brand identity with full
          ownership and faster time-to-market.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              
              {/* Gradient Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-100 to-purple-100 blur-xl"></div>

              <div className="relative">

                {/* Number */}
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  {service.id}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-xl font-semibold text-slate-800 group-hover:text-indigo-600 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 w-10 h-1 bg-indigo-500 rounded group-hover:w-16 transition-all"></div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MvpServices;