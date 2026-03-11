import React from "react";
import Multiaboutimg from "../../../assets/delivery-multiservice-img/Multiabout.webp";
const AboutDelivery = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Top Badge */}
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        About Our App
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                    <span className="text-cyan-500">How Our On-Demand Delivery App</span>{" "}
                    <span className="text-gray-800">Helps Your Business</span>
                </h2>

                {/* Subheading */}
                <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16">
                    We help you meet customer demands and grow your business effortlessly
                    with our powerful all-in-one app.
                </p>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={Multiaboutimg}
                            alt="delivery app"
                            className="w-[420px] md:w-[480px] lg:w-[520px]"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="space-y-6 text-gray-600 leading-relaxed text-[17px]">

                        <p>
                            Delivery at home has become a necessity in our fast-paced lives.
                            Whether it’s food, groceries, medicine, or daily essentials,
                            people prefer getting everything at their doorstep. Businesses are
                            taking advantage of this growing demand by launching their own
                            on-demand delivery services.
                        </p>

                        <p>
                            If you are looking to grow your delivery business, having a robust,
                            feature-rich app is a must. Our on-demand delivery app is designed
                            to simplify operations so you can manage orders efficiently.
                        </p>

                        <p>
                            It provides a smooth experience to both businesses and customers.
                            The delivery anything app has an intuitive interface, with features
                            like real-time tracking and multiple payment options, which helps
                            you improve customer satisfaction.
                        </p>

                        <p>
                            At White Label Fox, we create powerful Android and iOS apps
                            designed for your business success. No matter what you deliver,
                            groceries, meat, water, or anything else, our on-demand delivery
                            system is built to support your business growth.
                        </p>

                        <p>
                            With scalable solutions and seamless technology, we help you stay
                            ahead in the competitive delivery market. Let us turn your vision
                            into reality with a custom-built app tailored to your needs.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutDelivery;