import React from "react";
import androidcta1img from "../../../assets/services-android-img/androidcta1.webp";

const CTA1 = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <div
                    className="relative rounded-[35px] text-white overflow-hidden"
                    style={{
                        background: "linear-gradient(to right, #5a1c57, #c23a3a)"
                    }}
                >

                    <div className="grid lg:grid-cols-2 items-center gap-10 px-6 md:px-12 py-10 lg:py-12">

                        {/* TEXT */}
                        <div className="relative z-10 text-center lg:text-left">

                            <h2 className="text-[26px] sm:text-3xl lg:text-[44px] font-bold leading-tight mb-5">
                                Ready for White Label <br />
                                Android App Development?
                            </h2>

                            <p className="text-white/90 text-[15px] sm:text-[17px] mb-7 max-w-lg mx-auto lg:mx-0">
                                Partner with our White Label Android App Development Service to
                                launch secure, fully branded Android apps built for speed and
                                scalability.
                            </p>

                            <button className="border-2 border-white rounded-full px-7 py-3 text-sm sm:text-base font-semibold hover:bg-white hover:text-[#912d4a] transition-all duration-300">
                                Get Started Today
                            </button>

                        </div>

                        {/* IMAGE */}
                        <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">

                            <div className="w-full max-w-[420px] lg:max-w-[540px]">
                                <img
                                    src={androidcta1img}
                                    alt="Android App"
                                    className="w-full h-auto scale-110 object-contain"
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