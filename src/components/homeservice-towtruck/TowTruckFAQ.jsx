import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
    const [open, setOpen] = useState(null);

    const faqs = [
        {
            q: "How does the Uber for Tow Trucks app work?",
            a: "Users can request nearby tow truck services through the app. The nearest provider accepts the request and arrives at the user’s location quickly."
        },
        {
            q: "Is the Uber for Tow Trucks app available 24/7?",
            a: "Yes, the app allows users to request towing services anytime, ensuring assistance is available whenever needed."
        },
        {
            q: "How do I pay for the towing service?",
            a: "Payments can be made through secure options like credit cards, debit cards, or in-app wallets."
        },
        {
            q: "Can I track the tow truck in real-time?",
            a: "Yes, the app provides real-time tracking so you can monitor the tow truck's arrival on the map."
        },
        {
            q: "Is the pricing transparent?",
            a: "Yes, users receive upfront pricing details before confirming the towing request."
        },
        {
            q: "How do I contact the tow truck driver?",
            a: "You can directly call or chat with the driver through the app after booking the service."
        },
        {
            q: "What if I'm stranded in a remote location?",
            a: "The app helps locate the nearest available towing service even in remote areas."
        },
        {
            q: "Do I need to create an account to use the app?",
            a: "Yes, creating an account allows you to manage bookings, payments, and track services easily."
        },
        {
            q: "Is the app available for both Android and iOS?",
            a: "Yes, the app is available on both Android and iOS platforms."
        },
        {
            q: "How can I become a tow truck driver on the platform?",
            a: "Drivers can register on the platform, submit required documents, and start accepting service requests after approval."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* capsule */}
                <div className="flex justify-center mb-4">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        FAQ's
                    </span>
                </div>

                {/* heading */}
                <h2 className="text-center text-4xl font-semibold mb-16">
                    Frequently <span className="text-blue-600">Asked Questions</span>
                </h2>

                {/* grid */}
                <div className="grid md:grid-cols-2 gap-x-16">

                    {faqs.map((item, i) => (
                        <div key={i} className="border-b py-6">

                            {/* question */}
                            <button
                                className="flex justify-between items-center w-full text-left"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className="text-lg font-medium text-gray-800">
                                    {item.q}
                                </span>

                                <span className="border rounded-full p-2">
                                    {open === i ? (
                                        <Minus size={18} />
                                    ) : (
                                        <Plus size={18} />
                                    )}
                                </span>
                            </button>

                            {/* answer */}
                            {open === i && (
                                <p className="mt-4 text-gray-600 pr-8">
                                    {item.a}
                                </p>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default FAQ;