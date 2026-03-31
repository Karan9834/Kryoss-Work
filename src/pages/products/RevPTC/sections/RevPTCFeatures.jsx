import React from "react";
import {
    Activity,
    CreditCard,
    Shield,
    Network,
    Zap,
    Users
} from "lucide-react";

const features = [
    {
        icon: Network,
        title: "Dynamic Genealogy Tree",
        desc: "Visualize comprehensive user downlines instantly through our deeply interactive and scalable matrix map."
    },
    {
        icon: Users,
        title: "Diverse Compensation Plans",
        desc: "Execute powerful binary, unilevel, and forced matrix frameworks including spill-over logics directly."
    },
    {
        icon: CreditCard,
        title: "Integrated Gateways",
        desc: "Seamless deposit and withdrawal processing supporting PayPal, crypto networks, and manual bank wires."
    },
    {
        icon: Shield,
        title: "Bulletproof Security Architecture",
        desc: "Deploy email verifications, KYC handling, and rigid anti-fraud modules protecting your platform implicitly."
    },
    {
        icon: Activity,
        title: "Real-Time Commission Tracking",
        desc: "Distribute instant balance injections based on precise referral actions ensuring total ledger clarity."
    },
    {
        icon: Zap,
        title: "Automated PTC Interactions",
        desc: "Offer paid-to-click modules driving insane organic engagement seamlessly blending with core marketing loops."
    }
];

const RevPTCFeatures = () => {
    return (
        <section className="py-24 bg-[#f4f7ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        Platform Capabilities
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Premium MLM Operations
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Our revPTC platform delivers robust functionalities designed to orchestrate
                        massive marketing networks safely and continuously.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group flex gap-6 bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition duration-300"
                            >

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-600 transition">
                                    <Icon size={26} className="text-blue-600 group-hover:text-white" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default RevPTCFeatures;
