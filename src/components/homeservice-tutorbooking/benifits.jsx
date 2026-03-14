import React from "react";
import benifits from "../../assets/homeservice-tutor-img/benifits.webp";
const BenefitsSection = () => {
    return (
        <section className="w-full bg-white py-4">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-700 mb-4">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Benefits
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                        Benefits of Using Our{" "}
                        <span className="text-orange-500">On-Demand Tutor App</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT – TEXT */}
                    <div className="space-y-8 text-gray-700 leading-relaxed order-2 lg:order-1">
                        <p>
                            <span className="font-semibold text-gray-900">
                                Quick and Easy Access to Tutors
                            </span>{" "}
                            Our on-demand tutor app provides students with instant access to
                            skilled tutors, making it easy to find the right fit based on
                            location, subject, and availability. This ensures a seamless
                            learning experience for users anytime, anywhere.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Flexible Scheduling
                            </span>{" "}
                            Students and tutors can easily coordinate sessions that fit their
                            schedules. The app offers convenient options for booking and
                            rescheduling, giving users the flexibility they need to balance
                            learning with other commitments.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Real-Time Notifications and Updates
                            </span>{" "}
                            Stay informed with instant updates about bookings, cancellations,
                            and session reminders. Real-time notifications ensure that
                            students and tutors are always on the same page, enhancing
                            communication and reducing delays.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Secure and Transparent Payments
                            </span>{" "}
                            Our app integrates reliable payment gateways, ensuring that
                            transactions are secure and transparent. Users can pay
                            confidently and track their payment history directly within the
                            app.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Customizable and Scalable Solution
                            </span>{" "}
                            Whether you're just starting or looking to expand, our on-demand
                            tutor app is designed to grow with your business. Its fully
                            customizable features allow you to tailor the app to your
                            specific needs and branding.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Comprehensive Admin Control
                            </span>{" "}
                            Manage your tutoring business effortlessly with an intuitive
                            admin panel. From tracking sessions to managing users and
                            handling payments, our admin dashboard provides everything you
                            need to oversee your operations effectively.
                        </p>
                    </div>

                    {/* RIGHT – IMAGE */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">
                        {/* Background Shape - Centered behind image */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-b from-[#2b1d1d] to-[#3b2a2a] -z-10 opacity-20 lg:opacity-100"></div>

                        {/* Main Image */}
                        <img
                            src={benifits}
                            alt="Tutor App Benefits"
                            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;