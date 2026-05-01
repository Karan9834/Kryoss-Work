import React from "react";
import {
    Activity,
    CreditCard,
    Shield,
    Users,
    Zap,
    Repeat
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "P2P Betting Engine",
        desc: "Match users directly against each other removing the 'house edge' and passing better odds to the community."
    },
    {
        icon: Repeat,
        title: "Trading Liquidity",
        desc: "Users have full freedom to 'back' or 'lay' specific outcomes simultaneously, fostering deep market liquidity."
    },
    {
        icon: CreditCard,
        title: "Secure Escrow",
        desc: "Automated locking mechanism processes staked funds and disburses instantly to winners based on API results."
    },
    {
        icon: Shield,
        title: "Advanced Risk Controls",
        desc: "System-level safeguards to protect the platform's liquidity pools while ensuring fair play consistently."
    },
    {
        icon: Activity,
        title: "Real-Time WebSocket",
        desc: "Push instantaneous odds movements, chat interactions, and settlement statuses using premium sockets."
    },
    {
        icon: Zap,
        title: "High-Speed UI/UX",
        desc: "Gamified and heavily optimized frontend ensuring a pristine user flow without clunky reloads."
    }
];

const BetYourDuckFeatures = () => {
    return (
        <section className="py-24 bg-[#f0fdfa]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm">
                        Exchange Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Gamified Betting Experience
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        The BetYourDuck infrastructure boasts unparalleled peer-to-peer capabilities
                        guaranteeing users experience fun, liquid, and entirely automated
                        gaming loops instantly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group flex gap-6 bg-white p-8 rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition duration-300"
                            >

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-100 group-hover:bg-emerald-600 transition">
                                    <Icon size={26} className="text-emerald-600 group-hover:text-white" />
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

export default BetYourDuckFeatures;
