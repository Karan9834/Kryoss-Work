import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
   UtensilsCrossed,
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
   Plane,
   GraduationCap,
   PlayCircle,
   Truck,
   Building2,
   Lock,
   Server,
   Code,
   LifeBuoy,
   ShoppingBag,
   History,
   Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

const FoodDeliveryApp = () => {
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

   const features = [
      { name: "Search Restaurant", icon: Search },
      { name: "Advance Filter Feature", icon: Settings },
      { name: "Restaurant Menu", icon: Layout },
      { name: "Food Ordering", icon: UtensilsCrossed },
      { name: "Order Scheduling", icon: Clock },
      { name: "Order Tracking", icon: Navigation },
      { name: "Order History", icon: History },
      { name: "Multiple Payment Options", icon: CreditCard },
      { name: "Push Notification", icon: Bell },
      { name: "Offers and Promos", icon: DollarSign }
   ];

   const commonFeatures = [
      {
         title: "User Registration",
         desc: "Option to register on the App or login through Facebook making it an easy entry to the App.",
         icon: Users
      },
      {
         title: "Order Tracking",
         desc: "Let customers track orders real-time and notifications to keep them informed about their order status.",
         icon: Navigation
      },
      {
         title: "Select Restaurant",
         desc: "Choose restaurants based on location, cuisine choices, timings and more from an exhaustive listing.",
         icon: Search
      },
      {
         title: "Multiple Payment Options",
         desc: "Customers can pay in the mode they choose, from all the latest payment options available.",
         icon: CreditCard
      },
      {
         title: "List Categories",
         desc: "Allow customers to select from categories of restaurants, based on ratings and other factors.",
         icon: Layers
      },
      {
         title: "Takeaway Option",
         desc: "Option to place an order and pay and choose the date and time for offline takeaway so that your customers need not wait.",
         icon: ShoppingBag
      },
      {
         title: "Discounts and Offers",
         desc: "Numerous discounts and offers can be built in for the customers to always get the best deals and recurring sales.",
         icon: DollarSign
      },
      {
         title: "Help & support",
         desc: "Customers know you are always available in case they need any assistance, anytime, anywhere.",
         icon: Headphones
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

   const stats = [
      { label: "Project Delivered", val: "750" },
      { label: "Development Staff", val: "150" },
      { label: "Years of Experience", val: "10" },
      { label: "Satisfied Clients", val: "450" }
   ];

   const portfolio = [
      { title: "Groxery", subtitle: "Order Grocery Online", desc: "Groxery is an online store for the people of Kashmir, bringing all sorts of essential goods, health care products, household goods, stationery items and local goods under one platform, making the online shopping experience seamless." },
      { title: "Kifayat", subtitle: "Vegetables & Grocery Shopping App", desc: "Kifayat online is a well known online supermarket In Nagpur which covers all your everyday needs from groceries to fresh vegetables. Shop over 20000+ products with hassle-free delivery." },
      { title: "AVEMART", subtitle: "Best Online Grocery Shopping App", desc: "Avemart is an online portal where you can get Affordable Fresh Fruits and Vegetables the best price at your doorstep. We aim to make the lifestyle of our customers much simpler." },
      { title: "Untappd", subtitle: "Discover Beer", desc: "Discover and share great beers, breweries, and venues with your friends. Earn badges, track beers you like, and get alerts for new additions nearby." }
   ];

   const latestWorks = [
      { title: "VyomFood", subtitle: "Multi Restaurant", image: "https://via.placeholder.com/400x300?text=VyomFood" },
      { title: "Fresh Eat", subtitle: "Multi Restaurant", image: "https://via.placeholder.com/400x300?text=Fresh+Eat" },
      { title: "Decode", subtitle: "Food Delivery App", image: "https://via.placeholder.com/400x300?text=Decode" }
   ];

   const testimonials = [
      { name: "TOMO MARINKOVIC", role: "PRESIDENT START UP", text: "I was extremely happy and satisfied with my experience and final product through Kryoss! They delivered exactly my vision of what I had intended for my app and made it even better with their own creative and artistic touches." },
      { name: "SAM DISTASO", role: "FOUNDER - ARK NEWS", text: "Rakesh and his team listened to our thoughts and suggestions regarding our App and far surpassed our expectations. They were always available for us and responded very quickly." },
      { name: "DR. ROHIT KOHKER", role: "CTO, VIDYA PRAKASHAN MANDIR", text: "I was just searching for a company that would provide best results and criterion for my educational business. Kryoss organization proved it true." },
      { name: "MONA MATHUR", role: "FOUNDER, MILLION SPARK FOUNDATION", text: "Kryoss Softech was involved in developing an Android application framework that connects students, teachers and parents allowing them to communicate seamlessly." }
   ];

   return (
      <div className="bg-white">
         <Helmet>
            <title>Food Delivery App Development | KryossWork</title>
            <meta name="description" content="Create your own food order and delivery platform now! Kryoss Softech offers high-end customized food delivery app development for Android and iOS." />
         </Helmet>

         {/* Hero Section */}
         <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl mx-auto"
               >
                  <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-sm font-bold mb-6 border border-white/30 backdrop-blur-sm uppercase tracking-widest">
                     Food Delivery App Development
                  </span>
                  <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tighter italic uppercase">
                     Create Your Own Food Order <br />
                     <span className="text-gray-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)] underline decoration-white decoration-8 underline-offset-[16px]">Delivery Platform Now!</span>
                  </h1>
                  <p className="text-xl text-orange-50 mb-10 leading-relaxed font-medium mt-12">
                     Here is the best solution which helps you to start your business. Kryoss Softech offers a highly interactive and user-friendly online food delivery app for your food aggregator business.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                     <button className="bg-gray-900 text-white hover:bg-black font-black py-5 px-12 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl uppercase tracking-widest group">
                        Discuss Your Idea <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Intro Description */}
         <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
               <div className="max-w-4xl mx-auto space-y-8">
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 leading-tight border-l-8 border-orange-600 pl-6 text-left">Melange of well-versed and <br />proficient developers</h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium text-left">
                     Our team has years of experience in food delivery app development, delivering a plethora of online food ordering mobile applications in the market. Our customized solutions are designed like Zomato, UberEats, FoodPanda, and Swiggy, keeping the client's requirements in mind.
                  </p>
                  <div className="flex flex-wrap justify-start gap-4 text-xs font-black uppercase tracking-widest text-orange-600">
                     <span className="bg-white px-4 py-2 rounded-lg border border-orange-100 shadow-sm">Android Experts</span>
                     <span className="bg-white px-4 py-2 rounded-lg border border-orange-100 shadow-sm">iOS Specialists</span>
                     <span className="bg-white px-4 py-2 rounded-lg border border-orange-100 shadow-sm">Custom Solutions</span>
                  </div>
               </div>
            </div>
         </section>

         {/* Mockups Showcase */}
         <section className="py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter">Multi-Panel Food Suite</h2>
               <p className="text-gray-500 font-bold uppercase tracking-[0.2em] mb-16 text-xs">Complete multi-panel solution for seamless food delivery experience</p>

               <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {/* Customer Panel */}
                  <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl h-[650px] flex flex-col group relative">
                     <div className="bg-orange-600 p-8 text-white text-left">
                        <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                           <span>12:30 PM</span>
                           <Smartphone className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded inline-flex underline decoration-white decoration-2">
                           <MapPin className="h-3 w-3" /> 📍 Home · Koramangala
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter">🍔 FoodieExpress</h3>
                     </div>
                     <div className="p-6 text-left space-y-5 grow overflow-y-auto invisible-scrollbar">
                        <div className="p-3 bg-gray-100 rounded-2xl flex items-center gap-3">
                           <Search className="h-4 w-4 text-gray-400" />
                           <span className="text-gray-400 text-xs italic">Search restaurants or dishes...</span>
                        </div>
                        <div className="flex gap-2 overflow-x-auto invisible-scrollbar py-1">
                           {["All", "Pizza", "Burger", "Biryani", "Chinese"].map(cat => (
                              <span key={cat} className={`text-[10px] font-bold px-4 py-1.5 rounded-full border ${cat === 'All' ? 'bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-200' : 'bg-white border-gray-200 text-gray-600'}`}>
                                 {cat}
                              </span>
                           ))}
                        </div>
                        <div className="space-y-4">
                           <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Nearby Restaurants</div>
                           {[
                              { name: "Pizza Paradise", icon: "🍕", dist: "0.5 km", rate: "4.5", time: "30 min" },
                              { name: "Burger King", icon: "🍔", dist: "0.8 km", rate: "4.3", time: "25 min" },
                              { name: "Biryani House", icon: "🍛", dist: "1.2 km", rate: "4.7", time: "35 min" }
                           ].map((res, i) => (
                              <div key={i} className="flex gap-4 p-4 rounded-[2rem] border border-gray-50 hover:bg-orange-50 transition-colors">
                                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-gray-100">{res.icon}</div>
                                 <div className="grow">
                                    <div className="flex justify-between items-start mb-0.5">
                                       <h4 className="font-bold text-sm tracking-tight">{res.name}</h4>
                                       <span className="text-[10px] font-bold text-orange-600 italic">⭐ {res.rate}</span>
                                    </div>
                                    <div className="text-[9px] font-medium text-gray-500 mb-1 italic">{res.dist} · {res.time}</div>
                                 </div>
                              </div>
                           ))}
                        </div>
                        <div className="bg-red-600 p-5 rounded-[2.5rem] text-white italic relative overflow-hidden shadow-xl shadow-red-200 mt-auto">
                           <div className="text-sm font-black mb-1">50% OFF on first order</div>
                           <div className="text-[10px] opacity-90 uppercase tracking-widest font-black underline decoration-white/30 decoration-2">Use code: FOODIE50</div>
                        </div>
                     </div>
                     <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-around items-center">
                           <Layout className="h-5 w-5 text-orange-600" />
                           <Search className="h-5 w-5 text-gray-400" />
                           <ShoppingBag className="h-5 w-5 text-gray-400" />
                           <Users className="h-5 w-5 text-gray-400" />
                        </div>
                     </div>
                  </div>

                  {/* Vendor Dashboard */}
                  <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl h-[650px] flex flex-col group lg:mt-6">
                     <div className="bg-red-600 p-8 text-white text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 blur-[50px] rounded-full"></div>
                        <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                           <span>12:30 PM</span>
                           <Store className="h-4 w-4" />
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter">Vendor Dashboard</h3>
                        <div className="flex items-center gap-2 mt-2 text-[10px] font-bold uppercase italic">
                           <span>🍕 Pizza Paradise</span>
                           <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                           <span className="text-green-300">Open</span>
                        </div>
                     </div>
                     <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                        <div className="grid grid-cols-3 gap-2 text-center">
                           <div className="bg-gray-100 p-2.5 rounded-2xl border border-gray-200">
                              <div className="text-xl font-black text-gray-900 italic">24</div>
                              <div className="text-[7px] text-gray-400 font-bold uppercase tracking-tighter">New</div>
                           </div>
                           <div className="bg-gray-100 p-2.5 rounded-2xl border border-gray-200">
                              <div className="text-xl font-black text-gray-900 italic">12</div>
                              <div className="text-[7px] text-gray-400 font-bold uppercase tracking-tighter">Prep.</div>
                           </div>
                           <div className="bg-gray-100 p-2.5 rounded-2xl border border-gray-200">
                              <div className="text-xl font-black text-gray-900 italic">08</div>
                              <div className="text-[7px] text-gray-400 font-bold uppercase tracking-tighter">Delivered</div>
                           </div>
                        </div>
                        <div className="space-y-4">
                           <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Recent Orders</div>
                           {[
                              { id: "#ORD-101", desc: "Margherita, Pepsi", status: "Pending", sColor: "text-orange-600 italic bg-orange-50" },
                              { id: "#ORD-102", desc: "Burgers, Fries", status: "Preparing", sColor: "text-blue-600 italic bg-blue-50" }
                           ].map((ord, i) => (
                              <div key={i} className="p-4 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                                 <div className="space-y-0.5">
                                    <div className="font-black text-sm italic">{ord.id}</div>
                                    <div className="text-[10px] text-gray-500 font-bold italic line-clamp-1">{ord.desc}</div>
                                 </div>
                                 <span className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-tighter ${ord.sColor}`}>{ord.status}</span>
                              </div>
                           ))}
                        </div>
                        <div className="p-5 bg-gray-900 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl mt-auto">
                           <TrendingUp className="absolute -bottom-4 -left-4 h-16 w-16 opacity-10" />
                           <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Today's Earnings</div>
                           <div className="text-3xl font-black italic tracking-widest text-orange-500">₹2,450</div>
                        </div>
                     </div>
                     <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-around">
                        <TrendingUp className="h-5 w-5 text-red-600" />
                        <Clock className="h-5 w-5 text-gray-400" />
                        <UtensilsCrossed className="h-5 w-5 text-gray-400" />
                     </div>
                  </div>

                  {/* Admin Center */}
                  <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl h-[650px] flex flex-col group lg:mt-12">
                     <div className="bg-gray-900 p-8 text-white text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 opacity-20 blur-[60px] rounded-full"></div>
                        <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                           <span>12:30 PM</span>
                           <ShieldCheck className="h-4 w-4" />
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter underline underline-offset-8 decoration-orange-600 decoration-4 text-left">Admin Control</h3>
                     </div>
                     <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                        <div className="grid grid-cols-3 gap-2">
                           <div className="p-2.5 bg-gray-100 rounded-2xl text-center">
                              <div className="text-lg font-black italic text-gray-900 tracking-tighter">156</div>
                              <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Rest.</div>
                           </div>
                           <div className="p-2.5 bg-gray-100 rounded-2xl text-center">
                              <div className="text-lg font-black italic text-gray-900 tracking-tighter">2.4K</div>
                              <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Cust.</div>
                           </div>
                           <div className="p-2.5 bg-gray-100 rounded-2xl text-center">
                              <div className="text-lg font-black italic text-gray-900 tracking-tighter">842</div>
                              <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Orders</div>
                           </div>
                        </div>
                        <div className="space-y-3">
                           <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Management</div>
                           {[
                              { label: "Restaurant Management", count: "156", icon: Store },
                              { label: "Customer Management", count: "2.4K", icon: Users },
                              { label: "Delivery Management", count: "Active", icon: Bike }
                           ].map((m, i) => (
                              <div key={i} className="flex justify-between items-center p-4 rounded-3xl bg-gray-50 hover:bg-orange-50 transition-all cursor-pointer">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm group-hover:bg-orange-600 transition-colors">
                                       <m.icon className="h-5 w-5 text-orange-600 group-hover:text-white" />
                                    </div>
                                    <span className="text-[11px] font-black italic text-gray-700">{m.label}</span>
                                 </div>
                                 <span className="text-[10px] font-black italic text-orange-600">{m.count}</span>
                              </div>
                           ))}
                        </div>
                        <div className="p-5 bg-orange-600 rounded-[2.5rem] text-white shadow-xl shadow-orange-200 mt-auto">
                           <div className="text-[9px] font-black uppercase tracking-[0.3em] opacity-80 mb-1 italic">Today's Revenue</div>
                           <div className="text-3xl font-black italic tracking-widest">₹18,450</div>
                        </div>
                     </div>
                     <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-around">
                        <Layout className="h-5 w-5 text-orange-600" />
                        <Settings className="h-5 w-5 text-gray-400" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Feature Navigation Links */}
         <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12">
               {["Customer", "Vendors", "Admin App"].map(appType => (
                  <div key={appType} className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-all shadow-xl">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                     </div>
                     <span className="font-black italic text-sm tracking-tighter uppercase">{appType}</span>
                  </div>
               ))}
            </div>
         </section>

         {/* Features Grid */}
         <section className="py-24 bg-gray-900 text-white relative">
            <div className="container mx-auto px-4">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter">Feature Ecosystem</h2>
                  <p className="text-orange-500 font-bold uppercase tracking-[0.5em] text-[10px] mt-4 italic">Built for Scale and Performance</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {features.map((f, i) => (
                     <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-orange-600/10 hover:border-orange-500 transition-all group">
                        <div className="w-10 h-10 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 rotate-12 group-hover:rotate-0 transition-all">
                           <f.icon className="h-5 w-5 text-orange-500 group-hover:text-white" />
                        </div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest italic">{f.name}</h3>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Must Have Features */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
               <div className="text-center mb-20">
                  <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter underline decoration-orange-600 decoration-[12px] underline-offset-[16px]">Must-Have Features</h2>
                  <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] mt-12 italic text-center">Advanced Functionalities for Success</p>
               </div>

               <div className="flex flex-wrap justify-center gap-4 mb-20">
                  {["Common Features", "Advance Features"].map(tab => (
                     <button key={tab} className={`px-10 py-4 rounded-full font-black italic text-sm uppercase tracking-widest border-2 transition-all ${tab === 'Common Features' ? 'bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-100' : 'bg-white border-gray-100 text-gray-400'}`}>
                        {tab}
                     </button>
                  ))}
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {commonFeatures.map((f, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -15 }}
                        className="p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all border-b-[12px] border-orange-600 group text-left"
                     >
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-orange-50 to-red-50 shadow-inner group-hover:rotate-12 transition-transform">
                           <f.icon className="h-8 w-8 text-orange-600" />
                        </div>
                        <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-6 text-gray-900 border-b border-gray-100 pb-4 group-hover:text-orange-700 transition-colors uppercase">{f.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed italic font-medium">{f.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Stats Section */}
         <section className="py-24 bg-orange-600 text-white overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
            <div className="container mx-auto px-4 relative z-10">
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                  {stats.map((s, index) => (
                     <div key={index} className="space-y-4">
                        <div className="text-6xl md:text-8xl font-black italic tracking-tighter drop-shadow-2xl">{s.val}+</div>
                        <div className="text-[11px] font-black uppercase tracking-[0.4em] opacity-80">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Support Section */}
         <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
               <div className="text-center mb-20 max-w-3xl mx-auto">
                  <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">What Support You Get?</h2>
                  <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight underline decoration-orange-200 decoration-wavy decoration-2">Our solution will be tailored to the unique needs of our Clients and packed with powerful features and integrations.</p>
               </div>
               <div className="grid md:grid-cols-4 gap-6">
                  {supportFeatures.map((s, index) => (
                     <div key={index} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-orange-200 text-left">
                        <div className="w-14 h-14 bg-gray-900 group-hover:bg-orange-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                           <s.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 group-hover:text-orange-600 transition-all">{s.title}</h3>
                        <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* App List */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter underline underline-offset-[16px] decoration-orange-600 decoration-8 mb-12">Our Latest Works</h2>
               </div>
               <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  {latestWorks.map((work, i) => (
                     <div key={i} className="group">
                        <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden bg-gray-100 mb-8 border-[12px] border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all group-hover:border-orange-600 group-hover:scale-105">
                           <img src={work.image} alt={work.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900">{work.title}</h3>
                        <p className="text-orange-600 font-black uppercase text-[10px] tracking-[0.3em] mt-2 italic">{work.subtitle}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Portfolio & Testimonials */}
         <section className="py-24 bg-gray-900 text-white overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
            <div className="container mx-auto px-4 relative z-10">
               <div className="text-center mb-20 text-center">
                  <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-orange-600 decoration-8 underline-offset-[16px]">Our Success Stories</h2>
               </div>
               <div className="grid lg:grid-cols-2 gap-10">
                  {portfolio.map((work, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[4rem] hover:bg-white/10 transition-all text-left">
                        <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors shadow-2xl">
                           <Activity className="h-8 w-8 text-orange-400" />
                        </div>
                        <h3 className="text-2xl font-black italic uppercase text-orange-500 mb-2">{work.title}</h3>
                        <p className="text-orange-100/50 text-[10px] uppercase font-black tracking-widest mb-6 italic">{work.subtitle}</p>
                        <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{work.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="grid md:grid-cols-4 gap-8 mt-24">
                  {testimonials.map((t, i) => (
                     <div key={i} className="bg-white rounded-[2.5rem] p-10 flex flex-col relative group hover:bg-slate-50 transition-all text-left">
                        <div className="text-orange-500 text-6xl font-black absolute top-4 right-8 select-none opacity-10">“</div>
                        <p className="text-[11px] italic font-bold leading-relaxed mb-8 text-gray-700 relative z-10 grow">“{t.text}”</p>
                        <div className="flex items-center gap-4 mt-auto">
                           <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center font-black text-white text-xl italic">{t.name.charAt(0)}</div>
                           <div>
                              <div className="font-black italic text-[11px] uppercase text-gray-900 leading-none">{t.name}</div>
                              <div className="text-[9px] text-orange-600 uppercase font-bold tracking-widest mt-1 italic">{t.role}</div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Industries Section */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
               <div className="text-center mb-20 text-center">
                  <h2 className="text-4xl font-black italic mb-6 uppercase tracking-tighter">Industries We Cater To</h2>
                  <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed italic font-bold uppercase tracking-widest border-y border-gray-100 py-6 text-center">AS ONE OF THE TOP MOBILE APPS DEVELOPMENT COMPANIES, WE PROVIDE CUSTOM MOBILE APP DEVELOPMENT SOLUTIONS FOR VARIOUS INDUSTRIES.</p>
               </div>
               <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                  {industries.map((ind, index) => (
                     <div key={index} className="text-center group cursor-pointer">
                        <div className="w-24 h-24 bg-gray-50 hover:bg-orange-600 transition-all border border-gray-100 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-sm group-hover:rotate-12 group-hover:shadow-xl">
                           <ind.icon className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-black text-[11px] uppercase tracking-widest font-black mt-6 text-gray-900">{ind.name}</h3>
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
                  <div className="lg:w-3/5 p-8 md:p-20 bg-white text-left">
                     <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Lets Discuss Your <br /><span className="text-orange-600 border-b-8 border-orange-600/20">Requirement!</span></h2>
                     <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic">Guarantee to get back within a business day</p>

                     <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Name*</label>
                              <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-orange-500 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">E-mail*</label>
                              <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-orange-500 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                           </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Phone No</label>
                              <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-orange-500 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Subject*</label>
                              <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-orange-500 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Your Message*</label>
                           <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-orange-500 rounded-[2.5rem] px-8 py-6 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner" required></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                           <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl font-black italic text-sm border-r-[8px] border-orange-600">
                              ANTISPAM: 7 + 5 = ?
                           </div>
                           <input name="antispam" type="text" placeholder="Result" className="w-32 bg-orange-50 border-2 border-orange-200 rounded-2xl px-6 py-4 font-black text-center focus:outline-none focus:border-orange-500 transition-all text-xl italic" required />
                        </div>

                        <button className="w-full bg-orange-600 hover:bg-gray-900 text-white py-8 rounded-[3rem] font-black italic uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 transition-all shadow-xl shadow-orange-100">
                           <Send className="h-6 w-6" /> Submit Inquiry
                        </button>
                     </form>
                  </div>

                  {/* Info Side */}
                  <div className="lg:w-2/5 p-8 md:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden text-left">
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full -mr-[200px] -mt-[200px]"></div>
                     <div className="relative z-10 space-y-16">
                        <div>
                           <h3 className="text-3xl font-black italic tracking-tighter mb-6 uppercase leading-tight text-orange-400">Got a project <br />in mind?</h3>
                           <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-10">We would love to hear how we can bring your possibilities to reality through technology and give away <span className="text-orange-500 font-black not-italic px-1 bg-white/10 rounded">2hrs of free consulting</span>.</p>
                           <div className="space-y-8">
                              <div className="flex items-center gap-6 group cursor-pointer text-left">
                                 <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-orange-600 transition-all shadow-xl">
                                    <Mail className="h-6 w-6 text-orange-400 group-hover:text-white" />
                                 </div>
                                 <span className="font-black italic text-base tracking-tighter">Info@kryosssoftech.org</span>
                              </div>
                              <div className="flex items-center gap-6 group cursor-pointer text-left">
                                 <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-orange-600 transition-all shadow-xl">
                                    <Phone className="h-6 w-6 text-orange-400 group-hover:text-white" />
                                 </div>
                                 <div className="space-y-1">
                                    <div className="font-black italic text-base tracking-tighter">+0124-4001495</div>
                                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest italic text-left">Global Infrastructure Desk</div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-12">
                           <h3 className="text-xl font-black italic tracking-widest uppercase border-l-8 border-orange-600 pl-6 text-left">Our Offices</h3>
                           <div className="space-y-10 text-left">
                              <div className="group">
                                 <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="h-4 w-4 text-orange-400" />
                                    <span className="uppercase text-[10px] font-black tracking-widest text-orange-400 italic text-left">India HQ · Gurgaon</span>
                                 </div>
                                 <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed text-left">1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
                              </div>
                              <div className="group">
                                 <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="h-4 w-4 text-orange-400" />
                                    <span className="uppercase text-[10px] font-black tracking-widest text-orange-400 italic text-left">USA Branch · Gurgaon</span>
                                 </div>
                                 <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed text-left">348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India</p>
                              </div>
                              <div className="group">
                                 <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="h-4 w-4 text-orange-400" />
                                    <span className="uppercase text-[10px] font-black tracking-widest text-orange-400 italic text-left">Pune Tech Hub</span>
                                 </div>
                                 <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed text-left">C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune – 411020, Maharashtra, India</p>
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

export default FoodDeliveryApp;
