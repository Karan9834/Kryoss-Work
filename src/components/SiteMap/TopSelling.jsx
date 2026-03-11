import React from "react";
import { CheckCheck } from "lucide-react";

const TopSelling = () => {

  const apps = [
    "Fox-Jek",
    "Fox-Taxi",
    "Fox-Food",
    "Fox-Medicine",
    "Fox-Handyman",
    "Fox-Carpool",
    "Fox-Rental",
    "Fox-Delivery Anything"
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

     

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">   Top-Selling
        <span className="text-orange-400">  Clone Apps Trusted by </span>    Startups & Enterprises
        </h2>

        

        {/* Sitemap Grid */}
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

export default TopSelling;