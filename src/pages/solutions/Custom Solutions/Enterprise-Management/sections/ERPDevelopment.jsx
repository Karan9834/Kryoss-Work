import React from 'react';
import { CheckCircle, TrendingUp, Users, Shield, BarChart3, Settings } from 'lucide-react';
import erpImg from "../../../../../assets/ERP-Solution/erp.png";

const ERPDevelopment = () => {
  const services = [
    "Finance & Accounting Management",
    "Human Resource Management",
    "Supply Chain Management",
    "Customer Relationship Management (CRM)",
    "Project Management",
    "Manufacturing Management"
  ];

  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="order-1 md:order-1">
          {/* Kryoss Work Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
            Kryoss Work
          </div>

          {/* Heading */}
          <h2 className="text-gray-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            ERP - Enterprise Resource Planning{" "}
            <span className="leading-[1.2] bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Development Company
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            ERP software development company to help you align your business goals and resource planning 
            with cutting-edge technology. Resource planning made effortless with solutions that capture 
            all information with minimal manual intervention. Our experienced ERP specialists have over 
            a decade of expertise in empowering businesses to achieve superior performance with the 
            following services.
          </p>

          <p className="mt-3 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Overall, an ERP (Enterprise Resource Planning) provides a business with a centralized and 
            integrated platform to operate efficiently across its core functions including finance, 
            accounting, human resources, manufacturing, supply chain management, project management, 
            and CRM (Customer Relationship Management).
          </p>

          {/* Services List */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-violet-500" />
                <span className="text-gray-700 text-xs">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center order-2 md:order-2">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -right-3 w-16 h-16 border-r-4 border-t-4 border-violet-500 rounded-tr-2xl"></div>
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-4 border-b-4 border-purple-500 rounded-bl-2xl"></div>
          
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/20 to-purple-500/20 blur-2xl rounded-full"></div>

          <img
            src={erpImg}
            alt="ERP Development Company"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ERPDevelopment;