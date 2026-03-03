import React, { useState, useRef } from "react";
import { User, GraduationCap } from "lucide-react";

const AppPreview = () => {
    const [activeTab, setActiveTab] = useState("customer");
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const customerScreens = [
        { id: 1, name: "Home Screen" },
        { id: 2, name: "Select Package" },
        { id: 3, name: "Tutor Profile" },
        { id: 4, name: "Reviews" },
        { id: 5, name: "Gallery" },
        { id: 6, name: "Select Time" },
        { id: 7, name: "Checkout" },
    ];

    const providerScreens = [
        { id: 1, name: "Dashboard" },
        { id: 2, name: "Earnings" },
        { id: 3, name: "Ride History" },
        { id: 4, name: "Manage Profile" },
        { id: 5, name: "Settings" },
    ];

    const activeScreens = activeTab === "customer" ? customerScreens : providerScreens;

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="w-full bg-[#110e0e] py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Chip Tag */}
                <div className="flex justify-center mb-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        Uber For Tutor App Clone Preview
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-[32px] md:text-[45px] font-bold text-white leading-tight mb-6 max-w-5xl mx-auto px-4">
                    Experience the <span className="text-[#f5b301]">Uber for Tutors Customer & Provider</span> App Design
                </h2>

                {/* Subtext */}
                <p className="text-gray-400 text-base md:text-lg mb-12 max-w-4xl mx-auto px-6">
                    Check out how both the student and tutor apps offer a smooth and intuitive journey for users, enhancing their experience at every step.
                </p>

                {/* Toggle Tabs */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="bg-white/10 p-1.5 rounded-full flex gap-2 backdrop-blur-md border border-white/10 shadow-xl">
                        <button
                            onClick={() => setActiveTab("customer")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 ${activeTab === "customer"
                                    ? "bg-white text-black shadow-lg"
                                    : "text-white hover:bg-white/10"
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTab === "customer" ? "bg-[#f5b301] text-white" : "bg-white/20 text-white"}`}>
                                <User size={18} />
                            </div>
                            Customer App
                        </button>
                        <button
                            onClick={() => setActiveTab("provider")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 ${activeTab === "provider"
                                    ? "bg-white text-black shadow-lg"
                                    : "text-white hover:bg-white/10"
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTab === "provider" ? "bg-[#f5b301] text-white" : "bg-white/20 text-white"}`}>
                                <GraduationCap size={18} />
                            </div>
                            Provider App
                        </button>
                    </div>
                </div>

                {/* Screenshots Slider Container */}
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="relative overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory flex justify-start cursor-grab active:cursor-grabbing select-none"
                >
                    <div className="flex gap-6 md:gap-8 px-8 md:px-[10%] min-w-max">
                        {activeScreens.map((screen) => (
                            <div
                                key={screen.id}
                                className="w-[250px] md:w-[280px] aspect-[9/18.5] border-[6px] border-[#222] rounded-[24px] bg-[#1a1a1a] shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden flex items-center justify-center p-0 snap-center pointer-events-none"
                            >
                                {/* Image Placeholder - User will add later */}
                                <div className="w-full h-full bg-gradient-to-b from-white/10 to-white/5 flex flex-col items-center justify-center text-white/20">
                                    <span className="text-4xl mb-4 opacity-50">📱</span>
                                    <span className="text-[10px] uppercase tracking-[3px] font-bold px-4 text-center">{screen.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom Styles to hide scrollbar */}
                <style>
                    {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
                </style>
            </div>
        </section>
    );
};

export default AppPreview;
