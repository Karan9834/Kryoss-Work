import React from 'react';
import { Link } from 'react-router-dom';
import card1Img from '../../assets/grocerylanding-img/grocerylandingcard1.jpg';
import card2Img from '../../assets/grocerylanding-img/grocerylandingcard2.jpg';

const GroceryCardSection = () => {
   const cards = [
      {
         title: "DTBasket Grocery App",
         image: card1Img,
         path: "/products/delivery/grocery-delivery",
         features: [
            "Customer App",
            "Driver & Store App",
            "Real-time Tracking",
            "Multi Language Support",
            "Order Management",
            "Secure Payment Gateway"
         ],
      },
      {
         title: "Grocery Delivery Platform",
         image: card2Img,
         path: "/products/grocery-delivery",
         features: [
            "Store Management",
            "Inventory Dashboard",
            "Attendance Tracking",
            "Multi-Vendor Support",
            "Comprehensive Analytics",
            "Customer Support System"
         ],
      }
   ];

   return (
      <section id="grocery-products" className="py-16 bg-transparent">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-emerald-300"></div>
                  <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
                     Our Products
                  </span>
                  <div className="w-8 h-px bg-emerald-300"></div>
               </div>
               <h2 className="text-2xl lg:text-3xl font-semibold text-[#1A1C2C]">
                  Our Premium <span className="text-emerald-600">Grocery Solutions</span>
               </h2>
               <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Pick the ideal platform to transform your grocery business into a
                  modern, efficient digital experience.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {cards.map((card, index) => (
                  <Link
                     to={card.path}
                     key={index}
                     className="group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-emerald-100"
                  >
                     {/* Image Section */}
                     <div className="w-full bg-emerald-50 rounded-[36px] overflow-hidden relative mb-6">
                        <img
                           src={card.image}
                           alt={card.title}
                           className="w-full h-auto object-contain "
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                     </div>

                     {/* Content Section */}
                     <div className="w-full px-8 pb-10 space-y-8">
                        <div className="space-y-2">
                           <h3 className="text-xl font-semibold text-[#1A1C2C] group-hover:text-emerald-600 transition-colors">{card.title}</h3>
                           <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                           {card.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                                 <span className="text-sm font-bold text-gray-700">{feature}</span>
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
                  ✦ More grocery products coming soon ✦
               </p>
            </div>
         </div>
      </section>
   );
};

export default GroceryCardSection;
