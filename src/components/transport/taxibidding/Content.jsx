import React, { useState } from "react";

import reqImg from "../../../assets/req.webp";
import designImg from "../../../assets/app.webp";
import apiImg from "../../../assets/third.webp";
import testImg from "../../../assets/test.webp";

const SeamlessLaunchSection = () => {
  const [activeTab, setActiveTab] = useState("requirement");

  const content = {
  requirement: {
    title: "Business Strategy & Discovery",
    image: reqImg,
    paragraphs: [
      "Every prosperous venture starts with a thorough exploration of your corporate vision. We partner with you to dissect your objectives, demographic focus, business mechanics, and functional needs, ensuring our framework matches your commercial trajectory.",

      "Our specialists assess all technical constraints, including growth potential, cloud architecture, and external service requirements. This proactive planning establishes a resilient and high-velocity system from day one.",

      "We develop a comprehensive security strategy encompassing data privacy, regulatory adherence, and disaster recovery. This methodical approach minimizes operational hazards and ensures a flawless transition to the market."
    ]
  },

  design: {
    title: "User Experience & Brand Alignment",
    image: designImg,
    paragraphs: [
      "Our creative studio develops a contemporary and accessible interface designed to maximize user retention. Each module is strategically organized to deliver an effortless journey throughout the bidding and transport ecosystem.",

      "Through total white-label adaptation, we embed your unique brand signals—logos, color schemes, and visual language—directly into the product. This guarantees a distinct market presence that captures attention.",

      "We emphasize fluid responsiveness and cross-platform synergy, ensuring your solution operates with peak performance on all hardware and operating environments."
    ]
  },

  api: {
    title: "Advanced Ecosystem Integration",
    image: apiImg,
    paragraphs: [
      "To bolster system capabilities, we connect high-performance external services including secure payment portals, advanced mapping engines, and real-time communication tools. This creates a versatile and holistic environment.",

      "Our integration strategy prioritizes high throughput and protected data transmission. Each external interface is fine-tuned to uphold system reliability and consistent service uptime.",

      "We perform rigorous interoperability assessments to confirm all external modules function in perfect harmony with the core architecture, providing a frictionless end-user experience."
    ]
  },

  testing: {
    title: "Rigorous Quality Assurance",
    image: testImg,
    paragraphs: [
      "Prior to deployment, our specialized QA department conducts deep functional audits to ensure every module operates with absolute precision. We scrutinize the entire lifecycle from price negotiation to final settlement.",

      "We execute stress tests under diverse traffic scenarios to certify that the system remains agile and responsive during periods of extreme demand.",

      "Comprehensive security investigations and systematic bug remediation are performed to neutralize threats and deliver a stable, high-fidelity, and market-ready application."
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
            Frictionless Acquisition Journey
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Methodical Path to a Successful{" "}
          <span className="text-[#6dbb1a]">
            inDrive Clone Launch
          </span>
        </h2>

        <p className="text-gray-600 mb-10">
          Convert your concept into a market-leading reality through a development lifecycle optimized for excellence.
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