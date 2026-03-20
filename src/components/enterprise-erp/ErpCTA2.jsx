import React from 'react';
import erpcta2 from "../../assets/erp-img/erpcta2.jpg";

const ErpCTA2 = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[40px] px-8 md:px-16 py-16 flex flex-col lg:flex-row items-center gap-10 overflow-hidden relative group">

                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.05] -skew-x-12 translate-x-1/2"></div>

                    {/* Left Content */}
                    <div className="lg:w-3/5 text-white relative z-10">
                        <h2 className="text-2xl lg:text-3xl font-semibold leading-tight mb-8">
                            Ready to Transform Your <span className="text-blue-300">Enterprise Operations?</span>
                        </h2>

                        <p className="text-lg text-blue-100/80 mb-10 leading-relaxed max-w-xl">
                            Experience the power of a unified ERP environment.
                            Connect with our experts today to schedule a custom
                            demo tailored to your organization.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="px-10 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition shadow-xl">
                                Request Free Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image (Overflowing) */}
                    <div className="lg:w-2/5 flex justify-end relative z-10">
                        <img
                            src={erpcta2}
                            alt="ERP Platform"
                            className="w-[380px] md:w-[480px] lg:scale-115 rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErpCTA2;
