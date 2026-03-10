import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const uberFaqs = [
    {
        q: "How does a ride-hailing app work for taxi businesses?",
        a: "A ride-hailing app connects passengers with drivers through a mobile platform. Users can book rides, track drivers in real time, and make payments through integrated gateways."
    },
    {
        q: "What is the best way to launch a taxi booking app quickly?",
        a: "The fastest way is to start with a scalable white-label solution that can be customized with your branding and features before launch."
    },
    {
        q: "Who should invest in a ride-hailing app solution?",
        a: "Taxi companies, entrepreneurs, mobility startups, and transportation service providers can benefit from investing in ride-hailing applications."
    },
    {
        q: "Can the platform be customized for local taxi operations?",
        a: "Yes, ride-hailing apps can be customized with local pricing models, city-based operations, driver management, and regional regulations."
    },
    {
        q: "Does the solution support multiple ride services in one app?",
        a: "Yes, the platform can support services like bike rides, car rides, premium rides, and delivery services in a single app."
    },
    {
        q: "How long does it usually take to go live with the platform?",
        a: "Depending on customization and testing, the platform can typically go live within 4 to 8 weeks."
    },
    {
        q: "Is the platform scalable as the business grows?",
        a: "Yes, the platform is designed to scale easily by supporting more drivers, users, cities, and additional services."
    },
    {
        q: "What revenue models are supported in the system?",
        a: "Common revenue models include ride commissions, subscription plans for drivers, surge pricing, and service fees."
    },
    {
        q: "How do admins manage drivers and trips efficiently?",
        a: "Admins can monitor trips, manage drivers, track earnings, and control operations through a centralized admin dashboard."
    },
    {
        q: "Are security and safety features included?",
        a: "Yes, the platform includes features like driver verification, emergency alerts, trip tracking, and secure payment processing."
    }
];

const UberFaqs = () => {
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
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        FAQ's
                    </span>

                    <h2 className="text-4xl font-semibold">
                        Frequently Asked Questions
                    </h2>

                </div>


                {/* grid */}
                <div className="grid md:grid-cols-2 gap-x-16">

                    {uberFaqs.map((faq, index) => {

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
                                    <p className="mt-4 text-gray-600 leading-relaxed">
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

export default UberFaqs;