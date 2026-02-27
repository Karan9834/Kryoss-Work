import React, { useState } from "react";

import reqImg from "../../../assets/req.webp";
import designImg from "../../../assets/app.webp";
import apiImg from "../../../assets/third.webp";
import testImg from "../../../assets/test.webp";

const SeamlessLaunchSection = () => {
  const [activeTab, setActiveTab] = useState("requirement");

  const content = {
  requirement: {
    title: "Requirement Gathering",
    image: reqImg,
    paragraphs: [
      "Every successful project begins with a deep understanding of your business vision. We collaborate closely with you to analyze your goals, target audience, operational model, and feature expectations. This ensures the solution aligns perfectly with your market strategy.",

      "Our team evaluates all technical specifications including scalability requirements, server infrastructure planning, and third-party service dependencies. This helps us build a stable and performance-optimized architecture from the beginning.",

      "We also design a secure implementation roadmap covering data protection, compliance, and backup planning. This structured preparation reduces risks and guarantees a smooth transition from development to deployment."
    ]
  },

  design: {
    title: "App Design & White Labelling",
    image: designImg,
    paragraphs: [
      "Our design team crafts a modern and intuitive user interface that enhances user engagement. Every screen is carefully structured to provide a seamless booking and bidding experience across both driver and customer apps.",

      "With complete white-label customization, we integrate your brand identity including logo, color palette, typography, and design elements. This ensures your platform stands out uniquely in the competitive ride-hailing market.",

      "We also prioritize responsiveness and cross-device consistency, ensuring the application performs flawlessly on various screen sizes and operating systems."
    ]
  },

  api: {
    title: "Third-Party API Integration",
    image: apiImg,
    paragraphs: [
      "To enhance functionality, we integrate reliable third-party APIs including payment gateways, map navigation systems, SMS services, and push notification platforms. This ensures a fully functional ecosystem for your app.",

      "Our integration approach focuses on performance optimization and secure data exchange. Each API is configured to maintain speed, stability, and uninterrupted service availability.",

      "We also conduct compatibility testing to ensure all integrations work harmoniously within the system architecture, providing users with a smooth and uninterrupted experience."
    ]
  },

  testing: {
    title: "App Testing",
    image: testImg,
    paragraphs: [
      "Before launch, our quality assurance team performs extensive functional testing to verify every feature works exactly as intended. This includes ride booking flow, bidding process, payments, and notifications.",

      "We conduct performance testing under different load conditions to ensure the platform remains responsive even during peak traffic hours.",

      "Security audits and bug fixing are carried out meticulously to eliminate vulnerabilities and guarantee a stable, reliable, and launch-ready product."
    ]
  }
};
  return (
    <section className="w-full bg-white py-24 flex justify-center">
      <div className="w-full max-w-7xl px-6">

        {/* Top Pill */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-sm text-[#6dbb1a] border border-[#d8e6bf] bg-white px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            Experience a Seamless Purchase
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          How We Ensure a Seamless Launch with{" "}
          <span className="text-[#6dbb1a]">
            Our inDriver Clone
          </span>
        </h2>

        <p className="text-gray-600 mb-10">
          Transform your idea into reality with our development approach that ensures success at every stage.
        </p>

        {/* MAIN BOX */}
        <div
          className="
            bg-[#6C91010D]
            border border-[#6C910180]
            shadow-[0px_0px_20px_0px_#79B46526]
            rounded-[25px]
            p-[30px]
          "
        >

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-10">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  px-6 py-2 rounded-full transition-all duration-300
                  ${
                    activeTab === key
                      ? "bg-[#6dbb1a] text-white shadow-md"
                      : "border border-[#6C910180] text-[#6dbb1a] bg-white"
                  }
                `}
              >
                {content[key].title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Text */}
            <div className="space-y-6">
  {content[activeTab].paragraphs.map((para, i) => (
    <p
      key={i}
      className="text-gray-700 leading-relaxed text-[15px] md:text-base"
    >
      {para}
    </p>
  ))}
</div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={content[activeTab].image}
                alt="Process Illustration"
                className="w-[350px] object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SeamlessLaunchSection;