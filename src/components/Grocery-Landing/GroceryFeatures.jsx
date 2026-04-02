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
                <div className="text-center mb-20 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Star className="text-amber-500 fill-amber-500" size={16} />
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest leading-none">Premium Experience</span>
                        <Star className="text-amber-500 fill-amber-500" size={16} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#1A1C2C]">
                        Modern <span className="text-emerald-600">Grocery Journey</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
                                        <h3 className="text-xl font-bold text-[#1A1C2C]">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                    <div className="pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1C2C]/30 group-hover:text-emerald-600 transition-colors">
                                        Explore More <div className="w-8 h-px bg-current"></div>
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
