import { Link } from 'react-router-dom';
import React from 'react';
import cardImg1 from '../../assets/datinglanding-img/datinglandingcard1.jpg';
import cardImg2 from '../../assets/datinglanding-img/datinglandingcard2.jpg';

const DatingCardSection = () => {
   const cards = [
      {
         title: "DatingKit: Premium Dating App",
         desc: "A modern, high-engagement dating platform with AI-matching and secure social features.",
         path: "/products/social/dating-app",
         image: cardImg1
      },
      {
         title: "Matrimony Portal Solution",
         desc: "Comprehensive matrimony management system for communities and matrimonial businesses.",
         path: "/products/social/matrimony-solution",
         image: cardImg2
      }
   ];

   return (
      <section id="dating-products" className="py-16 bg-transparent">
         <div className="max-w-7xl mx-auto px-6">
            {/* Header - Updated Typography */}
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-rose-300"></div>
                  {/* Badge - Updated: text-[14px] font-bold tracking-wider uppercase */}
                  <span className="text-orange-600 text-[14px] font-bold tracking-wider uppercase">
                     Our Premium Solutions
                  </span>
                  <div className="w-8 h-px bg-rose-300"></div>
               </div>
               
               {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-slate-900">
                  Choose Your <span className="text-rose-600">Perfect Model</span>
               </h2>
               
               {/* Description - 16px, weight 400, line-height 1.6 */}
               <p className="text-[16px] font-normal leading-[1.6] text-slate-500 max-w-2xl mx-auto">
                  Pick the ideal platform to transform your matchmaking business into a modern, global digital experience.
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
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-rose-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION - Updated Typography */}
                     <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        <Link to={card.path} className="text-rose-600 font-semibold hover:underline">
                           {card.title}
                        </Link>{" "}
                        <span className="text-gray-700">
                           - {card.desc}
                        </span>
                     </p>

                  </div>
               ))}
            </div>

            {/* Bottom note - Updated Typography */}
            <div className="text-center mt-16">
               <p className="text-[14px] font-normal leading-[1.6] text-slate-400">
                  ✦ More matchmaking solutions coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default DatingCardSection;