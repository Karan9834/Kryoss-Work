import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What is White Label Android App Development?",
            a: "White label Android app development allows businesses to launch branded mobile applications using a ready-made solution that can be customized according to their needs."
        },
        {
            q: "What does your White Label Android App Development Service include?",
            a: "Our services include UI/UX customization, feature development, testing, deployment, and post-launch support to ensure your app runs smoothly."
        },
        {
            q: "Who should use a White Label Android App Development Agency?",
            a: "Startups, enterprises, and agencies looking to launch apps quickly without building everything from scratch benefit from white label solutions."
        },
        {
            q: "Do I get full ownership of the app?",
            a: "Yes, we provide full ownership of the source code and app assets once the development is completed."
        },
        {
            q: "How long does White Label Android App Development take?",
            a: "Typically it takes a few weeks depending on customization, integrations, and additional features required."
        },
        {
            q: "Can the app be customized to my brand?",
            a: "Absolutely. You can customize colors, branding, features, and UI elements to align with your brand identity."
        },
        {
            q: "Is White Label Android App Development scalable?",
            a: "Yes, the apps are built with scalable architecture so they can grow with your business and user base."
        },
        {
            q: "Do you provide post-launch support?",
            a: "Yes, we provide ongoing maintenance, updates, bug fixes, and feature upgrades after launch."
        },
        {
            q: "How much does White Label Android App Development cost?",
            a: "Pricing depends on customization, integrations, and project complexity. We provide flexible pricing models."
        },
        {
            q: "Why choose a White Label Android App Development Agency?",
            a: "Working with experts helps you launch faster, reduce development costs, and ensure high-quality performance."
        }
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-semibold mb-4">
                        Frequently Asked Questions About{" "}
                        <span className="text-orange-500">
                            White Label Android App Development
                        </span>
                    </h2>

                    <p className="text-gray-600">
                        Get quick clarity on our White Label Android App Development Service,
                        from features and timelines to pricing and ongoing support.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-5">

                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-full px-6 py-5 bg-gray-50 transition-all"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full text-left"
                            >

                                <span className="text-lg font-medium">
                                    {item.q}
                                </span>

                                {/* Icon */}
                                <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                                    {openIndex === index ? (
                                        <Minus size={18} />
                                    ) : (
                                        <Plus size={18} />
                                    )}
                                </div>

                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <p className="mt-4 text-gray-600 leading-relaxed">
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