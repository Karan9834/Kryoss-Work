import React, { useState, useEffect } from "react";
import { Twitter, Linkedin, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../../assets/Logo/image.png";

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
    // Add DMCA script
    const dmcaScript = document.createElement("script");
    dmcaScript.src = "https://images.dmca.com/Badges/DMCABadgeHelper.min.js";
    dmcaScript.async = true;
    document.body.appendChild(dmcaScript);

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
      <footer className="bg-[#0B0F1A] text-white relative overflow-hidden pt-16 pb-4">

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 items-start">

            {/* LEFT SECTION */}
            <div className="lg:col-span-2 space-y-4">
              {/* Logo - Updated with better sizing */}
              <img
                src={logo}
                alt="logo"
                className="h-8 md:h-10 w-auto brightness-0 invert object-contain"
              />


              {/* CONTACT INFO */}
              <div className="pt-1 space-y-2">
                <div className="flex items-start gap-3 text-[17px] text-white">
                  <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent min-w-[90px]">Email:</span>
                  <a href="mailto:sales@kryossone.com" className="hover:text-orange-400 transition-colors">sales@kryossone.com</a>
                </div>
                <div className="flex items-start gap-3 text-[17px] text-white">
                  <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent min-w-[90px]">WhatsApp:</span>
                  <a href="tel:+918448909389" className="hover:text-orange-400 transition-colors">+91 84489 09389</a>
                </div>
                <div className="flex items-start gap-3 text-[17px] text-white">
                  <span className="font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent min-w-[90px]">Address:</span>
                  <span className="leading-relaxed">Office No. 837-A, 8th Floor, JMD Megapolis,<br />Sohna Road, Gurgaon, Haryana</span>
                </div>
              </div>
            </div>

            {/* RIGHT LINKS */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="space-y-3">
                <h4 className="text-lg font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent tracking-wider uppercase">{section}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[15px] text-white hover:text-orange-400 transition-colors duration-300 flex items-center group/link"
                      >
                        <span className="w-0 group-hover/link:w-2 h-[1px] bg-orange-400 transition-all mr-0 group-hover/link:mr-2"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* 🔥 DISCLAIMER */}
          <div className="border-t border-white/5 pt-6 pb-2">
            <p className="text-sm text-white text-center md:text-left leading-relaxed">
              <strong className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">Disclaimer:</strong> All trademarks, product names, and brand names mentioned on this website are the property of their respective owners. Kryossone is not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with any third-party brands referenced. Brand names are used strictly for descriptive and illustrative purposes to explain our app and software development solutions.
            </p>
          </div>

          {/* 🔥 BOTTOM BAR */}
          <div className="border-t-[2px] border-white/20 mt-4 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 pb-2 relative">

            {/* LEFT: DMCA Badge */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <a href="//www.dmca.com/Protection/Status.aspx?ID=e893d6ef-4b05-446e-9265-65eef5610d9f" title="DMCA.com Protection Status" className="dmca-badge group inline-block">
                <img src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-01.png?ID=e893d6ef-4b05-446e-9265-65eef5610d9f" alt="DMCA.com Protection Status" className="w-[120px] md:w-[140px] transition-transform duration-300 group-hover:scale-105" />
              </a>
            </div>

            {/* CENTER: Copyright */}
            <div className="w-full md:w-1/3 flex justify-center text-center">
              <p className="text-sm md:text-base font-medium text-white tracking-wide whitespace-nowrap mb-2 md:mb-0">
                © {new Date().getFullYear()} kryossone Pvt. Ltd. All rights reserved.
              </p>
            </div>

            {/* RIGHT: SOCIALS */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-white hover:text-white hover:border-orange-400/50 hover:bg-orange-400/20 hover:-translate-y-2 hover:scale-110 shadow-lg hover:shadow-orange-400/20 transition-all duration-300"
                >
                  <Icon size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* 🔥 BIG BRAND TEXT */}
        <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center items-end pointer-events-none overflow-hidden select-none">
          <h1 className="w-full text-center text-[19vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] font-black tracking-tighter opacity-[0.03] text-white leading-none whitespace-nowrap">
            KRYOSSONE
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