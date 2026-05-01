import React from 'react';
import { 
  ShoppingCart, 
  Calendar, 
  Gift, 
  Package, 
  Table, 
  CreditCard, 
  BarChart3, 
  ClipboardList 
} from 'lucide-react';
import featuresImg from "../../../../../assets/Resturant management/2.,.jpg";

const RestaurantFeatures = () => {
  const features = [
    {
      icon: <ShoppingCart size={18} />,
      title: "Core POS Module",
      description: "Well-integrated POS module to help the restaurant staff accept payments and track sales."
    },
    {
      icon: <Calendar size={18} />,
      title: "Employee Scheduler",
      description: "Manage your overstaffed and understaffed days easily with in-build calendars and schedules."
    },
    {
      icon: <Gift size={18} />,
      title: "Rewards and Loyalty",
      description: "Offer gift cards and reward point benefits to the customers for choosing you and boost loyalty."
    },
    {
      icon: <Package size={18} />,
      title: "Inventory Management",
      description: "Comprehensive inventory management helps you manage this aspect seamlessly using software."
    },
    {
      icon: <Table size={18} />,
      title: "Reservation System",
      description: "Allow customers to reserve tables online and manage your staff with resource-based bookings."
    },
    {
      icon: <CreditCard size={18} />,
      title: "Payment Integration",
      description: "Integrated payment gateway and card processing system that enables customers to pay quickly."
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Reporting & Analytics",
      description: "Module consolidates data from multiple sources and gets you deeper insights into various aspects."
    },
    {
      icon: <ClipboardList size={18} />,
      title: "Order Management",
      description: "Take orders and attend to them with more professionalism using the order management feature."
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-br from-white via-orange-50 to-amber-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-2 md:order-1">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-l-4 border-t-4 border-orange-500 rounded-tl-2xl"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-4 border-b-4 border-amber-500 rounded-br-2xl"></div>
          
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 blur-2xl rounded-full"></div>

          <img
            src={featuresImg}
            alt="Restaurant Software Features"
            className="relative w-full max-w-md rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 md:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            Key Features
          </div>

          {/* Heading */}
          <h2 className="text-gray-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Restaurant{" "}
            <span className="leading-[1.2] bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-[30px] md:text-[36px] font-bold leading-[1.2]">
              Software Features
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Comprehensive features to streamline your restaurant operations
          </p>

          {/* Features Grid - 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500 text-[12px] leading-relaxed mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantFeatures;