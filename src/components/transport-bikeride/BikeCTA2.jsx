import { Link } from 'react-router-dom';
import React from 'react';
import cta2 from "../../assets/transport-bikeride-img/cta2.webp"
const BikeCTA2 = () => {
    return (
        <section className="relative w-full font-['IBM_Plex_Sans'] overflow-visible">
            {/* Dark Blue Background Container - Reduced top offset even more */}
            <div className="absolute inset-x-0 bottom-0 top-[60px] md:top-[100px] bg-[#16165e]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex flex-col lg:flex-row items-center">
                {/* Left Content - Reduced padding to decrease height */}
                <div className="w-full lg:w-1/2 pt-28 pb-10 lg:pt-36 lg:pb-24 text-left z-10">
                    <h2 className="text-[32px] md:text-[48px] font-black text-white leading-tight mb-6">
                        Start Your Bike Taxi Business Today!
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl">
                        Launch your On-Demand Bike Taxi App with our ready-to-use solution.
                        Get a feature-rich app and start serving customers quickly!
                    </p>
                    <Link to="/company/contact" className="bg-transparent hover:bg-white hover:text-[#16165e] text-white px-10 py-3.5 rounded-full font-bold text-lg border-2 border-white/40 transition-all shadow-xl">
                        Request a Consultation
                    </Link>
                </div>

                {/* Right Image Space (One single image pinned to bottom) */}
                <div className="w-full lg:w-[45%] relative lg:static min-h-[400px] lg:min-h-full">
                    <div className="absolute bottom-0 right-0 lg:right-0 w-full lg:w-[50%] h-[110%] lg:h-[120%] flex items-end justify-center lg:justify-end z-30 overflow-visible pointer-events-none">
                        <img
                            src={cta2}
                            alt="Bike cta 2"
                            className="w-full h-full object-contain object-bottom scale-100 origin-bottom"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BikeCTA2;
