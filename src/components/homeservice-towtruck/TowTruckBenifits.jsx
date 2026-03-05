import React from "react";

const Benefits = () => {
    return (
        <section className="py-24 bg-[#f6f1ea] overflow-hidden relative">

            <div className="max-w-7xl mx-auto px-6">

                {/* capsule */}
                <div className="flex justify-center mb-4">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Customer Benefits
                    </span>
                </div>

                {/* heading */}
                <h2 className="text-center text-4xl font-semibold mb-6">
                    <span className="text-blue-600">Customer Benefits</span> of the Uber
                    for Tow Trucks App
                </h2>

                {/* paragraph */}
                <p className="text-center text-gray-700 max-w-5xl mx-auto mb-16">
                    With our Uber for Tow Trucks app, your customers will enjoy a seamless,
                    reliable, and efficient towing experience. Here's how your service can
                    benefit them:
                </p>

                {/* bullet points */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 text-gray-800">

                    <ul className="space-y-6 list-disc pl-6">
                        <li>
                            With just a few taps, customers can quickly locate and request
                            nearby tow truck drivers.
                        </li>

                        <li>
                            Customers can track the arrival of their tow truck in real-time,
                            providing peace of mind while they wait for help.
                        </li>

                        <li>
                            Our app supports secure payment options including credit/debit
                            cards and digital wallets.
                        </li>
                    </ul>

                    <ul className="space-y-6 list-disc pl-6">
                        <li>
                            No matter the time of day or night customers can access reliable
                            towing services.
                        </li>

                        <li>
                            Customers receive upfront pricing so there are no surprises.
                        </li>

                        <li>
                            Direct communication between customers and drivers allows smooth
                            coordination during the towing process.
                        </li>
                    </ul>

                </div>
            </div>

            {/* animation area */}
            {/* <div className="relative w-full"> */}

            {/* road background */}
            {/* <img
                    src="/images/road-bg.png"
                    alt="road"
                    className="w-full"
                /> */}

            {/* moving truck */}
            {/* <img
                    src="/images/tow-truck-car.png"
                    alt="truck"
                    className="absolute bottom-10 truck-move w-[520px]"
                /> */}

            {/* wheels image */}
            {/* <img
                    src="/images/3-wheels.png"
                    alt="wheels"
                    className="absolute bottom-8 right-20 w-32"
                />

            </div> */}

        </section>
    );
};

export default Benefits;