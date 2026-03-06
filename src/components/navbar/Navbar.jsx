import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import GojekMegaMenu from "./GojekMegaMenu";
import ProductsMegaMenu from "./ProductsMegaMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";
import SolutionsMenu from "./SolutionsMenu";
import CompanyMenu from "./CompanyMenu";
import logo from "../../assets/Logo/worklogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="hidden lg:flex items-center gap-1 h-full ml-auto mr-8">
            <NavItem label="Gojek Clone">
              <GojekMegaMenu />
            </NavItem>

            <NavItem label="Products">
              <ProductsMegaMenu />
            </NavItem>

            <NavItem label="Services">
              <ServicesMegaMenu />
            </NavItem>

            <NavItem label="Solutions">
              <SolutionsMenu />
            </NavItem>

            <NavItem label="Company">
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
        <div className="lg:hidden bg-white border-t border-gray-50 p-6 absolute top-full left-0 right-0 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            <div className="text-lg font-semibold text-gray-800">
              Gojek Clone
            </div>
            <div className="text-lg font-semibold text-gray-800">Products</div>
            <div className="text-lg font-semibold text-gray-800">Services</div>
            <div className="text-lg font-semibold text-gray-800">Solutions</div>
            <div className="text-lg font-semibold text-gray-800">Company</div>
            <Link
              to="/blog"
              className="text-lg font-bold text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/company/contact"
              className="bg-primary text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all"
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
