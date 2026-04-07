import React from "react";
import Towtruckcta3 from "../../assets/homeservice-towtruck-img/TowCTA3.webp";
const CTA3 = () => {
    return (
        <section className="py-20 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative rounded-[40px] bg-gradient-to-r from-[#5a0031] to-[#7a0043] px-10 md:px-16 py-16 flex flex-col md:flex-row items-center overflow-visible">

                    {/* LEFT CONTENT */}
                    <div className="md:w-1/2 text-white z-10">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                            Revolutionize Roadside Assistance with Our Tow Truck App
                        </h2>

                        <p className="text-white/90 mb-8 max-w-lg">
                            Launch your Uber for Tow Trucks app with Kryoss Work!
                            Offer seamless, on-demand roadside assistance with a fully
                            customizable and secure solution designed for efficient business growth.
                        </p>

                        <button className="border border-white rounded-full px-6 py-3 hover:bg-white hover:text-[#5a0031] transition">
                            Get Started Today!
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">

                        <img
                            src={Towtruckcta3}
                            alt="Mechanic"
                            className="w-72 md:w-[420px]  scale-120"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA3;