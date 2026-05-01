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
                            Launch Your Uber for <span className="text-blue-500">Tow Trucks App</span> in <span className="text-blue-500">just 5 Days</span>
                        </h2>

                        {/* Text Content */}
                        <div className="space-y-6 text-white/80 text-[16px] leading-[1.6]">
                            <p>
                                Get your Uber for Tow Trucks app live and running in just 5 working days with our fast and easy-to-deploy solution. Unlike traditional app development, which can take weeks or months, our pre-built platform ensures rapid deployment, so you can start providing on-demand towing services almost immediately.
                            </p>

                            <p>
                                Our Uber for Tow Trucks app offers a fully functional, scalable solution that connects customers with tow truck drivers quickly and efficiently. It includes all the essential features, such as real-time tracking, service requests, payment integration, and feedback options, all designed to provide a smooth and seamless experience for both users and drivers.
                            </p>

                            <p>
                                Forget about lengthy development processes and focus on growing your business with an app that’s ready to launch and scale with your needs.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalFootprints;
