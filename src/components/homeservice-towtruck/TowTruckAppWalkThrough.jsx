import React, { useState, useRef, useEffect } from 'react';

const TowTruckAppWalkThrough = () => {
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
        { id: 1, title: 'Select Tow Truck', src: 'https://placehold.co/375x812/031b2e/FFFFFF?text=Select+Tow+Truck' },
        { id: 2, title: 'Book Tow Truck', src: 'https://placehold.co/375x812/031b2e/FFFFFF?text=Book+Tow+Truck' },
        { id: 3, title: 'Order Details', src: 'https://placehold.co/375x812/031b2e/FFFFFF?text=Order+Details' },
        { id: 4, title: 'Tracking', src: 'https://placehold.co/375x812/031b2e/FFFFFF?text=Tracking' },
        { id: 5, title: 'Payment', src: 'https://placehold.co/375x812/031b2e/FFFFFF?text=Payment' },
        { id: 6, title: 'Ratings', src: 'https://placehold.co/375x812/031b2e/FFFFFF?text=Ratings' },
    ];

    const driverScreenshots = [
        { id: 1, title: 'New Request', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=New+Request' },
        { id: 2, title: 'Accept/Decline', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Accept/Decline' },
        { id: 3, title: 'Navigate to User', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Navigate' },
        { id: 4, title: 'Earnings', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Earnings' },
        { id: 5, title: 'Profile', src: 'https://placehold.co/375x812/1a1a1a/FFFFFF?text=Profile' },
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
        <section className="py-24 bg-gradient-to-r from-[#021423] via-[#031b2e] to-[#021423] relative overflow-x-hidden font-sans">
            {/* Background Grain/Overlay if needed */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none opacity-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-1 rounded-full text-white/90 text-sm backdrop-blur-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        App Walkthrough
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Explore Our <span className="text-blue-400">Tow Truck App in Action</span>
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
                    Get a glimpse of our Uber for tow trucks app with real-time visuals showcasing seamless booking, tracking, and service management.
                </p>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-20">
                    <div className="bg-white/10 p-1.5 rounded-full flex items-center border border-white/20 backdrop-blur-lg">
                        <button
                            onClick={() => setActiveTab('customer')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-medium ${activeTab === 'customer'
                                ? 'bg-white text-[#031b2e] shadow-lg'
                                : 'text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                            Customer App
                        </button>
                        <button
                            onClick={() => setActiveTab('driver')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-medium ${activeTab === 'driver'
                                ? 'bg-white text-[#031b2e] shadow-lg'
                                : 'text-white hover:bg-white/5'
                                }`}
                        >
                            Driver App
                        </button>
                    </div>
                </div>
            </div>

            {/* Screenshots Carousel */}
            <div className="relative w-full overflow-hidden">
                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#021423] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#021423] to-transparent z-20 pointer-events-none"></div>

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
                    className={`flex overflow-x-auto gap-8 pb-10 no-scrollbar px-10 touch-pan-y overscroll-x-contain ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${!isDragging ? 'snap-x snap-mandatory' : ''}`}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {infiniteScreenshots.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="min-w-[280px] md:min-w-[320px] snap-center"
                        >
                            <div className="bg-[#031b2e] border-4 border-white/10 rounded-[45px] p-2.5 shadow-2xl transition-transform duration-500">
                                <div className="relative aspect-[9/19] rounded-[38px] overflow-hidden bg-[#021423]">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover pointer-events-none select-none"
                                        draggable="false"
                                    />
                                    {/* Glass Overlay Check - to match the look of the reference image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#021423]/40 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="flex justify-center mt-8">
                <div className="flex items-center gap-4 text-white/30 text-xs font-bold tracking-[0.2em] uppercase">
                    <div className="w-10 h-[1px] bg-white/20"></div>
                    Scroll to Explore
                    <div className="w-10 h-[1px] bg-white/20"></div>
                </div>
            </div>
        </section>
    );
};

export default TowTruckAppWalkThrough;
