import React from "react";

const steps = [
  {
    title: "1. Requirement Discovery",
    text: "We understand your business goals, audience, and key features required for your dating platform.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "2. UI & Platform Development",
    text: "Our team designs intuitive user experiences and develops the platform with scalable architecture.",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    title: "3. Integration Setup",
    text: "We integrate payment gateways, login providers, notifications, and APIs to extend functionality.",
    img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    title: "4. Testing & Deployment",
    text: "We test performance, security, and stability before launching your application smoothly.",
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  },
];

const DatingDevelopmentProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="border border-pink-200 text-sm px-4 py-1 rounded-full">
            Development Process
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Tinder Clone <span className="text-pink-500">App Development Process</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Our streamlined process ensures your dating platform goes from
            concept to launch efficiently with high performance and scalability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {steps.map((step, index) => (
            <div key={index} className="flip-card">

              <div className="flip-card-inner">

                {/* FRONT */}
                <div className="flip-card-front">

                  <img
                    src={step.img}
                    alt={step.title}
                    className="h-40 object-contain mb-4"
                  />

                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>

                </div>

                {/* BACK */}
                <div className="flip-card-back">

                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm opacity-90">
                    {step.text}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DatingDevelopmentProcess;