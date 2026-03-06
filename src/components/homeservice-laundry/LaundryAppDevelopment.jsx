import React, { useState, useRef, useEffect } from 'react';

const LaundryAppDevelopment = () => {
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
        { id: 1, title: 'Welcome Screen', src: 'https://placehold.co/375x812/003d3a/FFFFFF?text=Welcome+Screen' },
        { id: 2, title: 'Select Package', src: 'https://placehold.co/375x812/003d3a/FFFFFF?text=Select+Package' },
        { id: 3, title: 'Select Clothes', src: 'https://placehold.co/375x812/003d3a/FFFFFF?text=Select+Clothes' },
        { id: 4, title: 'Schedule Order', src: 'https://placehold.co/375x812/003d3a/FFFFFF?text=Schedule+Order' },
        { id: 5, title: 'Checkout', src: 'https://placehold.co/375x812/003d3a/FFFFFF?text=Checkout' },
        { id: 6, title: 'Track Order', src: 'https://placehold.co/375x812/003d3a/FFFFFF?text=Track+Order' },
    ];

    const providerScreenshots = [
        { id: 1, title: 'New Requests', src: 'https://placehold.co/375x812/002b28/FFFFFF?text=New+Requests' },
        { id: 2, title: 'Order Details', src: 'https://placehold.co/375x812/002b28/FFFFFF?text=Order+Details' },
        { id: 3, title: 'Pickup Task', src: 'https://placehold.co/375x812/002b28/FFFFFF?text=Pickup+Task' },
        { id: 4, title: 'Earnings', src: 'https://placehold.co/375x812/002b28/FFFFFF?text=Earnings' },
        { id: 5, title: 'Settings', src: 'https://placehold.co/375x812/002b28/FFFFFF?text=Settings' },
    ];

    const currentScreenshots = activeTab === 'customer' ? customerScreenshots : providerScreenshots;

    // Multiple sets to allow for smooth infinite scrolling
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
        <section className="py-24 bg-gradient-to-br from-[#001a18] via-[#002b28] to-[#001a18] relative overflow-x-hidden font-sans">
            {/* Background Texture/Overlay */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none opacity-[0.03]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex items-center gap-2 border border-[#18d4b0]/20 bg-white/5 px-4 py-1.5 rounded-full text-white/90 text-sm backdrop-blur-md">
                        <span className="w-2 h-2 bg-[#18d4b0] rounded-full animate-pulse"></span>
                        Laundry App Development at a Glance
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    A Glimpse of Our <span className="text-[#18d4b0]">Customer and Provider Laundry Apps</span>
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
                    Discover the user-friendly design of our customer and provider apps, crafted to ensure smooth service booking and efficient management.
                </p>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-20">
                    <div className="bg-white/5 p-1.5 rounded-full flex items-center border border-white/10 backdrop-blur-xl shadow-inner">
                        <button
                            onClick={() => setActiveTab('customer')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-500 font-medium ${activeTab === 'customer'
                                ? 'bg-white text-[#002b28] shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                                : 'text-white hover:bg-white/5 opacity-70 hover:opacity-100'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'customer' ? 'bg-[#002b28] animate-pulse' : 'bg-transparent'}`}></span>
                            Customer App
                        </button>
                        <button
                            onClick={() => setActiveTab('provider')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-500 font-medium ${activeTab === 'provider'
                                ? 'bg-white text-[#002b28] shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                                : 'text-white hover:bg-white/5 opacity-70 hover:opacity-100'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'provider' ? 'bg-[#002b28] animate-pulse' : 'bg-transparent'}`}></span>
                            Provider App
                        </button>
                    </div>
                </div>
            </div>

            {/* Screenshots Carousel */}
            <div className="relative w-full overflow-hidden">
                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#001a18] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#001a18] to-transparent z-20 pointer-events-none"></div>

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
                            <div className="bg-[#002b28] border-[5px] border-white/10 rounded-[45px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#18d4b0]/30">
                                <div className="relative aspect-[9/19] rounded-[38px] overflow-hidden bg-[#001a18]">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
                                        draggable="false"
                                    />
                                    {/* Glass Overlay Check - to match the look of the reference image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#001a18]/60 via-transparent to-transparent pointer-events-none"></div>

                                    {/* Device Refractions */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="flex justify-center mt-10">
                <div className="flex items-center gap-6 text-[#18d4b0]/40 text-xs font-bold tracking-[0.3em] uppercase">
                    <div className="w-12 h-[1px] bg-[#18d4b0]/20"></div>
                    Drag to Explore
                    <div className="w-12 h-[1px] bg-[#18d4b0]/20"></div>
                </div>
            </div>
        </section>
    );
};

export default LaundryAppDevelopment;
