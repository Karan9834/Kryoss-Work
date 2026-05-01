import React, { useState } from "react";

const faqs = [
  {
    question: "Do you provide complete ownership of the source code upon purchase?",
    answer: "Yes, we grant full source code ownership with every purchase. This empowers you with absolute control over customization, feature updates, scaling, and integration without any restrictive dependencies."
  },
  {
    question: "What are the primary advantages of developing an inDrive-style application?",
    answer: "An inDrive-style platform offers a flexible bidding-based pricing structure, rapid market entry, scalable architecture, and the ability to integrate multiple services, allowing for a high-ROI transport business."
  },
  {
    question: "How does the revenue generation work for this bidding platform?",
    answer: "Revenue can be successfully generated through trip-based commissions, driver subscription tiers, premium listings, integrated advertisements, and cancellation fee management."
  },
  {
    question: "What factors influence the development cost of the inDrive replica?",
    answer: "The final cost is determined by your specific customization needs, additional feature requests, multi-platform support (iOS, Android, Web), and any third-party API requirements."
  },
  {
    question: "How is business and user data protected within the system?",
    answer: "We secondary high-level security protocols including database encryption, secure payment tunnels, multi-factor authentication, and specialized access controls to safeguard all sensitive information."
  },
  {
    question: "Can you integrate custom features based on my business requirements?",
    answer: "Absolutely. Our framework is highly adaptable. We can develop and integrate specialized modules, regional payment systems, or advanced logistics tools tailored to your commercial vision."
  },
  {
    question: "Do you offer technical support for platform updates and maintenance?",
    answer: "Yes, we provide comprehensive technical assistance and version updates. Our team ensures your platform remains compatible with the latest OS releases and adheres to modern security standards."
  },
  {
    question: "Is it possible to offer multiple services like bike rentals or delivery within one app?",
    answer: "Yes, our multi-service architecture allows you to deploy various modules—including taxi rides, courier services, and bike rentals—within a single, unified application ecosystem."
  },
  {
    question: "What is the typical timeframe to launch the inDrive clone solution?",
    answer: "With our production-ready solution, basic deployment can be achieved in a matter of days. Custom branding and feature additions may extend the timeline depending on complexity."
  },
  {
    question: "What are the first steps to initiate my project with you?",
    answer: "Simply reach out to our consulting team to share your vision. We will assist you with branding, server configuration, and the entire deployment lifecycle to get you market-ready."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-[#d6e6c4] bg-white px-4 py-1 rounded-full text-sm text-gray-700">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            General Inquiries
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 text-center">
          Frequently Asked{" "}
          <span className="text-[#6dbb1a]">
            Questions Regarding
          </span>{" "}
          our inDrive Replica
        </h2>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-800 py-4"
              >
                {faq.question}

                <span className="ml-4 text-xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 pb-4">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;