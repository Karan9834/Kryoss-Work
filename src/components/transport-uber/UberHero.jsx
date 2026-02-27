import React from 'react';
import { ArrowRight } from 'lucide-react';
import uberhero from "../../assets/transport-uber-img/uberhero.webp"
const UberHero = () => {
    return (
        <section
            id="hero-section"
            className="w-full bg-[rgb(245,245,245)] pt-[30px] pb-[30px]"
            style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        >
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                    {/* LEFT CONTENT */}
                    <div className="pr-0 lg:pr-16">

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#2f2f2f] rounded-md flex items-center justify-center text-white font-bold">
                                {/* LOGO */}
                            </div>
                            <span className="text-lg font-medium tracking-wide">
                                FOX-TAXI
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] font-semibold text-[#303030] mb-5">
                            Launch an AI-Powered Uber Clone in Five Days
                        </h1>

                        {/* Description */}
                        <p className="text-[#6b6b6b] text-[16px] leading-[26px] mb-6 max-w-[520px]">
                            No long development cycles and technical uncertainty. We offer a
                            white-label Uber clone solution that helps businesses like yours
                            go live quickly with a complete ecosystem.
                        </p>

                        {/* Points */}
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3 text-[15px] text-[#555]">
                                <span>✔</span>
                                <span>Full source code ownership - no vendor lock-in</span>
                            </li>
                            <li className="flex gap-3 text-[15px] text-[#555]">
                                <span>✔</span>
                                <span>AI matching connects nearest drivers with riders quickly</span>
                            </li>
                            <li className="flex gap-3 text-[15px] text-[#555]">
                                <span>✔</span>
                                <span>Real-time analytics for complete operational control</span>
                            </li>
                        </ul>

                        {/* CTA */}
                        <a
                            href="#"
                            className="inline-flex items-center gap-4 bg-[#2f2f2f] text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-black transition"
                        >
                            Get Live Demo Now!
                            <span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                                →
                            </span>
                        </a>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative">

                            {/* IMAGE PLACEHOLDER */}
                            <div className="w-full h-full  rounded-xl">
                                <img src={uberhero}
                                    alt="Uber Clone App"
                                    className='w-full h-full object-cover' />
                                {/* HERO IMAGE */}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UberHero;