import React from "react";
import Laundryworkflow from "../../assets/homeservice-laundry-img/Laundryworkflow.webp";

const LaundryWorkflow = () => {
    const steps = [
        {
            title: "Login/Signup",
            desc: "A customer needs to create a new account or log in to their existing account on social sites like Facebook or Google to access the app.",
        },
        {
            title: "Browse Nearest Providers",
            desc: "Customers can search for laundry service providers near their location. It shows list of available providers along with their ratings & services.",
        },
        {
            title: "Laundry Preferences",
            desc: "A customer needs to select their laundry preferences for men/women, shirts and t-shirts, wash type, etc.",
        },
        {
            title: "Set Pickup & Delivery Time",
            desc: "A customer can schedule the pickup and delivery times for their laundry and choose a convenient time slot.",
        },
        {
            title: "Provider Pickup Clothes",
            desc: "The assigned laundry service provider will arrive at the user’s location to pick up the clothes.",
        },
        {
            title: "Laundry Processing",
            desc: "The provider takes the laundry to the facility for processing. Clothes will be sorted, washed, dried and folded.",
        },
        {
            title: "Order Delivery by Provider",
            desc: "Once the laundry is ready, the provider delivers it back to the user’s location.",
        },
        {
            title: "Secure Payment",
            desc: "Customers have flexible payment options like cash, card or wallet to pay for the service.",
        },
        {
            title: "Ratings and Reviews",
            desc: "Customers can rate and review the provided service after completion.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Capsule */}
                <div className="mb-4">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center w-fit gap-2">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        App Workflow
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-semibold mb-4">
                    How Our <span className="text-teal-700">Laundry</span> App Works
                </h2>

                <p className="text-gray-600 max-w-xl mb-14">
                    Experience the ease of booking laundry and dry cleaning services with
                    just a few taps. Follow these simple steps for hassle-free doorstep service.
                </p>

                <div className="grid lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT SCROLLABLE STEPS */}
                    <div className="h-[650px] overflow-y-auto pr-4 space-y-8"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {/* Hide scrollbar for webkit */}
                        <style>
                            {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
                        </style>

                        {steps.map((step, index) => (
                            <div key={index}>

                                {/* Title pill */}
                                <div className="flex items-center gap-4 mb-3">

                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-50 text-teal-700 font-semibold">
                                        {(index + 1).toString().padStart(2, "0")}
                                    </div>

                                    <div className="border border-teal-100 rounded-full px-5 py-2 font-medium">
                                        {step.title}
                                    </div>

                                </div>

                                <p className="text-gray-600 ml-16 leading-relaxed">
                                    {step.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={Laundryworkflow}
                            alt="Laundry Workflow"
                            className="w-[420px] lg:w-[520px]"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default LaundryWorkflow;