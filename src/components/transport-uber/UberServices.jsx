import React, { useState, useRef, useEffect } from 'react';
import Uberservice1 from '../../assets/transport-uber-img/Uberservice1.webp';
import Uberservice2 from '../../assets/transport-uber-img/Uberservice2.webp';
import Uberservice3 from '../../assets/transport-uber-img/Uberservice3.webp';
import Uberservice4 from '../../assets/transport-uber-img/Uberservice4.webp';
import Uberservice5 from '../../assets/transport-uber-img/Uberservice5.webp';
import Uberservice6 from '../../assets/transport-uber-img/Uberservice6.webp';
const services = [
    {
        id: 1,
        title: "Taxi Ride",
        description: "No complicated steps. Offer your customers easy access to your taxi ride services through a user-friendly platform.",
        tags: ["On-Demand Rides", "Real-Time Tracking", "Instant Booking", "Secure Payments", "Urban Mobility", "Daily Commutes"],
        bgColor: "from-[#29224d] to-[#120e26]",
        image: Uberservice1
    },
    {
        id: 2,
        title: "Intercity Service",
        description: "Allow your customers to book long-distance travel with fixed and scheduled fare pricing options.",
        tags: ["Long-Distance Travel", "City-to-City Rides", "Scheduled Trips", "Auto Toll", "Comfortable Journeys"],
        bgColor: "from-[#064e40] to-[#022c22]",
        image: Uberservice2
    },
    {
        id: 3,
        title: "Bike Ride",
        description: "Grab a smart way to attract price-sensitive customers looking to avoid traffic in busy urban areas.",
        tags: ["Low-Cost Rides", "Two-Wheeler", "Quick Travel", "Traffic Friendly", "Short Trips", "Urban Speed"],
        bgColor: "from-[#0f172a] to-[#1e293b]",
        image: Uberservice3
    },
    {
        id: 4,
        title: "Taxi Bidding",
        description: "Empower users and drivers to negotiate fares in real-time. A unique bidding system that ensures fair pricing.",
        tags: ["Real-time Bidding", "Fare Negotiation", "Driver Selection", "Cost-Effective", "Marketplace Model"],
        bgColor: "from-[#2e1065] to-[#4c1d95]",
        image: Uberservice4
    },
    {
        id: 5,
        title: "Taxi Pool",
        description: "Reduce travel costs and carbon footprint by sharing rides. Perfect for regular commuters.",
        tags: ["Shared Rides", "Eco-Friendly", "Cost Saving", "Route Matching", "Social Commute"],
        bgColor: "from-[#450a0a] to-[#7f1d1d]",
        image: Uberservice5
    },
    {
        id: 6,
        title: "Car Rental",
        description: "Book vehicles for hours or days. Chauffeur-driven or self-drive options available.",
        tags: ["Hourly Rental", "Daily Rental", "Self-Drive", "Outstation", "Corporate Travel"],
        bgColor: "from-[#083344] to-[#164e63]",
        image: Uberservice6
    }
];

const UberServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);

    const handleNext = () => {
        setDragOffset(0);
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const handlePrev = () => {
        setDragOffset(0);
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const onMouseDown = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        dragStartX.current = e.clientX || e.touches?.[0].clientX;
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        const currentX = e.clientX || e.touches?.[0].clientX;
        const diff = currentX - dragStartX.current;
        setDragOffset(diff);

        if (Math.abs(diff) > 200) {
            if (diff < 0) handleNext();
            else handlePrev();
            setIsDragging(false);
        }
    };

    const onMouseUp = (e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        setIsDragging(false);
        setDragOffset(0);
    };

    return (
        <section className="py-24 bg-white overflow-x-hidden select-none relative z-10 w-full">
            <div className="max-w-[1440px] mx-auto px-4">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-1.5 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <span className="text-gray-800 text-[13px] font-medium tracking-wide">Fox-Taxi App Services</span>
                    </div>
                </div>

                {/* Title - Optimized for single row on desktop without cutting */}
                <div className="text-center mb-12 md:mb-20 px-4">
                    <h2 className="text-2xl md:text-3xl lg:text-[40px] leading-tight font-bold text-[#141414] max-w-[1240px] mx-auto tracking-tight">
                        All-in-one Taxi Booking App like Uber to Address All Your Business Needs!
                    </h2>
                </div>

                {/* Stacked Cards Container */}
                <div className="relative h-[650px] md:h-[600px] max-w-[1280px] mx-auto flex items-center justify-center touch-none">
                    {services.map((service, index) => {
                        let offset = index - currentIndex;
                        if (offset < 0) offset += services.length;

                        const isVisible = offset <= 3;
                        if (!isVisible) return null;

                        const isActive = offset === 0;

                        return (
                            <div
                                key={service.id}
                                onMouseDown={isActive ? onMouseDown : undefined}
                                onTouchStart={isActive ? onMouseDown : undefined}
                                onMouseMove={isActive ? onMouseMove : undefined}
                                onTouchMove={isActive ? onMouseMove : undefined}
                                onMouseUp={isActive ? onMouseUp : undefined}
                                onTouchEnd={isActive ? onMouseUp : undefined}
                                className={`absolute h-full w-full rounded-[35px] md:rounded-[50px] p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20 overflow-hidden shadow-2xl bg-gradient-to-br ${service.bgColor} transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]`}
                                style={{
                                    zIndex: 10 - offset,
                                    transform: isActive
                                        ? `translateX(${dragOffset}px) scale(1) rotate(${dragOffset / 40}deg)`
                                        : `translateX(${offset * 25}px) scale(${1 - offset * 0.05}) rotate(${offset * 1}deg)`,
                                    opacity: 1 - (offset * 0.2),
                                    cursor: isActive ? (isDragging ? 'grabbing' : 'grab') : 'default',
                                    pointerEvents: isActive ? 'auto' : 'none'
                                }}
                            >
                                {/* Left: Service Phone Image */}
                                <div className="w-full md:w-[45%] h-[40%] md:h-full flex items-center justify-center relative">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-white/5 rounded-full pointer-events-none"></div>
                                </div>

                                {/* Right: Card Content */}
                                <div className="w-full md:w-[55%] text-white flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-6 tracking-tight leading-none">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">
                                        {service.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-10">
                                        {service.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-white/10 backdrop-blur-sm border border-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Swipe Gesture Indicator */}
                                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-3 opacity-40">
                                        <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                        </svg>
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5,11H13v4a1,1,0,0,1-2,0V13H7a1,1,0,0,1,0-2h4V7a1,1,0,0,1,2,0v4h4a1,1,0,0,1,0,2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2.5 mt-10 md:mt-16">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-12 bg-black' : 'w-2 bg-gray-200'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UberServices;
