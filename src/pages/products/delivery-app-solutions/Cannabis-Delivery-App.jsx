import React, { useState } from "react";
import {
    User,
    ShoppingBag,
    CreditCard,
    MapPin,
    History,
    CheckCircle,
    FileText,
    DollarSign,
    Clock,
    MessageCircle,
    Settings,
    Tag,
    Image as ImageIcon,
    BarChart,
    LayoutDashboard,
    Menu,
    Smartphone,
    Rocket,
    Globe,
    Headphones,
    BadgeCheck,
    Play,
    Star,
    Plus,
    Minus,
    MonitorSmartphone,
    Truck,
    Store,
    Users
} from "lucide-react";

/* =========================
   DATA STRUCTURES
========================= */

// Reusing same icon helper for the missing ClipboardList
const ClipboardList = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>;

const featureList = [
    {
        icon: <User size={20} />,
        category: "User App",
        title: "Easy Login",
        desc: "Enable users to access cannabis delivery solutions quickly with social login options such as Google, Facebook, etc."
    },
    {
        icon: <ShoppingBag size={20} />,
        category: "User App",
        title: "Browse Products",
        desc: "Allow users to search weed products category-wise with detailed descriptions, images, prices, and much more."
    },
    {
        icon: <CreditCard size={20} />,
        category: "User App",
        title: "Multiple Payment Options",
        desc: "Enable customers to make payments by offering a variety of secure and swift payment options."
    },
    {
        icon: <MapPin size={20} />,
        category: "User App",
        title: "Real-Time Tracking",
        desc: "Upscale the delivery experience and allow users to track the order status in real-time with anticipated arrival timing."
    },
    {
        icon: <ClipboardList size={20} />,
        category: "User App",
        title: "Order Placement",
        desc: "Allow users to place online orders effortlessly with a seamless interface and intuitive order placement process."
    },
    {
        icon: <History size={20} />,
        category: "User App",
        title: "Order History",
        desc: "Enable users to effortlessly keep track of their previous orders and easily reorder their favorite weed products."
    },
    {
        icon: <CheckCircle size={20} />,
        category: "Driver App",
        title: "Easy Login",
        desc: "Allow delivery providers to log in using their credentials or through social media accounts for quick access."
    },
    {
        icon: <History size={20} />,
        category: "Driver App",
        title: "Past Orders",
        desc: "Allow delivery providers to access their past delivery orders for reference and record-keeping purposes."
    },
    {
        icon: <FileText size={20} />,
        category: "Driver App",
        title: "Submit Documents",
        desc: "Allow delivery providers to securely submit required documents, such as driver’s license and vehicle registration."
    },
    {
        icon: <DollarSign size={20} />,
        category: "Driver App",
        title: "Earning History",
        desc: "Enable delivery providers to track their earnings and view detailed earning history within the app."
    },
    {
        icon: <Clock size={20} />,
        category: "Driver App",
        title: "Set Availability",
        desc: "Allow drivers to set their preferred working hours, specify areas, and update their availability status in real-time."
    },
    {
        icon: <MessageCircle size={20} />,
        category: "Driver App",
        title: "In-App Call/Chat",
        desc: "Enable drivers to contact customers directly for order clarification, delivery instructions, or issues."
    },
    {
        icon: <Settings size={20} />,
        category: "Store App",
        title: "Store Settings",
        desc: "Let dispensaries manage store information, business hours, delivery zones, and other essential details."
    },
    {
        icon: <FileText size={20} />,
        category: "Store App",
        title: "Order Details",
        desc: "Let stores view order summaries, customer information, delivery instructions, and payment details."
    },
    {
        icon: <Tag size={20} />,
        category: "Store App",
        title: "Promo Code",
        desc: "Enable dispensaries to offer exclusive discounts, promotions, and special offers to attract new customers."
    },
    {
        icon: <ImageIcon size={20} />,
        category: "Store App",
        title: "Add Products",
        desc: "Let stores upload product images, descriptions, prices, and availability to showcase their cannabis offerings."
    },
    {
        icon: <BarChart size={20} />,
        category: "Store App",
        title: "Earning Report",
        desc: "Let dispensaries view sales metrics, revenue trends, and transaction history to gain insights."
    },
    {
        icon: <User size={20} />,
        category: "Store App",
        title: "Manage Profile",
        desc: "Enable stores to update contact information, social media links, and store descriptions to showcase offerings."
    }
];

