import React from "react";

const SmartNftAboutUs = () => {
    return (
        <section className="py-24 bg-[#f4f3ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        {/* Replace with your downloaded image */}
                        <img
                            src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80"
                            alt="Smart NFT Platform"
                            className="w-full max-w-sm rounded-3xl shadow-xl object-cover"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-purple-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About NFT Marketplace
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is a <span className="text-purple-600">Smart NFT Marketplace?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            Smart NFT is a modern platform that uses advanced
                            blockchain technologies to automatically handle digital
                            asset trading. It helps businesses, gamers, and creators generate
                            collections, mints, and transactions
                            in seconds.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Instead of spending months coding and auditing, users can simply
                            install the plugin or clone the core and let Smart NFT handle the heavy lifting
                            instantly. The system deploys smart contracts and indexes data to
                            produce natural and engaging NFT interactions.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our Smart NFT architecture supports multiple use cases including
                            digital art sales, in-game assets, tokenized communities,
                            and decentralized finance protocols.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you're a crypto creator, digital marketer, startup, or
                            enterprise business, this platform helps you scale your web3 presence
                            production while saving time and resources.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SmartNftAboutUs;
