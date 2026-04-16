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
    Users,
    ChevronRight,
    Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Components
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

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

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
                image: vcitaImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.vcita.mobile', type: 'playstore' },
                    { href: 'https://www.vcita.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Samaya Rooms: Stay with Hotel Booking',
                description: 'A trusted Hotel Chain Company platform founded in 2020. Samaya Rooms has grown from a dutch start-up to a leading Hotel Chain Company providing seamless online bookings.',
                stats: 'Fastest-growing Hotel Chain in India',
                tags: ['Hospitality', 'Hotel Booking', 'Marketplace'],
                image: samayaRoomsImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.samayarooms.user', type: 'playstore' },
                    { href: 'https://www.samayarooms.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Flyin.com - Flights, Hotels & Travel',
                description: 'A massive travel booking portal offering deals for 450 airlines and over 600,000 hotels worldwide. Providing easy, secure, and variety-driven booking experiences.',
                stats: 'Integrated with 450+ Airlines',
                tags: ['Travel', 'Flights', 'Booking'],
                image: flyinImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.flyin.bookings', type: 'playstore' },
                    { href: 'https://www.flyin.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Shipatoz - Hire Mini Trucks & Bikes',
                description: 'Leading logistics marketplace in Andhra Pradesh & Telangana for intracity logistics. Offers the fastest, cheapest and easiest way to transport goods.',
                stats: 'Leading Logistics in AP & Telangana',
                tags: ['Logistics', 'Fleet Management', 'Deliveries'],
                image: shipatozImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.shipatoz.customer', type: 'playstore' },
                    { href: 'http://shipatoz.com/', type: 'weblink' }
                ]
            },
            {
                title: 'TaxiGuru',
                description: 'The largest Inter-city taxi service in India, offering one-way and round-trip outstation travels with highly trained drivers and transparent pricing.',
                stats: 'Largest Inter-city Taxi Service',
                tags: ['Taxi Service', 'Mobility', 'India-wide'],
                image: taxiguruImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.taxiguru.customer', type: 'playstore' },
                    { href: 'https://taxiguru.in/', type: 'weblink' }
                ]
            },
            {
                title: 'Shipox Customer - Book a Courier',
                description: 'A unique way to deliver packages from UAE to global destinations. Safe and convenient way to pick up and deliver parcels, documents, and checks.',
                stats: 'Global Delivery from UAE',
                tags: ['Courier', 'Logistics', 'Global'],
                image: shipoxImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.shipox.customer', type: 'playstore' },
                    { href: 'https://shipox.com/', type: 'weblink' }
                ]
            },
            {
                title: 'OyeBusy - Home Services Platform',
                description: 'India\'s best online platform for providing top-notch home services relating to maintenance, repair, and more delivered to your doorstep.',
                stats: 'Home Services, Maintenance, Repair',
                tags: ['Home Services', 'Maintenance', 'On-Demand'],
                image: oyebusyImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.oyebusy.servicedealer', type: 'playstore' },
                    { href: 'https://oyebusy.com/', type: 'weblink' }
                ]
            },
            {
                title: '24Task - Hire Freelancers',
                description: 'A reputed freelancing platform that allows employers to post multiple jobs and details at once and collaborate with the freelancers in no time.',
                stats: 'Employers App - Hire Top Talents',
                tags: ['Freelancing', 'Staffing', 'SME Hub'],
                image: twentyFourTaskImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.tfTask.android', type: 'playstore' },
                    { href: 'https://24task.com/', type: 'weblink' }
                ]
            }
        ],
        'Education': [
            {
                title: 'ClassKlap - Personalised Learning',
                description: 'An Ed-Tech organisation providing personalised learning solutions. Complements classroom learning through scientifically designed personalised learning at home.',
                stats: 'Integrated Online Live Classes',
                tags: ['EdTech', 'Personalized Learning', 'SaaS'],
                image: classklapImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.classklap.learning', type: 'playstore' },
                    { href: 'https://www.classklap.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Study24x7 - Social Learning Network',
                description: 'Enabling collaborative learning driven by interactive communities in real time. Bringing educators and learners together by breaking geographical barriers.',
                stats: 'Collaborative Learning Communities',
                tags: ['Social Learning', 'Community', 'Real-time'],
                image: study24x7Img,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.stdy24x7', type: 'playstore' },
                    { href: 'https://www.study24x7.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Smartkeeda - Question Bank',
                description: 'Most updated Question Bank for major competitive exams including IBPS, SBI, SSC, and UPSC. Provides study materials and cracker quizzes.',
                stats: 'Competitive Exam Portal',
                tags: ['Question Bank', 'Exam Prep', 'India-wide'],
                image: smartkeedaImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=smk.smartkeeda', type: 'playstore' },
                    { href: 'https://www.smartkeeda.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Tutellus - Cursos Online',
                description: 'Hispanic Tutellus is the world\'s largest online education platform with 3 million users across 160 countries offering over 70,000 video courses.',
                stats: 'World\'s Largest Hispanic platform',
                tags: ['Global Education', 'LMS', 'Spanish Market'],
                image: tutellusImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.tutellus.mobile', type: 'playstore' },
                    { href: 'https://www.tutellus.com/', type: 'weblink' }
                ]
            },
            {
                title: 'StudyNiti - Exam Preparation',
                description: 'Online Education Portal specializing in test series for banking and Insurance sectors. Comprehensive materials for effective cracking of competitive exams.',
                stats: 'Banking & Insurance Exam Prep',
                tags: ['Test Series', 'Banking', 'E-Learning'],
                image: studynitiImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=apps.studyniti.com', type: 'playstore' },
                    { href: 'https://www.studyniti.com/', type: 'weblink' }
                ]
            },
            {
                title: 'School Diary - Communication Platform',
                description: 'A mobile-first platform for parent updates, daycare updates, and child safety monitoring. Improves productivity for 250+ schools worldwide.',
                stats: 'Monitored 250+ Schools Globally',
                tags: ['Child Safety', 'School Management', 'Mobile App'],
                image: schoolDiaryImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.schooldiary', type: 'playstore' },
                    { href: 'https://schooldiary.me/', type: 'weblink' }
                ]
            },
            {
                title: 'SkoolBeep - Holistic School App',
                description: 'Integrated communication platform combining diary, circulars, and SMS into a single app. Enables multimedia sharing and attendance tracking.',
                stats: 'Multimedia Communication Portal',
                tags: ['School ERP', 'Tracking', 'Communication'],
                image: skoolbeepImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.skoolbeep', type: 'playstore' },
                    { href: 'https://www.skoolbeep.com/', type: 'weblink' }
                ]
            }
        ],
        'Healthcare': [
            {
                title: 'Pedometer Pacer - Fitness Tracker',
                description: 'Helping people get active through accurate activity tracking and community features. A global community of walkers and runners staying healthy together.',
                stats: 'Community of Millions Globally',
                tags: ['Fitness', 'Activity Tracking', 'HealthTech'],
                image: pacerImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=cc.pacer.androidapp', type: 'playstore' },
                    { href: 'https://www.mypacer.com/', type: 'weblink' }
                ]
            },
            {
                title: 'myUpchar - Online Consultation',
                description: 'Get 24x7 online consultation from 50,000+ experienced doctors across 30+ specialties. Connect with trusted medical experts within 10 minutes.',
                stats: '24x7 Expert Doctor Access',
                tags: ['Consultation', 'Telemedicine', 'Experts'],
                image: myUpcharImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.myupchar.user', type: 'playstore' },
                    { href: 'https://www.myupchar.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Truemeds - Trusted Medicine Delivery',
                description: 'India\'s 1st e-Pharmacy guaranteeing medicine cost reduction up to 72% using proprietary Triple Check flow and AI-based algorithms.',
                stats: 'Reduce Medicine Costs by 72%',
                tags: ['e-Pharmacy', 'Medicine Delivery', 'AI-Check'],
                image: truemedsImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.intellihealth.truemedsp', type: 'playstore' },
                    { href: 'https://www.truemeds.in/', type: 'weblink' }
                ]
            },
            {
                title: 'Fitify: Workout & Training Plans',
                description: 'Ultimate full body workout app to lose weight and build muscle. Over 900 exercises for fresh, fun, and effective anytime routines.',
                stats: '900+ Full Body Exercises',
                tags: ['Workouts', 'Training', 'No-Equipment'],
                image: fitifyImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.fitifyworkouts.bodyweight.workoutapp', type: 'playstore' },
                    { href: 'https://gofitify.com/', type: 'weblink' }
                ]
            },
            {
                title: 'NH Care - Book Appointments online',
                description: 'Book appointments for video consultations and in-hospital visits. Find doctors by specialty or hospital and attach reports from home.',
                stats: 'Video & In-Hospital Booking',
                tags: ['Appointment Booking', 'Healthcare ERP', 'Digital Care'],
                image: nhCareImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=org.narayanahealth.nhcare', type: 'playstore' },
                    { href: 'https://www.narayanahealth.org/', type: 'weblink' }
                ]
            },
            {
                title: 'Amwell: Doctor Visits 24/7',
                description: 'Connect to board-certified medical providers 24/7 through high-quality telemedicine. Bringing healthcare home for faster feel-better results.',
                stats: 'Telehealth appointments 24/7',
                tags: ['Telemedicine', 'On-Demand', 'Certified Doctors'],
                image: amwellImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.americanwell.android.member.amwell', type: 'playstore' },
                    { href: 'https://business.amwell.com/', type: 'weblink' }
                ]
            }
        ],
        'E-Commerce': [
            {
                title: 'Adorawe - Fashion Shopping Mall',
                description: 'Stylish destination designed for Saudi Arabia, UAE, and Gulf region. 500+ daily new arrivals in casual wear and dresses at affordable prices.',
                stats: 'Leading Fashion App in MENA',
                tags: ['Fashion', 'Retail', 'International'],
                image: adoraweImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.starlinke', type: 'playstore' },
                    { href: 'https://www.starlinke.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Cartlow - Smarter Way To Shop',
                description: 'Leading online destination for Pre-owned, Open-box and Clearance products in UAE. Re-commerce initiative focusing on sustainability and savings.',
                stats: 'Save Environment, Save Money',
                tags: ['Re-Commerce', 'Sustainability', 'Open-box'],
                image: cartlowImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.cartlow.android', type: 'playstore' },
                    { href: 'https://www.cartlow.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Jazp.com - Premier Online Store',
                description: 'Leading platform in UAE, Qatar and KSA. Vast product mix including electronics and perfumes with accessible quality selections.',
                stats: 'Leading Store in Gulf Region',
                tags: ['Electronics', 'Lifestyle', 'Marketplace'],
                image: jazpImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=www.jazp.com.jazp', type: 'playstore' },
                    { href: 'https://uae.jazp.com/ae-en/', type: 'weblink' }
                ]
            },
            {
                title: 'GeekBuying - Make Life Smart',
                description: '20,000+ products across electronics and gadgets. Easy home shopping with global delivery and specialized tech support.',
                stats: '20,000+ Smart Tech Products',
                tags: ['Gadgets', 'Smart Home', 'Global e-Shop'],
                image: geekbuyingImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.geekbuy.geekbuying', type: 'playstore' },
                    { href: 'https://www.geekbuying.com/', type: 'weblink' }
                ]
            },
            {
                title: 'China Gadgets – The Gadget App',
                description: 'Comprehensive review and comparison platform for the web\'s craziest gadgets. Real-time price comparisons and testing for tech seekers.',
                stats: 'Reviews & Price Comparison',
                tags: ['Gadget Reviews', 'Comparison', 'Tech Blog'],
                image: chinaGadgetsImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=de.appetites.chinagadgets', type: 'playstore' },
                    { href: 'https://www.china-gadgets.de/', type: 'weblink' }
                ]
            },
            {
                title: 'RunwaySale - Designer Label Access',
                description: 'Biggest South African online shopping society offering designer labels at up to 70% off through daily private flash sale events.',
                stats: 'Up to 70% off Designer Labels',
                tags: ['Luxury', 'Flash Sales', 'Apparel'],
                image: runwaysaleImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=io.flatcircle.runwaysaleandroid', type: 'playstore' },
                    { href: 'https://www.runwaysale.co.za/', type: 'weblink' }
                ]
            },
            {
                title: 'FARFETCH — Luxury Fashion',
                description: 'Global destination for modern luxury. Shop over 100,000 fashion designer pieces expertly curated for a premium shopping experience.',
                stats: '100,000+ Luxury Fashion Pieces',
                tags: ['Luxury', 'Global Reach', 'Premium Retail'],
                image: farfetchImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.farfetch.farfetchshop', type: 'playstore' },
                    { href: 'https://www.farfetch.com/', type: 'weblink' }
                ]
            }
        ],
        'Entertainment': [
            {
                title: 'Watcho - Originals & Spotlight',
                description: 'Go-to video streaming app for Originals showcasing Hindi web series. Regional programmes in Telugu, Tamil, and Kannada on spotlight.',
                stats: 'Watch Originals & Live TV',
                tags: ['OTT', 'Streaming', 'Web Series'],
                image: watchoImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.watcho', type: 'playstore' },
                    { href: 'https://www.watcho.com/', type: 'weblink' }
                ]
            },
            {
                title: 'DocuBay - Global Documentaries',
                description: 'Award-winning documentaries on crime, nature, and science. Ever-growing collection across HD categories with unbiased global insight.',
                stats: 'Award-Winning Documentaries',
                tags: ['Documentaries', 'Education', 'Video-on-Demand'],
                image: docubayImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.epic.docubay', type: 'playstore' },
                    { href: 'https://www.docubay.com/', type: 'weblink' }
                ]
            },
            {
                title: 'HilalPlay - Family Entertainment',
                description: 'Turkish, Arabic and International shows & films selected to be Family Friendly. Meeting all family standards without inappropriate content.',
                stats: 'Family-Friendly Content',
                tags: ['MENA OTT', 'Turkish Series', 'Clean Stream'],
                image: hilalplayImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.hilal.play', type: 'playstore' },
                    { href: 'https://hilalplay.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Kindda - Viral Short Videos',
                description: 'Rewarding system with special video effects and cool filters. Go viral with brand-new editing tools and become a Kindda Star.',
                stats: 'Go Viral with Kindda Star',
                tags: ['Social Media', 'Short-Video', 'Sharing'],
                image: kinddaImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=app.kindda.android', type: 'playstore' },
                    { href: 'https://kindda.app/', type: 'weblink' }
                ]
            },
            {
                title: 'Vidol - The Best Asia Series',
                description: 'Hottest newest SET dramas and favorite shows. Stream the SET Original spirit anytime from your phone and other devices.',
                stats: 'Hottest Asian Dramas',
                tags: ['Asian Content', 'Dramas', 'International OTT'],
                image: vidolImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.set.settv.vidol', type: 'playstore' },
                    { href: 'https://vidol.tv/', type: 'weblink' }
                ]
            }
        ],
        'Food & Drinks': [
            {
                title: 'AVEMART - Fresh Fruits & Veggies',
                description: 'Online portal for Affordable Fresh Fruits and Vegetables delivered to your doorstep. Aiming to make customer lifestyle simpler with easy clicks.',
                stats: 'Affordable Fresh Produce',
                tags: ['Grocery', 'Fresh Delivery', 'Agriculture'],
                image: avemartImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.ricomputech.avemartapp', type: 'playstore' },
                    { href: 'https://www.avemart.in/', type: 'weblink' }
                ]
            },
            {
                title: 'Kifayat - Online Supermarket',
                description: 'Well known Nagpur online supermarket covering everyday needs. Shop over 20,000+ products ranging from groceries to fresh vegetables.',
                stats: 'Nagpur\'s #1 Online Store',
                tags: ['Supermarket', 'Regional', 'Grocery'],
                image: kifayatImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.mm.kifayatbazaar', type: 'playstore' },
                    { href: 'https://www.kifayatonline.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Untappd - Discover Beer',
                description: 'Discover and share great beers, breweries, and venues with friends. Earn badges for exploring styles and countries while tracking favorites.',
                stats: 'Social Beer Discovery',
                tags: ['Social Network', 'Alcohol', 'Reviews'],
                image: untappdImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.untappdllc.app', type: 'playstore' },
                    { href: 'https://untappd.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Eatiko - Food Delivery Partner',
                description: 'Eat whatever you like, whenever you want. Whether breakfast dosa or heavenly sadhya, your one-stop partner for restaurant discovery.',
                stats: 'Fast Food Delivery',
                tags: ['Food Delivery', 'Restaurants', 'Kerala Market'],
                image: eatikoImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=io.eatiko.main', type: 'playstore' },
                    { href: 'https://eatiko.com/', type: 'weblink' }
                ]
            },
            {
                title: 'Heritage TUCH - Milk Delivery',
                description: 'Hyderabad\'s online solution for farm-fresh milk and dairy. Recently added flavored milk, ice-creams, and cheese for your summer delight.',
                stats: 'Daily Fresh Dairy',
                tags: ['Milk Delivery', 'Daily Needs', 'Dairy'],
                image: heritagetuchImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.heritagetuch.consumer', type: 'playstore' },
                    { href: 'https://www.heritagefoods.in/', type: 'weblink' }
                ]
            },
            {
                title: 'Meatigo – Fresh Meats Platform',
                description: 'High quality meats from trusted farms using meticulous preparation. Scientific approach to vacuum packing and vacuum sealing technology.',
                stats: 'Vacuum-Packed Fresh Meat',
                tags: ['Meats', 'Premium Delivery', 'Direct-to-Home'],
                image: meatigoImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.urbanpiper.meatigo', type: 'playstore' },
                    { href: 'https://meatigo.com/', type: 'weblink' }
                ]
            },
            {
                title: 'GroceryFactory - DTC Brand',
                description: 'India\'s 1st Full Stack DTC Brand for FMCG. Products meticulously selected and processed to deliver perfect standards within 24 hours.',
                stats: 'Direct-to-Consumer Grocery',
                tags: ['DTC', 'Full-Stack', 'FMCG'],
                image: groceryfactoryImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.groceryfactory.customer', type: 'playstore' },
                    { href: 'https://groceryfactory.in/', type: 'weblink' }
                ]
            },
            {
                title: 'Foodmazone - Online Supermarket',
                description: 'Kerala\'s largest online food store with 18,000+ products across 100 brands. Everything from rice to personal care in one place.',
                stats: 'Kerala\'s Largest Supermarket',
                tags: ['Large Inventory', 'Local Leader', 'Convenience'],
                image: foodmazoneImg,
                links: [
                    { href: 'https://play.google.com/store/apps/details?id=com.foodmazone.customer', type: 'playstore' },
                    { href: 'https://www.foodmazone.com/', type: 'weblink' }
                ]
            }
        ],
        'Others': [
            {
                title: 'Advince Technology - One Stop Solution',
                description: 'Hyderabad-based business solution offering Fin-Tech, Accounting, and Cloud services. CEO Ashutosh Kar (CA/CPA) leads this multi-disciplinary giant.',
                stats: 'Multi-Disciplinary IT Division',
                tags: ['FinTech', 'Accounting', 'Cloud Services'],
                image: advinceImg,
                links: [
                    { href: 'https://advince.in/', type: 'weblink' }
                ]
            },
            {
                title: 'Kryoss HR Services - Global Recruitment',
                description: 'Setting new benchmarks in talent acquisition through conceptualized services. Subsidiary of Kryoss Group focused on pioneer organized recruitment.',
                stats: 'Talent Acquisition Pioneer',
                tags: ['HR Services', 'Recruitment', 'Enterprise'],
                image: kryossHrImg,
                links: [
                    { href: 'https://kryoss.org/', type: 'weblink' }
                ]
            },
            {
                title: 'JeetuThareja & Associates - Chartered Accountants',
                description: 'Gurgaon-based firm offering Accounting, Auditing, and Direct Tax consultancy. A trusted roof for start-up and financial regulatory compliances.',
                stats: 'Financial Advisory & Audit',
                tags: ['Legal', 'Audit', 'Tax Consultation'],
                image: jtAssociatesImg,
                links: [
                    { href: 'https://jtassociates.in/', type: 'weblink' }
                ]
            },
            {
                title: 'I Say Organic - Sustainable Enterprise',
                description: 'Connecting sustainable farmers with health-conscious customers. Supporting Farmers to grow safe food without toxic chemicals or pesticides.',
                stats: 'Social Enterprise for Organic Food',
                tags: ['Sustainable', 'Organic', 'Agri-Tech'],
                image: isayorganicImg,
                links: [
                    { href: 'https://www.isayorganic.com/', type: 'weblink' }
                ]
            },
            {
                title: 'HawkHire HR Solutions',
                description: 'Innovative support in all areas of associated recruitment crossing industry sectors. Helping companies meet complex business environment challenges.',
                stats: 'Innovative Recruitment Lifecycle',
                tags: ['Staffing', 'Client Support', 'Lifecycle Management'],
                image: hawkhireImg,
                links: [
                    { href: 'https://hawkhire.in/', type: 'weblink' }
                ]
            },
            {
                title: 'V3 Events & Entertainments',
                description: 'Delhi & Mumbai based event management and wedding planning company. Dedicated to providing a wide assortment of services for live shows, star nights, and corporate launches.',
                stats: 'Premier Wedding & Event Planner',
                tags: ['Events', 'Entertainment', 'Celebrity shows'],
                image: v3eventsImg,
                links: [
                    { href: 'https://v3events.in/', type: 'weblink' }
                ]
            }
        ]
    };

    const stats = [
        { value: '750', label: 'Project Delivered', icon: <CheckCircle className="text-orange-500" /> },
        { value: '150', label: 'Development Staff', icon: <Briefcase className="text-orange-500" /> },
        { value: '10', label: 'Years of Experience', icon: <Star className="text-orange-500" /> },
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
                    <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">Our <span className="text-orange-500">Portfolio</span> Showcase</h1>
                    <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto text-gray-200">
                        Delivering cutting-edge solutions across industries. Explore our diverse portfolio of enterprise systems and client engagement platforms.
                    </p>
                </motion.div>
            </section>

            {/* 2. Breadcrumb Sticky Section */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <a href="/works" className="hover:text-orange-500 transition-colors duration-300">Our Works</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">Websites Works</span>
                </div>
            </section>

            {/* 3. Portfolio Tabs Section */}
            <section className="pt-16 md:pt-24 bg-white relative z-10 w-full mb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4"
                        >
                            Our <span className="text-orange-500">Creative</span> Portfolio
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Nav Tabs */}
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-8 px-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`pb-2 text-sm lg:text-[15px] font-bold uppercase transition-colors duration-300 border-b-2 tracking-wide flex items-center gap-2 ${activeCategory === cat.name
                                        ? 'border-orange-500 text-black'
                                        : 'border-transparent text-gray-500 hover:text-orange-500 hover:border-orange-500/50'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="w-full mt-8 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col w-full"
                        >
                            {worksData[activeCategory]?.map((project, idx) => {
                                const isEven = idx % 2 === 0;
                                return (
                                    <div key={idx} className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-orange-50'}`}>
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
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="max-h-[450px] w-full object-contain hover:scale-105 transition-transform duration-500"
                                                />
                                            </motion.div>

                                            {/* Content Box */}
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.6 }}
                                                className="w-full lg:w-1/2 flex flex-col justify-center"
                                            >
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="h-px w-8 bg-orange-500"></span>
                                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Case Study 0{idx + 1}</span>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-medium text-black mb-6 leading-tight hover:text-orange-600 transition-colors duration-300">
                                                    {project.title}
                                                </h3>

                                                <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {project.tags?.map((tag) => (
                                                        <span key={tag} className="px-5 py-2 rounded-xl bg-white border border-gray-100 text-[12px] font-medium tracking-[0.05em] uppercase text-gray-500 shadow-sm">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Download/Link Buttons */}
                                                {project.links && project.links.length > 0 && (
                                                    <div className="flex flex-wrap gap-4">
                                                        {project.links.map((link, lIdx) => (
                                                            <a
                                                                key={lIdx}
                                                                href={link.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-block mt-4 hover:opacity-90 transition-opacity"
                                                            >
                                                                {link.type === 'playstore' ? (
                                                                    <img
                                                                        src="https://kryosssoftech.org/icons/Health-&-Fitness/google%20app%20store.png"
                                                                        alt="Get it on Google Play"
                                                                        className="h-12 object-contain"
                                                                    />
                                                                ) : (
                                                                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-orange-500 transition-all duration-300 text-sm font-semibold">
                                                                        <Globe size={18} />
                                                                        Visit Website
                                                                    </span>
                                                                )}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 4. Stats Counter Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden"
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
                        {stats.map((stat, i) => (
                            <div key={i} className="p-4">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.value}+</h3>
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

export default WebsitesWorks;