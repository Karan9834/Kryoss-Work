import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { navigationData } from "./navbar.data";
import NavItem from "./NavItem";
import GojekMegaMenu from "./GojekMegaMenu";
import ProductsMegaMenu, { ProductsMobileAccordion } from "./ProductsMegaMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";
import SolutionsMenu, { SolutionsMobileAccordion } from "./SolutionsMenu";
import CompanyMenu from "./CompanyMenu";
import logo from "../../assets/Logo/worklogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const menuTimeoutRef = useRef(null);

  const handleMenuEnter = (menuName) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white py-4 border-b border-gray-50"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Kryoss Work"
              className="h-7 lg:h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center gap-4 h-full ml-auto mr-16"
            onMouseLeave={handleMenuLeave}
          >
{/* 
            <NavItem
              label="Gojek Clone"
              isOpen={activeMenu === "Gojek Clone"}
              onMouseEnter={() => handleMenuEnter("Gojek Clone")}
              onClick={() => setActiveMenu(null)}
            >
              <GojekMegaMenu />
            </NavItem> 
            */}

            <NavItem
              label="Products"
              isOpen={activeMenu === "Products"}
              onMouseEnter={() => handleMenuEnter("Products")}
              onClick={() => setActiveMenu(null)}
            >
              <ProductsMegaMenu />
            </NavItem>

{/* 
            <NavItem
              label="Services"
              isOpen={activeMenu === "Services"}
              onMouseEnter={() => handleMenuEnter("Services")}
              onClick={() => setActiveMenu(null)}
            >
              <ServicesMegaMenu />
            </NavItem> 
            */}

            <NavItem
              label="Solutions"
              isOpen={activeMenu === "Solutions"}
              onMouseEnter={() => handleMenuEnter("Solutions")}
              onClick={() => setActiveMenu(null)}
            >
              <SolutionsMenu />
            </NavItem>

            <NavItem
              label="Company"
              isOpen={activeMenu === "Company"}
              onMouseEnter={() => handleMenuEnter("Company")}
              onClick={() => setActiveMenu(null)}
            >
              <CompanyMenu />
            </NavItem>

            <Link
              to="/blog"
              className="px-3 py-2 text-[15.5px] font-semibold text-gray-800 hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/company/contact"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-md text-[14px] font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-50 p-6 absolute top-full left-0 right-0 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-4">
            
            {/* Products Accordion */}
            <div>
              <button 
                onClick={() => setMobileExpanded(mobileExpanded === 'products' ? '' : 'products')}
                className="w-full flex justify-between items-center text-lg font-bold text-gray-800 hover:text-primary py-2"
              >
                <span>Products</span>
                <ChevronDown className={`transition-transform duration-200 ${mobileExpanded === 'products' ? 'rotate-180 text-primary' : ''}`} size={20} />
              </button>
              {mobileExpanded === 'products' && (
                <div className="mt-2">
                  <ProductsMobileAccordion onLinkClick={() => setMobileMenuOpen(false)} />
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div>
              <button 
                onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? '' : 'solutions')}
                className="w-full flex justify-between items-center text-lg font-bold text-gray-800 hover:text-primary py-2"
              >
                <span>Solutions</span>
                <ChevronDown className={`transition-transform duration-200 ${mobileExpanded === 'solutions' ? 'rotate-180 text-primary' : ''}`} size={20} />
              </button>
              {mobileExpanded === 'solutions' && (
                <div className="mt-2">
                  <SolutionsMobileAccordion onLinkClick={() => setMobileMenuOpen(false)} />
                </div>
              )}
            </div>

            {/* Company Accordion */}
            <div>
              <button 
                onClick={() => setMobileExpanded(mobileExpanded === 'company' ? '' : 'company')}
                className="w-full flex justify-between items-center text-lg font-bold text-gray-800 hover:text-primary py-2"
              >
                <span>Company</span>
                <ChevronDown className={`transition-transform duration-200 ${mobileExpanded === 'company' ? 'rotate-180 text-primary' : ''}`} size={20} />
              </button>
              {mobileExpanded === 'company' && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-orange-100">
                  {navigationData.company.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.href}
                      className="block text-[15px] font-semibold text-gray-700 hover:text-primary py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="text-lg font-bold text-gray-800 hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/company/contact"
              className="mt-4 bg-primary text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
