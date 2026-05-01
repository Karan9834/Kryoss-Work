import React from "react";
import {
    Activity,
    CreditCard,
    Shield,
    PieChart,
    Zap,
    Users
} from "lucide-react";

const features = [
    {
        icon: PieChart,
        title: "Dynamic Investment Plans",
        desc: "Easily design time-based, fixed, or varying-return financial models without any technical knowledge."
    },
    {
        icon: Users,
        title: "Multi-Tier Referrals",
        desc: "Drive massive organic user acquisition via deeply integrated, multi-level commission structures."
    },
    {
        icon: CreditCard,
        title: "20+ Global Gateways",
        desc: "Automated deposit and withdrawal processing supporting PayPal, Stripe, crypto networks, and direct bank transfers."
    },
    {
        icon: Shield,
        title: "Enterprise Grade Security",
        desc: "Deploy email verification, two-factor authentication (2FA), and secure password hashing automatically."
    },
    {
        icon: Activity,
        title: "Real-Time Yield Tracking",
        desc: "Empower users with visual charts and live ledgers mapping their compound growth instantly."
    },
    {
        icon: Zap,
        title: "Automated Resulting",
        desc: "Run cron routines completely hands-off ensuring all capital returns are credited down to the specific minute."
    }
];

const HyipInvestProFeatures = () => {
    return (
        <section className="py-24 bg-[#f4f7ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        Platform Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Premium Investor Architecture
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Our InvestPro platform provides an array of deeply intelligent
                        features guaranteeing stable, fluid, and transparent interactions.
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

export default HyipInvestProFeatures;
