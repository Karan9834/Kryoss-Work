import React from "react";
import Towtruckcta2 from "../../assets/homeservice-towtruck-img/TowCTA2.webp";
const CTA2 = () => {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto relative">

                {/* Main Card */}
                <div className="relative bg-gradient-to-r from-[#5a1f06] to-[#7b320c] rounded-[60px] px-8 md:px-16 py-16 overflow-visible">

                    {/* inner border */}
                    <div className="absolute inset-4 rounded-[50px] border border-orange-200/40 pointer-events-none"></div>

                    <div className="relative grid md:grid-cols-2 items-center gap-10">

                        {/* Left Content */}
                        <div className="text-white max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                                Start Your Uber for Tow <br />
                                Trucks App Journey <br />
                                Now!
                            </h2>

                            <p className="text-lg text-gray-200 mb-8">
                                Elevate your towing services with a customized Uber for
                                tow trucks app. Fast, reliable, and tailored to your
                                business needs.
                            </p>

                            <button className="border border-white text-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
                                Contact Us Today!
                            </button>
                        </div>

                        {/* Image */}
                        <div className="relative flex justify-center">
                            <img
                                src={Towtruckcta2}
                                alt="worker"
                                className="relative  md:-top-0 scale-120 md:right-0 w-[320px] md:w-[420px]"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA2;