import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is an Uber for Beauty App and how does it work?",
      answer:
        "An Uber for Beauty App connects users with beauty professionals for on-demand services. Customers book appointments via the app, and professionals come to their location. The platform simplifies booking, payment, and service management.",
    },
    {
      question: "Why is Beauty App Development becoming a trend in the salon industry?",
      answer:
        "Beauty App Development allows businesses to offer on-demand services, catering to customers seeking convenience and flexibility. It helps beauty professionals expand their reach and enhance customer experience, driving business growth.",
    },
    {
      question: "How does an Uber for Beauty App improve the customer experience?",
      answer:
        "An Uber for Beauty App provides easy service booking, real-time updates, and seamless payments. Customers can select beauty professionals based on ratings and reviews, ensuring a smooth and convenient experience every time.",
    },
    {
      question: "What are the key features of an Uber for Beauty App?",
      answer:
        "Key features include real-time tracking, secure payment processing, user profiles, booking management, and customer ratings. These features ensure a seamless experience for both customers and beauty professionals.",
    },
    {
      question: "Can I customize my Uber for Beauty App to fit my salon's needs?",
      answer:
        "Yes, the app can be fully customized to reflect your branding, services, and pricing models. You can tailor the app’s functionality to meet your specific business requirements and enhance user engagement.",
    },
    {
      question: "How does Beauty App Development help beauty professionals grow their business?",
      answer:
        "Beauty App Development helps beauty professionals reach more customers, manage appointments efficiently, and streamline payment processing. It provides an organized platform for professionals to grow their clientele and manage their business.",
    },
    {
      question: "What platforms are available for an Uber for Beauty App?",
      answer:
        "Uber for Beauty Apps are typically available on iOS, Android, and web platforms. This ensures accessibility to a larger user base and supports businesses in reaching a wide audience across mobile devices and desktop browsers.",
    },
    {
      question: "How much does it cost to develop an Uber for Beauty App?",
      answer:
        "The cost of developing an Uber for Beauty App depends on the complexity and customization of the features. Typically, pre-built solutions are more affordable than custom development, with pricing varying based on functionality and platform.",
    },
    {
      question: "How do I promote my Uber for Beauty App to attract more users?",
      answer:
        "Promote your app through digital marketing, social media campaigns, and referral programs. Collaborating with beauty influencers and offering promotions can help increase visibility and attract more users to the platform.",
    },
    {
      question: "How does Beauty App Development ensure security for users and service providers?",
      answer:
        "If you have any queries or issues, you can contact our Beauty App Development incorporates secure payment gateways, data encryption, and two-factor authentication to protect both users' and service providers' information. Security measures are implemented to prevent unauthorized access and ensure safe transactions.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-gray-200 
                          text-black  px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            FAQ’s
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
          Have any questions?
          </h2>

        </div>

        {/* ===== FAQ GRID ===== */}
        <div className="grid md:grid-cols-2 gap-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 
                         hover:shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <Minus className="text-[#FF2485]" />
                ) : (
                  <Plus className="text-[#FF2485]" />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">
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

export default FAQ;