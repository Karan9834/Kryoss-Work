import { Link, useLocation } from 'react-router-dom';

import React from 'react';
import { navigationData } from './navbar.data';


const GojekMegaMenu = () => {
    const data = navigationData.gojekClone;
    const location = useLocation();
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[300px] max-w-[95vw] bg-white rounded-[24px] shadow-[0_0_40px_rgba(0,0,0,0.15)] border border-gray-100 p-5 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Menu Caret */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100" />

            <div className="relative z-10 space-y-4">
                <div className="border-b border-gray-50 pb-3">
                    <h3 className="text-primary font-bold text-lg leading-tight uppercase tracking-wide text-[17px]">
                        {data.title}
                    </h3>
                    <p className="text-gray-500 text-[12px] mt-1 font-medium">
                        {data.description}
                    </p>
                </div>

                <div className="space-y-1">
                    {data.items.map((item, idx) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={idx}
                                to={item.href}
                                className={`block p-2 rounded-xl text-[15px] font-bold transition-all duration-300 ${
                                    isActive 
                                    ? "bg-orange-50/80 text-primary border-l-2 border-primary" 
                                    : "text-gray-800 hover:text-primary hover:bg-orange-50/60"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GojekMegaMenu;
