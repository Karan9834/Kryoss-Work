import React from "react";
import erpabout from "../../assets/erp-img/erpabout.jpg";

const ErpAbout = () => {
    return (
        <section className="py-24 bg-[#f4f4f4]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Capsule */}
                <div className="flex justify-center mb-6">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2 border-blue-200 bg-blue-50">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        About Our ERP Product Development
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-14 leading-snug">
                    Next-Gen{" "}
                    <span className="text-blue-700">Enterprise Resource Planning</span>{" "}
                    for Unified Business Operations
                </h2>

                {/* Main Container */}
                <div className="bg-[#f7f7f7] rounded-[40px] px-8 md:px-12 pt-16 pb-0 flex flex-col md:flex-row items-end gap-10">

                    {/* LEFT IMAGE */}
                    <div className="md:w-1/2 flex items-end justify-center">

                        <img
                            src={erpabout}
                            alt="ERP About"
                            className="w-[420px] md:w-[520px] rounded-3xl"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="md:w-1/2 text-gray-700 pb-14">

                        <p className="mb-6 leading-relaxed">
                            A comprehensive ERP system simplifies complex organizational
                            workflows by centralizing data across all departments. White
                            Label Fox offers a scalable solution with integrated modules
                            for finance, inventory, and HR to streamline your business operations.
                        </p>

                        <p className="mb-6 leading-relaxed">
                            In today's digital era, manual tracking and siloed departments
                            hinder growth and decision-making. High-performance teams
                            require a single source of truth that provides real-time
                            visibility into every corner of the enterprise.
                        </p>

                        <p className="mb-6 leading-relaxed">
                            At Kryoss Work, we specialize in offering scalable,
                            custom-built ERP solutions for enterprises looking to
                            modernize their infrastructure. Our system offers a
                            seamless experience with powerful administrative controls.
                        </p>

                        <p className="leading-relaxed">
                            Our ERP development service provides you with a modular
                            architecture designed to fit your unique business needs.
                            Launch quickly and scale your enterprise effortlessly with
                            our expert engineering.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ErpAbout;
