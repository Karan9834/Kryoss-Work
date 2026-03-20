import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  ShoppingBag, 
  PlayCircle, 
  Utensils, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Globe,
  Settings,
  Users
} from 'lucide-react';

// Import Assets
import vcitaImg from '../../../assets/works/vcita.png';
import samayaRoomsImg from '../../../assets/works/samaya_rooms.png';
import flyinImg from '../../../assets/works/flyin.png';
import shipatozImg from '../../../assets/works/shipatoz.png';
import taxiguruImg from '../../../assets/works/taxiguru.png';
import shipoxImg from '../../../assets/works/shipox.png';
import oyebusyImg from '../../../assets/works/oyebusy.png';
import study24x7Img from '../../../assets/works/study24x7.png';
import twentyFourTaskImg from '../../../assets/works/twenty_four_task.png';
import classklapImg from '../../../assets/works/classklap.png';
import smartkeedaImg from '../../../assets/works/smartkeeda.png';
import tutellusImg from '../../../assets/works/tutellus.png';
import studynitiImg from '../../../assets/works/studyniti.png';
import schoolDiaryImg from '../../../assets/works/school_diary.png';
import skoolbeepImg from '../../../assets/works/skoolbeep.png';
import pacerImg from '../../../assets/works/pacer.png';
import myUpcharImg from '../../../assets/works/myupchar.png';
import truemedsImg from '../../../assets/works/truemeds.png';
import fitifyImg from '../../../assets/works/fitify.png';
import nhCareImg from '../../../assets/works/nh_care.png';
import amwellImg from '../../../assets/works/amwell.png';
import adoraweImg from '../../../assets/works/adorawe.png';
import cartlowImg from '../../../assets/works/cartlow.png';
import jazpImg from '../../../assets/works/jazp.png';
import geekbuyingImg from '../../../assets/works/geekbuying.png';
import chinaGadgetsImg from '../../../assets/works/china_gadgets.png';
import runwaysaleImg from '../../../assets/works/runwaysale.png';
import farfetchImg from '../../../assets/works/farfetch.png';
import watchoImg from '../../../assets/works/watcho.png';
import docubayImg from '../../../assets/works/docubay.png';
import hilalplayImg from '../../../assets/works/hilalplay.png';
import kinddaImg from '../../../assets/works/kindda.png';
import vidolImg from '../../../assets/works/vidol.png';
import avemartImg from '../../../assets/works/avemart.png';
import kifayatImg from '../../../assets/works/kifayat.png';
import untappdImg from '../../../assets/works/untappd.png';
import eatikoImg from '../../../assets/works/eatiko.png';
import heritagetuchImg from '../../../assets/works/heritagetuch.png';
import meatigoImg from '../../../assets/works/meatigo.png';
import groceryfactoryImg from '../../../assets/works/groceryfactory.png';
import foodmazoneImg from '../../../assets/works/foodmazone.png';
import advinceImg from '../../../assets/works/advince.png';
import kryossHrImg from '../../../assets/works/kryoss_hr.png';
import jtAssociatesImg from '../../../assets/works/jt_associates.png';
import isayorganicImg from '../../../assets/works/isayorganic.png';
import hawkhireImg from '../../../assets/works/hawkhire.png';
import v3eventsImg from '../../../assets/works/v3events.png';

