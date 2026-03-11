import React from 'react';
import Multiwhatweprovideimg from "../../../assets/delivery-multiservice-img/Multiwhatweprovide.webp";
const MultiWhatWeProvide = () => {

    const providedItems = [
        "Customer Android and iOS App",
        "Store Owner Android and iOS App",
        "Delivery Person Android and iOS App",
        "Admin Panel (Backend)",
        "Store Owner Panel",
        "Static Landing Page",
        "Delivery Person Web Panel",
        "100% Source Code",
        "1 Year Free Support",
        "NDA Signed"
    ];

    return (
        <section className="bg-[#051114] py-24 overflow-hidden text-white relative">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT CONTENT */}
                <div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-1.5 text-sm mb-6">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        What We Provide
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-semibold leading-snug mb-6">
                        <span className="text-cyan-400">Get a Comprehensive On-</span>
                        <br />
                        <span className="text-green-400">Demand Delivery System</span>
                        <br />
                        <span className="text-white">With Various Modules & Full Support</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-300 text-lg mb-10 max-w-xl">
                        Our delivery anything app includes apps, web panels, and backend support to ensure seamless operations and growth for your delivery business.
                    </p>

                    {/* Items Grid */}
                    <div className="flex flex-wrap gap-4 max-w-xl">
                        {providedItems.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-600 rounded-full px-5 py-2.5 text-gray-200 text-sm hover:border-cyan-400 transition cursor-default bg-white/5 backdrop-blur-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                </div>


                {/* RIGHT IMAGE */}
                <div className="relative">
                    <div className="w-full p-8 flex items-center justify-center overflow-hidden  relative">

                        <img
                            src={Multiwhatweprovideimg}
                            alt="feature image"
                            className="w-full h-full object-cover rounded-[20px]"
                        />

                    </div>
                </div>

            </div>

        </section>
    );
};

export default MultiWhatWeProvide;
