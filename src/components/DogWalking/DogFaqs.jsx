import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is a dog walking app and how does it work?",
    answer:
      "A dog walking app connects pet owners with professional dog walkers nearby. Owners can book walks, schedule time slots, track the walk in real time, and make secure payments directly through the app."
  },
  {
    question: "How can I register as a dog walker on the platform?",
    answer:
      "To become a dog walker, simply sign up as a service provider, submit your identification details, experience information, and verification documents. Once approved, you can start accepting walk requests."
  },
  {
    question: "How do I know if the dog walker is trustworthy?",
    answer:
      "All walkers go through a strict verification process including identity checks, background verification, and ratings from previous clients. You can also view reviews and ratings before booking."
  },
  {
    question: "Can I track my dog during the walk?",
    answer:
      "Yes. The app includes real-time GPS tracking so you can see the walking route, duration, and location updates while the walk is happening."
  },
  {
    question: "What happens if I need to cancel a walk?",
    answer:
      "You can cancel a walk through the app before the scheduled time. Depending on the cancellation policy, you may receive a full or partial refund."
  },
  {
    question: "Are there any special features for dog walkers?",
    answer:
      "Dog walkers get features like schedule management, request notifications, earnings tracking, route navigation, and client communication tools."
  },
  {
    question: "Is the app available for Android and iOS?",
    answer:
      "Yes. The platform is available on both Android and iOS devices, ensuring pet owners and walkers can easily access the service from any smartphone."
  },
  {
    question: "How are payments processed for dog walking services?",
    answer:
      "Payments are processed securely through integrated payment gateways. Users can pay using cards, wallets, or other supported digital payment methods."
  },
  {
    question: "Can I leave feedback for a dog walker?",
    answer:
      "Yes. After every walk, pet owners can rate the service and leave reviews to help other users choose the best walker."
  },
  {
    question: "How do I choose the best walker for my dog?",
    answer:
      "You can compare walkers based on ratings, reviews, experience, pricing, and distance from your location before making a booking."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="border border-gray-300 rounded-full px-4 py-1 text-sm">
            <span className="w-2 h-2 bg-green-600 inline-block rounded-full mr-2"></span>
            FAQ's
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold text-green-700 mb-16">
          Frequently Asked Questions
        </h2>


        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-x-16">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-5">

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left font-medium"
              >
                {faq.question}

                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQSection;