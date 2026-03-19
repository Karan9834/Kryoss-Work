import React from 'react';
import { 
  Calendar, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Smartphone, 
  ShieldCheck,
  CreditCard,
  BellRing
} from 'lucide-react';

const SalonFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Booking",
      desc: "Allow clients to book services 24/7 with real-time availability and instant confirmation.",
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Users,
      title: "Staff Management",
      desc: "Track staff schedules, commissions, and performance metrics from a single dashboard.",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: ShoppingBag,
      title: "Inventory Control",
      desc: "Manage product stock levels, automate reordering, and track retail sales effortlessly.",
      color: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: BarChart3,
      title: "Revenue Insights",
      desc: "Get detailed reports on sales, popular services, and customer spending patterns.",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      desc: "A fully branded mobile experience for your clients to manage their beauty journey.",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: ShieldCheck,
      title: "Data Security",
      desc: "Enterprise-grade security to protect your business data and client information.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
        icon: CreditCard,
        title: "Secure Payments",
        desc: "Integrated payment gateways for split-second, secure transactions and deposits.",
        color: "bg-red-50",
        iconColor: "text-red-600"
    },
    {
        icon: BellRing,
        title: "Push Notifications",
        desc: "Keep clients engaged with automated reminders, marketing offers, and updates.",
        color: "bg-yellow-50",
        iconColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-24 bg-[#FFF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[#FF4D29] font-bold text-sm uppercase tracking-[0.3em]">Our Premium Modules</span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1A1C2C]">
               Features That <span className="text-[#FF4D29]">Empower</span> Your Business
            </h2>


            <p className="text-[#4A4B5E] text-lg">
               Our salon management software is packed with intuitive features designed 
               to handle every aspect of your beauty business with precision and ease.
            </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-[#FFE4D6] overflow-hidden cursor-default"
                >
                  {/* Decorative Gradient Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} opacity-40 rounded-full -mr-16 -mt-16 group-hover:scale-[2.5] transition-transform duration-700`}></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={28} />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-[#1A1C2C] group-hover:text-[#FF4D29] transition-colors">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-4 right-4 text-gray-100 group-hover:text-[#FF4D29]/10 transition-colors">
                     <Icon size={64} />
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};

export default SalonFeatures;
