import React from "react";
import Multiservice1 from "../../../assets/delivery-multiservice-img/Multiservice1.webp";
import Multiservice2 from "../../../assets/delivery-multiservice-img/Multiservice2.webp";
import Multiservice3 from "../../../assets/delivery-multiservice-img/Multiservice3.webp";
import Multiservice4 from "../../../assets/delivery-multiservice-img/Multiservice4.webp";
import Multiservice5 from "../../../assets/delivery-multiservice-img/Multiservice5.webp";
import Multiservice6 from "../../../assets/delivery-multiservice-img/Multiservice6.webp";
import Multiservice7 from "../../../assets/delivery-multiservice-img/Multiservice7.webp";
import Multiservice8 from "../../../assets/delivery-multiservice-img/Multiservice8.webp";
import Multiservice9 from "../../../assets/delivery-multiservice-img/Multiservice9.webp";
import Multiservice10 from "../../../assets/delivery-multiservice-img/Multiservice10.webp";
import Multiservice11 from "../../../assets/delivery-multiservice-img/Multiservice11.webp";
import Multiservice12 from "../../../assets/delivery-multiservice-img/Multiservice12.webp";
const Services = () => {
    return (
        <section className="w-full bg-white py-20 overflow-hidden">

            {/* HEADING */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">

                <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-600 mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Multipurpose Delivery Services
                </div>

                <h2 className="text-4xl font-semibold">
                    <span className="text-cyan-500">Services We Offer</span>{" "}
                    in FOX-DELIVERY ANYTHING App
                </h2>

                <p className="text-gray-500 max-w-3xl mx-auto mt-4">
                    Our delivery anything app is designed to serve all your delivery needs
                    with speed and efficiency across multiple categories.
                </p>
            </div>

            {/* TOP ROW */}
            <div className="overflow-hidden group mb-12">
                <div className="flex gap-8 min-w-max animate-scroll-left group-hover:[animation-play-state:paused]">

                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-8 min-w-[900px]">

                            {/* BIG CARD */}
                            <div className="w-[260px] h-[320px] bg-blue-100 rounded-2xl p-6 flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Medicine Delivery</h3>
                                <img src={Multiservice1} className="w-full object-contain" />
                            </div>

                            {/* STACK */}
                            <div className="flex flex-col gap-6">
                                <div className="w-[260px] h-[150px] bg-pink-100 rounded-2xl p-6 flex justify-between">
                                    <h3>Flower Delivery</h3>
                                    <img src={Multiservice2} className="w-40 object-contain" />
                                </div>

                                <div className="w-[260px] h-[150px] bg-purple-100 rounded-2xl p-6 flex justify-between">
                                    <h3>Stationary Delivery</h3>
                                    <img src={Multiservice3} className="w-40 object-contain" />
                                </div>
                            </div>

                            {/* BIG CARD */}
                            <div className="w-[260px] h-[320px] bg-red-100 rounded-2xl p-6 flex flex-col justify-between">
                                <h3 className="text-xl font-semibold">Food Delivery</h3>
                                <img src={Multiservice4} className="w-full object-contain" />
                            </div>

                            {/* STACK */}
                            <div className="flex flex-col gap-6">
                                <div className="w-[260px] h-[150px] bg-green-100 rounded-2xl p-6 flex justify-between">
                                    <h3>Fuel Delivery</h3>
                                    <img src={Multiservice5} className="w-40 object-contain" />
                                </div>

                                <div className="w-[260px] h-[150px] bg-red-100 rounded-2xl p-6 flex justify-between">
                                    <h3>Meat Delivery</h3>
                                    <img src={Multiservice6} className="w-40 object-contain" />
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="overflow-hidden group">
                <div className="flex gap-8 min-w-max animate-scroll-right group-hover:[animation-play-state:paused]">

                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-8 min-w-[900px]">

                            <div className="w-[260px] h-[320px] bg-yellow-100 rounded-2xl p-6 flex flex-col justify-between">
                                <h3>Courier Delivery</h3>
                                <img src={Multiservice7} />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="w-[260px] h-[150px] bg-orange-100 rounded-2xl p-6 flex justify-between">
                                    <h3>Pizza Delivery</h3>
                                    <img src={Multiservice8} className="w-20" />
                                </div>

                                <div className="w-[260px] h-[150px] bg-blue-100 rounded-2xl p-6 flex justify-between">
                                    <h3>Water Delivery</h3>
                                    <img src={Multiservice9} className="w-20" />
                                </div>
                            </div>

                            <div className="w-[260px] h-[320px] bg-green-100 rounded-2xl p-6 flex flex-col justify-between">
                                <h3>Alcohol Delivery</h3>
                                <img src={Multiservice10} />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="w-[260px] h-[150px] bg-green-200 rounded-2xl p-6 flex justify-between">
                                    <h3>Marijuana Delivery</h3>
                                    <img src={Multiservice11} className="w-20" />
                                </div>

                                <div className="w-[260px] h-[150px] bg-green-100 rounded-2xl p-6 flex justify-between">
                                    <h3>Grocery Delivery</h3>
                                    <img src={Multiservice12} className="w-20" />
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Services;