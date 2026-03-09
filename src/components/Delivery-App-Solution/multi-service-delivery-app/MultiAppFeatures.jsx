import { useState } from "react";
import {
    MapPin,
    Search,
    Wallet,
    Star,
    History,
    MessageCircle,
    Bell,
    PlusCircle,
    FileText,
    Percent,
    Store,
    BarChart3,
    Route,
    User,
    Navigation,
    DollarSign,
    FileCheck
} from "lucide-react";
import Multicustomerapp from "../../../assets/delivery-multiservice-img/Multicustomerapp.webp";
import Multistoreapp from "../../../assets/delivery-multiservice-img/Multistoreapp.webp";
import Multidriverapp from "../../../assets/delivery-multiservice-img/Multidriverapp.webp";
const tabs = ["customer", "store", "driver"];

const featuresData = {

    customer: {
        image: Multicustomerapp,
        features: [
            {
                icon: MapPin,
                title: "Real-Time Tracking",
                desc: "Monitor your delivery from when it was dispatched to when it was delivered in real-time modes."
            },
            {
                icon: PlusCircle,
                title: "Add Toppings",
                desc: "Let customers choose from a wide range of toppings and extra options to make your order more personal."
            },
            {
                icon: Search,
                title: "Master Search",
                desc: "From fresh produce to prepared and speciality food, the master search feature ensures that customers can easily find what they are searching for."
            },
            {
                icon: History,
                title: "Order History",
                desc: "With more features like easily viewing past orders, loyal customers can quickly reorder their favorite items they already love ordering."
            },
            {
                icon: Wallet,
                title: "Multiple Payment Options",
                desc: "For your convenience, we offer a wide range of payment options, such as credit cards and digital wallets, ensuring swift and safe payments with every order."
            },
            {
                icon: MessageCircle,
                title: "Chat with Driver",
                desc: "Allow customers to communicate with drivers to resolve doubts related to addresses or any other delivery-related instructions."
            },
            {
                icon: Star,
                title: "Ratings",
                desc: "Allow customers to leave reviews and ratings based on their entire delivery experience, which will help future customers make informed decisions."
            },
            {
                icon: Bell,
                title: "Push Notifications",
                desc: "Stay connected with the most current information about your order status through push notifications on discounts, sales, and other special offers."
            }
        ]
    },
    store: {
        image: Multistoreapp,
        features: [
            {
                icon: FileText,
                title: "Manage Orders",
                desc: "Stores can improve order flow management with easy-to-use advanced features and ensure on-time delivery to satisfy your valued customers."
            },
            {
                icon: Percent,
                title: "Set Offers",
                desc: "Let stores set up discounts and deals to increase sales and customer interaction. They can also edit the offers whenever necessary."
            },
            {
                icon: Store,
                title: "Store Details",
                desc: "Make it easy to update your store information. Include information about your store, availability, phone number, working days, and delivery areas."
            },
            {
                icon: MessageCircle,
                title: "Feedback",
                desc: "Get important customer feedback within the comfort of your app. Feel free to use the information provided here to enhance your store’s services."
            },
            {
                icon: History,
                title: "Order History",
                desc: "Track all previous orders through detailed history view and analyze the previous transactions to gain a better idea about the customer’s preferences."
            },
            {
                icon: BarChart3,
                title: "Track Earnings",
                desc: "Let store oversee and track earnings as it gives them a live, comprehensive look at their revenue stream and stay up to date with financial progress."
            },
            {
                icon: FileText,
                title: "Manage Products",
                desc: "Stores can easily update the number of products in their store and modify or delete them for any reason."
            },
            {
                icon: Search,
                title: "Monitor Activity",
                desc: "Our activity log will help you keep track of all processes, from order processing to customer interaction."
            }
        ]
    },

    driver: {
        image: Multidriverapp,
        features: [
            {
                icon: Route,
                title: "Route Optimization",
                desc: "Assist drivers in making more deliveries for your business more efficiently by better organizing the routes."
            },
            {
                icon: User,
                title: "Manage Profile",
                desc: "Providing them easy access to the information they want about themselves, their vehicles, or any preferences."
            },
            {
                icon: Navigation,
                title: "Map Navigation",
                desc: "Let drivers access step-by-step instructions within the Google Maps system to avoid delays and misplaced deliveries."
            },
            {
                icon: MessageCircle,
                title: "In-App Chat",
                desc: "Provide or integrate a chat feature where drivers and customers can communicate to resolve real-time delivery-related doubts."
            },
            {
                icon: History,
                title: "Order History",
                desc: "Allow the drivers to see their delivery records and monitor their performance to promote transparency in business operations."
            },
            {
                icon: DollarSign,
                title: "Generate Income Report",
                desc: "This will enable drivers to generate more apparent earnings statements in terms of day, week, or month for income planning purposes."
            },
            {
                icon: Bell,
                title: "Update Availability",
                desc: "Allow the drivers to change their status depending on their working schedule. Allow them to switch between available and unavailable."
            },
            {
                icon: FileCheck,
                title: "Manage Documents",
                desc: "Allow drivers to upload and manage all necessary documents to get started. Follow the required legal requirements."
            }
        ]
    }

};

const MultiAppFeatures = () => {

    const [activeTab, setActiveTab] = useState("customer");

    return (

        <section className="bg-[#041417] text-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-12">

                    <p className="border px-4 py-1 rounded-full inline-block text-sm mb-4">
                        App Features
                    </p>

                    <h2 className="text-4xl font-semibold">
                        Features You Get in{" "}
                        <span className="text-cyan-400">
                            Our On-Demand Delivery App
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Modern features to simplify delivery operations.
                    </p>

                </div>

                {/* Tabs */}

                <div className="flex justify-center gap-10 mb-14">

                    {tabs.map((tab) => (

                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="flex flex-col items-center"
                        >

                            <span className="capitalize text-lg">
                                {tab} App
                            </span>

                            <span
                                className={`h-[3px] w-48 mt-3 rounded-full ${activeTab === tab
                                    ? "bg-gradient-to-r from-cyan-400 to-green-400"
                                    : "bg-gray-600"
                                    }`}
                            ></span>

                        </button>

                    ))}

                </div>

                {/* Content */}

                <div className="grid lg:grid-cols-3 gap-10 items-start">

                    {/* Image */}

                    <div>
                        <img
                            src={featuresData[activeTab].image}
                            alt="app"
                            className="w-full"
                        />
                    </div>

                    {/* Cards */}

                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

                        {featuresData[activeTab].features.map((feature, index) => {

                            const Icon = feature.icon;

                            return (

                                <div
                                    key={index}
                                    className="group border border-gray-700 rounded-2xl p-6 bg-[#0a1f22] hover:border-white transition"
                                >

                                    <div className="flex gap-4 items-start">

                                        <div className="p-3 border border-gray-600 rounded-full group-hover:border-cyan-400 transition">

                                            <Icon
                                                size={22}
                                                className="text-gray-300 group-hover:text-cyan-400"
                                            />

                                        </div>

                                        <div>

                                            <h4 className="font-semibold text-lg">
                                                {feature.title}
                                            </h4>

                                            <p className="text-gray-400 text-sm mt-2">
                                                {feature.desc}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );

};

export default MultiAppFeatures;