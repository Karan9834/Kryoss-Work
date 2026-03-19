import React from 'react';
import erpcta1 from "../../assets/erp-img/erpcta1.jpg";

const ErpCTA1 = () => {
    return (
        <section className="py-24 bg-blue-900 relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Image */}
                <div className="relative order-2 lg:order-1 flex justify-center">
                    <img 
                        src={erpcta1} 
                        alt="ERP Mobile" 
                        className="w-full max-w-[520px] rounded-[40px] shadow-2xl border-8 border-white/10"
                    />
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 text-white">
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
                        Your Enterprise, Anywhere on <span className="text-blue-400">Any Device</span>
                    </h2>

                    <p className="text-lg text-blue-100/80 mb-10 leading-relaxed">
                        Break geographic barriers. Manage your global operations from a 
                        unified smartphone app, ensuring decision-makers stay connected 
                        to the heartbeat of the business 24/7.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button className="px-10 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition shadow-lg">
                            Get Custom Quote
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ErpCTA1;