const WebsitesWorks = () => {
    const categories = [
        { name: 'Business', icon: <Briefcase size={18} /> },
        { name: 'Education', icon: <GraduationCap size={18} /> },
        { name: 'Healthcare', icon: <Stethoscope size={18} /> },
        { name: 'E-Commerce', icon: <ShoppingBag size={18} /> },
        { name: 'Entertainment', icon: <PlayCircle size={18} /> },
        { name: 'Food & Drinks', icon: <Utensils size={18} /> },
        { name: 'Others', icon: <Layers size={18} /> }
    ];

    const [activeCategory, setActiveCategory] = useState('Business');

    const worksData = {
        'Business': [
            {
                title: 'vcita CRM',
                description: 'All-in-one business management and client engagement solution for small businesses. Features include booking, billing, marketing, and client management to help SMEs remain competitive in a digital-first economy.',
                stats: 'Empowering 50k+ SMEs globally',
                tags: ['CRM', 'Management', 'SaaS'],
                image: vcitaImg
            },
            {
                title: 'Samaya Rooms: Stay with Hotel Booking',
                description: 'A trusted Hotel Chain Company platform founded in 2020. Samaya Rooms has grown from a dutch start-up to a leading Hotel Chain Company providing seamless online bookings.',
                stats: 'Fastest-growing Hotel Chain in India',
                tags: ['Hospitality', 'Hotel Booking', 'Marketplace'],
                image: samayaRoomsImg
            },
            {
                title: 'Flyin.com - Flights, Hotels & Travel',
                description: 'A massive travel booking portal offering deals for 450 airlines and over 600,000 hotels worldwide. Providing easy, secure, and variety-driven booking experiences.',
                stats: 'Integrated with 450+ Airlines',
                tags: ['Travel', 'Flights', 'Booking'],
                image: flyinImg
            },
            {
                title: 'Shipatoz - Hire Mini Trucks & Bikes',
                description: 'Leading logistics marketplace in Andhra Pradesh & Telangana for intracity logistics. Offers the fastest, cheapest and easiest way to transport goods.',
                stats: 'Leading Logistics in AP & Telangana',
                tags: ['Logistics', 'Fleet Management', 'Deliveries'],
                image: shipatozImg
            },
            {
                title: 'TaxiGuru',
                description: 'The largest Inter-city taxi service in India, offering one-way and round-trip outstation travels with highly trained drivers and transparent pricing.',
                stats: 'Largest Inter-city Taxi Service',
                tags: ['Taxi Service', 'Mobility', 'India-wide'],
                image: taxiguruImg
            },
            {
                title: 'Shipox Customer - Book a Courier',
                description: 'A unique way to deliver packages from UAE to global destinations. Safe and convenient way to pick up and deliver parcels, documents, and checks.',
                stats: 'Global Delivery from UAE',
                tags: ['Courier', 'Logistics', 'Global'],
                image: shipoxImg
            },
            {
                title: 'OyeBusy - Home Services Platform',
                description: 'India’s best online platform for providing top-notch home services relating to maintenance, repair, and more delivered to your doorstep.',
                stats: 'Home Services, Maintenance, Repair',
                tags: ['Home Services', 'Maintenance', 'On-Demand'],
                image: oyebusyImg
            },
            {
                title: '24Task - Hire Freelancers',
                description: 'A reputed freelancing platform that allows employers to post multiple jobs and details at once and collaborate with the freelancers in no time.',
                stats: 'Employers App - Hire Top Talents',
                tags: ['Freelancing', 'Staffing', 'SME Hub'],
                image: twentyFourTaskImg
            }
        ],
        'Education': [
            {
                title: 'ClassKlap - Personalised Learning',
                description: 'An Ed-Tech organisation providing personalised learning solutions. Complements classroom learning through scientifically designed personalised learning at home.',
                stats: 'Integrated Online Live Classes',
                tags: ['EdTech', 'Personalized Learning', 'SaaS'],
                image: classklapImg
            },
            {
                title: 'Study24x7 - Social Learning Network',
                description: 'Enabling collaborative learning driven by interactive communities in real time. Bringing educators and learners together by breaking geographical barriers.',
                stats: 'Collaborative Learning Communities',
                tags: ['Social Learning', 'Community', 'Real-time'],
                image: study24x7Img
            },
            {
                title: 'Smartkeeda - Question Bank',
                description: 'Most updated Question Bank for major competitive exams including IBPS, SBI, SSC, and UPSC. Provides study materials and cracker quizzes.',
                stats: 'Competitive Exam Portal',
                tags: ['Question Bank', 'Exam Prep', 'India-wide'],
                image: smartkeedaImg
            },
            {
                title: 'Tutellus - Cursos Online',
                description: 'Hispanic Tutellus is the world\'s largest online education platform with 3 million users across 160 countries offering over 70,000 video courses.',
                stats: 'World\'s Largest Hispanic platform',
                tags: ['Global Education', 'LMS', 'Spanish Market'],
                image: tutellusImg
            },
            {
                title: 'StudyNiti - Exam Preparation',
                description: 'Online Education Portal specializing in test series for banking and Insurance sectors. Comprehensive materials for effective cracking of competitive exams.',
                stats: 'Banking & Insurance Exam Prep',
                tags: ['Test Series', 'Banking', 'E-Learning'],
                image: studynitiImg
            },
            {
                title: 'School Diary - Communication Platform',
                description: 'A mobile-first platform for parent updates, daycare updates, and child safety monitoring. Improves productivity for 250+ schools worldwide.',
                stats: 'Monitored 250+ Schools Globally',
                tags: ['Child Safety', 'School Management', 'Mobile App'],
                image: schoolDiaryImg
            },
            {
                title: 'SkoolBeep - Holistic School App',
                description: 'Integrated communication platform combining diary, circulars, and SMS into a single app. Enables multimedia sharing and attendance tracking.',
                stats: 'Multimedia Communication Portal',
                tags: ['School ERP', 'Tracking', 'Communication'],
                image: skoolbeepImg
            }
        ],
        'Healthcare': [
            {
                title: 'Pedometer Pacer - Fitness Tracker',
                description: 'Helping people get active through accurate activity tracking and community features. A global community of walkers and runners staying healthy together.',
                stats: 'Community of Millions Globally',
                tags: ['Fitness', 'Activity Tracking', 'HealthTech'],
                image: pacerImg
            },
            {
                title: 'myUpchar - Online Consultation',
                description: 'Get 24x7 online consultation from 50,000+ experienced doctors across 30+ specialties. Connect with trusted medical experts within 10 minutes.',
                stats: '24x7 Expert Doctor Access',
                tags: ['Consultation', 'Telemedicine', 'Experts'],
                image: myUpcharImg
            },
            {
                title: 'Truemeds - Trusted Medicine Delivery',
                description: 'India\'s 1st e-Pharmacy guaranteeing medicine cost reduction up to 72% using proprietary Triple Check flow and AI-based algorithms.',
                stats: 'Reduce Medicine Costs by 72%',
                tags: ['e-Pharmacy', 'Medicine Delivery', 'AI-Check'],
                image: truemedsImg
            },
            {
                title: 'Fitify: Workout & Training Plans',
                description: 'Ultimate full body workout app to lose weight and build muscle. Over 900 exercises for fresh, fun, and effective anytime routines.',
                stats: '900+ Full Body Exercises',
                tags: ['Workouts', 'Training', 'No-Equipment'],
                image: fitifyImg
            },
            {
                title: 'NH Care - Book Appointments online',
                description: 'Book appointments for video consultations and in-hospital visits. Find doctors by specialty or hospital and attach reports from home.',
                stats: 'Video & In-Hospital Booking',
                tags: ['Appointment Booking', 'Healthcare ERP', 'Digital Care'],
                image: nhCareImg
            },
            {
                title: 'Amwell: Doctor Visits 24/7',
                description: 'Connect to board-certified medical providers 24/7 through high-quality telemedicine. Bringing healthcare home for faster feel-better results.',
                stats: 'Telehealth appointments 24/7',
                tags: ['Telemedicine', 'On-Demand', 'Certified Doctors'],
                image: amwellImg
            }
        ],
        'E-Commerce': [
            {
                title: 'Adorawe - Fashion Shopping Mall',
                description: 'Stylish destination designed for Saudi Arabia, UAE, and Gulf region. 500+ daily new arrivals in casual wear and dresses at affordable prices.',
                stats: 'Leading Fashion App in MENA',
                tags: ['Fashion', 'Retail', 'International'],
                image: adoraweImg
            },
            {
                title: 'Cartlow - Smarter Way To Shop',
                description: 'Leading online destination for Pre-owned, Open-box and Clearance products in UAE. Re-commerce initiative focusing on sustainability and savings.',
                stats: 'Save Environment, Save Money',
                tags: ['Re-Commerce', 'Sustainability', 'Open-box'],
                image: cartlowImg
            },
            {
                title: 'Jazp.com - Premier Online Store',
                description: 'Leading platform in UAE, Qatar and KSA. Vast product mix including electronics and perfumes with accessible quality selections.',
                stats: 'Leading Store in Gulf Region',
                tags: ['Electronics', 'Lifestyle', 'Marketplace'],
                image: jazpImg
            },
            {
                title: 'GeekBuying - Make Life Smart',
                description: '20,000+ products across electronics and gadgets. Easy home shopping with global delivery and specialized tech support.',
                stats: '20,000+ Smart Tech Products',
                tags: ['Gadgets', 'Smart Home', 'Global e-Shop'],
                image: geekbuyingImg
            },
            {
                title: 'China Gadgets – The Gadget App',
                description: 'Comprehensive review and comparison platform for the web\'s craziest gadgets. Real-time price comparisons and testing for tech seekers.',
                stats: 'Reviews & Price Comparison',
                tags: ['Gadget Reviews', 'Comparison', 'Tech Blog'],
                image: chinaGadgetsImg
            },
            {
                title: 'RunwaySale - Designer Label Access',
                description: 'Biggest South African online shopping society offering designer labels at up to 70% off through daily private flash sale events.',
                stats: 'Up to 70% off Designer Labels',
                tags: ['Luxury', 'Flash Sales', 'Apparel'],
                image: runwaysaleImg
            },
            {
                title: 'FARFETCH — Luxury Fashion',
                description: 'Global destination for modern luxury. Shop over 100,000 fashion designer pieces expertly curated for a premium shopping experience.',
                stats: '100,000+ Luxury Fashion Pieces',
                tags: ['Luxury', 'Global Reach', 'Premium Retail'],
                image: farfetchImg
            }
        ],
        'Entertainment': [
            {
                title: 'Watcho - Originals & Spotlight',
                description: 'Go-to video streaming app for Originals showcasing Hindi web series. Regional programmes in Telugu, Tamil, and Kannada on spotlight.',
                stats: 'Watch Originals & Live TV',
                tags: ['OTT', 'Streaming', 'Web Series'],
                image: watchoImg
            },
            {
                title: 'DocuBay - Global Documentaries',
                description: 'Award-winning documentaries on crime, nature, and science. Ever-growing collection across HD categories with unbiased global insight.',
                stats: 'Award-Winning Documentaries',
                tags: ['Documentaries', 'Education', 'Video-on-Demand'],
                image: docubayImg
            },
            {
                title: 'HilalPlay - Family Entertainment',
                description: 'Turkish, Arabic and International shows & films selected to be Family Friendly. Meeting all family standards without inappropriate content.',
                stats: 'Family-Friendly Content',
                tags: ['MENA OTT', 'Turkish Series', 'Clean Stream'],
                image: hilalplayImg
            },
            {
                title: 'Kindda - Viral Short Videos',
                description: 'Rewarding system with special video effects and cool filters. Go viral with brand-new editing tools and become a Kindda Star.',
                stats: 'Go Viral with Kindda Star',
                tags: ['Social Media', 'Short-Video', 'Sharing'],
                image: kinddaImg
            },
            {
                title: 'Vidol - The Best Asia Series',
                description: 'Hottest newest SET dramas and favorite shows. Stream the SET Original spirit anytime from your phone and other devices.',
                stats: 'Hottest Asian Dramas',
                tags: ['Asian Content', 'Dramas', 'International OTT'],
                image: vidolImg
            }
        ],
        'Food & Drinks': [
            {
                title: 'AVEMART - Fresh Fruits & Veggies',
                description: 'Online portal for Affordable Fresh Fruits and Vegetables delivered to your doorstep. Aiming to make customer lifestyle simpler with easy clicks.',
                stats: 'Affordable Fresh Produce',
                tags: ['Grocery', 'Fresh Delivery', 'Agriculture'],
                image: avemartImg
            },
            {
                title: 'Kifayat - Online Supermarket',
                description: 'Well known Nagpur online supermarket covering everyday needs. Shop over 20,000+ products ranging from groceries to fresh vegetables.',
                stats: 'Nagpur\'s #1 Online Store',
                tags: ['Supermarket', 'Regional', 'Grocery'],
                image: kifayatImg
            },
            {
                title: 'Untappd - Discover Beer',
                description: 'Discover and share great beers, breweries, and venues with friends. Earn badges for exploring styles and countries while tracking favorites.',
                stats: 'Social Beer Discovery',
                tags: ['Social Network', 'Alcohol', 'Reviews'],
                image: untappdImg
            },
            {
                title: 'Eatiko - Food Delivery Partner',
                description: 'Eat whatever you like, whenever you want. Whether breakfast dosa or heavenly sadhya, your one-stop partner for restaurant discovery.',
                stats: 'Fast Food Delivery',
                tags: ['Food Delivery', 'Restaurants', 'Kerala Market'],
                image: eatikoImg
            },
            {
                title: 'Heritage TUCH - Milk Delivery',
                description: 'Hyderabad\'s online solution for farm-fresh milk and dairy. Recently added flavored milk, ice-creams, and cheese for your summer delight.',
                stats: 'Daily Fresh Dairy',
                tags: ['Milk Delivery', 'Daily Needs', 'Dairy'],
                image: heritagetuchImg
            },
            {
                title: 'Meatigo – Fresh Meats Platform',
                description: 'High quality meats from trusted farms using meticulous preparation. Scientific approach to vacuum packing and vacuum sealing technology.',
                stats: 'Vacuum-Packed Fresh Meat',
                tags: ['Meats', 'Premium Delivery', 'Direct-to-Home'],
                image: meatigoImg
            },
            {
                title: 'GroceryFactory - DTC Brand',
                description: 'India’s 1st Full Stack DTC Brand for FMCG. Products meticulously selected and processed to deliver perfect standards within 24 hours.',
                stats: 'Direct-to-Consumer Grocery',
                tags: ['DTC', 'Full-Stack', 'FMCG'],
                image: groceryfactoryImg
            },
            {
                title: 'Foodmazone - Online Supermarket',
                description: 'Kerala’s largest online food store with 18,000+ products across 100 brands. Everything from rice to personal care in one place.',
                stats: 'Kerala\'s Largest Supermarket',
                tags: ['Large Inventory', 'Local Leader', 'Convenience'],
                image: foodmazoneImg
            }
        ],
        'Others': [
            {
                title: 'Advince Technology - One Stop Solution',
                description: 'Hyderabad-based business solution offering Fin-Tech, Accounting, and Cloud services. CEO Ashutosh Kar (CA/CPA) leads this multi-disciplinary giant.',
                stats: 'Multi-Disciplinary IT Division',
                tags: ['FinTech', 'Accounting', 'Cloud Services'],
                image: advinceImg
            },
            {
                title: 'Kryoss HR Services - Global Recruitment',
                description: 'Setting new benchmarks in talent acquisition through conceptualized services. Subsidiary of Kryoss Group focused on pioneer organized recruitment.',
                stats: 'Talent Acquisition Pioneer',
                tags: ['HR Services', 'Recruitment', 'Enterprise'],
                image: kryossHrImg
            },
            {
                title: 'JeetuThareja & Associates - Chartered Accountants',
                description: 'Gurgaon-based firm offering Accounting, Auditing, and Direct Tax consultancy. A trusted roof for start-up and financial regulatory compliances.',
                stats: 'Financial Advisory & Audit',
                tags: ['Legal', 'Audit', 'Tax Consultation'],
                image: jtAssociatesImg
            },
            {
                title: 'I Say Organic - Sustainable Enterprise',
                description: 'Connecting sustainable farmers with health-conscious customers. Supporting Farmers to grow safe food without toxic chemicals or pesticides.',
                stats: 'Social Enterprise for Organic Food',
                tags: ['Sustainable', 'Organic', 'Agri-Tech'],
                image: isayorganicImg
            },
            {
                title: 'HawkHire HR Solutions',
                description: 'Innovative support in all areas of associated recruitment crossing industry sectors. Helping companies meet complex business environment challenges.',
                stats: 'Innovative Recruitment Lifecycle',
                tags: ['Staffing', 'Client Support', 'Lifecycle Management'],
                image: hawkhireImg
            },
            {
                title: 'V3 Events & Entertainments',
                description: 'Delhi & Mumbai based event management and wedding planning company. Dedicated to providing a wide assortment of services for live shows, star nights, and corporate launches.',
                stats: 'Premier Wedding & Event Planner',
                tags: ['Events', 'Entertainment', 'Celebrity shows'],
                image: v3eventsImg
            }
        ]
    };

    const stats = [
        { value: '750', label: 'Project Delivered', icon: <CheckCircle className="text-orange-500" /> },
        { value: '150', label: 'Development Staff', icon: <Briefcase className="text-orange-500" /> },
        { value: '10', label: 'Years of Experience', icon: <Star className="text-orange-500" /> },
        { value: '450', label: 'Satisfied Clients', icon: <CheckCircle className="text-orange-500" /> }
    ];

    const testimonials = [
        {
            text: "Kryoss Softech proved to be a professional service provider from the outset. We appreciate their proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels. We know we can always rely on Kryoss Softech various competencies when our clients require quality software which would facilitate their business success.",
            author: "Rikki Farr",
            title: "Chairman at Audio Design Experts"
        },
        {
            text: "Kryoss has delivered all our project needs well within deadlines. They works as your in-house team, we highly recommend them.",
            author: "Bill Dinklemann",
            title: "Van Andel Education Institute"
        },
        {
            text: "Atomic Object exhibited similar traits as our company. They were about the same size and had a wealth of experience based on past projects. We liked their leadership team and loved their presentation. … They took the time to understand who we were.",
            author: "CEO",
            title: "Drug Testing Administrator"
        },
        {
            text: "We love working with Kryoss, the company has been very transparent throughout the entire development process.",
            author: "Sam Powell",
            title: "Sam Co"
        }
    ];

    const offices = [
        {
            country: "India",
            city: "Gurgaon",
            address: "1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India",
            phone: "+0124-4001495",
            email: "Info@kryosssoftech.org"
        },
        {
            country: "USA",
            city: "Gurgaon",
            address: "348-352, Spaze IT Park , Sec-48, Gurgaon-122018, Haryana , India",
            phone: "+0124-4001298",
            email: "Info@kryosssoftech.org"
        },
        {
            country: "India",
            city: "Pune",
            address: "C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune – 411020 Maharashtra, India.",
            phone: "+91-020-411208",
            email: "info@kryosssoftech.org"
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            {/* Hero Section */}
            <header className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16 animate-fade-in">
                <div className="relative inline-block mb-3 px-4 py-1.5 rounded-full border border-orange-100 bg-orange-50/50">
                    <span className="text-sm font-bold tracking-widest uppercase text-orange-600">Our Works</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-gray-950 mb-8 leading-none tracking-tight">
                    Our <span className="text-orange-500 italic">Portfolio</span> Showcase
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                    Delivering cutting-edge solutions across industries. Explore our diverse portfolio of enterprise systems and client engagement platforms.
                </p>
            </header>

            {/* Category Navbar */}
            <div className="sticky top-[86px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 mb-20 shadow-sm overflow-x-auto no-scrollbar">
                <div className="max-w-max mx-auto px-6 lg:px-12 flex items-center justify-center gap-2 py-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 transform active:scale-95 ${
                                activeCategory === cat.name
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 translate-y-[-2px]'
                                    : 'text-gray-500 hover:text-orange-500 hover:bg-orange-50'
                            }`}
                        >
                            {cat.icon}
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filtered Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-12 mb-40">
                <div className="flex flex-col gap-24 md:gap-40">
                    {worksData[activeCategory]?.map((project, idx) => (
                        <div 
                            key={idx}
                            className={`flex flex-col gap-10 md:gap-20 items-center ${
                                idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                            }`}
                        >
                            {/* Project Image Side */}
                            <div className="w-full md:w-1/2 group">
                                <div className="h-64 md:h-[450px] overflow-hidden rounded-[40px] border border-gray-100/50 shadow-2xl shadow-gray-200/50 relative bg-gray-50">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-contain" 
                                    />
                                </div>
                            </div>
                            
                            {/* Project Content Side */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-8 bg-orange-500"></span>
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Case Study 0{idx + 1}</span>
                                </div>
                                
                                <h3 className="text-3xl md:text-5xl font-black text-gray-950 mb-6 leading-tight tracking-tight">
                                    {project.title}
                                </h3>
                                
                                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tags?.map((tag) => (
                                        <span key={tag} className="px-5 py-2 rounded-xl bg-gray-50 border border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-10 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-gray-950 font-black text-sm uppercase tracking-wider group cursor-pointer hover:text-orange-500 transition-colors">
                                        <span className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                                            <CheckCircle size={18} />
                                        </span>
                                        {project.stats}
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-300 hover:text-orange-500 transition-all">
                                        View Project <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Stats Section */}
            <section className="bg-gray-50 py-32 mb-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center p-12 bg-white rounded-[50px] border border-gray-100 shadow-xl shadow-gray-200/20 hover:scale-105 transition-all">
                                <div className="w-16 h-16 rounded-3xl bg-orange-50 flex items-center justify-center mx-auto mb-8 transform -rotate-12">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-black text-gray-950 mb-3 tracking-tighter">{stat.value}</div>
                                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.25em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-40">
                <div className="text-center mb-24">
                    <span className="text-xs font-black uppercase tracking-widest text-orange-500 mb-4 block">Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-955 mb-4">Client Testimonials</h2>
                    <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-12 bg-white border border-gray-100 rounded-[50px] shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute top-0 right-0 p-8 text-orange-50/50 scale-150 rotate-12 group-hover:text-orange-100/50 transition-all">
                                <Layers size={180} />
                            </div>
                            <div className="flex gap-1 mb-8">
                                {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-orange-400 text-orange-400" />)}
                            </div>
                            <p className="text-lg text-gray-700 font-medium leading-[1.8] mb-12 relative z-10 italic">"{t.text}"</p>
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-xl">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-950">{t.author}</h4>
                                    <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">{t.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="bg-gray-950 py-40 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] -mr-[400px] -mt-[400px]"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -ml-[400px] -mb-[400px]"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-orange-500 bg-orange-500/10">
                                <span className="text-sm font-bold tracking-widest uppercase text-orange-500 tracking-tighter">Contact Us</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
                                Lets Discuss Your <span className="text-orange-500">Requirement!</span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-12">
                                We guarantee to get back to you within a business day. Experience the Kryoss standard of excellence.
                            </p>
                            
                            <div className="space-y-10">
                                <div className="flex items-start gap-6 p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all group">
                                    <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-xl shadow-orange-500/20">
                                        <MessageSquare size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-3 text-white">Got a project in mind?</h4>
                                        <p className="text-gray-400 leading-relaxed font-medium">
                                            We would love to hear how we can bring your possibilities to reality through technology and give away 2hrs of free consulting. So call us now..
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <form className="space-y-6 bg-white/5 p-10 rounded-[50px] border border-white/10 backdrop-blur-sm shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Name*" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600 text-white" />
                                    <input type="email" placeholder="E-mail*" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600 text-white" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Phone No" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600 text-white" />
                                    <input type="text" placeholder="Subject*" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600 text-white" />
                                </div>
                                <textarea rows="4" placeholder="Your Message*" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600 resize-none text-white"></textarea>
                                
                                <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                                    <span className="font-bold text-lg text-white">Anti-Spam Verification: 7 + 5 = ?</span>
                                    <input type="text" placeholder="Answer" className="w-full sm:w-32 bg-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 font-bold text-center text-white" />
                                </div>
                                
                                <button className="w-full py-6 bg-orange-500 text-white rounded-[25px] font-black uppercase tracking-[0.3em] text-sm hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/40 active:scale-95 flex items-center justify-center gap-3">
                                    Submit Requirement <Send size={20} />
                                </button>
                                
                                <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-6">
                                    Note: We Respect Your Privacy! Details never shared for marketing.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reach Us & Global Offices */}
            <section className="bg-white py-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="w-full lg:w-2/5">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-10 pl-6 border-l-4 border-orange-500 h-6 flex items-center">
                                Reach Us
                            </h3>
                            <div className="flex flex-col gap-8">
                                <div className="p-8 bg-gray-50 rounded-[30px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all group flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all">
                                        <Mail className="text-orange-500 group-hover:text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Email Address</div>
                                        <div className="font-bold text-lg text-gray-950">Info@kryosssoftech.org</div>
                                    </div>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-[30px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all group flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all">
                                        <Phone className="text-orange-500 group-hover:text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Phone Number</div>
                                        <div className="font-bold text-lg text-gray-950">+0124-4001495</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-10 pl-6 border-l-4 border-orange-500 h-6 flex items-center">
                                Global Offices
                            </h3>
                            <div className="space-y-8">
                                {offices.map((office, idx) => (
                                    <div key={idx} className="p-8 bg-gray-50 rounded-[30px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all relative overflow-hidden group">
                                         <div className="absolute top-0 right-0 p-8 text-orange-500/5 scale-[2.5] -mr-8 -mt-8 group-hover:scale-[3] transition-transform duration-700">
                                            <MapPin />
                                         </div>
                                         <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div className="max-w-md">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">{office.country}</span>
                                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{office.city}</span>
                                                </div>
                                                <p className="text-base text-gray-950 font-bold leading-snug">{office.address}</p>
                                            </div>
                                            <div className="flex flex-col gap-3 shrink-0">
                                                <div className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                                                    <span className="w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-orange-500"><Phone size={12} /></span> 
                                                    P: {office.phone}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                                                    <span className="w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-orange-500"><Mail size={12} /></span> 
                                                    E: {office.email}
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsitesWorks;
