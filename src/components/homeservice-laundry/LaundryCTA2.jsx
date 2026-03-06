import React from "react";
import Laundrycta2 from "../../assets/homeservice-laundry-img/Laundrycta2.webp";

const LaundryCTA2 = () => {
    return (
        <section className="py-18 md:py-20 bg-white overflow-visible">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-gradient-to-r from-[#00b4ff] to-[#0461f0] rounded-[40px] md:rounded-[60px] p-10 md:p-20 shadow-2xl">
                    <div className="grid lg:grid-cols-2 items-center">
                        {/* LEFT CONTENT */}
                        <div className="text-white z-10 relative">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                                Build Your On-Demand <br className="hidden md:block" /> Dry Cleaning App
                            </h2>

                            <p className="text-lg text-white/90 max-w-md mb-10 leading-relaxed font-medium">
                                Simplify bookings, pickups, and payments with a custom app for
                                your dry cleaning business.
                            </p>

                            <button className="border-2 border-white px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
                                Get a Free Demo!
                            </button>
                        </div>

                        {/* RIGHT IMAGE - Positioned to overflow top and bottom */}
                        <div className="mt-16 lg:mt-0 relative lg:static flex justify-center lg:justify-end">
                            <img
                                src={Laundrycta2}
                                alt="Laundry App Solution"
                                className="w-full max-w-[450px] lg:max-w-none lg:w-[650px] h-auto object-contain 
                                lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-10 
                                transform lg:scale-110 drop-shadow-[0_25px_25px_rgba(0,0,0,0.30)] z-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaundryCTA2;
