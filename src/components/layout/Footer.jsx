import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo/worklogo.png";

const footerLinks = {
    Products: [
        { label: "Delivery App Clone", href: "/products/delivery/food-delivery" },
        { label: "Taxi App Clone", href: "/products/transport/uber-clone" },
        { label: "Handyman App Clone", href: "/products/home-service/handyman" },
        { label: "Fox-Jek Super App", href: "/gojek-clone" },
        { label: "Grocery App Clone", href: "/products/delivery/grocery-delivery" },
        { label: "Gojek Clone", href: "/gojek-clone" }
    ],
    Services: [
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "Data & AI Solutions", href: "/services/data-ai-solutions" },
        { label: "Product Engineering", href: "/services/product-engineering" },
        { label: "DevOps & Cloud", href: "/services/devops-cloud" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" }
    ],
    Solutions: [
        { label: "Enterprise Solutions", href: "/solutions/healthcare" },
        { label: "Startup MVP", href: "/solutions/healthcare" },
        { label: "Digital Transformation", href: "/solutions/healthcare" },
        { label: "White-Label Apps", href: "/products" },
        { label: "App Modernization", href: "/services/mobile-app-development" },
        { label: "Cloud Migration", href: "/services/devops-cloud" }
    ],
    Company: [
        { label: "About Us", href: "/company/about" },
        { label: "Our Team", href: "/company/team" },
        { label: "Case Studies", href: "/company/testimonials" },
        { label: "Careers", href: "/company/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact Us", href: "/company/contact" }
    ]
};

const socials = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
];

const Footer = () => {
    return (
        <footer className="footer-section bg-[#080808] text-white overflow-hidden relative border-t border-white/5 font-sans pb-10">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Seamless Grid / Dot Pattern UI Layer */}
            <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
                style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)', 
                    backgroundSize: '32px 32px' 
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/0 via-[#080808]/80 to-[#080808] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
                    
                    {/* Brand & Newsletter Column */}
                    <div className="lg:col-span-4 flex flex-col items-start lg:pr-10">
                        <Link to="/" className="inline-block mb-8 group">
                            <div className="bg-white/5 p-2.5 rounded-2xl backdrop-blur-xl border border-white/10 inline-flex items-center group-hover:bg-white/10 transition-colors">
                                <img
                                    src={logo}
                                    alt="KryossWork"
                                    className="h-8 w-auto object-contain brightness-0 invert opacity-90"
                                    onError={(e) => { e.target.src = "/placeholder.svg"; }}
                                />
                            </div>
                        </Link>
                        
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                            Building world-class digital solutions, white-label apps, and enterprise transformation strategies tailored for modern growth.
                        </p>
                        
                        {/* Newsletter Mini-Signup */}
                        <div className="w-full max-w-sm mt-8">
                            <h5 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">Stay in the loop</h5>
                            <form className="relative flex items-center h-[52px] bg-[#111111] border border-white/5 rounded-xl overflow-hidden focus-within:border-white/10 transition-all p-1.5">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    required
                                    className="w-full h-full bg-transparent px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                                />
                                <button type="submit" className="w-[40px] h-[40px] shrink-0 bg-white text-black hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors">
                                    <ArrowRight size={18} strokeWidth={2} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 pl-0 lg:pl-10">
                        {Object.entries(footerLinks).map(([section, links]) => (
                            <div key={section} className="flex flex-col space-y-6">
                                <h4 className="text-sm font-medium text-white">
                                    {section}
                                </h4>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.href}
                                                className="text-gray-500 text-sm hover:text-primary transition-colors duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="h-px w-full bg-white/5 mb-8"></div>

                {/* Bottom Bar: Copyright, Policies, Socials */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-20 relative z-20">
                    <p className="text-gray-500 text-xs font-normal">
                        © {new Date().getFullYear()} KryossWork Pvt. Ltd. All rights reserved.
                    </p>

                    <div className="flex items-center justify-center gap-6">
                        <Link to="/company/policies" className="text-gray-500 text-xs font-normal hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/company/policies" className="text-gray-500 text-xs font-normal hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/company/policies" className="text-gray-500 text-xs font-normal hover:text-primary transition-colors">Cookie Policy</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="group w-9 h-9 flex items-center justify-center rounded-full bg-transparent border border-white/5 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                            >
                                <Icon size={14} className="text-gray-500 group-hover:text-primary transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Huge Brand Typography Background overlapping bottom border natively */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden max-h-[22vw]">
                <h1 className="text-[18vw] font-black tracking-tighter leading-none mb-[-4vw] bg-gradient-to-b from-white/[0.05] to-transparent bg-clip-text text-transparent transform scale-y-110">
                    KRYOSSWORK
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
