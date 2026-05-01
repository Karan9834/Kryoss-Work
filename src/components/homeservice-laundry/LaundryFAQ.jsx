import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What is a Laundry App, and How Does it Work?",
        a: "A laundry app allows customers to schedule pickup and delivery for laundry services. Users can place orders, track status, and make payments through the mobile app."
    },
    {
        q: "How Can a Laundry App Benefit My Business?",
        a: "It helps automate orders, manage customers, increase convenience, and expand your service reach while improving operational efficiency."
    },
    {
        q: "Can I Customize the Laundry App for My Brand?",
        a: "Yes, most laundry apps can be fully customized with your branding, features, service types, and payment integrations."
    },
    {
        q: "Is the Laundry App Available for Both Android and iOS?",
        a: "Yes, modern laundry apps are built for both Android and iOS platforms to reach a wider customer base."
    },
    {
        q: "How Does the Laundry App Handle Payments?",
        a: "Laundry apps support secure payment gateways like Stripe, Razorpay, PayPal, and wallet integrations for smooth transactions."
    },
    {
        q: "What Features Does the Laundry App Offer for Customers?",
        a: "Customers can book services, schedule pickups, track orders in real time, make payments, and communicate with providers."
    },
    {
        q: "What Features Does the Laundry App Offer for Providers?",
        a: "Service providers can manage orders, track deliveries, update order status, communicate with customers, and manage payments."
    },
    {
        q: "How Long Does It Take to Develop a Custom Laundry App?",
        a: "Development time depends on features and complexity but usually ranges from 4 to 12 weeks."
    },
    {
        q: "Can I Integrate Delivery Tracking in the Laundry App?",
        a: "Yes, GPS tracking and map integrations allow real-time delivery tracking for customers and service providers."
    },
    {
        q: "How Can I Get Started with Laundry App Development?",
        a: "You can start by defining your business requirements, selecting key features, and working with a development team."
    }
];

const LaundryFAQ = () => {

    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-16">

                    <span className="border rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                        FAQ's
                    </span>

                    <h2 className="text-4xl font-semibold text-teal-800">
                        Frequently Asked Questions
                    </h2>

                </div>


                {/* faq grid */}
                <div className="grid md:grid-cols-2 gap-x-16">

                    {faqs.map((faq, index) => {

                        const isOpen = open === index;

                        return (

                            <div key={index} className="border-b py-6">

                                {/* question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="flex justify-between items-center w-full text-left font-semibold text-lg"
                                >

                                    {faq.q}

                                    <span className="ml-4 border rounded-full p-1">

                                        {isOpen ? (
                                            <Minus size={18} />
                                        ) : (
                                            <Plus size={18} />
                                        )}

                                    </span>

                                </button>

                                {/* answer */}
                                {isOpen && (
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                )}

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default LaundryFAQ;