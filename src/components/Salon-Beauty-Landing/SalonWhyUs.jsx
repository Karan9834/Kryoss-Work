import React from 'react';
import { MapPin, Layers, Palette, Settings } from 'lucide-react';
import whyUsImg from '../../assets/saloonlanding-img/saloonlandingwhyus.jpg';

const SalonWhyUs = () => {
   const cards = [
      {
         title: "Pre-Integrations",
         desc: "Save your time and money with pre-integration services like Maps, Online Payments, etc.",
         icon: MapPin,
         position: "top-left",
         themeColor: "text-rose-500",
         iconBg: "bg-rose-50",
         iconBorder: "border-rose-100",
         hoverBg: "hover:bg-rose-50",
         hoverIconBg: "group-hover:bg-rose-500"
      },
      {
         title: "Leading Tech Stack",
         desc: "We guarantee the quality of your salon marketplace as we use the latest technology for development.",
         icon: Layers,
         position: "top-right",
         themeColor: "text-blue-500",
         iconBg: "bg-blue-50",
         iconBorder: "border-blue-100",
         hoverBg: "hover:bg-blue-50",
         hoverIconBg: "group-hover:bg-blue-500"
      },
      {
         title: "Intuitive UI/UX",
         desc: "Ensure that you grab the audience's attention, and they return to your services with attractive UI/UX.",
         icon: Palette,
         position: "bottom-left",
         themeColor: "text-purple-500",
         iconBg: "bg-purple-50",
         iconBorder: "border-purple-100",
         hoverBg: "hover:bg-purple-50",
         hoverIconBg: "group-hover:bg-purple-500"
      },
      {
         title: "Feature-Rich App",
         desc: "Customize the beauty and salon app features and functionalities as per your audience's requirements.",
         icon: Settings,
         position: "bottom-right",
         themeColor: "text-amber-500",
         iconBg: "bg-amber-50",
         iconBorder: "border-amber-100",
         hoverBg: "hover:bg-amber-50",
         hoverIconBg: "group-hover:bg-amber-500"
      }
   ];

   return (
      <section className="py-16 bg-white relative overflow-hidden flex flex-col items-center">
         <div className="max-w-7xl mx-auto px-6 w-full">

            {/* Header - Updated Typography ONLY */}
            <div className="text-center mb-20 space-y-4">
               {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
               <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                  Why Choose Our <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">Salon Solution</span>
               </h2>
               
               {/* Description - 16px, weight 400, line-height 1.6 */}
               <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                  We provide the best salon software to help you manage your salon business
               </p>
            </div>

            {/* Main Interactive Layout */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-auto lg:min-h-[700px] gap-12 lg:gap-0">

               {/* Central Mockup Background Blob (Desktop Only) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-10 hidden lg:block"></div>

               {/* Central Image - Always Visible */}
               <div className="relative z-10 transition-transform duration-700 hover:scale-125 order-1 lg:order-none">
                  <div className="w-[85vw] max-w-[300px] lg:w-[450px] aspect-square rounded-[40px] border-[6px] lg:border-[8px] border-gray-200 shadow-2xl overflow-hidden bg-white">
                     <img
                        src={whyUsImg}
                        alt="Why Choose Our Salon Solution"
                        className="w-full h-full object-cover"
                     />
                  </div>
               </div>

               {/* Cards Container - Card fonts KEPT ORIGINAL */}
               <div className="w-full lg:absolute lg:inset-0 pointer-events-none z-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:block gap-6 pointer-events-auto max-w-7xl mx-auto px-4 lg:px-0">
                     {cards.map((card, index) => {
                        const Icon = card.icon;
                        const posClasses = {
                           "top-left": "lg:top-0 lg:left-[100px]",
                           "top-right": "lg:top-0 lg:right-[100px]",
                           "bottom-left": "lg:bottom-0 lg:left-[100px]",
                           "bottom-right": "lg:bottom-0 lg:right-[100px]"
                        };

                         return (
                            <div
                               key={index}
                               className={`lg:absolute ${posClasses[card.position]} w-full h-[200px] lg:max-w-[350px] bg-white ${card.hoverBg} group p-6 rounded-2xl shadow-lg lg:shadow-xl border border-gray-50 flex flex-col items-center text-center space-y-4 transition-all duration-500 hover:-translate-y-2 lg:animate-fadeIn`}
                               style={{ animationDelay: `${index * 0.2}s` }}
                            >
                               <div className={`w-12 h-12 flex items-center justify-center border-2 ${card.iconBorder} ${card.iconBg} ${card.hoverIconBg} group-hover:text-white transition-colors rounded-xl ${card.themeColor}`}>
                                  <Icon size={24} />
                               </div>
                               <div className="space-y-2">
                                  {/* Card Title - ORIGINAL FONT (unchanged) */}
                                  <h3 className={`text-lg font-bold text-[#1A1C2C] group-hover:${card.themeColor} transition-colors`}>{card.title}</h3>
                                  {/* Card Description - ORIGINAL FONT (unchanged) */}
                                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                     {card.desc}
                                  </p>
                               </div>
                            </div>
                        );
                     })}
                  </div>
               </div>

            </div>

         </div>

         <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
      </section>
   );
};

export default SalonWhyUs;