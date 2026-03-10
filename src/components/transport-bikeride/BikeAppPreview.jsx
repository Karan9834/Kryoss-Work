import React, { useState, useRef, useEffect } from 'react';
import Bikeridepassanger1 from "../../assets/transport-bikeride-img/Bikeridepassanger1.webp"
import Bikeridepassanger2 from "../../assets/transport-bikeride-img/Bikeridepassanger2.webp"
import Bikeridepassanger3 from "../../assets/transport-bikeride-img/Bikeridepassanger3.webp"
import Bikeridepassanger4 from "../../assets/transport-bikeride-img/Bikeridepassanger4.webp"
import Bikeridepassanger5 from "../../assets/transport-bikeride-img/Bikeridepassanger5.webp"
import Bikeridepassanger6 from "../../assets/transport-bikeride-img/Bikeridepassanger6.webp"
import Bikeridepassanger7 from "../../assets/transport-bikeride-img/Bikeridepassanger7.webp"

import Bikeridedriver1 from "../../assets/transport-bikeride-img/Bikeridedriver1.webp"
import Bikeridedriver2 from "../../assets/transport-bikeride-img/Bikeridedriver2.webp"
import Bikeridedriver3 from "../../assets/transport-bikeride-img/Bikeridedriver3.webp"
import Bikeridedriver4 from "../../assets/transport-bikeride-img/Bikeridedriver4.webp"
import Bikeridedriver5 from "../../assets/transport-bikeride-img/Bikeridedriver5.webp"
import Bikeridedriver6 from "../../assets/transport-bikeride-img/Bikeridedriver6.webp"
import Bikeridedriver7 from "../../assets/transport-bikeride-img/Bikeridedriver7.webp"
const BikeAppPreview = () => {
    const [activeTab, setActiveTab] = useState('passenger');
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    // Use refs for dragging to ensure high-performance updates without re-renders
    const dragData = useRef({
        startX: 0,
        scrollLeft: 0,
        isDown: false
    });

    const passengerScreenshots = [
        { id: 1, title: 'My Account', src: Bikeridepassanger1 },
        { id: 2, title: 'Home Map', src: Bikeridepassanger2 },
        { id: 3, title: 'Select Vehicle', src: Bikeridepassanger3 },
        { id: 4, title: 'Arriving', src: Bikeridepassanger4 },
        { id: 5, title: 'Ride Details', src: Bikeridepassanger5 },
        { id: 6, title: 'My Rides', src: Bikeridepassanger6 },
        { id: 7, title: 'Wallet', src: Bikeridepassanger7 },

    ];

    const driverScreenshots = [
        { id: 1, title: 'Select Vehicle', src: Bikeridedriver1 },
        { id: 2, title: 'Choose ride', src: Bikeridedriver2 },
        { id: 3, title: 'Pickup', src: Bikeridedriver3 },
        { id: 4, title: 'Payments', src: Bikeridedriver4 },
        { id: 5, title: 'Search routes', src: Bikeridedriver5 },
        { id: 6, title: 'Search Results', src: Bikeridedriver6 },
        { id: 7, title: 'Feedback', src: Bikeridedriver7 },
    ];

    const currentScreenshots = activeTab === 'passenger' ? passengerScreenshots : driverScreenshots;

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
        const walk = (x - dragData.current.startX) * 2;
        scrollRef.current.scrollLeft = dragData.current.scrollLeft - walk;
    };

    // Infinite Loop Logic using onScroll
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

    useEffect(() => {
        if (scrollRef.current) {
            const totalItemsWidth = scrollRef.current.scrollWidth / 5;
            scrollRef.current.scrollLeft = totalItemsWidth * 2;
        }
    }, [activeTab]);

    return (
        <section className="py-24 bg-[#062016] relative overflow-x-hidden font-['IBM_Plex_Sans']">
            {/* Dark Green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#062016] via-[#0b3123] to-[#062016] pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-5 py-1.5 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-[#2ef2b5] animate-pulse"></div>
                        <span className="text-white text-[13px] font-medium tracking-wide">App Preview</span>
                    </div>
                </div>

                {/* Content */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[50px] leading-tight font-black text-white mb-6">
                        Experience the Look & <span className="text-[#2ef2b5]">Feel of Our Bike Taxi App</span>
                    </h2>
                    <p className="text-white/60 text-base md:text-[18px] max-w-3xl mx-auto leading-relaxed">
                        Get a glimpse of our intuitive Bike Taxi App with sleek designs and user-friendly navigation for both customers and drivers.
                    </p>
                </div>

                {/* Tab Switcher - Custom Styled to match Screenshot */}
                <div className="flex justify-center mb-20">
                    <div className="bg-white/5 p-2 rounded-full flex items-center shadow-2xl border border-white/10 backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('passenger')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-500 ease-out transform ${activeTab === 'passenger'
                                ? 'bg-white text-[#0b3d2e] font-black shadow-xl scale-100'
                                : 'text-white/70 hover:text-[#2ef2b5] scale-95'
                                }`}
                        >
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 'passenger' ? 'bg-[#0b3d2e] text-white' : 'bg-white/10'}`}>
                                👤
                            </span>
                            <span className="text-[16px]">Passenger Mode</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('driver')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-500 ease-out transform ${activeTab === 'driver'
                                ? 'bg-white text-[#0b3d2e] font-black shadow-xl scale-100'
                                : 'text-white/70 hover:text-[#2ef2b5] scale-95'
                                }`}
                        >
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === 'driver' ? 'bg-[#0b3d2e] text-white' : 'bg-white/10'}`}>
                                🏍️
                            </span>
                            <span className="text-[16px]">Driver Mode</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Screenshots Carousel - Infinite Scroll logic from UberAppScreenshots */}
            <div className="relative w-full overflow-hidden group">
                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-[#062016] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-[#062016] to-transparent z-20 pointer-events-none"></div>

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
                    className={`flex overflow-x-auto gap-4 md:gap-8 pb-20 no-scrollbar px-6 md:px-[max(1.5rem,calc((100%-1280px)/2+1rem))] overscroll-x-contain touch-pan-y ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
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
                            <div className="bg-[#123126] border-[5px] border-white/10 rounded-[45px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-[#2ef2b5]/10 mx-auto max-w-full group/screenshot-container select-none transition-all duration-500 hover:border-[#2ef2b5]/30">
                                <div className="relative rounded-[38px] overflow-hidden group/screenshot aspect-[9/19] bg-[#0b3d2e]">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover pointer-events-none select-none"
                                        draggable="false"
                                    />
                                    {/* Subtle Overlay on Screen */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#062016]/80 via-transparent to-transparent opacity-60"></div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Drag Hint */}
            <div className="flex justify-center mt-4">
                <div className="flex items-center gap-3 text-white/20 font-black tracking-widest text-[11px] uppercase animate-pulse">
                    <span>Scroll to Explore</span>
                    <div className="w-12 h-[1px] bg-white/10"></div>
                </div>
            </div>


        </section>
    );
};

export default BikeAppPreview;
