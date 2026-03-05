import react from "react";
import { ArrowRight } from "lucide-react";
import Laundryhero from "../../assets/homeservice-laundry-img/Laundryhero.webp";
const LaundryHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-gradient-to-r from-[#003f3a] to-[#012f2b] overflow-hidden">

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[50%] text-white pb-12 mt-20 lg:pb-20 lg:pr-10">

                    {/* Logo + Brand */}
                    <div className="flex items-center gap-3 mb-6">

                        <div className="bg-[#0f766e] w-10 h-10 flex items-center justify-center rounded-lg text-xl">
                            🧺
                        </div>

                        <span className="text-xl font-semibold tracking-wide">
                            FOX-LAUNDRY
                        </span>

                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        <span className="text-[#1dd3b0]">
                            On Demand Laundry
                        </span>{" "}
                        App Development
                    </h1>

                    {/* Paragraph */}
                    <p className="text-gray-200 max-w-xl mb-8">
                        Launch your laundry business with our custom on-demand app. Our
                        feature-rich solution for Android and iOS ensures a seamless
                        customer experience.
                    </p>

                    {/* CTA */}
                    <button className="flex items-center gap-3 bg-[#18d4b0] text-black font-medium px-6 py-3 rounded-full hover:opacity-90 transition">
                        Let's Discuss
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-14 lg:mt-0">

                    <img
                        src={Laundryhero}
                        alt="Laundry App"
                        className="w-[420px] md:w-[620px]  scale-125"
                    />

                </div>
            </div>
        </section>
    );
};

export default LaundryHero;