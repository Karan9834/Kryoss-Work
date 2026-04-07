import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Snowflake, Map, Search, ArrowRight } from 'lucide-react';
import card1 from '../../assets/transportlanding-img/flower.jpg';
import card2 from '../../assets/transportlanding-img/towy.jpg';

const LogisticsCardSection = () => {
   const cards = [
      {
         title: "Tow Truck Platform",
         desc: "On-demand roadside assistance with dispatch panel and real-time tracking.",
         path: "/products/home-service/tow-truck",
         image: card1
      },
      {
         title: "Snow Removal Solution",
         desc: "Automated booking and tracking platform designed for fleet management.",
         path: "/products/home-service/snow-removal",
         image: card2
      }
   ];

   return (
      <section id="logistics-products" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-slate-200"></div>
                  <span className="text-orange-600 font-semibold text-sm tracking-widest uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-slate-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-700 to-[#0F172A]">
                     Scalable Logistics Infrastructure
                  </span>
               </h2>
               <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6 font-medium">
                  Enterprise-grade platforms built to power your delivery and supply chain operations.
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
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-orange-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION */}
                     <p className="mt-4 text-sm md:text-base">
                        <Link to={card.path} className="text-orange-600 font-semibold hover:underline">
                           {card.title}
                        </Link>{" "}
                        <span className="text-gray-700">- {card.desc}</span>
                     </p>
                  </div>
               ))}
            </div>
         </div>

         <style>{`
            .shadow-inner {
               box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.02);
            }
         `}</style>
      </section>
   );
};

export default LogisticsCardSection;
