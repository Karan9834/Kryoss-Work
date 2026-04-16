import React from 'react';

// Import Niche Images
import dogWalking from "../../assets/transport-uber-img/dog-walking-app.webp";
import foodDelivery from "../../assets/transport-uber-img/food-delivery-app.webp";
import groceryDelivery from "../../assets/transport-uber-img/grocery-delivery-app.webp";
import handyman from "../../assets/transport-uber-img/handyman.webp";
import tutor from "../../assets/transport-uber-img/uber-tutor.webp";
import beauty from "../../assets/transport-uber-img/uber-beauty.webp";
import towTruck from "../../assets/transport-uber-img/uber-tow-truck.webp";
import electrician from "../../assets/transport-uber-img/uber-for-electrician.webp";

const UberIndustries = () => {
    const industries = [
        {
            title: "Vyom For Pet Assistance",
            description: "A secure framework featuring an intuitive interface for pet care, helping you manage companion assistance from a centralized hub.",
            bgColor: "bg-[#fffbeb]",
            titleColor: "text-[#b28e2a]",
            image: dogWalking,
        },
        {
            title: "Vyom For Culinary Delivery",
            description: "Gain independence from external aggregators. Establish your own gourmet delivery network with total structural control.",
            bgColor: "bg-[#fff6ef]",
            titleColor: "text-[#c26d2b]",
            image: foodDelivery,
        },
        {
            title: "Vyom For Essential Goods",
            description: "Modernize regional retail or supermarket operations with a high-performance logistics framework for household supplies.",
            bgColor: "bg-[#f0f9f1]",
            titleColor: "text-[#2d8a3c]",
            image: groceryDelivery,
        },
        {
            title: "Vyom Maintenance Support",
            description: "Managing technical home services is complex. Streamline your operational flow with our specialized maintenance interface.",
            bgColor: "bg-[#f0f7ff]",
            titleColor: "text-[#2e68a1]",
            image: handyman,
        },
        {
            title: "Vyom Academic Portal",
            description: "Whether managing specialized local tutoring or global educational scaling, our platform maintains elite pedagogical standards.",
            bgColor: "bg-[#f8f5ff]",
            titleColor: "text-[#7b5db3]",
            image: tutor,
        },
        {
            title: "Vyom Wellness & Beauty",
            description: "Empower your aesthetic enterprise with a sophisticated scheduling engine that drives repeat engagement and visibility.",
            bgColor: "bg-[#fff1f5]",
            titleColor: "text-[#be3d5e]",
            image: beauty,
        },
        {
            title: "Vyom Vehicle Recovery",
            description: "Transition from manual dispatching to a high-precision assistance platform for your specialized towing fleet operations.",
            bgColor: "bg-[#f0f4ff]",
            titleColor: "text-[#2e57a1]",
            image: towTruck,
        },
        {
            title: "Vyom Technical Services",
            description: "With our advanced electrical service framework, you achieve granular oversight and superior quality assurance for your technicians.",
            bgColor: "bg-[#fff1ed]",
            titleColor: "text-[#be423d]",
            image: electrician,
        }
    ];

    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1 mb-6">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <span className="text-gray-800 text-[13px] font-medium tracking-wide">Industries We Support</span>
                    </div>

                    <h2 className="text-3xl md:text-[42px] leading-tight md:leading-[52px] font-bold text-[#141414] mb-6">
                        Adapt the Core Mobility Architecture to Any Vertical Ecosystem
                    </h2>

                    <p className="text-gray-600 text-sm md:text-[16px] leading-[26px] max-w-5xl mx-auto">
                        The elite mobility framework is no longer restricted to traditional transit. We power a
                        diverse spectrum of service-centric enterprises. Each functional element is meticulously
                        refined to match your specific operational dynamics, resulting in a niche-optimized
                        solution destined for market leadership.
                    </p>
                </div>

                {/* Industries Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6">
                    {/* Row 1: Dog Walking (2 cols), Food Delivery (4 cols) */}
                    <div className={`${industries[0].bgColor} p-8 rounded-[32px] md:col-span-2 flex flex-col justify-between overflow-hidden relative min-h-[330px]`}>
                        <div className="relative z-10">
                            <h3 className={`${industries[0].titleColor} text-[24px] font-bold mb-4`}>{industries[0].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed max-w-[280px]">{industries[0].description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full px-4 transform translate-y-4 transition-transform group-hover:translate-y-2">
                            <img src={industries[0].image} alt={industries[0].title} className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    <div className={`${industries[1].bgColor} p-8 rounded-[32px] md:col-span-4 flex flex-col md:flex-row justify-between overflow-hidden relative min-h-[330px]`}>
                        <div className="md:w-1/2 relative z-10 ">
                            <h3 className={`${industries[1].titleColor} text-[24px] font-bold mb-4`}>{industries[1].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed pr-8">{industries[1].description}</p>
                        </div>
                        <div className="md:w-1/2 h-full flex items-center justify-end">
                            <img src={industries[1].image} alt={industries[1].title} className="w-full h-auto object-contain scale-130 md:translate-x-12" />
                        </div>
                    </div>

                    {/* Row 2: Grocery (2 cols, span 2 rows), Handyman (2 cols), Tutor (2 cols) */}
                    <div className={`${industries[2].bgColor} p-8 rounded-[32px] md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden relative min-h-[500px]`}>
                        <div className="relative z-10">
                            <h3 className={`${industries[2].titleColor} text-[24px] font-bold mb-4`}>{industries[2].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed">{industries[2].description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end">
                            <img src={industries[2].image} alt={industries[2].title} className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    <div className={`${industries[3].bgColor} p-8 rounded-[32px] md:col-span-2 flex flex-col justify-between overflow-hidden relative min-h-[300px]`}>
                        <div className="relative z-10">
                            <h3 className={`${industries[3].titleColor} text-[24px] font-bold mb-4`}>{industries[3].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed">{industries[3].description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end px-4">
                            <img src={industries[3].image} alt={industries[3].title} className="max-h-48 w-auto object-contain" />
                        </div>
                    </div>

                    <div className={`${industries[4].bgColor} p-8 rounded-[32px] md:col-span-2 flex flex-col justify-between overflow-hidden relative min-h-[300px]`}>
                        <div className="relative z-10">
                            <h3 className={`${industries[4].titleColor} text-[24px] font-bold mb-4`}>{industries[4].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed">{industries[4].description}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end px-4">
                            <img src={industries[4].image} alt={industries[4].title} className="max-h-48 w-auto object-contain" />
                        </div>
                    </div>

                    {/* Row 3: Beauty (4 cols) */}
                    <div className={`${industries[5].bgColor} p-8 rounded-[32px] md:col-span-4 flex flex-col md:flex-row justify-between overflow-hidden relative min-h-[350px]`}>
                        <div className="md:w-1/2 relative z-10 ">
                            <h3 className={`${industries[5].titleColor} text-[24px] font-bold mb-4`}>{industries[5].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed">{industries[5].description}</p>
                        </div>
                        <div className="md:w-1/2 h-full flex items-center justify-end">
                            <img src={industries[5].image} alt={industries[5].title} className="max-w-[120%] h-auto object-contain scale-110 translate-x-10" />
                        </div>
                    </div>

                    {/* Row 4: Tow Truck (3 cols), Electrician (3 cols) */}
                    <div className={`${industries[6].bgColor} p-8 rounded-[32px] md:col-span-3 flex flex-col md:flex-row justify-between overflow-hidden relative min-h-[300px]`}>
                        <div className="md:w-1/2 relative z-10 ">
                            <h3 className={`${industries[6].titleColor} text-[24px] font-bold mb-4`}>{industries[6].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed">{industries[6].description}</p>
                        </div>
                        <div className="md:w-1/2 h-full flex items-center justify-end">
                            <img src={industries[6].image} alt={industries[6].title} className="w-full h-auto object-contain scale-110" />
                        </div>
                    </div>

                    <div className={`${industries[7].bgColor} p-8 rounded-[32px] md:col-span-3 flex flex-col md:flex-row justify-between overflow-hidden relative min-h-[300px]`}>
                        <div className="md:w-1/2 relative z-10 ">
                            <h3 className={`${industries[7].titleColor} text-[24px] font-bold mb-4`}>{industries[7].title}</h3>
                            <p className="text-gray-700 text-[15.5px] leading-relaxed">{industries[7].description}</p>
                        </div>
                        <div className="md:w-1/2 h-full flex items-center justify-end">
                            <img src={industries[7].image} alt={industries[7].title} className="h-full w-auto object-contain translate-x-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UberIndustries;
