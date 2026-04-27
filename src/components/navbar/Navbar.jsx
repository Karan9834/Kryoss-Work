import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navigationData } from "./navbar.data";
import NavItem from "./NavItem";
import GojekMegaMenu from "./GojekMegaMenu";
import ProductsMegaMenu, { ProductsMobileAccordion } from "./ProductsMegaMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";
import SolutionsMenu, { SolutionsMobileAccordion } from "./SolutionsMenu";
import WorksMegaMenu, { WorksMobileAccordion } from "./WorksMegaMenu";
import CompanyMenu from "./CompanyMenu";
import logo from "../../assets/Logo/worklogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const menuTimeoutRef = useRef(null);
  const location = useLocation();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
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
              alt="KryossOne"
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
              href="/products"
              isOpen={activeMenu === "Products"}
              onMouseEnter={() => handleMenuEnter("Products")}
              onClick={() => setActiveMenu(null)}
            >
              <ProductsMegaMenu />
            </NavItem>

            <NavItem
              label="Solutions"
              href="/solutions"
              activePaths={['/industries']}
              isOpen={activeMenu === "Solutions"}
              onMouseEnter={() => handleMenuEnter("Solutions")}
              onClick={() => setActiveMenu(null)}
            >
              <SolutionsMenu />
            </NavItem>

            <NavItem
              label="Works"
              href="/works"
              isOpen={activeMenu === "Works"}
              onMouseEnter={() => handleMenuEnter("Works")}
              onClick={() => setActiveMenu(null)}
            >
              <WorksMegaMenu />
            </NavItem>

            <NavItem
              label="Company"
              href="/company"
              isOpen={activeMenu === "Company"}
              onMouseEnter={() => handleMenuEnter("Company")}
              onClick={() => setActiveMenu(null)}
            >
              <CompanyMenu />
            </NavItem>

            <Link
              to="/blog"
              className={`px-3 py-2 text-[15.5px] font-semibold transition-colors ${location.pathname.startsWith('/blog') ? 'text-primary' : 'text-gray-800 hover:text-primary'
                }`}
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/company/contact"
              className="bg-primary hover:bg-orange-600 text-white px-5 py-1.5 rounded-full text-[16.5px] font-medium uppercase tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 w-fit"
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
                className={`w-full flex justify-between items-center text-lg font-bold py-2 transition-colors ${location.pathname.startsWith('/products') ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
              >
                <span>Products</span>
                <ChevronDown className={`transition-transform duration-200 ${mobileExpanded === 'products' ? 'rotate-180 text-primary' : ''} ${location.pathname.startsWith('/products') ? 'text-primary' : ''}`} size={20} />
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
                className={`w-full flex justify-between items-center text-lg font-bold py-2 transition-colors ${(location.pathname.startsWith('/solutions') || location.pathname.startsWith('/industries')) ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`transition-transform duration-200 ${mobileExpanded === 'solutions' ? 'rotate-180 text-primary' : ''} ${(location.pathname.startsWith('/solutions') || location.pathname.startsWith('/industries')) ? 'text-primary' : ''}`} size={20} />
              </button>
              {mobileExpanded === 'solutions' && (
                <div className="mt-2">
                  <SolutionsMobileAccordion onLinkClick={() => setMobileMenuOpen(false)} />
                </div>
              )}
            </div>

            {/* Works Accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'works' ? '' : 'works')}
                className={`w-full flex justify-between items-center text-lg font-bold py-2 transition-colors ${location.pathname.startsWith('/works') ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
              >
                <span>Works</span>
                <ChevronDown className={`transition-transform duration-200 ${mobileExpanded === 'works' ? 'rotate-180 text-primary' : ''} ${location.pathname.startsWith('/works') ? 'text-primary' : ''}`} size={20} />
              </button>
              {mobileExpanded === 'works' && (
                <div className="mt-2">
                  <WorksMobileAccordion onLinkClick={() => setMobileMenuOpen(false)} />
                </div>
              )}
            </div>

            {/* Company Accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'company' ? '' : 'company')}
                className={`w-full flex justify-between items-center text-lg font-bold py-2 transition-colors ${location.pathname.startsWith('/company') ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
              >
                <span>Company</span>
                <ChevronDown className={`transition-transform duration-200 ${mobileExpanded === 'company' ? 'rotate-180 text-primary' : ''} ${location.pathname.startsWith('/company') ? 'text-primary' : ''}`} size={20} />
              </button>
              {mobileExpanded === 'company' && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-orange-100">
                  {navigationData.company.items.map((item, idx) => {
                    const isItemActive = location.pathname === item.href;
                    return (
                      <Link
                        key={idx}
                        to={item.href}
                        className={`block text-[15px] font-semibold py-1 transition-colors ${isItemActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`text-lg font-bold py-2 transition-colors ${location.pathname.startsWith('/blog') ? 'text-primary' : 'text-gray-800 hover:text-primary'
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/company/contact"
              className="mt-4 bg-primary text-white text-center py-4 rounded-full font-semibold uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all"
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
