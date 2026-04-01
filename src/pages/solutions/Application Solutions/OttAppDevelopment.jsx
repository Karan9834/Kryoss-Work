import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    PlayCircle,
    CheckCircle2,
    Users,
    ShieldCheck,
    Smartphone,
    Layout,
    Database,
    Search,
    CreditCard,
    Star,
    MapPin,
    Send,
    TrendingUp,
    Video,
    Monitor,
    Lock,
    Server,
    Code,
    LifeBuoy,
    Phone,
    Mail,
    Heart,
    Plane,
    Building2,
    Truck,
    GraduationCap,
    Globe,
    Settings,
    Activity,
    Layers,
    Info,
    ChevronRight,
    BarChart3,
    HelpCircle,
    Film,
    Headphones,
    Clapperboard
} from 'lucide-react';
import { motion } from 'framer-motion';

const OttAppDevelopment = () => {

    const mustHaveFeatures = [
        { title: "Powerful Admin Panel", desc: "We design and customize a robust OTT streaming India to give you complete control over user account, content, and interface.", icon: Layout },
        { title: "Multiple Payment Gateway", desc: "Multiple payment gateways allow a large number of users to subscribe feasibly. As a result, it is an excellent trigger for higher revenue.", icon: CreditCard },
        { title: "Videos, Category and Users Management", desc: "Admin can categorize the video content to make a highly scalable and user-friendly environment on the OTT platform.", icon: Video },
        { title: "User Management", desc: "Admin can monitor the user activity on its video content and then periodically analyze viewers' trends and choices.", icon: Users },
        { title: "SEO Friendly Design", desc: "We design an SEO-friendly OTT platform that simplifies your content's marketing strategies and audience reach..", icon: Globe },
        { title: "Records and Statistics", desc: "You can track and analyze the app performance through the reports generated in a particular interval of time.", icon: Activity },
        { title: "Android & IOS Platform", desc: "The video streaming apps we provide support both iOS and Android. Being an admin, you can offer your OTT apps to your users on both Android and iOS platforms.", icon: Smartphone },
        { title: "Custom Requirements", desc: "We deliver your video streaming app with all the stunning features. As well, we are ready to include any traits, if you need to fit your requirements.", icon: Settings }
    ];

    const industries = [
        { name: "Healthcare", icon: Heart },
        { name: "Travel & Tourism", icon: Plane },
        { name: "Banking & Finance", icon: Building2 },
        { name: "Logistics & Transport", icon: Truck },
        { name: "Media & Entertainment", icon: PlayCircle },
        { name: "Education & E-Learning", icon: GraduationCap }
    ];

    const portfolio = [
        {
            title: "watcho",
            subtitle: "Watcho - Original Spotlight Exclusive Shows & Films",
            desc: "Watcho is your go-to video streaming app for Watcho Originals online showcasing the best Hindi web series to watch online. Catch the best of originals, latest live channels, Telugu entertainment, new Tamil shows, and Kannada programmes, on the Watcho spotlight app.Watch Indian TV series Hindi narrating the story of Junaid; a militant who has surrendered to the Indian forces under mysterious circumstances.",
            image: "watcho"
        },
        {
            title: "Rabbit",
            subtitle: "Rabbit",
            desc: "Rabbit Movies is a Video on Demand Platform that allows cutomers to watch a wide variety of Web Series, Movies and EXCLUSIVE Rabbit Original Content in regional and international language. You will find every genre in it Like Drama, Horror, Suspense, Thriller and Comedy in indian regional langiages including Hindi,Tamil, Telugu etc.",
            image: "Rabbit"
        },
        {
            title: "Singapore social",
            subtitle: "Singapore Dating - Online Chat & Meet Singaporeans",
            desc: "Singapore Dating is the best free dating app to connect with Singaporean singles! It is a great way to meet people, to make new friends and mingle with them. Or you want to find a lasting relationship and even for marriage? It’s all here!Love to meet new people, make friends, or find a date to hangout with tonight? It's easy! You can start by seeing video clips of singles and when you like someone, just click the heart. If they like you back, we will connect both of you.",
            image: "Singapore"
        },
        {
            title: "heretv",
            subtitle: "Here TV",
            desc: "Watch acclaimed original movies such as Shelter, Academy Award-winning films like Departures, and Emmy-nominated documentary, 30 Years from Here. Binge on all seasons and episodes of your favorite shows such as Dante's Cove, From Here on OUT and Modd Couples.",
            image: "heretv"
        },
        {
            title: "DocuBay",
            subtitle: "DocuBay - Streaming Documentaries",
            desc: "Watch Free and Premium Award winning documentaries on crime, nature, travel, culture, science, sports and more. Our ever-growing documentary collection extends across a variety of categories: crime, nature, biography, culture, travel, history, music, sports, humanity, adventure, politics and more. DocuBay has a variety of videos that make it easy to view and discover HD documentaries, at leisure or on-the-go. Unbiased news can be hard to find, but documentaries can give you a deep insight into topics. We also stream documentaries for free regularly.",
            image: "DocuBay"
        }
    ];

    const supportFeatures = [
        { title: "Fully Customizable", desc: "Our Script is flexible enough to meet the specific needs of the Clients.", icon: Settings },
        { title: "Bug Support", desc: "If there are any bugs or issues you can report to us, we will work on in & Update the status of the work. This service will be provided free for the first year.", icon: LifeBuoy },
        { title: "Licence For A Lifetime", desc: "Source Code for a lifetime license and one domain/ brand. With a one-off payment, your software will be covered for the duration of a lifetime.", icon: Lock },
        { title: "Linux Server Installation", desc: "Web Panels will work smoothly in open source Linux Servers. You will be informed once the server configuration and hosting has been done by the technical team.", icon: Server },
        { title: "Open Source Database", desc: "We use MySQL, which is an open source and one of the safest databases. You will also have to pay minimal price for license renewal every year.", icon: Database },
        { title: "Payments", desc: "Our Scripts support International Payment Gateways, API with easy Installations of new ones as per the business needs.", icon: CreditCard },
        { title: "Technical Support", desc: "We provide One Year Free Support, even non-technical entrepreneurs will be benefitted, we handle everything till everything is launched.", icon: Headphones },
        { title: "Open Source Code For Customization", desc: "We provide a 100% open source code that will allow all types of customization’s.", icon: Code }
    ];

    const latestWorks = [
        { title: "Movix - Video Streaming", image: "Movix" },
        { title: "Zoom Video Flix App", image: "Zoom" },
        { title: "Prime Plex - Movies", image: "Prime Plex" }
    ];

    const testimonials = [
        {
            name: "TOMO MARINKOVIC",
            role: "PRESIDENT START UP",
            text: "I was extremely happy and satisfied with my experience and final product through Kryoss! They delivered exactly my vision of what I had intended for my app and made it even better with their own creative and artistic touches. Almost every morning I got up, I had a new communication from a team member about the status of my project. If I needed another app built, I would certainly return and have them do the work for me. It was on budget and delivered ahead of schedule. If you are considering this company, have no qualms about hiring them. You will be pleased."
        },
        {
            name: "SAM DISTASO",
            role: "FOUNDER - ARK NEWS",
            text: "Kryoss Softech have been superb! As someone who are new to working on a mobile application, we weren’t sure what to expect. Rakesh and his team listened to our thoughts and suggestions regarding our App and far surpassed our expectations. They were always available for us (although we were in 3 different time zones), responded very quickly and go above and beyond to help.We highly recommend that you use Kryoss Softech to develop your app."
        },
        {
            name: "DR. ROHIT KOHKER",
            role: "VIDYA PRAKASHAN MANDIR , CTO",
            text: "I was just searching for a company that would provide best results and criterion for my educational business. Then I got to Kryoss SoftechI heared that they are a leading mobile app development company in learning sector and the workforce at organization proved it true."
        },
        {
            name: "MONA MATHUR",
            role: "MILLION SPARK FOUNDATION, FOUNDER",
            text: "The client is an educational platform that connects students, teachers and parents allowing them to communicate and to discover, access and share resources needed by the students. Kryoss Softech was involved in developing an Android application framework."
        }
    ];

    const commonFeatures = [
        "Sign-up/Social Media Login", "Help Center", "Push Notifications", "Recommendations",
        "Recover Password", "Share Video", "Subtitles & Alternate Audio", "Profile Management",
        "Search bar", "Parental Control", "Payment Gateway", "User Comments",
        "Create Watchlist", "Video Download", "Payment Methods", "Video Description",
        "Video Player", "Genre Selection", "Subscription Plan", "Register Device Management",
        "Streaming Quality"
    ];

    const stats = [
        { val: "750", label: "Project Delivered" },
        { val: "150", label: "Development Staff" },
        { val: "10", label: "Years of Experience" },
        { val: "450", label: "Satisfied Clients" }
    ];

    return (
        <div className="bg-[#050505] text-white">
            <Helmet>
                <title>OTT App Development Company | KryossWork</title>
                <meta name="description" content="Kryoss Softech is an outstanding OTT app development company that provides a comprehensive suite of services to assist you manage, deliver, and monetize your OTT content." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#1a0b0b] via-[#050505] to-[#050505]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 bg-red-600/10 backdrop-blur-md rounded-full px-6 py-2 border border-red-600/20">
                                <PlayCircle className="h-4 w-4 text-red-500 fill-red-500" />
                                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">OTT App Development Company</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                                Home Solutions <br />
                                <span className="text-red-700 drop-shadow-[0_0_15px_rgba(185,28,28,0.4)] underline decoration-white/20 decoration-8 underline-offset-[24px]">OTT App Development</span>
                            </h1>
                            <div className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-medium mt-16 max-w-4xl mx-auto italic space-y-6">
                                <p>Kryoss Softech is an outstanding OTT app development company that provides a comprehensive suite of services to assist you manage, deliver, and monetize your OTT content. We strive to serve the ultimate mobile entertainment experience to the users.</p>
                                <p>We develop custom Streaming and OTT applications which provide rich, intuitive and omni channel experiences to viewers across devices and destinations.Our amazing OTT platform development will make your business reach the extent of success and high ROI. If you are willing to start up an on-demand video, audio, messaging, VOIP streaming business you are on the right platform to kick start now.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full -mr-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/5 blur-[150px] rounded-full -ml-48"></div>
            </section>

            {/* Mockups Showcase */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter">Features of OTT Platform Development</h2>
                    <p className="text-red-700 font-bold uppercase tracking-[0.3em] mb-20 text-xs">Complete multi-panel solution for seamless streaming experience</p>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* User App Experience */}
                        <div className="bg-zinc-900 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl h-[650px] flex flex-col group relative">
                            <div className="bg-[#111] p-8 text-white text-left border-b border-white/5">
                                <div className="flex justify-between items-center mb-6 text-xs font-bold italic opacity-60">
                                    <span>8:45 PM</span>
                                    <Smartphone className="h-3 w-3" />
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter text-red-600">STREAMFLIX</h3>
                                <div className="flex gap-4 mt-4 text-[9px] font-black uppercase tracking-widest text-gray-400">
                                    <span className="text-red-500">Home</span>
                                    <span>TV Shows</span>
                                    <span>Movies</span>
                                    <span>My List</span>
                                </div>
                            </div>
                            <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                                <div className="relative aspect-video bg-zinc-800 rounded-2xl overflow-hidden group/item">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2 text-red-500 text-[8px] font-black uppercase mb-1">
                                            <span>🔥 Trending Now</span>
                                        </div>
                                        <div className="font-black italic text-sm">The Mandalorian · S2 E3</div>
                                        <button className="mt-2 bg-white text-black text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-tighter hover:bg-red-600 hover:text-white transition-all">Watch Now</button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">Continue Watching</div>
                                    <div className="flex gap-3 items-center p-3 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center text-xl">🎬</div>
                                        <div className="grow">
                                            <div className="text-[10px] font-black">Stranger Things - S4 E5</div>
                                            <div className="w-full h-0.5 bg-gray-800 mt-1 rounded-full overflow-hidden">
                                                <div className="w-2/3 h-full bg-red-600"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">Recommended For You</span>
                                        <ChevronRight className="h-3 w-3 text-red-600" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { name: "Movie 1", icon: "🎥" },
                                            { name: "Show 1", icon: "📺" },
                                            { name: "Movie 2", icon: "🎬" }
                                        ].map((m, i) => (
                                            <div key={i} className="aspect-[4/3] bg-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/5 group-hover:bg-zinc-700 transition-colors">
                                                <span className="text-3xl">{m.icon}</span>
                                                <span className="text-[8px] font-black uppercase tracking-widest">{m.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-black border-t border-white/5 flex justify-around">
                                <Layout className="h-5 w-5 text-red-600" />
                                <Search className="h-5 w-5 text-gray-500" />
                                <BarChart3 className="h-5 w-5 text-gray-500" />
                                <Users className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>

                        {/* Admin Control Center */}
                        <div className="bg-zinc-900 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl h-[650px] flex flex-col group lg:mt-8">
                            <div className="bg-[#111] p-8 text-white text-left border-b border-white/5">
                                <div className="flex justify-between items-center mb-6 text-xs font-bold italic opacity-60">
                                    <span>8:45 PM</span>
                                    <ShieldCheck className="h-4 w-4" />
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter text-red-500">🎬 STREAMFLIX Admin</h3>
                            </div>
                            <div className="p-6 text-left space-y-5 grow overflow-y-auto invisible-scrollbar">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 text-center">
                                        <div className="text-xl font-black italic tracking-tighter text-red-500">124K</div>
                                        <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest mt-1">Users</div>
                                    </div>
                                    <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 text-center">
                                        <div className="text-xl font-black italic tracking-tighter text-red-500">2.4K</div>
                                        <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest mt-1">Videos</div>
                                    </div>
                                    <div className="bg-zinc-950 p-4 rounded-2xl border border-white/5 text-center">
                                        <div className="text-xl font-black italic tracking-tighter text-red-500">₹18.5L</div>
                                        <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest mt-1">Revenue</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Dashboard</div>
                                    {[
                                        { label: "User Management", val: "124K", icon: Users },
                                        { label: "Video Management", val: "2.4K", icon: Clapperboard },
                                        { label: "Category Management", val: "24", icon: Layers },
                                        { label: "Subscription Management", val: "Active", icon: CreditCard },
                                        { label: "Creator Management", val: "", icon: Star },
                                        { label: "Manage Ads", val: "", icon: TrendingUp },
                                        { label: "Analytics", val: "", icon: Activity }
                                    ].map((m, i) => (
                                        <div key={i} className="flex justify-between items-center p-4 bg-zinc-950 border border-white/5 rounded-2xl hover:bg-red-950/20 transition-all cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5">
                                                    <m.icon className="h-5 w-5 text-red-600" />
                                                </div>
                                                <span className="text-[10px] font-black italic">{m.label}</span>
                                            </div>
                                            <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">{m.val}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-red-600 p-6 rounded-3xl text-white relative overflow-hidden mt-4">
                                    <BarChart3 className="absolute bottom-[-10px] right-[-10px] h-20 w-20 text-white/10" />
                                    <div className="text-2xl font-black italic">Data Analytics</div>
                                </div>
                            </div>
                            <div className="p-4 bg-black border-t border-white/5 flex justify-around">
                                <Settings className="h-5 w-5 text-gray-500" />
                                <Search className="h-5 w-5 text-gray-500" />
                                <Database className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>

                        {/* Web Interface */}
                        <div className="bg-zinc-900 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl h-[650px] flex flex-col group lg:mt-16">
                            <div className="bg-[#111] p-8 text-white text-left border-b border-white/5">
                                <div className="flex justify-between items-center mb-6 text-xs font-bold italic opacity-60">
                                    <span>8:45 PM</span>
                                    <Monitor className="h-4 w-4" />
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter text-red-600 underline underline-offset-8 decoration-red-600/30">STREAMFLIX</h3>
                            </div>
                            <div className="p-10 text-center space-y-8 grow overflow-y-auto invisible-scrollbar">
                                <div className="text-3xl font-black italic tracking-tighter uppercase leading-tight">Unlimited Entertainment</div>
                                <div className="text-sm font-bold text-gray-400">Starting at ₹149/month</div>
                                <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-xl shadow-red-600/10">Subscribe</button>

                                <div className="grid grid-cols-2 gap-4 text-left">
                                    <div className="space-y-4">
                                        <div className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">Browse by Genre</div>
                                        {["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "All"].map(g => (
                                            <div key={g} className="text-[10px] font-black italic border-l-2 border-red-600/20 pl-4 py-1 hover:border-red-600 transition-all cursor-pointer">{g}</div>
                                        ))}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-[9px] font-black uppercase tracking-widest text-gray-500 italic">Payment Options</div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                                                <span className="text-[10px] font-bold text-gray-400 italic">Cards / UPI</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                                                <span className="text-[10px] font-bold text-gray-400 italic">Net Banking</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-zinc-800 rounded-3xl border border-white/5 text-left">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xl">⭐</span>
                                        <span className="text-[10px] font-black">4.8 · 12.4K reviews</span>
                                    </div>
                                    <p className="text-[10px] font-medium text-gray-400 leading-relaxed italic">"Best streaming platform with amazing content"</p>
                                </div>
                            </div>
                            <div className="p-4 bg-black border-t border-white/5 flex justify-around">
                                <HelpCircle className="h-5 w-5 text-gray-500" />
                                <Mail className="h-5 w-5 text-gray-500" />
                                <Info className="h-5 w-5 text-gray-500" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
                        {["User App", "Admin Dashboard", "Front-end Websites"].map(part => (
                            <div key={part} className="flex items-center gap-2 group cursor-pointer">
                                <div className="w-6 h-6 bg-red-600/10 rounded flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                    <CheckCircle2 className="h-3 w-3 text-red-600 group-hover:text-white" />
                                </div>
                                <span className="text-sm font-black italic uppercase tracking-tighter text-gray-400 group-hover:text-white transition-colors">{part}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature List Grid */}
            <section className="py-24 bg-zinc-950 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-black mb-16 italic uppercase tracking-tighter text-center border-y border-white/10 py-10">Common Features</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {commonFeatures.map((f, i) => (
                            <div key={i} className="p-6 bg-zinc-900 border border-white/5 rounded-2xl text-center hover:bg-red-950/40 hover:border-red-600/30 transition-all group flex flex-col items-center justify-center min-h-[140px]">
                                <div className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all rotate-12 group-hover:rotate-0">
                                    <Star className="h-4 w-4 text-red-500 group-hover:text-white" />
                                </div>
                                <span className="text-[9px] font-black uppercase text-gray-400 group-hover:text-white transition-colors mt-2 leading-tight">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Must-Have Features */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-6 italic uppercase tracking-tighter">Must-Have Features for OTT App</h2>
                        <div className="w-32 h-2 bg-red-700 mx-auto mb-10 rounded-full shadow-lg shadow-red-700/20"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto">
                        {mustHaveFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -15 }}
                                className="p-12 bg-zinc-900 border border-white/5 rounded-[4rem] hover:shadow-[0_40px_100px_-20px_rgba(185,28,28,0.1)] transition-all group border-b-[16px] border-red-700 flex flex-col relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-700/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all -mr-16 -mt-16"></div>
                                <div className="w-20 h-20 bg-zinc-800 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:bg-red-700 transition-all transform group-hover:rotate-12">
                                    <feature.icon className="h-10 w-10 text-red-700 group-hover:text-white" />
                                </div>
                                <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-6 text-white group-hover:text-red-500 transition-colors border-l-4 border-red-900 pl-6 underline decoration-red-900/30 decoration-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed italic font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((s, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="text-5xl md:text-6xl font-black italic tracking-tighter text-white group-hover:text-red-600 transition-colors">{s.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mt-2">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-24 bg-zinc-950 text-white relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black italic mb-8 uppercase tracking-tighter drop-shadow-md underline decoration-white/10 decoration-2 underline-offset-8">Industries We Serve</h2>
                        <p className="text-gray-400 text-sm leading-relaxed italic font-bold uppercase tracking-[0.3em] border-y border-white/5 py-10">As one of the top mobile apps development companies, we provide custom mobile app development solutions for various industries catering startups, software product development companies, digital agencies, and enterprises.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-16 md:gap-28 lg:gap-36">
                        {industries.map((ind, index) => (
                            <div key={index} className="text-center space-y-8 group cursor-pointer hover:-translate-y-4 transition-transform">
                                <div className="w-24 h-24 bg-zinc-900 hover:bg-red-700 transition-all border border-white/5 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl relative">
                                    <ind.icon className="h-10 w-10 text-red-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-extrabold text-[11px] uppercase tracking-[0.3em] font-black">{ind.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Work Portfolio */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-red-700 decoration-8 underline-offset-[20px]">Our Work</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-32">
                        {portfolio.map((work, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.01 }}
                                className="bg-zinc-900 p-12 rounded-[5rem] border border-white/5 flex flex-col md:flex-row gap-12 items-center shadow-xl hover:bg-zinc-800 transition-all group"
                            >
                                <div className="w-full md:w-56 aspect-square bg-[#111] rounded-[4rem] flex items-center justify-center border-4 border-zinc-700 shadow-2xl group-hover:rotate-12 transition-transform transform-gpu overflow-hidden">
                                    {work.image !== "W" && work.image !== "R" && work.image !== "S" && work.image !== "H" && work.image !== "D" ? (
                                        <div className="text-red-700 font-black text-2xl italic tracking-tighter px-4 text-center break-words">{work.image}</div>
                                    ) : (
                                        <div className="text-red-700 font-black text-8xl italic drop-shadow-[0_0_20px_rgba(185,28,28,0.3)]">{work.image}</div>
                                    )}
                                </div>
                                <div className="grow">
                                    <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white mb-2">{work.title}</h3>
                                    <p className="text-red-600 text-[11px] font-black uppercase tracking-[0.3em] mb-6 italic underline decoration-red-900 decoration-2">{work.subtitle}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed italic font-medium">{work.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full -mr-[300px] -mt-[300px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter leading-tight">What Support You Get ?</h2>
                        <p className="text-gray-400 font-extrabold italic leading-relaxed tracking-tight text-lg underline decoration-red-900 decoration-8 underline-offset-4 decoration-wavy">Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {supportFeatures.map((s, index) => (
                            <div key={index} className="p-10 bg-zinc-900 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-white/5 flex flex-col group hover:border-red-900/30">
                                <div className="w-14 h-14 bg-black group-hover:bg-red-700 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
                                    <s.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-black italic uppercase tracking-tighter text-white mb-4 underline decoration-red-950 decoration-2 underline-offset-8 group-hover:decoration-red-700 transition-all">{s.title}</h3>
                                <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Latest Works */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-red-700 decoration-8 underline-offset-[20px]">Our Ott Products</h2>
                        <p className="mt-10 text-[10px] font-black uppercase tracking-[0.8em] text-gray-600 italic">Our Latest Works</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto mb-20">
                        {latestWorks.map((work, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="aspect-[4/3] rounded-[4rem] overflow-hidden bg-zinc-900 mb-10 border-[12px] border-zinc-800 shadow-2xl transition-all group-hover:border-red-700 group-hover:shadow-red-700/10 flex items-center justify-center">
                                    <div className="text-red-700 font-black text-2xl italic opacity-50">image</div>
                                </div>
                                <h4 className="text-2xl font-black italic uppercase tracking-tighter text-center group-hover:text-red-600 transition-colors px-4">{work.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-black italic tracking-tighter uppercase underline decoration-red-700 decoration-[16px] underline-offset-[24px] drop-shadow-sm mb-12">Client Testimonials</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        {testimonials.map((t, index) => (
                            <div key={index} className="p-12 bg-zinc-900 rounded-[5rem] border border-white/5 flex flex-col relative group hover:bg-zinc-800 transition-all hover:shadow-[0_40px_100px_-20px_rgba(185,28,28,0.1)]">
                                <div className="text-red-900 text-9xl font-black absolute -top-10 -right-4 select-none group-hover:text-red-700 transition-colors opacity-30">”</div>
                                <p className="text-gray-400 italic text-sm leading-relaxed mb-12 relative z-10 grow font-bold uppercase tracking-tight">“{t.text}”</p>
                                <div className="flex flex-col items-center text-center pt-8 border-t border-white/5 mt-auto">
                                    <div className="w-16 h-16 bg-zinc-950 rounded-[2rem] flex items-center justify-center font-black text-red-700 shadow-2xl border border-white/10 text-2xl italic mb-4 group-hover:bg-red-700 group-hover:text-white transition-all transform group-hover:rotate-12">{t.name.charAt(0)}</div>
                                    <div>
                                        <div className="font-black text-white italic tracking-tighter text-sm uppercase mb-1">{t.name}</div>
                                        <div className="text-[10px] text-red-700 font-extrabold uppercase tracking-widest">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-950/10 blur-[180px] rounded-full -mr-[400px] -mt-[400px]"></div>
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto bg-zinc-950 rounded-[6rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.8)] border border-white/5">
                        {/* Form Part */}
                        <div className="lg:w-3/5 p-8 md:p-24 bg-zinc-950">
                            <h2 className="text-5xl md:text-6xl font-black mb-8 italic tracking-tighter uppercase text-white leading-tight">Contact <span className="text-red-700 border-b-8 border-red-700/20 underline decoration-red-900 decoration-wavy decoration-2 underline-offset-8">Us</span></h2>
                            <p className="text-gray-500 font-black uppercase text-[11px] tracking-[0.5em] mb-20 italic">We guarantee to get back to you within a business day.</p>
                            <div className="text-xl font-black italic uppercase text-white mb-6">Lets Discuss Your Requirement !</div>
                            <form className="space-y-12">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <input name="name" type="text" className="w-full bg-zinc-900 border-0 border-b-[6px] border-transparent focus:border-red-700 rounded-[3rem] px-12 py-8 focus:outline-none transition-all font-black placeholder:italic text-white shadow-2xl" placeholder="Name*" required />
                                    <input name="email" type="email" className="w-full bg-zinc-900 border-0 border-b-[6px] border-transparent focus:border-red-700 rounded-[3rem] px-12 py-8 focus:outline-none transition-all font-black placeholder:italic text-white shadow-2xl" placeholder="E-mail*" required />
                                </div>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <input name="phone" type="tel" className="w-full bg-zinc-900 border-0 border-b-[6px] border-transparent focus:border-red-700 rounded-[3rem] px-12 py-8 focus:outline-none transition-all font-black placeholder:italic text-white shadow-2xl" placeholder="Phone No" />
                                    <input name="subject" type="text" className="w-full bg-zinc-900 border-0 border-b-[6px] border-transparent focus:border-red-700 rounded-[3rem] px-12 py-8 focus:outline-none transition-all font-black placeholder:italic text-white shadow-2xl" placeholder="Subject*" required />
                                </div>
                                <textarea name="message" rows="5" className="w-full bg-zinc-900 border-0 border-b-[6px] border-transparent focus:border-red-700 rounded-[4rem] px-12 py-10 focus:outline-none transition-all font-black placeholder:italic text-white resize-none shadow-2xl" placeholder="Your Message*" required></textarea>

                                <div className="flex flex-col md:flex-row items-center gap-12 border-y border-white/5 py-10">
                                    <div className="bg-black text-white px-12 py-6 rounded-full font-black italic text-lg border-r-[12px] border-red-700 shadow-xl">
                                        Antispam question: 7 + 5 = ?
                                    </div>
                                    <input name="antispam" type="text" placeholder="Result" className="w-36 bg-zinc-900 border-4 border-zinc-800 rounded-3xl px-10 py-6 font-black text-center focus:outline-none focus:border-red-700 transition-all text-2xl italic text-white" required />
                                </div>

                                <p className="text-[10px] text-gray-500 font-bold italic tracking-widest text-center">Note: We Respect Your Privacy! Your details will never be shared with anyone for marketing purposes.</p>

                                <button className="w-full bg-red-700 hover:bg-white hover:text-black text-white py-12 rounded-[4rem] font-black italic uppercase tracking-[0.6em] text-lg flex items-center justify-center gap-8 transition-all shadow-[0_40px_80px_-20px_rgba(185,28,28,0.4)] active:scale-95 group">
                                    <Send className="h-10 w-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" /> Submit
                                </button>
                            </form>
                        </div>

                        {/* Information Part */}
                        <div className="lg:w-2/5 p-8 md:p-24 bg-black text-white flex flex-col justify-between relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
                            <div className="relative z-10 space-y-24">
                                <div className="space-y-12">
                                    <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-red-700 leading-tight">Got a project in mind?</h3>
                                    <p className="text-gray-400 text-sm font-medium leading-relaxed italic max-w-[320px]">We would love to hear how we can bring your possibilities to reality through technology and give away 2hrs of free consulting. So call us now..</p>
                                </div>

                                <div className="space-y-12">
                                    <h3 className="text-2xl font-black italic tracking-[0.2em] uppercase border-l-8 border-red-700 pl-8">Reach Us</h3>
                                    <div className="flex items-center gap-8 group cursor-pointer">
                                        <div className="w-16 h-16 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:bg-red-700 transition-all shadow-2xl group-hover:rotate-12 transform-gpu">
                                            <Mail className="h-8 w-8 text-red-700 group-hover:text-white" />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="font-black italic text-sm hover:text-red-700 transition-colors block">Info@kryosssoftech.org</span>
                                        </div>
                                    </div>
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex items-center gap-8 group cursor-pointer">
                                            <div className="w-16 h-16 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:bg-red-700 transition-all shadow-2xl group-hover:-rotate-12 transform-gpu">
                                                <Phone className="h-8 w-8 text-red-700 group-hover:text-white" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="font-black italic text-sm hover:text-red-700 transition-colors uppercase">+0124-4001495</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-16 pt-10">
                                    <h3 className="text-2xl font-black italic tracking-[0.2em] uppercase border-l-8 border-red-700 pl-8">Our Offices</h3>
                                    <div className="space-y-12">
                                        <div className="group cursor-default">
                                            <div className="flex items-center gap-4 mb-4">
                                                <MapPin className="h-5 w-5 text-red-700" />
                                                <span className="uppercase text-[11px] font-black tracking-[0.3em] text-red-700 italic block">india · Gurgaon</span>
                                            </div>
                                            <p className="text-xs text-gray-500 font-bold italic leading-relaxed group-hover:text-white transition-colors duration-500">1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
                                            <div className="text-[10px] text-gray-400 font-black italic mt-2">P: +0124-4001495<br />E: Info@kryosssoftech.org</div>
                                        </div>
                                        <div className="group cursor-default">
                                            <div className="flex items-center gap-4 mb-4">
                                                <MapPin className="h-5 w-5 text-red-700" />
                                                <span className="uppercase text-[11px] font-black tracking-[0.3em] text-red-700 italic block">usa · Gurgaon</span>
                                            </div>
                                            <p className="text-xs text-gray-500 font-bold italic leading-relaxed group-hover:text-white transition-colors duration-500">348-352, Spaze IT Park , Sec-48, Gurgaon-122018, Haryana , India</p>
                                            <div className="text-[10px] text-gray-400 font-black italic mt-2">P: +0124-4001298<br />E: Info@kryosssoftech.org</div>
                                        </div>
                                        <div className="group cursor-default">
                                            <div className="flex items-center gap-4 mb-4">
                                                <MapPin className="h-5 w-5 text-red-700" />
                                                <span className="uppercase text-[11px] font-black tracking-[0.3em] text-red-700 italic block">usa · pune</span>
                                            </div>
                                            <p className="text-xs text-gray-500 font-bold italic leading-relaxed group-hover:text-white transition-colors duration-500">C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune – 411020 Maharashtra, India.</p>
                                            <div className="text-[10px] text-gray-400 font-black italic mt-2">P: +91-020-411208<br />E: info@kryosssoftech.org</div>
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

export default OttAppDevelopment;
