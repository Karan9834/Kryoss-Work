import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
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
  Layers,
  Map,
  Filter,
  MessageSquare,
  BarChart3,
  Globe,
  Settings,
  Truck,
  Building2,
  Lock,
  Server,
  Code,
  LifeBuoy,
  Phone,
  Mail,
  Heart,
  Plane,
  GraduationCap,
  PlayCircle,
  Megaphone,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const BusinessDirectoryApp = () => {
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
      title: "Business Listings", 
      desc: "Allow businesses to create detailed profiles with images, contact info, and business hours.", 
      icon: Building2 
    },
    { 
      title: "Advanced Search & Filter", 
      desc: "Users can find businesses by category, location, rating, and keyword in seconds.", 
      icon: Search 
    },
    { 
      title: "Reviews & Ratings", 
      desc: "Robust review system to build trust and help users make informed decisions.", 
      icon: Star 
    },
    { 
      title: "Map Integration", 
      desc: "Interactive maps showing business locations and directions for easy navigation.", 
      icon: Map 
    },
    { 
      title: "Sponsored Ads", 
      desc: "Monetize your platform by allowing businesses to pay for top placement in search results.", 
      icon: Megaphone 
    },
    { 
      title: "Claim Business", 
      desc: "Enable business owners to claim and verify their listings to manage their reputation.", 
      icon: ShieldCheck 
    }
  ];

  const adminFeatures = [
    { title: "Verification System", desc: "Rigid approval workflow for new business submissions and claims.", icon: Lock },
    { title: "Revenue Dashboard", desc: "Track earnings from ads, premium listings, and subscriptions.", icon: BarChart3 },
    { title: "Category Management", desc: "Unlimited nesting of business categories and high-level tags.", icon: Layers },
    { title: "Review Moderation", desc: "AI-powered and manual tools to prevent fake reviews and spam.", icon: MessageSquare }
  ];

  const supportFeatures = [
    { title: "Fully Customizable", desc: "Flexible scripts ready to meet specific jurisdictional requirements.", icon: Settings },
    { title: "Bug Support", desc: "Complimentary bug fixes and updates for the first year of operation.", icon: LifeBuoy },
    { title: "Linux Server Setup", desc: "Optimized server configuration for low-latency dispatching.", icon: Server },
    { title: "Open Source Code", desc: "100% full source code ownership for deep future integrations.", icon: Code }
  ];

  const portfolio = [
    { title: "CityHub", subtitle: "Hyperlocal Directory", desc: "A robust local business search engine with 50,000+ listings and real-time review updates." },
    { title: "BizFinder", subtitle: "B2B Marketplace", desc: "Professional directory connecting manufacturers and suppliers across global industrial sectors." },
    { title: "WellnessMap", subtitle: "Niche Health Directory", desc: "Specialized search platform for health clinics, spas, and wellness centers in metro cities." }
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
        <title>Business Directory App Development | KryossWork</title>
        <meta name="description" content="Empower local commerce with your own business directory platform like Yelp. Kryoss Softech offers advanced search, review systems, and monetization features." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
           >
              <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
                 <Globe className="h-4 w-4 text-blue-200" />
                 <span className="text-white text-xs font-black uppercase tracking-widest">Global Discovery Platform</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                Empower Your <br />
                <span className="text-[#00F5FF] drop-shadow-[0_4px_41px_rgba(0,245,255,0.4)] underline decoration-white/30 decoration-8 underline-offset-[20px]">Local Commerce</span>
              </h1>
              <p className="text-xl text-blue-50 mb-12 leading-relaxed font-medium mt-12 max-w-2xl mx-auto">
                Launch a premium Business Directory platform like Yelp to connect users with the best local services and businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-white text-blue-600 hover:bg-gray-900 hover:text-white font-black py-5 px-12 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl uppercase tracking-widest group">
                    Start Building <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Mockups Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-3xl mx-auto mb-20 text-center">
              <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">Hyperlocal Connectivity</h2>
              <p className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-xs">Seamless User Journey from Discovery to Engagement</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* Discovery App */}
             <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group relative transition-all">
               <div className="bg-indigo-600 p-8 text-white text-left">
                  <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                    <span>12:30 PM</span>
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <h3 className="text-2xl font-black italic tracking-tighter">🔍 BizExplore</h3>
                  <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-indigo-100 uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-xl border border-white/5">
                     <MapPin className="h-3 w-3" /> Manhattan, NY
                  </div>
               </div>
               <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                  <div className="p-3 bg-gray-100 rounded-2xl flex items-center gap-3">
                     <Search className="h-4 w-4 text-gray-400" />
                     <span className="text-gray-400 text-xs italic">What are you looking for?</span>
                  </div>
                  <div className="space-y-3">
                     <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Categories</div>
                     <div className="grid grid-cols-2 gap-2">
                        {["Restaurants", "Salons", "Gyms", "Mechanics"].map(c => (
                           <div key={c} className="p-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-2 hover:bg-indigo-50 transition-colors cursor-pointer">
                              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-[10px] shadow-sm">📍</div>
                              <span className="text-[10px] font-black uppercase tracking-tighter">{c}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Top Rated Near You</div>
                     {[
                       { name: "Blue Bay Cafe", rate: "4.9", reviews: "2.4K", icon: "☕" },
                       { name: "Iron Fitness", rate: "4.8", reviews: "1.2K", icon: "💪" }
                     ].map((b, i) => (
                       <div key={i} className="flex items-center justify-between p-4 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl">{b.icon}</div>
                             <div>
                                <div className="font-black italic text-sm">{b.name}</div>
                                <div className="text-[9px] font-bold text-gray-400 italic">⭐ {b.rate} ({b.reviews} reviews)</div>
                             </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-indigo-500" />
                       </div>
                     ))}
                  </div>
               </div>
             </div>

             {/* Business Dashboard */}
             <div className="bg-gray-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] h-[650px] flex flex-col group lg:-mt-10 relative z-10 transition-all">
                <div className="bg-indigo-500 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 blur-[50px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                     <span>12:30 PM</span>
                     <Building2 className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter">Business Hub</h3>
                   <p className="text-indigo-100 text-[10px] font-bold italic mt-2">Blue Bay Cafe · Premium Member</p>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-[2rem] text-white">
                         <div className="text-[8px] font-black uppercase text-white/40 tracking-widest mb-1">Total Profile Views</div>
                         <div className="text-2xl font-black italic text-indigo-400">12,450</div>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-[2rem] text-white">
                         <div className="text-[8px] font-black uppercase text-white/40 tracking-widest mb-1">New Leads</div>
                         <div className="text-2xl font-black italic text-indigo-400">84</div>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Recent Reviews</div>
                      {[
                        { user: "Sarah J.", rate: "5", text: "Amazing coffee and great vibe!", time: "2h ago" },
                        { user: "Mike T.", rate: "4", text: "Good food, a bit crowded.", time: "5h ago" }
                      ].map((r, i) => (
                        <div key={i} className="p-4 rounded-3xl bg-white/5 border border-white/10 space-y-2">
                           <div className="flex justify-between items-center text-[10px] font-black italic">
                              <span className="text-indigo-400">{r.user}</span>
                              <span className="text-yellow-500">{"⭐".repeat(parseInt(r.rate))}</span>
                           </div>
                           <p className="text-[11px] text-white/70 italic leading-snug">"{r.text}"</p>
                           <button className="text-[9px] font-black uppercase tracking-widest text-indigo-500 hover:text-white transition-colors">Reply to Review</button>
                        </div>
                      ))}
                   </div>
                   <button className="w-full bg-indigo-600 text-white rounded-2xl py-4 text-xs font-black uppercase italic tracking-widest flex items-center justify-center gap-3 shadow-xl">
                      <Megaphone className="h-4 w-4" /> Create Ad Campaign
                   </button>
                </div>
             </div>

             {/* Admin Center */}
             <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group lg:mt-12 transition-all">
                <div className="bg-gray-900 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-20 blur-[60px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                     <span>12:30 PM</span>
                     <ShieldCheck className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter">Moderation Desk</h3>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 bg-gray-100 rounded-2xl border border-gray-200 shadow-inner">
                         <div className="text-lg font-black italic text-gray-900">856</div>
                         <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Businesses</div>
                      </div>
                      <div className="p-3 bg-gray-100 rounded-2xl border border-gray-200 shadow-inner">
                         <div className="text-lg font-black italic text-gray-900">4,2K</div>
                         <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Reviews</div>
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Pending Tasks</div>
                      {[
                        { label: "Listing Verifications", count: "12", icon: Building2 },
                        { label: "Claim Requests", count: "4", icon: ShieldCheck },
                        { label: "Reported Reviews", count: "18", icon: Bell }
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-3xl bg-gray-50 hover:bg-indigo-50/50 cursor-pointer transition-all border border-transparent hover:border-indigo-100">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-gray-100">
                                 <m.icon className="h-5 w-5 text-indigo-600" />
                              </div>
                              <span className="text-[10px] font-black italic text-gray-700">{m.label}</span>
                           </div>
                           <span className="text-[10px] font-black italic text-indigo-600">{m.count}</span>
                        </div>
                      ))}
                   </div>

                   <div className="p-6 bg-indigo-600 rounded-[3rem] text-white shadow-xl shadow-indigo-100">
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1 italic">Ad Revenue (MTD)</div>
                      <div className="text-3xl font-black italic tracking-widest">$8,450.00</div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Platform Architecture</h2>
              <p className="text-indigo-400 font-bold uppercase tracking-[0.5em] text-[10px] mt-4 italic">Built for Maximum Discovery & Engagement</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreFeatures.map((f, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-indigo-600/10 hover:border-indigo-500 transition-all group">
                   <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500 rotate-12 group-hover:rotate-0 transition-all">
                      <f.icon className="h-6 w-6 text-indigo-500 group-hover:text-white" />
                   </div>
                   <h3 className="text-[10px] font-black uppercase tracking-widest italic">{f.title}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Admin Mastery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 italic uppercase tracking-tighter underline underline-offset-[20px] decoration-indigo-600 decoration-8">Powerful Moderation</h2>
            <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] mt-16 italic">Complete Control for Platform Administrators</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {adminFeatures.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all border-b-[12px] border-indigo-600 group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-gray-50 to-indigo-50 shadow-inner group-hover:rotate-12 transition-transform">
                  <f.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors uppercase">{f.title}</h3>
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
              <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">Lifecycle Support</h2>
              <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight max-w-2xl mx-auto">We don't just build; we scale. Comprehensive support from launch to viral growth.</p>
           </div>
           <div className="grid md:grid-cols-4 gap-6 text-left">
              {supportFeatures.map((s, i) => (
                <div key={i} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-indigo-200">
                   <div className="w-14 h-14 bg-gray-900 group-hover:bg-indigo-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                      <s.icon className="h-6 w-6 text-white" />
                   </div>
                   <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 group-hover:text-indigo-600 transition-all">{s.title}</h3>
                   <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Portfolio & Testimonials */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-indigo-600 decoration-8 underline-offset-[16px]">Directory Success</h2>
           </div>
           <div className="grid lg:grid-cols-3 gap-8">
              {portfolio.map((work, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                      <Briefcase className="h-8 w-8 text-indigo-400 group-hover:text-white" />
                   </div>
                   <h3 className="text-2xl font-black italic uppercase text-indigo-500 mb-2">{work.title}</h3>
                   <p className="text-indigo-100/50 text-[10px] uppercase font-black tracking-widest mb-6 italic">{work.subtitle}</p>
                   <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{work.desc}</p>
                </div>
              ))}
           </div>
           
           <div className="grid md:grid-cols-4 gap-8 mt-24">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] p-10 flex flex-col relative group hover:bg-indigo-50 transition-all">
                   <div className="text-indigo-500 text-6xl font-black absolute top-4 right-8 select-none opacity-10">“</div>
                   <p className="text-[11px] italic font-bold leading-relaxed mb-8 text-gray-700 relative z-10 grow">“{t.text}”</p>
                   <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center font-black text-white text-xl italic">{t.name.charAt(0)}</div>
                      <div>
                         <div className="font-black italic text-[11px] uppercase text-gray-900 leading-none">{t.name}</div>
                         <div className="text-[9px] text-indigo-600 uppercase font-bold tracking-widest mt-1 italic">{t.role}</div>
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
          <div className="max-w-7xl mx-auto bg-white rounded-[5rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] border border-gray-50">
            {/* Form Side */}
            <div className="lg:w-3/5 p-8 md:p-20 bg-white">
                <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Discuss Your <br/><span className="text-indigo-600 border-b-8 border-indigo-600/20">Market Strategy!</span></h2>
                <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic">Guarantee to get back within a business day</p>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Name*</label>
                       <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-indigo-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">E-mail*</label>
                       <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-indigo-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Phone No</label>
                       <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-indigo-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Subject*</label>
                       <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-indigo-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Your Message*</label>
                     <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-indigo-600 rounded-[2.5rem] px-8 py-6 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner" required></textarea>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                     <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl font-black italic text-sm border-r-[8px] border-indigo-600">
                        ANTISPAM: 7 + 5 = ?
                     </div>
                     <input name="antispam" type="text" placeholder="Result" className="w-32 bg-indigo-50 border-2 border-indigo-200 rounded-2xl px-6 py-4 font-black text-center focus:outline-none focus:border-indigo-600 transition-all" required />
                  </div>

                  <button className="w-full bg-indigo-600 hover:bg-black text-white py-8 rounded-[3rem] font-black italic uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 transition-all shadow-xl">
                    <Send className="h-6 w-6" /> Submit Inquiry
                  </button>
                </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 p-8 md:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full -mr-[200px] -mt-[200px]"></div>
                <div className="relative z-10 space-y-16">
                   <div>
                      <h3 className="text-4xl font-black italic tracking-tighter mb-6 uppercase leading-tight text-indigo-400">Ready to <br/>scale your <br/>Directory?</h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-10">We would love to hear how we can bring your possibilities to reality through technology and give away <span className="text-indigo-400 font-black not-italic px-1 bg-white/10 rounded">2hrs of free consulting</span>.</p>
                      <div className="space-y-8">
                         <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-indigo-600 transition-all shadow-xl">
                               <Mail className="h-6 w-6 text-indigo-400 group-hover:text-white" />
                            </div>
                            <span className="font-black italic text-base tracking-tighter">Info@kryosssoftech.org</span>
                         </div>
                         <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-indigo-600 transition-all shadow-xl">
                               <Phone className="h-6 w-6 text-indigo-400 group-hover:text-white" />
                            </div>
                            <div className="space-y-1">
                               <div className="font-black italic text-base tracking-tighter">+0124-4001495</div>
                               <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Tech Support Line</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-12">
                      <h3 className="text-xl font-black italic tracking-widest uppercase border-l-8 border-indigo-600 pl-6">Our Presence</h3>
                      <div className="space-y-10">
                         <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                               <MapPin className="h-4 w-4 text-indigo-400" />
                               <span className="uppercase text-[10px] font-black tracking-widest text-indigo-400 italic">India · Gurgaon HQ</span>
                            </div>
                            <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed">1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
                         </div>
                         <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                               <MapPin className="h-4 w-4 text-indigo-400" />
                               <span className="uppercase text-[10px] font-black tracking-widest text-indigo-400 italic">USA Operations</span>
                            </div>
                            <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed">348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India</p>
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

export default BusinessDirectoryApp;
