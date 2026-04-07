import React from "react";
import kotlinheroimg from "../../../assets/services-kotlin-img/kotlinhero.webp";
const KotlinHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0b0f2f] via-[#1b0c3f] to-[#2b002e] text-white">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 lg:py-24">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                            <span className="text-orange-400">
                                White Label Kotlin App Development
                            </span>{" "}
                            Services for Scalable B2B Ventures
                        </h1>

                        <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
                            Empower your business with premium, rebrandable mobile solutions
                            designed for rapid deployment. Kryoss Work is a leading white
                            label Kotlin app development company, providing high-performance,
                            Kotlin Multiplatform solutions that allow you to launch your own
                            branded platform across Android, iOS, and Web in record time.
                            Gain full source code ownership and a 1-year support guarantee
                            to build a digital asset you truly own.
                        </p>

                        {/* CTA BUTTON */}
                        <div className="mt-8">
                            <button className="flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 transition px-6 py-3 rounded-full text-white font-medium shadow-lg">
                                Get a Free Consultation
                                <span className="text-xl">→</span>
                            </button>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* IMAGE PLACEHOLDER */}
                        <div className="relative z-10 w-[270px] md:w-[340px] lg:w-[400px] aspect-[3/4] flex items-center justify-center text-gray-700 font-medium">
                            <img src={kotlinheroimg}
                                alt="Kotlin app"
                                className="w-full h-full object-contain"
                            />
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default KotlinHero;