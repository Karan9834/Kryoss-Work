import React from 'react';
import uberclonebusiness from '../../assets/Global taxi booking app/2.png'
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
                        Enterprise Solutions
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[38px] leading-[42px] md:leading-[50px] font-semibold text-[#2f2f2f] max-w-5xl mx-auto mb-16">
                    Is an AI-Integrated Ride-Hailing Solution the Right Choice for Modern Transit Ventures?
                </h2>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT IMAGE AREA */}
                    <div className="relative flex justify-center">
                        <div className="relative w-[320px] md:w-[380px]">

                            {/* PHONE IMAGE  */}
                            <div className="w-full h-full rounded-[32px]">
                                <img src={uberclonebusiness}
                                    alt="Business"
                                    className='w-full h-[500px] rounded-3xl shadow-xl object-cover' />

                            </div>



                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* PARAGRAPHS */}
                        <p className="text-[16px] leading-[26px] text-[#5f5f5f] mb-5">
                            Developing a transportation application from zero is both expensive and labor-intensive.
                            An AI-enhanced digital framework eliminates these obstacles entirely. Simply tailor the
                            platform to your specific needs, and you are ready for a rapid market entry.
                        </p>

                        <p className="text-[16px] leading-[26px] text-[#5f5f5f] mb-8">
                            As a premier mobility engineering partner, we deliver a platform equipped with
                            comprehensive modules and functionality inspired by industry leaders. Extensively
                            validated for live deployment, our optimized solution helps you scale your user base and profitability.
                        </p>

                        {/* SUB HEADING */}
                        <h3 className="text-[20px] font-semibold text-[#2f2f2f] mb-6">
                            What Makes This White-Label Script the Ideal Choice for Emerging Startups?
                        </h3>

                        {/* BULLET POINTS */}
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>Eliminate core engineering delays—experience a faster launch with zero technical friction.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>Intelligent AI dispatching minimizes your operational load starting from your very first live trip.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>A fully branded white-label solution provides the absolute adaptability required for market dominance.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>The expandable framework allows you to penetrate multiple geographic regions with minimal effort.</span>
                            </li>
                            <li className="flex gap-3 text-[#4f4f4f] text-[15px]">
                                <span className="mt-1">✔</span>
                                <span>Ready-to-use integrations streamline complex tasks for early-stage transportation ventures.</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UberCloneForBusiness;