import React, { useState, useRef, useEffect } from 'react';
import Ubercustomer1 from "../../assets/transport-bikeride-img/Bikeridepassanger1.webp"
import Ubercustomer2 from "../../assets/transport-bikeride-img/Bikeridepassanger2.webp"
import Ubercustomer3 from "../../assets/transport-bikeride-img/Bikeridepassanger3.webp"
import Ubercustomer4 from "../../assets/transport-bikeride-img/Bikeridepassanger4.webp"
import Ubercustomer5 from "../../assets/transport-bikeride-img/Bikeridepassanger5.webp"
import Ubercustomer6 from "../../assets/transport-bikeride-img/Bikeridepassanger6.webp"
import Ubercustomer7 from "../../assets/transport-bikeride-img/Bikeridepassanger7.webp"

import Uberdriver1 from "../../assets/transport-bikeride-img/Bikeridedriver1.webp"
import Uberdriver2 from "../../assets/transport-bikeride-img/Bikeridedriver2.webp"
import Uberdriver3 from "../../assets/transport-bikeride-img/Bikeridedriver3.webp"
import Uberdriver4 from "../../assets/transport-bikeride-img/Bikeridedriver4.webp"
import Uberdriver5 from "../../assets/transport-bikeride-img/Bikeridedriver5.webp"
import Uberdriver6 from "../../assets/transport-bikeride-img/Bikeridedriver6.webp"
import Uberdriver7 from "../../assets/transport-bikeride-img/Bikeridedriver7.webp"
const UberAppScreenshots = () => {
    const [activeTab, setActiveTab] = useState('customer');
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    // Use refs for dragging to ensure high-performance updates without re-renders
    const dragData = useRef({
        startX: 0,
        scrollLeft: 0,
        isDown: false
    });

    const customerScreenshots = [
        { id: 1, title: 'My Account', src: Ubercustomer1 },
        { id: 2, title: 'Home Map', src: Ubercustomer2 },
        { id: 3, title: 'Select Vehicle', src: Ubercustomer3 },
        { id: 4, title: 'Arriving', src: Ubercustomer4 },
        { id: 5, title: 'Ride Details', src: Ubercustomer5 },
        { id: 6, title: 'My Rides', src: Ubercustomer6 },
        { id: 7, title: 'Wallet', src: Ubercustomer7 },
    ];

    const driverScreenshots = [
        { id: 1, title: 'Select Vehicle', src: Uberdriver1 },
        { id: 2, title: 'Choose ride', src: Uberdriver2 },
        { id: 3, title: 'Pickup', src: Uberdriver3 },
        { id: 4, title: 'Payments', src: Uberdriver4 },
        { id: 5, title: 'Search routes', src: Uberdriver5 },
        { id: 6, title: 'Search Results', src: Uberdriver6 },
        { id: 7, title: 'Feedback', src: Uberdriver7 },
    ];

    const currentScreenshots = activeTab === 'customer' ? customerScreenshots : driverScreenshots;

    // Triple the items to allow for infinite scrolling
    const infiniteScreenshots = [...currentScreenshots, ...currentScreenshots, ...currentScreenshots, ...currentScreenshots, ...currentScreenshots];

    // High Performance Mouse Drag Logic
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
        const walk = (x - dragData.current.startX) * 2; // Multiplier for faster scroll
        scrollRef.current.scrollLeft = dragData.current.scrollLeft - walk;
    };

    // Infinite Loop Logic using onScroll
    const handleInfiniteScroll = () => {
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const totalItemsWidth = scrollWidth / 5; // Width of one full set (since we have 5 sets)

        // If scrolled past the first 2 sets, or into the last set, snap back to middle
        if (scrollLeft < totalItemsWidth) {
            scrollRef.current.scrollLeft = scrollLeft + totalItemsWidth * 2;
        } else if (scrollLeft > totalItemsWidth * 3) {
            scrollRef.current.scrollLeft = scrollLeft - totalItemsWidth * 2;
        }
    };

    // Reset scroll to middle set on mount and tab change
    useEffect(() => {
        if (scrollRef.current) {
            const totalItemsWidth = scrollRef.current.scrollWidth / 5;
            scrollRef.current.scrollLeft = totalItemsWidth * 2;
        }
    }, [activeTab]);

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-x-hidden">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
                            <path d="M 50 0 L 0 50 M 100 50 L 50 100 M 50 0 L 100 50 M 0 50 L 50 100" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#333] rounded-full px-5 py-1.5 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        <span className="text-white text-[13px] font-medium tracking-wide">Fox-Taxi App Screenshots</span>
                    </div>
                </div>

                {/* Content */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[48px] leading-tight md:leading-[62px] font-bold text-white mb-6">
                        Understand the Customer and Driver App Workflow
                    </h2>
                    <p className="text-[#999] text-base md:text-[18px] max-w-4xl mx-auto leading-relaxed md:px-12">
                        Check the screens to experience the customer and driver app journey in action. Walk through each step and understand how smoothly the Uber clone script operates.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-[#1a1a1a] p-2 rounded-full flex items-center shadow-2xl border border-white/5">
                        <button
                            onClick={() => setActiveTab('customer')}
                            className={`flex items-center gap-3 px-10 py-5 rounded-full transition-all duration-500 ease-out transform ${activeTab === 'customer'
                                ? 'bg-white text-black font-bold shadow-xl scale-100'
                                : 'text-white/60 hover:text-white scale-95'
                                }`}
                        >
                            {activeTab === 'customer' && (
                                <div className="bg-black rounded-full p-1.5">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                            )}
                            <span className="text-[17px]">Customer App</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('driver')}
                            className={`flex items-center gap-3 px-10 py-5 rounded-full transition-all duration-500 ease-out transform ${activeTab === 'driver'
                                ? 'bg-white text-black font-bold shadow-xl scale-100'
                                : 'text-white/60 hover:text-white scale-95'
                                }`}
                        >
                            {activeTab === 'driver' && (
                                <div className="bg-black rounded-full p-1.5">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </div>
                            )}
                            <span className="text-[17px]">Driver App</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Screenshots Carousel */}
            <div className="relative w-full overflow-hidden group">
                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

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
                    className={`flex overflow-x-auto gap-4 md:gap-6 pb-20 no-scrollbar px-6 md:px-[max(1.5rem,calc((100%-1280px)/2+1rem))] overscroll-x-contain touch-pan-y ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        } ${!isDragging ? 'snap-x snap-mandatory' : ''}`}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {infiniteScreenshots.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="min-w-[280px] md:min-w-[300px] snap-center"
                        >
                            <div className="bg-[#1e1e1e] border-[5px] border-white/10 rounded-[45px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto max-w-full group/screenshot-container select-none transition-all duration-500 hover:border-white/20">
                                <div className="relative rounded-[38px] overflow-hidden group/screenshot aspect-[9/19]">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover pointer-events-none select-none"
                                        draggable="false"
                                    />

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default UberAppScreenshots;
