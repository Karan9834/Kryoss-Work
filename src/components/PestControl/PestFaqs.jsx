import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is an Uber for Pest Control App?",
    answer:
      "It is an on-demand platform that connects customers with nearby pest control professionals. Users can book services instantly, track providers in real time, and manage appointments easily through the app."
  },
  {
    question: "How does the Uber for Pest Control App work?",
    answer:
      "Customers request pest control services through the app. Service providers nearby receive the request, accept it, and visit the customer location to complete the job. Payments and reviews are handled inside the platform."
  },
  {
    question: "What features are included in the Pest Control App?",
    answer:
      "Key features include service booking, provider tracking, in-app chat, secure payment gateway, rating & review system, admin dashboard, and service management tools."
  },
  {
    question: "How long will it take to launch the Uber for Pest Control App?",
    answer:
      "With a ready-made solution, the platform can usually be launched within 5–7 days after branding, configuration, and deployment are completed."
  },
  {
    question: "Can the Pest Control App be customized to my business?",
    answer:
      "Yes, the app can be customized with your branding, service categories, pricing models, payment methods, and additional business-specific features."
  },
  {
    question: "Is the Uber for Pest Control App available for both Android and iOS?",
    answer:
      "Yes, the solution includes native Android and iOS applications for customers and service providers, along with a web-based admin panel."
  },
  {
    question: "How does the app ensure a secure payment process?",
    answer:
      "The platform integrates trusted payment gateways and uses encrypted transactions to ensure secure online payments for both customers and providers."
  },
  {
    question: "Can I manage my pest control business through the app?",
    answer:
      "Yes, the admin dashboard allows you to manage bookings, track providers, monitor earnings, manage users, and view analytics."
  },
  {
    question: "What kind of support do you offer after the app is launched?",
    answer:
      "Post-launch support includes technical maintenance, bug fixes, updates, and assistance with scaling the platform as your business grows."
  },
  {
    question: "How can I attract customers to use my Pest Control App?",
    answer:
      "You can attract customers through marketing campaigns, referral programs, promotional discounts, push notifications, and strong local SEO."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="border px-4 py-1 rounded-full text-sm">
            FAQs
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-14">
          Have <span className="text-orange-500">any questions?</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-16">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-5">

              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-800"
              >
                {faq.question}

                {activeIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>

              {activeIndex === index && (
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
}