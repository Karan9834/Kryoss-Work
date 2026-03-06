import React from "react";

import Laundrystep1 from "../../assets/homeservice-laundry-img/Laundrystep1.webp";
import Laundrystep2 from "../../assets/homeservice-laundry-img/Laundrystep2.webp";
import Laundrystep3 from "../../assets/homeservice-laundry-img/Laundrystep3.webp";
import Laundrystep4 from "../../assets/homeservice-laundry-img/Laundrystep4.webp";
import Laundrystep5 from "../../assets/homeservice-laundry-img/Laundrystep5.webp";
import Laundrystep6 from "../../assets/homeservice-laundry-img/Laundrystep6.webp";
import Laundrystep7 from "../../assets/homeservice-laundry-img/Laundrystep7.webp";
import Laundrystep8 from "../../assets/homeservice-laundry-img/Laundrystep8.webp";

const steps = [
    { img: Laundrystep1, title: "1. Login/Signup" },
    { img: Laundrystep2, title: "2. Browse Nearest Provider" },
    { img: Laundrystep3, title: "3. Laundry Preferences" },
    { img: Laundrystep4, title: "4. Set Pickup & Delivery Time" },
    { img: Laundrystep5, title: "5. Provider will pickup clothes" },
    { img: Laundrystep6, title: "6. Laundry Processing" },
    { img: Laundrystep7, title: "7. Provider will deliver order" },
    { img: Laundrystep8, title: "8. Ratings, Reviews & Payment" }
];

const LaundryAppWorkflow = () => {
    return (
        <section className="py-12 bg-white">

            {/* Heading */}
            <div className="max-w-6xl mx-auto text-center mb-20 px-6">

                <span className="border rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                    App Workflow Overview
                </span>

                <h2 className="text-4xl font-semibold mb-4">
                    Graphical Workflow of the{" "}
                    <span className="text-teal-700">Laundry App</span>
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto">
                    See how our laundry app operates with a clear graphical flow.
                    From customer service requests to provider confirmations,
                    every step is optimized for smooth and efficient operations.
                </p>

            </div>

            {/* Workflow */}
            <div className="max-w-7xl mx-auto px-6 relative">

                <div className="grid md:grid-cols-4 gap-y-24 gap-x-10 text-center">

                    {steps.map((step, index) => (
                        <div key={index} className="relative">

                            <img
                                src={step.img}
                                alt=""
                                className="mx-auto mb-6 w-[220px]"
                            />

                            <h3 className="font-semibold text-lg text-[#0f3d3a]">
                                {step.title}
                            </h3>

                        </div>
                    ))}

                </div>

                {/* Arrow Connections */}

                {/* row 1 arrows */}
                <svg className="hidden lg:block absolute top-[160px] left-[12%]" width="200" height="80">
                    <path d="M0 40 C80 0 120 80 200 40" stroke="#69a8a3" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                </svg>

                <svg className="hidden lg:block absolute top-[160px] left-[38%]" width="200" height="80">
                    <path d="M0 40 C80 0 120 80 200 40" stroke="#69a8a3" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                </svg>

                <svg className="hidden lg:block absolute top-[160px] left-[64%]" width="200" height="80">
                    <path d="M0 40 C80 0 120 80 200 40" stroke="#69a8a3" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                </svg>

                {/* middle connector */}
                <div className="hidden lg:block absolute top-[300px] left-1/2 w-[2px] h-[120px] bg-gray-300"></div>

                {/* row 2 arrows */}
                <svg className="hidden lg:block absolute bottom-[140px] left-[12%]" width="200" height="80">
                    <path d="M200 40 C120 80 80 0 0 40" stroke="#69a8a3" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                </svg>

                <svg className="hidden lg:block absolute bottom-[140px] left-[38%]" width="200" height="80">
                    <path d="M200 40 C120 80 80 0 0 40" stroke="#69a8a3" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                </svg>

                <svg className="hidden lg:block absolute bottom-[140px] left-[64%]" width="200" height="80">
                    <path d="M200 40 C120 80 80 0 0 40" stroke="#69a8a3" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                </svg>

            </div>

        </section>
    );
};

export default LaundryAppWorkflow;