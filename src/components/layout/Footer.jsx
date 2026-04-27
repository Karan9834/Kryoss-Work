import React, { useState, useEffect } from "react";
import { Twitter, Linkedin, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../../assets/Logo/worklogo.png";

const footerLinks = {
  Products: [
    { label: "Our Products", href: "/products/our-products" },
    { label: "Prime Products", href: "/products/prime-products" },
    { label: "Enterprise Products", href: "/products/enterprise-products" },
    { label: "Gaming Products", href: "/products/gaming-products" },
    { label: "Others Products", href: "/products/others-products" },
  ],
  Solutions: [
    { label: "Application Solutions", href: "/solutions/application-solutions" },
    { label: "Custom Software", href: "/solutions/custom-software" },
    { label: "On Demand Solutions", href: "/solutions/on-demand-solutions" },
    { label: "Industries", href: "/solutions/industries" },
  ],
  Company: [
    { label: "About Us", href: "/company/about" },
    { label: "Our Team", href: "/company/team" },
    { label: "Careers", href: "/company/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/company/contact" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* 🔥 FOOTER */}
      <footer className="bg-[#0B0F1A] text-white relative overflow-hidden pt-16 pb-10">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(91,140,255,0.1),transparent),radial-gradient(circle_at_80%_70%,rgba(0,194,168,0.1),transparent)]"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* 🔥 MAIN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">

            {/* LEFT SECTION */}
            <div className="lg:col-span-2 space-y-6">
              <img src={logo} alt="logo" className="h-10 brightness-0 invert" />

              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Building world-class digital solutions, helping startups and enterprises scale with modern technology and innovative AI-driven strategies.
              </p>

              {/* TRUST */}
              <div className="flex gap-6 text-xs font-medium text-slate-500 flex-wrap">
                <span className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]"></span>
                  50+ Projects
                </span>
                <span className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C2A8]"></span>
                  Global Clients
                </span>
                <span className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]"></span>
                  Scalable Systems
                </span>
              </div>

              {/* NEWSLETTER */}
              <div className="pt-2">
                <div className="relative max-w-sm group">
                  <input
                    type="email"
                    placeholder="Subscribe to our newsletter"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-[#5B8CFF]/50 transition-all"
                  />
                  <button
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #5B8CFF, #00C2A8)",
                    }}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT LINKS */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="space-y-6">
                <h4 className="text-sm font-bold text-white tracking-wider uppercase">{section}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[13px] text-slate-400 hover:text-[#5B8CFF] transition-colors duration-300 flex items-center group/link"
                      >
                        <span className="w-0 group-hover/link:w-2 h-[1px] bg-[#5B8CFF] transition-all mr-0 group-hover/link:mr-2"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* 🔥 BOTTOM BAR */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-[11px] text-slate-500 text-center md:text-left tracking-wide">
              © {new Date().getFullYear()} kryossone Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex gap-6 text-[11px] font-medium">
              <Link to="/company/policies" className="text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/company/policies" className="text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/company/policies" className="text-slate-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-[#5B8CFF]/30 hover:bg-[#5B8CFF]/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* 🔥 BIG BRAND TEXT */}
        <div className="absolute bottom-0 w-full flex justify-center pointer-events-none overflow-hidden select-none">
          <h1 className="text-[15vw] font-black tracking-tighter opacity-[0.03] text-white">
            kryossone
          </h1>
        </div>

        {/* 🔥 WHATSAPP FLOATING BUTTON */}
        <a
          href="https://wa.me/918448909389" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#25D366] rounded-2xl text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-50 group overflow-visible"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 bg-[#25D366] rounded-2xl animate-ping opacity-20 group-hover:opacity-40"></span>

          <FaWhatsapp size={24} className="relative z-10" />

          {/* Label Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1 bg-[#25D366] text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Chat with us
          </span>
        </a>

        {/* 🔥 BACK TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-24 right-8 w-12 h-12 bg-gradient-to-br from-[#5B8CFF] to-[#00C2A8] rounded-2xl text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-500 z-50 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            }`}
          aria-label="Back to top"
        >
          <ArrowRight size={20} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
        </button>



      </footer>
    </>
  );
};

export default Footer;

