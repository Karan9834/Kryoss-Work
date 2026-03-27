import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Globe, Zap, Users, ArrowRight } from 'lucide-react';
import card1 from '../../assets/videolanding-img/videolandingcard1.png';
import card2 from '../../assets/videolanding-img/videolandingcard2.png';
const VideoCardSection = () => {
   const cards = [
      {
         title: "Zoom Clone Platform",
         path: "/products/prime/zoom-clone",
         features: [
            "1000+ Participants",
            "HD Video & Audio",
            "Whiteboard Tools",
            "Waiting Rooms",
            "Virtual Backgrounds",
            "Recording & Reports"
         ],
         image: card1,
         icon: <Video className="text-purple-600" size={60} />,
         themeColor: "from-purple-600 to-indigo-600"
      },
      {
         title: "Global Webinar Engine",
         path: "/products/prime/webinar-engine",
         features: [
            "Live Q&A Sessions",
            "Polls & Surveys",
            "Custom Branding",
            "Multi-Host Support",
            "Automated Emails",
            "Analytics Dashboard"
         ],
         image: card2,
         icon: <Globe className="text-sky-600" size={60} />,
         themeColor: "from-sky-600 to-cyan-400"
      }
   ];

   return (
      <section id="video-products" className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-purple-200"></div>
                  <span className="text-sky-600 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-sky-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-relaxed">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-sky-600 to-pink-600">
                     Unified Communication Suite
                  </span>
               </h2>
               <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6 font-medium">
                  Scale your meetings and webinars with global infrastructure built for clarity.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[4rem] border border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-purple-50/10 shadow-2xl hover:border-purple-200"
                  >
                     {/* Image Section */}
                     <div className="w-full bg-white rounded-[3rem] overflow-hidden relative mb-8 border border-slate-100 shadow-inner group">
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Interactive Background */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${card.themeColor} opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-12 pb-12 space-y-12 text-left">
                        <div className="space-y-4 text-center">
                           <h3 className="text-2xl font-bold text-[#1A1C3C] group-hover:text-purple-600 transition-colors tracking-tight">{card.title}</h3>
                           <div className={`h-1.5 w-16 bg-gradient-to-r ${card.themeColor} mx-auto rounded-full group-hover:w-32 transition-all`}></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-3 h-3 bg-sky-500 rounded-full group-hover:scale-125 transition-all shadow-lg shadow-sky-500/20"></div>
                                 <span className="text-sm font-bold text-slate-600 group-hover:text-[#1A1C3C] transition-colors">{feature}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
};

export default VideoCardSection;
