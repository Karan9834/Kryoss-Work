import React, { useState, useRef } from "react";
import { User, GraduationCap } from "lucide-react";
import Tutorcustomer1 from "../../assets/homeservice-tutor-img/Tutorcustomer1.webp";
import Tutorcustomer2 from "../../assets/homeservice-tutor-img/Tutorcustomer2.webp";
import Tutorcustomer3 from "../../assets/homeservice-tutor-img/Tutorcustomer3.webp";
import Tutorcustomer4 from "../../assets/homeservice-tutor-img/Tutorcustomer4.webp";
import Tutorcustomer5 from "../../assets/homeservice-tutor-img/Tutorcustomer5.webp";
import Tutorcustomer6 from "../../assets/homeservice-tutor-img/Tutorcustomer6.webp";
import Tutorcustomer7 from "../../assets/homeservice-tutor-img/Tutorcustomer7.webp";
import Tutorprovider1 from "../../assets/homeservice-tutor-img/Tutorprovider1.webp";
import Tutorprovider2 from "../../assets/homeservice-tutor-img/Tutorprovider2.webp";
import Tutorprovider3 from "../../assets/homeservice-tutor-img/Tutorprovider3.webp";
import Tutorprovider4 from "../../assets/homeservice-tutor-img/Tutorprovider4.webp";
import Tutorprovider5 from "../../assets/homeservice-tutor-img/Tutorprovider5.webp";
import Tutorprovider6 from "../../assets/homeservice-tutor-img/Tutorprovider6.webp";
import Tutorprovider7 from "../../assets/homeservice-tutor-img/Tutorprovider7.webp";
const AppPreview = () => {
    const [activeTab, setActiveTab] = useState("customer");
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const dragData = useRef({
        startX: 0,
        scrollLeft: 0,
        isDown: false
    });

    // Add empty src for user to fill later
    const customerScreens = [
        { id: 1, title: "Home Screen", src: Tutorcustomer1 },
        { id: 2, title: "Tutor Profile", src: Tutorcustomer2 },
        { id: 3, title: "Select Package", src: Tutorcustomer3 },
        { id: 4, title: "Reviews", src: Tutorcustomer4 },
        { id: 5, title: "Gallery", src: Tutorcustomer5 },
        { id: 6, title: "Select Time", src: Tutorcustomer6 },
        { id: 7, title: "Checkout", src: Tutorcustomer7 },
    ];

    const providerScreens = [
        { id: 1, title: "Profile", src: Tutorprovider1 },
        { id: 2, title: "Live Order", src: Tutorprovider2 },
        { id: 3, title: "Order Details", src: Tutorprovider3 },
        { id: 4, title: "Order History", src: Tutorprovider4 },
        { id: 5, title: "Services", src: Tutorprovider5 },
        { id: 6, title: "Packages", src: Tutorprovider6 },
        { id: 7, title: "Provider Details", src: Tutorprovider7 },
    ];

    const currentScreenshots = activeTab === "customer" ? customerScreens : providerScreens;
    const infiniteScreenshots = [...currentScreenshots, ...currentScreenshots, ...currentScreenshots, ...currentScreenshots, ...currentScreenshots];

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragData.current.isDown = true;
        dragData.current.startX = e.clientX || e.touches?.[0].clientX;
        dragData.current.scrollLeft = scrollRef.current.scrollLeft;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        dragData.current.isDown = false;
    };

    const handleMouseMove = (e) => {
        if (!dragData.current.isDown) return;
        const x = e.clientX || e.touches?.[0].clientX;
        const walk = (x - dragData.current.startX) * 2;
        scrollRef.current.scrollLeft = dragData.current.scrollLeft - walk;
    };

    const handleInfiniteScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const totalItemsWidth = scrollWidth / 5;
        if (scrollLeft < totalItemsWidth) {
            scrollRef.current.scrollLeft = scrollLeft + totalItemsWidth * 2;
        } else if (scrollLeft > totalItemsWidth * 3) {
            scrollRef.current.scrollLeft = scrollLeft - totalItemsWidth * 2;
        }
    };

    React.useEffect(() => {
        if (scrollRef.current) {
            const totalItemsWidth = scrollRef.current.scrollWidth / 5;
            scrollRef.current.scrollLeft = totalItemsWidth * 2;
        }
    }, [activeTab]);

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

            </div>

            {/* Screenshots Slider Container - full viewport width, outside max-w container */}
            <div className="relative w-full overflow-hidden">
                {/* Edge Fades from SnowPlowApp */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#110e0e] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#110e0e] to-transparent z-20 pointer-events-none"></div>

                <div
                    ref={scrollRef}
                    onScroll={handleInfiniteScroll}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseUp}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    onTouchMove={handleMouseMove}
                    className={`flex overflow-x-auto gap-8 pb-14 no-scrollbar px-10 touch-pan-y overscroll-x-contain ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${!isDragging ? 'snap-x snap-mandatory' : ''}`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    {infiniteScreenshots.map((item, index) => (
                        <div
                            key={`${screen.id}-${index}`}
                            className="min-w-[280px] md:min-w-[300px] snap-center"
                        >
                            <div className="bg-[#1a1a1a] border-[5px] border-[#222] rounded-[45px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto max-w-full select-none transition-all duration-500 hover:border-[#f5b301]/30">
                                <div className="relative rounded-[38px] overflow-hidden aspect-[9/19] bg-[#000]">
                                    {item.src ? (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover pointer-events-none select-none"
                                            draggable="false"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-b from-white/10 to-white/5 flex flex-col items-center justify-center text-white/20">
                                            <span className="text-4xl mb-4 opacity-50">📱</span>
                                            <span className="text-[10px] uppercase tracking-[3px] font-bold px-4 text-center">{screen.name}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#110e0e]/60 via-transparent to-transparent pointer-events-none"></div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
                                </div>
                            </div>
                            <p className="text-center text-white/50 text-sm mt-4 font-medium tracking-wide">{screen.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="flex justify-center mt-10">
                <div className="flex items-center gap-6 text-[#f5b301]/40 text-xs font-bold tracking-[0.3em] uppercase">
                    <div className="w-12 h-[1px] bg-[#f5b301]/20"></div>
                    Drag to Explore
                    <div className="w-12 h-[1px] bg-[#f5b301]/20"></div>
                </div>
            </div>

            {/* Custom Styles to hide scrollbar */}
            <style>
                {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
            </style>
        </section>
    );
};

export default AppPreview;
