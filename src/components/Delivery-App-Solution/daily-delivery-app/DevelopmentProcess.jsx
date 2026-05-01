import React, { useState } from "react";

const processSteps = [
  {
    title: "Requirement Gathering",
    points: [
      "Understand your business goals, target audience, and service model to craft a personalized Milk Delivery App.",
      "Collaborate closely to ensure every feature aligns with your vision.",
      "Deliver a scalable and efficient solution tailored to your needs.",
    ],
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/Daily-delivery-gathering-requirements.webp",
  },
  {
    title: "Design & Development",
    points: [
      "Create an intuitive and engaging user interface for a better user experience.",
      "Develop a powerful, high-performing app with robust features.",
      "Optimize the app for smooth, seamless interactions for both customers and drivers.",
    ],
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/Daily-delivery-design-and-development.webp",
  },
  {
    title: "Collect Third-party Accounts",
    points: [
      "Integrate essential third-party services like payment gateways, real-time tracking APIs, and communication tools.",
      "Ensure secure payments and accurate delivery tracking.",
      "Enhance app functionality for a seamless user experience.",
    ],
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/Daily-delivery-collect-third-party-accounts.webp",
  },
  {
    title: "Test and Launch",
    points: [
      "Conduct thorough testing to identify and fix any issues for a flawless app.",
      "Ensure all checks are passed for optimal performance.",
      "Quickly launch your Milk Delivery App on the App Store and Play Store, ready to reach customers.",
    ],
    img: "https://whitelabelfox.com/assets/images/daily-delivery-app/Daily-delivery-test-and-launch.webp",
  },
];

const DevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const step = processSteps[activeStep];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-white border rounded-full text-sm text-gray-700">
            <span className="w-2 h-2 bg-[#003C52] rounded-full"></span>
            Development Process
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Milk Delivery App{" "}
          <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">Development Process</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our Milk Delivery App development process ensures a fully customized,
          efficient, and user-friendly platform designed to meet the specific
          needs of your milk delivery business. Here’s a brief overview of each
          step:
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {processSteps.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-6 py-2 rounded-full border transition ${
                activeStep === index
                  ? "bg-gradient-to-r from-[#003C52] to-[#01B49E]  border-teal-600 text-white"
                  : "bg-white text-gray-700 border-teal-500 hover:bg-teal-50"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-white border border-bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <ul className="space-y-4">
              {step.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 w-2 h-2 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={step.img}
              alt="process"
              className="w-[350px] max-w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DevelopmentProcess;