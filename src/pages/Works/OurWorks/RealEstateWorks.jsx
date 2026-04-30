import React, { useState } from 'react';
import {
    Briefcase,
    MapPin,
    ChevronRight,
    Globe,
    ArrowRight,
    CheckCircle,
    Star,
    Users,
    Mail,
    Phone,
    MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Components
// Import Project Images
import quickstayImg from '../../../assets/realestateimg/1.png';
import rentmystayImg from '../../../assets/realestateimg/2.png';
import dormsImg from '../../../assets/realestateimg/3.png';
import myrentsImg from '../../../assets/realestateimg/4.png';
import nestoriaImg from '../../../assets/realestateimg/5.png';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
const RealEstateWorks = () => {
    const projects = [
        {
            title: 'QuickStay: Flat and Flatmates, Rooms, Roommate, PG',
            description: 'QuickStay is an online residential rental platform that makes it easier for Property Owners & Tenants to exchange information based on shared interests. Find among furnished, semi-furnished, or unfurnished rooms in PG, Flat, Colive. Zero Brokerage properties are available in the major cities of India. QuickStay preferably works to provide a roommate that suits your personality! Compatibility is the key factor in searching for ideal roommates.',
            tags: ['Residential Rental', 'Roommates', 'PG Finder'],
            image: quickstayImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.quickstay.user', type: 'playstore' }
            ]
        },
        {
            title: 'RentMyStay',
            description: 'RentMyStay is an online platform, where tenants can rent out furnished and unfurnished homes with flex(Daily, Weekly or Monthly)-rentals. RentMyStay does an extensive background verification of clients and coordinates the agreement policy. On the other hand, tenants get properties in a locality they wish for and can book anytime On-The-Go with their mobile devices.',
            tags: ['Flex-Rentals', 'Verification', 'Home Rental'],
            image: rentmystayImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.rentmystay.customer', type: 'playstore' }
            ]
        },
        {
            title: 'Dorms.com - Student housing and hostels',
            description: 'Book safe student housing and backpacker hostels. Dorms.com Designed with students, backpackers and digital nomads in mind, our budget-friendly selection of student accommodations and hostels makes youth travel much easier and safer. From London to Paris, from Berlin to New-York, Dorms.com connects you with the best deals for student housing and backpackers hostels.',
            tags: ['Student Housing', 'Hostels', 'Global Travel'],
            image: dormsImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.dorms.app', type: 'playstore' }
            ]
        },
        {
            title: 'My Rents- Manage all your rents with your phones',
            description: 'Do you have different rents to manage? Tenants information, contracts, pictures, events, details... It can be difficult. With My Rents you can easily manage all of this creating different portfolios with their rents and have a better control of your earnings and expenses.',
            tags: ['Rent Management', 'Portfolio', 'Finances'],
            image: myrentsImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.myrents.manager', type: 'playstore' }
            ]
        },
        {
            title: 'Nestoria Property',
            description: 'The new Nestoria Property app is available in more than 40 countries and 15 languages. Nestoria indexes property adverts so that you save time with your searches. There are millions of properties for you to look through in Nestoria Homes both if you want to buy or rent a house, flat, bungalow, terraced house, apartment, commercial property, cottage, etc.',
            tags: ['Property Indexing', 'Global Reach', 'Real Estate Search'],
            image: nestoriaImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.nestoria.android', type: 'playstore' }
            ]
        }
    ];

    const stats = [
        { value: '750', label: 'Project Delivered', icon: <CheckCircle className="text-orange-500" /> },
        { value: '150', label: 'Development Staff', icon: <Briefcase className="text-orange-500" /> },
        { value: '5', label: 'Years of Experience', icon: <Star className="text-orange-500" /> },
        { value: '450', label: 'Satisfied Clients', icon: <CheckCircle className="text-orange-500" /> }
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
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">Real Estate <span className="text-orange-500">Works</span></h1>
                    <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto text-gray-200">
                        Discover our innovative real estate solutions that simplify property management, rental exchanges, and student accommodations worldwide.
                    </p>
                </motion.div>
            </section>

            {/* 2. Breadcrumb Sticky Section */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">Real Estate Works</span>
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
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4"
                        >
                            Our <span className="text-orange-500">Real Estate</span> Solutions
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>
                </div>

                <div className="w-full mt-8">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-orange-50'}`}>
                                <div className={`container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Image Box */}
                                    <div className="w-full lg:w-1/2 flex justify-center items-center relative drop-shadow-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="max-h-[450px] w-full object-contain"
                                        />
                                    </div>

                                    {/* Content Box */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="h-px w-8 bg-orange-500"></span>
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Project 0{idx + 1}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-6 leading-tight hover:text-orange-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-700 leading-relaxed mb-8 text-lg font-normal">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags?.map((tag) => (
                                                <span key={tag} className="px-5 py-2 rounded-xl bg-white border border-gray-100 text-[12px] font-bold tracking-[0.05em] uppercase text-orange-600 shadow-sm">
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
                                                        {link.type === 'playstore' && (
                                                            <>
                                                                <div className="w-6 h-6 flex items-center justify-center">
                                                                    <img
                                                                        src="https://kryosssoftech.org/icons/Health-&-Fitness/google app store.png"
                                                                        alt="Play Store"
                                                                        className="w-full h-full object-contain brightness-0 invert"
                                                                        onError={(e) => { e.target.parentElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>' }}
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col items-start leading-tight">
                                                                    <span className="text-[9px] uppercase font-bold text-gray-400 group-hover/btn:text-orange-100 italic">Get it on</span>
                                                                    <span className="text-sm font-black tracking-tight">Google Play</span>
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
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden" style={{ backgroundImage: "url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-4">
                                <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.value}+</h3>
                                <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* New Added Sections */}
            <Testimonial theme="orange" />
            <Industries theme={{ bg: "bg-[#fff3eb]", primary: "text-orange-500", iconBg: "bg-orange-100", iconColor: "text-orange-500" }} />
            <OurWork theme={{ primary: "text-orange-500", accent: "bg-orange-500" }} />
            <ContactUs theme="orange" />

        </div>
    );
};

export default RealEstateWorks;
