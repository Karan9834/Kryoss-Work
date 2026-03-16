import React from "react";
import b2bwholesaleaboutimg from "@/assets/b2bwholesale-img/b2bwholesaleabout.jpg";
const B2BWholesaleAbout = () => {
    return (
        <section className="py-24 bg-[#f7f9ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        {/* Replace with your downloaded image */}
                        <img
                            src={b2bwholesaleaboutimg}
                            alt="B2B Wholesale Platform"
                            className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Platform
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is a <span className="text-blue-600">B2B Wholesale Portal?</span>
                        </h2>

                        {/* Content */}
                        <p className="text-gray-600 leading-relaxed">
                            A B2B wholesale portal is a digital platform designed to simplify
                            bulk purchasing and supplier management for businesses. It
                            enables wholesalers, distributors, and retailers to connect
                            within one centralized system where large product orders can
                            be placed quickly and efficiently.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our B2B wholesale solution allows businesses to manage product
                            catalogs, custom pricing tiers, inventory, and bulk orders
                            through an intuitive dashboard. This eliminates manual order
                            processing and helps businesses streamline their supply chain.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            The platform supports features such as business account
                            management, automated pricing rules, order tracking, and
                            secure payment integrations — making it ideal for companies
                            looking to digitize and scale their wholesale operations.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you're a manufacturer supplying distributors or a
                            wholesaler serving retailers, our B2B portal provides the
                            tools needed to manage large-scale transactions with ease.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default B2BWholesaleAbout;