import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ label, href, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isActive = location.pathname === href || (href !== '/' && location.pathname.startsWith(href));

    return (
        <div
            className="relative flex items-center h-full"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {children ? (
                <div
                    className="flex items-center gap-1.5 px-3 py-2 text-[15.5px] font-semibold text-gray-900 cursor-default transition-colors"
                >
                    {label}
                    <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            ) : (
                <Link
                    to={href || '#'}
                    className={`flex items-center gap-1.5 px-3 py-2 text-[15.5px] font-semibold transition-colors ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                        }`}
                >
                    {label}
                </Link>
            )}

            {/* Active Indicator Bar */}
            {!children && isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
            )}

            {/* Dropdown Indicator Triangle */}
            {isOpen && children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[-5px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white z-[60]" />
            )}

            {isOpen && children && (
                <div className="pt-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export default NavItem;