const adminFeatures = [
    {
        icon: <LayoutDashboard size={22} />,
        title: "Dashboard Overview",
        desc: "Gain a complete real-time comprehension of the delivery business’s performance, which includes statistical data relating to orders."
    },
    {
        icon: <Menu size={22} />,
        title: "Menu Management",
        desc: "Quickly implement the system on your existing menus, add new products and price updates, and organize categories."
    },
    {
        icon: <ClipboardList size={22} />,
        title: "Order Management",
        desc: "Track the orders coming in real-time, assign orders to drivers and monitor delivery status for fulfilling seamlessly."
    },
    {
        icon: <Users size={22} />,
        title: "Customer Management",
        desc: "Managed customer profiles, checked order history, and replied to customer queries and feedback for ultimate satisfaction."
    },
    {
        icon: <MapPin size={22} />,
        title: "Multi-Location Support",
        desc: "Make it simple for management to oversee several locations from a single admin panel to take charge of operations."
    },
    {
        icon: <Tag size={22} />,
        title: "Promotions & Discounts",
        desc: "Develop and run promotional campaigns, discount offers, and loyalty programs to attract new customers and retain existing ones."
    }
];

const solutions = [
    { icon: <Smartphone size={22} />, title: "Customer Android + iOS App", desc: "Native apps for customers to order seamlessly." },
    { icon: <Truck size={22} />, title: "Delivery Person App", desc: "Dedicated app for drivers to manage and fulfill orders efficiently." },
    { icon: <Store size={22} />, title: "Store Owner App", desc: "App for store managers to update menus, confirm orders & track earnings." },
    { icon: <MonitorSmartphone size={22} />, title: "Super Admin Web Panel", desc: "Master control panel to oversee the entire delivery ecosystem." },
    { icon: <Store size={22} />, title: "Store Web Panel", desc: "Comprehensive dashboard for stores to manage inventory and staff." },
    { icon: <DollarSign size={22} />, title: "Billing Web Panel", desc: "Robust accounting and billing management for financial health." },
    { icon: <Truck size={22} />, title: "Dispatcher Web Panel", desc: "Control center for dispatchers to route drivers efficiently." },
    { icon: <Globe size={22} />, title: "Customer Website", desc: "Responsive web portal for users who prefer ordering from browsers." }
];

const businessModels = [
    {
        icon: <MonitorSmartphone size={28} />,
        title: "Weedmaps Clone App",
        desc: "Weedmaps is a leading platform connecting consumers with dispensaries. Our solution mirrors its success with seamless order placements and location-based services.",
        dark: true
    },
    {
        icon: <Rocket size={28} />,
        title: "42 Fast Buds Clone App",
        desc: "Known for quick delivery options in the cannabis space. We provide a similar model, focusing on fast, reliable delivery with real-time tracking.",
        dark: true
    },
    {
        icon: <Store size={28} />,
        title: "Leafly Clone App",
        desc: "Leafly offers detailed product info, reviews, and delivery. Our solution offers similar features for customers to explore and order cannabis efficiently.",
        dark: true
    }
];

const steps = [
    {
        title: "Gathering Requirements",
        image: "/Cannabis-App/process1.webp",
    },
    {
        title: "Design & Development",
        image: "/Cannabis-App/process2.webp",
    },
    {
        title: "Collect Third-Party Accounts",
        image: "/Cannabis-App/process3.webp",
    },
    {
        title: "Test and Launch",
        image: "/Cannabis-App/process4.webp",
    },
];

const whyChooseUs = [
    {
        icon: <BadgeCheck size={28} />,
        title: "Launch in 5 Days",
    },
    {
        icon: <Settings size={28} />,
        title: "Tailor the App",
    },
    {
        icon: <Smartphone size={28} />,
        title: "Intuitive Design",
    },
    {
        icon: <Globe size={28} />,
        title: "Multi-Language & Currency",
    },
    {
        icon: <Headphones size={28} />,
        title: "Top-Tier Security",
    },
];

