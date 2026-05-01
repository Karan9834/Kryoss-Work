import React from 'react'
import readycta from "../../assets/transport-uber-img/readycta.webp"
const ReadyToLaunch = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="  relative
                                  overflow-hidden
                                  w-full
                                  rounded-[40px] md:rounded-[60px] lg:rounded-l-[180px] lg:rounded-r-none
                                  bg-gradient-to-r from-[#5b0a05] to-[#7a0d06]">

                    {/* CONTENT */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px] px-10 lg:px-20">

                        {/* LEFT TEXT */}
                        <div className="text-white max-w-xl py-16">
                            <h2 className="text-[36px] md:text-[44px] leading-[48px] md:leading-[56px] font-semibold mb-6">
                                Ready to Deploy Your Intelligent Transportation Network?
                            </h2>

                            <p className="text-[15.5px] leading-[26px] text-[#f1dada] mb-8">
                                Interested in acquiring a robust, AI-enhanced mobility framework? We provide
                                a comprehensive, white-label solution designed to meet the unique operational
                                demands of modern transportation firms like yours.
                            </p>

                            <button className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-[#7a0d06] transition">
                                Request a Product Tour
                            </button>
                        </div>

                        {/* RIGHT IMAGES */}
                        <div className="overflow-hidden rounded-[180px]">
                            <img
                                src={readycta}
                                alt="Ready to Launch AI Powered Uber Clone"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* SOFT EDGE FADE */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default ReadyToLaunch;