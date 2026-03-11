import React from "react";
import { CheckCheck } from "lucide-react";

const UberClone = () => {

  const apps = [
    "Uber Clone App Features",
    "Uber Clone App Live Demo",
    "Uber Clone App Pricing",
    "Uber Clone Graphical Flow",
    "Uber Clone Admin Flow"
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

   

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6"> Check Live Demo, Features & Pricing of
          <span className="text-orange-400">{" "}
     Our Uber Clone App
          </span>
        </h2>

        {/* Apps Grid */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
       
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

export default UberClone;