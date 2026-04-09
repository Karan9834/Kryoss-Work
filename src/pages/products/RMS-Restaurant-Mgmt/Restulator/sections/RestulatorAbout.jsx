import React from "react";
import RestulatorAboutImg from "../../../../../assets/resulatorrms-img/resulatorrmsabout.jpg";
import { CheckCircle } from "lucide-react";

const RestulatorAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Single Image */}
                    <div className="relative">
                        <div className="relative w-full h-[440px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={RestulatorAboutImg} alt="About Fine Dining" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative corner accents */}
                        <div className="absolute top-4 left-4 w-14 h-14 border-t-4 border-l-4 border-amber-400 rounded-tl-2xl" />
                        <div className="absolute bottom-4 right-4 w-14 h-14 border-b-4 border-r-4 border-amber-300 rounded-br-2xl" />
                        {/* Floating stat badge */}
                        <div className="absolute -bottom-5 -right-5 bg-amber-700 text-white px-5 py-3 rounded-2xl shadow-xl">
                            <p className="text-xs text-amber-300 font-semibold">Restaurants Onboarded</p>
                            <p className="text-2xl font-black">800+</p>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 lg:pl-4">
                        <div className="space-y-3">
                            <span className="inline-block text-amber-700 font-bold text-sm uppercase tracking-widest">
                                About the Platform
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
                                Crafted for{" "}
                                <span className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(90deg, #b45309, #d97706, #92400e)" }}>
                                    Culinary Excellence
                                </span>
                            </h2>
                            <p className="text-stone-600 text-lg leading-relaxed">
                                Whether you run a Michelin-starred restaurant or a beloved neighbourhood bistro, our platform gives your front-of-house and kitchen teams the intelligent tools to deliver extraordinary dining experiences — consistently and effortlessly.
                            </p>
                            <p className="text-stone-500 leading-relaxed">
                                From the moment a guest books a table to the second they leave a glowing review, every touchpoint is refined and personalised.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {[
                                "Interactive floor plan with drag-and-drop table layout tools",
                                "Guest CRM with dietary restrictions and preference history",
                                "Smart reservation engine with no-show protection deposits",
                                "Sommelier wine inventory with vintage pairing suggestions",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-stone-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Thin golden rule */}
                        <div className="flex items-center gap-4 pt-2">
                            <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, transparent, #d97706)" }} />
                            <span className="text-amber-700 font-bold tracking-widest text-xs uppercase">Trusted Since 2018</span>
                            <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #d97706, transparent)" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestulatorAbout;
