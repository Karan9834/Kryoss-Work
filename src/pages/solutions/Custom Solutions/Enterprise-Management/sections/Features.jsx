import React from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  Truck, 
  Settings, 
  BarChart3, 
  Heart,
  Sparkles
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <DollarSign size={20} />,
      title: "Finance and Accounting",
      description: "Our custom ERP development lets you manage and automate the entire financial process including accounts, risk management, budgets, profits, ROI and analysis, and reporting. It is a comprehensive solution that allows you total control.",
      gradient: "from-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "Sales and Purchase Management",
      description: "Our experts can develop the ERP solutions based on your needs, where you can feed in stock levels, sales orders, delivery schedules and other relevant details to get automatically generated strategies for efficient sales and purchase management systems.",
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Users size={20} />,
      title: "Resource Management",
      description: "You can manage all your resources including employees, customers, finances in one place. Without the hassles of multiple reports, you can view all mandatory data at any point with a click and plan for your next strategic move.",
      gradient: "from-amber-600 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      icon: <Package size={20} />,
      title: "Inventory Management",
      description: "We provide the most efficient inventory management method that simplifies all your internal operations. Our ERP solutions allow you to create custom and dynamic reports.",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Truck size={20} />,
      title: "Supply Chain Management",
      description: "We provide custom ERP development that allows you real-time control and data accessibility to ensure your business runs at optimal efficiency. You can track your products at every step in the supply chain allowing you to slow down or speed up operations as needed.",
      gradient: "from-rose-600 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200"
    },
    {
      icon: <Settings size={20} />,
      title: "Automation",
      description: "All your business processes can be automated using our ERP solutions, it gives you the complete flexibility to design your workflow as per your needs. You can use automation at every step in the process from sales to after-sales service.",
      gradient: "from-indigo-600 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Business Intelligence",
      description: "Our custom ERP development comes up with features like business analytics and intelligence that will help you with the right information at the right time, both online or offline, on laptops or mobile devices. With this, you have the power to make decisions on time and can minimize wastage.",
      gradient: "from-cyan-600 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: <Heart size={20} />,
      title: "CRM Management",
      description: "Managing customers' detail can be quite difficult, and our ERP development solutions solve that with comprehensive customer relationship management tools.",
      gradient: "from-red-600 to-rose-500",
      bgGradient: "from-red-50 to-rose-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 shadow-sm text-violet-700 px-4 py-2 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={12} className="text-violet-500" />
            <span>Powerful Features</span>
            <Sparkles size={12} className="text-violet-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Enterprise{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
          </div>

          <p className="mt-6 text-gray-500 text-base max-w-2xl mx-auto">
            Comprehensive ERP features to streamline and optimize your business operations
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-5 border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2`}
              style={{ boxShadow: `0 10px 30px -10px rgba(0,0,0,0.05)` }}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/0 to-white/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon container with premium 3D effect */}
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative dot */}
                <div className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Title */}
              <h3 className="relative text-base font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-500 text-xs leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {item.description}
              </p>

              {/* Premium decorative line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>
              
              {/* Arrow indicator on hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}>
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;