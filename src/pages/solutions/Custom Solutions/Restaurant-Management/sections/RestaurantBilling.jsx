import React from 'react';
import { FileText, Settings, CreditCard, Smartphone } from 'lucide-react';
import billingImg from "../../../../../assets/Restaurant-Manage/billing.png"; // Add your image path

const RestaurantBilling = () => {
  const billingFeatures = [
    {
      icon: <FileText size={18} />,
      title: "Online invoicing and billing systems",
      description: "Digital invoices and automated billing for streamlined operations."
    },
    {
      icon: <Settings size={18} />,
      title: "Custom billing and invoicing module",
      description: "Tailored solutions to match your restaurant's unique billing needs."
    },
    {
      icon: <CreditCard size={18} />,
      title: "Payment processing and billing system integration",
      description: "Seamless integration with multiple payment gateways."
    },
    {
      icon: <Smartphone size={18} />,
      title: "Mobile billing apps",
      description: "On-the-go billing solutions for staff and managers."
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-1 md:order-1">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-l-4 border-t-4 border-orange-500 rounded-tl-2xl"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-4 border-b-4 border-amber-500 rounded-br-2xl"></div>
          
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 blur-2xl rounded-full"></div>

          <img
            src={billingImg}
            alt="Restaurant Billing Software"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-2 md:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            Billing Software
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Restaurant{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Billing Software
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Streamline your billing and invoicing systems with tailor-made restaurant billing 
            software that's feature-rich to manage most of your operations.
          </p>

          {/* Billing Features Grid - Transparent Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {billingFeatures.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl border border-orange-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantBilling;