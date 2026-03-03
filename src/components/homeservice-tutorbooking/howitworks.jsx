import React from "react";
import howitworks from "../../assets/homeservice-tutor-img/howitwork.webp";

const steps = [
    {
        title: "1. Login/Signup",
        desc: "Student can log in or sign up with providing basic information or through social sites like Facebook, or Google.",
    },
    {
        title: "2. Search Tutors",
        desc: "Students can search the nearest tutor, they can view provider profile details with name, far from their location, service pricing, ratings, etc.",
    },
    {
        title: "3. Place Order",
        desc: "After checking the tutor profile and pricing, students can choose the service based on their requirements and place the order.",
    },
    {
        title: "4. Provider Offer Service",
        desc: "After accepting student requests, the tutor arrived at the student location and offer a service.",
    },
    {
        title: "5. Secure Payment",
        desc: "Once the service is completed, the student has a flexible payment option like cash, card, and in-app wallet.",
    },
    {
        title: "6. Rating & Review",
        desc: "Once payment completed, the student & provider both can give reviews and ratings to each other based on the service experience.",
    },
];

const HowItWorks = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* OUTER DARK CONTAINER */}
                <div className="rounded-[28px] bg-[radial-gradient(circle_at_top_left,#2a2a18,#000000)] px-6 py-10 sm:px-10 lg:px-14">

                    {/* HEADER */}
                    <div className="mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1 text-sm text-white">
                            <span className="h-2 w-2 rounded-full bg-white" />
                            How the App Works
                        </span>

                        <h2 className="mt-5 max-w-[520px] text-[30px] font-semibold leading-snug text-white sm:text-[36px]">
                            How the On-Demand Tutor App Works
                        </h2>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col gap-10 lg:flex-row">

                        {/* LEFT SCROLLABLE CARDS */}
                        <div
                            className="
                    w-full 
                    max-h-[520px] 
                    space-y-6 
                    overflow-y-auto 
                    pr-2 
                    lg:w-1/2
                    hide-scrollbar
                  "
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
                            {steps.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-white/20 bg-white/5 px-6 py-6 text-white backdrop-blur"
                                >
                                    <h3 className="mb-2 text-lg font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-white/80">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex w-full items-center justify-center lg:w-1/2">
                            <div className="flex h-[520px] w-full max-w-[420px] items-center justify-center rounded-[24px] bg-[#2b2b1f]">

                                {/* IMAGE PLACEHOLDER */}
                                <img
                                    src={howitworks}
                                    alt="How App Works"
                                    className="h-full w-full object-contain scale-100 object-bottom"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;