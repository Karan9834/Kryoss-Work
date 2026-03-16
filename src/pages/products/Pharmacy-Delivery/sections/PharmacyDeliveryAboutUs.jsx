import React from "react";
import pharmacyaboutimg from "@/assets/pharmacy-img/pharmacyabout.jpg";
const PharmacyDeliveryAboutUs = () => {
    return (
        <section className="py-24 bg-[#fff1f2]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={pharmacyaboutimg}
                            alt="Online Pharmacy Platform"
                            className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-rose-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Platform
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is a <span className="text-rose-600">Pharmacy Delivery App?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            A pharmacy delivery app allows customers to order medicines
                            online and get them delivered to their doorstep quickly and
                            safely. It connects pharmacies, customers, and delivery
                            partners on one digital platform.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Customers can browse medicines, upload prescriptions,
                            place orders, and track deliveries in real time through
                            the mobile app. This makes accessing essential medicines
                            easier and faster.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Pharmacies can manage medicine inventory, process
                            prescriptions, handle customer orders, and track
                            deliveries through a powerful admin dashboard.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            This modern healthcare solution helps pharmacies expand
                            their reach, improve service efficiency, and deliver
                            medicines to customers conveniently from anywhere.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default PharmacyDeliveryAboutUs;