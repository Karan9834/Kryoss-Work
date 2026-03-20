import React from "react";
import digital from "../../assets/homeservice-tutor-img/digital.webp"

const DigitalFootprints = () => {
    return (
        <section className="bg-[#111827]">
            {/* Rounded top */}
            <div className="rounded-t-[60px] overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">

                    {/* LEFT : IMAGE */}
                    <div className="relative pt-0 lg:pt-0 px-6 lg:px-8 flex items-center justify-center">
                        <img
                            src={digital}
                            alt="digital footprints"
                            className="w-full max-w-[550px] rounded-xl object-cover"
                        />
                    </div>

                    {/* RIGHT : CONTENT */}
                    <div className="flex flex-col justify-center px-6 lg:px-16 pt-6 lg:pt-10 pb-20 lg:py-20 text-white">

                        {/* Chip */}
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 text-sm w-fit">
                                <span className="w-2 h-2 bg-white rounded-full" />
                                Get Your ERP Solution
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-6">
                            Launch Your{" "}
                            <span className="text-blue-900"> ERP System</span>{" "}
                            in just 5 days
                        </h2>

                        {/* Text Content */}
                        <div className="space-y-6 text-white/80 text-[16px] leading-[1.6]">
                            <p>
                                With our ERP development solution, get your system up and running in just 5 working days. Skip complex and time-consuming development processes and launch a fully functional business management platform quickly.
                            </p>

                            <p>
                                As a leading ERP development company, we provide a pre-built solution that streamlines your business operations—covering modules like HRM, CRM, inventory management, finance, and reporting—all ready from day one.
                            </p>

                            <p>
                                Our scalable and robust ERP platform grows with your business, helping you manage resources efficiently and make data-driven decisions without operational delays.
                            </p>

                            <p>
                                Launch faster, scale smarter, and optimize your business operations with our expert ERP development services.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalFootprints;