import React from 'react';
import { 
  TrendingDown, 
  Eye, 
  Share2, 
  Database, 
  Sliders, 
  LineChart,
  Sparkles
} from 'lucide-react';
import benefitsImg from "../../../../../assets/ERP-Solution/benefits.png"; 

const BusinessBenefits = () => {
  const benefits = [
    {
      icon: <TrendingDown size={18} />,
      title: "Boost Your Business & Cut Your Cost",
      description: "With the use of your personal and digital channels, your promotional spend will get optimized for your business worldwide. CRM and ERP system is integrated to give you maximum return on investment (ROI)."
    },
    {
      icon: <Eye size={18} />,
      title: "Acquire Visibility",
      description: "With the proper visibility of sales and marketing, you continuously track the business performance and know the things work better for your business."
    },
    {
      icon: <Share2 size={18} />,
      title: "Create Multi-Channels",
      description: "You have customers everywhere, so you need to have a simple way to connect. It doesn't matter whether you are receiving the message via phone, chat, email, or social media."
    },
    {
      icon: <Database size={18} />,
      title: "Integrated Information System",
      description: "Have complete information integrated just at one location. There will be no issue of data spreading with the numerous databases."
    },
    {
      icon: <Sliders size={18} />,
      title: "Customization & Extension",
      description: "A perfect configuration and customization help to adapt the CRM as according to the way you want to manage your business."
    },
    {
      icon: <LineChart size={18} />,
      title: "Forecasting",
      description: "ERP & CRM implementation gives managers the tools needed to create accurate predictions."
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center z-10 max-w-7xl mx-auto">
        
        {/* LEFT IMAGE */}
        <div className="relative md:w-1/2 flex items-center justify-center p-6">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-purple-500/20 rounded-xl"></div>

          {/* Corner Design */}
          <div className="absolute top-6 left-6 w-16 h-16 border-l-4 border-t-4 border-violet-500 rounded-tl-2xl"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r-4 border-b-4 border-purple-500 rounded-br-2xl"></div>

          {/* IMAGE (FIXED HEIGHT) */}
          <img
            src={benefitsImg}
            alt="ERP & CRM Benefits"
            className="relative w-full max-h-[500px] object-cover rounded-xl shadow-xl hover:scale-105 transition duration-700"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 py-12 md:py-16 px-6 lg:px-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 text-violet-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <Sparkles size={12} className="text-violet-500" />
            <span>Business Benefits</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Benefits In Your Business Of{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              ERP Solutions & CRM Implementation
            </span>
          </h2>

          <p className="mt-3 text-gray-500 text-sm">
            Transform your business operations with integrated ERP and CRM solutions
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl border border-violet-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 bg-white/60 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-500 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;