import React from "react";

const LaundryBenefit = () => {
    return (
        <section className="py-12 bg-white">

            {/* heading */}
            <div className="max-w-6xl mx-auto text-center px-6 mb-16">

                <span className="border rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                    Customer Benefit
                </span>

                <h2 className="text-4xl font-semibold mb-4">
                    How Our <span className="text-teal-700">Laundry App</span> Development
                    Benefits Your Customers
                </h2>

                <p className="text-gray-600 max-w-4xl mx-auto">
                    Our on-demand laundry app development solution offers seamless
                    services for both laundry and dry cleaning businesses. Designed for
                    simplicity, efficiency, and scalability, this app ensures a smooth
                    experience for customers from booking to delivery.
                </p>

            </div>


            {/* main container */}
            <div className="max-w-7xl mx-auto px-6">

                <div className="relative rounded-3xl overflow-hidden">

                    {/* background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2b2b2b] via-[#1c1c1c] to-[#1a5f63]"></div>

                    {/* right side design */}
                    <div className="absolute right-0 top-0 h-full w-[45%] opacity-30 
          bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0,_transparent_70%)]">
                    </div>


                    {/* content */}
                    <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-16">

                        <div className="text-white space-y-8 leading-relaxed">

                            <p>
                                <strong>Effortless Booking & Scheduling:</strong> Customers can
                                easily schedule laundry or dry cleaning services at their
                                convenience, all through a few taps on their phones. The
                                user-friendly interface simplifies the booking process,
                                allowing them to choose a time that best suits their schedule.
                            </p>

                            <p>
                                <strong>Real-Time Order Tracking:</strong> With our on-demand
                                laundry app, customers can track their orders in real time,
                                from pick-up to delivery. This ensures transparency and keeps
                                customers informed about the status of their laundry.
                            </p>

                            <p>
                                <strong>Multiple Payment Options:</strong> Our laundry delivery
                                app includes flexible payment options, allowing customers to
                                choose their preferred method—credit card, debit card, or
                                digital wallets.
                            </p>

                            <p>
                                <strong>Convenient Doorstep Service:</strong> No need to step
                                out of the house! With doorstep pick-up and delivery, customers
                                can enjoy the convenience of having their laundry collected
                                and returned directly to their door.
                            </p>

                            <p>
                                <strong>24/7 Availability:</strong> Customers can book services
                                anytime, whether it's day or night. The on-demand laundry app
                                provides a round-the-clock solution to their laundry needs.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LaundryBenefit;