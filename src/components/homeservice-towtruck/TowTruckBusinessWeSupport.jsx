import React from 'react';

// Import Niche Images
import dogWalking from "../../assets/transport-uber-img/dog-walking-app.webp";
import foodDelivery from "../../assets/transport-uber-img/food-delivery-app.webp";
import groceryDelivery from "../../assets/transport-uber-img/grocery-delivery-app.webp";
import homecleaning from "../../assets/homeservice-towtruck-img/Tow-homecleaning.webp";
import tutor from "../../assets/transport-uber-img/uber-tutor.webp";
import beauty from "../../assets/transport-uber-img/uber-beauty.webp";
import towTaxi from "../../assets/homeservice-towtruck-img/Tow-taxi.webp";
import electrician from "../../assets/transport-uber-img/uber-for-electrician.webp";

const TowTruckBusinessWeSupport = () => {
    const industries = [
        {
            title: " Dog Walking App",
            description: "Launch a dog walking service with ease, offering pet owners an efficient platform to book walks for their pets.",
            bgColor: "bg-[#fffbeb]",
            titleColor: "text-[#b28e2a]",
            image: dogWalking,
        },
        {
            title: " Food Delivery App",
            description: "Create a seamless food delivery experience, allowing restaurants and customers to connect instantly.",
            bgColor: "bg-[#fff6ef]",
            titleColor: "text-[#c26d2b]",
            image: foodDelivery,
        },
        {
            title: " Grocery Delivery App",
            description: "Provide an easy way for users to shop for groceries and have them delivered to their doorstep.",
            bgColor: "bg-[#f0f9f1]",
            titleColor: "text-[#2d8a3c]",
            image: groceryDelivery,
        },
        {
            title: "Home Cleaning Service",
            description: "Offer a reliable platform for booking home cleaning services, connecting users with skilled cleaners.",
            bgColor: "bg-[#f0f7ff]",
            titleColor: "text-[#2e68a1]",
            image: homecleaning,
        },
        {
            title: "Uber tutor",
            description: "Revolutionize tutoring services by offering students an easy way to book professional tutors.",
            bgColor: "bg-[#f8f5ff]",
            titleColor: "text-[#7b5db3]",
            image: tutor,
        },
        {
            title: "Uber Beauty",
            description: "Set up a beauty service booking platform, allowing users to book at-home beauty treatments and services.",
            bgColor: "bg-[#fff1f5]",
            titleColor: "text-[#be3d5e]",
            image: beauty,
        },
        {
            title: "Uber For Taxi",
            description: "Launch a taxi-hailing service with a powerful app, providing users with a convenient and reliable way to book rides.",
            bgColor: "bg-[#f0f4ff]",
            titleColor: "text-[#2e57a1]",
            image: towTaxi,
        },
        {
            title: "Uber For Electrician",
            description: "Provide customers with a quick and easy way to book electricians for their home or office needs.",
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
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-gray-800 text-[13px] font-medium tracking-wide">Industries We Support</span>
                    </div>

                    <h2 className="text-3xl md:text-[42px] leading-tight md:leading-[52px] font-bold text-[#141414] mb-6">
                        Explore Our <span className="text-blue-500">Diverse Range</span> of On-Demand Apps
                    </h2>

                    <p className="text-gray-600 text-sm md:text-[16px] leading-[26px] max-w-5xl mx-auto">
                        We offer a variety of ready-to-launch, customizable on-demand apps to suit your business needs. From Dog Walking to Grocery Delivery and Beauty Services, our solutions help you enter diverse industries quickly and efficiently.
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

export default TowTruckBusinessWeSupport;
