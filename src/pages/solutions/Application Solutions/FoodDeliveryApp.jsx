import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
   UtensilsCrossed,
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
   ShoppingBag,
   History,
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
   Globe
} from 'lucide-react';

// Reusable components
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const FoodDeliveryApp = () => {
   const [activeTab, setActiveTab] = useState('Customer App');
   const [activeFeatureTab, setActiveFeatureTab] = useState('common');

   const panelFeatures = {
      "Customer App": {
         icon: Users,
         image: "/images/customer-app.jpg",
         features: [
            "Easy Registration & Sign-In", "Push Notifications", "Ratings & Reviews",
            "Password Recovery", "Security & Ratings", "Quick Ordering",
            "Social Media Login", "Account Management", "In-App Payments",
            "Real-Time Updates", "Live Chat With Restaurant", "Order Tracking", "Seamless Payments"
         ]
      },
      "Vendor App": {
         icon: Store,
         image: "/images/vendor-app.jpg",
         features: [
            "Unique Restaurant Profile", "Social Media Login", "Quick Registration",
            "Menu Management", "Order Management", "Accept/Decline Orders",
            "Location Management", "Previous and Upcoming Orders",
            "Contact With Customers", "Push Notifications", "Track Payments", "Analytics Dashboard"
         ]
      },
      "Admin Panel": {
         icon: Shield,
         image: "/images/admin-food.jpg",
         features: [
            "Create Sub Admins", "Multi-Level Admin Access", "Complete Dashboard",
            "Restaurant Management", "Customer Management", "Analytics & Reports",
            "Order Tracking System", "View Transaction History", "Block Restaurants/Users",
            "Add/Edit/Delete Various Profiles", "Manage Payment Accounts", "Commission Management"
         ]
      },
      "Delivery Panel": {
         icon: Compass,
         image: "/images/delivery-app.jpg",
         features: [
            "Order Tracking", "Delivery Assignment", "Payment Tracking", "Reviews & Feedback",
            "Take Delivery Requests", "Track Customer Locations", "Update Order Status",
            "Earnings Management", "Delivery History", "Transaction History",
            "Profile Management", "Live Tracking"
         ]
      }
   };

   const commonFeatures = [
      { title: "Change/Cancel Order", icon: RefreshCw, desc: "Customers can easily modify or cancel their food order anytime directly from the app with a few simple steps." },
      { title: "Schedule Orders", icon: Clock, desc: "Customers can schedule food delivery for a later date and time, allowing restaurants to prepare in advance." },
      { title: "Payment Modes", icon: CreditCard, desc: "Multiple payment options are supported including credit cards, debit cards, digital wallets, and secure online methods." },
      { title: "Live Order Tracking", icon: MapPin, desc: "Real-time GPS tracking allows customers to monitor delivery location while restaurants can track delivery partners." },
      { title: "Chat With Restaurant", icon: MessageSquare, desc: "Customers and restaurants can communicate through in-app chat without sharing personal contact details." },
      { title: "Promo Codes", icon: Star, desc: "Special discount codes and promotional offers help attract new users and reward loyal customers." },
      { title: "Push Notification", icon: Bell, desc: "Users receive real-time alerts for order confirmation, preparation, dispatch, and delivery updates." },
      { title: "Order History", icon: FileText, desc: "Customers can view previous orders including date, time, items ordered, and payment information." },
      { title: "Tips", icon: Zap, desc: "Customers can easily tip delivery partners through the app using any integrated payment method." },
      { title: "Refer A Friend", icon: UserCheck, desc: "Users can invite friends to join the platform using referral links and receive rewards for successful sign-ups." },
      { title: "Peak Hours Pricing", icon: BarChart, desc: "Delivery fees automatically adjust during busy hours based on demand through dynamic pricing rules." },
      { title: "Advanced Filters", icon: Settings, desc: "Users can apply filters to quickly find cuisines, restaurants, and preferred food options." }
   ];

   const advanceFeatures = [
      { title: "In-App Wallet", icon: CreditCard, desc: "Secure in-app wallet for fast, cashless, and hassle-free transactions with cashback offers." },
      { title: "SOS/Panic Button", icon: Shield, desc: "Integrated SOS button for enhanced delivery partner safety during deliveries." },
      { title: "Multi-Language", icon: Globe, desc: "Allow users to operate the application in their preferred native languages." },
      { title: "Smart Analytics", icon: BarChart, desc: "Comprehensive dashboard for admins to track business growth and user metrics." },
      { title: "Heat Map Option", icon: MapPin, desc: "Empower delivery partners to see locations with maximum orders to optimize routes." },
      { title: "Automated Dispatch", icon: Zap, desc: "Intelligent system that auto-assigns the nearest available delivery partner to cut wait times." },
      { title: "Loyalty Programs", icon: Star, desc: "Reward frequent customers with points that can be redeemed for discounted orders." },
      { title: "Restaurant Dashboard", icon: LayoutDashboard, desc: "Track restaurant performance, order volumes, ratings, and revenue in real-time." }
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
         title: "Groxery",
         subtitle: "Order Grocery Online",
         desc: "Groxery is an online store for the people of Kashmir, bringing all sorts of essential goods, health care products, household goods, stationery items and local goods under one platform.",
         tags: ["Grocery", "E-commerce", "Mobile App"],
         image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
      },
      {
         title: "Kifayat",
         subtitle: "Vegetables & Grocery Shopping App",
         desc: "Kifayat online is a well known online supermarket In Nagpur which covers all your everyday needs from groceries to fresh vegetables. Shop over 20000+ products.",
         tags: ["Grocery", "Fresh Food", "Delivery"],
         image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2"
      },
      {
         title: "AVEMART",
         subtitle: "Best Online Grocery Shopping App",
         desc: "Avemart is an online portal where you can get Affordable Fresh Fruits and Vegetables the best price at your doorstep with hassle-free delivery.",
         tags: ["Fruits", "Vegetables", "Online Store"],
         image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c"
      }
   ];

   const latestWorks = [
      { title: "VyomFood", subtitle: "Multi Restaurant", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" },
      { title: "Fresh Eat", subtitle: "Multi Restaurant", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5" },
      { title: "Decode", subtitle: "Food Delivery App", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" }
   ];

   const featuresList = [
      { name: "Search Restaurant", icon: Search },
      { name: "Advance Filter", icon: Settings },
      { name: "Restaurant Menu", icon: LayoutDashboard },
      { name: "Food Ordering", icon: UtensilsCrossed },
      { name: "Order Scheduling", icon: Clock },
      { name: "Order Tracking", icon: Navigation },
      { name: "Order History", icon: History },
      { name: "Multiple Payments", icon: CreditCard },
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
            <title>Food Delivery App Development | Kryoss</title>
            <meta name="description" content="Create your own food order and delivery platform now! Kryoss Softech offers high-end customized food delivery app development for Android and iOS." />
         </Helmet>

         {/* 1. Hero Section */}
         <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-amber-600">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-400 -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-30"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-300 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

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
                        <span className="text-amber-200">Food Order & Delivery</span> Platform Now!
                     </h1>
                     <p className="text-lg md:text-xl text-amber-50 font-light leading-relaxed mb-10 max-w-xl">
                        Here is the best solution which helps you to start your business. Kryoss Softech offers a highly interactive and user-friendly online food delivery app for your food aggregator business.
                     </p>
                     <div className="flex gap-4">
                        <a href="#contact-us" className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg hover:shadow-lg hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent blur-[80px] rounded-full"></div>
                        <img
                           src="/images/food-delivery-hero.png"
                           alt="Food Delivery App Development"
                           className="relative z-10 max-h-[500px] w-full object-contain drop-shadow-2xl"
                           onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl' }}
                        />
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* 2. Breadcrumb */}
         <section className="bg-white/90 border-b border-gray-100 backdrop-blur-md sticky top-0 z-40 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
               <a href="/" className="hover:text-orange-600 transition-colors duration-300">Home</a>
               <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
               <span className="hover:text-orange-600 cursor-pointer transition-colors duration-300">Solutions</span>
               <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
               <span className="text-orange-600">Food Delivery App Development</span>
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
                        <span className="text-orange-500">proficient developers</span>
                     </h2>
                     <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                        Our team has years of experience in food delivery app development, delivering a plethora of online food ordering mobile applications in the market. Our customized solutions are designed like Zomato, UberEats, FoodPanda, and Swiggy, keeping the client's requirements in mind.
                     </p>
                     <p className="text-lg text-gray-600 leading-relaxed font-light">
                        Our team of professionals excels in providing valuable features and highly functional apps using the latest trends & technology. We deliver customized solutions designed specifically for your business needs.
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
                           src="/images/food-delivery-intro.png"
                           alt="Food Delivery Platform"
                           className="max-h-[450px] w-full object-contain"
                           onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'; e.target.className = 'relative z-10 w-full h-auto object-cover rounded-3xl shadow-xl' }}
                        />
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* 4. Must-Have Features (Tabs Layout) */}
         <section className="py-20 bg-[#FFFBF2] border-y border-orange-100">
            <div className="container mx-auto px-4 lg:px-8">

               {/* Heading */}
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     Must-Have Features <span className="text-orange-500">for Food Delivery App</span>
                  </h2>
                  <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
               </div>

               <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-7xl mx-auto">

                  {/* LEFT IMAGE (40%) */}
                  <div className="w-full lg:w-2/5">
                     <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl relative">
                        <img
                           src={panelFeatures[activeTab].image}
                           alt={activeTab}
                           className="w-full h-full object-cover transition-all duration-500"
                           onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'; }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Text */}
                        <div className="absolute bottom-6 left-6 text-white">
                           <h3 className="text-2xl font-bold">{activeTab}</h3>
                           <p className="text-sm opacity-80">Complete food delivery solution</p>
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
                                       ? "bg-orange-500 text-white shadow-lg"
                                       : "bg-white text-gray-600 hover:bg-orange-50"
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
                                       <CheckCircle size={16} className="text-orange-500" />
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

         {/* 5. Features for Food App (Grid) */}
         <section className="py-24 bg-[#1E2A3A] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-400/5 blur-[150px]"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

               {/* Heading */}
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     Features for Food App
                  </h2>

                  {/* Tabs */}
                  <div className="flex justify-center gap-8 text-sm font-medium">
                     <button
                        onClick={() => setActiveFeatureTab("common")}
                        className={`relative pb-2 transition ${activeFeatureTab === "common"
                           ? "text-orange-500"
                           : "text-gray-400"
                           }`}
                     >
                        Common Features
                        {activeFeatureTab === "common" && (
                           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500"></span>
                        )}
                     </button>

                     <button
                        onClick={() => setActiveFeatureTab("advance")}
                        className={`relative pb-2 transition ${activeFeatureTab === "advance"
                           ? "text-orange-500"
                           : "text-gray-400"
                           }`}
                     >
                        Advance Features
                        {activeFeatureTab === "advance" && (
                           <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500"></span>
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
                           className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:bg-gray-800 hover:border-orange-500/50 transition-all duration-300 group"
                        >
                           <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                              <Icon className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                           </div>

                           <h4 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
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
         <section className="py-16 bg-[#FFFBF2] relative overflow-hidden border-y border-orange-100">
            <div className="absolute inset-0 bg-[url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
            <div className="container mx-auto px-4 relative z-10">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-orange-200">
                  {stats.map((s, index) => (
                     <div key={index} className="p-4">
                        <h3 className="text-4xl md:text-6xl font-extrabold text-[#1E293B] mb-2">{s.val}+</h3>
                        <p className="text-orange-600 font-bold uppercase tracking-wider text-sm">{s.label}</p>
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
                        What Support <span className="text-orange-500">You Get?</span>
                     </h2>
                     <p className="text-gray-600 mb-8 text-lg font-light">
                        Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.
                     </p>
                     <div className="hidden lg:block w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-60 absolute left-10 mt-10"></div>
                  </div>

                  <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                     {solutions.map((sol, i) => {
                        const Icon = sol.icon;
                        return (
                           <div key={i} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 text-orange-500">
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
                     OUR FOOD PRODUCTS
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     Our Latest Works
                  </h2>
                  <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
               </div>

               {/* Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolio.map((item, idx) => (
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group flex flex-col h-full"
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
                           <UtensilsCrossed size={40} className="text-orange-400 absolute top-6 right-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />

                           {/* Title */}
                           <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold leading-tight z-10">
                              {item.title}
                           </h3>
                        </div>

                        {/* CONTENT */}
                        <div className="p-8 flex flex-col flex-grow">
                           <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                              {item.desc}
                           </p>

                           <div className="flex flex-wrap gap-2 mt-auto">
                              {item.tags.map(tag => (
                                 <span
                                    key={tag}
                                    className="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider rounded-md"
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
                     Our Latest <span className="text-orange-500">Food Products</span>
                  </h2>
                  <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {latestWorks.map((work, i) => (
                     <div key={i} className="group cursor-pointer">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 mb-6 border-4 border-white shadow-lg transition-all group-hover:border-orange-500 group-hover:scale-105">
                           <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'; }}
                           />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-orange-500 transition-colors">{work.title}</h3>
                        <p className="text-orange-600 font-semibold uppercase text-xs tracking-wider text-center mt-1">{work.subtitle}</p>
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
                     Industries We <span className="text-orange-500">Cater To</span>
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                     As one of the top mobile apps development companies, we provide custom mobile app development solutions for various industries catering startups, software product development companies, digital agencies, and enterprises.
                  </p>
                  <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
               </div>

               <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                  {industries.map((ind, index) => {
                     const Icon = ind.icon;
                     return (
                        <div key={index} className="text-center group cursor-pointer">
                           <div className="w-24 h-24 bg-white hover:bg-orange-500 transition-all border border-gray-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-xl group-hover:scale-110">
                              <Icon className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors" />
                           </div>
                           <h3 className="font-bold text-sm uppercase tracking-wider mt-4 text-gray-700 group-hover:text-orange-500">{ind.name}</h3>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* 11. Global Components */}
         <Testimonial theme="orange" />
         <Industries theme={{ bg: "bg-[#fff3eb]", primary: "text-orange-500", iconBg: "bg-orange-100", iconColor: "text-orange-500" }} />
         <OurWork theme={{ primary: "text-orange-500", accent: "bg-orange-500" }} />
         <ContactUs id="contact-us" theme="orange" />

      </div>
   );
};

// Add missing ChevronRight component
const ChevronRight = ({ className }) => (
   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
   </svg>
);

export default FoodDeliveryApp;