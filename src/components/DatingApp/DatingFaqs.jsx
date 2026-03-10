import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly is a Tinder Clone application and how does it operate?",
    answer:
      "A Tinder Clone app is a ready-made dating platform that works similarly to popular swipe-based apps. Users can create profiles, browse nearby matches, swipe to like or dislike, and start conversations once there is a mutual match.",
  },
  {
    question: "How fast can I deploy my dating app using the Tinder Clone solution?",
    answer:
      "With our ready-to-launch Tinder Clone platform, you can typically launch your app within a few days. The process includes branding customization, feature configuration, and deployment to the app stores.",
  },
  {
    question: "Which features are included in the Tinder Clone platform?",
    answer:
      "The solution includes swipe matching, real-time chat, profile management, location-based discovery, push notifications, admin dashboard, payment integrations, and advanced user filtering.",
  },
  {
    question: "Can the Tinder Clone be customized for my brand and requirements?",
    answer:
      "Yes, the platform is fully customizable. You can modify the app branding, color scheme, features, subscription plans, and other elements to match your business model.",
  },
  {
    question: "Is it possible to connect third-party services with the app?",
    answer:
      "Absolutely. The app supports integration with payment gateways, social login systems, push notification services, analytics tools, and other external APIs.",
  },
  {
    question: "What is the cost structure of the Tinder Clone platform?",
    answer:
      "Pricing depends on customization requirements and optional features. Our team provides transparent pricing with no hidden charges, ensuring you know exactly what you’re paying for.",
  },
  {
    question: "How safe and secure is the Tinder Clone application?",
    answer:
      "The platform is designed with strong security standards including encrypted data transfer, secure authentication, and admin controls to prevent misuse and protect user information.",
  },
  {
    question: "Do you provide assistance after the app is launched?",
    answer:
      "Yes, we offer post-launch support including bug fixes, performance optimization, and optional maintenance packages to ensure smooth operation of your app.",
  },
  {
    question: "Can I monitor analytics and user activity in the app?",
    answer:
      "Yes, the admin dashboard allows you to track user engagement, match activity, revenue insights, and other key metrics to help manage and grow your platform.",
  },
  {
    question: "Why choose a Tinder Clone instead of building a custom app from scratch?",
    answer:
      "A Tinder Clone significantly reduces development time and cost. Instead of building everything from zero, you get a proven system that can be customized and launched quickly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* badge */}
        <div className="text-center mb-3">
          <span className="inline-block border px-4 py-1 rounded-full text-sm">
            FAQ’s
          </span>
        </div>

        {/* heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-pink-500 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-4">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">

              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-800 py-3"
              >
                {faq.question}

                {openIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>

              {openIndex === index && (
                <p className="text-gray-600 text-sm pb-3">
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