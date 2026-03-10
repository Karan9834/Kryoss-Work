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
                            Get Your{" "}
                            <span className="text-sky-500"> Snow Plow Service App</span>{" "}
                            in just 5 days
                        </h2>

                        {/* Text Content */}
                        <div className="space-y-6 text-white/80 text-[16px] leading-[1.6]">
                            <p>
                                Launch your Uber Snow Plow Service App Solution in just 5 working days with our fast, easy-to-deploy platform. Unlike custom development that can take months, our pre-built solution allows you to offer on-demand snow removal services immediately.
                            </p>

                            <p>
                                With our Uber Snow Plow Service App, you can skip the lengthy development cycle and start providing snow removal services without delay. The app connects customers, snow plow operators, and admins seamlessly, ensuring smooth operations.
                            </p>

                            <p>
                                Our ready-made solution includes all the essential features for a modern, scalable snow plow service. From real-time service tracking and provider matching to secure payments and customer ratings, the app is designed for a hassle-free, efficient experience.
                            </p>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalFootprints;
