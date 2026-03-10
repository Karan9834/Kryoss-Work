import React, { useState } from "react";
import { LayoutDashboard, UserCheck, FileText, CreditCard, Settings2, MessageSquare } from "lucide-react";
import Snowadminpanel from "../../assets/homeservice-snow-img/Snowadminpanel.webp";

const cards = [
    {
        icon: LayoutDashboard,
        title: "Dashboard",
        desc: "With a powerful dashboard, the admin can see total services requests, total earning, and new user & blowers.",
    },
    {
        icon: UserCheck,
        title: "Manage Provider",
        desc: "An admin can approve pending provider accounts and also view & edit provider name, email, address, etc.",
    },
    {
        icon: FileText,
        title: "Manage Document",
        desc: "An admin can add or view the required document for plowers like driving licenses, vehicle assurances, etc.",
    },
    {
        icon: CreditCard,
        title: "Payment Setting",
        desc: "Admin can manage the payment settings of the site provider commission amount, tax, payment methods.",
    },
    {
        icon: Settings2,
        title: "Manage Service Categories",
        desc: "An admin can add, edit, or delete categories for blows. Also, they set the ON/OFF status of categories.",
    },
    {
        icon: MessageSquare,
        title: "Feedback",
        desc: "An Admin can view all provider feedback with users' details like name, email, and contact details provide it.",
    },
];

const SnowAdminPanel = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="bg-white pt-20">

            {/* TOP: Light section with heading + image */}
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Badge */}
                <span className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm mb-6">
                    <span className="w-2 h-2 bg-[#2f8ccf] rounded-full animate-pulse"></span>
                    Web Admin Panel
                </span>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Powerful Super Admin Web{" "}
                    <span className="text-[#2f8ccf]">Features for Snow Removal Management</span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg mb-12">
                    Our Uber Snow Plow Service App Solution includes a robust Super Admin Web Panel that gives you full control over your snow removal business. Monitor operations, track service requests, and manage users—all from a single dashboard for seamless business management.
                </p>

                {/* Admin Panel Image */}
                <div className="flex justify-center">
                    <img
                        src={Snowadminpanel}
                        alt="Snow Admin Panel"
                        className="w-full max-w-3xl object-contain"
                    />
                </div>

            </div>

            {/* BOTTOM: Dark section with 6 cards */}
            <div className="bg-[#0d2137] rounded-t-[50px] mt-0 pt-20 pb-24 px-6">

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        const isHovered = hovered === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                className={`
                                    flex gap-5 items-start p-6 rounded-2xl border cursor-pointer transition-all duration-300
                                    ${isHovered
                                        ? 'bg-white border-white shadow-[0_8px_30px_rgba(73,197,212,0.15)]'
                                        : 'bg-[#132c45] border-white/10 shadow-none'
                                    }
                                `}
                            >
                                {/* Icon */}
                                <div className={`
                                    flex-shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                    ${isHovered ? 'border-[#2f8ccf] bg-blue-50' : 'border-white/30 bg-white/5'}
                                `}>
                                    <Icon
                                        size={24}
                                        className={`transition-colors duration-300 ${isHovered ? 'text-[#2f8ccf]' : 'text-white'}`}
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isHovered ? 'text-[#2f8ccf]' : 'text-white'}`}>
                                        {card.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isHovered ? 'text-gray-600' : 'text-white/60'}`}>
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
};

export default SnowAdminPanel;
