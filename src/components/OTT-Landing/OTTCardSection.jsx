import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import card1Img from '../../assets/ottlanding-img/ottlandingcard1.png';
import card2Img from '../../assets/ottlanding-img/ottlandingcard2.png';
const OTTCardSection = ({ isLight = false }) => {
   const cards = [
      {
         title: "OTT Streaming App",
         image: card1Img, // Placeholder for image
         path: "/products/social/video-app",
         features: [
            "White-label iOS & Android",
            "Smart TV & Web Support",
            "Advanced Video Player",
            "Offline Viewing Mode",
            "Personalized Profiles",
            "Direct Monetization"
         ],
      },
      {
         title: "Video Streaming Backend",
         image: card2Img, // Placeholder for image
         path: "/products/our/streaming-solution",
         features: [
            "Powerful Media CMS",
            "Auto Transcoding Engine",
            "Analytics Dashboard",
            "DRM & Piracy Control",
            "Multi-Tenant Support",
            "Integrated Ad Server"
         ],
      }
   ];

   const textColor = isLight ? "text-[#1A1C2C]" : "text-white";
   const subTextColor = "text-gray-500";
   const sectionBg = isLight ? "bg-transparent" : "bg-[#0A0A0B]";
   const cardBg = isLight ? "bg-white" : "bg-white/5";
   const cardBorder = isLight ? "border-gray-100" : "border-white/5";
   const accentColor = "text-red-600";
   const accentBg = "bg-red-600";

   return (
      <section id="ott-products" className={`py-16 ${sectionBg}`}>
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`w-8 h-px ${isLight ? 'bg-red-200' : 'bg-red-900'}`}></div>
                  <span className={`${accentColor} font-semibold text-sm tracking-wider uppercase`}>
                     Our Products
                  </span>
                  <div className={`w-8 h-px ${isLight ? 'bg-red-200' : 'bg-red-900'}`}></div>
               </div>
               <h2 className={`text-2xl lg:text-3xl font-semibold ${textColor}`}>
                  Our Premium <span className={accentColor}>Streaming Solutions</span>
               </h2>
               <p className={`${subTextColor} text-lg max-w-2xl mx-auto`}>
                  Pick the ideal platform to transform your video business into a
                  modern, efficient digital experience.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className={`group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 ${cardBorder} transition-all duration-500 hover:scale-[1.02] ${cardBg} shadow-xl hover:border-red-500/20`}
                  >
                     {/* Image Section */}
                     <div className={`w-full h-80 ${isLight ? 'bg-gray-50' : 'bg-white/5'} rounded-[36px] overflow-hidden relative mb-6 flex items-center justify-center`}>
                        {card.image ? (
                           <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                           />
                        ) : (
                           <div className={`${isLight ? 'text-gray-200' : 'text-white/5'} group-hover:scale-110 transition-transform duration-700`}>
                              <Star size={150} fill="currentColor" />
                           </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-8 pb-10 space-y-8">
                        <div className="space-y-2">
                           <h3 className={`text-xl font-semibold ${textColor} group-hover:${accentColor} transition-colors`}>{card.title}</h3>
                           <div className={`h-1 w-20 ${accentBg} mx-auto rounded-full`}></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                 <div className={`w-1.5 h-1.5 ${accentBg} rounded-full`}></div>
                                 <span className={`text-sm font-bold ${isLight ? 'text-gray-700' : 'text-gray-400'}`}>{feature}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Link>
               ))}
            </div>

            {/* Bottom note */}
            <div className="text-center mt-16">
               <p className="text-sm text-gray-400 font-medium">
                  ✦ More streaming products coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default OTTCardSection;
