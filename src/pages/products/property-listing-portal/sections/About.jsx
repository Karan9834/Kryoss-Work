import React from "react";

import PropertyAboutimg from "@/assets/EstateLab Property Listing Portal - product/What is a Handyman Service App.jpg";

const About = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <img src={PropertyAboutimg}
                            alt="Property Listing Portal About"
                            className="w-full h-full object-cover rounded-3xl" />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">



                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            What is a <span className="text-blue-600">Property Listing Portal?</span>
                        </h2>

            {/* Paragraph */}
<p className="text-gray-600 leading-relaxed">
    A Property Listing Portal is a modern real estate platform that connects
    property buyers, sellers, and agents in a single digital marketplace.
    Users can easily explore residential and commercial properties, view
    detailed listings, compare prices, and find properties based on
    location, budget, and preferences.
</p>

<p className="text-gray-600 leading-relaxed">
    Our Property Listing Portal solution provides a ready-to-launch system
    for real estate businesses, agencies, and entrepreneurs who want to
    build their own property marketplace. The platform includes powerful
    features such as property listings, advanced search filters, agent
    profiles, inquiry management, and secure communication between buyers
    and sellers.
</p>

<p className="text-gray-600 leading-relaxed">
    With a fully customizable and scalable architecture, the portal can
    support multiple property categories including apartments, houses,
    commercial spaces, and rental properties. Businesses can manage
    thousands of listings, agents, and customer inquiries from a single
    dashboard.
</p>


                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;