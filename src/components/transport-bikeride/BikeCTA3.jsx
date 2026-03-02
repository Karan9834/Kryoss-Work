import React from "react";
import cta3 from "../../assets/transport-bikeride-img/cta3.webp";



const BikeCTA3 = () => {
    return (
        <section className="relative w-full overflow-hidden py-10 lg:py-14">
            {/* Gradient Background */}
            <div className="relative bg-gradient-to-r from-[#9b0f2f] via-[#6a1b6b] to-[#1a2c8f]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-24 lg:pt-20 lg:pb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-20 lg:gap-12">

                        {/* LEFT CONTENT */}
                        <div className="text-white z-10 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Build Your Bike Taxi App <br className="hidden lg:block" />
                                <span className="block mt-2 font-black">Today!</span>
                            </h2>

                            <p className="mt-6 text-base md:text-lg max-w-xl mx-auto lg:mx-0 text-white/90 leading-relaxed">
                                Kickstart your Bike Taxi Booking App Development with our
                                ready-made solution. Get a feature-packed, scalable, and
                                user-friendly app to grow your business.
                            </p>

                            <button className="mt-8 sm:mt-10 inline-flex items-center gap-2 px-10 py-3.5 rounded-full border-2 border-white/40 text-white font-bold hover:bg-white hover:text-[#6a1b6b] transition shadow-xl">
                                Get Started Now
                            </button>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex justify-center lg:justify-end z-10">
                            <div
                                className="
      relative
      w-[280px] sm:w-[320px] md:w-[380px] lg:w-[450px]
      -mt-10 lg:-mt-32
      -mb-24 lg:-mb-40
    "
                            >
                                <img
                                    src={cta3}
                                    alt="Bike Taxi App Preview"
                                    className="w-full h-auto object-contain scale-125 lg:scale-150 drop-shadow-2xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BikeCTA3;