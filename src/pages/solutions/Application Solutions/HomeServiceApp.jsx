import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
   Home,
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
   Hammer,
   Droplets,
   Zap,
   Scissors,
   Wrench,
   Shield,
   Briefcase,
   Layers,
   Map,
   Settings,
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
   PlayCircle,
   Activity,
   History,
   AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';

const HomeServiceApp = () => {
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

   const coreServices = [
      { title: "Plumbing", desc: "Expert technicians for leaks, piping, and fixture installations.", icon: Droplets },
      { title: "Electrical", desc: "Safe and certified professionals for wiring and appliance repair.", icon: Zap },
      { title: "Cleaning", desc: "Deep cleaning services for homes, offices, and upholstery.", icon: Home },
      { title: "Handyman", desc: "General maintenance, furniture assembly, and carpentry.", icon: Hammer },
      { title: "Pest Control", desc: "Comprehensive solutions for a safer, pest-free environment.", icon: Shield },
      { title: "Salon at Home", desc: "Professional grooming and beauty treatments in your comfort.", icon: Scissors }
   ];

   const appFeatures = [
      {
         title: "Instant Booking",
         desc: "Users can book a service immediately or schedule for a specific time and date.",
         icon: Clock
      },
      {
         title: "Real-time Tracking",
         desc: "Track the professional's arrival on a map with real-time GPS coordinates.",
         icon: Map
      },
      {
         title: "Background Verified Pros",
         desc: "Every professional undergoes a rigid KYC and criminal record check for safety.",
         icon: ShieldCheck
      },
      {
         title: "Digital Invoicing",
         desc: "Get transparent bills with detailed service breakdown and tax calculation.",
         icon: CreditCard
      },
      {
         title: "Service Proof",
         desc: "Capturing before and after photos to ensure high-quality delivery every time.",
         icon: History
      },
      {
         title: "Secure Escrow",
         desc: "Payments are held securely and released only after customer satisfaction.",
         icon: Lock
      }
   ];

   const supportFeatures = [
      { title: "Fully Customizable", desc: "Flexible scripts ready to meet specific jurisdictional requirements.", icon: Settings },
      { title: "Bug Support", desc: "Complimentary bug fixes and updates for the first year of operation.", icon: LifeBuoy },
      { title: "Linux Server Setup", desc: "Optimized server configuration for low-latency dispatching.", icon: Server },
      { title: "Open Source Code", desc: "100% full source code ownership for deep future integrations.", icon: Code }
   ];

   const portfolio = [
      { title: "UrbanPro Clone", subtitle: "Total Home Maintenance", desc: "A comprehensive on-demand platform with 200+ service categories and 50K+ verified experts." },
      { title: "HandyHub", subtitle: "Targeted Micro-Services", desc: "Specialized app for minor home repairs and maintenance tasks with instant dispatching." },
      { title: "FreshLiving", subtitle: "Premium Cleaning App", desc: "High-end cleaning and sanitization booking platform with subscription-based models." }
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
            <title>On-Demand Home Service App Development | KryossWork</title>
            <meta name="description" content="Launch your own on-demand home services platform like Urban Company. Kryoss Softech offers booking scheduling, real-time tracking, and verified professional systems." />
         </Helmet>

         {/* Hero Section */}
         <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-700 via-teal-600 to-emerald-500 text-white text-center">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl mx-auto"
               >
                  <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
                     <Wrench className="h-4 w-4 text-teal-200" />
                     <span className="text-white text-xs font-black uppercase tracking-widest">On-Demand Service Engine</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                     Transform Home <br />
                     <span className="text-[#A7F3D0] drop-shadow-[0_4px_41px_rgba(167,243,208,0.4)] underline decoration-white/30 decoration-8 underline-offset-[20px]">Maintenance</span>
                  </h1>
                  <p className="text-xl text-teal-50 mb-12 leading-relaxed font-medium mt-12 max-w-2xl mx-auto">
                     Launch a high-performance Home Service App like Urban Company. Connect homeowners with background-verified professionals instantly.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                     <button className="bg-white text-teal-700 hover:bg-gray-900 hover:text-white font-black py-5 px-12 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl uppercase tracking-widest group">
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
                  <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">Unified Service Experience</h2>
                  <p className="text-teal-600 font-bold uppercase tracking-[0.3em] text-xs">Precise Management for Homes and Professionals</p>
               </div>

               <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {/* Customer App */}
                  <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group relative transition-all">
                     <div className="bg-teal-600 p-8 text-white text-left">
                        <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                           <span>12:30 PM</span>
                           <Smartphone className="h-4 w-4" />
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter">🛠️ HomeEase</h3>
                        <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-teal-100 uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-xl border border-white/5">
                           <MapPin className="h-3 w-3" /> Booking at: Sector 48, Gurgaon
                        </div>
                     </div>
                     <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                        <div className="grid grid-cols-3 gap-2">
                           {coreServices.slice(0, 3).map(s => (
                              <div key={s.title} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:bg-teal-50 transition-colors cursor-pointer group">
                                 <s.icon className="h-6 w-6 text-teal-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                 <div className="text-[8px] font-black uppercase tracking-tighter">{s.title}</div>
                              </div>
                           ))}
                        </div>

                        <div className="space-y-4">
                           <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Popular Near You</div>
                           {[
                              { name: "Deep Home Cleaning", price: "$49", time: "Starts tomorrow", icon: "✨" },
                              { name: "AC Servicing (Combo)", price: "$29", time: "Today, 4:00 PM", icon: "❄️" }
                           ].map((b, i) => (
                              <div key={i} className="flex items-center justify-between p-4 rounded-3xl bg-gray-50/50 border border-gray-100 hover:shadow-md transition-all">
                                 <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm">{b.icon}</div>
                                    <div>
                                       <div className="font-black italic text-[11px]">{b.name}</div>
                                       <div className="text-[9px] font-bold text-gray-400">{b.time}</div>
                                    </div>
                                 </div>
                                 <div className="text-[10px] font-black italic text-teal-600">{b.price}</div>
                              </div>
                           ))}
                        </div>

                        <div className="p-5 bg-gray-900 rounded-[2.5rem] text-white relative shadow-2xl overflow-hidden mt-auto">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 opacity-20 blur-[50px] rounded-full"></div>
                           <div className="flex justify-between items-center relative z-10">
                              <div className="space-y-0.5">
                                 <div className="text-[9px] font-black uppercase tracking-widest text-teal-400 italic">Latest Order</div>
                                 <div className="text-xs font-black italic">Plumbing · In Progress</div>
                              </div>
                              <div className="w-8 h-8 rounded-full border-2 border-teal-500 border-t-transparent animate-spin"></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Provider Dashboard */}
                  <div className="bg-gray-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] h-[650px] flex flex-col group lg:-mt-10 relative z-10 transition-all">
                     <div className="bg-teal-500 p-8 text-black text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-40 blur-[50px] rounded-full"></div>
                        <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                           <span>12:30 PM</span>
                           <Hammer className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border-4 border-white shadow-xl text-2xl">👷‍♂️</div>
                           <div>
                              <h3 className="text-xl font-black italic tracking-tighter">Rajesh Verfied</h3>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                 <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                                 <span className="text-[10px] font-black uppercase italic">Available</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                        <div className="grid grid-cols-2 gap-3">
                           <div className="p-4 bg-white/5 border border-white/10 rounded-[2rem] text-white">
                              <div className="text-[8px] font-black uppercase tracking-widest text-teal-400 mb-1">Today's Jobs</div>
                              <div className="text-2xl font-black italic">06</div>
                           </div>
                           <div className="p-4 bg-white/5 border border-white/10 rounded-[2rem] text-white">
                              <div className="text-[8px] font-black uppercase tracking-widest text-teal-400 mb-1">Total Earned</div>
                              <div className="text-2xl font-black italic">$342.00</div>
                           </div>
                        </div>

                        <div className="p-5 bg-white rounded-[2.5rem] text-black space-y-4">
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Job Request</span>
                              <span className="text-[9px] font-black text-teal-600">0.5 miles away</span>
                           </div>
                           <h4 className="text-sm font-black italic">Full Home Deep Cleaning</h4>
                           <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold italic">
                              <MapPin className="h-3 w-3" /> Building 4, Megapolis, DLF
                           </div>
                           <div className="flex gap-2 pt-2">
                              <button className="flex-1 bg-gray-100 py-3 rounded-2xl text-[9px] font-black uppercase italic">Skip</button>
                              <button className="flex-[2] bg-teal-600 text-white py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest italic shadow-lg shadow-teal-100">Accept Job</button>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Admin Center */}
                  <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group lg:mt-12 transition-all">
                     <div className="bg-gray-900 p-8 text-white text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 opacity-20 blur-[60px] rounded-full"></div>
                        <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                           <span>12:30 PM</span>
                           <ShieldCheck className="h-4 w-4" />
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter underline underline-offset-8 decoration-teal-500 decoration-4">Service Control</h3>
                     </div>
                     <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                        <div className="space-y-4">
                           <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Global Stats</div>
                           <div className="grid grid-cols-2 gap-3">
                              <div className="p-4 bg-gray-50 rounded-3xl border border-gray-100">
                                 <div className="text-2xl font-black italic text-gray-900 tracking-tighter">850+</div>
                                 <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Active Pros</div>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-3xl border border-gray-100">
                                 <div className="text-2xl font-black italic text-gray-900 tracking-tighter">12K+</div>
                                 <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Subscribers</div>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-3">
                           <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Moderation</div>
                           {[
                              { label: "Pro Background Verification", val: "14 Pending", icon: ShieldCheck },
                              { label: "Dispatch Conflict Resolve", val: "2 Alerts", icon: AlertTriangle },
                              { label: "Dynamic Area Pricing", val: "Configure", icon: Settings }
                           ].map((m, i) => (
                              <div key={i} className="flex justify-between items-center p-4 rounded-3xl bg-gray-50 hover:bg-teal-50 cursor-pointer transition-all">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                                       <m.icon className="h-5 w-5 text-teal-600" />
                                    </div>
                                    <span className="text-[10px] font-black italic text-gray-700">{m.label}</span>
                                 </div>
                                 <span className="text-[10px] font-black italic text-teal-600">{m.val}</span>
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
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter">Infrastructure Power</h2>
                  <p className="text-teal-400 font-bold uppercase tracking-[0.5em] text-[10px] mt-4 italic">Engineered for Reliability and Pro Satisfaction</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {appFeatures.map((f, i) => (
                     <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-teal-600/10 hover:border-teal-500 transition-all group">
                        <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 rotate-12 group-hover:rotate-0 transition-all">
                           <f.icon className="h-6 w-6 text-teal-500 group-hover:text-white" />
                        </div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest italic">{f.title}</h3>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Support Section */}
         <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
               <div className="mb-20">
                  <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">Scale Your Vision</h2>
                  <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight max-w-2xl mx-auto">We provide the technical foundation so you can focus on building your professional community.</p>
               </div>
               <div className="grid md:grid-cols-4 gap-6 text-left">
                  {supportFeatures.map((s, i) => (
                     <div key={i} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-teal-200">
                        <div className="w-14 h-14 bg-gray-900 group-hover:bg-teal-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                           <s.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 group-hover:text-teal-600 transition-all">{s.title}</h3>
                        <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Portfolio & Testimonials */}
         <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10 text-center">
               <div className="text-center mb-20 text-center">
                  <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-teal-600 decoration-8 underline-offset-[16px]">Service Ecosystems</h2>
               </div>
               <div className="grid lg:grid-cols-3 gap-8">
                  {portfolio.map((work, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group text-left">
                        <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                           <Home className="h-8 w-8 text-teal-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-black italic uppercase text-teal-500 mb-2">{work.title}</h3>
                        <p className="text-teal-100/50 text-[10px] uppercase font-black tracking-widest mb-6 italic">{work.subtitle}</p>
                        <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{work.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="grid md:grid-cols-4 gap-8 mt-24">
                  {testimonials.map((t, i) => (
                     <div key={i} className="bg-white rounded-[2.5rem] p-10 flex flex-col relative group hover:bg-teal-50 transition-all text-left">
                        <div className="text-teal-500 text-6xl font-black absolute top-4 right-8 select-none opacity-10">“</div>
                        <p className="text-[11px] italic font-bold leading-relaxed mb-8 text-gray-700 relative z-10 grow">“{t.text}”</p>
                        <div className="flex items-center gap-4 mt-auto">
                           <div className="w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center font-black text-white text-xl italic">{t.name.charAt(0)}</div>
                           <div>
                              <div className="font-black italic text-[11px] uppercase text-gray-900 leading-none">{t.name}</div>
                              <div className="text-[9px] text-teal-600 uppercase font-bold tracking-widest mt-1 italic">{t.role}</div>
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
               <div className="max-w-7xl mx-auto bg-white rounded-[5rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,128,128,0.2)] border border-gray-50">
                  {/* Form Side */}
                  <div className="lg:w-3/5 p-8 md:p-20 bg-white">
                     <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Start Your <br /><span className="text-teal-600 border-b-8 border-teal-600/20">Service Market!</span></h2>
                     <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic">Guarantee to get back within a business day</p>

                     <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Name*</label>
                              <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-teal-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">E-mail*</label>
                              <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-teal-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                           </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Phone No</label>
                              <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-teal-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Subject*</label>
                              <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-teal-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Your Message*</label>
                           <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-teal-600 rounded-[2.5rem] px-8 py-6 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner" required></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                           <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl font-black italic text-sm border-r-[8px] border-teal-600">
                              ANTISPAM: 7 + 5 = ?
                           </div>
                           <input name="antispam" type="text" placeholder="Result" className="w-32 bg-teal-50 border-2 border-teal-100 rounded-2xl px-6 py-4 font-black text-center focus:outline-none focus:border-teal-600 transition-all text-xl italic" required />
                        </div>

                        <button className="w-full bg-teal-600 hover:bg-black text-white py-8 rounded-[3rem] font-black italic uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 transition-all shadow-xl shadow-teal-200">
                           <Send className="h-6 w-6" /> Submit Inquiry
                        </button>
                     </form>
                  </div>

                  {/* Info Side */}
                  <div className="lg:w-2/5 p-8 md:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-600/20 blur-[120px] rounded-full -mr-[200px] -mt-[200px]"></div>
                     <div className="relative z-10 space-y-16 text-left">
                        <div>
                           <h3 className="text-4xl font-black italic tracking-tighter mb-6 uppercase leading-tight text-teal-400">Ready to <br />disrupt the <br />Service market?</h3>
                           <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-10">We help you build the trust and infrastructure for the future of on-demand home tasks. Let's start with a <span className="text-teal-400 font-black not-italic px-1 bg-white/10 rounded">2hr free consulting</span> session.</p>
                           <div className="space-y-8">
                              <div className="flex items-center gap-6 group cursor-pointer text-left">
                                 <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-teal-600 transition-all shadow-xl">
                                    <Mail className="h-6 w-6 text-teal-400 group-hover:text-white" />
                                 </div>
                                 <span className="font-black italic text-base tracking-tighter">Info@kryosssoftech.org</span>
                              </div>
                              <div className="flex items-center gap-6 group cursor-pointer text-left">
                                 <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-teal-600 transition-all shadow-xl">
                                    <Phone className="h-6 w-6 text-teal-400 group-hover:text-white" />
                                 </div>
                                 <div className="space-y-1">
                                    <div className="font-black italic text-base tracking-tighter">+0124-4001495</div>
                                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Global Operations Hub</div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-12 text-left">
                           <h3 className="text-xl font-black italic tracking-widest uppercase border-l-8 border-teal-600 pl-6">Our Presence</h3>
                           <div className="space-y-10">
                              <div className="group">
                                 <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="h-4 w-4 text-teal-400" />
                                    <span className="uppercase text-[10px] font-black tracking-widest text-teal-400 italic">India HQ · Gurgaon</span>
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

export default HomeServiceApp;
