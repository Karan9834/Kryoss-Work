import { Link } from 'react-router-dom';

import react from 'react';
import Careerheroimg from "../../assets/company-career-img/Careerhero.webp";
const CareerHeroSection = () => {
    return (
        <section className="relative w-full min-h-[80vh]  bg-gradient-to-r from-[#5b000a] via-[#7a0010] to-[#8c0016] py-24 overflow-hidden">

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">

                {/* LEFT TEXT */}
                <div className="w-full lg:w-[50%] text-white pb-12 lg:pb-20 lg:pr-10">

                    {/* small badge */}
                    <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1 rounded-full text-sm mb-6">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Meet Our Dedicated Developers
                    </div>

                    {/* heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                        Join Our Team{" "}
                        <span className="text-orange-400">& Build the Future!</span>
                    </h1>

                    {/* description */}
                    <p className="text-white/90 max-w-xl mb-8">
                        We’re looking for passionate and talented individuals to be part of
                        Kryoss Work. Explore our current openings and take the next step
                        in your career with us!
                    </p>

                    {/* button */}
                    <Link to="/company/contact" className="flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 px-7 py-3 rounded-full text-white font-medium hover:scale-105 transition">
                        Join Our Team
                        <span className="text-lg">→</span>
                    </Link>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center lg:justify-end">

                    <img
                        src={Careerheroimg}
                        alt="career hero"
                        className="w-[420px] md:w-[520px] lg:w-[600px]"
                    />

                </div>

            </div>

        </section>
    );
};

export default CareerHeroSection;