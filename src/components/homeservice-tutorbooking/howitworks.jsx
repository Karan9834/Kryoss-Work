import React from "react";
import howitworks from "../../assets/homeservice-tutor-img/howitwork.webp";

const steps = [
    {
        title: "1. Account Initialization",
        desc: "Riders can authenticate or register by submitting essential details or utilizing external social credentials like Google or Facebook.",
    },
    {
        title: "2. Instructor Discovery",
        desc: "Learners can identify proximate educators, examine comprehensive partner profiles including credentials, proximity, service rates, and user feedback.",
    },
    {
        title: "3. Booking Initiation",
        desc: "Upon reviewing educator expertise and pricing, users can select the most appropriate service and finalize their instructional request.",
    },
    {
        title: "4. Service Execution",
        desc: "Following the acceptance of the request, the instructor arrives at the designated venue to provide professional educational support.",
    },
    {
        title: "5. Protected Settlement",
        desc: "After the instructional session concludes, students utilized diverse payment methods including digital portals, cards, or integrated virtual wallets.",
    },
    {
        title: "6. Performance Assessment",
        desc: "Post-transaction, both the learner and the educator can exchange testimonials and ratings based on the quality of their instructional interaction.",
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
                            <span className="w-2 h-2 bg-[#f5b301] rounded-full" />
                            Product Architecture
                        </span>

                        <h2 className="text-center text-[34px] lg:text-[40px] font-bold text-white mb-4">
                            The Mechanics of our <span className="text-[#f5a623]">Tutor Acquisition Portal</span>
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
                            <p className="text-white/70 text-[16px] max-w-2xl mb-8">
                                Our ecosystem facilitates a frictionless coordination between 
                                learners and specialized educators.
                            </p>
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