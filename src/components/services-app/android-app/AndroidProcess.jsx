import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const steps = [
    {
        number: "01",
        title: "Discovery & Consultation",
        text: "We start by listening to your business problems and carefully providing you with the Android app development solutions that meet your specific business requirements."
    },
    {
        number: "02",
        title: "Planning & Prototyping",
        text: "Our Android app developers move ahead with prototyping and wireframe creation to provide you with a visual understanding of how your branded solutions will look and feel."
    },
    {
        number: "03",
        title: "Designing",
        text: "Our Android app designers ensure that every screen is designed to match your brand identity. They keep your user experience at the core focus of designing an engaging solution."
    },
    {
        number: "04",
        title: "App Development",
        text: "Using agile development practices, our Android developers build your app step-by-step. They focus on creating a high-quality experience tailored to your business goals."
    },
    {
        number: "05",
        title: "Testing",
        text: "As the best Android mobile app development company, we commit to providing you with great apps that work perfectly. We test every function and working flow."
    },
    {
        number: "06",
        title: "Launch",
        text: "We don’t publish your Android app without approval. Targeting the Google Play or private platforms, we handle the launch process carefully, ensuring accuracy and readiness."
    },
    {
        number: "07",
        title: "Post-Launch Support",
        text: "We're your long-term tech partner who helps you keep your app at its best. As a known Android app development agency, we provide you with support for everything you need"
    }
];

const AndroidProcess = () => {

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
                        Our Proven Process
                    </div>

                    <h2 className="text-4xl font-semibold leading-snug">
                        <span className="text-orange-500">
                            How Our White Label Android App
                        </span>{" "}
                        Development Service Delivers Results
                    </h2>

                    <p className="mt-6 text-gray-600">
                        We follow a transparent, collaborative development process to deliver scalable Android solutions through our White Label Android App Development Service, tailored to your business goals. From strategy to launch, every step is designed for performance, speed, and long-term success.
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
export default AndroidProcess;