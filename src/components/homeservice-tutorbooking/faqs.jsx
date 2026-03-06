import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What is an Uber for Tutor App?",
        a: "An Uber for Tutor App is an on-demand platform that connects students with nearby or online tutors instantly. It allows students to search, book, and pay tutors easily while tutors can manage schedules and sessions."
    },
    {
        q: "How does an On-Demand Tutor App work?",
        a: "Students search for tutors based on subject, location, or availability. Tutors receive requests, accept sessions, and conduct tutoring online or offline. Payments and session tracking are handled within the app."
    },
    {
        q: "Can I customize my On-Demand Tutor App?",
        a: "Yes, the app is fully customizable. You can modify features, branding, UI design, payment methods, and even add new functionalities based on your business requirements."
    },
    {
        q: "How quickly can I launch my Uber for Tutor App?",
        a: "With our ready-made solution, you can launch your app within a few weeks depending on customization, testing, and deployment requirements."
    },
    {
        q: "What features does the Uber for Tutor App include?",
        a: "Key features include tutor search, instant booking, scheduling, secure payments, real-time notifications, reviews & ratings, admin dashboard, and analytics."
    },
    {
        q: "Is the Uber for Tutor App secure for payments?",
        a: "Yes, the app integrates secure and trusted payment gateways with encryption to ensure safe and transparent transactions for both students and tutors."
    },
    {
        q: "Can the Uber for Tutor Clone App scale as my business grows?",
        a: "Absolutely. The app is built on a scalable architecture that supports increasing users, tutors, sessions, and transactions without performance issues."
    },
    {
        q: "How do students find tutors using the On-Demand Tutor App?",
        a: "Students can find tutors using filters like subject, experience, ratings, availability, pricing, and location, ensuring the best match for their needs."
    },
    {
        q: "Can tutors manage their schedule using the Uber for Tutor App?",
        a: "Yes, tutors can set availability, manage bookings, accept or reject requests, and reschedule sessions directly from the app."
    },
    {
        q: "How can I get started with the Uber for Tutor App?",
        a: "You can get started by contacting our team for a demo. We’ll help you choose the right solution, customize it, and launch your app successfully."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Badge */}
                <div className="flex justify-center mb-4">
                    <span className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        FAQ’s
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-14">
                    Frequently{" "}
                    <span className="text-orange-500">Asked Questions</span>
                </h2>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left gap-4"
                            >
                                <span className="text-base md:text-lg font-medium text-gray-900">
                                    {item.q}
                                </span>
                                <span className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    )}
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                                    {item.a}
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