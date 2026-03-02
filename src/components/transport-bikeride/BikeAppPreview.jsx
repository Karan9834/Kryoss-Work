import React, { useState, useRef, useEffect } from 'react';

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
        { id: 1, title: 'My Account', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=My+Account' },
        { id: 2, title: 'Home Map', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=Home+Map' },
        { id: 3, title: 'Select Vehicle', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=Select+Vehicle' },
        { id: 4, title: 'Arriving', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=Arriving' },
        { id: 5, title: 'Ride Details', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=Ride+Details' },
        { id: 6, title: 'My Rides', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=My+Rides' },
        { id: 7, title: 'Wallet', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=Wallet' },
        { id: 8, title: 'Reviews', src: 'https://placehold.co/375x812/0b3d2e/FFFFFF?text=Reviews' },
    ];

    const driverScreenshots = [
        { id: 1, title: 'Trip Request', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Trip+Request' },
        { id: 2, title: 'Earnings', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Earnings' },
        { id: 3, title: 'Navigation', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Navigation' },
        { id: 4, title: 'Duty Status', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Duty+Status' },
        { id: 5, title: 'User Details', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=User+Details' },
        { id: 6, title: 'Trip History', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Trip+History' },
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
                            className="min-w-[280px] md:min-w-[calc((1280px/5)-2rem)] snap-center"
                        >
                            <div className="bg-[#123126] rounded-[40px] p-2 md:p-3 border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-[#2ef2b5]/10 mx-auto max-w-full group/screenshot-container select-none">
                                <div className="relative rounded-[32px] overflow-hidden group/screenshot aspect-[10/20] bg-[#0b3d2e]">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/screenshot:scale-105 pointer-events-none select-none"
                                        draggable="false"
                                    />
                                    {/* Subtle Overlay on Screen */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#062016]/80 via-transparent to-transparent opacity-60"></div>

                                    {/* Info Badge on Hover */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#062016] via-[#062016]/60 to-transparent flex flex-col justify-end p-8 transform translate-y-full group-hover/screenshot:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                        <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                                        <p className="text-[#2ef2b5] text-xs font-black tracking-widest uppercase">Verified Screen</p>
                                    </div>
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
