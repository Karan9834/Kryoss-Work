import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const gamingData = [
    {
        id: 1,
        titleRed: "Kinda Heroes RPG",
        titleBlack: "-Rescue the Princess!",
        description: "Kinda Heroes is a classic medieval RPG made by one indie guy! Welcome to Riverstone - a tiny medieval village in the middle of nowhere! This place hasn't seen any heroes yet. Choose a character and begin your adventure! Upgrade combat and cooking skills, complete quests, rescue Woody and become a real hero!",
        img: "/GamingandCrypto/kind hero.png",
        link: "https://apps.microsoft.com/detail/9p0t94r6pq08?hl=en-US&gl=US",
        bgClass: "bg-white",
        textLeft: false
    },
    {
        id: 2,
        titleRed: "Braveland Heroes-",
        titleBlack: " Old-school mobile turn",
        description: "The king's scepter of the Seven Kingdoms was perfidiously stolen from the throne room. The kings have summoned the mightiest heroes of magic and offered a generous bounty to the person, who returns it. In high spirits, you set off on a dangerous quest in the search of the royal relic. Use tactics to lead legions of heroes, fight the bosses and conquer other players! As you play, your army will be joined by various kinds of allies – archers, monks, demons, beasts, knights, and many others.",
        img: "/GamingandCrypto/braveland.png",
        link: "https://play.google.com/store/apps/details?id=com.tortugateam.bravelandheroes",
        bgClass: "bg-[#f8f9fa]",
        textLeft: true
    },
    {
        id: 3,
        titleRed: "Hit Master 3D -",
        titleBlack: " Knife Assassin",
        description: "The game has a lot of interactive items. If you don't like to defeat enemies one by one silently and slowly, you can throw a knife into an exploding barrel, and defeat a crowd of enemies in one blow! Also, there are various boxes scattered everywhere – break them to slow down your enemies! Do you like action spy movies? Do you like to silently defeat rivals? Then challenge yourself in an epic Hit Master 3D game! Here you must prove that you are the best and most accurate spy of all! Once you're ambushed, you are attacked by a huge crowd of enemies, and all you have is a lot of knives! Throw knives at your aims, eliminate them one by one and beat 'em all to survive!",
        img: "/GamingandCrypto/hit mater 3d.png",
        link: "https://play.google.com/store/apps/details?id=com.hit.master",
        bgClass: "bg-white",
        textLeft: false
    },
    {
        id: 4,
        titleRed: "Cooking Team -",
        titleBlack: "Chef's Roger Restaurant Games",
        description: "COOKING and SERVING delicious meals in Chef's Jobs will help you BUILD and DECORATE your own RESTAURANT. Help Chef Roger decorate and open the new restaurant he dreamed of since childhood. You will go through incredible adventures, a beautiful story and an incredible amount of Cooking games with Many Levels. Meet beautiful characters with great stories, which will guide you throughout this restaurant game and help you achieve your goal and open your own business.",
        img: "/GamingandCrypto/cooking team.png",
        link: "https://apps.apple.com/in/app/cooking-team-restaurant-games/id1522265683?l=hi",
        bgClass: "bg-[#f8f9fa]",
        textLeft: true
    },
    {
        id: 5,
        titleRed: "Farm Island -",
        titleBlack: " Family Journey",
        description: "Tending a garden is surely the best way to spend your free time. Travel to a small paradise island, a beautiful farm with a view to a calm bay awaits you. Spend christmas at your farm! Build your own happy village, become a farmer! Grow a variety of crops on your farm: hay, corn, vegetables, flowers and lots of exotic fruit. Orange, mango, pineapple, carambola - you name it! Harvest delicious crops every day! Use your harvest to craft dozens of different treats. We've got all the recipes you need: lollipop, cookie, birthday cake and much more. Kids love it! Then sell your goods to a nearby township and friendly neighbors. It's a great opportunity for business!",
        img: "/GamingandCrypto/farm paradise.png",
        link: "https://kryosssoftech.org/Gaming%20Works.php",
        bgClass: "bg-white",
        textLeft: false
    },
    {
        id: 6,
        titleRed: "Battlepalooza-",
        titleBlack: "Free PvP Arena Battle Royale",
        description: "Battlepalooza! A digital game show in the form of a battle royale, where real-world cities are your arenas. Compete in real-time against live contestants from around the world for valuable prizes. Grab as many coins as you can in the battleground without getting fragged. Be the last of the 24 contestants to survive to take home the big loot! Battlepalooza is designed for players of all skill levels, but some strategic thinking and a little bit of luck will get you far.",
        img: "/GamingandCrypto/battleplao.png",
        link: "https://play.google.com/store/apps/details?id=com.battlegrounds.battleroyale.fortbattle.ffgames.offlinegames.crazygames.ff&hl=en_IN",
        bgClass: "bg-[#f8f9fa]",
        textLeft: true
    }
];

const GamingWorks = () => {
    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">

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
                    <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">Gaming <span className="text-orange-500">Works</span></h1>
                    <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto text-gray-200">
                        Immerse yourself in our collection of engaging mobile and PC games, from RPG adventures to action-packed battle arenas.
                    </p>
                </motion.div>
            </section>

            {/* 2. Breadcrumb / Page Routing Section */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <a href="/works" className="hover:text-orange-500 transition-colors duration-300">Gaming & Crypto</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">Gaming Works</span>
                </div>
            </section>

            {/* 3. Portfolio Projects List (Alternating View) */}
            <section className="pt-16 md:pt-24 bg-white relative z-10 w-full mb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4"
                        >
                            Our <span className="text-orange-500">Gaming</span> Portfolio
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                </div>

                <div className="w-full flex flex-col">
                    {gamingData.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <React.Fragment key={project.id}>
                                <div className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-orange-50'}`}>
                                    <div className={`container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                        
                                        {/* Image Box */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="w-full lg:w-1/2 flex justify-center items-center relative drop-shadow-2xl"
                                        >
                                            <img
                                                src={project.img}
                                                alt={project.titleRed}
                                                className="max-h-[500px] max-w-full object-contain hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </motion.div>

                                        {/* Content Box */}
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6 }}
                                            className="w-full lg:w-1/2 flex flex-col justify-center z-20"
                                        >
                                            <h3 className="text-2xl md:text-3xl font-medium text-black mb-6 leading-tight hover:text-orange-600 transition-colors duration-300">
                                                <span className="text-red-500">{project.titleRed}</span>
                                                <span className="text-gray-800">{project.titleBlack}</span>
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
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
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </section>

            {/* Stats Counter Section */}
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
                            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">5+</h3>
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

export default GamingWorks;