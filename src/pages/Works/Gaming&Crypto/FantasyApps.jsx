import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
const fantasyData = [
    {
        id: 1,
        titleRed: "FanFight-",
        titleBlack: "Fantasy Sports",
        description: "On FanFight, play fantasy sports with 100% usable Extra Cash to join contests. Fanfight has been one significant portal that’s made Fantasy Sports, especially Fantasy Cricket, more accessible to over 5 million fantasy players. Just when you thought fantasy sports couldn’t get any better, we’ve designed an all-new & improved version of this marvelous portal. Hop on as we introduce you to some brand new features.",
        img: "/GamingandCrypto/FANfight.png",
        link: "https://download.fanfight.com/fanfight_1.5.apk",
        bgClass: "bg-white",
        textLeft: false
    },
    {
        id: 2,
        titleRed: "FSL11-",
        titleBlack: " Fantasy Sports App",
        description: "FSL11 is one of the best fantasy cricket apps in India. It’s the best way to watch cricket games, create teams, win cash, and bring the action right into your living room.Fantasy cricket is the term that everyone understands today! FSL11 Fantasy cricket App, you perceive to experience the true fever of cricket sports ground using a mobile phone, is often played using the Internet, where participants assemble imaginary or virtual teams of real players of a professional sport.",
        img: "/GamingandCrypto/fsl11.png",
        link: "https://api.fsl11.com/uploads/android/FSL11.apk",
        bgClass: "bg-[#f8f9fa]",
        textLeft: true
    },
    {
        id: 3,
        titleRed: "Play One -",
        titleBlack: " Fantasy Cricket App",
        description: "PlayOne with amazing user experience and variety of contests and leagues is a perfect destination for all the amateur users who want to get some firsthand experience in earning by participating in the trial or low costing fantasy leagues before they up the ante in the bigger leagues and contests. PlayOne is your ideal platform to place your money and bet the next time your favorite players and team take the field for bringing you the cricket action.",
        img: "/GamingandCrypto/play one.png",
        link: "https://playone.in/",
        bgClass: "bg-white",
        textLeft: false
    }
];

const FantasyApps = () => {
    return (
        <div className="w-full relative font-sans overflow-hidden">

            {/* 1. Hero Section */}
            <section
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('/Hero/gamingWork.png')",
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
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Fantasy <span className="text-orange-500">Apps</span></h1>
                </motion.div>
            </section>

            {/* 2. Breadcrumb / Page Routing Section */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <a href="/works" className="hover:text-orange-500 transition-colors duration-300">Gaming & Crypto</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">Fantasy Apps</span>
                </div>
            </section>

            {/* 3, 4, 5. Portfolio Projects List (Alternating View) */}
            <section className="w-full flex flex-col">
                {fantasyData.map((project) => (
                    <React.Fragment key={project.id}>
                        <div className={`w-full py-16 md:py-24 ${project.bgClass}`}>
                            <div className="container mx-auto px-4 lg:px-12">
                                <div
                                    className={`flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 ${project.textLeft ? '' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Text Content Block */}
                                    <motion.div
                                        initial={{ opacity: 0, x: project.textLeft ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full md:w-1/2 flex flex-col items-start text-left"
                                    >
                                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                                            <span className="text-red-500">{project.titleRed}</span>
                                            <span className="text-gray-800">{project.titleBlack}</span>
                                        </h2>
                                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 font-medium">
                                            {project.description}
                                        </p>
                                        <a 
                                            href={project.link || ""} 
                                            className="inline-block mt-4 hover:opacity-90 transition-opacity"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="https://kryosssoftech.org/icons/Health-&-Fitness/google%20app%20store.png"
                                                alt="Get it on Google Play"
                                                className="h-12 object-contain"
                                            />
                                        </a>

                                        </motion.div>

                                    {/* Main App Mockup Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="w-full md:w-1/2 flex justify-center items-center"
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.titleRed}
                                            className="w-80 md:w-96 lg:w-[420px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </section>

            {/* 6. Stats Counter Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden" style={{ backgroundImage: "url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">750+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Project Delivered</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">150+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Development Staff</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">10+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Years of Experience</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">450+</h3>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Satisfied Clients</p>
                        </div>
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

export default FantasyApps;
