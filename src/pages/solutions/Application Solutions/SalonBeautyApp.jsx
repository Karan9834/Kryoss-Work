import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Scissors, 
  Sparkles, 
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
  Phone, 
  Mail, 
  MapPin, 
  Send,
  ArrowRight,
  TrendingUp,
  Clock,
  Briefcase,
  Headphones,
  Image as ImageIcon,
  Tag,
  ShoppingBag,
  Gift,
  Settings,
  Truck,
  Building2,
  Lock,
  Server,
  Code,
  LifeBuoy,
  Plane,
  GraduationCap,
  PlayCircle,
  Calendar,
  MessageCircle,
  BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';

const SalonBeautyApp = () => {
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
      title: "User-Friendly Interface", 
      desc: "A chic & attractive home page to capture hearts and entice potential customers to convert into regulars.",
      icon: Layout 
    },
    { 
      title: "Appointments", 
      desc: "Allows customers to easily book, manage, and track appointments with just a few taps and touches.",
      icon: Calendar 
    },
    { 
      title: "Daily Tips", 
      desc: "Acts as a source of beauty information, news, trends, and ideas from around the world.",
      icon: Sparkles 
    },
    { 
      title: "Services", 
      desc: "A well-crafted section to showcase the extensive range of beauty salon & spa services you offer.",
      icon: Scissors 
    },
    { 
      title: "Gallery", 
      desc: "Displays images of your salon interiors, varied services, and the fine works of your stylists.",
      icon: ImageIcon 
    },
    { 
      title: "Offers", 
      desc: "Display exciting deals and discounts currently running in your salon to drive engagement.",
      icon: Tag 
    },
    { 
      title: "Shop", 
      desc: "Makes it extremely easy for customers to purchase top-notch products sold by your salon.",
      icon: ShoppingBag 
    },
    { 
      title: "Reward System", 
      desc: "Encourages customers to stay loyal to your brand with point-based or reward systems.",
      icon: Gift 
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
    { title: "Watcho", subtitle: "Book Salon - Live seats", desc: "Online platform for beauty parlours, unisex salons, spas, and pet grooming services at your nearby location." },
    { title: "Rabbit (HomSwag)", subtitle: "Salon At Home", desc: "Trained professionals delivering branded beauty services like Waxing, Manicure, and Hair Spa at your comfort." },
    { title: "Vaasara", subtitle: "Book Local Salons & Spas", desc: "Celebrating every day with the freedom and convenience to make a booking whenever and wherever you want." },
    { title: "Zoylee", subtitle: "Online Parlor Booking", desc: "Comprehensive range of salons and spas in Delhi NCR offering high-rated artists and wedding makeup specialists." }
  ];

  const latestWorks = [
    { title: "BeautyX-Salon", subtitle: "Beauty Services", image: "https://via.placeholder.com/400x300?text=BeautyX" },
    { title: "Kryoss Saloon", subtitle: "Salon Management", image: "https://via.placeholder.com/400x300?text=Kryoss+Saloon" },
    { title: "Xbarbar", subtitle: "Beauty Service App", image: "https://via.placeholder.com/400x300?text=Xbarbar" }
  ];

  const testimonials = [
    { name: "TOMO MARINKOVIC", role: "President Start Up", text: "Extremely happy with Kryoss! They delivered exactly my vision and made it better with creative touches. Delivered ahead of schedule and on budget." },
    { name: "SAM DISTASO", role: "Founder - ARK News", text: "Rakesh and his team surpassed expectations. They were always available despite different time zones. Highly recommend Kryoss Softech!" },
    { name: "DR. ROHIT KOHKER", role: "CTO, Vidya Prakashan Mandir", text: "Kryoss is a leading mobile app development company. Their workforce proved it true by providing best results for my business." },
    { name: "MONA MATHUR", role: "Founder, Million Spark Foundation", text: "Kryoss was involved in developing an Android application framework that connects students, teachers and parents seamlessly." }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Salon & Beauty App Development | KryossWork</title>
        <meta name="description" content="Make A New Business Story Now With your Saloon & Beauty App. Kryoss Softech offers rich programming solutions for beauty, spa and hair salons." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-pink-600 via-rose-500 to-amber-500 text-white">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-sm font-bold mb-6 border border-white/30 backdrop-blur-sm">
                Solutions · Salon & Beauty App Development
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
                Make A New Business <br />
                <span className="text-gray-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">Story Now</span>
              </h1>
              <p className="text-xl text-rose-50 mb-10 leading-relaxed font-medium">
                Build your Beauty & Saloon Application with us and be ahead of the pack. Premium solutions for salons, spas, and hair styling industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-900 text-white hover:bg-black font-black py-4 px-10 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl">
                  Talk to Stylists <ArrowRight className="h-5 w-5" />
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
                  <Sparkles className="h-48 w-48 text-white opacity-40 animate-pulse" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-20 bg-gray-50/50 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
             <h2 className="text-3xl font-black italic tracking-tighter uppercase text-gray-900 leading-tight">Rich Programming Solutions for Beauty & Spa</h2>
             <p className="text-lg text-gray-600 leading-relaxed font-medium">
               Being the premier beauty salon app development company, we render quality solutions by making use of innovative thoughts. Our accomplished techies are adept at designing feasible solutions that are affordable and cost-effective.
             </p>
             <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-pink-600"/></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-700 italic">Spa Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-pink-600"/></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-700 italic">Hair Salons</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center"><CheckCircle2 className="h-5 w-5 text-pink-600"/></div>
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-700 italic">Makeup Artists</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mockups Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter">Salon Booking Ecosystem</h2>
           <p className="text-gray-500 font-bold uppercase tracking-[0.2em] mb-16 text-sm">Complete multi-panel solution for seamless salon experience</p>
           
           <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* Customer App */}
             <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[600px] flex flex-col group relative">
               <div className="bg-pink-600 p-8 text-white text-left">
                  <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                    <span>10:30 AM</span>
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded inline-flex">
                     <MapPin className="h-3 w-3" /> 📍 Indiranagar, Bangalore
                  </div>
                  <h3 className="text-2xl font-black italic tracking-tighter">💅 Glamour Salon</h3>
               </div>
               <div className="p-6 text-left space-y-5 grow overflow-y-auto invisible-scrollbar">
                 <div className="p-3 bg-gray-100 rounded-2xl flex items-center gap-3">
                   <Search className="h-4 w-4 text-gray-400" />
                   <span className="text-gray-400 text-xs italic">Search salons or services...</span>
                 </div>
                 <div className="flex gap-2 overflow-x-auto invisible-scrollbar py-1">
                    {["All", "Haircut", "Facial", "Spa", "Nails"].map(cat => (
                      <span key={cat} className={`text-[10px] font-bold px-4 py-1.5 rounded-full border ${cat === 'All' ? 'bg-pink-600 text-white border-pink-600' : 'bg-white border-gray-200 text-gray-600'}`}>
                        {cat}
                      </span>
                    ))}
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-bold uppercase tracking-widest text-gray-400 italic">Featured Salons</span>
                       <span className="text-[10px] font-black text-pink-600 uppercase italic">View all</span>
                    </div>
                    {[
                      { name: "Glamour Studio", icon: "💆", dist: "0.5 km", tags: "Hair, Spa, Makeup", rate: "4.8", price: "₹499 onwards" }
                    ].map((res, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-3xl border border-gray-100 bg-gray-50/50">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">{res.icon}</div>
                        <div className="grow">
                           <div className="flex justify-between items-start mb-0.5">
                              <h4 className="font-bold text-sm tracking-tight">{res.name}</h4>
                              <span className="text-[10px] font-bold text-pink-600">⭐ {res.rate}</span>
                           </div>
                           <div className="text-[9px] font-medium text-gray-500 mb-1 italic">{res.dist} · {res.tags}</div>
                           <div className="text-[10px] font-black text-gray-900 mt-2">{res.price}</div>
                        </div>
                      </div>
                    ))}
                 </div>

                 <div className="space-y-3">
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Choose Your Beautician</div>
                    <div className="flex gap-3">
                       {["Priya", "Neha", "Riya"].map((name, i) => (
                         <div key={i} className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">👩</div>
                            <span className="text-[8px] font-bold uppercase">{name}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-amber-100 p-4 rounded-3xl text-amber-900 italic relative overflow-hidden border border-amber-200">
                    <div className="text-sm font-black mb-1">FLAT 20% OFF</div>
                    <div className="text-[10px] opacity-90 uppercase tracking-widest font-black">Use code: GLAMOUR20</div>
                 </div>
               </div>
               <div className="p-4 border-t border-gray-100 flex justify-around items-center bg-gray-50">
                  <Layout className="h-5 w-5 text-pink-600" />
                  <Search className="h-5 w-5 text-gray-400" />
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <Users className="h-5 w-5 text-gray-400" />
               </div>
               <div className="absolute bottom-16 left-0 right-0 px-6">
                  <button className="w-full bg-pink-600 text-white py-3 rounded-2xl font-black italic uppercase tracking-[0.2em] text-xs shadow-xl shadow-pink-200">
                     📅 Book Appointment
                  </button>
               </div>
             </div>

             {/* Service Provider App */}
             <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[600px] flex flex-col group lg:mt-6">
                <div className="bg-gray-900 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 opacity-20 blur-[50px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                     <span>10:30 AM</span>
                     <Smartphone className="h-4 w-4" />
                   </div>
                   <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl border border-white/20">👩</div>
                      <div>
                         <h3 className="text-xl font-bold italic tracking-tight">Priya Sharma</h3>
                         <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black uppercase text-pink-400 italic">💅 Beautician</span>
                            <span className="text-[9px] font-black text-green-400 uppercase italic">● Available</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="grid grid-cols-3 gap-2 text-center">
                     <div className="bg-gray-100 p-2.5 rounded-2xl">
                        <div className="text-xl font-black text-gray-900 italic">8</div>
                        <div className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">Bookings</div>
                     </div>
                     <div className="bg-gray-100 p-2.5 rounded-2xl">
                        <div className="text-xl font-black text-gray-900 italic">₹2.4K</div>
                        <div className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">Earnings</div>
                     </div>
                     <div className="bg-gray-100 p-2.5 rounded-2xl">
                        <div className="text-xl font-black text-gray-900 italic">4.9</div>
                        <div className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">Rating</div>
                     </div>
                   </div>
                   <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Today's Schedule</span>
                        <Calendar className="h-4 w-4 text-pink-600" />
                     </div>
                     {[
                       { time: "10:30 AM", service: "Haircut", name: "Rahul", dur: "30 mins", status: "Confirm" },
                       { time: "11:30 AM", service: "Facial", name: "Priya", dur: "45 mins", status: "Confirmed" }
                     ].map((item, i) => (
                       <div key={i} className="p-4 rounded-3xl bg-gray-50 border border-gray-100 space-y-3">
                          <div className="flex justify-between items-center">
                             <div className="text-[10px] font-black italic bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">{item.time} - {item.service}</div>
                             <span className="text-[8px] font-bold text-gray-400 uppercase">{item.dur}</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-xs font-black italic">{item.name}</span>
                             <button className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${item.status === 'Confirm' ? 'bg-pink-600 text-white' : 'bg-green-100 text-green-600'}`}>{item.status}</button>
                          </div>
                       </div>
                     ))}
                   </div>
                   
                   <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Services & Prices</div>
                      <div className="grid grid-cols-2 gap-2">
                         <div className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm flex justify-between items-center">
                            <span className="text-[10px] font-bold">Haircut</span>
                            <span className="text-[10px] font-black text-pink-600 italic tracking-tighter">₹399</span>
                         </div>
                         <div className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm flex justify-between items-center">
                            <span className="text-[10px] font-bold">Facial</span>
                            <span className="text-[10px] font-black text-pink-600 italic tracking-tighter">₹899</span>
                         </div>
                      </div>
                   </div>
                   
                   <div className="flex gap-2">
                       <button className="flex-1 bg-gray-800 text-white rounded-2xl py-3 text-[10px] font-black uppercase italic tracking-widest flex items-center justify-center gap-2">
                          <Clock className="h-3 w-3" /> Set Availability
                       </button>
                       <button className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center relative">
                          <MessageCircle className="h-5 w-5 text-pink-600" />
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[8px] flex items-center justify-center rounded-full font-bold">3</span>
                       </button>
                   </div>
                </div>
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-around">
                   <Layout className="h-5 w-5 text-gray-900" />
                   <Calendar className="h-5 w-5 text-pink-600" />
                   <TrendingUp className="h-5 w-5 text-gray-400" />
                   <Users className="h-5 w-5 text-gray-400" />
                </div>
             </div>

             {/* Admin Control Center */}
             <div className="bg-white rounded-[3rem] border border-gray-200 overflow-hidden shadow-xl h-[600px] flex flex-col group lg:mt-12">
                <div className="bg-pink-700 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 blur-[50px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-80">
                     <span>10:30 AM</span>
                     <ShieldCheck className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter">Glamour Admin</h3>
                   <p className="text-pink-100 text-[10px] font-bold italic mt-2">💅 Global Salon Management</p>
                </div>
                <div className="p-6 text-left space-y-5 grow overflow-y-auto invisible-scrollbar">
                   <div className="grid grid-cols-3 gap-2 text-center">
                     <div className="bg-pink-50 p-2.5 rounded-2xl">
                        <div className="text-lg font-black italic text-pink-900 tracking-tighter">156</div>
                        <div className="text-[7px] font-bold uppercase text-gray-500 tracking-widest">Salons</div>
                     </div>
                     <div className="bg-pink-50 p-2.5 rounded-2xl">
                        <div className="text-lg font-black italic text-pink-900 tracking-tighter">248</div>
                        <div className="text-[7px] font-bold uppercase text-gray-500 tracking-widest">Beaut.</div>
                     </div>
                     <div className="bg-pink-50 p-2.5 rounded-2xl">
                        <div className="text-lg font-black italic text-pink-900 tracking-tighter">1.2K</div>
                        <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Cust.</div>
                     </div>
                   </div>
                   <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Core Management</div>
                      {[
                        { label: "Appointment Management", val: "86 today", icon: Calendar },
                        { label: "Employee Management", val: "248 staff", icon: Users },
                        { label: "Reports & Analytics", val: "View Stats", icon: BarChart3 }
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-pink-50 cursor-pointer transition-all">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                                 <m.icon className="h-5 w-5 text-pink-600" />
                              </div>
                              <span className="text-[10px] font-black italic text-gray-700">{m.label}</span>
                           </div>
                           <span className="text-[10px] font-black italic text-pink-600 underline decoration-pink-200">{m.val}</span>
                        </div>
                      ))}
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-gray-900 rounded-[2.5rem] text-white">
                         <div className="text-[8px] font-bold uppercase opacity-60 mb-1">Commission</div>
                         <div className="text-2xl font-black italic tracking-tighter text-pink-500">15%</div>
                      </div>
                      <div className="p-4 bg-pink-100 rounded-[2.5rem] text-pink-900 border border-pink-200">
                         <div className="text-[8px] font-bold uppercase opacity-60 mb-1">Payroll</div>
                         <div className="text-lg font-black italic tracking-tighter text-red-600">DUE</div>
                      </div>
                   </div>
                   <button className="w-full bg-pink-600 text-white rounded-2xl py-3 text-[10px] font-black uppercase italic tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-pink-100">
                      <Bell className="h-3 w-3" /> Send Push Notification
                   </button>
                </div>
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-around">
                   <Layout className="h-5 w-5 text-pink-700" />
                   <Calendar className="h-5 w-5 text-gray-400" />
                   <Settings className="h-5 w-5 text-gray-400" />
                </div>
             </div>
           </div>
           
           <div className="mt-16 flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
              {["Customer App", "Service Provider App", "Admin Panel"].map(appType => (
                <div key={appType} className="flex items-center gap-2 group cursor-pointer">
                   <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                      <CheckCircle2 className="h-3 w-3 text-pink-600 group-hover:text-white" />
                   </div>
                   <span className="text-sm font-black italic uppercase tracking-tighter text-gray-700 underline decoration-pink-200 underline-offset-4">{appType}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-24 bg-gray-900 text-pink-400 overflow-hidden relative">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
               {[
                 "Appointment Management", "Commission Tracking", "Inventory & Payroll", "Reports & Analytics", 
                 "Service Management", "Employee Management", "Push Notifications", "Client Management"
               ].map(f => (
                 <div key={f} className="p-8 bg-white/5 border border-white/10 rounded-[3rem] text-center hover:bg-pink-600/10 hover:border-pink-500/30 transition-all group cursor-default">
                    <div className="w-12 h-12 bg-pink-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-pink-600 transition-all mx-auto rotate-12 group-hover:rotate-0 shadow-2xl">
                       <Sparkles className="h-6 w-6 text-pink-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-white italic">{f}</h3>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Must-Have Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 italic uppercase tracking-tighter">Must-Have Features</h2>
            <div className="w-32 h-2 bg-pink-600 mx-auto mb-6 rounded-full shadow-lg shadow-pink-100"></div>
            <p className="text-gray-400 font-black uppercase tracking-[0.6em] text-[10px] mt-12 italic">Digital Transformation for Salon & Spa</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto">
            {commonFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -15, scale: 1.02 }}
                className="p-12 bg-white border border-gray-100 rounded-[4rem] shadow-[0_20px_60px_-20px_rgba(255,100,150,0.1)] hover:shadow-[0_40px_100px_-20px_rgba(200,0,100,0.15)] transition-all group border-b-[16px] border-pink-600 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50/50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-pink-600 transition-colors opacity-0 group-hover:opacity-10"></div>
                <div className="w-20 h-20 bg-pink-50 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:bg-pink-600 transition-all">
                  <feature.icon className="h-10 w-10 text-pink-600 group-hover:text-white" />
                </div>
                <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-6 text-gray-900 border-b-2 border-pink-100 pb-4 group-hover:text-pink-700 transition-colors">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed italic font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-200 opacity-5 blur-[120px] rounded-full -mr-[300px] -mt-[300px]"></div>
         <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">What Support You Get?</h2>
              <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight underline decoration-pink-200 decoration-8 underline-offset-4">Our solution will be tailored to the unique needs of our Clients and packed with powerful features.</p>
           </div>
           <div className="grid md:grid-cols-4 gap-6">
              {supportFeatures.map((s, index) => (
                <div key={index} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-pink-200">
                   <div className="w-14 h-14 bg-gray-900 group-hover:bg-pink-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                      <s.icon className="h-6 w-6 text-white" />
                   </div>
                   <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 underline decoration-pink-200 decoration-2 underline-offset-8 group-hover:decoration-pink-600 transition-all">{s.title}</h3>
                   <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Project Delivered", val: "750+" },
              { label: "Development Staff", val: "150+" },
              { label: "Years experience", val: "10+" },
              { label: "Satisfied Clients", val: "450+" }
            ].map((s, index) => (
              <div key={index} className="space-y-4">
                <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-pink-500 drop-shadow-lg">{s.val}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/flowers.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-pink-600 decoration-8 underline-offset-[16px]">Our Solution Portfolio</h2>
              <p className="mt-12 text-xs font-black uppercase tracking-[0.6em] text-gray-300 italic">Global Beauty Tech Leadership</p>
           </div>
           <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
              {portfolio.map((work, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.01 }}
                  className="bg-white p-12 rounded-[5rem] border border-gray-100 flex flex-col md:flex-row gap-12 items-center shadow-sm hover:shadow-2xl transition-all group border-r-8 border-r-pink-50"
                >
                   <div className="w-full md:w-56 aspect-square bg-pink-50 rounded-[4rem] flex items-center justify-center border-4 border-white shadow-inner group-hover:rotate-6 transition-transform relative overflow-hidden">
                      <div className="text-pink-600 font-black text-7xl italic drop-shadow-sm">{work.title.charAt(0)}</div>
                      <Sparkles className="absolute bottom-2 right-2 h-10 w-10 text-pink-200 group-hover:text-pink-600 opacity-20 group-hover:opacity-60 transition-all"/>
                   </div>
                   <div className="grow">
                      <h3 className="text-3xl font-black italic tracking-tighter uppercase text-gray-900 mb-2">{work.title}</h3>
                      <p className="text-pink-600 text-[11px] font-black uppercase tracking-widest mb-6 underline decoration-pink-100 decoration-4">{work.subtitle}</p>
                      <p className="text-gray-500 text-sm leading-relaxed italic font-medium">{work.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-32 text-center mb-16">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-400 border-x-4 border-gray-100 px-8 inline-block">Our Latest Saloon Products</h3>
           </div>
           <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {latestWorks.map((work, index) => (
                <div key={index} className="group cursor-pointer">
                   <div className="aspect-[4/3] rounded-[4rem] overflow-hidden bg-gray-100 mb-8 border-[12px] border-white shadow-2xl transition-all group-hover:border-pink-600 relative">
                      <img src={work.image} alt={work.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                         <Search className="text-white h-8 w-8" />
                      </div>
                   </div>
                   <h4 className="text-xl font-black italic uppercase tracking-tighter text-center text-gray-900 group-hover:text-pink-600 transition-colors uppercase">{work.title}</h4>
                   <p className="text-[11px] font-black uppercase tracking-widest text-pink-600 text-center mt-2 italic">{work.subtitle}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-pink-900 text-white relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clothe.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black italic mb-8 uppercase tracking-tighter leading-tight drop-shadow-md">Industries We Cater To</h2>
              <p className="text-pink-100 text-sm max-w-4xl mx-auto leading-relaxed italic font-bold uppercase tracking-widest border-y border-white/10 py-8">Top Mobile app development solutions across software product companies and agencies.</p>
           </div>
           <div className="flex flex-wrap justify-center gap-16 md:gap-24 lg:gap-32">
              {industries.map((ind, index) => (
                <div key={index} className="text-center space-y-6 group cursor-pointer hover:-translate-y-4 transition-transform">
                   <div className="w-24 h-24 bg-white/5 hover:bg-white hover:text-pink-900 transition-all border border-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl relative">
                      <ind.icon className="h-10 w-10 group-hover:scale-110 transition-transform" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/20 rounded-full blur-sm group-hover:bg-pink-600"></div>
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
           <div className="text-center mb-24">
              <h2 className="text-4xl font-black italic tracking-tighter uppercase underline decoration-pink-600 decoration-[16px] underline-offset-[20px] mb-12 drop-shadow-sm">Client Testimonials</h2>
              <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.8em] italic mt-16 leading-none">Exceeding Expectation Every Single Time</p>
           </div>
           <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {testimonials.map((t, index) => (
                <div key={index} className="p-12 bg-gray-50 rounded-[4rem] border border-gray-100 flex flex-col relative group hover:bg-pink-50 transition-all hover:shadow-[0_40px_100px_-20px_rgba(255,100,150,0.1)]">
                   <div className="text-pink-100 text-9xl font-black absolute -top-8 -right-4 select-none group-hover:text-pink-200 transition-colors opacity-60">”</div>
                   <p className="text-gray-600 italic text-base leading-relaxed mb-12 relative z-10 grow font-bold uppercase tracking-tight">“{t.text}”</p>
                   <div className="flex items-center gap-6 border-t border-gray-200 pt-10 mt-auto">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center font-black text-pink-600 shadow-2xl border border-gray-100 text-2xl italic group-hover:bg-pink-600 group-hover:text-white transition-all transform group-hover:rotate-12">{t.name.charAt(0)}</div>
                      <div className="grow">
                         <div className="font-black text-gray-900 italic tracking-tighter text-base uppercase mb-1">{t.name}</div>
                         <div className="text-[10px] text-pink-600 font-extrabold uppercase tracking-widest">{t.role}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-[6rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_80px_160px_-40px_rgba(255,100,150,0.25)] border border-gray-50">
            {/* Form Side */}
            <div className="lg:w-3/5 p-8 md:p-24 bg-white">
                <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Discuss Your <br/><span className="text-pink-600 border-b-8 border-pink-600/20">Requirement!</span></h2>
                <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic underline decoration-pink-100 decoration-wavy decoration-2">Guarantee to get back within a business day</p>
                
                <form className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-[0.2em] italic">Name*</label>
                       <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[6px] border-transparent focus:border-pink-600 rounded-[2.5rem] px-10 py-6 focus:outline-none transition-all font-black placeholder:italic shadow-inner placeholder:text-gray-300" required />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-[0.2em] italic">E-mail*</label>
                       <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[6px] border-transparent focus:border-pink-600 rounded-[2.5rem] px-10 py-6 focus:outline-none transition-all font-black placeholder:italic shadow-inner placeholder:text-gray-300" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-[0.2em] italic">Phone No</label>
                       <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[6px] border-transparent focus:border-pink-600 rounded-[2.5rem] px-10 py-6 focus:outline-none transition-all font-black placeholder:italic shadow-inner placeholder:text-gray-300" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-[0.2em] italic">Subject*</label>
                       <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[6px] border-transparent focus:border-pink-600 rounded-[2.5rem] px-10 py-6 focus:outline-none transition-all font-black placeholder:italic shadow-inner placeholder:text-gray-300" required />
                    </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-[0.2em] italic">Your Message*</label>
                     <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[6px] border-transparent focus:border-pink-600 rounded-[3.5rem] px-10 py-8 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner placeholder:text-gray-300" required></textarea>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-10 py-6">
                     <div className="bg-gray-900 text-white px-10 py-5 rounded-[2.5rem] font-black italic text-base border-r-[12px] border-pink-600 underline decoration-pink-500 decoration-4 underline-offset-4">
                        ANTISPAM: 7 + 5 = ?
                     </div>
                     <input name="antispam" type="text" placeholder="Result" className="w-32 bg-pink-50 border-4 border-pink-100 rounded-[2rem] px-8 py-5 font-black text-center focus:outline-none focus:border-pink-600 transition-all text-xl italic" required />
                  </div>

                  <button className="w-full bg-pink-600 hover:bg-gray-900 text-white py-10 rounded-[3.5rem] font-black italic uppercase tracking-[0.4em] text-base flex items-center justify-center gap-6 transition-all shadow-[0_30px_60px_-12px_rgba(255,100,120,0.5)] active:scale-95 group">
                    <Send className="h-8 w-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /> Submit Requirement
                  </button>
                </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 p-8 md:p-24 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/20 blur-[150px] rounded-full -mr-[250px] -mt-[250px]"></div>
                <div className="relative z-10 space-y-20">
                   <div>
                      <h3 className="text-4xl font-black italic tracking-tighter mb-8 uppercase leading-tight text-pink-500">Got a Beauty Tech <br/><span className="text-white">project in mind?</span></h3>
                      <p className="text-gray-400 text-base font-medium leading-relaxed italic mb-12">Bring your possibilities to reality through technology. Let's start with a <span className="text-pink-500 font-black not-italic px-2 bg-white/10 rounded-lg">2hr free consulting session</span>. Reach out today!</p>
                      <div className="space-y-10">
                         <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-16 h-16 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:bg-pink-600 transition-all shadow-2xl group-hover:rotate-12">
                               <Mail className="h-8 w-8 text-pink-500 group-hover:text-white" />
                            </div>
                            <span className="font-black italic text-lg tracking-tight hover:text-pink-500 transition-colors uppercase decoration-pink-500 decoration-4">Info@kryosssoftech.org</span>
                         </div>
                         <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-16 h-16 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:bg-pink-600 transition-all shadow-2xl group-hover:-rotate-12">
                               <Phone className="h-8 w-8 text-pink-500 group-hover:text-white" />
                            </div>
                            <div className="space-y-1">
                               <div className="font-black italic text-lg tracking-tight hover:text-pink-500 transition-colors uppercase">+0124-4001495</div>
                               <div className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] italic">Available Global Support</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-16">
                      <h3 className="text-2xl font-black italic tracking-widest uppercase border-l-8 border-pink-600 pl-8 drop-shadow-sm">Our Offices</h3>
                      <div className="space-y-12">
                         <div className="group cursor-default">
                            <div className="flex items-center gap-4 mb-3">
                               <MapPin className="h-5 w-5 text-pink-500" />
                               <span className="uppercase text-[11px] font-black tracking-widest text-pink-500 italic block">India · Gurgaon HQ</span>
                            </div>
                            <p className="text-sm text-gray-400 font-bold italic leading-relaxed group-hover:text-white transition-colors">1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
                         </div>
                         <div className="group cursor-default">
                            <div className="flex items-center gap-4 mb-3">
                               <MapPin className="h-5 w-5 text-pink-500" />
                               <span className="uppercase text-[11px] font-black tracking-widest text-pink-500 italic block">USA · Operation Branch</span>
                            </div>
                            <p className="text-sm text-gray-400 font-bold italic leading-relaxed group-hover:text-white transition-colors">348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India</p>
                         </div>
                         <div className="group cursor-default">
                            <div className="flex items-center gap-4 mb-3">
                               <MapPin className="h-5 w-5 text-pink-500" />
                               <span className="uppercase text-[11px] font-black tracking-widest text-pink-500 italic block">India · Pune Tech Hub</span>
                            </div>
                            <p className="text-sm text-gray-400 font-bold italic leading-relaxed group-hover:text-white transition-colors">C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune – 411020 India.</p>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Trust */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="container mx-auto px-4 text-center">
            <p className="text-[11px] font-black uppercase tracking-[1em] text-gray-300 mb-16 italic">Building The Future Of Beauty</p>
            <div className="flex flex-wrap justify-center gap-20 lg:gap-32 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
               {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-32 md:w-40 h-12 bg-gray-400 rounded-full flex items-center justify-center font-black italic uppercase text-[10px] tracking-widest border border-gray-200 shadow-inner">Partner {i}</div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default SalonBeautyApp;
