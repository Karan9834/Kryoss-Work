import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Smartphone, 
  Layout, 
  Database, 
  Search, 
  Bell, 
  CreditCard, 
  Star, 
  MapPin, 
  Send,
  ArrowRight,
  TrendingUp,
  Clock,
  Home,
  Map,
  Filter,
  Camera,
  Globe,
  Settings,
  Lock,
  Server,
  Code,
  LifeBuoy,
  Phone,
  Mail,
  Heart,
  Plane,
  Truck,
  GraduationCap,
  PlayCircle,
  Activity,
  Calculator,
  Compass,
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';

const RealEstateApp = () => {
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

  const coreFeatures = [
    { 
      title: "Map-Based Search", 
      desc: "Interactive map integration allowing users to search properties by drawing boundaries and filtering proximity.", 
      icon: Map 
    },
    { 
      title: "3D Virtual Tours", 
      desc: "Enable high-quality 360-degree virtual property walkthroughs for a remote viewing experience.", 
      icon: Camera 
    },
    { 
      title: "Mortgage Calculator", 
      desc: "In-built tool for users to calculate monthly installments and down payments instantly.", 
      icon: Calculator 
    },
    { 
      title: "Agent CRM", 
      desc: "Comprehensive dashboard for agents to manage property listings, leads, and client communication.", 
      icon: Users 
    },
    { 
      title: "Real-time Chat", 
      desc: "Seamless instant messaging between buyers, renters, and property owners/agents.", 
      icon: Send 
    },
    { 
      title: "Verified Listings", 
      desc: "Trust-badge system for verified properties and authorized real estate agents.", 
      icon: ShieldCheck 
    }
  ];

  const adminFeatures = [
    { title: "Listing Approval", desc: "Manual review system for every property submission to maintain platform quality.", icon: Lock },
    { title: "Revenue Dashboard", desc: "Track earnings from featured listings, agent subscriptions, and lead packages.", icon: TrendingUp },
    { title: "Lead Management", desc: "Global overview of property inquiries and conversion tracking across the platform.", icon: Activity },
    { title: "Agency Portal", desc: "Special tools for large real estate agencies to manage multiple agents and listings.", icon: Briefcase }
  ];

  const supportFeatures = [
    { title: "Fully Customizable", desc: "Flexible scripts ready to meet specific jurisdictional requirements.", icon: Settings },
    { title: "Bug Support", desc: "Complimentary bug fixes and updates for the first year of operation.", icon: LifeBuoy },
    { title: "Linux Server Setup", desc: "Optimized server configuration for low-latency dispatching.", icon: Server },
    { title: "Open Source Code", desc: "100% full source code ownership for deep future integrations.", icon: Code }
  ];

  const portfolio = [
    { title: "EstateLink", subtitle: "National Property Portal", desc: "A comprehensive real estate marketplace serving nationwide with 200k+ active listings." },
    { title: "CondoX", subtitle: "Luxury High-Rise App", desc: "Specialized mobile app for premium luxury apartment bookings and virtual tours." },
    { title: "ModernHome", subtitle: "Real Estate Marketplace", desc: "Clean and minimalist search platform focused on first-time buyers and sustainable homes." }
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
        <title>Real Estate App Development | KryossWork</title>
        <meta name="description" content="Empower property transactions with your own premium real estate platform like Zillow. Kryoss Softech offers 3D virtual tours, map search, and agent CRM features." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white text-center">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
           >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
                 <Home className="h-4 w-4 text-blue-300" />
                 <span className="text-white text-xs font-black uppercase tracking-widest">Global Property Engine</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                Empower Property <br />
                <span className="text-[#00BFFF] drop-shadow-[0_4px_41px_rgba(0,191,255,0.4)] underline decoration-white/30 decoration-8 underline-offset-[20px]">Transactions</span>
              </h1>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed font-medium mt-12 max-w-2xl mx-auto">
                Launch a premium Real Estate platform like Zillow or Trulia. Specialized in map-based property search and high-fidelity virtual tours.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-white text-blue-900 hover:bg-gray-900 hover:text-white font-black py-5 px-12 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl uppercase tracking-widest group">
                    Start Your Business <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Mockups Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-3xl mx-auto mb-20 text-center">
              <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">Digital Property Suite</h2>
              <p className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">Seamless User Journey from Discovery to Ownership</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* Buyer App */}
             <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group relative transition-all">
               <div className="bg-blue-900 p-8 text-white text-left">
                  <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                    <span>12:30 PM</span>
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <h3 className="text-2xl font-black italic tracking-tighter underline underline-offset-4 decoration-blue-500 decoration-2">🏠 EstateHub</h3>
                  <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-blue-100 uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-xl border border-white/5">
                     <MapPin className="h-3 w-3" /> Area: Manhattan, NY
                  </div>
               </div>
               <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                  <div className="p-3 bg-gray-100 rounded-2xl flex items-center gap-3">
                     <Search className="h-4 w-4 text-gray-400" />
                     <span className="text-gray-400 text-xs italic">Search by city or zip...</span>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Featured Properties</div>
                     {[
                       { name: "Modern Skyline Villa", price: "$2.4M", type: "Buy", rate: "⭐ 4.9", icon: "🏙️" },
                       { name: "Green Valley Condo", price: "$4,500/mo", type: "Rent", rate: "⭐ 4.8", icon: "🌳" }
                     ].map((p, i) => (
                       <div key={i} className="flex flex-col rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden group/item">
                          <div className="h-28 bg-gray-50 flex items-center justify-center text-5xl group-hover/item:scale-110 transition-transform">{p.icon}</div>
                          <div className="p-4">
                             <div className="flex justify-between items-start mb-1">
                                <h4 className="font-black italic text-[11px] uppercase">{p.name}</h4>
                                <span className="text-[10px] font-black text-blue-600 px-2 py-0.5 bg-blue-50 rounded-lg">{p.type}</span>
                             </div>
                             <div className="flex items-center justify-between mt-3">
                                <div className="text-[10px] font-black italic text-gray-900">{p.price}</div>
                                <div className="text-[9px] font-bold text-gray-400">{p.rate}</div>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center gap-4">
                  <button className="grow bg-blue-900 text-white py-4 rounded-[1.5rem] font-black italic uppercase tracking-widest text-xs shadow-xl">
                     Find Properties
                  </button>
               </div>
             </div>

             {/* Agent Dashboard */}
             <div className="bg-gray-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] h-[650px] flex flex-col group lg:-mt-10 relative z-10 transition-all">
                <div className="bg-blue-600 p-8 text-white text-left relative overflow-hidden text-left">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 blur-[50px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                     <span>12:30 PM</span>
                     <Compass className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter">Agent Portal</h3>
                   <p className="text-blue-100 text-[10px] font-bold italic mt-2">Verified Partner · REMAX Realty</p>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-[2rem] text-white">
                         <div className="text-[8px] font-black uppercase opacity-40 mb-1">New Leads</div>
                         <div className="text-2xl font-black italic text-blue-400">18</div>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-[2rem] text-white">
                         <div className="text-[8px] font-black uppercase opacity-40 mb-1">My Listings</div>
                         <div className="text-2xl font-black italic text-blue-400">24</div>
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Inquiries Queue</div>
                      {[
                        { client: "Robert Smith", property: "Skyline Villa", status: "Follow up" },
                        { client: "Lisa Wong", property: "Green Valley", status: "New" }
                      ].map((n, i) => (
                        <div key={i} className="p-4 rounded-3xl bg-white/5 border border-white/10 flex justify-between items-center">
                           <div>
                              <div className="font-black text-white text-[11px] italic mb-1">{n.client}</div>
                              <div className="text-[9px] text-blue-400 font-bold uppercase">{n.property}</div>
                           </div>
                           <span className="text-[9px] font-black text-white/40 italic">{n.status}</span>
                        </div>
                      ))}
                   </div>

                   <button className="w-full bg-blue-500 text-white rounded-2xl py-4 text-xs font-black uppercase italic tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-blue-500/10">
                      <TrendingUp className="h-4 w-4" /> Market My Listing
                   </button>
                </div>
             </div>

             {/* Admin Control */}
             <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group lg:mt-12 transition-all">
                <div className="bg-gray-900 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 blur-[60px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                     <span>12:30 PM</span>
                     <ShieldCheck className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter underline underline-offset-8 decoration-blue-500 decoration-4">Platform Control</h3>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Inventory Overview</div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="p-4 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                            <div className="text-2xl font-black italic text-gray-900 tracking-tighter">4.2K+</div>
                            <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Listings</div>
                         </div>
                         <div className="p-4 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                            <div className="text-2xl font-black italic text-gray-900 tracking-tighter">850+</div>
                            <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Active Agents</div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Moderation Hub</div>
                      {[
                        { label: "Listing Approval", status: "14 Pending", icon: Building2 },
                        { label: "Agent Verification", status: "6 Pending", icon: UserCheck },
                        { label: "Featured Ads Goal", status: "82%", icon: TrendingUp }
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 cursor-pointer">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                                 <m.icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <span className="text-[10px] font-black italic text-gray-700">{m.label}</span>
                           </div>
                           <span className="text-[10px] font-black italic text-blue-600">{m.status}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 text-center">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Platform Architecture</h2>
              <p className="text-blue-400 font-bold uppercase tracking-[0.5em] text-[10px] mt-4 italic">Enterprise Solutions for Modern Real Estate</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreFeatures.map((f, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-blue-600/10 hover:border-blue-500 transition-all group cursor-default">
                   <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 rotate-12 group-hover:rotate-0 transition-all">
                      <f.icon className="h-6 w-6 text-blue-500 group-hover:text-white" />
                   </div>
                   <h3 className="text-[10px] font-black uppercase tracking-widest italic leading-tight">{f.title}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Admin Mastery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 text-center">
            <h2 className="text-5xl font-black mb-4 italic uppercase tracking-tighter underline underline-offset-[20px] decoration-blue-900 decoration-8">Operator Mastery</h2>
            <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] mt-16 italic">Complete Control for Portal Owners</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {adminFeatures.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all border-b-[12px] border-blue-900 group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-gray-50 to-blue-50 shadow-inner group-hover:rotate-12 transition-transform">
                  <f.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-4 text-gray-900 group-hover:text-blue-800 transition-colors uppercase">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed italic font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
         <div className="container mx-auto px-4 text-center">
           <div className="mb-20">
              <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">lifecycle Support</h2>
              <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight max-w-2xl mx-auto">We don't just build software; we build market dominators. Comprehensive support from launch to viral growth.</p>
           </div>
           <div className="grid md:grid-cols-4 gap-6 text-left">
              {supportFeatures.map((s, i) => (
                <div key={i} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-blue-200">
                   <div className="w-14 h-14 bg-gray-900 group-hover:bg-blue-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                      <s.icon className="h-6 w-6 text-white" />
                   </div>
                   <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 group-hover:text-blue-600 transition-all underline decoration-blue-100 decoration-4 underline-offset-4">{s.title}</h3>
                   <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="text-center mb-20 text-center">
              <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-blue-500 decoration-8 underline-offset-[16px]">Portal Solutions</h2>
           </div>
           <div className="grid lg:grid-cols-3 gap-8">
              {portfolio.map((work, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group text-left">
                   <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors shadow-2xl">
                      <Building2 className="h-8 w-8 text-blue-400 group-hover:text-white" />
                   </div>
                   <h3 className="text-2xl font-black italic uppercase text-blue-500 mb-2">{work.title}</h3>
                   <p className="text-blue-100/50 text-[10px] uppercase font-black tracking-widest mb-6 italic">{work.subtitle}</p>
                   <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{work.desc}</p>
                </div>
              ))}
           </div>
           
           <div className="grid md:grid-cols-4 gap-8 mt-24">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] p-10 flex flex-col relative group hover:bg-blue-50 transition-all text-left">
                   <div className="text-blue-500 text-6xl font-black absolute top-4 right-8 select-none opacity-10">“</div>
                   <p className="text-[11px] italic font-bold leading-relaxed mb-8 text-gray-700 relative z-10 grow">“{t.text}”</p>
                   <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 bg-blue-900 rounded-2xl flex items-center justify-center font-black text-white text-xl italic">{t.name.charAt(0)}</div>
                      <div>
                         <div className="font-black italic text-[11px] uppercase text-gray-900 leading-none">{t.name}</div>
                         <div className="text-[9px] text-blue-600 uppercase font-bold tracking-widest mt-1 italic">{t.role}</div>
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
          <div className="max-w-7xl mx-auto bg-white rounded-[5rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,100,0.15)] border border-gray-50">
            {/* Form Side */}
            <div className="lg:w-3/5 p-8 md:p-20 bg-white">
                <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Start Your <br/><span className="text-blue-900 border-b-8 border-blue-900/20">Property Market!</span></h2>
                <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic">Guarantee to get back within a business day</p>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Name*</label>
                       <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-blue-900 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">E-mail*</label>
                       <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-blue-900 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Phone No</label>
                       <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-blue-900 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Subject*</label>
                       <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-blue-900 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Your Message*</label>
                     <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-blue-900 rounded-[2.5rem] px-8 py-6 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner" required></textarea>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                     <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl font-black italic text-sm border-r-[8px] border-blue-900">
                        ANTISPAM: 7 + 5 = ?
                     </div>
                     <input name="antispam" type="text" placeholder="Result" className="w-32 bg-blue-50 border-2 border-blue-200 rounded-2xl px-6 py-4 font-black text-center focus:outline-none focus:border-blue-900 transition-all text-xl italic" required />
                  </div>

                  <button className="w-full bg-blue-900 hover:bg-black text-white py-8 rounded-[3rem] font-black italic uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 transition-all shadow-xl shadow-blue-900/10">
                    <Send className="h-6 w-6" /> Submit Inquiry
                  </button>
                </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 p-8 md:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -mr-[200px] -mt-[200px]"></div>
                <div className="relative z-10 space-y-16 text-left">
                   <div>
                      <h3 className="text-4xl font-black italic tracking-tighter mb-6 uppercase leading-tight text-blue-500">Ready to <br/>scale your <br/>Real Estate portal?</h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-10">We help you build the technical dominance for the future of global property trading. Let's start with a <span className="text-blue-500 font-black not-italic px-1 bg-white/10 rounded">2hr free consulting</span> session.</p>
                      <div className="space-y-8">
                         <div className="flex items-center gap-6 group cursor-pointer text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-xl">
                               <Mail className="h-6 w-6 text-blue-500 group-hover:text-white" />
                            </div>
                            <span className="font-black italic text-base tracking-tighter">Info@kryosssoftech.org</span>
                         </div>
                         <div className="flex items-center gap-6 group cursor-pointer text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-xl">
                               <Phone className="h-6 w-6 text-blue-500 group-hover:text-white" />
                            </div>
                            <div className="space-y-1">
                               <div className="font-black italic text-base tracking-tighter">+0124-4001495</div>
                               <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Global Operations Desk</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-12 text-left">
                      <h3 className="text-xl font-black italic tracking-widest uppercase border-l-8 border-blue-600 pl-6">Our Presence</h3>
                      <div className="space-y-10">
                         <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                               <MapPin className="h-4 w-4 text-blue-400" />
                               <span className="uppercase text-[10px] font-black tracking-widest text-blue-400 italic">India HQ · Gurgaon</span>
                            </div>
                            <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed">1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
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

export default RealEstateApp;
