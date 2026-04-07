import React, { useState } from "react";

const faqs = [
  {
    question: "Do you provide ownership of the source code for the inDriver clone purchase?",
    answer:
      "Yes, we provide complete source code ownership with your purchase. This gives you full control over customization, future updates, scalability, and integrations. You can modify the application as per your business goals without dependency restrictions."
  },
  {
    question: "What are the Benefits of inDrive Clone App Development?",
    answer:
      "An inDriver clone app offers a flexible bidding-based pricing model, faster launch time, scalable infrastructure, and multi-service integration. It helps entrepreneurs enter the ride-hailing market quickly with reduced development costs and maximum customization."
  },
  {
    question: "What is the Revenue Model of the inDriver Like App?",
    answer:
      "Revenue can be generated through commission per ride, subscription plans for drivers, surge pricing margins, featured driver listings, advertisement placements, cancellation charges, and payment gateway fees."
  },
  {
    question: "How Much inDrive Clone App Development Cost?",
    answer:
      "The cost depends on customization level, feature additions, platform support (Android, iOS, Web), and third-party integrations. However, compared to building from scratch, a clone solution significantly reduces time and development expenses."
  },
  {
    question: "How Does Kryoss Work Protect My Business Data?",
    answer:
      "We implement enterprise-level security protocols including encrypted databases, secure payment gateways, role-based access control, server-side validation, and secure authentication layers to protect business and user data."
  },
  {
    question: "Does Kryoss Work Add More Features to inDriver Like App on My Requirement?",
    answer:
      "Absolutely. Our solution is fully customizable. We can integrate additional modules, payment systems, geo-location services, advanced analytics, or any feature specific to your business model."
  },
  {
    question: "Will Kryoss Work Support Me with an App like inDriver Update?",
    answer:
      "Yes, we provide ongoing technical support and version updates. Our team ensures compatibility with the latest OS versions, bug fixes, feature improvements, and security patches."
  },
  {
    question: "Can I Offer Multiple Services (e.g., taxi, bike rental, courier) on the App?",
    answer:
      "Yes, our multi-service architecture allows you to offer taxi rides, bike rentals, parcel delivery, food delivery, and other on-demand services within a single unified platform."
  },
  {
    question: "How Long Does it Take to Develop the inDriver Clone Script?",
    answer:
      "With our ready-made solution, deployment can be completed within days. Additional customization may extend the timeline depending on complexity and integrations required."
  },
  {
    question: "How Can I Start Using the inDriver Clone App?",
    answer:
      "Simply contact our team, share your requirements, finalize branding, configure your server, and we’ll assist with deployment. Once configured, you can launch your app on app stores immediately."
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
            FAQs
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Have{" "}
          <span className="text-[#6dbb1a]">
            any questions?
          </span>
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