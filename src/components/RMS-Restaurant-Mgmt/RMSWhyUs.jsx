import React from 'react';

const RMSWhyUs = () => {
    const data = [
        {
            num: "01",
            label: "Table Turns",
            desc: "Accelerate your dining cycle with rapid order-taking, KDS routing, and tableside checkout capabilities."
        },
        {
            num: "02",
            label: "Food Waste",
            desc: "Predictive inventory and automated recipe costing ensure you only buy what you absolutely need."
        },
        {
            num: "03",
            label: "Integrations built in",
            desc: "Connect seamlessly to DoorDash, UberEats, Deliveroo and third-party accounting applications natively."
        },
        {
            num: "04",
            label: "On Delivery Margins",
            desc: "Avoid double-entry mistakes and aggregate your digital storefronts directly into your core POS system."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-rose-950">
            {/* Darker background with rich colorful gradients in RMS design language */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600 rounded-full blur-[100px]"></div>
                <div className="absolute top-40 right-10 w-80 h-80 bg-amber-600 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-20 left-1/2 w-[500px] h-[500px] bg-rose-600 rounded-full blur-[120px] -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <span className="text-white text-[12px] font-medium tracking-[0.05em] uppercase mb-2 inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                        Why Choose RMS Platform?
                    </span>

                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white mb-6">
                        Maximize Margins. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-amber-200 to-yellow-300">
                            Minimize Chaos.
                        </span>
                    </h2>

                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-rose-100 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        Stop losing money to unmonitored inventory and inefficient staffing. Our system is built by hospitality veterans who know that every second and every ingredient counts towards your bottom line.
                    </p>
                </div>

                {/* Unique Format: Giant Number Overlays on glassy panoramic cards */}
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors duration-500 backdrop-blur-md"
                        >
                            {/* Huge decorative number */}
                            <div className="absolute -right-4 -top-8 text-[120px] md:text-[150px] font-bold text-rose-500/10 group-hover:text-amber-500/20 transition-colors duration-700 pointer-events-none select-none">
                                {item.num}
                            </div>

                            <div className="relative z-10 space-y-4">
                                {/* Stat Value - Updated: text-[28px] md:text-[32px] font-bold */}
                                <h3 className="text-[28px] md:text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-red-400">
                                    {item.stat}
                                </h3>
                                {/* Label - Updated: text-[20px] md:text-[22px] font-bold */}
                                <h4 className="text-[20px] md:text-[22px] font-bold text-white tracking-wide">
                                    {item.label}
                                </h4>
                                {/* Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                                <p className="text-rose-100/80 text-[14px] md:text-[15px] font-normal leading-[1.6] max-w-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RMSWhyUs;