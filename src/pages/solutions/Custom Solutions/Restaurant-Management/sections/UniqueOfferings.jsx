import React from 'react';
import { 
  Store, 
  CreditCard, 
  Gift, 
  TrendingUp, 
  Shield, 
  Megaphone,
  Sparkles
} from 'lucide-react';

const UniqueOfferings = () => {
  const offerings = [
    {
      icon: <Store size={20} />,
      title: "Store Management",
      description: "With options like control panel, menu management, and order types among others, we help to build and help you manage your store with ease.",
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <CreditCard size={20} />,
      title: "Accepting Payments",
      description: "We are the most reliable restaurant software development company that helps you experience an easy way of receiving payments with credit card payment & many other flexible options.",
      gradient: "from-emerald-600 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Gift size={20} />,
      title: "Loyalty Programs",
      description: "Simply engage your customers in various ways, be it providing a point-based reward system or recommending your menu on social media sites and turn your customers into loyal repeat ones.",
      gradient: "from-amber-600 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Customer Insights",
      description: "Receive meaningful insights with the collected sales trends, rich product reports, customer purchasing patterns, and various other audience details. Access it online, anytime anywhere!",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Shield size={20} />,
      title: "Security",
      description: "Get unmatchable security with advanced encryption, password protection, firewalls, 256-bit Secure Socket Layers and much more to prevent unwanted access to your online store.",
      gradient: "from-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Megaphone size={20} />,
      title: "Marketing Services",
      description: "Engage your customers by initiating email/text campaigns on different occasions. Not only that but get your own coupon generator and automated alerts option to effectively market your services.",
      gradient: "from-rose-600 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200"
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 shadow-sm text-orange-700 px-4 py-2 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={12} className="text-orange-500" />
            <span>Why Choose Us</span>
            <Sparkles size={12} className="text-orange-500" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Unique Offerings To{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Boost Your Restaurant Business
            </span>
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
          </div>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {offerings.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2`}
              style={{ boxShadow: `0 10px 30px -10px rgba(0,0,0,0.05)` }}
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/0 to-white/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon container with premium 3D effect */}
              <div className="relative mb-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
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
              <h3 className="relative text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {item.description}
              </p>

              {/* Premium decorative line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueOfferings;