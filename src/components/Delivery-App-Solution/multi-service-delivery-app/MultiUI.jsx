import React, { useState, useRef, useEffect } from 'react';
import Multicustomer1 from "../../../assets/delivery-multiservice-img/Multicustomer1.webp";
import Multicustomer2 from "../../../assets/delivery-multiservice-img/Multicustomer2.webp";
import Multicustomer3 from "../../../assets/delivery-multiservice-img/Multicustomer3.webp";
import Multicustomer4 from "../../../assets/delivery-multiservice-img/Multicustomer4.webp";
import Multicustomer5 from "../../../assets/delivery-multiservice-img/Multicustomer5.webp";
import Multicustomer6 from "../../../assets/delivery-multiservice-img/Multicustomer6.webp";
import Multicustomer7 from "../../../assets/delivery-multiservice-img/Multicustomer7.webp";

import Multistore1 from "../../../assets/delivery-multiservice-img/Multistore1.webp";
import Multistore2 from "../../../assets/delivery-multiservice-img/Multistore2.webp";
import Multistore3 from "../../../assets/delivery-multiservice-img/Multistore3.webp";
import Multistore4 from "../../../assets/delivery-multiservice-img/Multistore4.webp";
import Multistore5 from "../../../assets/delivery-multiservice-img/Multistore5.webp";
import Multistore6 from "../../../assets/delivery-multiservice-img/Multistore6.webp";
import Multistore7 from "../../../assets/delivery-multiservice-img/Multistore7.webp";

import Multidriver1 from "../../../assets/delivery-multiservice-img/Multidriver1.webp";
import Multidriver2 from "../../../assets/delivery-multiservice-img/Multidriver2.webp";
import Multidriver3 from "../../../assets/delivery-multiservice-img/Multidriver3.webp";
import Multidriver4 from "../../../assets/delivery-multiservice-img/Multidriver4.webp";
import Multidriver5 from "../../../assets/delivery-multiservice-img/Multidriver5.webp";
import Multidriver6 from "../../../assets/delivery-multiservice-img/Multidriver6.webp";
import Multidriver7 from "../../../assets/delivery-multiservice-img/Multidriver7.webp";

const MultiUI = () => {
    const [activeTab, setActiveTab] = useState('customer');
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const dragData = useRef({
        startX: 0,
        scrollLeft: 0,
        isDown: false
    });

    const customerScreenshots = [
        { id: 1, title: 'Home Menu', src: Multicustomer1 },
        { id: 2, title: 'Choose Food', src: Multicustomer2 },
        { id: 3, title: 'Order', src: Multicustomer3 },
        { id: 4, title: 'Track Order', src: Multicustomer4 },
        { id: 5, title: 'Order Details', src: Multicustomer5 },
        { id: 6, title: 'Courier Details 1', src: Multicustomer6 },
        { id: 7, title: 'Courier Details 2', src: Multicustomer7 },
    ];

    const storeScreenshots = [
        { id: 1, title: 'Order Details 1', src: Multistore1 },
        { id: 2, title: 'Live Order', src: Multistore2 },
        { id: 3, title: 'Order Details 2', src: Multistore3 },
        { id: 4, title: 'Order History', src: Multistore4 },
        { id: 5, title: 'Settings', src: Multistore5 },
        { id: 6, title: 'Products', src: Multistore6 },
        { id: 7, title: 'Offers', src: Multistore7 },
    ];

    const driverScreenshots = [
        { id: 1, title: 'Courier Delivery', src: Multidriver1 },
        { id: 2, title: 'Courier Service Details', src: Multidriver2 },
        { id: 3, title: 'Driver App', src: Multidriver3 },
        { id: 4, title: 'Payment', src: Multidriver4 },
        { id: 5, title: 'On The Way', src: Multidriver5 },
        { id: 6, title: 'Order Details', src: Multidriver6 },
        { id: 7, title: 'Vehicle Details', src: Multidriver7 },
    ];

    const currentScreenshots =
        activeTab === 'customer' ? customerScreenshots :
            activeTab === 'store' ? storeScreenshots :
                driverScreenshots;

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
                        UI of App
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Explore the Layout of <span className="text-[#49c5d4]">Our Robust On-Demand Delivery App</span>
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
                    Our on-demand delivery app offers a simple and easy-to-use layout for customers, drivers, and stores.
                </p>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-20">
                    <div className="bg-white/5 p-1.5 rounded-full flex flex-col sm:flex-row items-center border border-white/10 backdrop-blur-xl shadow-inner gap-2 sm:gap-0">
                        <button
                            onClick={() => setActiveTab('customer')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 font-medium ${activeTab === 'customer'
                                ? 'bg-[#15b99a] text-white shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'customer' ? 'bg-white animate-pulse' : 'bg-transparent'}`}></span>
                            Customer App
                        </button>
                        <button
                            onClick={() => setActiveTab('store')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 font-medium ${activeTab === 'store'
                                ? 'bg-[#15b99a] text-white shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'store' ? 'bg-white animate-pulse' : 'bg-transparent'}`}></span>
                            Store App
                        </button>
                        <button
                            onClick={() => setActiveTab('driver')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 font-medium ${activeTab === 'driver'
                                ? 'bg-[#15b99a] text-white shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'driver' ? 'bg-white animate-pulse' : 'bg-transparent'}`}></span>
                            Driver App
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
                            className="min-w-[280px] md:min-w-[300px] snap-center"
                        >
                            <div className="bg-[#041535] border-[5px] border-white/10 rounded-[45px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#49c5d4]/30">
                                <div className="relative aspect-[9/19] rounded-[38px] overflow-hidden bg-[#020d1f] flex items-center justify-center">
                                    {item.src ? (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover pointer-events-none select-none"
                                            draggable="false"
                                        />
                                    ) : (
                                        <span className="text-gray-500 font-medium">Image Placeholder</span>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020d1f]/60 via-transparent to-transparent pointer-events-none"></div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
                                </div>
                            </div>

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

export default MultiUI;
