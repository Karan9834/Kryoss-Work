import React from "react";
import tutorabout from "../../assets/homeservice-tutor-img/tutoraboutus1.png"
const AboutUs = () => {
    return (
        <section className="w-full bg-[#f6f6f6] py-16 sm:py-20">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* WHITE ROUNDED BOX */}
                <div className="rounded-[28px] bg-white px-6 py-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:px-10 lg:px-14">

                    {/* TOP BADGE */}
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1 text-sm font-medium text-gray-700">
                            <span className="h-3 w-3 rounded-full bg-[#f5b301]" />
                            Tutor App Like Uber
                        </span>
                    </div>

                    {/* HEADING */}
                    <h2 className="mx-auto mb-12 max-w-[900px] text-center text-[28px] font-semibold leading-snug text-[#2b2b2b] sm:text-[34px] md:text-[40px]">
                        Build Your Own{" "}
                        <span className="text-[#f5a623]">On-Demand Tutor App Like Uber</span>{" "}
                        – Kryoss Work
                    </h2>

                    {/* CONTENT */}
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">

                        {/* LEFT IMAGE (SINGLE IMAGE ONLY) */}
                        <div className="w-full lg:w-1/2 lg:pt-30">
                            <div className="relative mx-auto w-full max-w-[500px]">

                                {/* IMAGE PLACEHOLDER */}

                                <img src={tutorabout}
                                    alt="tutor about us"
                                    className="w-full h-full scale-110 rounded-3xl shadow-2xl object-cover" />


                            </div>
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="w-full text-[15px] leading-[1.8] text-gray-700 lg:w-1/2">
                            <p className="mb-6">
                                Our on-demand tutor app script connects students with tutors in a
                                simple, efficient way. During the COVID-19 pandemic, many parents
                                turned to online tutoring, seeking a safe and convenient way to
                                support their children’s education from home. With our Uber-style
                                tutoring app, students can quickly find and connect with local
                                tutors who meet their needs.
                            </p>

                            <p className="mb-6">
                                At Kryoss Work, our experienced development team specializes in
                                creating custom tutoring apps like Uber. We offer a fully tailored
                                solution, including the user app, tutor app, super admin web panel,
                                and tutor web panel. Our on-demand tutor clone script includes all
                                the essential features to help you launch a real-time tutoring
                                service.
                            </p>

                            <p className="mb-6">
                                What sets us apart is our ability to launch your project in just
                                5 working days. Once development and customization are complete,
                                your app is fully tested and ready to go live on both the Play
                                Store and App Store.
                            </p>

                            {/* <p className="mb-6">
                                Our app is designed for scalability and adaptability. As your
                                business grows, you can easily add more services or features to
                                enhance the user experience. The seamless functionality of our
                                on-demand tutor app ensures both students and tutors have everything
                                they need at their fingertips.
                            </p> */}

                            <p>
                                Choose Kryoss Work for a stress-free development journey. With
                                our quick delivery timelines, feature-packed scripts, and
                                white-label solutions, you’ll have a market-ready app that drives
                                your business forward and delivers measurable results.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;