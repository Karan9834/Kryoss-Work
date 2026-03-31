import React from "react";

const BetYourDuckAboutUs = () => {
    return (
        <section className="py-24 bg-[#f4fffc]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start w-full max-w-[526px] aspect-[526/501]">
                        <img
                            src="/Products/Duck2.png"
                            alt="BetYourDuck App"
                            className="w-full h-full rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-emerald-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About BetYourDuck
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            How Exciting is <span className="text-emerald-600">BetYourDuck?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            BetYourDuck is a modern, highly interactive Peer-to-Peer betting exchange.
                            Rather than betting against a central bookmaker with bad odds, players set
                            their own stakes and match directly against opposing predictions from other users.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Instead of rigid platforms, users on BetYourDuck experience total liquid
                            control, trading live positions globally seamlessly. The engine calculates,
                            matches, and secures the escrow balances in real-time.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            A highly optimized and gamified user experience encourages social sharing
                            and organic growth among competitors pushing the thrill of pure
                            exchange-based trading dynamics.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Perfect for modern gaming entrepreneurs who want to introduce true Web2/Web3
                            level liquidity pools alongside traditional sports match environments securely
                            and reliably.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BetYourDuckAboutUs;
