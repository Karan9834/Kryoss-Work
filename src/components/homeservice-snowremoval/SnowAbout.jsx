import React from "react";
import Snowabout from "../../assets/homeservice-snow-img/Snowabout.webp";

const SnowAboutUs = () => {
    return (
        <section className="bg-white py-24">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center lg:justify-start">

                    <img
                        src={Snowabout}
                        alt="snow plow app"
                        className="max-w-[520px] w-full object-contain"
                    />

                </div>


                {/* RIGHT CONTENT */}
                <div>

                    {/* small badge */}
                    <span className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-6">

                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>

                        About Snow Plow App Development

                    </span>


                    {/* heading */}
                    <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-8 leading-tight">

                        Launch Your <span className="text-blue-500">Snow Plow App</span> and
                        Lead the Winter Service Market

                    </h2>


                    {/* paragraphs */}
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

                        <p>
                            Winter often brings joy but also the challenge of heavy snow
                            blocking roads and driveways. Our snow plow app offers a
                            hassle-free solution for clearing snow efficiently.
                        </p>

                        <p>
                            The demand for snow removal services peaks during winter,
                            making it the perfect time to invest in an Uber-like snow
                            plow app. We ensure your app meets all industry needs with
                            top-notch features.
                        </p>

                        <p>
                            At White Label Fox, we create user-friendly and fully
                            customizable snow removal apps. Our solutions are tailored
                            to make your business unique and highly competitive.
                        </p>

                        <p>
                            Our Uber Snow Plow Service App works seamlessly on both
                            Android and iOS platforms. It’s designed to connect
                            customers with reliable snow removal services instantly.
                        </p>

                        <p>
                            Don’t wait for the competition to grow stronger. Get your
                            snow plow app live in just 5 days and start serving
                            customers this winter season!
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SnowAboutUs;