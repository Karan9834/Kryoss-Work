import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
const newsData = [
  {
    id: 1,
    titleRed: "The Newsmen",
    titleBlack: " - Flat and Flatmates, Rooms, Roommate, PG",
    description: "The Newsmen delivers breaking news updates and the latest news stories from all across the globe. Find daily news with the real-life stories around you in short and crisp headlines.The Newsmen app endeavours to be the one-stop solution for the curious youth, to stay updated on trending news and stories that are easy to consume and share across. Give voice to your opinions and put out your thoughts through our group discussion panel.",
    img: "https://kryosssoftech.org/icons/news/newsmen.png",
    link: "https://thenewsmen.co.in/",
    bgClass: "bg-white",
    textLeft: false
  },
  {
    id: 2,
    titleRed: "AnyNews",
    titleBlack: "- The Best Regional News App",
    description: "Anynews App for latest story headlines, live updates, any news summaries, India, sports news, politics news, crime news, gossips about celebrities anywhere and anytime.Local News details: Be the first to get any instant local and latest any news updates around you and also trending news in your regional language.",
    img: "https://kryosssoftech.org/icons/news/Anynews.png",
    link: "https://play.google.com/store/apps/details?id=com.anyNews.anynews",
    bgClass: "bg-orange-50",
    textLeft: true
  },
  {
    id: 3,
    titleRed: "inkl:",
    titleBlack: " Read news without ads, clickbait or paywalls",
    description: "Welcome to inkl, the last news app you’ll ever download. We show you the world’s most interesting and important news, from sources you know and trust.Enjoy brilliant reporting and analyses from publishers you don't see on other news apps, like The Economist, Bloomberg, Financial Times, Foreign Policy, and 100+ others from around the world.",
    img: "https://kryosssoftech.org/icons/news/Inkl new.png",
    link: "https://play.google.com/store/apps/details?id=com.inkl.app",
    bgClass: "bg-orange-50",
    textLeft: false
  },
  {
    id: 4,
    titleRed: "Flym",
    titleBlack: " NewsReader",
    description: "Flym News Reader is a simple, modern, totally free (no ads) and opensource project which keeps you inform by fetching your websites/blogs and displaying them in a mobile-optimized way.",
    img: "https://kryosssoftech.org/icons/news/Flym.png",
    link: "https://play.google.com/store/games?hl=en_IN",
    bgClass: "bg-white",
    textLeft: true
  },
  {
    id: 5,
    titleRed: "Baby weaning",
    titleBlack: " and recipes",
    description: "Free unique week-by-week expert guide from leading parenting website MadeForMums featuring 193 daily recipes, meal planners and advice guides.Created in association with Heinz for Baby, this app is completely free. There are no hidden charges and all content below is included free of charge.Plus, all recipes, guides and tools found on this app can be used offline, so once you have downloaded the app you can use it anywhere!",
    img: "https://kryosssoftech.org/icons/news/Weaning.png",
    link: "https://www.nhs.uk/best-start-in-life/baby/weaning/",
    bgClass: "bg-orange-50",
    textLeft: false
  }
];

const NewsMagazine = () => {
  return (
    <div className="w-full relative font-sans overflow-hidden">

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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">News & Magazine <span className="text-orange-500">Works</span></h1>
        </motion.div>
      </section>

      {/* 2. Breadcrumb / Page Routing Section */}
      <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
          <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <a href="/works" className="hover:text-orange-500 transition-colors duration-300">Our Works</a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-orange-500">News & Magazine Works</span>
        </div>
      </section>

      {/* 3. Portfolio Projects List (Alternating View) */}
      <section className="w-full flex flex-col">
        {newsData.map((project, index) => (
          <div key={project.id} className={`w-full py-16 md:py-24 ${project.bgClass}`}>
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
                    <a href={project.link} className="text-red-500 font-semibold ml-2 hover:underline">
                      .....More Details
                    </a>
                  </p>

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
                    className="w-80 md:w-96 lg:w-[420px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Stats Counter Section */}
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

      {/* 5. Testimonials Section */}
      

      {/* 6. Contact Section */}
      

    
            {/* New Added Sections */}
            <Testimonial theme="orange" />
            <Industries theme={{ bg: "bg-[#fff3eb]", primary: "text-orange-500", iconBg: "bg-orange-100", iconColor: "text-orange-500" }} />
            <OurWork theme={{ primary: "text-orange-500", accent: "bg-orange-500" }} />
            <ContactUs theme="orange" />

        </div>
  );
};

export default NewsMagazine;

