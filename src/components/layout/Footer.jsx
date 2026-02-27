import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';

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
        <footer className="footer-section bg-[#1a1a1a] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/whitelabel-assets/assets/images/logo-white.svg"
                                alt="KryossWork"
                                className="h-10 w-auto"
                                onError={(e) => { e.target.src = "/placeholder.svg"; }}
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading product engineering company building world-class digital products for businesses across 70+ countries.
                        </p>
                        <div className="flex items-center gap-4">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 border border-white/10 hover:border-primary"
                                >
                                    <Icon size={18} className="text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section} className="space-y-6">
                            <h4 className="text-sm font-bold uppercase tracking-[2px] text-white/50">
                                {section}
                            </h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 text-sm hover:text-primary transition-colors duration-200"
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

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} KryossWork Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/company/policies" className="text-gray-500 text-[13px] hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/company/policies" className="text-gray-500 text-[13px] hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/company/policies" className="text-gray-500 text-[13px] hover:text-primary transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
