import React from 'react';
import { 
  TrendingUp, 
  Package, 
  Truck, 
  Users, 
  Briefcase, 
  DollarSign,
  Sparkles
} from 'lucide-react';

const CustomizedERP = () => {
  const applications = [
    {
      icon: <TrendingUp size={20} />,
      title: "ERP - Sales Management Solutions",
      description: "Managing your sales team is a lot easier by seamlessly implementing robust and target-driven ERP systems developed by skilled and experienced developers."
    },
    {
      icon: <Package size={20} />,
      title: "ERP - Production Management Solution",
      description: "Get powerful and scalable product management application development solution that is embedded with seamless product management, quality testing as eliminates manual errors in product management process."
    },
    {
      icon: <Truck size={20} />,
      title: "ERP - Supply Chain Management",
      description: "It's vital to manage the supply chain for every business and in that regard streamlining technological assistances from ERP based applications are necessary."
    },
    {
      icon: <Users size={20} />,
      title: "ERP - Customer Relation Management",
      description: "Customers are of the utmost priority for any business as the business generates its revenues from them. Our solutions allow development of seamless ERP platforms to endow better customer servicing experiences."
    },
    {
      icon: <Briefcase size={20} />,
      title: "ERP - Human Capital Management",
      description: "Our Integrated ERP solutions consist of human capital management, which allow the management of your workforce with more precision."
    },
    {
      icon: <DollarSign size={20} />,
      title: "ERP - Finance Management Solutions",
      description: "An ERP system can streamline the process of financial management. This is necessary to plan business objectives, achievements and new product or service launches."
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f0f1a]"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%238b5cf6' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[90px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-5 text-sm font-semibold">
            <Sparkles size={14} className="fill-white" />
            <span>Customized Solutions</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Customized{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              ERP Applications
            </span>
          </h2>

          <div className="mt-3 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
          </div>

          <p className="mt-4 text-gray-400 text-sm max-w-2xl mx-auto">
            Tailored ERP solutions to streamline every aspect of your business operations
          </p>
        </div>

        {/* Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((item, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>

              {/* Decorative line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizedERP;