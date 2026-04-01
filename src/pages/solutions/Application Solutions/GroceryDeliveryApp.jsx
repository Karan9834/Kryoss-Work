import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    ShoppingCart,
    CheckCircle2,
    Users,
    Store,
    ShieldCheck,
    Smartphone,
    Layout,
    Database,
    Globe,
    Layers,
    Search,
    Bell,
    CreditCard,
    Star,
    Heart,
    Share2,
    Smartphone as Phone,
    Mail,
    MapPin,
    Send,
    ArrowRight,
    TrendingUp,
    Clock,
    Briefcase,
    Headphones,
    Bike,
    Coffee,
    Navigation,
    DollarSign,
    Wallet,
    Settings,
    Truck,
    Building2,
    Lock,
    Server,
    Code,
    LifeBuoy,
    Calculator,
    FileText,
    UserPlus,
    Filter,
    Map,
    PlusCircle,
    History,
    Plane,
    GraduationCap,
    PlayCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const GroceryDeliveryApp = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        antispam: ''
    });

    const industries = [
        { name: "Healthcare", icon: Heart },
        { name: "Travel & Tourism", icon: Plane },
        { name: "Banking & Finance", icon: Building2 },
        { name: "Logistics & Transport", icon: Truck },
        { name: "Media & Entertainment", icon: PlayCircle },
        { name: "Education & E-Learning", icon: GraduationCap }
    ];

    const commonFeatures = [
        {
            title: "Tutorial and Onboarding",
            desc: "Custom illustrations presenting the features and benefits of the best grocery shopping app.",
            icon: Layers
        },
        {
            title: "Digital Invoice Tool",
            desc: "Instantly send a digital copy of the invoice to the customer's email ID with all order info.",
            icon: FileText
        },
        {
            title: "Account Setup Panel",
            desc: "Easy setup via email, phone number, gender, or social media accounts integration.",
            icon: UserPlus
        },
        {
            title: "Real-Time Tracking",
            desc: "Check shipping status until the grocery order arrives, enhancing satisfaction and loyalty.",
            icon: Navigation
        },
        {
            title: "Cost Calculator",
            desc: "Easily compare and calculate item costs to order within your specific budget.",
            icon: Calculator
        },
        {
            title: "Re-Order",
            desc: "Instantly re-order the same items at any selected address with a single tap.",
            icon: History
        },
        {
            title: "Advanced Filters",
            desc: "Multiple filters to help users find exactly what they want in seconds.",
            icon: Filter
        },
        {
            title: "Multiple Addresses",
            desc: "Add multiple addresses to a list and choose any during the checkout process.",
            icon: Map
        }
    ];

    const supportFeatures = [
        { title: "Fully Customizable", desc: "Our Script is flexible enough to meet the specific needs of the Clients.", icon: Settings },
        { title: "Bug Support", desc: "Report any bugs or issues; we provide free support for the first year.", icon: LifeBuoy },
        { title: "Licence For A Lifetime", desc: "Source Code for a lifetime license and one domain/brand with a one-off payment.", icon: Lock },
        { title: "Linux Server Installation", desc: "Web Panels work smoothly on open source Linux Servers. We handle configuration.", icon: Server },
        { title: "Open Source Database", desc: "We use MySQL, one of the safest and most reliable open-source databases.", icon: Database },
        { title: "Payments", desc: "Support for International Payment Gateways with easy installation of new ones.", icon: CreditCard },
        { title: "Technical Support", desc: "One year of free support handling everything until your launch is successful.", icon: Headphones },
        { title: "Open Source Code", desc: "100% open source code allowing for all types of deep customizations.", icon: Code }
    ];

    const portfolio = [
        { title: "Heritage TUCH", subtitle: "Online Milk Delivery App", desc: "Natural, farm-fresh milk and dairy products delivery in Hyderabad. One-stop solution for daily dairy needs." },
        { title: "Daily Moo", subtitle: "Milk & Breakfast Subscription", desc: "Ethically sourced products from 69,000+ network farmers. Crafted with love and innovative technology." },
        { title: "Meatigo", subtitle: "Fresh Meats Delivery", desc: "Highest quality meats with meticulous preparation. 120-minute delivery using vacuum-packed American technology." },
        { title: "Superfoods", subtitle: "Online Grocery Pune", desc: "Best app to find and order veggies, fruits, & groceries online including grains, snacks, and masalas." },
        { title: "Groxery", subtitle: "Order Grocery Online", desc: "Online store for Kashmir, bringing essential goods and healthcare products under one platform." }
    ];

    const latestWorks = [
        { title: "e-grocers", subtitle: "Grocery Delivery", image: "https://via.placeholder.com/400x300?text=e-grocers" },
        { title: "Kryoss Grocer", subtitle: "Multi-Vendor", image: "https://via.placeholder.com/400x300?text=Kryoss+Grocer" },
        { title: "GO-Hypermarket", subtitle: "Grocery/Hypermarket", image: "https://via.placeholder.com/400x300?text=GO-Hypermarket" }
    ];

    const testimonials = [
        {
            name: "TOMO MARINKOVIC",
            role: "President Start Up",
            text: "Extremely happy with Kryoss! They delivered exactly my vision and made it better with creative touches. Delivered ahead of schedule and on budget."
        },
        {
            name: "SAM DISTASO",
            role: "Founder - ARK News",
            text: "Rakesh and his team surpassed expectations. They were always available despite different time zones. Highly recommend Kryoss Softech!"
        },
        {
            name: "DR. ROHIT KOHKER",
            role: "CTO, Vidya Prakashan Mandir",
            text: "Leading mobile app development company in the learning sector. Their workforce proved it true with the best results for my business."
        },
        {
            name: "MONA MATHUR",
            role: "Founder, Million Spark Foundation",
            text: "Kryoss was involved in developing an Android application framework that connects students, teachers and parents seamlessly."
        }
    ];

    return (
        <div className="bg-white">
            <Helmet>
                <title>Grocery Delivery App Development | KryossWork</title>
                <meta name="description" content="Create your own Grocery delivery platform now! Kryoss Softech offers high-end customized Grocery delivery app development for Android and iOS." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-600 via-green-600 to-emerald-500 text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-sm font-bold mb-6 border border-white/30 backdrop-blur-sm">
                                Solutions · Grocery Delivery App Development
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
                                Create Your Own <br />
                                <span className="text-gray-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">Grocery Platform</span>
                            </h1>
                            <p className="text-xl text-emerald-50 mb-10 leading-relaxed font-medium">
                                Build your Grocery Delivery Application with us and be ahead of the pack. Highly interactive, user-friendly, and profit-driven solutions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gray-900 text-white hover:bg-black font-black py-4 px-10 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl">
                                    Start Your Business <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative w-full aspect-square bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
                                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full"></div>
                                <ShoppingCart className="h-48 w-48 text-white opacity-40 animate-pulse" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Description */}
            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-black italic tracking-tighter uppercase text-gray-900 border-l-8 border-green-600 pl-6">Proficient Grocery <br />Tech Developers</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Kryoss Softech offers a highly interactive online Grocery delivery app for your business. Our team is a melange of well-versed and proficient developers with years of experience.
                                </p>
                                <div className="flex flex-wrap gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 className="h-5 w-5" /></div>
                                        <span className="font-bold text-sm italic uppercase tracking-tighter text-gray-700">Bigbasket Style</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 className="h-5 w-5" /></div>
                                        <span className="font-bold text-sm italic uppercase tracking-tighter text-gray-700">Jio Mart Features</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-5 -mr-16 -mt-16 rounded-full"></div>
                                <p className="text-gray-600 leading-relaxed italic relative z-10">
                                    "We have delivered a plethora of online Grocery ordering mobile applications in the market. Our team has expertise in customized delivery app development for Android and iOS platforms."
                                </p>
                                <div className="mt-8 flex gap-4">
                                    <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                                        <Smartphone className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                                        <Globe className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                                        <Layers className="h-6 w-6 text-emerald-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mockups Showcase */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter">Grocery Delivery Suite</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-[0.2em] mb-16 text-sm">Seamless multi-panel solution for every stakeholder</p>

                    <div className="grid lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto">
                        {/* User App */}
                        <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[600px] flex flex-col group relative">
                            <div className="bg-emerald-600 p-8 text-white text-left">
                                <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                                    <span>10:30 AM</span>
                                    <Smartphone className="h-4 w-4" />
                                </div>
                                <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded inline-flex">
                                    <MapPin className="h-3 w-3" /> 📍 Home · Indiranagar
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter">🛒 FreshMart</h3>
                            </div>
                            <div className="p-6 text-left space-y-5 grow overflow-y-auto invisible-scrollbar">
                                <div className="p-3 bg-gray-100 rounded-2xl flex items-center gap-3">
                                    <Search className="h-4 w-4 text-gray-400" />
                                    <span className="text-gray-400 text-xs italic">Search grocery items...</span>
                                </div>
                                <div className="flex gap-2 overflow-x-auto invisible-scrollbar py-1">
                                    {["All", "Fruits", "Vegetables", "Dairy", "Snacks"].map(cat => (
                                        <span key={cat} className={`text-[10px] font-bold px-4 py-1.5 rounded-full border ${cat === 'All' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-gray-200 text-gray-600'}`}>
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 italic">Featured Items</span>
                                        <span className="text-[10px] font-black text-emerald-600 uppercase italic">View all</span>
                                    </div>
                                    {[
                                        { name: "Apple", icon: "🍎", price: "₹120/kg" },
                                        { name: "Milk", icon: "🥛", price: "₹60/L" },
                                        { name: "Bread", icon: "🍞", price: "₹35" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-3 rounded-2xl border border-gray-100 bg-gray-50/50">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-100">{item.icon}</div>
                                            <div className="grow">
                                                <div className="flex justify-between items-start mb-0.5">
                                                    <h4 className="font-bold text-sm tracking-tight">{item.name}</h4>
                                                    <PlusCircle className="h-4 w-4 text-emerald-600" />
                                                </div>
                                                <div className="text-xs font-black text-gray-900 tracking-tighter">{item.price}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-emerald-50 rounded-3xl border border-emerald-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-bold text-emerald-700 italic">FreshMart Supermarket</span>
                                        <span className="text-[8px] font-black bg-emerald-600 text-white px-1.5 rounded">OPEN</span>
                                    </div>
                                    <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">0.5 km · 15-20 min</div>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                                <div className="grow mx-4">
                                    <button className="w-full bg-emerald-600 text-white rounded-xl py-2 flex items-center justify-between px-4">
                                        <span className="text-[9px] font-black italic">3 items · ₹245</span>
                                        <span className="text-[9px] font-extrabold uppercase">View Cart →</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Driver App */}
                        <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[600px] flex flex-col group lg:mt-4">
                            <div className="bg-gray-900 p-8 text-white text-left overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600 opacity-20 blur-[50px] rounded-full"></div>
                                <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                                    <span>10:30 AM</span>
                                    <Smartphone className="h-4 w-4" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-black">RK</div>
                                    <div>
                                        <h3 className="text-xl font-bold italic tracking-tight">Ramesh K.</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[9px] text-green-400 font-bold uppercase italic">● Available</span>
                                            <span className="text-[9px] text-yellow-400 font-black">⭐ 4.8</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    <div className="bg-gray-100 p-2.5 rounded-2xl border border-gray-200">
                                        <div className="text-xl font-black text-gray-900 italic">8</div>
                                        <div className="text-[7px] text-gray-500 font-bold uppercase tracking-tighter">Deliveries</div>
                                    </div>
                                    <div className="bg-gray-100 p-2.5 rounded-2xl border border-gray-200">
                                        <div className="text-xl font-black text-gray-900 italic">₹850</div>
                                        <div className="text-[7px] text-gray-500 font-bold uppercase tracking-tighter">Earnings</div>
                                    </div>
                                    <div className="bg-gray-100 p-2.5 rounded-2xl border border-gray-200">
                                        <div className="text-xl font-black text-gray-900 italic">32</div>
                                        <div className="text-[7px] text-gray-500 font-bold uppercase tracking-tighter">km</div>
                                    </div>
                                </div>
                                <div className="p-5 rounded-[2rem] bg-emerald-50 border-2 border-dashed border-emerald-200">
                                    <div className="text-[9px] font-black text-emerald-700 uppercase tracking-widest mb-3 italic">New Delivery Request</div>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black italic">#ORD-1089</span>
                                            <span className="text-xs font-black text-emerald-700 italic">₹85</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 font-bold italic">📍 Indiranagar → Koramangala</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-emerald-600 text-white rounded-xl py-2 text-[10px] font-black uppercase tracking-tighter">✓ Accept</button>
                                        <button className="flex-1 bg-white border border-gray-200 text-gray-500 rounded-xl py-2 text-[10px] font-black uppercase tracking-tighter">✗ Decline</button>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Bike className="h-5 w-5 text-emerald-600" />
                                        <div className="text-[10px] font-black italic">KA-01-AB1234</div>
                                    </div>
                                    <span className="text-[8px] font-black bg-gray-200 px-2 py-1 rounded italic">Available Till 8 PM</span>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                                <div className="flex flex-col items-center gap-1">
                                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                                    <span className="text-[8px] font-bold uppercase text-emerald-600">Earnings</span>
                                </div>
                                <MapPin className="h-5 w-5 text-gray-400" />
                                <Layout className="h-5 w-5 text-gray-400" />
                                <Users className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Store App */}
                        <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[600px] flex flex-col group lg:mt-8">
                            <div className="bg-teal-600 p-8 text-white text-left relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 blur-[40px] rounded-full"></div>
                                <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                                    <span>10:30 AM</span>
                                    <Store className="h-4 w-4" />
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter underline underline-offset-8 decoration-white/30 decoration-4">FreshMart Store</h3>
                                <div className="flex items-center gap-2 mt-4 text-[10px] font-bold uppercase">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                    <span className="text-green-200 italic">Open</span>
                                </div>
                            </div>
                            <div className="p-6 text-left space-y-5 grow overflow-y-auto invisible-scrollbar">
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    <div className="bg-teal-50 p-2.5 rounded-2xl border border-teal-100">
                                        <div className="text-lg font-black italic text-teal-800 tracking-tighter">24</div>
                                        <div className="text-[7px] text-gray-500 font-bold uppercase tracking-widest">New Order</div>
                                    </div>
                                    <div className="bg-teal-50 p-2.5 rounded-2xl border border-teal-100">
                                        <div className="text-lg font-black italic text-teal-800 tracking-tighter">12</div>
                                        <div className="text-[7px] text-gray-500 font-bold uppercase tracking-widest">Processing</div>
                                    </div>
                                    <div className="bg-teal-50 p-2.5 rounded-2xl border border-teal-100">
                                        <div className="text-lg font-black italic text-teal-800 tracking-tighter">₹8.4K</div>
                                        <div className="text-[7px] text-gray-500 font-bold uppercase tracking-widest">Today</div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Incoming Orders</span>
                                        <span className="text-[9px] font-bold text-teal-600 underline">View all</span>
                                    </div>
                                    {[
                                        { id: "#ORD-1089", desc: "3 items · ₹450", status: "Pending", sColor: "bg-orange-100 text-orange-600" },
                                        { id: "#ORD-1090", desc: "5 items · ₹680", status: "Processing", sColor: "bg-blue-100 text-blue-600" }
                                    ].map((m, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-teal-50 transition-colors">
                                            <div>
                                                <div className="text-[10px] font-black text-gray-900 italic mb-0.5">{m.id}</div>
                                                <div className="text-[9px] text-gray-400 font-bold italic">{m.desc}</div>
                                            </div>
                                            <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-tighter ${m.sColor}`}>{m.status}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-5 bg-gray-900 rounded-[2rem] text-white">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Earning Reports</span>
                                        <TrendingUp className="h-4 w-4 text-teal-500" />
                                    </div>
                                    <div className="text-2xl font-black italic tracking-wider text-teal-500">₹42,500</div>
                                    <div className="text-[8px] font-bold text-gray-500 mt-1">This week · Mon - Fri</div>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                                <Layout className="h-5 w-5 text-teal-600" />
                                <Database className="h-5 w-5 text-gray-400" />
                                <Layers className="h-5 w-5 text-gray-400" />
                                <Users className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Admin Panel */}
                        <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[600px] flex flex-col group lg:mt-12">
                            <div className="bg-emerald-900 p-8 text-white text-left relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600 opacity-20 blur-[60px] rounded-full"></div>
                                <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                                    <span>10:30 AM</span>
                                    <ShieldCheck className="h-4 w-4" />
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter">FreshMart Admin</h3>
                                <div className="flex gap-4 mt-4">
                                    <div className="text-center">
                                        <div className="font-black italic text-lg text-emerald-400">48</div>
                                        <div className="text-[7px] font-bold uppercase opacity-60">Stores</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-black italic text-lg text-emerald-400">156</div>
                                        <div className="text-[7px] font-bold uppercase opacity-60">Drivers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-black italic text-lg text-emerald-400">3.2K</div>
                                        <div className="text-[7px] font-bold uppercase opacity-60">Customers</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                                <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">God's Eye View</div>
                                <div className="space-y-4">
                                    {[
                                        { label: "Store Management", val: "48 Stores", icon: Store },
                                        { label: "Driver Management", val: "156 Drivers", icon: Bike },
                                        { label: "Payment Reports", val: "₹1.2L Earnings", icon: TrendingUp }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-3xl group cursor-pointer hover:bg-emerald-50 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-emerald-600 transition-colors">
                                                    <item.icon className="h-5 w-5 text-emerald-600 group-hover:text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[10px] font-black italic">{item.label}</h4>
                                                    <p className="text-[9px] text-gray-400 font-bold uppercase">{item.val}</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-3 w-3 text-gray-300" />
                                        </div>
                                    ))}
                                </div>
                                <div className="p-5 bg-emerald-600 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12"></div>
                                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-80 mb-1">Total Admin Earnings</div>
                                    <div className="text-3xl font-black italic tracking-wider">₹2,85,000</div>
                                </div>
                                <div className="p-3 bg-gray-100 rounded-2xl flex items-center gap-3 text-gray-600 italic">
                                    <Bell className="h-4 w-4 animate-bounce" />
                                    <span className="text-[9px] font-black uppercase tracking-tight">Push Notification Center Active</span>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                                <Layout className="h-5 w-5 text-emerald-900" />
                                <Store className="h-5 w-5 text-gray-400" />
                                <Bike className="h-5 w-5 text-gray-400" />
                                <TrendingUp className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
                        {["Customer", "Driver App", "Store App", "Admin Panel"].map(appType => (
                            <div key={appType} className="flex items-center gap-2 group cursor-pointer">
                                <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                                    <CheckCircle2 className="h-3 w-3 text-emerald-600 group-hover:text-white" />
                                </div>
                                <span className="text-sm font-black italic uppercase tracking-tighter text-gray-700 underline decoration-emerald-200 underline-offset-4">{appType}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Link Features List */}
            <section className="py-24 bg-gray-900 text-emerald-400 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {[
                            "Social Media Login", "Advanced Search Filter", "Item Descriptions", "Place Multiple Orders",
                            "Multiple Payments", "Immediate Delivery", "Check Order History", "Live Order Tracking"
                        ].map(f => (
                            <div key={f} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-emerald-600/10 hover:border-emerald-600/30 transition-all group flex flex-col justify-center items-center text-center">
                                <div className="w-10 h-10 bg-emerald-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 rotate-45 transition-all">
                                    <Settings className="h-5 w-5 text-emerald-500 group-hover:text-white -rotate-45" />
                                </div>
                                <span className="text-xs font-black uppercase italic tracking-widest text-white">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Must-Have Features Cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-6 italic uppercase tracking-tighter">Must-Have Features</h2>
                        <div className="w-32 h-2 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
                        <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px]">Robust Architecture for Scalable Business</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
                        {commonFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -15 }}
                                className="p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-[0_20px_50px_-20px_rgba(0,150,100,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(0,100,50,0.15)] transition-all group border-b-[12px] border-emerald-600"
                            >
                                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-inner group-hover:rotate-12 transition-transform">
                                    <feature.icon className="h-8 w-8 text-emerald-600" />
                                </div>
                                <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-6 text-gray-900 border-b border-gray-100 pb-4 group-hover:text-emerald-700 transition-colors">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed italic font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-200 opacity-5 blur-[120px] rounded-full -mr-[300px] -mt-[300px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">What Support You Get?</h2>
                        <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight">Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {supportFeatures.map((s, index) => (
                            <div key={index} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-emerald-200">
                                <div className="w-14 h-14 bg-gray-900 group-hover:bg-emerald-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                                    <s.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 underline decoration-emerald-200 underline-offset-8 group-hover:decoration-emerald-600 decoration-2 transition-all">{s.title}</h3>
                                <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black italic uppercase tracking-tighter underline underline-offset-[16px] decoration-emerald-600 decoration-8">Our Work Portfolio</h2>
                        <p className="mt-12 text-xs font-black uppercase tracking-[0.6em] text-gray-300 italic">Grocery & Dairy Excellence</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                        {portfolio.map((work, index) => (
                            <div key={index} className="bg-white p-10 rounded-[4rem] border border-gray-100 flex flex-col md:flex-row gap-10 items-center shadow-sm hover:shadow-2xl transition-all group">
                                <div className="w-full md:w-48 aspect-square bg-emerald-50 rounded-[3rem] flex items-center justify-center border-4 border-white shadow-inner group-hover:rotate-6 transition-transform">
                                    <div className="text-emerald-600 font-black text-6xl italic">{work.title.charAt(0)}</div>
                                </div>
                                <div className="grow">
                                    <h3 className="text-2xl font-black italic tracking-tighter uppercase text-gray-900 mb-1">{work.title}</h3>
                                    <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-4">{work.subtitle}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed italic font-medium">{work.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 text-center mb-16">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-400">Our Latest Grosery Products</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {latestWorks.map((work, index) => (
                            <div key={index} className="group">
                                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-100 mb-6 border-[8px] border-white shadow-2xl transition-all group-hover:border-emerald-600">
                                    <img src={work.image} alt={work.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                                </div>
                                <h4 className="text-lg font-black italic uppercase tracking-tighter text-center">{work.title}</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 text-center">{work.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 bg-gray-900 text-white relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black italic mb-8 uppercase tracking-tighter">Industries We Serve</h2>
                        <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed italic font-bold uppercase tracking-widest border-y border-white/10 py-6">Providing custom solutions for startups, agencies, and enterprises across diverse verticals.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-16 md:gap-24">
                        {industries.map((ind, index) => (
                            <div key={index} className="text-center space-y-6 group cursor-pointer">
                                <div className="w-24 h-24 bg-white/5 hover:bg-emerald-600 transition-all border border-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl">
                                    <ind.icon className="h-10 w-10 text-emerald-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-extrabold text-[11px] uppercase tracking-[0.3em] font-black">{ind.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black italic tracking-tighter uppercase underline decoration-emerald-600 decoration-[12px] underline-offset-[16px] mb-12">Client Testimonials</h2>
                        <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.6em] italic">They speak for our excellence</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {testimonials.map((t, index) => (
                            <div key={index} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col relative group hover:bg-emerald-50 transition-colors">
                                <div className="text-emerald-100 text-9xl font-black absolute -top-4 -right-4 select-none group-hover:text-emerald-200 transition-colors">”</div>
                                <p className="text-gray-600 italic text-sm leading-relaxed mb-10 relative z-10 grow font-bold uppercase tracking-tight">“{t.text}”</p>
                                <div className="flex items-center gap-5 border-t border-gray-200 pt-8 mt-auto">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center font-black text-emerald-600 shadow-xl border border-gray-100 text-xl italic">{t.name.charAt(0)}</div>
                                    <div className="grow">
                                        <div className="font-black text-gray-900 italic tracking-tighter text-sm uppercase mb-0.5">{t.name}</div>
                                        <div className="text-[9px] text-emerald-600 font-extrabold uppercase tracking-widest">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-emerald-600 text-white overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Project Delivered", val: "750+" },
                            { label: "Development Staff", val: "150+" },
                            { label: "Years experience", val: "10+" },
                            { label: "Satisfied Clients", val: "450+" }
                        ].map((s, index) => (
                            <div key={index} className="space-y-4">
                                <div className="text-6xl md:text-7xl font-black italic tracking-tighter drop-shadow-lg">{s.val}</div>
                                <div className="text-[11px] font-black uppercase tracking-[0.4em] opacity-80">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto bg-white rounded-[5rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,100,80,0.2)] border border-gray-50">
                        {/* Form Side */}
                        <div className="lg:w-3/5 p-8 md:p-20 bg-white">
                            <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Discuss Your <br /><span className="text-emerald-600 border-b-8 border-emerald-600/20">Requirement!</span></h2>
                            <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic">Guarantee to get back within a business day</p>

                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Name*</label>
                                        <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-emerald-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">E-mail*</label>
                                        <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-emerald-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Phone No</label>
                                        <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-emerald-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Subject*</label>
                                        <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-emerald-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Your Message*</label>
                                    <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-emerald-600 rounded-[2.5rem] px-8 py-6 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner" required></textarea>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                                    <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl font-black italic text-sm border-r-[8px] border-emerald-600">
                                        ANTISPAM: 7 + 5 = ?
                                    </div>
                                    <input name="antispam" type="text" placeholder="Result" className="w-32 bg-emerald-50 border-2 border-emerald-200 rounded-2xl px-6 py-4 font-black text-center focus:outline-none focus:border-emerald-600 transition-all" required />
                                </div>

                                <button className="w-full bg-emerald-600 hover:bg-gray-900 text-white py-8 rounded-[3rem] font-black italic uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 transition-all shadow-[0_25px_50px_-12px_rgba(0,180,100,0.4)]">
                                    <Send className="h-6 w-6" /> Submit Inquiry
                                </button>
                            </form>
                        </div>

                        {/* Info Side */}
                        <div className="lg:w-2/5 p-8 md:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                            <div className="relative z-10 space-y-16">
                                <div>
                                    <h3 className="text-3xl font-black italic tracking-tighter mb-6 uppercase leading-tight">Got a Grocery <br />project in mind?</h3>
                                    <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-10">We would love to hear how we can bring your possibilities to reality through technology and give away <span className="text-emerald-500 font-black not-italic px-1 bg-white/5">2hrs of free consulting</span>.</p>
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-6 group cursor-pointer">
                                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:bg-emerald-600 transition-all shadow-2xl">
                                                <Mail className="h-6 w-6 text-emerald-500 group-hover:text-white" />
                                            </div>
                                            <span className="font-black italic text-base tracking-tighter hover:text-emerald-500 transition-colors">Info@kryosssoftech.org</span>
                                        </div>
                                        <div className="flex items-center gap-6 group cursor-pointer">
                                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:bg-emerald-600 transition-all shadow-2xl">
                                                <Phone className="h-6 w-6 text-emerald-500 group-hover:text-white" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="font-black italic text-base tracking-tighter">+0124-4001495</div>
                                                <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">India & USA Support</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    <h3 className="text-xl font-black italic tracking-widest uppercase border-l-8 border-emerald-600 pl-6">Our Offices</h3>
                                    <div className="space-y-10">
                                        <div className="group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <MapPin className="h-4 w-4 text-emerald-500" />
                                                <span className="uppercase text-[10px] font-black tracking-widest text-emerald-500 italic">India · Gurgaon HQ</span>
                                            </div>
                                            <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed group-hover:text-white transition-colors">1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
                                        </div>
                                        <div className="group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <MapPin className="h-4 w-4 text-emerald-500" />
                                                <span className="uppercase text-[10px] font-black tracking-widest text-emerald-500 italic">USA · Gurgaon Branch</span>
                                            </div>
                                            <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed group-hover:text-white transition-colors">348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India</p>
                                        </div>
                                        <div className="group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <MapPin className="h-4 w-4 text-emerald-500" />
                                                <span className="uppercase text-[10px] font-black tracking-widest text-emerald-500 italic">India · Pune Technology Hub</span>
                                            </div>
                                            <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed group-hover:text-white transition-colors">C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune – 411020 Maharashtra, India.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GroceryDeliveryApp;
