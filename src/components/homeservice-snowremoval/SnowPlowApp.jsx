import React, { useState, useRef, useEffect } from 'react';
import Snowuser1 from "../../assets/homeservice-snow-img/Snowuser1.webp";
import Snowuser2 from "../../assets/homeservice-snow-img/Snowuser2.webp";
import Snowuser3 from "../../assets/homeservice-snow-img/Snowuser3.webp";
import Snowuser4 from "../../assets/homeservice-snow-img/Snowuser4.webp";
import Snowuser5 from "../../assets/homeservice-snow-img/Snowuser5.webp";
import Snowuser6 from "../../assets/homeservice-snow-img/Snowuser6.webp";
import Snowuser7 from "../../assets/homeservice-snow-img/Snowuser7.webp";

import Snowprovider1 from "../../assets/homeservice-snow-img/Snowprovider1.webp";
import Snowprovider2 from "../../assets/homeservice-snow-img/Snowprovider2.webp";
import Snowprovider3 from "../../assets/homeservice-snow-img/Snowprovider3.webp";
import Snowprovider4 from "../../assets/homeservice-snow-img/Snowprovider4.webp";
import Snowprovider5 from "../../assets/homeservice-snow-img/Snowprovider5.webp";
import Snowprovider6 from "../../assets/homeservice-snow-img/Snowprovider6.webp";
import Snowprovider7 from "../../assets/homeservice-snow-img/Snowprovider7.webp";
const SnowPlowApp = () => {
    const [activeTab, setActiveTab] = useState('user');
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const dragData = useRef({
        startX: 0,
        scrollLeft: 0,
        isDown: false
    });

    const userScreenshots = [
        { id: 1, title: 'Select Service Time', src: Snowuser1 },
        { id: 2, title: 'Browse Providers', src: Snowuser2 },
        { id: 3, title: 'User Profile', src: Snowuser3 },
        { id: 4, title: 'Select Package', src: Snowuser4 },
        { id: 5, title: 'Review', src: Snowuser5 },
        { id: 6, title: 'Gallery', src: Snowuser6 },
        { id: 7, title: 'Checkout', src: Snowuser7 },


    ];

    const providerScreenshots = [
        { id: 1, title: 'Profile', src: Snowprovider1 },
        { id: 2, title: 'Add Package', src: Snowprovider2 },
        { id: 3, title: 'Details', src: Snowprovider3 },
        { id: 4, title: 'Services', src: Snowprovider4 },
        { id: 5, title: 'Orders', src: Snowprovider5 },
        { id: 6, title: 'Order deatils', src: Snowprovider6 },
        { id: 7, title: 'Order history', src: Snowprovider7 },
    ];

    const currentScreenshots = activeTab === 'user' ? userScreenshots : providerScreenshots;
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

    useEffect(() => {
        if (scrollRef.current) {
            const totalItemsWidth = scrollRef.current.scrollWidth / 5;
            scrollRef.current.scrollLeft = totalItemsWidth * 2;
        }
    }, [activeTab]);

    return (
        <section className="py-24 bg-gradient-to-br from-[#020d1f] via-[#041535] to-[#020d1f] relative overflow-x-hidden font-sans">
            {/* Background dot grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Badge */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex items-center gap-2 border border-[#49c5d4]/20 bg-white/5 px-4 py-1.5 rounded-full text-white/90 text-sm backdrop-blur-md">
                        <span className="w-2 h-2 bg-[#49c5d4] rounded-full animate-pulse"></span>
                        Snow Plow App At A Glance
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Explore the Power of <span className="text-[#49c5d4]">User &amp; Provider Apps</span>
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
                    Our Uber Snow Plow Service App Solution features dedicated apps for users and providers. These apps are designed to streamline snow removal services, offering seamless booking for users and effortless job management for providers.
                </p>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-20">
                    <div className="bg-white/5 p-1.5 rounded-full flex items-center border border-white/10 backdrop-blur-xl shadow-inner">
                        <button
                            onClick={() => setActiveTab('user')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-500 font-medium ${activeTab === 'user'
                                ? 'bg-white text-[#041535] shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                                : 'text-white hover:bg-white/5 opacity-70 hover:opacity-100'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'user' ? 'bg-[#2f8ccf] animate-pulse' : 'bg-transparent'}`}></span>
                            User App
                        </button>
                        <button
                            onClick={() => setActiveTab('provider')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-500 font-medium ${activeTab === 'provider'
                                ? 'bg-white text-[#041535] shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                                : 'text-white hover:bg-white/5 opacity-70 hover:opacity-100'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'provider' ? 'bg-[#2f8ccf] animate-pulse' : 'bg-transparent'}`}></span>
                            Provider App
                        </button>
                    </div>
                </div>
            </div>

            {/* Screenshots Carousel */}
            <div className="relative w-full overflow-hidden">
                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020d1f] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020d1f] to-transparent z-20 pointer-events-none"></div>

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
                            <div className="bg-[#041535] border-[5px] border-white/10 rounded-[45px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#49c5d4]/30">
                                <div className="relative aspect-[9/19] rounded-[38px] overflow-hidden bg-[#020d1f]">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover pointer-events-none select-none"
                                        draggable="false"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020d1f]/60 via-transparent to-transparent pointer-events-none"></div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
                                </div>
                            </div>
                            <p className="text-center text-white/50 text-sm mt-4 font-medium tracking-wide">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="flex justify-center mt-10">
                <div className="flex items-center gap-6 text-[#49c5d4]/40 text-xs font-bold tracking-[0.3em] uppercase">
                    <div className="w-12 h-[1px] bg-[#49c5d4]/20"></div>
                    Drag to Explore
                    <div className="w-12 h-[1px] bg-[#49c5d4]/20"></div>
                </div>
            </div>
        </section>
    );
};

export default SnowPlowApp;
