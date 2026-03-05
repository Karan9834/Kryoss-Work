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
                        <h2 className="text-4xl lg:text-[44px] font-bold leading-[1.2] mb-8">
                            Launch Your Uber for <span className="text-[#f5b301]">Tutor App</span> in <span className="text-[#f5b301]">Days</span> (Not Weeks)
                        </h2>

                        {/* Text Content */}
                        <div className="space-y-6 text-white/80 text-[16px] leading-[1.6]">
                            <p>
                                Your Uber for Tutor clone app can be live and operational in just days, not
                                weeks, with our fast and easy-to-deploy solution.
                            </p>

                            <p>
                                Unlike custom development projects that can take weeks or even months, our
                                ready-made platform accelerates your time-to-market, so you can start
                                offering tutoring services without delay.
                            </p>

                            <p>
                                With our turnkey solution, you bypass the lengthy development process,
                                getting a fully functional on-demand tutor app that connects students with
                                tutors instantly.
                            </p>

                            <p>
                                Our pre-developed Uber for Tutor clone app comes packed with all the
                                essential features needed to launch a modern, scalable tutoring service.
                            </p>

                            <p>
                                Say goodbye to long coding, debugging, and testing delays—this means you
                                can focus on running your business smoothly and efficiently right from the
                                start.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalFootprints;
