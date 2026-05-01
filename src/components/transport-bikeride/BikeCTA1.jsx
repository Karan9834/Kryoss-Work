import React from 'react';
import bikecta from "../../assets/transport-bikeride-img/cta1.webp"

const BikeCTA1 = () => {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white font-['IBM_Plex_Sans']">
            <div className="max-w-7xl mx-auto lg:pt-24 pt-12">
                <div className="relative rounded-[40px] bg-[#8B1A00] min-h-[480px] lg:h-[520px] flex flex-col lg:flex-row shadow-2xl">

                    {/* Background arches (Contained) */}
                    <div className="absolute inset-0 overflow-hidden rounded-[40px] pointer-events-none z-0">
                        <div className="absolute right-0 top-0 w-full lg:w-[45%] h-full bg-[#A34220] flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <div className="absolute bottom-[-100px] right-[20%] w-[500px] h-[500px] border-[50px] border-[#B75A38] rounded-full opacity-40"></div>
                                <div className="absolute bottom-[-50px] right-[20%] w-[400px] h-[400px] border-[40px] border-[#B75A38] rounded-full opacity-40"></div>
                                <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] border-[30px] border-[#B75A38] rounded-full opacity-40"></div>
                            </div>
                        </div>
                    </div>

                    {/* Left Content Area */}
                    <div className="w-full lg:w-[55%] p-10 lg:p-20 lg:pl-24 flex flex-col justify-center relative z-20 text-white">
                        <h2 className="text-[34px] md:text-[50px] font-bold leading-tight mb-6">
                            Ready to Launch Your <br className="hidden md:block" /> Bike Taxi App?
                        </h2>
                        <p className="text-[16px] md:text-[18px] leading-relaxed opacity-90 mb-8 max-w-xl">
                            Get your On-Demand Bike Taxi App up and running with our quick, reliable,
                            and scalable solution. Start your journey in the bike taxi business today!
                        </p>
                        <div className="mt-4">
                            <button className="border-2 border-white hover:bg-white hover:text-[#8B1A00] text-white px-10 py-4 rounded-full text-[16px] font-bold transition-all duration-300">
                                Get a Free Demo
                            </button>
                        </div>
                    </div>

                    {/* Pop-out Image Area */}
                    <div className="w-full lg:w-[45%] relative lg:static min-h-[400px] lg:min-h-full">
                        <div className="absolute bottom-0 right-0 lg:right-0 w-full lg:w-[50%] h-[110%] lg:h-[120%] flex items-end justify-center lg:justify-end z-30 overflow-visible pointer-events-none">
                            <img
                                src={bikecta}
                                alt="Ready to launch bike taxi app"
                                className="w-full h-full object-contain object-bottom scale-100 origin-bottom"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BikeCTA1;
