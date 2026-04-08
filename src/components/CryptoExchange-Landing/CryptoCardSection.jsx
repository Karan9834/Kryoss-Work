import { Link } from 'react-router-dom';

import React from 'react';

import card1 from '../../assets/cryptolanding-img/card1.jpg';
import card2 from '../../assets/cryptolanding-img/card2.jpg';

const CryptoCardSection = () => {
   const cards = [
      {
         title: "LocalCoins: Spot Trading Solution",
         desc: "Advanced spot setup with multi-currency support and real-time trading engine.",
         path: "/products/crypto-spot-exchange",
         image: card1
      },
      {
         title: "Tradexpro Exchange: Derivative Trading",
         desc: "Comprehensive derivative platform offering leverage trading, futures & options.",
         path: "/products/crypto-derivatives",
         image: card2
      }
   ];

   return (
      <section id="crypto-products" className="py-24 bg-white text-[#1E293B]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* "Our Products" Header (Matching Grocery/POS) */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-blue-300"></div>
                  <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-blue-300"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl font-semibold">
                  Premium <span className="text-blue-600">Exchange Solutions</span>
               </h2>
               <p className="text-[#4A4B5E] text-lg max-w-2xl mx-auto mt-6">
                  Architected for extreme scale, our solutions provide the stability and performance your users expect.
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
                           className="w-full rounded-xl border-[5px] border-transparent hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                        />
                     </Link>

                     {/* TITLE AND DESCRIPTION */}
                     <p className="mt-4 text-sm md:text-base">
                        <Link to={card.path} className="text-blue-600 font-semibold hover:underline">
                           {card.title}
                        </Link>{" "}
                        <span className="text-gray-700">- {card.desc}</span>
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default CryptoCardSection;
