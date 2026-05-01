import React from "react";
import {
    Truck,
    HeartPulse,
    Store,
    ShieldCheck,
    Landmark,
    Video,
    Sprout,
    Package,
    Wrench,
    Share2,
    Car
} from "lucide-react";

const Industries = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <div className="border border-gray-300 rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Industries Covered
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold max-w-4xl mx-auto">
                    Industries We Serve with Our{" "}
                    <span className="text-orange-500">
                        White Label Ecommerce Development
                    </span>
                </h2>

                <p className="text-center text-gray-600 max-w-4xl mx-auto mt-6">
                    Our white label ecommerce development solutions are tailored for multiple industries, helping businesses launch scalable, fully branded ecommerce platforms designed for their specific market needs.
                </p>


                {/* GRID */}

                <div className="mt-16 space-y-8">

                    {/* ROW 1 */}

                    <div className="grid md:grid-cols-2 gap-8">

                        {card(
                            Truck,
                            "Hyperlocal Delivery Apps",
                            "text-yellow-600",
                            "We develop hyperlocal delivery apps to streamline every stage of the journey. No matter what you're delivering -food, groceries, meat, or medicines, our platform is optimized for speed and user satisfaction."
                        )}

                        {card(
                            HeartPulse,
                            "Healthcare & Telemedicine",
                            "text-red-500",
                            "Our developers have expertise in developing healthcare & telemedicine applications using Kotlin. It helps healthcare providers to improve their operations and provide patients with quick access to their services."
                        )}

                    </div>


                    {/* ROW 2 */}

                    <div className="grid md:grid-cols-3 gap-8">

                        {card(
                            Store,
                            "Online Marketplaces",
                            "text-green-600",
                            "With our end-to-end Kotlin app development services, we help you launch a scalable online marketplace business. We create a powerful Kotlin-based marketplace solution, helping you to boost engagement and drive more profits."
                        )}

                        {card(
                            ShieldCheck,
                            "Insurance Tech",
                            "text-blue-600",
                            "As a trusted Kotlin app development agency, we specialize in developing user-friendly apps for insurers and brokers. From policy comparison to automating the claim process, this Kotlin-based system makes everything easier for you."
                        )}

                        {card(
                            Landmark,
                            "Banking & Finance",
                            "text-yellow-700",
                            "From digital wallets to neobanking digital solutions, our Kotlin-based solutions are perfect for your banking and finance business. We build innovative, reliable solutions that boost financial services and offer top-tier security."
                        )}

                    </div>


                    {/* ROW 3 */}

                    <div className="grid md:grid-cols-2 gap-8">

                        {card(
                            Video,
                            "Video Streaming Platforms",
                            "text-red-600",
                            "Our Kotlin app developers specialize in developing a high-performing video streaming platform. They create solutions that are designed to offer superior user engagement. Intuitive UI of video apps helps keep viewers coming back. We also integrate features like adaptive streaming, watch history, personalized recommendations, and offline viewing to deliver a seamless and engaging user experience."
                        )}

                        {card(
                            Sprout,
                            "Agriculture & AgriTech",
                            "text-green-700",
                            "Whether you're a startup or an established player in the AgriTech space, we're here to help you. Kotlin-based mobile applications we create simplify complex workflows for you and your customers."
                        )}

                    </div>


                    {/* ROW 4 */}

                    <div className="grid md:grid-cols-2 gap-8">

                        {card(
                            Package,
                            "Logistics & Supply Chain",
                            "text-blue-600",
                            "Looking for a logistics & supply chain Kotlin-based solution to reduce operational costs? We can develop logistics systems that help you streamline operations and improve decision-making."
                        )}

                        {card(
                            Wrench,
                            "Handyman & Home Services",
                            "text-yellow-700",
                            "Get a handyman or home services Kotlin-based application for your business. We create user-friendly solutions that connect customers with professionals in real-time."
                        )}

                    </div>


                    {/* ROW 5 */}

                    <div className="grid md:grid-cols-2 gap-8">

                        {card(
                            Share2,
                            "Social Media Platforms",
                            "text-green-600",
                            "Whether you want to launch a messaging or content-sharing platform, we've got it covered. With our Kotlin app development services, we build custom social media applications that keep users engaged."
                        )}

                        {card(
                            Car,
                            "Transportation & Ride-Sharing",
                            "text-red-600",
                            "Unique features of transportation and ride-hailing solutions help you to offer greater convenience. Our Kotlin mobile app experts create solutions that meet the increasing passengers and service drivers' demands. We integrate real-time tracking, route optimization, in-app payments, and smart dispatch systems to ensure smooth operations, driver satisfaction, and a better overall ride experience for users."
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};


function card(Icon, title, color, text) {
    return (
        <div className="bg-white border rounded-2xl p-8 shadow-sm">

            <div className="flex items-center gap-4 mb-4">

                <div className={`p-3 rounded-xl border ${color}`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                </div>

                <h3 className={`text-xl font-semibold ${color}`}>
                    {title}
                </h3>

            </div>

            <p className="text-gray-600 leading-relaxed">
                {text}
            </p>

        </div>
    );
}

export default Industries;