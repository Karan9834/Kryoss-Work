import React from "react";
import {
    FileText,
    Search,
    PenTool,
    RefreshCw,
    MessageSquare,
    Sparkles
} from "lucide-react";

const features = [
    {
        icon: FileText,
        title: "Asset Minting & Imports",
        desc: "Create new character classes, weapons, and skins instantly syncing directly with IPFS hosting."
    },
    {
        icon: Search,
        title: "Dynamic Leaderboards",
        desc: "Generate active player rankings integrated directly with smart contract performance data tracking."
    },
    {
        icon: MessageSquare,
        title: "Guild Governance",
        desc: "Generate decentralized autonomous communities with voting mechanics and treasury aggregation."
    },
    {
        icon: PenTool,
        title: "Breeding Contracts",
        desc: "Automatically combine in-game NFTs to generate rare, algorithmic off-spring collections instantly."
    },
    {
        icon: RefreshCw,
        title: "Anti-Cheat Ledgers",
        desc: "Ensure transparent immutability, eliminating the potential for duplicating in-game properties."
    },
    {
        icon: Sparkles,
        title: "Interactive Experiences",
        desc: "Generate stunning frontend elements rendering gaming properties directly on responsive interfaces."
    }
];

const EneftiFeatures = () => {
    return (
        <section className="py-24 bg-[#f6f4ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                        GameFi Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Powerful NFT Gaming Mechanics
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Our Web3 platform provides a collection of interactive blockchain tools designed
                        to generate robust gaming economics and 
                        vibrant competitive communities instantly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group flex gap-6 bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-xl transition duration-300"
                            >

                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-600 transition">
                                    <Icon size={26} className="text-purple-600 group-hover:text-white" />
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

export default EneftiFeatures;
