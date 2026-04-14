import React from 'react';
import {
    LayoutDashboard,
    PieChart,
    Settings,
    FileText,
    Bell,
    Users
} from 'lucide-react';
import erpadminpanel from "../../assets/erp-img/erpadminpanel.jpg";

const ErpAdminPanel = () => {
    const adminFeatures = [
        {
            icon: LayoutDashboard,
            title: "Advanced Dashboard",
            desc: "Customizable widgets with real-time business performance metrics."
        },
        {
            icon: PieChart,
            title: "Visual Analytics",
            desc: "Dynamic charts and graphs representing data from all departments."
        },
        {
            icon: Settings,
            title: "System Config",
            desc: "Fine-tune global ERP settings and third-party API integrations."
        },
        {
            icon: FileText,
            title: "Audit Logs",
            desc: "Track every system activity for total transparency and security."
        },
        {
            icon: Bell,
            title: "Smart Notifications",
            desc: "Automated alerts for threshold breaches and critical task deadlines."
        },
        {
            icon: Users,
            title: "IAM Control",
            desc: "Identity and Access Management for secure multi-tenant operations."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Badge - Added */}
                <div className="flex justify-center mb-6">
                    <span className="border rounded-full px-4 py-1 text-[12px] font-medium tracking-[0.05em] uppercase flex items-center gap-2 border-blue-200 bg-blue-50">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Admin Control Panel
                    </span>
                </div>

                {/* Heading - Updated Typography */}
                <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-14 text-center">
                    Powerful <span className="text-blue-700">Admin Panel</span> for Complete Control
                </h2>

                <div className="bg-[#f7f7f7] rounded-[40px] px-8 md:px-12 pt-16 pb-0 flex flex-col md:flex-row items-center gap-10">
                    
                    {/* LEFT CONTENT */}
                    <div className="md:w-1/2 pb-14">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {adminFeatures.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-3 group">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition">
                                        <feature.icon size={22} className="text-blue-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        {/* Feature Title - Updated Typography */}
                                        <h4 className="font-semibold text-gray-900 text-[14px] md:text-[16px]">
                                            {feature.title}
                                        </h4>
                                        {/* Feature Description - Updated Typography */}
                                        <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="md:w-1/2 flex justify-center items-end">
                        <img 
                            src={erpadminpanel} 
                            alt="ERP Admin Control Panel" 
                            className="w-[520px] h-auto"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ErpAdminPanel;