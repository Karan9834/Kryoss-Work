import React from "react";
import about from "../../../../assets/Fantasy sports/Betlab/2....jpg"

const BetLabAboutUs = () => {
    return (
        <section className="py-24 bg-[#f4fffc]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start w-full max-w-[526px] aspect-[526/501]">
                        <img
                            src={about}
                            alt="BetLab Platform"
                            className="w-full h-full rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-emerald-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About BetLab
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is the <span className="text-emerald-600">BetLab Platform?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            BetLab is a professional, advanced sports betting engine designed
                            specifically to handle high-frequency betting markets confidently.
                            It helps business owners and bookmakers launch full-scale sportsbooks
                            in seconds.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Instead of spending months coding the core odds logic and user wallets,
                            BetLab provides everything right out of the box. Complete with
                            real-time score updates, automated resulting, and seamless
                            affiliate management systems.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our architecture supports multiple sports, leagues, custom bets,
                            live in-play betting, and integrates with the most secure payment
                            gateways available today.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you're starting your first iGaming portal or moving an
                            established local franchise online, BetLab instantly scales up your
                            digital presence saving precious time and money.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default BetLabAboutUs;
