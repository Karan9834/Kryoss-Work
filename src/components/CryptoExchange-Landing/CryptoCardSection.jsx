import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../../assets/cryptolanding-img/cryptolandingcard1.png';
import card2 from '../../assets/cryptolanding-img/cryptolandingcard2.png';

const CryptoCardSection = () => {
   const cards = [
      {
         title: "Spot Trading Solution",
         path: "/products/crypto-spot-exchange",
         features: [
            "Advanced Order Management",
            "Real-time Trading Engine",
            "Multi-Currency Support",
            "Intuitive UI/UX",
            "API Integration",
            "Secure Wallet Management"
         ],
         image: card1
      },
      {
         title: "Derivative Trading",
         path: "/products/crypto-derivatives",
         features: [
            "Leverage Trading",
            "Futures & Options",
            "Risk Management Tools",
            "Liquidity Solutions",
            "Analytical Dashboards",
            "Regulatory Compliance"
         ],
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

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[3rem] border border-blue-50 transition-all duration-500 hover:scale-[1.02] bg-blue-50/30 shadow-2xl hover:border-blue-500/50"
                  >
                     {/* Image Section */}
                     <div className="w-full  bg-blue-100/50 rounded-[2.5rem] overflow-hidden relative mb-6">
                        <img src={card.image} alt={card.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-8 pb-10 space-y-8 text-left">
                        <div className="space-y-4 text-center">
                           <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{card.title}</h3>
                           <div className="h-0.5 w-16 bg-blue-600 mx-auto rounded-full group-hover:w-32 transition-all"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                 <span className="text-sm font-semibold text-gray-600">{feature}</span>
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

export default CryptoCardSection;
