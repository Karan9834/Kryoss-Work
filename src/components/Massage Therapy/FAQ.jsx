import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Uber for Massage App?",
      answer:
        "The Uber for Massage App is an on-demand platform that connects users with professional massage therapists. Users can easily book massage sessions through the app at their preferred time and location. It’s designed to provide a seamless, convenient experience for both clients and therapists.",
    },
    {
      question: "How does the Uber for Massage App work for users?",
      answer:
        "Users can browse available therapists, view their profiles, select a therapist, and schedule a session directly through the app. The app also offers real-time tracking, secure payment options, and instant notifications to keep users updated about their bookings.",
    },
    {
      question: "How does the Uber for Massage App work for massage therapists?",
      answer:
        "Massage therapists can create profiles, set their availability, and accept booking requests through the app. They can manage appointments, track their earnings, and ensure smooth payment transactions all within the app.",
    },
    {
      question: "What features does the Uber for Massage App offer?",
      answer:
        "Our app comes with features like booking management, real-time location tracking, secure payment processing, client reviews and ratings, notifications, in-app messaging, and an easy-to-use admin panel to manage the entire process efficiently.",
    },
    {
      question: "Can I customize the Uber for Massage App for my business?",
      answer:
        "Yes, the Uber Massage Therapy App is fully customizable. You can tailor the app to suit your specific needs, including branding, features, and design, ensuring a unique experience for your users.",
    },
    {
      question: "How long does it take to launch the Uber for Massage App?",
      answer:
        "Our On-Demand Massage App Development solution allows you to launch your app in just 5 working days, ensuring a quick and efficient setup for your massage therapy business.",
    },
    {
      question: "Is the Uber for Massage App secure?",
      answer:
        "Yes, the app is built with robust security measures to protect user data, payments, and privacy. Secure payment gateways and encrypted communication ensure a safe experience for both clients and therapists.",
    },
    {
      question: "What are the benefits of using the Uber for Massage App for my business?",
      answer:
        "The app helps you scale your business quickly, manage bookings and payments, and offer a convenient, customer-friendly platform for massage therapy. You can also track performance, offer personalized services, and improve customer satisfaction with real-time updates.",
    },
    {
      question: "Can I track the location of my massage therapist?",
      answer:
        "Yes, the Uber for Massage App offers real-time location tracking for both clients and therapists. This feature ensures that users can track their therapist’s arrival and ensures a smoother overall experience.",
    },
    {
      question: "How do I pay for the massage services through the app?",
      answer:
        "Payment is easy and secure. You can add your preferred payment method to the app, and it will be charged automatically after your massage is complete.",
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