import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqsLeft = [
  "Can I customize a handyman clone app for my business?",
  "What revenue streams does an app similar to Handyman support? How can I make money?",
  "How does a handyman app like Uber benefit customers?",
  "Are there any hidden fees for handyman app development?",
  "What is the timeline for Handyman clone development?"
];

const faqsRight = [
  "Can I access analytics and reports from the Uber like app for Handyman?",
  "How do I manage payments and commissions?",
  "Can I integrate third-party tools into the handyman app?",
  "Can I create custom push notifications and alerts?",
  "Can I add more service categories to the Handyman app like Uber in the future?"
];

const FAQItem = ({ question }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-yellow-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left group"
      >
        <span className="text-gray-800 font-medium group-hover:text-yellow-600 transition">
          {question}
        </span>

        <Plus
          className={`text-yellow-600 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          size={20}
        />
      </button>

      {open && (
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          This is a customizable solution designed to scale with your business needs. 
          You can configure services, pricing, payments, and features based on your 
          target market and operational goals.
        </p>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#fffaf0]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm inline-block mb-6">
            Got Questions?
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Have{" "}
            <span className="text-yellow-600">
              Any Questions?
            </span>
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto">
            Are you curious to know more about the Uber-like app for handyman? 
            We’ve got you covered.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            {faqsLeft.map((q, i) => (
              <FAQItem key={i} question={q} />
            ))}
          </div>

          <div>
            {faqsRight.map((q, i) => (
              <FAQItem key={i} question={q} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;