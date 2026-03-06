import React from "react";
import digital from "../../assets/homeservice-tutor-img/digital.webp"
const DigitalFootprints = () => {
    return (
        <section className="bg-[#1a1110]">
            {/* Rounded top */}
            <div className="rounded-t-[60px] overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">

                    {/* LEFT : IMAGE */}
                    <div className="relative pt-0 lg:pt-0 px-6 lg:px-8 flex items-center justify-center">

                        {/* PLACEHOLDER FOR IMAGE (Man with laptop) */}
                        <img src={digital}
                            alt="digital footprints"
                            className="w-full max-w-[550px] rounded-xl object-cover" />

                    </div>

                    {/* RIGHT : CONTENT */}
                    <div className="flex flex-col justify-center  px-6 lg:px-16 pt-6 lg:pt-10 pb-20 lg:py-20 text-white">

                        {/* Chip */}
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 text-sm w-fit">
                                <span className="w-2 h-2 bg-white rounded-full" />
                                Get Your Digital Footprints
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Launch Your{" "}
                            <span className="text-teal-400"> Ondemand Laundry App</span>{" "}
                            in just 5 days
                        </h2>

                        {/* Text Content */}
                        <div className="space-y-6 text-white/80 text-[16px] leading-[1.6]">
                            <p>
                                With our On-Demand Laundry App Development solution, get your app up and running in just 5 working days. Skip the lengthy development processes and launch a fully functional laundry platform without the usual delays.
                            </p>

                            <p>
                                As a leading Laundry App Development company, we offer a pre-built solution that connects customers with trusted laundry providers, featuring key features like booking management, real-time order tracking, secure payments, and more—ready from day one.
                            </p>

                            <p>
                                Our scalable, robust platform grows with your business, so you can focus on providing excellent customer service, not waiting for development to finish.
                            </p>
                            <p>
                                Launch quickly, scale effortlessly, and offer a seamless laundry experience with our expert laundry app development services.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalFootprints;
