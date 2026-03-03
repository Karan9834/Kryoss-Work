import React from "react";
import digitalfootprint from "../../assets/transport-bikeride-img/digitalfootprint.webp";



const BikeDigitalFootprints = () => {
    return (
        <section className="bg-[#053c2e]">
            {/* Rounded top */}
            <div className="rounded-t-[60px] overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">

                    {/* LEFT : IMAGE (TOP-LEFT START) */}
                    <div className="relative pt-4  lg:pt-6 px-0 lg:px-0">
                        {/* 👉 ONLY ONE IMAGE */}
                        <div className="w-[90%] h-auto lg:h-[560px]">
                            <div className="w-full h-full  rounded-3xl overflow-hidden ">

                                <img
                                    src={digitalfootprint}
                                    alt="Digital Footprints"
                                    className="w-full max-w-[550px] rounded-xl object-cover "
                                />

                            </div>
                        </div>
                    </div>

                    {/* RIGHT : CONTENT */}
                    <div className="flex flex-col justify-center px-6 lg:px-16 pt-4 lg:pt-0 pb-20 lg:py-20 text-white">

                        {/* Chip */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 text-sm mb-6 w-fit">
                            <span className="w-2 h-2 bg-white rounded-full" />
                            Get Your Digital Footprints
                        </span>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Launch Your{" "}
                            <span className="text-[#2af0b4]">Bike Taxi App</span>{" "}
                            in <span className="text-[#c7f000]">Days</span>, (Not Weeks!)
                        </h2>

                        {/* Text */}
                        <p className="text-white/80 mb-5">
                            Get your Bike Ride Booking App up and running within days with our
                            ready-to-use solution. Unlike traditional app development, which
                            takes months, our pre-built platform ensures a fast and seamless
                            launch.
                        </p>

                        <p className="text-white/80 mb-5">
                            Skip long development cycles and technical challenges with our
                            turnkey Bike Taxi App for Startups. Our platform is designed for
                            instant deployment.
                        </p>

                        <p className="text-white/80">
                            Focus on scaling your business while we handle the technology.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BikeDigitalFootprints;