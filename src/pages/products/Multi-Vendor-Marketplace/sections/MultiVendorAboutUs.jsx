import React from "react";
import multivendoraboutimg from "@/assets/multivendor-img/multivendorabout.jpg";
const MultiVendorAbout = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        {/* Replace with your downloaded image */}
                        <img
                            src={multivendoraboutimg}
                            alt="Multi Vendor Marketplace"
                            className="w-full max-w-md rounded-3xl shadow-xl object-contain"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-orange-200 rounded-3xl p-8 lg:p-12 bg-gray-50 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Marketplace
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is a <span className="text-orange-500">Multi-Vendor Marketplace?</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-600 leading-relaxed">
                            A multi-vendor marketplace is an eCommerce platform where
                            multiple independent sellers can list and sell their products
                            through a single online store. Similar to platforms like Amazon
                            or eBay, it allows customers to browse products from different
                            vendors while completing purchases through one centralized
                            system.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our Multi-Vendor Marketplace solution enables businesses to
                            create a powerful online marketplace where vendors can manage
                            their own products, orders, and inventory while the platform
                            owner controls the entire ecosystem from a single admin panel.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            The platform includes essential features such as vendor
                            dashboards, product management, secure payments, order
                            tracking, and commission management — making it easy to scale
                            your marketplace business.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you're building a niche marketplace or a large
                            eCommerce platform, our customizable solution helps you launch
                            quickly and grow your online marketplace efficiently.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MultiVendorAbout;