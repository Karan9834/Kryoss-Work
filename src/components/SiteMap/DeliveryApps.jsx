import React from "react";
// import { Check } from "lucide-react";
import { CheckCheck } from "lucide-react";

const DeliveryApps = () => {

  const apps = [
    "Fox-Grocery",
    "Fox-Medicine",
    "Fox-Daily Delivery",
    "Fox-Marijuana",
    "Fox-Alcohol",
    "Glovo Clone",
    "Zomato Clone",
    "Deliveroo Clone",
    "Foodpanda Clone",
    "Doordash Clone",
    "Ubereats Clone",
    "Blinkit Clone",
    "Zepto Clone",
    "Gopuff Clone",
    "Rappi Clone",
    "Instamart Clone",
    "Talabat Clone",
    "Wolt Clone App",
    "Grubhub Clone App",
    "Delivery Hero Clone App",
    "JustEat Clone App",
    "Foodora Clone App",
    "Seamless Clone App",
    "Big Basket Clone App",
    "Instashop Clone App",
    "Walmart Clone App",
    "HappyFresh Clone App",
    "Flink Clone App",
    "Beelivery Clone App",
    "1mg Clone App",
    "Chefaa Clone App",
    "Netmeds Clone App"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
       

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">Delivery App Solutions
          <span className="text-orange-400"> Food, Grocery, Alcohol, Medicine &</span> –
           More On-Demand Delivery Clones
        </h2>

         {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">

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

export default DeliveryApps;