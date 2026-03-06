import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "What is an Uber For Doctors App, and how does it work?",
    "How long does it take to develop an Uber For Doctors App?",
    "Is the app customizable to fit my business needs?",
    "Can the app handle both Android and iOS users?",
    "What features are included in the app?",
    "Is the app secure for storing patient data?",
    "Can I scale the app as my business grows?",
    "Do you provide support after the app is launched?",
    "How does the payment system work in the app?",
    "Why should I choose your On-Demand Doctor App Development service?"
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
            FAQ's
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-blue-700 mb-16">
          Frequently Asked Questions
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