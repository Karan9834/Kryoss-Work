import React from "react";
import Towtruckcta1 from "../../assets/homeservice-towtruck-img/TowCTA1.webp";
const CTA1 = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative bg-[#8f2319] rounded-[40px] md:rounded-[80px] px-8 md:px-16 overflow-hidden lg:overflow-visible min-h-[450px] flex items-center">

                    <div className="grid lg:grid-cols-2 items-center gap-10 w-full h-full">

                        {/* LEFT CONTENT */}
                        <div className="text-white max-w-xl py-12 lg:py-20 z-10 relative">

                            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
                                Ready to Launch Your Uber
                                <br />
                                for Tow Trucks App?
                            </h2>

                            <p className="text-gray-200 mb-8 text-lg">
                                Launch your own Uber for tow trucks app with Kryoss Work.
                                Get a fast, reliable solution tailored to your business.
                                Contact us to get started today!
                            </p>

                            <button className="border-2 border-white rounded-full px-8 py-3.5 hover:bg-white hover:text-[#8f2319] transition-all font-semibold">
                                Launch Your App Today!
                            </button>

                        </div>

                        {/* RIGHT CONTENT / IMAGE */}
                        <div className="relative h-full flex items-end justify-center lg:justify-end">
                            <img
                                src={Towtruckcta1}
                                alt="Tow Truck Cta"
                                className="
                                    relative lg:absolute 
                                    lg:right-0 
                                    bottom-0 
                                    w-full max-w-[450px] 
                                    lg:min-w-[550px]
                                    lg:w-[550px]
                                    lg:translate-x-12
                                 
                                    z-0
                                    object-contain
                                  
                                "
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA1;