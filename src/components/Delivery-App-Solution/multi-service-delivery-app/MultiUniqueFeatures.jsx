import react from 'react';

import {
    Globe,
    Users,
    Smartphone,
    CreditCard,
    Truck,
    ShieldCheck
} from "lucide-react";

const uniqueFeatures = [
    {
        icon: Globe,
        title: "Customer Website",
        desc: "Give your customers the convenience of placing orders directly from a responsive web platform. Manage profiles, browse nearby services, and track deliveries in real-time - all without downloading the app."
    },
    {
        icon: Users,
        title: "Multi-Vendor Support",
        desc: "Our app allows you to easily manage different types of vendors in one platform and serve a wide range of products and services like groceries, food, medicine, and more."
    },
    {
        icon: Smartphone,
        title: "Seamless User Experience",
        desc: "We prioritize intuitive, user-friendly design of the app to provide your customers, drivers, and store owners an effortless and smooth user experience at every step."
    },
    {
        icon: CreditCard,
        title: "Flexible Payment Options",
        desc: "Our delivery app provides customers a variety of payment methods, including digital wallets, cash on delivery, and subscription models, that improve convenience of customers."
    },
    {
        icon: Truck,
        title: "Provide Reliable Delivery",
        desc: "We ensure your customers always get their delivery orders on time with our intelligent routing and scheduling features."
    },
    {
        icon: ShieldCheck,
        title: "Reliable & Secure",
        desc: "On-demand delivery app built with top-notch technology to ensure safe transactions, data protection, and uninterrupted delivery service."
    }
];

const MultiUniqueFeatures = () => {
    return (

        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* badge */}

                <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-600 mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Unique Features
                </div>

                {/* heading */}

                <h2 className="text-4xl font-semibold mb-4">
                    What Sets Our{" "}
                    <span className="text-cyan-500">
                        On-Demand Delivery Software Apart
                    </span>
                </h2>

                <p className="text-gray-500 max-w-3xl mx-auto mb-16">
                    Here, you will discover what makes our on-demand delivery software unique
                    and how it helps your business grow effortlessly.
                </p>

            </div>

            {/* main gradient container */}

            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-gradient-to-r from-sky-400 to-green-400 rounded-[40px] p-10 md:p-14">

                    <div className="grid md:grid-cols-2 gap-10">

                        {uniqueFeatures.map((feature, index) => {

                            const Icon = feature.icon;

                            return (

                                <div
                                    key={index}
                                    className="bg-white rounded-3xl p-8 flex gap-5"
                                >

                                    <div className="flex items-start">

                                        <div className="p-4 border rounded-full">

                                            <Icon size={22} className="text-gray-800" />

                                        </div>

                                    </div>

                                    <div>

                                        <h3 className="text-xl font-semibold text-cyan-600 mb-2">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {feature.desc}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );
};

export default MultiUniqueFeatures;