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
        title: "Smart Contract Minting",
        desc: "Create and deploy standard ERC-721 and ERC-1155 contracts instantly using our integrated system."
    },
    {
        icon: Search,
        title: "Multi-Chain Explorer",
        desc: "Connect to Ethereum, Polygon, BSC and fetch on-chain data optimized for speed and reliability."
    },
    {
        icon: MessageSquare,
        title: "Wallet Connectors",
        desc: "Support for MetaMask, WalletConnect, and Coinbase Wallet with seamless authorization."
    },
    {
        icon: PenTool,
        title: "Customizable Storefront",
        desc: "Automatically create compelling visual storefronts for your digital creations."
    },
    {
        icon: RefreshCw,
        title: "Royalty Engine",
        desc: "Automated distribution of royalties on secondary sales across the entire marketplace ecosystem."
    },
    {
        icon: Sparkles,
        title: "Instant Verification",
        desc: "Verify collections, fetch rarity scores, and index blockchain metadata securely."
    }
];

const SmartNftFeatures = () => {
    return (
        <section className="py-24 bg-[#f6f4ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                        NFT Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Powerful NFT Marketplace Generation Tools
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Our Web3 platform provides a collection of powerful tools designed
                        to generate fully functional NFT exchanges and 
                        marketplaces instantly.
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

export default SmartNftFeatures;
