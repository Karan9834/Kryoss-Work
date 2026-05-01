import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const SnowFaqs = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "What is the Uber for Snow Plow Service App?",
            a: "It is an on-demand snow removal platform that connects customers with nearby snow plow service providers through a mobile app."
        },
        {
            q: "How long does it take to launch the Snow Plow Service App?",
            a: "Usually the app can be launched within a few days depending on customization and integration requirements."
        },
        {
            q: "Can I customize the Snow Plow Service App for my business?",
            a: "Yes, the platform can be customized with your branding, pricing model, and additional features."
        },
        {
            q: "How do the Android and iOS versions work together?",
            a: "Both apps connect through the same backend system ensuring synchronized bookings, payments, and service tracking."
        },
        {
            q: "Is the app compatible with both Android and iOS?",
            a: "Yes, the solution supports both Android and iOS devices for maximum accessibility."
        },
        {
            q: "Can I integrate third-party services into the app?",
            a: "Yes, third-party integrations such as payment gateways, maps, and notifications can be added easily."
        },
        {
            q: "What are the benefits of using an on-demand snow plow service app?",
            a: "It simplifies booking, improves customer experience, and helps service providers manage requests efficiently."
        },
        {
            q: "Can I offer different pricing models for snow plowing services?",
            a: "Yes, you can implement hourly, distance-based, or custom pricing strategies."
        },
        {
            q: "How do I manage service providers with the app?",
            a: "Admin panels allow you to monitor providers, manage jobs, and track service performance."
        },
        {
            q: "What kind of support do I get after launching the app?",
            a: "You receive technical support, maintenance updates, and assistance with scaling the platform."
        }
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-16">

                    <span className="border px-4 py-1 rounded-full text-sm text-gray-600">
                        FAQs
                    </span>

                    <h2 className="text-4xl font-semibold mt-6">
                        Have <span className="text-blue-500">any questions?</span>
                    </h2>

                </div>

                {/* grid */}
                <div className="grid md:grid-cols-2 gap-x-16">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b py-6 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >

                            {/* question */}
                            <div className="flex justify-between items-center">

                                <h3 className="text-lg font-medium pr-4">
                                    {faq.q}
                                </h3>

                                <span className="text-xl text-gray-500">
                                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                                </span>

                            </div>

                            {/* answer */}
                            {openIndex === index && (
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {faq.a}
                                </p>
                            )}

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};
export default SnowFaqs;