const testimonials = [
    {
        name: "Mr. Medyan",
        image: "/Cannabis-App/client1.webp",
        text: "Mr. Medyan from Jordan shares his experience highlighting clear communication & strong delivery quality."
    },
    {
        name: "Anurag Borkar",
        image: "/Cannabis-App/client2.webp",
        text: "Mr. Anurag Borkar from Papua New Guinea appreciates our timely delivery and dedicated after-sales support."
    },
    {
        name: "Mr. Sertima",
        image: "/Cannabis-App/client3.webp",
        text: "Mr. Sertima from Trinidad and Tobago praises our professionalism, transparency, and support for his project."
    },
    {
        name: "Elizabeth Ramos",
        image: "/Cannabis-App/client4.webp",
        text: "Ms. Elizabeth Ramos from the Philippines shares her experience, praising our ability to deliver the App as expected."
    }
];

const apps = [
    { title: "Grocery Delivery App", image: "/Cannabis-App/app1.webp" },
    { title: "Medicine Delivery App", image: "/Cannabis-App/app2.webp" },
    { title: "Flower Delivery App", image: "/Cannabis-App/app3.webp" },
    { title: "Courier Delivery App", image: "/Cannabis-App/app4.webp" },
    { title: "Meat Delivery App", image: "/Cannabis-App/app5.webp" },
    { title: "Fuel Delivery App", image: "/Cannabis-App/app6.webp" },
    { title: "Stationary Delivery App", image: "/Cannabis-App/app7.webp" },
    { title: "Alcohol Delivery App", image: "/Cannabis-App/app8.webp" },
];

const recognitionPlatforms = [
    { name: "Trustpilot", rating: "4.4", logo: "/Cannabis-App/trustpilot.jpg" },
    { name: "Google", rating: "4.9", logo: "/Cannabis-App/google.jpg" },
    { name: "Clutch", rating: "5.0", logo: "/Cannabis-App/clutch.jpg" },
    { name: "GoodFirms", rating: "4.9", logo: "/Cannabis-App/goodfirms.jpg" },
];

const faqs = [
    {
        question: "Is it legal to use a Cannabis Delivery App?",
        answer:
            "Yes, our software operates strictly within the legal bounds of regions where cannabis delivery is permitted. It includes age verification and compliance tracking."
    },
    {
        question: "How long does it take to deploy the Marijuana Delivery App?",
        answer:
            "With our ready-made solution, your app can be customized and deployed to the App Store and Play Store in just 5 working days."
    },
    {
        question: "Do you offer multi-currency and multi-language support?",
        answer:
            "Yes, our solution comes beautifully equipped with multi-language and multi-currency capabilities to expand your operations globally."
    },
    {
        question: "Can I customize the app according to my brand?",
        answer:
            "Absolutely! Our white-label solution allows you to apply your brand Name, Logo, colors, and specific customizations to make it fully yours."
    }
];

