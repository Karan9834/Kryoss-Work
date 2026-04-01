import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShoppingBag,
    CheckCircle,
    Store,
    Shield,
    Smartphone,
    MapPin,
    CreditCard,
    Clock,
    MessageSquare,
    Bell,
    Star,
    Settings,
    FileText,
    BarChart,
    Zap,
    Headphones,
    Server,
    Code,
    Database,
    RefreshCw,
    UserCheck,
    Phone,
    LayoutDashboard,
    Compass,
    Search,
    Navigation,
    DollarSign,
    Users,
    Layers,
    Heart,
    Plane,
    Building2,
    Truck,
    PlayCircle,
    GraduationCap,
    ArrowRight,
    Send,
    Mail,
    Globe,
    ShoppingCart,
    Apple,
    Milk,
    Coffee,
    Package,
    TrendingUp,
    History,
    User,
    Car
} from 'lucide-react';

// Reusable components
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const GroceryDeliveryApp = () => {
    const [activeTab, setActiveTab] = useState('Customer App');
    const [activeFeatureTab, setActiveFeatureTab] = useState('common');

    const panelFeatures = {
        "Customer App": {
            icon: Users,
            image: "/images/grocery-customer.jpg",
            features: [
                "Easy Registration & Sign-In", "Push Notifications", "Ratings & Reviews",
                "Password Recovery", "Security & Ratings", "Quick Ordering",
                "Social Media Login", "Account Management", "Multiple Payment Options",
                "Real-Time Updates", "Live Chat With Store", "Order Tracking",
                "Reorder Items", "Multiple Address Options"
            ]
        },
        "Driver App": {
            icon: Car,
            image: "/images/grocery-driver.jpg",
            features: [
                "Unique Driver Profile", "Social Media Login", "Quick Registration",
                "Set Availability", "Delivery Management", "Accept/Decline Delivery",
                "Location Tracking", "Previous and Upcoming Deliveries",
                "Contact With Store", "Push Notifications", "Track Earnings", "Delivery History"
            ]
        },
        "Store App": {
            icon: Store,
            image: "/images/grocery-store.jpg",
            features: [
                "Store Profile Management", "Product Catalog", "Inventory Management",
                "Order Management", "Accept/Decline Orders", "Discount Management",
                "Analytics Dashboard", "Payment Tracking", "Customer Reviews",
                "Push Notifications", "Sales Reports", "Delivery Partner Management"
            ]
        },
        "Admin Panel": {
            icon: Shield,
            image: "/images/grocery-admin.jpg",
            features: [
                "Create Sub Admins", "Multi-Level Admin Access", "Complete Dashboard",
                "Store Management", "Driver Management", "Customer Management",
                "God's Eye View", "Transaction History", "Commission Management",
                "Category Management", "Payment Reports", "Push Notifications"
            ]
        }
    };

    const commonFeatures = [
        { title: "Tutorial & Onboarding Screens", icon: Smartphone, desc: "With the help of tutorial screens, customers can see custom illustrations presenting the features and benefits of the best grocery shopping app." },
        { title: "Digital Invoice Generating Tool", icon: FileText, desc: "The system will instantly send the digital copy of the invoice to the customer's email ID containing all information related to that particular order." },
        { title: "Account Setup Panel", icon: Users, desc: "Customers can set up their account just by typing email address, phone number, gender or using social media accounts." },
        { title: "Real-Time Order Tracking", icon: Navigation, desc: "Customers can check the shipping status until the grocery order arrives, enhancing satisfaction and loyalty." },
        { title: "Cost Calculator", icon: DollarSign, desc: "Customers can easily know and compare the cost of items, ordering as per their budget." },
        { title: "Re-Order", icon: RefreshCw, desc: "With a single tap, customers can instantly order the same items at any selected address with option to modify if required." },
        { title: "Filters", icon: Settings, desc: "Users can use multiple filters to find exactly what they want from thousands of products." },
        { title: "Multiple Address Options", icon: MapPin, desc: "Add multiple addresses and choose any during placing the online order for convenience." }
    ];

    const advanceFeatures = [
        { title: "In-App Wallet", icon: CreditCard, desc: "Secure in-app wallet for fast, cashless, and hassle-free transactions with cashback offers." },
        { title: "Subscription Plans", icon: Clock, desc: "Allow customers to subscribe to regular grocery deliveries with special discounts." },
        { title: "Multi-Language", icon: Globe, desc: "Allow users to operate the application in their preferred native languages." },
        { title: "Smart Analytics", icon: BarChart, desc: "Comprehensive dashboard for admins to track business growth and user metrics." },
        { title: "Heat Map Option", icon: MapPin, desc: "Empower delivery partners to see locations with maximum orders to optimize routes." },
        { title: "Automated Dispatch", icon: Zap, desc: "Intelligent system that auto-assigns the nearest available delivery partner." },
        { title: "Loyalty Programs", icon: Star, desc: "Reward frequent customers with points that can be redeemed for discounted orders." },
        { title: "Inventory Management", icon: Package, desc: "Real-time inventory tracking with low stock alerts and automated reordering." }
    ];

    const solutions = [
        { title: "Fully Customizable", icon: Settings, desc: "Our Script is flexible enough to meet the specific needs of the Clients." },
        { title: "Bug Support", icon: Shield, desc: "If there are any bugs or issues you can report to us, we will work on it & Update the status of the work. This service will be provided free for the first year." },
        { title: "Licence For A Lifetime", icon: FileText, desc: "Source Code for a lifetime license and one domain/ brand. With a one-off payment, your software will be covered for the duration of a lifetime." },
        { title: "Linux Server Installation", icon: Server, desc: "Web Panels will work smoothly in open source Linux Servers. You will be informed once the server configuration and hosting has been done by the technical team." },
        { title: "Open Source Database", icon: Database, desc: "We use MySQL, which is an open source and one of the safest databases. You will also have to pay minimal price for license renewal every year." },
        { title: "Payments", icon: CreditCard, desc: "Our Scripts support International Payment Gateways, API with easy Installations of new ones as per the business needs." },
        { title: "Technical Support", icon: Headphones, desc: "We provide One Year Free Support, even non-technical entrepreneurs will be benefitted, we handle everything till everything is launched." },
        { title: "Open Source Code", icon: Code, desc: "We provide a 100% open source code that will allow all types of customization's." }
    ];

    const stats = [
        { label: "Projects Delivered", val: "750" },
        { label: "Development Staff", val: "150" },
        { label: "Years of Experience", val: "10" },
        { label: "Satisfied Clients", val: "450" }
    ];

    const portfolio = [
        {
            title: "Heritage TUCH",
            subtitle: "Online Milk Delivery App",
            desc: "Heritage TUCH is an online milk and dairy products delivery app offering natural, farm-fresh milk and dairy products right at your doorstep every morning.",
            tags: ["Milk Delivery", "Dairy", "Subscription"],
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b"
        },
        {
            title: "Daily Moo",
            subtitle: "Milk & Breakfast Subscription App",
            desc: "All our products are made with care and in collaboration with the feedback of thousands of our customers. Live a pure and healthy life with truly pure products.",
            tags: ["Subscription", "Breakfast", "Dairy"],
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
        },
        {
            title: "Meatigo",
            subtitle: "Fresh Meats Delivery",
            desc: "Choose from over 100+ Fresh Meats & Delicatessen Products with 120 Minutes Home Delivery across neighbourhoods.",
            tags: ["Meat Delivery", "Fresh", "Premium"],
            image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82c"
        },
        {
            title: "Superfoods",
            subtitle: "Online Grocery Shopping App Pune",
            desc: "Searching for the best buys in vegetables, fruits, dairy, and groceries like grains, snacks, beverages, chocolates, and more.",
            tags: ["Grocery", "Fruits", "Vegetables"],
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
        },
        {
            title: "Groxery",
            subtitle: "Order Grocery Online",
            desc: "Online store bringing essential goods, health care products, household goods, stationery items under one platform.",
            tags: ["Grocery", "E-commerce", "Essential"],
            image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2"
        }
    ];

    const latestWorks = [
        { title: "e-grocers", subtitle: "Grocery Delivery", image: "https://images.unsplash.com/photo-1542838132-92c53300491e" },
        { title: "Kryoss Grocer", subtitle: "Multi-Vendor", image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2" },
        { title: "GO-Hypermarket", subtitle: "Grocery Store", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c" }
    ];

    const featuresList = [
        { name: "Social Login", icon: Users },
        { name: "Advanced Search", icon: Search },
        { name: "Product Details", icon: Package },
        { name: "Multiple Orders", icon: ShoppingCart },
        { name: "Multiple Payments", icon: CreditCard },
        { name: "Instant Delivery", icon: Zap },
        { name: "Order History", icon: History },
        { name: "Track Orders", icon: Navigation },
        { name: "Push Notifications", icon: Bell },
        { name: "Offers & Promos", icon: DollarSign }
    ];

    const industries = [
        { name: "Healthcare", icon: Heart },
        { name: "Travel & Tourism", icon: Plane },
        { name: "Banking & Finance", icon: Building2 },
        { name: "Logistics & Transport", icon: Truck },
        { name: "Media & Entertainment", icon: PlayCircle },
        { name: "Education & E-Learning", icon: GraduationCap }
    ];

    const features = activeFeatureTab === "common" ? commonFeatures : advanceFeatures;

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            <Helmet>
                <title>Grocery Delivery App Development | Kryoss</title>
                <meta name="description" content="Create your own grocery delivery platform now! Kryoss Softech offers high-end customized grocery delivery app development for Android and iOS." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-green-400 -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-30"></div>
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-300 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

                <div className="relative z-10 container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 text-left"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-semibold mb-6 tracking-wide text-sm backdrop-blur-md">
                                Premium Solution Available
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                                Create Your Own <br className="hidden lg:block" />
                                <span className="text-green-200">Grocery Delivery</span> Platform Now!
                            </h1>
                            <p className="text-lg md:text-xl text-green-50 font-light leading-relaxed mb-10 max-w-xl">
                                Build your Grocery Delivery Application with us and be ahead of the pack. Kryoss Softech offers a highly interactive and user-friendly online grocery delivery app for your grocery business.
                            </p>
                            <div className="flex gap-4">
                                <a href="#contact-us" className="px-8 py-4 rounded-xl bg-white text-green-600 font-bold text-lg hover:shadow-lg hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
                                    Let's Talk
                                </a>
                            </div>
                        </motion.div>

                        {/* Image Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex justify-center items-center relative"
                        >
                            <div className="relative w-full flex items-center justify-center min-h-[300px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent blur-[80px] rounded-full"></div>
                                <img
                                    src="/images/grocery-delivery-hero.png"
                                    alt="Grocery Delivery App Development"
                                    className="relative z-10 max-h-[500px] w-full object-contain drop-shadow-2xl"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl' }}
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. Breadcrumb */}
            <section className="bg-white/90 border-b border-gray-100 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-green-600 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="hover:text-green-600 cursor-pointer transition-colors duration-300">Solutions</span>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-green-600">Grocery Delivery App Development</span>
                </div>
            </section>

            {/* 3. Home / Intro */}
            <section className="py-20 md:py-28 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Melange of well-versed and <br />
                                <span className="text-green-600">proficient developers</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                                Our team has years of experience in grocery delivery app development, delivering a plethora of online grocery ordering mobile applications in the market. Our customized solutions are designed like Bigbasket, Grofers, OnDoor, Jio Mart, and a lot more, keeping the client's requirements in mind.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                Our team of professionals excels in providing valuable features and highly functional apps using the latest trends & technology. We deliver customized solutions designed specifically for your grocery business needs.
                            </p>
                        </motion.div>

                        {/* Image Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 flex justify-center items-center relative"
                        >
                            <div className="overflow-hidden relative group w-full flex items-center justify-center min-h-[300px]">
                                <img
                                    src="/images/grocery-delivery-intro.png"
                                    alt="Grocery Delivery Platform"
                                    className="max-h-[450px] w-full object-contain"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-xl' }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Must-Have Features (Tabs Layout) */}
            <section className="py-20 bg-[#F0FDF4] border-y border-green-100">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Must-Have Features <span className="text-green-600">for Grocery Delivery App</span>
                        </h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-7xl mx-auto">

                        {/* LEFT IMAGE (40%) */}
                        <div className="w-full lg:w-2/5">
                            <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl relative">
                                <img
                                    src={panelFeatures[activeTab].image}
                                    alt={activeTab}
                                    className="w-full h-full object-cover transition-all duration-500"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'; }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Text */}
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold">{activeTab}</h3>
                                    <p className="text-sm opacity-80">Complete grocery delivery solution</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT (60%) */}
                        <div className="w-full lg:w-3/5 flex flex-col lg:flex-row gap-6">

                            {/* Tabs */}
                            <div className="w-full lg:w-1/3 flex flex-col gap-3">
                                {Object.keys(panelFeatures).map((key) => {
                                    const Icon = panelFeatures[key].icon;
                                    const isActive = activeTab === key;

                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setActiveTab(key)}
                                            className={`relative px-5 py-4 rounded-2xl flex items-center gap-3 transition 
                ${isActive
                                                    ? "bg-green-600 text-white shadow-lg"
                                                    : "bg-white text-gray-600 hover:bg-green-50"
                                                }`}
                                        >
                                            <Icon size={20} />
                                            <span className="font-semibold">{key}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-2/3">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-white rounded-3xl p-8 shadow-lg h-full"
                                    >
                                        <h3 className="text-xl font-bold mb-6">
                                            {activeTab} Features
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {panelFeatures[activeTab].features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle size={16} className="text-green-600" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Features for Grocery App (Grid) */}
            <section className="py-24 bg-[#1E2A3A] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-400/5 blur-[150px]"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Features for Grocery App
                        </h2>

                        {/* Tabs */}
                        <div className="flex justify-center gap-8 text-sm font-medium">
                            <button
                                onClick={() => setActiveFeatureTab("common")}
                                className={`relative pb-2 transition ${activeFeatureTab === "common"
                                    ? "text-green-500"
                                    : "text-gray-400"
                                    }`}
                            >
                                Common Features
                                {activeFeatureTab === "common" && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500"></span>
                                )}
                            </button>

                            <button
                                onClick={() => setActiveFeatureTab("advance")}
                                className={`relative pb-2 transition ${activeFeatureTab === "advance"
                                    ? "text-green-500"
                                    : "text-gray-400"
                                    }`}
                            >
                                Advance Features
                                {activeFeatureTab === "advance" && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500"></span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {features.map((feat, idx) => {
                            const Icon = feat.icon;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx % 4 * 0.1 }}
                                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:bg-gray-800 hover:border-green-500/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-500 transition-colors duration-300">
                                        <Icon className="text-green-500 group-hover:text-white transition-colors" size={24} />
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                        {feat.title}
                                    </h4>

                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        {feat.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* 6. Stats Section */}
            <section className="py-16 bg-[#F0FDF4] relative overflow-hidden border-y border-green-100">
                <div className="absolute inset-0 bg-[url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-green-200">
                        {stats.map((s, index) => (
                            <div key={index} className="p-4">
                                <h3 className="text-4xl md:text-6xl font-extrabold text-[#1E293B] mb-2">{s.val}+</h3>
                                <p className="text-green-600 font-bold uppercase tracking-wider text-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Solution/Package Features */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                What Support <span className="text-green-600">You Get?</span>
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg font-light">
                                Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.
                            </p>
                            <div className="hidden lg:block w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-60 absolute left-10 mt-10"></div>
                        </div>

                        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {solutions.map((sol, i) => {
                                const Icon = sol.icon;
                                return (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-green-600">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">{sol.title}</h4>
                                            <p className="text-sm text-gray-600 font-light">{sol.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Our Work Portfolio */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            OUR GROCERY PRODUCTS
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Work
                        </h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio.slice(0, 3).map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 group flex flex-col h-full"
                            >
                                {/* IMAGE SECTION */}
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'; }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                    {/* Icon */}
                                    <ShoppingBag size={40} className="text-green-400 absolute top-6 right-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />

                                    {/* Title */}
                                    <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold leading-tight z-10">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* CONTENT */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                        {item.desc.substring(0, 120)}...
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {item.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Latest Works Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Latest <span className="text-green-600">Grocery Products</span>
                        </h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {latestWorks.map((work, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 mb-6 border-4 border-white shadow-lg transition-all group-hover:border-green-500 group-hover:scale-105">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'; }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors">{work.title}</h3>
                                <p className="text-green-600 font-semibold uppercase text-xs tracking-wider text-center mt-1">{work.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Industries Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Industries We <span className="text-green-600">Serve</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            As one of the top mobile apps development companies, we provide custom mobile app development solutions for various industries catering startups, software product development companies, digital agencies, and enterprises.
                        </p>
                        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                        {industries.map((ind, index) => {
                            const Icon = ind.icon;
                            return (
                                <div key={index} className="text-center group cursor-pointer">
                                    <div className="w-24 h-24 bg-white hover:bg-green-600 transition-all border border-gray-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-xl group-hover:scale-110">
                                        <Icon className="h-10 w-10 text-green-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-sm uppercase tracking-wider mt-4 text-gray-700 group-hover:text-green-600">{ind.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 11. Global Components */}
            <Testimonial theme="green" />
            <Industries theme={{ bg: "bg-[#F0FDF4]", primary: "text-green-600", iconBg: "bg-green-100", iconColor: "text-green-600" }} />
            <OurWork theme={{ primary: "text-green-600", accent: "bg-green-600" }} />
            <ContactUs id="contact-us" theme="green" />

        </div>
    );
};

// Add missing ChevronRight component
const ChevronRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export default GroceryDeliveryApp;