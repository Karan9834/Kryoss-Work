import React from "react";
import salonAbout from "@/assets/salon-booking-img/salonAbout.jpg";

const About = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">

                        <img src={salonAbout}
                            alt="Carpool App"
                            className="w-[500px] h-[500px] object-cover rounded-3xl" />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="order-1 lg:order-2 border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Salon Booking App
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            What is a <span className="text-blue-600">Salon Booking App?</span>
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            A Salon Booking App is a modern on-demand platform that connects
                            customers with professional beauty salons and stylists for various
                            grooming and wellness services. From haircuts and hairstyling to
                            skincare, makeup, and spa treatments, the app allows users to easily
                            discover salons, book appointments, and manage their beauty services
                            from a single convenient dashboard.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our Salon Booking App solution provides a ready-to-launch system for
                            salon owners, beauty businesses, and entrepreneurs who want to build
                            their own online salon marketplace. It includes essential features
                            like appointment scheduling, stylist management, service listings,
                            secure online payments, and automated customer notifications.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            With a fully customizable and scalable architecture, the platform can
                            easily adapt to different beauty services, multiple salon branches,
                            and various business models. This enables businesses to manage
                            appointments efficiently while providing a smooth and seamless
                            booking experience for customers.
                        </p>

                        {/* <p className="text-gray-600 leading-relaxed">
                            Whether you are launching a local salon booking platform, managing
                            multiple beauty studios, or expanding your beauty and wellness
                            business online, our Salon Booking App helps streamline appointment
                            management, improve customer engagement, and grow your beauty
                            business faster.
                        </p> */}
                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;