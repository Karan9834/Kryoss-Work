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
  PlayCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const DatingAppDevelopment = () => {
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
      title: "Swipe & Match", 
      desc: "Addictive swiping mechanism with advanced algorithms to find the perfect compatibility.", 
      icon: Zap 
    },
    { 
      title: "Real-time Messaging", 
      desc: "Fast, secure chat with multimedia support (Voice, Video, Images, GIFs).", 
      icon: MessageCircle 
    },
    { 
      title: "Video Calling", 
      desc: "Face-to-face interaction to build trust before the first meeting.", 
      icon: Video 
    },
    { 
      title: "AI Matchmaking", 
      desc: "Intelligent personality-based suggestions using machine learning models.", 
      icon: Sparkles 
    },
    { 
      title: "Geolocation Tracking", 
      desc: "Find matches in your immediate area or change locations with premium travel features.", 
      icon: MapPin 
    },
    { 
      title: "Profile Verification", 
      desc: "Photo and ID verification to ensure a community of authentic users.", 
      icon: ShieldCheck 
    }
  ];

  const premiumFeatures = [
    { title: "Unlimited Rewinds", desc: "Never miss a connection; undo accidental left swipes instantly.", icon: Coffee },
    { title: "Profile Boost", desc: "Get 10x more visibility by appearing at the top of the stack.", icon: TrendingUp },
    { title: "See Who Likes You", desc: "Instant notifications when someone swipes right on your profile.", icon: Star },
    { title: "Travel Mode", desc: "Swipe in any city around the world before you even arrive.", icon: Globe }
  ];

  const supportFeatures = [
    { title: "Fully Customizable", desc: "Flexible scripts ready to meet specific jurisdictional requirements.", icon: Settings },
    { title: "Bug Support", desc: "Complimentary bug fixes and updates for the first year of operation.", icon: LifeBuoy },
    { title: "Linux Server Setup", desc: "Optimized server configuration for low-latency dispatching.", icon: Server },
    { title: "Open Source Code", desc: "100% full source code ownership for deep future integrations.", icon: Code }
  ];

  const portfolio = [
    { title: "Hearts & Souls", subtitle: "Niche Dating Platform", desc: "A values-based matching platform which gained 1M+ users within the first 6 months of launch." },
    { title: "DateMate", subtitle: "Casual Discovery App", desc: "Highly interactive swiping app specialized in quick connections and ephemeral sharing." },
    { title: "PlatinumMatch", subtitle: "Elite Professional Dating", desc: "Exclusive community for verified professionals with AI-driven personality matching." }
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
        <title>Dating App Development | KryossWork</title>
        <meta name="description" content="Spark meaningful connections with your own premium dating app like Tinder or Bumble. Kryoss Softech offers AI matchmaking, real-time video chat, and geolocation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-fuchsia-600 via-purple-600 to-pink-500 text-white text-center">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
           >
              <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
                 <Heart className="h-4 w-4 text-pink-300 fill-pink-300" />
                 <span className="text-white text-xs font-black uppercase tracking-widest">Connect The World</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                Spark Meaningful <br />
                <span className="text-[#FFB6C1] drop-shadow-[0_4px_41px_rgba(255,182,193,0.4)] underline decoration-white/30 decoration-8 underline-offset-[20px]">Connections</span>
              </h1>
              <p className="text-xl text-pink-50 mb-12 leading-relaxed font-medium mt-12 max-w-2xl mx-auto">
                Launch a high-performance Dating App like Tinder or Bumble. Specialized in AI matchmaking and high-retention user experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-white text-purple-600 hover:bg-gray-900 hover:text-white font-black py-5 px-12 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-2xl uppercase tracking-widest group">
                    Start Matching <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Mockups Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-3xl mx-auto mb-20 text-center">
              <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-gray-900 leading-tight">Digital Bonding Suite</h2>
              <p className="text-fuchsia-600 font-bold uppercase tracking-[0.3em] text-xs">Engineered for Emotional Connectivity</p>
           </div>
           
           <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* Match App */}
             <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group relative transition-all">
               <div className="bg-fuchsia-600 p-8 text-white text-left">
                  <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                    <span>12:30 PM</span>
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <h3 className="text-2xl font-black italic tracking-tighter">💗 LoveConnect</h3>
                  <div className="mt-4 flex items-center gap-3 text-[10px] font-bold text-pink-100 uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-xl border border-white/5">
                     <Zap className="h-3 w-3" /> Finding match...
                  </div>
               </div>
               <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                  {/* Swipe Card Mockup */}
                  <div className="relative aspect-[3/4] bg-gray-100 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white group-hover:rotate-1 transition-transform">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 left-6 text-white space-y-1">
                        <div className="flex items-center gap-2">
                           <span className="text-xl font-black italic">Sofia, 24</span>
                           <ShieldCheck className="h-4 w-4 text-blue-400 fill-blue-400" />
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest italic opacity-80">Design Enthusiast · NYC</div>
                     </div>
                     <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase text-white shadow-lg border border-white/10">80% Match</div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-around items-center">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md group-hover:scale-110 transition-all cursor-pointer">
                        <ArrowRight className="h-5 w-5 text-yellow-500 -rotate-180" />
                     </div>
                     <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl hover:bg-fuchsia-200 transition-all cursor-pointer">
                        <Heart className="h-8 w-8 text-fuchsia-600 fill-fuchsia-600" />
                     </div>
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md group-hover:scale-110 transition-all cursor-pointer">
                        <Zap className="h-5 w-5 text-purple-600" />
                     </div>
                  </div>
               </div>
             </div>

             {/* Live Chat & Connect */}
             <div className="bg-gray-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] h-[650px] flex flex-col group lg:-mt-10 relative z-10 transition-all">
                <div className="bg-purple-600 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 opacity-20 blur-[50px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                     <span>12:30 PM</span>
                     <MessageCircle className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter">Conversations</h3>
                   <div className="flex -space-x-4 mt-4">
                      {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 bg-gray-800 rounded-full border-2 border-purple-600 flex items-center justify-center text-[10px] font-black">😊</div>)}
                      <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-purple-600 flex items-center justify-center text-[8px] font-black">+12</div>
                   </div>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="space-y-4">
                      {[
                        { name: "Sofia", msg: "Hey! Loved your profile", time: "2m ago", unread: true },
                        { name: "Mark", msg: "Are we still on for Friday?", time: "1h ago", unread: false }
                      ].map((c, i) => (
                        <div key={i} className={`p-4 rounded-3xl border ${c.unread ? 'bg-purple-100/10 border-purple-500/30' : 'bg-white/5 border-white/10'} flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-all`}>
                           <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-2xl">👤</div>
                           <div className="grow">
                              <div className="flex justify-between items-center">
                                 <h4 className="font-black text-white text-sm italic">{c.name}</h4>
                                 <span className="text-[8px] text-white/40 uppercase font-black">{c.time}</span>
                              </div>
                              <p className="text-[10px] text-white/60 italic line-clamp-1">{c.msg}</p>
                           </div>
                           {c.unread && <div className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899]"></div>}
                        </div>
                      ))}
                   </div>
                   
                   <div className="p-6 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                      <Video className="absolute bottom-[-10px] right-[-10px] h-20 w-20 text-white/10 rotate-12" />
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 italic">Video Match</div>
                      <div className="text-xl font-black italic tracking-tighter mb-4">Start 1-on-1<br/>Video Consultation</div>
                      <button className="bg-white text-purple-600 px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl">Join Now</button>
                   </div>
                </div>
             </div>

             {/* Admin Moderation */}
             <div className="bg-white rounded-[4rem] border border-gray-200 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] h-[650px] flex flex-col group lg:mt-12 transition-all">
                <div className="bg-gray-900 p-8 text-white text-left relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 opacity-20 blur-[60px] rounded-full"></div>
                   <div className="flex justify-between items-center mb-6 text-sm font-bold italic opacity-60">
                     <span>12:30 PM</span>
                     <Shield className="h-4 w-4" />
                   </div>
                   <h3 className="text-2xl font-black italic tracking-tighter underline underline-offset-8 decoration-fuchsia-500 decoration-4">Community Safety</h3>
                </div>
                <div className="p-6 text-left space-y-6 grow overflow-y-auto invisible-scrollbar">
                   <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                         <div className="text-lg font-black italic text-gray-900">4.2K</div>
                         <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Active USers</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100">
                         <div className="text-lg font-black italic text-gray-900">12</div>
                         <div className="text-[7px] font-bold uppercase text-gray-400 tracking-widest">Reports</div>
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400 italic">Moderation Tools</div>
                      {[
                        { label: "AI Verification", res: "9 Pending", icon: Camera },
                        { label: "Reported Content", res: "Review Now", icon: Shield },
                        { label: "Sub. Management", res: "$14K Goal", icon: Activity }
                      ].map((m, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-3xl bg-gray-50 hover:bg-pink-50/50 cursor-pointer transition-all border border-transparent hover:border-pink-100">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                                 <m.icon className="h-5 w-5 text-fuchsia-600" />
                              </div>
                              <span className="text-[10px] font-black italic text-gray-700">{m.label}</span>
                           </div>
                           <span className="text-[10px] font-black italic text-fuchsia-600">{m.res}</span>
                        </div>
                      ))}
                   </div>

                   <button className="w-full bg-gray-900 text-white rounded-2xl py-4 text-xs font-black uppercase italic tracking-widest flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-400" /> Auto-Moderation ON
                   </button>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Matching Algorithm Grid */}
      <section className="py-24 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16 text-center">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Core Technologies</h2>
              <p className="text-pink-400 font-bold uppercase tracking-[0.5em] text-[10px] mt-4 italic">Next-Gen Connectivity Algorithms</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreFeatures.map((f, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-pink-600/10 hover:border-pink-500 transition-all group">
                   <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500 rotate-12 group-hover:rotate-0 transition-all">
                      <f.icon className="h-6 w-6 text-pink-500 group-hover:text-white" />
                   </div>
                   <h3 className="text-[10px] font-black uppercase tracking-widest italic">{f.title}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Premium Perks */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 italic uppercase tracking-tighter underline underline-offset-[20px] decoration-pink-500 decoration-8">Premium Perks</h2>
            <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] mt-16 italic">Monetization features that users actually love</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {premiumFeatures.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-gray-100 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all border-b-[12px] border-fuchsia-600 group"
              >
                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-pink-50 to-fuchsia-100 shadow-inner group-hover:rotate-12 transition-transform">
                  <f.icon className="h-8 w-8 text-fuchsia-600" />
                </div>
                <h3 className="font-extrabold text-xl italic tracking-tighter uppercase mb-4 text-gray-900 group-hover:text-fuchsia-600 transition-colors uppercase">{f.title}</h3>
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
              <h2 className="text-4xl font-black mb-6 italic uppercase tracking-tighter">Enterprise Support</h2>
              <p className="text-gray-500 font-extrabold italic leading-relaxed tracking-tight max-w-2xl mx-auto">Scalable infrastructure that keeps your user community safe and engaged.</p>
           </div>
           <div className="grid md:grid-cols-4 gap-6 text-left">
              {supportFeatures.map((s, i) => (
                <div key={i} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group hover:border-pink-200">
                   <div className="w-14 h-14 bg-gray-900 group-hover:bg-pink-600 transition-all rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                      <s.icon className="h-6 w-6 text-white" />
                   </div>
                   <h3 className="font-black italic uppercase tracking-tighter text-gray-900 mb-4 group-hover:text-pink-600 transition-all">{s.title}</h3>
                   <p className="text-[11px] text-gray-500 leading-relaxed font-bold italic grow">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Success Portfolio */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="text-center mb-20 text-center">
              <h2 className="text-4xl font-black italic mb-4 uppercase underline decoration-pink-600 decoration-8 underline-offset-[16px]">Matching Success</h2>
           </div>
           <div className="grid lg:grid-cols-3 gap-8">
              {portfolio.map((work, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group text-left">
                   <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      <Heart className="h-8 w-8 text-white fill-white" />
                   </div>
                   <h3 className="text-2xl font-black italic uppercase text-pink-500 mb-2">{work.title}</h3>
                   <p className="text-pink-100/50 text-[10px] uppercase font-black tracking-widest mb-6 italic">{work.subtitle}</p>
                   <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{work.desc}</p>
                </div>
              ))}
           </div>
           
           <div className="grid md:grid-cols-4 gap-8 mt-24">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] p-10 flex flex-col relative group hover:bg-pink-50 transition-all text-left">
                   <div className="text-pink-500 text-6xl font-black absolute top-4 right-8 select-none opacity-10">“</div>
                   <p className="text-[11px] italic font-bold leading-relaxed mb-8 text-gray-700 relative z-10 grow">“{t.text}”</p>
                   <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center font-black text-white text-xl italic">{t.name.charAt(0)}</div>
                      <div>
                         <div className="font-black italic text-[11px] uppercase text-gray-900 leading-none">{t.name}</div>
                         <div className="text-[9px] text-pink-600 uppercase font-bold tracking-widest mt-1 italic">{t.role}</div>
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
          <div className="max-w-7xl mx-auto bg-white rounded-[5rem] flex flex-col lg:flex-row overflow-hidden shadow-[0_60px_120px_-20px_rgba(236,72,153,0.2)] border border-gray-50">
            {/* Form Side */}
            <div className="lg:w-3/5 p-8 md:p-20 bg-white">
                <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase text-gray-900 leading-tight">Match Your <br/><span className="text-pink-600 border-b-8 border-pink-600/20">Project Vision!</span></h2>
                <p className="text-gray-400 font-black uppercase text-[11px] tracking-[0.4em] mb-16 italic">Guarantee to get back within a business day</p>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Name*</label>
                       <input name="name" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-pink-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">E-mail*</label>
                       <input name="email" type="email" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-pink-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Phone No</label>
                       <input name="phone" type="tel" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-pink-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Subject*</label>
                       <input name="subject" type="text" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-pink-600 rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-black placeholder:italic shadow-inner" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest italic">Your Message*</label>
                     <textarea name="message" rows="5" className="w-full bg-gray-50 border-0 border-b-[4px] border-transparent focus:border-pink-600 rounded-[2.5rem] px-8 py-6 focus:outline-none transition-all font-black placeholder:italic resize-none shadow-inner" required></textarea>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                     <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl font-black italic text-sm border-r-[8px] border-pink-600">
                        ANTISPAM: 7 + 5 = ?
                     </div>
                     <input name="antispam" type="text" placeholder="Result" className="w-32 bg-pink-50 border-2 border-pink-100 rounded-2xl px-6 py-4 font-black text-center focus:outline-none focus:border-pink-600 transition-all" required />
                  </div>

                  <button className="w-full bg-pink-600 hover:bg-black text-white py-8 rounded-[3rem] font-black italic uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-5 transition-all shadow-xl shadow-pink-200">
                    <Send className="h-6 w-6" /> Submit Inquiry
                  </button>
                </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 p-8 md:p-20 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-600/20 blur-[120px] rounded-full -mr-[200px] -mt-[200px]"></div>
                <div className="relative z-10 space-y-16 text-left">
                   <div>
                      <h3 className="text-4xl font-black italic tracking-tighter mb-6 uppercase leading-tight text-pink-500">Ready to <br/>disrupt the <br/>Dating market?</h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-10">We would love to hear how we can bring your possibilities to reality through technology and give away <span className="text-pink-500 font-black not-italic px-1 bg-white/10 rounded">2hrs of free consulting</span>.</p>
                      <div className="space-y-8">
                         <div className="flex items-center gap-6 group cursor-pointer text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-pink-600 transition-all shadow-xl">
                               <Mail className="h-6 w-6 text-pink-500 group-hover:text-white" />
                            </div>
                            <span className="font-black italic text-base tracking-tighter">Info@kryosssoftech.org</span>
                         </div>
                         <div className="flex items-center gap-6 group cursor-pointer text-left">
                            <div className="w-14 h-14 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-pink-600 transition-all shadow-xl">
                               <Phone className="h-6 w-6 text-pink-500 group-hover:text-white" />
                            </div>
                            <div className="space-y-1">
                               <div className="font-black italic text-base tracking-tighter">+0124-4001495</div>
                               <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">Global Support Hub</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-12 text-left">
                      <h3 className="text-xl font-black italic tracking-widest uppercase border-l-8 border-pink-600 pl-6">Our Presence</h3>
                      <div className="space-y-10">
                         <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                               <MapPin className="h-4 w-4 text-pink-400" />
                               <span className="uppercase text-[10px] font-black tracking-widest text-pink-400 italic">India · Gurgaon HQ</span>
                            </div>
                            <p className="text-[12px] text-gray-400 font-bold italic leading-relaxed">1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
                         </div>
                         <div className="group">
                            <div className="flex items-center gap-3 mb-2">
                               <MapPin className="h-4 w-4 text-pink-400" />
                               <span className="uppercase text-[10px] font-black tracking-widest text-pink-400 italic">USA Operations</span>
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

export default DatingAppDevelopment;
