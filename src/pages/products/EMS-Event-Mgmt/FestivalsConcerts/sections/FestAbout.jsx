import React from "react";
import festAboutImg from "../../../../../assets/festivalconcertems-img/festivalconcertemsabout.jpg";
import { CheckCircle } from "lucide-react";

const FestAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle diagonal soft-bg accent on the right */}
            {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full"
                    style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #fce7f3 100%)", clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }} />
            </div> */}

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with decorative frame */}
                    <div className="relative">
                        <div className="relative w-full h-[420px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={festAboutImg} alt="About Festivals & Concerts" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative corner frames */}
                        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-fuchsia-400 rounded-tl-2xl" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-pink-400 rounded-br-2xl" />
                        {/* Floating label */}
                        <div className="absolute -bottom-5 left-8 bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-xl">
                            <p className="text-xs text-pink-200 font-semibold">Powered By</p>
                            <p className="text-white font-bold text-sm">KRYOSSEvents™</p>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <span className="inline-block text-fuchsia-600 font-bold text-sm uppercase tracking-widest">
                                About the Platform
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                                Built for the{" "}
                                <span className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(90deg, #a21caf, #db2777, #d97706)" }}>
                                    Festival Generation
                                </span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Festivals and concerts demand a different kind of platform — one built for speed, scale, and fan energy. Our solution handles 50,000+ concurrent ticket scans, cashless payment zones, and real-time crowd analytics without a hitch.
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                From the pre-sale rush to the final encore, every touchpoint is optimised for the fan experience and the organiser's control.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {[
                                "Scalable ticketing engine for multi-day, multi-stage events",
                                "Cashless RFID wristband and NFC payment integration",
                                "Fan engagement app with set notifications and artist follows",
                                "Real-time crowd density monitoring for safety compliance",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-fuchsia-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FestAbout;
