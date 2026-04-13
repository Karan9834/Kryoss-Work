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

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
// Import Components
const BusinessWorks = () => {
    const projects = [
        {
            title: "CWJobs - Job Search App",
            description: "Looking for a job while on the move? The CWJobs Job Search App is here to help! Here’s how: CWJobs.co.uk is a market leader in specialist IT recruitment, attracting around 500,000 IT professionals to its site and listing more than 9,000 live job ads every month. This activity cements its strong reputation among jobseekers and recruiters alike, so whether you’re looking to fill a vacancy or find a new job, you can trust CWJobs to be your first port of call.",
            image: "https://kryosssoftech.org/icons/business/CWjob.png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=com.stepstone.cwjobs", type: 'playstore' }
            ],
            tags: ["Business App", "Job Search", "Efficiency", "Recruitment"]
        },
        {
            title: "Borzo: -Courier Delivery Service",
            description: "Completely hassle-free. No registration fee. No extra charges. Get your deliveries done, cheap and fast. Place an order in seconds, and your customers will receive their items the same day: in 60 minutes or at a specified time. Courier delivery service Borzo works in 10 countries across the world, including Russia, Indonesia, the Philippines, Mexico, Brazil, Korea, India, Turkey, Vietnam and so on.",
            image: "https://kryosssoftech.org/icons/business/borzo.png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=global.dostavista.client", type: 'playstore' }
            ],
            tags: ["Business App", "Delivery", "Logistics", "Efficiency"]
        },
        {
            title: "Hospitality Jobs - Hotelcareer | Your career app",
            description: "Staff wanted! Are you a receptionist, a waiter, a chef de partie, a pastry chef, a bartender or any other hospitality enthusiast? Then you're in the exact right place! Hotelcareer gives you access to thousands of job offers worldwide. Get in touch with big players of the industry and take your career to the next level!",
            image: "https://kryosssoftech.org/icons/business/Hotelcarrer.png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=com.yourcareergroup.jobshc", type: 'playstore' }
            ],
            tags: ["Business App", "Hospitality", "Job Search", "Career"]
        },
        {
            title: "TouchCall - Free Call Global Families and Friends",
            description: "Who needs a gym? Get in shape at home with Workouts & Plans from Fitify. TouhCall is a VoIP Wifi Calling App that offers completely FREE local and international calls with superior crystal-clear audio. Download this VOIP wifi calling app and enjoy free calls worldwide to any mobile & landline. You have many choices to earn credit, the most simple just need one tap.",
            image: "https://kryosssoftech.org/icons/business/Touchcall.png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=com.free.phone.touch.call", type: 'playstore' }
            ],
            tags: ["Business App", "Communication", "VoIP", "Free Calls"]
        },
        {
            title: "24Task: Hire Freelancers",
            description: "Take the initial steps towards hiring the best talents for your project with the 24Task Employers app. 24 Task is a reputed freelancing platform that allows employers to post multiple jobs and details at once and collaborate with the freelancers in no time. Gain more efficiency with our employer’s app when it comes to hiring freelancers and enhancing your workflow.",
            image: "https://kryosssoftech.org/icons/business/24%20task.png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=com.task24.android.apps.employer.hire.freelancer", type: 'playstore' }
            ],
            tags: ["Business App", "Freelancing", "Hiring", "Efficiency"]
        },
        {
            title: "Zasket Grocery App - Lowest Prices, Free Delivery",
            description: "Zasket is the most exciting online supermarket in Vijayawada. You benefit from a huge range of products at your fingertips, where we offer you the lowest price and free next day delivery. Zasket also saves you time and money, and removes the hassle of carrying your weekly goods home from the store. You can pay easily through our app.",
            image: "https://kryosssoftech.org/icons/business/zasket.png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=com.zasket", type: 'playstore' }
            ],
            tags: ["Business App", "Grocery", "Delivery", "Retail"]
        },
        {
            title: "Turijobs - Hospitality & Tourism Job Search App",
            description: "With our new Turijobs app, now jobs find you. Set your location and your job preferences and we will notify you when your dream job is posted. It is that fast, easy and convenient Want to be first to find the latest vacancies for the best hotels, restaurants, travel agencies and airlines real-time and straight to your device?",
            image: "https://kryosssoftech.org/icons/business/Turijob%20(2).png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=com.turijobs", type: 'playstore' }
            ],
            tags: ["Business App", "Hospitality", "Tourism", "Job Search"]
        },
        {
            title: "BooFoo - Search Vendors, Products, Services, Offers",
            description: "Boofoo is for everyone who wants to sell any kind of products or services online; whether an existing or upcoming business; whether a micro, small, medium or large business or those who wants to start business from their home or for those who wants to be a customer or who wants to search new offer or create new offer.",
            image: "https://kryosssoftech.org/icons/business/Boofoo%20(2).png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=com.at.chatbot.boofooe", type: 'playstore' }
            ],
            tags: ["Business App", "E-commerce", "Marketplace", "Business"]
        },
        {
            title: "Learn Vocabulary Languages",
            description: "Learn vocabulary languages\" app is an application that helps you learn a language. It is built for you to play with vocabulary and memorize them naturally. With \"Learn vocabulary languages\" app, you only need 15 minutes a day and the foreign language will permeate into you as naturally as possible.",
            image: "https://kryosssoftech.org/icons/business/Ivvoca%20(2).png",
            links: [
                { href: "https://play.google.com/store/apps/details?id=io.ivoca.ivocaapp", type: 'playstore' }
            ],
            tags: ["Business App", "Education", "Language Learning", "Efficiency"]
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
                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://kryosssoftech.org/icons/banner/business.png')",
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
                    <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">
                        Business <span className="text-orange-600">Works</span>
                    </h1>
                    <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto text-gray-200">
                        Discover our comprehensive portfolio of business applications designed to optimize operations, enhance productivity, and drive organizational success.
                    </p>
                </motion.div>
            </section>

            {/* 2. Breadcrumb */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-600 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-600">Business Apps Work</span>
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
                            className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4"
                        >
                            Our <span className="text-orange-600">Business App</span> Portfolio
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
                    </div>
                </div>

                <div className="w-full mt-8">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-orange-50'}`}>
                                <div className={`container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Image Box */}
                                    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
                                        <div className="overflow-hidden relative group w-full flex items-center justify-center min-h-[300px]">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="max-h-[450px] w-full object-contain"
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
                                            <span className="h-px w-8 bg-orange-600"></span>
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">Project 0{idx + 1}</span>
                                        </div>

                                        <h3 className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-gray-950 mb-6">
                                            {project.title}
                                        </h3>

                                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600 mb-10">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags?.map((tag) => (
                                                <span key={tag} className="px-5 py-2 rounded-xl bg-white border border-gray-100 text-[12px] font-medium tracking-[0.05em] uppercase text-gray-500 shadow-sm">
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
                                                        className="flex items-center gap-3 bg-gray-800 text-white px-5 py-2.5 rounded-xl hover:bg-orange-600 hover:shadow-lg transition-all duration-300 group/btn"
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
                                <h3 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-2">{stat.value}+</h3>
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

export default BusinessWorks;
