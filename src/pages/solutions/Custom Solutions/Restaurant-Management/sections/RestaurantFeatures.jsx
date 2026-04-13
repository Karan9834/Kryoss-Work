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
import featuresImg from "../../../../../assets/Restaurant-Manage/features.png"; // Add your image path

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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col md:flex-row z-10">
        
        {/* LEFT IMAGE - 50% width full height */}
        <div className="relative md:w-1/2 h-[500px] md:h-auto overflow-hidden">
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 z-0"></div>
          
          {/* Decorative corner elements */}
          <div className="absolute top-6 left-6 w-16 h-16 border-l-4 border-t-4 border-orange-500 rounded-tl-2xl z-10"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-r-4 border-b-4 border-amber-500 rounded-br-2xl z-10"></div>
          
          <img
            src={featuresImg}
            alt="Restaurant Software Features"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* RIGHT CONTENT - 50% width */}
        <div className="md:w-1/2 py-16 md:py-20 px-6 lg:px-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            Key Features
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Restaurant{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Software Features
            </span>
          </h2>

          <p className="mt-3 text-gray-500 text-sm">
            Comprehensive features to streamline your restaurant operations
          </p>

          {/* Features Grid - 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl border border-orange-200/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 bg-white/40"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                  <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-500 mt-0.5">{item.description}</p>
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