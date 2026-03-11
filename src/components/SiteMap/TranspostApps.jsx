import React from "react";
import { CheckCheck } from "lucide-react";

const TransportApps = () => {

  const apps = [
    "Fox-Drive",
    "Fox-Bike",
    "Bolt Clone",
    "Ola Clone",
    "Uber Moto Clone",
    "Cabify Clone",
    "Lyft Clone",
    "Rapido Clone",
    "Didi Clone",
    "Blablacar Clone",
    "Grab Clone",
    "Careem Clone",
    "Gett Clone",
    "Via Clone",
    "Yango Clone",
    "SWVL Clone",
    "E-Scooter App"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

       

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">Transport App Solutions
          <span className="text-orange-400"> Clone Apps for</span> –
          Taxi, Bike & Ride-Sharing Services
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

export default TransportApps;