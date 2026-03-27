import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../../assets/poslanding-img/poslandingcard1.png';
import card2 from '../../assets/poslanding-img/poslandingcard2.png';

const POSCardSection = () => {
   const cards = [
      {
         title: "Restaurant POS",
         path: "/products/restaurant-pos",
         features: [
            "Table Management",
            "KDS Integration",
            "Menu Engineering",
            "Inventory Tracking",
            "Recipe Management",
            "Online Ordering Sync"
         ],
         image: card1
      },
      {
         title: "Retail POS Software",
         path: "/products/retail-pos",
         features: [
            "Barcode Scanning",
            "Stock Level Alerts",
            "Customer Loyalty",
            "Multi-Store Sync",
            "Vendor Management",
            "Detailed Analytics"
         ],
         image: card2
      }
   ];

   return (
      <section id="pos-products" className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               {/* "Our Products" Header (Matching Grocery) */}
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-indigo-200"></div>
                  <span className="text-amber-600 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-emerald-200"></div>
               </div>

               <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-emerald-600 to-amber-500">
                     Specialized POS Modules
                  </span>
               </h2>
               <p className="text-[#4A4B5E] text-lg max-w-2xl mx-auto mt-6">
                  Choose the specialized platform that fits your business model perfectly.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[3.5rem] border border-gray-50 transition-all duration-500 hover:scale-[1.02] bg-indigo-50/20 shadow-xl hover:border-indigo-100"
                  >
                     {/* Image Section */}
                     <div className="w-full  bg-white rounded-[3rem] overflow-hidden relative mb-8 flex items-center justify-center border border-indigo-50/50">
                        <img src={card.image} alt={card.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-12 pb-12 space-y-10 text-left">
                        <div className="space-y-4 text-center">
                           <h3 className="text-2xl font-bold text-[#1A1C2C] group-hover:text-indigo-600 transition-colors tracking-tight">{card.title}</h3>
                           <div className="h-1.5 w-16 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full group-hover:w-32 transition-all"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform shadow-sm"></div>
                                 <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
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

export default POSCardSection;
