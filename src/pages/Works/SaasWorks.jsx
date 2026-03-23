import React from 'react';
import {
    Briefcase,
    ChevronRight,
    Globe,
    CheckCircle,
    Star,
    Mail,
    Phone,
    MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

// Import Components
import Testimonials from '../../components/home/Testimonials';
import Contact from '../../components/home/Contact';

// Import Project Images
import saas1Img from '../../assets/saasimg/1.png';
import saas2Img from '../../assets/saasimg/2.png';
import saas3Img from '../../assets/saasimg/3.png';
import saas4Img from '../../assets/saasimg/4.png';
import saas5Img from '../../assets/saasimg/5.png';
import saas6Img from '../../assets/saasimg/6.png';

const SaasWorks = () => {
    const projects = [
        {
            title: 'QR-Tech Menu – Grow your business with digital menu!!',
            description: 'QR-Tech Menu is a revolutionary online software that allows restaurants to create their own digital menu for dine-in and takeaway orders. Create a digital menu for your Restaurant or Bar. Engage more with your customers.',
            tags: ['Digital Menu', 'Restaurant Tech', 'SaaS'],
            image: saas1Img,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.qrtech.menu', type: 'playstore' }
            ]
        },
        {
            title: 'Kryoss SAAS – HR, CRM & Project Management System',
            description: 'The most powerful and simple way to collaborate with your team. Create invoices & Estimates, track time and expenses, manage company employees, track attendance and leaves, keep a track of all your projects in the most simple way, assign tasks to project members and track status, add members to your projects and keep them in sync with progress. It shows how much you earned and how much you spent. Ticket report shows Open vs Closed tickets. Admin can assign tickets to respective department agents.',
            tags: ['HR Management', 'CRM', 'Project Management'],
            image: saas2Img,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.kryoss.saas', type: 'playstore' }
            ]
        },
        {
            title: 'Zoom – Multitenancy Based Ecommerce Platform (SAAS)',
            description: 'Zoom is a multitenancy-based eCommerce platform similar to Shopify business modules — customers can create e-commerce within 5 minutes. This script supports subdomain and custom domain for e-commerce. Anyone can build any kind of e-commerce site using this script. Customers can sell physical products and digital products and change the UI theme easily. Integrated 4 e-commerce themes and added 8+ payment gateways. All payment gateways support sandbox mode and live mode and are fully secure. This script includes a 2-click site installer to install the script without any technical knowledge.',
            tags: ['eCommerce', 'Multitenancy', 'White-label SaaS'],
            image: saas3Img,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.zoom.saas', type: 'playstore' }
            ]
        },
        {
            title: 'Arjun – SaaS Multi-Business Service Booking Software',
            description: 'Arjun is a complete SaaS based multi business service booking software, that gives your users the ability to create and manage bookings, staffs, services, customers, etc. Users also can create their own business page, receive online payments from customers and easily keep track of their online business in one platform.',
            tags: ['Booking Software', 'Multi-Business', 'SaaS'],
            image: saas4Img,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.arjun.saas', type: 'playstore' }
            ]
        },
        {
            title: 'Docxie – SaaS Doctors Chamber, Prescription & Appointment Software',
            description: 'Doxe is a complete SaaS-based doctors appointment & prescription Software that gives your customers the ability to create and manage staffs, prescriptions, patients, drugs, advises, investigations, appointments etc. Users also can create multiple chambers & assign staffs so they can easily keep track of their chambers, patients & appointments in one platform.',
            tags: ['Healthcare SaaS', 'Appointments', 'Prescription'],
            image: saas5Img,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.docxie.saas', type: 'playstore' }
            ]
        },
        {
            title: 'Vyom Event – Ticket Sales and Event Booking & Management System (SaaS)',
            description: 'The Vyom Event is one of the best event management systems that is developed as an application. This application provides various event booking management as well as viewing of the events happening around. This gives the propaganda of the event management and also its management. The Vyom Event provides the best features where you can add your event page along with it you can attend the events that are happening.',
            tags: ['Event Management', 'Ticket Booking', 'SaaS'],
            image: saas6Img,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.vyom.event', type: 'playstore' }
            ]
        }
    ];

    const stats = [
        { value: '750', label: 'Project Delivered' },
        { value: '150', label: 'Development Staff' },
        { value: '10', label: 'Years of Experience' },
        { value: '450', label: 'Satisfied Clients' }
    ];



    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">

            {/* 1. Hero Section */}
            <section
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://kryosssoftech.org/icons/banner/uiux123.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        SaaS <span className="text-orange-500">Works</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Explore our powerful SaaS platforms built to streamline business operations, automate workflows, and drive growth at scale.
                    </p>
                </motion.div>
            </section>

            {/* 2. Breadcrumb */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">SaaS Works</span>
                </div>
            </section>

            {/* 3. Projects Section */}
            <section className="pt-16 md:pt-24 bg-white relative z-10 w-full mb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-black mb-4"
                        >
                            Our <span className="text-orange-500">SaaS</span> Portfolio
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>
                </div>

                <div className="w-full mt-8">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
                                <div className={`container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Image Box */}
                                    <div className="w-full lg:w-1/2 flex justify-center items-center relative drop-shadow-2xl">
                                        <div className="overflow-hidden rounded-[30px] border border-gray-100/50 shadow-2xl relative bg-white p-4 group w-full flex items-center justify-center min-h-[300px]">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="max-h-[450px] w-full object-contain transform group-hover:scale-105 transition-all duration-700"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center text-gray-300 py-16 gap-4">
                                                    <Globe className="w-20 h-20" />
                                                    <span className="text-sm font-bold uppercase tracking-widest">App Screenshot</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Box */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="h-px w-8 bg-orange-500"></span>
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Project 0{idx + 1}</span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black text-gray-950 mb-6 leading-tight tracking-tight">
                                            {project.title}
                                        </h3>

                                        <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags?.map((tag) => (
                                                <span key={tag} className="px-5 py-2 rounded-xl bg-white border border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500 shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {project.links && project.links.length > 0 && (
                                            <div className="flex flex-wrap gap-4 mb-10">
                                                {project.links.map((link, lIdx) => (
                                                    <a
                                                        key={lIdx}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 bg-gray-800 text-white px-5 py-2.5 rounded-xl hover:bg-orange-500 hover:shadow-lg transition-all duration-300 group/btn"
                                                    >
                                                        {link.type === 'playstore' ? (
                                                            <>
                                                                <div className="w-6 h-6 flex items-center justify-center">
                                                                    <img
                                                                        src="https://kryosssoftech.org/icons/Health-&-Fitness/google app store.png"
                                                                        alt="Play Store"
                                                                        className="w-full h-full object-contain brightness-0 invert"
                                                                        onError={(e) => { e.target.parentElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>' }}
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col items-start leading-tight">
                                                                    <span className="text-[9px] uppercase font-bold text-gray-400 group-hover/btn:text-orange-100 italic">Get it on</span>
                                                                    <span className="text-sm font-black tracking-tight">Google Play</span>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Globe size={20} className="text-white group-hover/btn:scale-110 transition-transform" />
                                                                <div className="flex flex-col items-start leading-tight">
                                                                    <span className="text-[9px] uppercase font-bold text-gray-400 group-hover/btn:text-orange-100 italic">Visit</span>
                                                                    <span className="text-sm font-black tracking-tight">Website</span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. Stats Counter Section */}
            <section
                className="py-20 bg-gray-900 text-white relative overflow-hidden"
                style={{
                    backgroundImage: "url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')",
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-4">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.value}+</h3>
                                <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />
            <Contact />

        </div>
    );
};

export default SaasWorks;
