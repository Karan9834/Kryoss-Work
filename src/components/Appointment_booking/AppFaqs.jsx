import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "What describes an on-demand clinical app, and how does it function?",
    "What timeline is expected to engineer a medical booking platform?",
    "Can the software be tailored to align with my organizational goals?",
    "Is the solution compatible across both Apple and Android ecosystems?",
    "Which core functionalities are packaged within the base application?",
    "How secure is the architecture regarding sensitive medical records?",
    "Is it possible to expand the system capacity alongside business growth?",
    "Are maintenance and technical assistance provided post-deployment?",
    "In what manner are financial transactions processed through the system?",
    "Why ought I select your specialized healthcare software development services?"
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-6">
          <span className="border px-4 py-1 rounded-full text-sm">
            Common Queries
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-blue-700 mb-16">
          Most Common Client Inquiries
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-5">

              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-medium"
              >
                {faq}

                {openIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  This is placeholder content for the answer.
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}