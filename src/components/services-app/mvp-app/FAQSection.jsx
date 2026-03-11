import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is a white label MVP app development service?",
    a: "White label MVP development allows businesses to launch a ready-to-customize product under their own brand quickly, reducing development time and cost."
  },
  {
    q: "How does a white label MVP differ from custom app development?",
    a: "A white label MVP is pre-built and customizable, while custom development starts from scratch and requires significantly more time and resources."
  },
  {
    q: "Do I get 100% source code ownership with your white label solutions?",
    a: "Yes. Our solutions provide full source code ownership so you have complete control over your product and its future development."
  },
  {
    q: "How long does it take to launch a white label MVP?",
    a: "Most MVP platforms can be launched within a few weeks depending on customization requirements."
  },
  {
    q: "Can I fully customize the UI/UX of a white label MVP?",
    a: "Yes, the UI/UX can be fully customized to align with your brand identity and product vision."
  },
  {
    q: "Is a white label MVP scalable for future growth?",
    a: "Absolutely. Our architecture is built to scale so you can expand features and user capacity as your business grows."
  },
  {
    q: "Do you handle App Store and Play Store submissions?",
    a: "Yes, we assist with deployment and submissions to both the Apple App Store and Google Play Store."
  },
  {
    q: "What are the cost benefits of choosing a white label MVP company?",
    a: "It significantly reduces development costs and time-to-market while allowing you to validate your idea quickly."
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes, we provide continuous support, updates, and optimization after your MVP launch."
  },
  {
    q: "Why is a white label MVP better for startups and agencies?",
    a: "It helps startups and agencies launch products faster, test ideas quickly, and reduce development risk."
  }
];

const FAQSection = () => {

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-white py-24">

      <div className="max-w-4xl mx-auto px-6">

        {/* TOP */}

        <div className="text-center mb-12">

          <span className="px-4 py-1 text-sm border rounded-full text-slate-600">
            FAQs
          </span>

          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-800">
            <span className="text-indigo-500">Have Queries?</span> Get it Solved!
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We understand you may have questions before starting your MVP
            journey. Here are some of the most common questions our clients ask.
          </p>

        </div>

        {/* ACCORDION */}

        <div className="space-y-4">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left font-medium text-slate-800"
              >

                {item.q}

                {active === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}

              </button>

              {active === index && (
                <div className="px-6 pb-6 text-slate-600 text-sm">
                  {item.a}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQSection;