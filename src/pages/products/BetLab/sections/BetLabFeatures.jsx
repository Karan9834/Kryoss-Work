import React from "react";
import {
    Activity,
    CreditCard,
    Shield,
    Globe,
    Zap,
    TrendingUp
} from "lucide-react";

const features = [
    {
        icon: Activity,
        title: "Live In-Play Betting",
        desc: "Enable ultra-fast live betting with odds that dynamically shift depending on real-time field action."
    },
    {
        icon: Globe,
        title: "Global Sports Markets",
        desc: "Provide comprehensive selections across Soccer, Basketball, Tennis, Cricket, and thousands more."
    },
    {
        icon: CreditCard,
        title: "Crypto & Fiat Payments",
        desc: "Automated deposit and withdrawal processing supporting major fiat currencies alongside popular cryptocurrencies."
    },
    {
        icon: Shield,
        title: "Robust Security System",
        desc: "Deploy automated risk limits, anti-fraud algorithms, and KYC integrations directly onto your operations."
    },
    {
        icon: TrendingUp,
        title: "Agent & Affiliate Scaling",
        desc: "Distribute workload utilizing an advanced multi-tiered agent commission management backoffice."
    },
    {
        icon: Zap,
        title: "Instant Setups",
        desc: "Generate stunning frontend sportsbook interfaces with responsive designs that run blazingly fast everywhere."
    }
];

const BetLabFeatures = () => {
    return (
        <section className="py-24 bg-[#f0fdfa]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm">
                        iGaming Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Powerful Sports Betting Infrastructure
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Our BetLab platform provides a collection of powerful tools designed
                        to run fully functional, highly profitable betting exchanges 
                        and sportsbooks instantly.
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

export default BetLabFeatures;
