import React, { useState } from "react";

const faqs = [
  {
    question: "What is White Label Flutter App Development?",
    answer:
      "White label Flutter app development allows businesses to launch fully functional mobile apps that can be customized with their own branding. It helps companies save development time while still offering a unique and scalable mobile solution."
  },
  {
    question: "Why should businesses choose Flutter for white label apps?",
    answer:
      "Flutter enables developers to build applications for both Android and iOS using a single codebase. This reduces development costs, speeds up delivery, and ensures a consistent user experience across platforms."
  },
  {
    question: "How long does a white label Flutter app take to launch?",
    answer:
      "The timeline depends on the features and customization required. However, most white label Flutter apps can be launched significantly faster than building an application from scratch."
  },
  {
    question: "Can I fully customize a white label Flutter app?",
    answer:
      "Yes, white label Flutter solutions allow customization of branding, UI design, features, and integrations. Businesses can tailor the application to match their specific requirements."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, ongoing maintenance and support services are usually provided to ensure smooth performance, bug fixes, updates, and feature improvements after the app is launched."
  },
  {
    question: "Is Flutter suitable for enterprise-level applications?",
    answer:
      "Flutter is capable of supporting enterprise applications thanks to its high performance, scalability, and ability to integrate with modern backend technologies."
  },
  {
    question: "Can you migrate existing apps to Flutter?",
    answer:
      "Yes, existing applications can be migrated to Flutter to improve performance, simplify maintenance, and unify development under a single cross-platform framework."
  },
  {
    question: "What industries benefit from white label Flutter apps?",
    answer:
      "Industries such as e-commerce, healthcare, logistics, fintech, education, and on-demand services benefit from Flutter apps due to their scalability and fast development cycles."
  },
  {
    question: "How secure are white label Flutter applications?",
    answer:
      "Flutter apps can implement modern security practices including secure APIs, encrypted data storage, authentication systems, and regular updates to protect user data."
  },
  {
    question: "How do I get started with White Label Flutter App Development?",
    answer:
      "Getting started usually involves discussing project requirements, defining features, selecting a customization approach, and then beginning development with a dedicated Flutter team."
  }
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-12">

          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-orange-100 text-orange-600">
            FAQs
          </span>

          <h2 className="text-4xl font-semibold mt-4">
            Have Any Questions About Our{" "}
            <span className="text-orange-500">
              Flutter App Development Services?
            </span>
          </h2>

          <p className="text-gray-600 mt-3">
            As a trusted Flutter development partner, we ensure that all your
            questions are answered before you move forward with your project.
          </p>

        </div>


        {/* FAQ LIST */}

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-xl bg-gray-50 overflow-hidden"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium"
              >

                {faq.question}

                <span className="text-xl">
                  {active === index ? "−" : "+"}
                </span>

              </button>

              {active === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}