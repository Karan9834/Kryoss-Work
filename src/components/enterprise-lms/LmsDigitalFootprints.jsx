import React from "react";
import digital from "../../assets/homeservice-tutor-img/digital.webp"

const LmsDigitalFootprints = () => {
    return (
        <section className="bg-[#0f172a] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">
                {/* LEFT : IMAGE */}
                <div className="relative pt-0 lg:pt-0 px-6 lg:px-8 flex items-center justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-violet-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <img
                            src={digital}
                            alt="LMS digital footprints"
                            className="relative w-full max-w-[550px] rounded-3xl object-cover shadow-2xl border border-white/10"
                        />
                    </div>
                </div>

                {/* RIGHT : CONTENT */}
                <div className="flex flex-col justify-center px-6 lg:px-16 pt-6 lg:pt-10 pb-20 lg:py-20 text-white">

                    {/* Chip */}
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/40 text-sm w-fit bg-violet-400/5 text-violet-300">
                            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                            Get Your LMS Solution
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl lg:text-3xl font-semibold leading-tight mb-6">
                        Launch Your{" "}
                        <span className="text-violet-400">Digital Academy</span>{" "}
                        in just 5 days
                    </h2>

                    {/* Text Content */}
                    <div className="space-y-6 text-indigo-100/80 text-[16px] leading-[1.6]">
                        <p>
                            With our pre-built LMS development solution, get your educational platform up and running in just 5 working days. Skip the long development cycles and start delivering knowledge to your students immediately.
                        </p>

                        <p>
                            As a specialized LMS development partner, we provide a robust ecosystem that handles everything from course authoring and student enrollment to interactive assessments and automated certifications—all ready to go.
                        </p>

                        <p>
                            Our scalable architecture ensures your academy can grow from a handful of learners to thousands without any performance bottlenecks, providing a seamless experience across all devices.
                        </p>

                        <p>
                            Accelerate your digital transformation and empower your educators with our expert LMS development services. Professional, reliable, and incredibly fast to deploy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LmsDigitalFootprints;
