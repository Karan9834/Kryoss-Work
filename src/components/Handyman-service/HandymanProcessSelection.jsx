import React from "react";
import bgImage from "../../assets/Handyman/construction.png";

const ProcessDevelopmentSection = () => {
  return (
    <section className="bg-white pt-24">

      {/* ===== TOP HEADING AREA ===== */}
      <div className="text-center px-6 md:px-16 mb-16">
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1.5 rounded-full border border-green-500 text-green-600 text-sm">
            Development Process
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          <span className="text-green-600">
            Process We Follow
          </span>{" "}
          for Fox- Handyman App Development
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          We follow the proven Fox Handyman app development process to deliver
          solutions that simplify your business operations.
        </p>
      </div>

      {/* ===== BLUE BACKGROUND SECTION ===== */}
      <div className="relative rounded-t-[120px] overflow-hidden">

        {/* Background Image */}
        <img
          src={bgImage}
          alt="Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blue Overlay for consistency */}
        <div className="absolute inset-0 bg-[#7ea4c4]/90" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 py-20 md:py-28">

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            {/* CARD */}
            {[
              {
                title: "1. Requirement Gathering",
                points: [
                  "First of all, we collect your business needs in detail to provide solutions that simplify management.",
                  "Our research helps define key features and user flows aligned with your business goals.",
                ],
              },
              {
                title: "2. Designing & Development.",
                points: [
                  "We create user-friendly designs ensuring seamless navigation.",
                  "Our developers build scalable architecture that grows with your business.",
                ],
              },
              {
                title: "3. Testing",
                points: [
                  "Our testers perform strict testing across all smart devices.",
                  "We ensure your app is bug-free and optimized for performance.",
                ],
              },
              {
                title: "4. Launch and Maintenance",
                points: [
                  "After testing, we launch the optimized app on Android and iOS.",
                  "We provide long-term maintenance and performance improvements.",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-xl
                  p-6 md:p-8
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <h3 className="text-lg md:text-xl font-semibold text-green-600 mb-4">
                  {card.title}
                </h3>

                <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                  {card.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
};

export default ProcessDevelopmentSection;