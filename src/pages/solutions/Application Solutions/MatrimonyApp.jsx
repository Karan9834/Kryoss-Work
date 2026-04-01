import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
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
  MessageCircle,
  Video,
  Zap,
  Filter,
  Activity,
  Globe,
  Settings,
  Shield,
  Camera,
  Coffee,
  Sparkles,
  Lock,
  Server,
  Code,
  LifeBuoy,
  Phone,
  Mail,
  Plane,
  Truck,
  Building2,
  GraduationCap,
  PlayCircle,
  UserCheck,
  UserPlus
} from 'lucide-react';
import { motion } from 'framer-motion';

const MatrimonyApp = () => {
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
      title: "Advanced Search", 
      desc: "Intelligent filters based on community, profession, education, and lifestyle choices.", 
      icon: Search 
    },
    { 
      title: "Verified Profiles", 
      desc: "Trust-badge verification using government ID and social profile validation.", 
      icon: UserCheck 
    },
    { 
      title: "Privacy Controls", 
      desc: "Robust features to control who sees your photos, contact details, and bio.", 
      icon: Shield 
    },
    { 
      title: "Horoscope Matching", 
      desc: "Automated Kundli/Horoscope generation and compatibility analysis based on Vedic astrology.", 
      icon: Sparkles 
    },
    { 
      title: "Express Interest", 
      desc: "Seamless 'Send Interest' and 'Shortlist' features to start the journey with a tap.", 
      icon: Heart 
    },
    { 
      title: "Multimedia Chat", 
      desc: "Secure end-to-end encrypted messaging, voice notes, and video calling.", 
      icon: MessageCircle 
    }
  ];

  const adminFeatures = [
    { title: "Manual Moderation", desc: "Dedicated desk for manual review of every profile photo and description.", icon: Lock },
    { title: "Revenue Dashboard", desc: "Track earnings from membership plans and sponsored profile boosts.", icon: TrendingUp },
    { title: "Success Stories", desc: "Manage and publish community trust-building marriage stories.", icon: Star },
    { title: "Dispute Handling", desc: "Tools to report and ban suspicious users and fake profiles.", icon: ShieldCheck }
  ];

  const supportFeatures = [
    { title: "Fully Customizable", desc: "Flexible scripts ready to meet specific cultural or regional needs.", icon: Settings },
    { title: "Bug Support", desc: "Complimentary bug fixes and updates for the first year of operation.", icon: LifeBuoy },
    { title: "Linux Server Setup", desc: "Optimized server configuration for low-latency dispatching.", icon: Server },
    { title: "Open Source Code", desc: "100% full source code ownership for deep future integrations.", icon: Code }
  ];

  const portfolio = [
    { title: "SoulMatch", subtitle: "Global Community Platform", desc: "A high-conversion matrimony portal which specialized in NRI and global matchmaking." },
    { title: "VedicMatrimony", subtitle: "Astrology Focused", desc: "Niche portal with deep integration of Vedic astrology and community-specific filters." },
    { title: "SafeRishtey", subtitle: "Verification First", desc: "Matrimonial app where every user is verified via physical document checks." }
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
        <title>Matrimony App Development | KryossWork</title>
        <meta name="description" content="Launch your premium matrimony platform with advanced search, horoscope matching, and profile verification. Kryoss Softech offers high-end matrimonial solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#800000] via-[#A52A2A] to-[#D2691E] text-white text-center">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
           >
              <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
                 <Heart className="h-4 w-4 text-[#FFD700] fill-[#FFD700]" />
                 <span className="text-white text-xs font-black uppercase tracking-widest">Uniting Generations</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                Find Your Perfect <br />
                <span className="text-[#FFD700] drop-shadow-[0_4px_41px_rgba(255,215,0,0.3)] underline decoration-white/30 decoration-8 underline-offset-[20px]">Soulmate</span>
              </h1>
              <p className="text-xl text-yellow-50 mb-12 leading-relaxed font-medium mt-12 max-w-2xl mx-auto">
                Launch a premium Matrimony platform with advanced compatibility algorithms and cultural depth. Building trust across families.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-[#FFD700] text-[#800000] hover:bg-white font-black py-5 px-12 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl uppercase tracking-widest group">
                    Start Your Portal <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Mockups Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-3xl mx-auto mb-20 text-center">
              <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">Digital Matchmaking Hub</h2>
              <p className="text-red-800 font-bold uppercase tracking-[0.3em] text-xs">Modern Technology for Traditional Values</p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* User Experience */}
             <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(128,0,0,0.1)] h-[650px] flex flex-col group relative transition-all">
               <div className="bg-[#800000] p-8 text-white text-left">
                  <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                    <span>12:30 PM</span>
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <h3 className="text-2xl font-black italic tracking-tighter">💞 SoulScript</h3>
                  <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-yellow-200 uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-xl border border-white/5">
                     <Search className="h-3 w-3" /> Filters: Software Engineer · Bangalore
                  </div>
               </div>
               <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                  <div className="space-y-4">
                     <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Matching for you</div>
                     {[
                       { name: "Ananya B.", age: "26", city: "Bangalore", prof: "Product Manager", rate: "95% Match", icon: "👩‍💼" },
                       { name: "Priya S.", age: "28", city: "Mumbai", prof: "Physician", rate: "92% Match", icon: "👩‍⚕️" }
                     ].map((p, i) => (
                       <div key={i} className="p-5 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-red-50 hover:border-red-100 transition-all cursor-pointer group/item">
                          <div className="flex items-center gap-4">
                             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-sm group-hover/item:scale-110 transition-transform">{p.icon}</div>
                             <div className="grow">
                                <div className="flex justify-between items-start">
                                   <h4 className="font-black italic text-sm">{p.name} · {p.age}</h4>
                                   <span className="text-[10px] font-black text-red-600 bg-red-100 px-2 py-0.5 rounded-full">{p.rate}</span>
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">{p.prof} · {p.city}</div>
                                <div className="flex gap-2 mt-3">
                                   <button className="bg-red-600 text-white p-2 rounded-xl text-[8px] font-black uppercase tracking-widest shadow-lg shadow-red-200">Express Interest</button>
                                   <button className="bg-white text-gray-400 p-2 rounded-xl text-[8px] font-black uppercase tracking-widest border border-gray-100 italic">Chat</button>
                                </div>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className="p-6 bg-[#800000] rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
                     <Sparkles className="absolute bottom-[-10px] right-[-10px] h-20 w-20 text-yellow-500 opacity-20 rotate-12" />
                     <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 italic">Vedic Match</div>
                     <div className="text-lg font-black italic tracking-tighter">Check Compatibility <br/>Score With Kudli</div>
                  </div>
               </div>
             </div>

             {/* Admin Dashboard */}
             <div className="bg-gray-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] h-[650px] flex flex-col group lg:-mt-10 relative z-10 transition-all">
                <div className="bg-red-800 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 blur-[50px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                     <span>12:30 PM</span>
                     <ShieldCheck className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter">Moderation HQ</h3>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-[2.5rem]">
                         <div className="text-2xl font-black italic text-red-500">24</div>
                         <div className="text-[8px] font-bold uppercase text-white/40 tracking-widest">Pending Verification</div>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-[2.5rem]">
                         <div className="text-2xl font-black italic text-red-500">12k+</div>
                         <div className="text-[8px] font-bold uppercase text-white/40 tracking-widest">Total Matches</div>
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">Review Queue</div>
                      {[
                        { label: "Profile Photo Verification", val: "18 Pending", icon: Camera },
                        { label: "ID/Social Auth Queue", val: "6 Pending", icon: UserCheck },
                        { label: "Membership Settlements", val: "Completed", icon: CreditCard }
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-red-900/20 transition-all cursor-pointer">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center border border-white/10">
                                 <m.icon className="h-5 w-5 text-red-500" />
                              </div>
                              <span className="text-[10px] font-black italic text-white/70">{m.label}</span>
                           </div>
                           <span className="text-[10px] font-black italic text-red-500">{m.val}</span>
                        </div>
                      ))}
                   </div>

                   <div className="p-5 bg-gradient-to-br from-red-700 to-red-900 rounded-[3rem] text-white shadow-xl shadow-red-900/50">
                      <div className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-1">Monthly Subscription Revenue</div>
                      <div className="text-3xl font-black italic tracking-widest">$28,450.00</div>
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
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Matrimonial Stack</h2>
              <p className="text-red-500 font-bold uppercase tracking-[0.5em] text-[10px] mt-4 italic">High-Performance Algorithms for High-Trust Matches</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreFeatures.map((f, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-red-600/10 hover:border-red-500 transition-all group">
                   <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 rotate-12 group-hover:rotate-0 transition-all">
                      <f.icon className="h-6 w-6 text-red-500 group-hover:text-white" />
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
            <h2 className="text-5xl font-black mb-4 italic uppercase tracking-tighter underline underline-offset-[20px] decoration-red-800 decoration-8">Portal Control</h2>
            <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] mt-16 italic">Complete Management for Matrimony Entrepreneurs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {adminFeatures.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all border-b-[12px] border-red-800 group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-gray-50 to-red-50 shadow-inner group-hover:rotate-12 transition-transform">
                  <f.icon className="h-8 w-8 text-red-800" />
                </div>
                <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-4 text-gray-900 group-hover:text-red-800 transition-colors uppercase">{f.title}</h3>
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
              <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">Trusted Support</h2>
              <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight max-w-2xl mx-auto">We provide the technical foundation so you can focus on building your matrimonial community.</p>
           </div>
           <div className="grid md:grid-cols-4 gap-6 text-left">
              {supportFeatures.map((s, i) => (
                <div key={i} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-red-200">
                   <div className="w-14 h-14 bg-gray-900 group-hover:bg-red-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                      <s.icon className="h-6 w-6 text-white" />
                   </div>
                   <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 group-hover:text-red-600 transition-all underline decoration-red-100 decoration-4 underline-offset-4">{s.title}</h3>
                   <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Success Portfolio */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="text-center mb-20 text-center">
              <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-red-500 decoration-8 underline-offset-[16px]">Portal Portfolio</h2>
           </div>
           <div className="grid lg:grid-cols-3 gap-8">
              {portfolio.map((work, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group text-left">
                   <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors shadow-2xl">
                      <UserPlus className="h-8 w-8 text-red-400 group-hover:text-white" />
                   </div>
                   <h3 className="text-2xl font-black italic uppercase text-red-500 mb-2">{work.title}</h3>
                   <p className="text-red-100/50 text-[10px] uppercase font-black tracking-widest mb-6 italic">{work.subtitle}</p>
                   <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{work.desc}</p>
                </div>
              ))}
           </div>
           
           <div className="grid md:grid-cols-4 gap-8 mt-24">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] p-10 flex flex-col relative group hover:bg-red-50 transition-all text-left">
                   <div className="text-red-500 text-6xl font-black absolute top-4 right-8 select-none opacity-10">“</div>
                   <p className="text-[11px] italic font-bold leading-relaxed mb-8 text-gray-700 relative z-10 grow">“{t.text}”</p>
                   <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 bg-[#800000] rounded-2xl flex items-center justify-center font-black text-white text-xl italic">{t.name.charAt(0)}</div>
                      <div>
                         <div className="font-black italic text-[11px] uppercase text-gray-900 leading-none">{t.name}</div>
                         <div className="text-[9px] text-red-600 uppercase font-bold tracking-widest mt-1 italic">{t.role}</div>
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
          <div className="max-w-7xl mx-auto bg-white rounded-[5rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_60px_120px_-20px_rgba(128,0,0,0.2)] border border-gray-50">
            {/* Form Side */}
            <div className="lg:w-3/5 p-8 md:p-20 bg-white">
                <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Start Your <br/><span className="text-red-800 border-b-8 border-red-800/20">Matrimony Journey!</span></h2>
                <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic">Guarantee to get back within a business day</p>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Name*</label>
                       <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-red-800 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">E-mail*</label>
                       <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-red-800 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Phone No</label>
                       <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-red-800 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Subject*</label>
                       <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-red-800 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Your Message*</label>
                     <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-red-800 rounded-[2.5rem] px-8 py-6 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner" required></textarea>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                     <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl font-black italic text-sm border-r-[8px] border-red-800">
                        ANTISPAM: 7 + 5 = ?
                     </div>
                     <input name="antispam" type="text" placeholder="Result" className="w-32 bg-red-50 border-2 border-red-200 rounded-2xl px-6 py-4 font-black text-center focus:outline-none focus:border-red-800 transition-all text-xl italic" required />
                  </div>

                  <button className="w-full bg-red-800 hover:bg-black text-white py-8 rounded-[3rem] font-black italic uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 transition-all shadow-xl shadow-red-200">
                    <Send className="h-6 w-6" /> Submit Inquiry
                  </button>
                </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 p-8 md:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-800/20 blur-[120px] rounded-full -mr-[200px] -mt-[200px]"></div>
                <div className="relative z-10 space-y-16 text-left">
                   <div>
                      <h3 className="text-4xl font-black italic tracking-tighter mb-6 uppercase leading-tight text-red-500">Ready to <br/>scale your <br/>Matrimonial app?</h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-10">We help you build the trust and infrastructure for finding lifelong partners. Let's start with a <span className="text-red-500 font-black not-italic px-1 bg-white/10 rounded">2hr free consulting</span> session.</p>
                      <div className="space-y-8">
                         <div className="flex items-center gap-6 group cursor-pointer text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-red-600 transition-all shadow-xl">
                               <Mail className="h-6 w-6 text-red-500 group-hover:text-white" />
                            </div>
                            <span className="font-black italic text-base tracking-tighter">Info@kryosssoftech.org</span>
                         </div>
                         <div className="flex items-center gap-6 group cursor-pointer text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-red-600 transition-all shadow-xl">
                               <Phone className="h-6 w-6 text-red-500 group-hover:text-white" />
                            </div>
                            <div className="space-y-1">
                               <div className="font-black italic text-base tracking-tighter">+0124-4001495</div>
                               <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Global Support Team</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-12 text-left">
                      <h3 className="text-xl font-black italic tracking-widest uppercase border-l-8 border-red-600 pl-6">Our Presence</h3>
                      <div className="space-y-10">
                         <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                               <MapPin className="h-4 w-4 text-red-400" />
                               <span className="uppercase text-[10px] font-black tracking-widest text-red-400 italic">India HQ · Gurgaon</span>
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

export default MatrimonyApp;
