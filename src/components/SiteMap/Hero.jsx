import React from "react";
import { CheckCheck } from "lucide-react";

const Hero = () => {



  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Sitemap
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-orange-400">  User Sitemap  </span>– Quick Access to All
          KryossOne
          On-Demand App Solutions
        </h2>



      </div>
    </section>
  );
};

export default Hero;