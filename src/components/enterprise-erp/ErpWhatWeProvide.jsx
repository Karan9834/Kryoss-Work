import React from 'react';
import {
    Database,
    Smartphone,
    Cloud
} from 'lucide-react';
import erpwhatweprovide from "../../assets/erp-img/erpwhatweprovide.jpg";

const ErpWhatWeProvide = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Heading - Updated Typography */}
                <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-14 text-center">
                    What We <span className="text-blue-700">Provide</span> for Your Business
                </h2>

                <div className="flex flex-col md:flex-row gap-16 items-center bg-[#f7f7f7] rounded-[40px] px-8 md:px-12 pt-16 pb-0">
                    
                    {/* Left Side Content */}
                    <div className="md:w-1/2 pb-14 space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-blue-600 transition group">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                                <Database className="text-blue-600 group-hover:text-white" size={24} />
                            </div>
                            {/* Card Title - Updated Typography */}
                            <h3 className="text-[18px] md:text-[20px] font-semibold mb-2 text-gray-900">
                                Cloud Master Data
                            </h3>
                            {/* Card Description - Updated Typography */}
                            <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                Simplified centralized storage for all your critical enterprise records and transactions.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-blue-600 transition group">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                                <Smartphone className="text-blue-600 group-hover:text-white" size={24} />
                            </div>
                            {/* Card Title - Updated Typography */}
                            <h3 className="text-[18px] md:text-[20px] font-semibold mb-2 text-gray-900">
                                Native Mobility
                            </h3>
                            {/* Card Description - Updated Typography */}
                            <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                High performance mobile applications for your field workforce and management team.
                            </p>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="md:w-1/2 flex justify-center items-end">
                        <img 
                            src={erpwhatweprovide} 
                            alt="ERP Suite" 
                            className="w-[520px] h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ErpWhatWeProvide;