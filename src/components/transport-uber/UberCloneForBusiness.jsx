import React from 'react';
import uberclonebusiness from '@/assets/transport-uber-img/uberclonebusiness.webp'
const UberCloneForBusiness = () => {
    return (
        <section
            className="w-full bg-white py-20"
            style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        >
            <div className="max-w-[1400px] mx-auto px-4">

                {/* TOP TAG */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-600">
                        Uber Clone for Business
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[38px] leading-[42px] md:leading-[50px] font-semibold text-[#2f2f2f] max-w-5xl mx-auto mb-16">
                    AI-Driven Uber Clone a Smart Move for Modern Mobility Businesses?
                </h2>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT IMAGE AREA */}
                    <div className="relative flex justify-center">
                        <div className="relative w-[320px] md:w-[380px]">

                            {/* PHONE IMAGE  */}
                            <div className="w-full h-full rounded-[32px]">
                                <img src={uberclonebusiness}
                                    alt="Business"
                                    className='w-full h-full object-cover' />

                            </div>



                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* PARAGRAPHS */}
                        <p className="text-[16px] leading-[26px] text-[#5f5f5f] mb-5">
                            Building a ride-hailing app from scratch is costly and time-consuming.
                            An AI-powered Uber clone removes that burden completely. Just customization
                            based on your current requirement, and you're all set to go live.
                        </p>

                        <p className="text-[16px] leading-[26px] text-[#5f5f5f] mb-8">
                            As a trusted taxi app development company, we create an app that comes with
                            all functionalities and modules similar to Uber. Tested for real-world
                            operations, our ready-to-use platform helps you gain more customers and profits.
                        </p>

                        {/* SUB HEADING */}
                        <h3 className="text-[20px] font-semibold text-[#2f2f2f] mb-6">
                            What Makes the Uber Clone Script a Perfect Fit for Startups like You?
                        </h3>

                        {/* BULLET POINTS */}
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>No more core tech development delays - just faster launch without any complexities.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>AI-powered dispatch reduces operational workload from the very first day you start your business.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>A white-label solution gives you the full flexibility you need to operate successfully.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>Scalable architecture of the Uber clone helps you launch in multiple cities with ease.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>Pre-integrated tools simplify everything for a startup like yours.</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UberCloneForBusiness;