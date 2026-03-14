import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const HomeCleaningFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does the Uber for House Cleaning App work?",
      answer:
        "Our app connects homeowners with professional cleaners in just a few easy steps. Users can log in, select the cleaning service they need, book a cleaner based on availability, and make secure payments—all within the app. It’s designed to make the entire house cleaning process convenient, efficient, and hassle-free for both customers and service providers.",
    },
    {
      question: "Is the app available on both Android and iOS?",
      answer:
        "Yes, the Uber for House Cleaning App is available on both Android and iOS platforms, ensuring that users can easily access and use the app no matter what device they have.",
    },
    {
      question: "Can I customize my cleaning service?",
      answer:
        "Absolutely! Our app offers flexibility in choosing the type of cleaning service you need, whether it's a one-time deep cleaning, regular maintenance, or specialized services like carpet or window cleaning. You can also specify the duration and area size, allowing for tailored services that fit your exact needs.",
    },
    {
      question: "How do I pay for the cleaning service?",
      answer:
        "Payments are made securely through the app. We support multiple payment options, including credit/debit cards, digital wallets, and other secure payment gateways, making it convenient for users to pay for services in just a few taps.",
    },
    {
      question: "Can I book a cleaner for a specific time and date?",
      answer:
        "Yes! The app allows you to check cleaner availability for your preferred date and time, enabling you to schedule a cleaning service that fits into your busy lifestyle.",
    },
    {
      question: "How do I ensure the quality of the cleaner?",
      answer:
        "Each cleaner is thoroughly vetted and must meet our high standards of professionalism and skill. You can also view ratings and reviews from other customers to help you select the best cleaner for your needs.",
    },
    {
      question: "Can I track the cleaner during the service?",
      answer:
        "Yes, our app offers real-time tracking, allowing you to see the progress of your cleaner as they work. This feature ensures transparency and gives you peace of mind knowing exactly when the service will be completed.",
    },
    {
      question: "What if I’m not satisfied with the service?",
      answer:
        "If you’re not satisfied with the service, you can contact our support team directly through the app. We’ll work with you to resolve the issue, whether it’s providing a refund, sending another cleaner, or offering an alternative solution.",
    },
    {
      question: "Can I change my cleaning service after booking?",
      answer:
        "Yes, our app allows you to modify your booking. You can change the service type, duration, or reschedule your cleaning service based on your needs, provided it’s within a reasonable time frame before the scheduled appointment.",
    },
    {
      question: "Is my personal information secure in the app?",
      answer:
        "Yes, your privacy and security are our top priority. We use advanced encryption technology to ensure that all personal information, including payment details, is kept secure. The app complies with industry-standard security practices to protect your data.",
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

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-black  px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#55D7FF] rounded-full"></span>
            FAQ’s
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#55D7FF]">
            Frequently Asked Questions
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
                  <Minus className="text-[#009ACA]" />
                ) : (
                  <Plus className="text-[#009ACA]" />
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

export default HomeCleaningFAQ;