import { Link } from 'react-router-dom';

import React from "react";
import cta1 from "../../assets/homeservice-tutor-img/tutorcta1.webp";
const CTA1 = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* MAIN CTA BOX */}
                <div className="relative overflow-visible rounded-[48px] bg-[linear-gradient(135deg,#8b1d4f,#5a002b)] px-8 py-14 sm:px-12 lg:px-16">

                    <div className="flex flex-col items-center gap-12 lg:flex-row">

                        {/* LEFT CONTENT */}
                        <div className="w-full text-white lg:w-1/2">
                            <h2 className="mb-6 text-[28px] font-semibold leading-snug sm:text-[34px] lg:text-[40px]">
                                Prepared to Establish Your Custom
                                <br />
                                Tutoring Marketplace?
                            </h2>

                            <p className="mb-8 max-w-[520px] text-[15px] leading-relaxed text-white/90 sm:text-[16px]">
                                Capitalize on the growing demand for personalized instruction with our 
                                elite educational framework. At Vyom Solutions, we bridge the gap by 
                                delivering a fully adaptable tutor environment with minimum turnaround.
                            </p>

                            <Link to="/company/contact" className="rounded-full border border-white px-8 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#5a002b]">
                                Schedule Enterprise Review
                            </Link>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative w-full lg:w-1/2">

                            {/* IMAGE WRAPPER */}
                            <div className="relative mx-auto w-full max-w-[520px]">

                                {/* IMAGE (single image only) */}
                                <img
                                    src={cta1}
                                    alt="Tutor App CTA"
                                    className="
                    relative
                    z-10
                    lg:-mt-16
                    mt-8
                    lg:mb-[-64px]
                    mb-0
                    w-full
                    object-contain
                    scale-105
                  "
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA1;