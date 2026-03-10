import React from "react";
import digital from "../../../assets/homeservice-tutor-img/digital.webp"
const DigitalFootprints = () => {
    return (
        <section className="bg-black">
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
                            <span className="text-cyan-500"> Ondemand Delivery App Fast & Start Delivering</span>{" "}

                        </h2>

                        {/* Text Content */}
                        <div className="space-y-6 text-white/80 text-[16px] leading-[1.6]">
                            <p>
                                By partnering with us you can get your on-demand delivery app live faster. We use read-made modules and built-in features, so you don’t have to wait months for development.
                            </p>

                            <p>
                                Whether you are a small business or a big company, our solution helps you launch quickly and start delivering right away.
                            </p>

                            <p>
                                Our on-demand delivery system is flexible and easy to customize for your needs. With a pre-set backend and smooth setup, you can save time, money, and effort.
                            </p>
                            <p>
                                Long, long wait times are over, just a fast and hassle-free way to get your delivery anything app functional so you can start serving customers soon.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalFootprints;
