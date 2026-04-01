import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Sparkles,
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
   Calendar,
   Scissors,
   Gift,
   Image,
   ShoppingBag,
   TrendingUp,
   History,
   User,
   Award,
   CalendarCheck,
   Star as StarIcon
} from 'lucide-react';

// Reusable components
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const SalonBeautyApp = () => {
   const [activeTab, setActiveTab] = useState('Customer App');
   const [activeFeatureTab, setActiveFeatureTab] = useState('common');

   const panelFeatures = {
      "Customer App": {
         icon: Users,
         image: "/images/salon-customer.jpg",
         features: [
            "Easy Registration & Sign-In", "Push Notifications", "Ratings & Reviews",
            "Password Recovery", "Security & Ratings", "Quick Booking",
            "Social Media Login", "Account Management", "Multiple Payment Options",
            "Real-Time Updates", "Live Chat With Salon", "Booking Tracking",
            "Book Multiple Services", "Choose Your Beautician"
         ]
      },
      "Service Provider App": {
         icon: Scissors,
         image: "/images/salon-provider.jpg",
         features: [
            "Unique Beautician Profile", "Social Media Login", "Quick Registration",
            "Set Availability", "Service Management", "Accept/Decline Appointments",
            "Location Tracking", "Previous and Upcoming Appointments",
            "Contact With Customers", "Push Notifications", "Track Earnings",
            "Appointment History", "Service Price Management"
         ]
      },
      "Salon App": {
         icon: Store,
         image: "/images/salon-store.jpg",
         features: [
            "Salon Profile Management", "Service Catalog", "Staff Management",
            "Appointment Management", "Accept/Decline Bookings", "Discount Management",
            "Analytics Dashboard", "Payment Tracking", "Customer Reviews",
            "Push Notifications", "Sales Reports", "Inventory Management"
         ]
      },
      "Admin Panel": {
         icon: Shield,
         image: "/images/salon-admin.jpg",
         features: [
            "Create Sub Admins", "Multi-Level Admin Access", "Complete Dashboard",
            "Salon Management", "Beautician Management", "Customer Management",
            "God's Eye View", "Transaction History", "Commission Management",
            "Category Management", "Payment Reports", "Push Notifications"
         ]
      }
   };

   const commonFeatures = [
      { title: "User-Friendly Interface", icon: Smartphone, desc: "A chic & attractive home page would capture the hearts of the existing customers, and entice potential customers to get converted into regular customers." },
      { title: "Appointments", icon: Calendar, desc: "The Salon mobile app allows customers to easily book, manage, and track appointments with just a few taps and touches." },
      { title: "Daily Tips", icon: Sparkles, desc: "This feature acts as a daily source of beauty information (tips, news, trends, ideas, etc) from across the world on everything ranging from beauty to makeup." },
      { title: "Services", icon: Scissors, desc: "A well-crafted Services section to showcase the extensive range of beauty salon & spa services that your Salon has to offer." },
      { title: "Gallery", icon: Image, desc: "The Gallery feature allows customers to view the images of your salon interiors, varied services and the fine works of your stylists and beauty experts." },
      { title: "Offers", icon: Gift, desc: "In the Offers page, the Salon app gives you the opportunity to display the exciting offers and deals currently running in your salon." },
      { title: "Shop", icon: ShoppingBag, desc: "The Shopping feature makes it extremely easy for your customers to purchase top notch products sold by your salon." },
      { title: "Reward System", icon: Award, desc: "The Salon App Reward System encourages your customers to stay loyal to your brand." }
   ];

   const advanceFeatures = [
      { title: "In-App Wallet", icon: CreditCard, desc: "Secure in-app wallet for fast, cashless, and hassle-free transactions with cashback offers." },
      { title: "Subscription Plans", icon: Clock, desc: "Allow customers to subscribe to regular salon services with special discounts." },
      { title: "Multi-Language", icon: Globe, desc: "Allow users to operate the application in their preferred native languages." },
      { title: "Smart Analytics", icon: BarChart, desc: "Comprehensive dashboard for admins to track business growth and user metrics." },
      { title: "GPS Integration", icon: MapPin, desc: "Find nearby salons and beauty parlors with real-time location tracking." },
      { title: "Automated Dispatch", icon: Zap, desc: "Intelligent system that auto-assigns the nearest available beautician." },
      { title: "Loyalty Points", icon: StarIcon, desc: "Reward frequent customers with points that can be redeemed for discounted services." },
      { title: "Service Photo/Video Gallery", icon: Image, desc: "Showcase your work with high-quality photos and videos of completed services." }
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
         title: "Book Salon",
         subtitle: "Live seats, Salon, Spa, Beauty Salon",
         desc: "Book Salon is a online platform that provides all type of salon types like beauty parlour, unisex salon, spa, salon and spa, salon and cafe, hair transplant etc at your near by location.",
         tags: ["Salon", "Spa", "Booking"],
         image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a0b9"
      },
      {
         title: "HomSwag",
         subtitle: "Salon At Home",
         desc: "Homswag connect you with trained and professional Beauty expert from industry to pamper you at your own comfort, and deliver you the beauty services with Best Branded Product.",
         tags: ["At Home", "Beauty", "Services"],
         image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1"
      },
      {
         title: "Vaasara",
         subtitle: "Book Local Salons, Spas & Clinics",
         desc: "In Sanskrit, Vaasara means 'Every Day'. With Vaasara you have the freedom and convenience to make a booking whenever you want, wherever you want.",
         tags: ["Local", "Salon", "Spa"],
         image: "https://images.unsplash.com/photo-1560066984-138dadb4c035"
      },
      {
         title: "Zoylee",
         subtitle: "Online Salon, Parlor, & Spa Booking App",
         desc: "The salon appointment app brings to you a comprehensive range of salons, spas, and parlors. Whether you're looking for haircut, facial, or Bridal makeup, Zoylee is all you need.",
         tags: ["Booking", "Parlor", "Makeup"],
         image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702"
      }
   ];

   const latestWorks = [
      { title: "BeautyX-Salon", subtitle: "Salon Booking", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a0b9" },
      { title: "Kryoss Saloon", subtitle: "Beauty Services", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1" },
      { title: "Xbarbar", subtitle: "Beauty Service", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035" }
   ];

   const featuresList = [
      { name: "Signup/Login", icon: Users },
      { name: "Multi-Language", icon: Globe },
      { name: "Set Reminders", icon: Bell },
      { name: "Reschedule & Cancel", icon: RefreshCw },
      { name: "Search & Filter", icon: Search },
      { name: "Multiple Payments", icon: CreditCard },
      { name: "Promo Codes", icon: Gift },
      { name: "GPS Integration", icon: MapPin },
      { name: "Booking History", icon: History },
      { name: "Book Multiple Services", icon: CalendarCheck },
      { name: "Subscription Plan", icon: Clock },
      { name: "In-App Chat", icon: MessageSquare },
      { name: "Push Notifications", icon: Bell },
      { name: "Rate & Review", icon: StarIcon },
      { name: "Loyalty Points", icon: Award },
      { name: "Service Gallery", icon: Image }
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
            <title>Salon & Beauty App Development | Kryoss</title>
            <meta name="description" content="Create your own salon & beauty booking platform now! Kryoss Softech offers high-end customized salon and beauty app development for Android and iOS." />
         </Helmet>

         {/* 1. Hero Section */}
         <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-fuchsia-700">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-400 -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-30"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-300 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

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
                        Make A New Business <br className="hidden lg:block" />
                        <span className="text-pink-200">Story Now With Your</span> Salon & Beauty App
                     </h1>
                     <p className="text-lg md:text-xl text-pink-50 font-light leading-relaxed mb-10 max-w-xl">
                        Build your Beauty & Salon Application with us and be ahead of the pack. Kryoss Softech offers a highly interactive and user-friendly online salon booking app for your beauty business.
                     </p>
                     <div className="flex gap-4">
                        <a href="#contact-us" className="px-8 py-4 rounded-xl bg-white text-pink-600 font-bold text-lg hover:shadow-lg hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent blur-[80px] rounded-full"></div>
                        <img
                           src="/images/salon-beauty-hero.png"
                           alt="Salon & Beauty App Development"
                           className="relative z-10 max-h-[500px] w-full object-contain drop-shadow-2xl"
                           onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a0b9?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl' }}
                        />
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 2. Breadcrumb */}
         <section className="bg-white/90 border-b border-gray-100 backdrop-blur-md sticky top-0 z-40 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
               <a href="/" className="hover:text-pink-600 transition-colors duration-300">Home</a>
               <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
               <span className="hover:text-pink-600 cursor-pointer transition-colors duration-300">Solutions</span>
               <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
               <span className="text-pink-600">Salon & Beauty App Development</span>
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
                        Make A New Business <br />
                        <span className="text-pink-600">Story Now With Your</span> Salon & Beauty App
                     </h2>
                     <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                        We have taken the beauty and salon application development into consideration and came up with rich programming solutions. We engage our customers from the beauty, spa and hair salons industry to give their clients an online solution and planning solution.
                     </p>
                     <p className="text-lg text-gray-600 leading-relaxed font-light">
                        Being the premier beauty salon app development company we render quality solutions by making use of innovative thoughts. Our accomplished techies are adept at designing the feasible solutions that are affordable and cost-effective.
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
                           src="/images/salon-beauty-intro.png"
                           alt="Salon & Beauty Platform"
                           className="max-h-[450px] w-full object-contain"
                           onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-xl' }}
                        />
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* 4. Must-Have Features (Tabs Layout) */}
         <section className="py-20 bg-[#FDF4F9] border-y border-pink-100">
            <div className="container mx-auto px-4 lg:px-8">

               {/* Heading */}
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     Must-Have Features <span className="text-pink-600">for Salon & Beauty App</span>
                  </h2>
                  <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
               </div>

               <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-7xl mx-auto">

                  {/* LEFT IMAGE (40%) */}
                  <div className="w-full lg:w-2/5">
                     <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl relative">
                        <img
                           src={panelFeatures[activeTab].image}
                           alt={activeTab}
                           className="w-full h-full object-cover transition-all duration-500"
                           onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a0b9?auto=format&fit=crop&q=80&w=800'; }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Text */}
                        <div className="absolute bottom-6 left-6 text-white">
                           <h3 className="text-2xl font-bold">{activeTab}</h3>
                           <p className="text-sm opacity-80">Complete salon booking solution</p>
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
                                       ? "bg-pink-600 text-white shadow-lg"
                                       : "bg-white text-gray-600 hover:bg-pink-50"
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
                                       <CheckCircle size={16} className="text-pink-600" />
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

         {/* 5. Features for Salon App (Grid) */}
         <section className="py-24 bg-[#1E2A3A] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-400/5 blur-[150px]"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

               {/* Heading */}
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     Features for Salon & Beauty App
                  </h2>

                  {/* Tabs */}
                  <div className="flex justify-center gap-8 text-sm font-medium">
                     <button
                        onClick={() => setActiveFeatureTab("common")}
                        className={`relative pb-2 transition ${activeFeatureTab === "common"
                           ? "text-pink-500"
                           : "text-gray-400"
                           }`}
                     >
                        Common Features
                        {activeFeatureTab === "common" && (
                           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500"></span>
                        )}
                     </button>

                     <button
                        onClick={() => setActiveFeatureTab("advance")}
                        className={`relative pb-2 transition ${activeFeatureTab === "advance"
                           ? "text-pink-500"
                           : "text-gray-400"
                           }`}
                     >
                        Advance Features
                        {activeFeatureTab === "advance" && (
                           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500"></span>
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
                           className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:bg-gray-800 hover:border-pink-500/50 transition-all duration-300 group"
                        >
                           <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-pink-500 transition-colors duration-300">
                              <Icon className="text-pink-500 group-hover:text-white transition-colors" size={24} />
                           </div>

                           <h4 className="text-lg font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
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
         <section className="py-16 bg-[#FDF4F9] relative overflow-hidden border-y border-pink-100">
            <div className="absolute inset-0 bg-[url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
            <div className="container mx-auto px-4 relative z-10">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-pink-200">
                  {stats.map((s, index) => (
                     <div key={index} className="p-4">
                        <h3 className="text-4xl md:text-6xl font-extrabold text-[#1E293B] mb-2">{s.val}+</h3>
                        <p className="text-pink-600 font-bold uppercase tracking-wider text-sm">{s.label}</p>
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
                        What Support <span className="text-pink-600">You Get?</span>
                     </h2>
                     <p className="text-gray-600 mb-8 text-lg font-light">
                        Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.
                     </p>
                     <div className="hidden lg:block w-32 h-32 bg-pink-100 rounded-full blur-2xl opacity-60 absolute left-10 mt-10"></div>
                  </div>

                  <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                     {solutions.map((sol, i) => {
                        const Icon = sol.icon;
                        return (
                           <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-pink-200 transition-all duration-300">
                              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-pink-600">
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
                     OUR SALOON PRODUCTS
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     Our Work
                  </h2>
                  <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
               </div>

               {/* Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {portfolio.map((item, idx) => (
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 group flex flex-col h-full"
                     >
                        {/* IMAGE SECTION */}
                        <div className="h-48 relative overflow-hidden">
                           <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a0b9?auto=format&fit=crop&q=80&w=800'; }}
                           />

                           {/* Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                           {/* Icon */}
                           <Sparkles size={40} className="text-pink-400 absolute top-6 right-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />

                           {/* Title */}
                           <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold leading-tight z-10">
                              {item.title}
                           </h3>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 flex flex-col flex-grow">
                           <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                              {item.desc.substring(0, 120)}...
                           </p>

                           <div className="flex flex-wrap gap-2 mt-auto">
                              {item.tags.map(tag => (
                                 <span
                                    key={tag}
                                    className="px-3 py-1 bg-pink-50 text-pink-600 text-[9px] font-bold uppercase tracking-wider rounded-md"
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
                     Our Latest <span className="text-pink-600">Saloon Products</span>
                  </h2>
                  <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {latestWorks.map((work, i) => (
                     <div key={i} className="group cursor-pointer">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 mb-6 border-4 border-white shadow-lg transition-all group-hover:border-pink-500 group-hover:scale-105">
                           <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a0b9?auto=format&fit=crop&q=80&w=800'; }}
                           />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-pink-600 transition-colors">{work.title}</h3>
                        <p className="text-pink-600 font-semibold uppercase text-xs tracking-wider text-center mt-1">{work.subtitle}</p>
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
                     Industries We <span className="text-pink-600">Serve</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                     As one of the top mobile apps development companies, we provide custom mobile app development solutions for various industries catering startups, software product development companies, digital agencies, and enterprises.
                  </p>
                  <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full mt-6"></div>
               </div>

               <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                  {industries.map((ind, index) => {
                     const Icon = ind.icon;
                     return (
                        <div key={index} className="text-center group cursor-pointer">
                           <div className="w-24 h-24 bg-white hover:bg-pink-600 transition-all border border-gray-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-xl group-hover:scale-110">
                              <Icon className="h-10 w-10 text-pink-600 group-hover:text-white transition-colors" />
                           </div>
                           <h3 className="font-bold text-sm uppercase tracking-wider mt-4 text-gray-700 group-hover:text-pink-600">{ind.name}</h3>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* 11. Global Components */}
         <Testimonial theme="pink" />
         <Industries theme={{ bg: "bg-[#FDF4F9]", primary: "text-pink-600", iconBg: "bg-pink-100", iconColor: "text-pink-600" }} />
         <OurWork theme={{ primary: "text-pink-600", accent: "bg-pink-600" }} />
         <ContactUs id="contact-us" theme="pink" />

      </div>
   );
};

// Add missing ChevronRight component
const ChevronRight = ({ className }) => (
   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
   </svg>
);

export default SalonBeautyApp;