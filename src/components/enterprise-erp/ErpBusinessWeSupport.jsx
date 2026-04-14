import React from 'react';

const industries = [
    {
        title: "Manufacturing",
        desc: "Precision control over floor operations and supply chain.",
        img: "https://placehold.co/400x400/1e293b/white?text=Manufacturing+ERP"
    },
    {
        title: "Healthcare",
        desc: "Secure patient data management and multi-facility coordination.",
        img: "https://placehold.co/400x400/334155/white?text=Healthcare+ERP"
    },
    {
        title: "Retail & E-commerce",
        desc: "Omnichannel inventory sync and customer loyalty automation.",
        img: "https://placehold.co/400x400/1e1b4b/white?text=Retail+ERP"
    },
    {
        title: "Logistics",
        desc: "Dynamic fleet tracking and warehouse optimization.",
        img: "https://placehold.co/400x400/312e81/white?text=Logistics+ERP"
    },
    {
        title: "Construction",
        desc: "Project budgeting and resource allocation at massive scale.",
        img: "https://placehold.co/400x400/1d4ed8/white?text=Construction+ERP"
    },
    {
        title: "Financial Services",
        desc: "Sophisticated risk management and secure financial auditing.",
        img: "https://placehold.co/400x400/2563eb/white?text=Fintech+ERP"
    }
];

const ErpBusinessWeSupport = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-16 px-4">
                    {/* Badge - Updated Typography */}
                    <span className="inline-block px-4 py-1 rounded-full border border-blue-200 bg-blue-50 text-[12px] font-medium tracking-[0.05em] uppercase text-blue-700 mb-6">
                        Omni-Vertical Support
                    </span>
                    
                    {/* Heading - Updated Typography */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1a1a1a] mb-6">
                        Industries We <span className="text-blue-700">Transform</span>
                    </h2>
                    
                    {/* Description - Updated Typography */}
                    <p className="text-gray-500 max-w-3xl mx-auto text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        Our ERP solutions are engineered to be industry-agnostic at the core, while remaining highly customizable for your specific vertical needs.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <div key={index} className="group relative rounded-[35px] overflow-hidden shadow-sm border border-gray-100 hover:border-blue-600 transition flex flex-col bg-white">
                             <div className="h-64 w-full overflow-hidden relative">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                             </div>
                             <div className="p-8 flex-grow">
                                {/* Industry Title - Updated Typography */}
                                <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition">
                                    {item.title}
                                </h3>
                                {/* Industry Description - Updated Typography */}
                                <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                    {item.desc}
                                </p>
                             </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ErpBusinessWeSupport;