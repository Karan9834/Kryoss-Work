import { Link } from 'react-router-dom';
import React from 'react';
import { Video, Globe, Zap, Users, ArrowRight } from 'lucide-react';
import card1 from '../../assets/videolanding-img/image1.jpg';
import card2 from '../../assets/videolanding-img/image.jpg';

const VideoCardSection = () => {
   const cards = [
      {
         title: "JupiterMeet: Zoom Clone Platform",
         desc: "Scalable video conferencing with 1000+ support, HD audio, and tools.",
         path: "/products/prime/zoom-clone",
         image: card1
      },
      {
         title: "BWD: Global Webinar Engine",
         desc: "Advanced webinar engine with live Q&A, polls, and custom branding.",
         path: "/products/prime/webinar-engine",
         image: card2
      }
   ];

   return (
      <section id="video-products" className="py-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-purple-200"></div>
                  <span className="text-sky-600 text-[12px] font-medium tracking-[0.05em] uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-sky-200"></div>
               </div>

               {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-sky-600 to-pink-600">
                     Unified Communication Suite
                  </span>
               </h2>
               
               {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
               <p className="text-slate-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto mt-6">
                  Scale your meetings and webinars with global infrastructure built for clarity.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
               {cards.map((card, index) => (
                  <div key={index} className="text-center">
                     {/* CLICKABLE IMAGE */}
                     <Link
                        to={card.path}
                        className="cursor-pointer group block"
                     >
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-purple-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                     <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        <Link to={card.path} className="text-purple-600 font-semibold hover:underline">
                           {card.title}
                        </Link>{" "}
                        <span className="text-gray-700">{card.desc}</span>
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default VideoCardSection;