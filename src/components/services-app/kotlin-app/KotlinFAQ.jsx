import React, { useState } from "react";

const faqs = [
    {
        question: "Who owns the source code in your white label Kotlin app development services?",
        answer:
            "You get complete ownership of the source code. Once the project is delivered, the codebase belongs entirely to you."
    },
    {
        question: "Can I rebrand the app for my own clients?",
        answer:
            "Yes, our white label apps are fully customizable and can be rebranded with your company name, logo, and design."
    },
    {
        question: "Does your Kotlin solution work on both iOS and Android?",
        answer:
            "Yes, Kotlin Multiplatform allows shared business logic across Android and iOS while maintaining native performance."
    },
    {
        question: "How long does it take to launch a white label Kotlin app?",
        answer:
            "Most apps can be launched within a few weeks depending on the customization and features required."
    },
    {
        question: "Is the UI/UX customizable, or is it a standard template?",
        answer:
            "The UI/UX is fully customizable and can be adapted to match your brand and business requirements."
    },
    {
        question: "What kind of post-launch support do you provide?",
        answer:
            "We provide maintenance, performance monitoring, and updates after the launch of the application."
    },
    {
        question: "Is a white label app built with Kotlin as secure as a custom app?",
        answer:
            "Yes, Kotlin follows modern security practices ensuring high reliability and safety."
    },
    {
        question: "Will my app be rejected by the Apple App Store or Google Play?",
        answer:
            "We follow store guidelines carefully to ensure smooth approval during submission."
    },
    {
        question: "Can I integrate third-party APIs into the white label solution?",
        answer:
            "Yes, our architecture supports integration with payment gateways, CRMs, and other APIs."
    },
    {
        question: "Why is Kotlin better than Flutter or React Native for white labeling?",
        answer:
            "Kotlin offers strong native performance, scalability, and excellent Android ecosystem support."
    }
];

export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">

            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Badge */}
                <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    FAQs
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Have a Query Regarding{" "}
                    <span className="text-orange-500">
                        Kotlin App Development Services
                    </span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 mt-6">
                    We love maintaining transparency with our clients. Check the question
                    list below to get answers to common queries.
                </p>

            </div>


            <div className="max-w-4xl mx-auto mt-16 px-6 space-y-6 ">

                {faqs.map((faq, index) => (

                    <div
                        key={index}
                        className="bg-gray-50 border rounded-full px-8 py-6 transition"
                    >

                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >

                            <h3 className="text-lg font-medium pr-6">
                                {faq.question}
                            </h3>

                            {/* CIRCLE ICON */}
                            <div className="w-9 h-9 flex items-center justify-center border rounded-full text-xl font-semibold">

                                {activeIndex === index ? "-" : "+"}

                            </div>

                        </div>

                        {/* ANSWER */}
                        {activeIndex === index && (

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>

                        )}

                    </div>

                ))}

            </div>

        </section>
    );
}