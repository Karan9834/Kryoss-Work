import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Sparkles, ShieldCheck, MessageCircle, Video } from 'lucide-react';
import cardImg1 from '../../assets/datinglanding-img/datinglandingcard1.jpg';
import cardImg2 from '../../assets/datinglanding-img/datinglandingcard2.jpg';

const DatingCardSection = () => {
   const cards = [
      {
         title: "DatingKit: Premium Dating App",
         desc: "A modern, high-engagement dating platform with AI-matching and secure social features.",
         path: "/products/social/dating-app",
         image: cardImg1,
         features: [
            "AI-Powered Matchmaking",
            "Real-time Chat & Video",
            "Advanced User Discovery",
            "Identity Verification",
            "Monetization & Ads",
            "Scalable Cloud Architecture"
         ],
         icon: Sparkles,
         themeColor: "text-rose-600",
         bgColor: "bg-rose-50",
         borderColor: "hover:border-rose-100"
      },
      {
         title: "Matrimony Portal Solution",
         desc: "Comprehensive matrimony management system for communities and matrimonial businesses.",
         path: "/products/social/matrimony-solution",
         image: cardImg2, // Fallback since no second card image was explicitly provided yet
         features: [
            "Detailed Profile Creation",
            "Family & Community Filters",
            "Horoscope & Compatibility",
            "Trust Badge Verification",
            "Multi-tiered Membership",
            "Parental Control Support"
         ],
         icon: Heart,
         themeColor: "text-purple-600",
         bgColor: "bg-purple-50",
         borderColor: "hover:border-purple-100"
      }
   ];

   return (
      <section id="dating-products" className="py-16 bg-transparent">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-rose-300"></div>
                  <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">
                     Our Premium Solutions
                  </span>
                  <div className="w-8 h-px bg-rose-300"></div>
               </div>
               <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">
                  Choose Your <span className="text-rose-600">Perfect Model</span>
               </h2>
               <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                  Pick the ideal platform to transform your matchmaking business into a modern, global digital experience.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className={`group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl ${card.borderColor}`}
                  >
                     {/* Image Section */}
                     <div className={`w-full  ${card.bgColor} rounded-[36px] overflow-hidden relative mb-6`}>
                        <img src={card.image} alt={card.title} className="w-full h-auto object-contain " />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-8 pb-10 space-y-8">
                        <div className="space-y-2">
                           <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors  tracking-tight">{card.title}</h3>
                           <div className={`h-1 w-20 ${card.bgColor.replace('bg-', 'bg-').replace('50', '500')} mx-auto rounded-full`}></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                 <div className={`w-1.5 h-1.5 ${card.themeColor.replace('text-', 'bg-')} rounded-full`}></div>
                                 <span className="text-sm font-bold text-slate-700">{feature}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Link>
               ))}
            </div>

            {/* Bottom note */}
            <div className="text-center mt-16">
               <p className="text-sm text-slate-400 font-medium">
                  ✦ More matchmaking solutions coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default DatingCardSection;
