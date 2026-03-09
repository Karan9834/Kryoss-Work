import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const MultiFaqs = () => {

    const faqs = [
        {
            q: "What is the on demand delivery app?",
            a: "An on-demand delivery app allows customers to order products or services and receive them instantly through a delivery network."
        },
        {
            q: "How much does it cost to create an on demand delivery app?",
            a: "The cost depends on features, customization, and platforms. A basic app may start from a few thousand dollars."
        },
        {
            q: "How long will it take to develop my customized platform?",
            a: "Usually it takes around 6–12 weeks depending on complexity, integrations, and customization needs."
        },
        {
            q: "What if I want to customize my on demand marketplace app?",
            a: "Our platform supports full customization including UI design, payment methods, delivery modules, and integrations."
        },
        {
            q: "Do you provide support or maintenance?",
            a: "Yes, we provide continuous technical support, updates, and maintenance services after deployment."
        },
        {
            q: "How can your on-demand delivery software help grow my business?",
            a: "It improves efficiency, increases customer reach, automates delivery management, and boosts revenue."
        },
        {
            q: "How do I create an on-demand service app?",
            a: "You can start with our ready-to-launch solution and customize it according to your business model."
        },
        {
            q: "How can I scale my delivery business using this app?",
            a: "Our scalable architecture supports multi-vendor systems, real-time tracking, and advanced analytics."
        },
        {
            q: "Do you offer a free trial or demo of the software?",
            a: "Yes, we offer a live demo so you can explore the platform before making a decision."
        },
        {
            q: "What types of businesses can use this delivery app?",
            a: "Food delivery, grocery, pharmacy, courier services, logistics companies, and many more industries."
        }
    ];

    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm text-gray-600 mb-4">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        FAQ's
                    </div>

                    <h2 className="text-4xl font-semibold">
                        Frequently <span className="text-cyan-500">Asked Questions</span>
                    </h2>

                </div>

                {/* FAQ GRID */}

                <div className="grid md:grid-cols-2 gap-x-16">

                    {faqs.map((item, index) => (

                        <div
                            key={index}
                            className="border-b py-6 cursor-pointer"
                            onClick={() => toggle(index)}
                        >

                            {/* Question */}

                            <div className="flex items-center justify-between">

                                <h3 className="text-lg font-medium text-gray-800">
                                    {item.q}
                                </h3>

                                <span className="ml-4">

                                    {open === index ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
                                    )}

                                </span>

                            </div>

                            {/* Answer */}

                            {open === index && (
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

export default MultiFaqs;