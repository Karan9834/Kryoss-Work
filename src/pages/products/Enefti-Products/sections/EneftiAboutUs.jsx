import React from "react";

const EneftiAboutUs = () => {
    return (
        <section className="py-24 bg-[#f4f3ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start w-full max-w-[526px] aspect-[526/501]">
                        <img
                            src="/Products/Enefti2nd.png"
                            alt="Enefti Gaming Platform"
                            className="w-full h-full rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-purple-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About GameFi Platform
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is <span className="text-purple-600">Enefti?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            Enefti is a smart gaming platform that uses advanced
                            blockchain technologies to automatically bridge gaming communities
                            with decentralized finance. It helps game developers, players, and studios generate
                            tokenized ecosystems, leaderboards, and native web3 assets
                            in seconds.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Instead of spending months building infrastructure, a decentralized server can simply
                            initialize Enefti core components and let it process gaming NFTs
                            instantly. The system analyzes virtual asset histories and metadata to
                            produce genuine secondary markets.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our Web3 platform supports multiple gaming use cases including
                            breeding mechanics, staking logic, tournament routing,
                            and decentralized autonomous groups (guilds).
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you're an indie studio, metaverse builder, eSports brand, or
                            play-to-earn startup, this platform helps you scale your user base
                            production while saving time and resources.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default EneftiAboutUs;
