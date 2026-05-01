import React from "react";
import Multiworkingappimg from "../../../assets/delivery-multiservice-img/Multiworking.webp";
const WorkingApp = () => {
    return (
        <section className="w-full bg-[#061417] text-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

                {/* LEFT CONTENT */}
                <div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-gray-500 rounded-full px-4 py-1 text-sm text-gray-300 mb-6">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Working of App
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                        <span className="text-white">How Does On-Demand</span>
                        <br />
                        <span className="text-cyan-400">Delivery App Work?</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 max-w-xl">
                        An on-demand delivery app connects customers, businesses, and
                        delivery providers in a seamless and efficient way. Let’s see how
                        it works:
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-4 text-gray-300 max-w-xl list-disc pl-5">

                        <li>
                            Users, stores, and delivery providers can quickly sign up or log
                            in using email, phone, or social media to access the app.
                        </li>

                        <li>
                            Users will start browsing the app, select products or services,
                            and place an order with their preferred payment option.
                        </li>

                        <li>
                            The seller or service provider receives the order, prepares it,
                            and updates the status in the app in real-time.
                        </li>

                        <li>
                            A nearby delivery agent gets assigned, picks up the order, and
                            heads toward the customer's location.
                        </li>

                        <li>
                            Customers can track their order in real-time and receive
                            notifications about their delivery status.
                        </li>

                        <li>
                            The delivery agent hands over the order, and customers can rate
                            their experience, which helps improve service quality.
                        </li>

                    </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end">

                    {/* Glow background */}
                    <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-[140px] opacity-20"></div>

                    {/* Image Placeholder */}
                    <img
                        src={Multiworkingappimg}
                        alt="working app"
                        className="relative z-10 w-[420px] md:w-[380px] lg:w-[650px] lg:translate-x-30"
                    />

                </div>

            </div>
        </section>
    );
};

export default WorkingApp;