const CannabisDeliveryApp = () => {
    const [active, setActive] = useState(null);
    const [activeTab, setActiveTab] = useState("User App");

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    const tabs = ["User App", "Driver App", "Store App"];

    return (
        <div className="w-full">

            {/* ================= HERO SECTION ================= */}
            <section className="w-full bg-black py-20 flex items-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

                    {/* LEFT CONTENT */}
                    <div className="text-white space-y-6 max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Marijuana Delivery{" "}
                            <span className="text-[#3b873e]">App Solution</span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Launch your marijuana delivery business with ease! Our cannabis delivery app streamlines operations, helping you manage orders, drivers, and customers effortlessly. Start your online weed delivery journey today with our ready-to-use solution.
                        </p>

                        <button className="bg-[#3b873e] hover:bg-[#2c6e2e] text-white px-7 py-3 rounded-full font-semibold transition duration-300">
                            Request Demo
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/Cannabis-App/hero-image.webp"
                            alt="Marijuana Delivery App"
                            className="w-[650px] md:w-[750px] lg:w-[800px] max-w-none"
                        />
                    </div>

                </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}
            <section className="w-full bg-white py-32 flex items-center">

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-20 px-10">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src="/Cannabis-App/about-us.webp"
                            alt="Grow with Marijuana App"
                            className="w-[520px] object-contain"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        <span className="text-sm bg-gray-100 px-5 py-1 rounded-full text-[#3b873e] font-medium">
                            About Our Solution
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
                            Accelerate Growth with a Scalable{" "}
                            <span className="text-[#3b873e]">Marijuana Delivery App</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-5">
                            As digitization reshapes industries, customers increasingly prefer online services—even for cannabis. Staying ahead in this evolving market requires a robust online presence, and that’s where our marijuana delivery app makes a difference.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-5">
                            At KryossOne, we offer a cutting-edge weed delivery app that simplifies operations, connects stakeholders, and ensures seamless delivery. With advanced features and an intuitive interface, your business can attract more customers and build loyalty.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            With our app, you’ll have full control over your operations, from order management to customer support, all within a single platform. This efficiency helps you focus on what matters—growing your business!
                        </p>

                    </div>

                </div>

            </section>

            {/* ================= HOW IT WORKS SECTION ================= */}
            <section className="w-full bg-gradient-to-r from-[#1b3d1b] to-[#2c522b] py-32 flex items-center">

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-20 px-10">

                    {/* LEFT CONTENT */}
                    <div className="text-white">

                        <span className="text-sm border border-white px-4 py-1 rounded-full">
                            Simple Operations
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
                            How Our <span className="text-[#84d682]">Marijuana Delivery App Works</span>
                        </h2>

                        <p className="text-gray-200 mb-10 text-lg max-w-xl">
                            Our marijuana delivery app is designed to make your business operations smooth and efficient. From order placement to delivery, everything is streamlined to ensure a seamless experience.
                        </p>

                        {/* STEP 1 */}
                        <div className="flex gap-5 mb-8">
                            <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">1</div>
                            <div>
                                <h4 className="font-semibold text-lg">Easy User Registration</h4>
                                <p className="text-gray-300">Customers can quickly register and start placing orders with a simple sign-up process.</p>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="flex gap-5 mb-8">
                            <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">2</div>
                            <div>
                                <h4 className="font-semibold text-lg">Browse & Select Products</h4>
                                <p className="text-gray-300">Users can browse through a wide range of cannabis products and easily select their preferred items.</p>
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="flex gap-5">
                            <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">3</div>
                            <div>
                                <h4 className="font-semibold text-lg">Order Placement & Payment</h4>
                                <p className="text-gray-300">Secure and quick payment options to ensure a hassle-free transaction for customers.</p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center flex-col gap-8">
                        {/* STEP 4 */}
                        <div className="flex gap-5 text-white">
                            <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">4</div>
                            <div>
                                <h4 className="font-semibold text-lg">Real-Time Order Tracking</h4>
                                <p className="text-gray-300">Customers can track their orders in real-time, providing transparency throughout the process.</p>
                            </div>
                        </div>
                        {/* STEP 5 */}
                        <div className="flex gap-5 text-white">
                            <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">5</div>
                            <div>
                                <h4 className="font-semibold text-lg">Efficient Driver Assignment</h4>
                                <p className="text-gray-300">Drivers are automatically assigned orders based on proximity, ensuring fast and efficient deliveries.</p>
                            </div>
                        </div>
                        {/* STEP 6 */}
                        <div className="flex gap-5 text-white">
                            <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">6</div>
                            <div>
                                <h4 className="font-semibold text-lg">Order Management for Store Owners</h4>
                                <p className="text-gray-300">Store owners can manage incoming orders, track inventory, and monitor performance from an intuitive dashboard.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="w-full py-24 flex items-center justify-end bg-gray-100">

                <div className="relative w-[95%] md:w-[90%] max-w-7xl py-16 bg-[#1a3819] rounded-l-[40px] md:rounded-l-[200px] flex items-center pl-8 md:pl-24 overflow-hidden">

                    {/* LEFT CONTENT */}
                    <div className="w-1/2 text-white z-10">
                        <h2 className="text-4xl font-semibold leading-snug mb-6">
                            Ready to Launch Your Marijuana Delivery Business?
                        </h2>

                        <p className="text-gray-200 mb-8 max-w-lg">
                            Get your marijuana delivery app up and running in just 5 working days! Connect with us now for a live demo and start your journey toward success with our powerful solution.
                        </p>

                        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#1a3819] transition">
                            Get Your Demo Now
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-1/2 flex justify-end items-end">
                        <img
                            src="/Cannabis-App/cta-phone.webp"
                            alt="Marijuana Delivery App"
                            className="h-[420px] object-contain"
                        />
                    </div>

                </div>

            </section>

            {/* ================= PART 1 (KEY FEATURES) ================= */}
            <section className="w-full bg-gray-50 py-32">

                {/* Heading */}
                <div className="text-center max-w-5xl mx-auto mb-16 px-4">
                    <span className="text-xs border px-4 py-1 rounded-full text-[#3b873e] border-[#3b873e]">
                        Features
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                        Key Features for <span className="text-[#3b873e]">Users, Drivers & Store Owners</span>
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        Our marijuana delivery app provides powerful features tailored perfectly for all stakeholders involved in the ecosystem.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-16 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-full font-semibold transition ${activeTab === tab
                                ? "bg-[#3b873e] text-white"
                                : "bg-white text-gray-700 border hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Feature Cards */}
                <div className="max-w-[1400px] mx-auto px-10">
                    <div className="grid md:grid-cols-3 gap-12">
                        {featureList.filter(item => item.category === activeTab).map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-6 p-10 rounded-2xl border border-[#b2e3b4] bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300 min-h-[160px]"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#3b873e] text-white shrink-0">
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <div>
                                    <h4 className="font-semibold text-[#3b873e] text-xl mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* ================= PART 2 (ADMIN PANEL) ================= */}
            <section className="w-full bg-gray-50 py-32">

                {/* Heading */}
                <div className="text-center max-w-5xl mx-auto px-6 mb-20">
                    <span className="text-sm border border-[#3b873e] text-[#3b873e] px-5 py-1 rounded-full">
                        Admin Panel
                    </span>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
                        Powerful Web Admin Panel <span className="text-[#3b873e]">for Seamless Management</span>
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                        Our web admin panel provides you with complete control over your marijuana delivery business. Easily manage orders, track deliveries, oversee drivers, and monitor your business performance—all from one intuitive dashboard.
                    </p>
                </div>

                {/* Content */}
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center px-10">

                    {/* Left Features */}
                    <div className="space-y-8">
                        {adminFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg flex gap-5 hover:-translate-y-1 hover:shadow-xl transition duration-300"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#3b873e] text-[#3b873e] shrink-0">
                                    {item.icon}
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-[#3b873e] mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Image */}
                    <div className="bg-[#1b3d1b] rounded-3xl p-14 flex justify-center">
                        <img
                            src="/Cannabis-App/admin-panel.webp"
                            alt="Admin Panel"
                            className="w-[520px] md:w-[600px] object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* ================= PART 3 (SOLUTIONS) ================= */}
            <section className="w-full bg-white py-32">

                <div className="text-center max-w-5xl mx-auto px-6 mb-20">
                    <span className="text-sm border border-[#3b873e] text-[#3b873e] px-5 py-1 rounded-full">
                        What We Provide
                    </span>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
                        Comprehensive <span className="text-[#3b873e]">Marijuana Delivery App Solutions</span>
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg">
                        We offer a complete marijuana delivery app solution with Android and iOS apps for customers and drivers, plus a web admin panel to manage all operations smoothly.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 px-10">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="relative border border-[#9fd8a1] rounded-2xl p-8 text-left hover:shadow-xl transition"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#3b873e] text-white flex items-center justify-center shadow-lg mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#27642a] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </section>

            {/* ================= PART 4 (BUSINESS MODELS) ================= */}
            <section className="w-full py-32 text-white bg-gradient-to-r from-[#0d1f0d] via-[#163615] to-[#122e11]">

                <div className="text-center max-w-5xl mx-auto px-6 mb-20">
                    <span className="text-sm border border-white px-5 py-1 rounded-full">
                        Similar Business Models
                    </span>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
                        <span className="text-[#84d682]">Similar Business Models</span>{" "}
                        to Popular Cannabis Apps
                    </h2>

                    <p className="text-gray-300 mt-6 text-lg">
                        We offer a marijuana delivery app solution modeled after successful platforms like Weedmaps, 42 Fast Buds, and Leafly helping you build a successful weed delivery business.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 px-10">
                    {businessModels.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl p-10 border hover:shadow-xl transition bg-white/5 border-white/20"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6 bg-white/10 text-[#84d682]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                {item.title}
                            </h3>
                            <p className="text-base text-gray-300">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </section>

            {/* ================= PART 5 (FINAL CTA) ================= */}
            <section className="w-full py-32 flex items-center justify-center bg-gray-100">

                <div className="relative w-[92%] max-w-[1400px] py-20 rounded-3xl 
  bg-gradient-to-r from-[#214a22] via-[#2d6b2f] to-[#409443] 
  flex items-center px-12 md:px-20 overflow-hidden">

                    <div className="text-white max-w-xl z-10">

                        <h2 className="text-5xl font-semibold leading-tight mb-8">
                            Get Started with Your Marijuana Delivery App Today!
                        </h2>

                        <p className="text-gray-200 text-lg mb-10">
                            Ready to launch your weed delivery business? Let us help you get your app live in just 5 working days! Contact us now for a free demo and kickstart your business.
                        </p>

                        <button className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-[#1a3819] transition">
                            Contact Us for Demo
                        </button>

                    </div>

                    <div className="absolute right-16 bottom-[-60px]">
                        <img
                            src="/Cannabis-App/delivery-driver.webp"
                            alt="Marijuana Delivery"
                            className="h-[520px] object-contain"
                        />
                    </div>

                </div>

            </section>

            {/* SECTION 1 DEVELOPMENT PROCESS */}
            <section className="w-full bg-white py-32">

                <div className="text-center max-w-5xl mx-auto mb-20 px-6">
                    <span className="text-sm border px-5 py-1 rounded-full border-[#3b873e] text-[#3b873e]">
                        Development Process
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                        Our Seamless{" "}
                        <span className="text-[#3b873e]">
                            Marijuana Delivery App Development Process
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-6 text-lg">
                        Our app development process is designed to ensure your marijuana delivery app is built efficiently and delivered on time.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto px-10">
                    <div className="grid md:grid-cols-2 gap-16">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-[#e4fce5] rounded-3xl p-10 text-center shadow-md"
                            >
                                <h3 className="text-2xl font-semibold text-[#27642a] mb-8">
                                    {step.title}
                                </h3>

                                <div className="bg-white rounded-2xl p-8 flex justify-center">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-[420px] object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* SECTION 7 LAUNCH APP */}
            <section className="w-full bg-[#1b3d1b] text-white py-32">

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center px-10">

                    <div className="flex justify-center">
                        <img
                            src="/Cannabis-App/launch-in-5-days.webp"
                            alt="Team discussion"
                            className="w-[520px] object-contain"
                        />
                    </div>

                    <div>
                        <span className="text-sm border border-[#84d682] px-5 py-1 rounded-full text-[#84d682]">
                            Rapid Deployment
                        </span>

                        <h2 className="text-4xl md:text-5xl font-semibold mt-6 mb-8 leading-tight">
                            Launch Your Marijuana Delivery{" "}
                            <span className="text-[#84d682]">App in Just 5 Days</span>
                        </h2>

                        <p className="text-gray-300 mb-5 text-lg">
                            Get your marijuana delivery app live and running in just 5 working days with our fast, easy-to-deploy solution. Skip the long development timeline.
                        </p>

                        <p className="text-gray-300 mb-5 text-lg">
                            With our marijuana delivery app, you can have a fully functional platform up and running quickly—connecting customers, drivers, and store owners seamlessly.
                        </p>

                        <p className="text-gray-300 text-lg">
                            From real-time tracking and secure payments to efficient driver management, our app ensures a smooth experience.
                        </p>
                    </div>

                </div>

                {/* Why Choose */}
                <div className="text-center max-w-5xl mx-auto px-6 mt-32">
                    <span className="text-sm border border-[#84d682] text-[#84d682] px-5 py-1 rounded-full">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-6">
                        Why Choose{" "}
                        <span className="text-[#84d682]">
                            Our Marijuana Delivery App?
                        </span>
                    </h2>

                    <p className="text-gray-300 mt-5 text-lg">
                        Our marijuana delivery app is the ideal solution to quickly launch your cannabis delivery business with minimal hassle.
                    </p>
                </div>

                {/* Middle Image */}
                <div className="flex justify-center mt-16 px-6">
                    <img
                        src="/Cannabis-App/why-choose.webp"
                        alt="Why Choose Marijuana Delivery"
                        className="max-w-6xl w-full object-contain"
                    />
                </div>

                {/* Bullet Points */}
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 mt-16 px-10 text-base text-gray-200">
                    <ul className="space-y-5 list-disc pl-6">
                        <li>
                            Get your on-demand weed delivery app up and running in just 5 working days, not weeks, allowing you to start serving immediately.
                        </li>
                        <li>
                            Tailor the app to your unique needs, services, and branding, creating a personalized user experience.
                        </li>
                        <li>
                            With a simple, intuitive design, both customers and drivers can easily navigate the app for a seamless experience.
                        </li>
                    </ul>

                    <ul className="space-y-5 list-disc pl-6">
                        <li>
                            Our app is designed to grow with your business, offering flexibility and top-tier security to protect user data.
                        </li>
                        <li>
                            Keep your customers informed with instant notifications on order status, deliveries, and more.
                        </li>
                        <li>
                            Expand your reach effortlessly with built-in multi-currency and multi-language options, ensuring a global experience.
                        </li>
                    </ul>
                </div>

            </section>

            {/* SECTION 8 TESTIMONIALS */}
            <section className="w-full py-32 bg-gradient-to-r from-[#e7f2d7] via-[#d7e7d8] to-[#e4f2d7]">

                <div className="max-w-[1400px] mx-auto px-10 text-center">
                    <span className="text-sm border px-5 py-1 rounded-full border-[#3b873e] text-[#3b873e]">
                        People Love Our Platform
                    </span>

                    <h2 className="text-4xl font-semibold mt-6 mb-16">
                        What Our Clients Say <span className="text-[#3b873e]">About Working With Us</span>
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10">
                        {testimonials.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="relative w-28 h-28 mx-auto mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full rounded-xl object-cover"
                                    />
                                    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-9 h-9 bg-[#3b873e] text-white rounded-full flex items-center justify-center">
                                        <Play size={16} />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-lg">{item.name}</h4>
                                <p className="text-sm text-gray-600 mt-3">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* SECTION 9 APPS */}
            <section className="w-full bg-gray-50 py-32">

                <div className="text-center mb-20 px-6">
                    <span className="text-sm border border-[#3b873e] px-5 py-1 rounded-full text-[#3b873e]">
                        Product Showcase
                    </span>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-6">
                        Explore Other <span className="text-[#3b873e]">On-Demand Delivery Options</span>
                    </h2>
                </div>

                <div className="max-w-[1400px] mx-auto px-10">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
                        {apps.map((app, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                            >
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />
                                <div className="p-5 text-center">
                                    <h4 className="text-base font-semibold">
                                        {app.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* SECTION 10 RECOGNITION */}
            <section className="w-full py-32 bg-[#1b3d1b]">

                <div className="max-w-[1400px] mx-auto px-10 text-center">
                    <span className="text-sm border border-[#84d682] text-[#84d682] px-5 py-1 rounded-full">
                        Awards & Recognition
                    </span>

                    <h2 className="text-4xl md:text-5xl font-semibold text-white mt-6">
                        Recognized by{" "}
                        <span className="text-[#84d682]">
                            Global Review Platforms & Industry Leaders
                        </span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {recognitionPlatforms.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl py-8 px-6 flex flex-col items-center shadow-md hover:shadow-lg transition"
                            >
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="h-10 mb-4 object-contain"
                                />
                                <div className="flex gap-1 text-yellow-400 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                    ({item.rating})
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* SECTION 11 FAQ */}
            <section className="w-full bg-white py-32">

                <div className="text-center mb-20">
                    <span className="text-sm border border-[#3b873e] text-[#3b873e] px-5 py-1 rounded-full">
                        FAQ's
                    </span>

                    <h2 className="text-4xl md:text-5xl font-semibold mt-6 text-[#3b873e]">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-x-20 px-10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b py-6">
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full text-left text-lg font-medium"
                            >
                                {faq.question}

                                {active === index ? (
                                    <Minus size={20} />
                                ) : (
                                    <Plus size={20} />
                                )}
                            </button>

                            {active === index && (
                                <p className="text-gray-600 text-base mt-4 leading-relaxed">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </section>

        </div>
    );
};

export default CannabisDeliveryApp;
