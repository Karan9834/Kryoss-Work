import React from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Truck, 
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Star
} from 'lucide-react';

const GroceryFeatures = () => {
    const features = [
        {
            icon: ShoppingBag,
            title: "Smart Browsing",
            desc: "AI-powered search for the freshest produce.",
            color: "bg-emerald-50",
            iconColor: "text-emerald-600",
            borderColor: "border-emerald-100"
        },
        {
            icon: MapPin,
            title: "Live Selection",
            desc: "Multiple local stores with real-time stock.",
            color: "bg-orange-50",
            iconColor: "text-orange-600",
            borderColor: "border-orange-100"
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            desc: "Sub-30 minute delivery at your doorstep.",
            color: "bg-teal-50",
            iconColor: "text-teal-600",
            borderColor: "border-teal-100"
        },
        {
            icon: Zap,
            title: "Instant Pay",
            desc: "Seamless one-click secure checkout.",
            color: "bg-amber-50",
            iconColor: "text-amber-600",
            borderColor: "border-amber-100"
        },
        {
            icon: Shield,
            title: "Quality First",
            desc: "Rigorous freshness checks for every item.",
            color: "bg-emerald-50",
            iconColor: "text-emerald-600",
            borderColor: "border-emerald-100"
        },
        {
            icon: Clock,
            title: "24/7 Service",
            desc: "Order anytime, we deliver round the clock.",
            color: "bg-rose-50",
            iconColor: "text-rose-600",
            borderColor: "border-rose-100"
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header - Updated Typography */}
                <div className="text-center mb-20 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Star className="text-amber-500 fill-amber-500" size={16} />
                        {/* Badge - Updated: text-[14px] font-bold tracking-widest uppercase */}
                        <span className="text-emerald-600 text-[14px] font-bold tracking-widest uppercase leading-none">Premium Experience</span>
                        <Star className="text-amber-500 fill-amber-500" size={16} />
                    </div>
                    
                    {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                        Modern <span className="text-emerald-600">Grocery Journey</span>
                    </h2>
                    
                    {/* Description Text - 16px, weight 400, line-height 1.6 */}
                    <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                        Elevate your business with features designed for speed, reliability, and customer satisfaction.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={index}
                                className={`p-10 rounded-[40px] ${feature.color} border-2 ${feature.borderColor} hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
                            >
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                
                                <div className="space-y-6 relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-all duration-500`}>
                                        <Icon size={32} />
                                    </div>
                                    <div className="space-y-3">
                                        {/* Title H3 - 24px mobile, 30px desktop, weight 700, line-height 1.3 */}
                                        <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-[#1A1C2C]">{feature.title}</h3>
                                        {/* Description - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                                        <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <style>{`
                .perspective-1000 { perspective: 1000px; }
            `}</style>
        </section>
    );
};

export default GroceryFeatures;