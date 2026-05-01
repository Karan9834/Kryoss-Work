import { Link } from 'react-router-dom';

import React from 'react';
import { navigationData } from './navbar.data';


const ServicesMegaMenu = () => {
    const data = navigationData.services;
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[450px] max-w-[95vw] bg-white rounded-[24px] shadow-[0_0_40px_rgba(0,0,0,0.15)] border border-gray-100 p-5 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Menu Caret */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100" />

            <div className="relative z-10 grid grid-cols-2 gap-x-6">
                {data.map((category, idx) => (
                    <div key={idx} className="space-y-4">
                        <h3 className="text-primary font-bold text-lg leading-tight uppercase tracking-wider text-[16px] border-b border-gray-50 pb-3">
                            {category.category}
                        </h3>
                        <div className="space-y-1">
                            {category.items.map((item, itemIdx) => (
                                <Link
                                    key={itemIdx}
                                    to={item.href}
                                    className="block p-2 rounded-xl hover:bg-orange-50/60 text-[15px] font-bold text-gray-800 hover:text-primary transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesMegaMenu;
