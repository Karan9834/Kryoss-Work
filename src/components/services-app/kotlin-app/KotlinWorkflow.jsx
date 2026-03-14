import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const steps = [
    {
        number: "01",
        title: "Discovery & Consultation",
        text: "Everything starts with a detailed discussion. We ask questions to know your project requirements."
    },
    {
        number: "02",
        title: "UI/UX Design",
        text: "Our design team creates intuitive user flows for better experience."
    },
    {
        number: "03",
        title: "Coding",
        text: "Our Kotlin developers follow agile practices to build scalable systems."
    },
    {
        number: "04",
        title: "Quality Assurance (QA)",
        text: "Manual and automated testing ensures flawless performance."
    },
    {
        number: "05",
        title: "Deployment",
        text: "We deploy the system ensuring Play Store compliance."
    },
    {
        number: "06",
        title: "Post-Launch Support",
        text: "Continuous monitoring and improvements after launch."
    }
];

const KotlinWorkflow = () => {

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [
            Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                playOnInit: true
            })
        ]
    );

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto pl-6 flex flex-col lg:flex-row gap-16 relative">

                {/* LEFT CONTENT */}
                <div className="max-w-[480px] flex-shrink-0 z-10 bg-white md:bg-transparent pr-6">

                    <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Our Workflow
                    </div>

                    <h2 className="text-4xl font-semibold leading-snug">
                        <span className="text-orange-500">
                            Streamlined White Label Kotlin
                        </span>{" "}
                        App Development Company Process for Fast Launch
                    </h2>

                    <p className="mt-6 text-gray-600">
                        We turn your business requirements into a live platform in just a
                        few weeks through a structured development lifecycle.
                    </p>

                </div>


                {/* RIGHT WORKFLOW SLIDER */}
                <div className="flex-1 relative min-w-0">

                    {/* Content container with overflow-hidden to mask the left side */}
                    {/* mr-[-50vw] pr-[50vw] ensures it bleeds to the right screen edge */}
                    {/* Increased top padding (pt-24) to accommodate the floating numbers inside the hidden overflow */}
                    <div className="bg-[#e9ddcd] rounded-l-[30px] pl-8 md:pl-12 pt-24 pb-16 relative mr-[-50vw] pr-[50vw] overflow-hidden">

                        {/* STATIC TIMELINE LINE - Adjusted top to [128px] due to increased padding */}
                        <div className="absolute top-[128px] left-0 w-full h-[4px] bg-[#c3925c]"></div>

                        {/* EMBLA VIEWPORT */}
                        {/* Keeps overflow-visible so numbers are seen, but parent handles the left-side masking */}
                        <div className="overflow-visible pt-12 cursor-grab active:cursor-grabbing relative" ref={emblaRef}>

                            {/* EMBLA CONTAINER */}
                            <div className="flex">

                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex-[0_0_85%] md:flex-[0_0_340px] h-full relative mr-8 md:mr-10"
                                    >

                                        {/* NUMBER ON TIMELINE */}
                                        <div className="absolute -top-[44px] left-6 md:left-8 w-14 h-14 rounded-full bg-[#8b5e2c] border-[4px] border-[#e9ddcd] text-white flex items-center justify-center font-bold text-lg shadow-sm z-10 transition-transform duration-300 hover:scale-110">
                                            {step.number}
                                        </div>

                                        {/* CARD */}
                                        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e2d0b7] shadow-sm h-full min-h-[220px]">

                                            <h3 className="text-[19px] font-semibold text-[#8b5e2c] mb-3">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-600 text-[15px] leading-relaxed">
                                                {step.text}
                                            </p>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};
export default KotlinWorkflow;