import React from "react";
import { CheckCheck } from "lucide-react";

const FoodDelivery = () => {

  const apps = [
    "Food Delivery App Features",
    "Food Delivery App Live Demo",
    "Food Delivery App Pricing",
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

   

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6"> Explore Live Demo, Features & Pricing of
          <span className="text-orange-400">{" "}
       Our Food Delivery App Clone
          </span>
        </h2>

        {/* Apps Grid */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
       
                 {apps.map((app, index) => (
                   <div
                     key={index}
                     className="flex items-center gap-3 text-lg font-medium text-gray-700"
                   >
                     <CheckCheck className="text-orange-400 w-6 h-6 border hover:bg-orange-400 hover:text-white" />
                     {app}
                   </div>
                 ))}
       
               </div>

      </div>
    </section>
  );
};

export default FoodDelivery;