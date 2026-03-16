import React from "react";
import handymanAboutimg from "@/assets/handyman-service-img/handymanAbout.jpeg";

const About = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <img src={handymanAboutimg}
                            alt="Carpool App"
                            className="w-full h-full object-cover rounded-3xl" />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Handyman Service App
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            What is a <span className="text-blue-600">Handyman Service App?</span>
                        </h2>

            {/* Paragraph */}
<p className="text-gray-600 leading-relaxed">
    A Handyman Service App is a modern on-demand platform that connects
    customers with skilled professionals for home maintenance and repair
    services. From plumbing and electrical work to cleaning and furniture
    assembly, the app allows users to easily book trusted service providers
    and manage their service requests from a single dashboard.
</p>

<p className="text-gray-600 leading-relaxed">
    Our Handyman Service App solution provides a ready-to-launch system for
    startups, service businesses, and entrepreneurs looking to build their
    own home service marketplace. It includes essential features like service
    booking, provider management, real-time tracking, secure payments, and
    customer notifications.
</p>

<p className="text-gray-600 leading-relaxed">
    With a fully customizable and scalable architecture, the platform can
    easily adapt to different service categories, multiple locations, and
    various business models. This enables businesses to manage multiple
    service providers while delivering a smooth and efficient experience
    for customers.
</p>

<p className="text-gray-600 leading-relaxed">
    Whether you are launching a local handyman marketplace, managing a team
    of professional technicians, or expanding your home service business
    online, our Handyman Service App helps streamline operations, improve
    customer satisfaction, and grow your service business faster.
</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;