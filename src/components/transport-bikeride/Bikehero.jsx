import React from "react";
import bikeridehero from "../../assets/transport-bikeride-img/bikeride-hero.webp"
const HeroSection = () => {
    return (
        <section className="relative w-full bg-gradient-to-r from-[#0b2d1f] via-[#0f3a28] to-[#062016] overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[50%] text-white pb-12 lg:pb-20 lg:pr-10">
                    {/* Tagline */}
                   <div className="flex items-center gap-3 mb-6">

  <div className="w-12 h-12 rounded-xl 
      bg-gradient-to-br from-[#19f5a5] to-[#b6ff3b] 
      flex items-center justify-center text-black font-bold
      shadow-[0_0_18px_rgba(182,255,59,0.8)]">

      <span className="text-xl">
        🚲
      </span>

  </div>

  <span className="text-[16px] font-semibold tracking-wide uppercase">
    <span className="text-[#b6ff3b] drop-shadow-[0_0_8px_rgba(182,255,59,0.9)]">
      VYOM
    </span>
    <span className="text-white ml-1">
      BIKE
    </span>
  </span>

</div>

                    {/* Heading */}
                    <h1 className="font-bold leading-tight mb-6">
                        <span className="block text-[#19f5a5] text-[32px] md:text-[40px]">
                            Launch Your
                        </span>
                        <span className="block text-white text-[38px] md:text-[46px]">
                            On-Demand Bike Taxi App
                        </span>
                        <span className="block text-white text-[38px] md:text-[46px]">
                            with Ease
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-[16px] leading-[28px] max-w-xl mb-10">
                        Get a fully customized Bike Taxi App for startups and businesses.
                        Our Bike Taxi Booking App Development solution helps you offer fast,
                        reliable, and cost-effective bike ride services, ensuring a seamless
                        experience for both riders and drivers.
                    </p>

                    {/* CTA */}
                    <button className="group flex items-center gap-4 bg-gradient-to-r from-[#19f5a5] to-[#b6ff3b] text-black font-semibold px-7 py-3.5 rounded-full text-[16px] transition-all duration-300 hover:scale-105">
                        Let&apos;s Discuss
                        <span className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center transition group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>

                {/* RIGHT IMAGE PLACEHOLDER */}
                <div className="w-full lg:w-[48%] relative flex justify-end">
                    <div className="relative ">
                        <div className="w-full h-full rounded-xl">
                            <img src={bikeridehero}
                                alt="Bike Ride hero"
                                className='w-full h-full object-cover ' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;