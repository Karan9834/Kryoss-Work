import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ label, href, children, isOpen: controlledIsOpen, onMouseEnter, onMouseLeave, onClick }) => {
    const [localIsOpen, setLocalIsOpen] = useState(false);
    const timeoutRef = useRef(null);
    const location = useLocation();
    const isActive = location.pathname === href || (href !== '/' && location.pathname.startsWith(href));

    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : localIsOpen;

    const handleMouseEnter = () => {
        if (!isControlled) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setLocalIsOpen(true);
        }
        if (onMouseEnter) onMouseEnter();
    };

    const handleMouseLeave = () => {
        if (!isControlled) {
            timeoutRef.current = setTimeout(() => {
                setLocalIsOpen(false);
            }, 200); // Small delay to account for hover intent
        }
        if (onMouseLeave) onMouseLeave();
    };

    // Cleanup timeout on unmount
    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // Close the menu automatically when navigating to a new page
    React.useEffect(() => {
        if (!isControlled) setLocalIsOpen(false);
        if (onClick) onClick();
    }, [location.pathname, location.search, location.hash]);

    const handleClick = () => {
        if (!isControlled) setLocalIsOpen(false);
        if (onClick) onClick();
    };

    return (
        <div
            className="relative flex items-center h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
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

            {/* Invisible hover bridge to fill the gap between nav and mega menu */}
            {isOpen && children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 h-8 bg-transparent z-[55]" />
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
