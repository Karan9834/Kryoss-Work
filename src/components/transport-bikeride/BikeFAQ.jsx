import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const bikeFaqs = [
    {
        q: "What is a Bike Taxi App, and how does it work?",
        a: "A bike taxi app connects riders with nearby bike drivers through a mobile application. Users can book rides, track drivers in real-time, and pay through integrated payment gateways."
    },
    {
        q: "How long does it take to launch a Bike Taxi App?",
        a: "Launching a bike taxi app depends on features and customization but generally takes between 4 to 10 weeks for development and deployment."
    },
    {
        q: "Can I customize the app as per my business requirements?",
        a: "Yes, the app can be fully customized including branding, pricing models, ride features, payment integrations, and user interface."
    },
    {
        q: "Is the app available for both Android and iOS?",
        a: "Yes, bike taxi apps are usually developed for both Android and iOS platforms to ensure wider accessibility for users."
    },
    {
        q: "How do drivers get paid through the app?",
        a: "Drivers receive payments directly through integrated payment gateways or digital wallets, and can track their earnings through the driver dashboard."
    },
    {
        q: "Does the app include real-time GPS tracking?",
        a: "Yes, real-time GPS tracking allows customers to track the driver's location and estimated arrival time."
    },
    {
        q: "Can I integrate multiple payment options in my app?",
        a: "Yes, you can integrate credit cards, debit cards, digital wallets, and UPI-based payment methods."
    },
    {
        q: "Is the app compliant with local taxi regulations?",
        a: "The app can be customized to comply with local regulations including driver verification, ride records, and fare policies."
    },
    {
        q: "Will I get access to the app's source code?",
        a: "Yes, depending on the development agreement, you can receive full ownership and access to the source code."
    },
    {
        q: "How do I get started with my Bike Taxi App?",
        a: "You can begin by discussing your requirements with a development team who will design and build the app according to your business model."
    }
];

const BikeFaqs = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-16">

                    <span className="border rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        FAQs
                    </span>

                    <h2 className="text-4xl font-semibold">
                        Have <span className="text-teal-600">any questions?</span>
                    </h2>

                </div>

                {/* grid */}
                <div className="grid md:grid-cols-2 gap-x-16">

                    {bikeFaqs.map((faq, index) => {

                        const isOpen = open === index;

                        return (
                            <div key={index} className="border-b py-6">

                                <button
                                    onClick={() => toggle(index)}
                                    className="flex justify-between items-center w-full text-left text-lg font-medium"
                                >
                                    {faq.q}

                                    <span className="border rounded-full p-1 ml-4">

                                        {isOpen ? (
                                            <Minus size={18} />
                                        ) : (
                                            <Plus size={18} />
                                        )}

                                    </span>

                                </button>

                                {isOpen && (
                                    <p className="mt-4 text-gray-600">
                                        {faq.a}
                                    </p>
                                )}

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default BikeFaqs;