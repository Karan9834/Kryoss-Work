import {
    ShoppingCart,
    Car,
    Pizza,
    ShoppingBag,
    HeartPulse,
    Building2,
    GraduationCap,
    Wrench,
    Bot,
    Briefcase
} from 'lucide-react';
import img1 from '../../assets/Product-update/uberclone.png';
import uberss1 from '../../assets/Product-update/uberss1.png';
import uberss2 from '../../assets/Product-update/uberss2.png';
import uberss3 from '../../assets/Product-update/uberss3.png';
import biketaxi1 from '../../assets/Product-update/biketaxi.jpeg';
import bikess1 from '../../assets/Product-update/bikess1.webp';
import bikess2 from '../../assets/Product-update/bikess2.webp';
import bikess3 from '../../assets/Product-update/bikess3.webp';
import carental from '../../assets/Product-update/carental.jpg';
import carrss1 from '../../assets/Product-update/carrss1.png';
import carrss2 from '../../assets/Product-update/carrss2.png';
import carrss3 from '../../assets/Product-update/carrss3.png';
import taxibidding from '../../assets/Product-update/taxibidding.png';
import food from '../../assets/Product-update/food.jpg';
import foodss1 from '../../assets/Product-update/foodss1.png';
import foodss2 from '../../assets/Product-update/foodss2.png';


export const categories = [
    { id: 'ecommerce', name: 'Ecommerce Solutions', icon: ShoppingCart, count: 45, color: '#6C5CE7', bgTint: 'rgba(108, 92, 231, 0.05)' },
    { id: 'transport', name: 'Taxi & Transport Apps', icon: Car, count: 32, color: '#FDCB6E', bgTint: '#FFF9E6' },
    { id: 'food', name: 'Food Delivery Systems', icon: Pizza, count: 28, color: '#FF7675', bgTint: '#FFF1F1' },
    { id: 'grocery', name: 'Grocery Delivery Apps', icon: ShoppingBag, count: 18, color: '#55EFC4', bgTint: 'rgba(85, 239, 196, 0.08)' },
    { id: 'healthcare', name: 'Healthcare Platforms', icon: HeartPulse, count: 15, color: '#74B9FF', bgTint: 'rgba(116, 185, 255, 0.08)' },
    { id: 'realestate', name: 'Real Estate Solutions', icon: Building2, count: 12, color: '#A29BFE', bgTint: 'rgba(162, 155, 254, 0.08)' },
    { id: 'education', name: 'Education Platforms', icon: GraduationCap, count: 20, color: '#81ECEC', bgTint: 'rgba(129, 236, 236, 0.08)' },
    { id: 'ondemand', name: 'On Demand Services', icon: Wrench, count: 40, color: '#FAB1A0', bgTint: 'rgba(250, 177, 160, 0.08)' },
    { id: 'ai', name: 'AI Based Solutions', icon: Bot, count: 15, color: '#FF6B00', bgTint: '#FFF4EC' },
    { id: 'crm', name: 'Business CRM Tools', icon: Briefcase, count: 22, color: '#00B894', bgTint: 'rgba(0, 184, 148, 0.06)' },
];

const baseProducts = [
    // Specialized & Niche Applications (Top Priority)
    {
        id: 'home-service/massage',
        name: 'Massage Therapy App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'Premium on-demand wellness and professional massage service platform. Connect users with certified therapists at their doorstep.',
        image: 'https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?w=600&q=80',
        features: ['Expert Therapist Profiles', 'On-site Service Booking', 'Secure Payment Gateway'],
        badges: ['Popular'],
    },
    {
        id: 'home-service/laundry',
        name: 'Laundry Service App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'Complete pickup and delivery-based laundry and dry cleaning app solution for modern city dwellers.',
        image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80',
        features: ['Scheduled Pickups', 'Real-time Laundry Tracking', 'Contactless Delivery'],
        badges: ['Trending'],
    },
    {
        id: 'home-service/tow-truck',
        name: 'Tow-Truck Service App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'On-demand vehicle towing and roadside assistance platform. Help users get back on the road safely and quickly.',
        image: 'https://images.unsplash.com/photo-1586191582151-f73972d10737?w=600&q=80',
        features: ['GPS Assisted Dispatch', 'Emergency Support Button', 'Driver Live Tracking'],
        badges: ['Popular'],
    },
    {
        id: 'home-service/dog-walking',
        name: 'Dog Walking App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'Premium pet care marketplace connecting pet parents with verified local dog walkers and sitters.',
        image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80',
        features: ['Walk Performance Tracking', 'Photo & Status Updates', 'Identity Verified Walkers'],
        badges: ['New', 'Pet-Friendly'],
    },
    {
        id: 'home-service/snow-removal',
        name: 'Snow Removal App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'On-demand snow plowing and winter maintenance service platform for residential and commercial customers.',
        image: 'https://images.unsplash.com/photo-1517204324032-fb3012de9b59?w=600&q=80',
        features: ['Weather Alert Integration', 'Instant Service Request', 'Before/After Photo Proof'],
        badges: ['Seasonal'],
    },
    {
        id: 'home-service/pest-control',
        name: 'Pest Control App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'Comprehensive digital solution for booking professional pest control and home inspection services.',
        image: 'https://images.unsplash.com/photo-1587324438673-56c507c6f085?w=600&q=80',
        features: ['Inspection Reporting', 'Recurring Service Plans', 'Inventory Management'],
        badges: ['New'],
    },
    {
        id: 'delivery/liquor-delivery',
        name: 'Liquor Delivery App',
        categoryId: 'food',
        type: 'Mobile Apps',
        description: 'Scalable on-demand alcohol delivery solution with robust age verification and inventory management.',
        image: 'https://images.unsplash.com/photo-1569058242252-62324e68884c?w=600&q=80',
        features: ['Digital Age Verification', 'Multi-Store Marketplace', 'Real-time Delivery Tracking'],
        badges: ['Popular'],
    },
    {
        id: 'delivery/cannabis-delivery',
        name: 'Cannabis Delivery App',
        categoryId: 'food',
        type: 'Mobile Apps',
        description: 'Fully compliant cannabis delivery app designed for regulated markets with built-in regulatory checks.',
        image: 'https://images.unsplash.com/photo-1548366086-7f1b76106622?w=600&q=80',
        features: ['Compliance Management', 'Driver Wallet System', 'Legal Boundary Geofencing'],
        badges: ['Trending'],
    },
    {
        id: 'social/dating-app',
        name: 'Dating App (Tinder Clone)',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'Feature-rich dating platform with swipe mechanics, real-time chat, and location-based matching.',
        image: 'https://images.unsplash.com/photo-1516192511150-1d10d69a9972?w=600&q=80',
        features: ['Smart Matching Algorithm', 'Real-time Chat & Voice', 'Profile Verification'],
        badges: ['Popular'],
    },
    {
        id: 'social/appointment-booking',
        name: 'Appointment Booking App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'Versatile appointment scheduling solution for doctors, salons, and consultants.',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80',
        features: ['Multi-Calendar Sync', 'Automated Reminders', 'In-App Video Calling'],
        badges: ['Trending'],
    },
    {
        id: 'social/video-app',
        name: 'TikTok Clone App',
        categoryId: 'ondemand',
        type: 'Mobile Apps',
        description: 'Short-form video sharing platform with advanced filters, music integration, and social features.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
        features: ['Video Editing Tools', 'Music & Effect Library', 'Creator Reward System'],
        badges: ['Hot'],
    },
    {
        id: 'enterprise/erp',
        name: 'Enterprise ERP System',
        categoryId: 'crm',
        type: 'SaaS',
        description: 'Complete resource planning solution for organizations to manage business processes in real-time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        features: ['Resource Tracking', 'Financial Management', 'Supply Chain Analytics'],
        badges: ['Enterprise'],
    },
    {
        id: 'enterprise/crm',
        name: 'Advanced CRM Suite',
        categoryId: 'crm',
        type: 'SaaS',
        description: 'Strategic customer relationship management tool to improve business relationships and drive sales.',
        image: 'https://images.unsplash.com/photo-1552581234-261270c89b44?w=600&q=80',
        features: ['Pipeline Visualization', 'Lead Scoring AI', 'Marketing Automation'],
        badges: ['Bestseller'],
    },

    // Transport
    {
    id: "transport/uber-clone",
    name: "Uber Clone",
    categoryId: 'transport',
    type: "Ride-Hailing App",
    description: "Complete ride-hailing platform with real-time tracking, fare estimation, and payment integration.",
    image: img1, 
    demoUrl: "https://preview.codecanyon.net/item/gocab-grab-uber-clone-taxi-booking-cab-rental-bidding-parcel/full_screen_preview/61391802",
    features: [
        "Real-time GPS tracking with live ETAs",
        "Smart fare estimation & surge pricing",
        "Multiple payment options (Card/Cash/Wallet)",
    ],
    about: "A fully functional Uber-like platform that seamlessly connects riders with drivers. Features include real-time tracking, automatic fare calculation, multiple payment gateways, and a comprehensive admin dashboard for complete business control. Built with scalability and performance in mind.",
    steps: [
        "User opens app and sets pickup/dropoff locations",
        "System calculates fare and shows nearby drivers",
        "User confirms booking with preferred vehicle type",
        "Nearby driver accepts and navigates to pickup",
        "Real-time tracking visible to both parties",
        "Trip completes with automatic payment processing",
        "Both parties rate each other"
    ],
    techStack: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Google Maps API",
        "Stripe",
        "PayPal",
        "Redis",
        "Firebase",
        "JWT",
        "AWS S3",
        "Docker"
    ],
    images: [
        uberss1,
        uberss2,
        uberss3,
    ],
    badges: ['Popular', 'Best Seller']
},
{
    id: 'transport/rapido-clone',
    name: 'Bike Taxi App',
    categoryId: 'transport',
    type: 'Mobility Solution',
    description: 'Revolutionary two-wheeler ride-sharing platform designed for rapid city commutes. Beat traffic, save money, and reduce carbon footprint.',
    image: biketaxi1,
    demoUrl: "https://preview.codecanyon.net/item/cab2door-online-taxi-booking-app-template/full_screen_preview/29919332",
    features: [
        "Smart route optimization for bike lanes",
        "Dynamic pricing with rush hour multipliers",
        "Digital helmet verification system",
    ],
    about: "A next-generation bike taxi platform that's transforming urban mobility. Unlike traditional cab services, our bike taxi solution offers faster commutes through traffic, lower fares, and environmentally sustainable transportation. The platform includes specialized features for two-wheeler logistics, including helmet compliance checks, lane-optimized routing, and a unique gamified reward system that encourages eco-friendly riding. Perfect for smart cities looking to reduce congestion and pollution.",
    steps: [
        "Rider selects destination and preferred bike type (Standard/ Electric/ Premium)",
        "AI-powered route planner suggests fastest bike-friendly paths",
        "Nearby driver accepts and rider gets driver details with safety score",
        "Driver arrives with QR-scanned verified helmet",
        "Real-time journey tracking with estimated arrival updates",
        "Contactless payment with auto-split bill option for groups",
        "Post-ride carbon savings report shared with rider",
        "Both parties earn green points for eco-friendly ride"
    ],
    techStack: [
        "Flutter (Cross-platform)",
        "Django (Python Backend)",
        "PostgreSQL",
        "GraphQL",
        "Apache Kafka",
        "OpenStreetMap API",
        "Razorpay",
        "TensorFlow Lite",
        "Elasticsearch",
        "Kubernetes",
        "GitHub Actions",
        "Sentry",
        "New Relic"
    ],
    images: [
        bikess1,
        bikess2,
        bikess3
    ],
    badges: ['Trending', 'Eco-Friendly']
},
   {
    id: 'transport/car-rental',
    name: 'Car Rental App',
    categoryId: 'transport',
    type: 'Car Rental Platform',
    description: 'Complete platform for hourly and daily car rentals. Perfect for rental agencies, car dealers, and peer-to-peer car sharing businesses.',
    image: carental,
    demoUrl: "https://preview.codecanyon.net/item/carento-car-dealer-rental-booking-laravel-system/full_screen_preview/55782539",
    features: [
        "Multi-fleet management system",
        "Hourly, daily & weekly rental options",
        "Real-time vehicle availability calendar",
    ],
    about: "A powerful car rental platform that streamlines the entire rental process for both businesses and customers. From managing a fleet of vehicles to handling bookings, payments, and returns, this solution offers everything needed to launch a successful car rental service. The system supports various rental models including traditional agency rentals, peer-to-peer car sharing, and corporate fleet management.",
    steps: [
        "Customer browses available vehicles with filters (type, price, features)",
        "Selects rental duration and adds optional insurance/extras",
        "Completes secure online payment or holds deposit",
        "Admin/owner receives booking notification and verifies",
        "Customer picks up vehicle (or delivery arranged) with digital contract",
        "Real-time tracking available for fleet owners during rental period",
        "Vehicle return with damage inspection and deposit release",
        "Both parties receive automated review requests"
    ],
    techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "RESTful API",
        "jQuery",
        "Bootstrap",
        "Stripe",
        "PayPal",
        "Google Maps API",
        "Redis",
        "JWT",
        "AWS S3",
        "Docker"
    ],
    images: [
            carrss1,
            carrss2,
        carrss3
    ],
    badges: ['New', 'Popular']
},
    {
    id: 'transport/blablacar-clone',
    name: 'Carpool App',
    categoryId: 'transport',
    type: 'Ride-Sharing Platform',
    description: 'Smart ride-sharing application that connects commuters heading in the same direction. Split costs, reduce traffic, and make eco-friendly travel choices.',
    image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=600&q=80',
    demoUrl: "https://preview.codecanyon.net/item/carpool-ride-sharing-app/full_screen_preview/12345678", // You'll need to update this with actual demo URL
    features: [
        "Emergency SOS button with live location sharing",
        "Rider & driver ratings with reviews",
        "Corporate carpool management dashboard"
    ],
    about: "A modern carpool platform designed to reduce traffic congestion and promote sustainable transportation. The app intelligently matches commuters traveling along similar routes, allowing them to share rides and split costs. Built with safety as a priority, it includes identity verification, real-time tracking, and emergency features. Perfect for daily commuters, corporate campuses, and eco-conscious communities.",
    steps: [
        "User enters start location and destination with preferred travel time",
        "Smart algorithm finds matching riders/drivers along similar routes",
        "View matched profiles with verification status and ratings",
        "Chat within app to coordinate pickup details",
        "Confirm ride with automated cost calculation",
        "Real-time tracking during the journey",
        "Automatic payment split after ride completion",
        "Rate and review your co-passengers"
    ],
    techStack: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Google Maps API",
        "Stripe",
        "Redis",
        "Firebase",
        "JWT",
        "AWS S3",
        "TensorFlow Lite"
    ],
    images: [
        "https://images.unsplash.com/photo-1549317336-206569e8475c?w=600&q=80",
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
        "https://images.unsplash.com/photo-150652178126-71f47e184d1a?w=600&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80"
    ],
    badges: ['Eco-Friendly', 'Popular']
},
   {
    id: 'transport/indrive-clone',
    name: 'Taxi Bidding App',
    categoryId: 'transport',
    type: 'Dynamic Pricing Platform',
    description: 'Innovative ride-hailing platform where riders can negotiate fares and drivers can bid for rides. A perfect Uber-like alternative with transparent pricing.',
    image: taxibidding,
    demoUrl: "https://preview.codecanyon.net/item/exicube-bidcab-app/full_screen_preview/40458430",
    features: [
        "Corporate account management",
        "Comprehensive admin dashboard with bid analytics"
    ],
    about: "A revolutionary taxi booking platform that transforms the traditional fixed-fare model into a dynamic bidding marketplace. Riders can post their trips with desired budgets, and nearby drivers can bid competitively for the ride. This transparent system ensures fair pricing for both parties while giving riders more control and drivers the freedom to maximize their earnings. Includes all standard ride-hailing features with the unique bidding twist.",
    steps: [
        "Rider enters pickup and dropoff locations with preferred budget range",
        "Ride request is broadcast to nearby available drivers",
        "Drivers view request and place competitive bids",
    ],
    techStack: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Google Maps API",
        "Stripe",
        "PayPal",
        "Redis",
        "Firebase",
        "JWT",
        "AWS S3",
        "Docker"
    ],
    images: [
        "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
        "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&q=80",
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    ],
    badges: ['Popular', 'Trending']
},
    // Food Delivery
    {
    id: 'delivery/food-delivery',
    name: 'Food Delivery Clone',
    categoryId: 'food',
    type: 'Food Delivery Platform',
    description: 'Complete multi-restaurant food delivery management system inspired by Swiggy and Zomato. Connect customers, restaurants, and delivery partners seamlessly.',
    image: food,
    demoUrl:  "http://preview.codecanyon.net/item/viavi-food-delivery-script/full_screen_preview/15509686",
    features: [
        "Multi-restaurant onboarding & management",
        "Real-time order tracking for customers",
        "Intelligent delivery partner assignment",
    ],
    about: "A feature-rich food delivery platform that replicates the success of industry leaders like Swiggy and Zomato. This complete ecosystem includes three powerful apps: a customer app for seamless ordering, a restaurant panel for menu and order management, and a rider app for efficient deliveries. Built with scalability in mind, it handles everything from restaurant onboarding to real-time order tracking and intelligent delivery partner assignment.",
    steps: [
        "Customer browses restaurants by cuisine, rating, or location",
        "Selects dishes, customizes add-ons, and adds to cart",
        "Places order with preferred payment method",
        "Restaurant receives order and confirms preparation time",
        "System intelligently assigns nearest available delivery partner",
        "Customer tracks order in real-time from preparation to delivery",
        "Rider delivers food and marks order as completed",
        "Customer receives order and submits ratings/reviews"
    ],
    techStack: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Google Maps API",
        "Stripe",
        "Razorpay",
        "Redis",
        "Firebase",
        "JWT",
        "AWS S3",
        "Docker"
    ],
    images: [
        food,
        foodss1,
        foodss2
    ],
    badges: ['Best Seller', 'Popular']
},
    {
        id: 'cloud-kitchen',
        name: 'Cloud Kitchen POS',
        categoryId: 'food',
        description: 'Complete centralized order management for cloud kitchens.',
        features: ['Web Admin', 'Inventory Sync', 'Multi-brand'],
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&q=80',
        badges: ['New', 'SaaS'],
        type: 'SaaS'
    },
    // ... On Demand
    {
        id: 'handyman-app',
        name: 'Handyman Service App',
        categoryId: 'ondemand',
        description: 'Connect users with local professionals for home repairs.',
        features: ['Android + iOS', 'Service Scheduling', 'Secure Payments'],
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
        badges: ['Popular'],
        type: 'Mobile Apps'
    },
    {
        id: 'salon-booking',
        name: 'Salon Booking System',
        categoryId: 'ondemand',
        description: 'Appointment management for beauty and wellness centers.',
        features: ['Web + Mobile', 'Calendar Sync', 'Staff Management'],
        image: 'https://images.unsplash.com/photo-1521590832167-7bfc17484d85?w=600&q=80',
        badges: [],
        type: 'SaaS'
    },
    // Ecommerce
    {
        id: 'multi-vendor-ecommerce',
        name: 'Multi-Vendor Marketplace',
        categoryId: 'ecommerce',
        description: 'An Amazon-like platform hosting multiple independent sellers.',
        features: ['Web App', 'Vendor Dashboard', 'Commission Management'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        badges: ['Best Seller'],
        type: 'Web Apps'
    },
    {
        id: 'b2b-wholesale',
        name: 'B2B Wholesale Portal',
        categoryId: 'ecommerce',
        description: 'A bulk ordering system built exclusively for B2B operations.',
        features: ['Custom Pricing', 'Quote Requests', 'Inventory Tracking'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        badges: [],
        type: 'Web Apps'
    },
    // AI Tools
    {
        id: 'ai-content-generator',
        name: 'AI Copywriter SaaS',
        categoryId: 'ai',
        description: 'Automated content creation tool powered by latest LLMs.',
        features: ['Web App', 'Subscription Billing', 'Multi-language'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
        badges: ['New', 'Popular'],
        type: 'AI Tools'
    },
    {
        id: 'ai-chatbot',
        name: 'Customer Support Bot',
        categoryId: 'ai',
        description: 'Trainable AI agent to handle level 1 customer queries.',
        features: ['API Integrations', 'Analytics Dashboard', 'Human Handoff'],
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
        badges: ['SaaS'],
        type: 'AI Tools'
    },
    // Healthcare
    {
        id: 'telemedicine-app',
        name: 'Telemedicine App',
        categoryId: 'healthcare',
        description: 'Virtual consultation platform for doctors and patients.',
        features: ['Video Calls', 'Prescription Management', 'EHR Integration'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
        badges: ['New', 'Popular'],
        type: 'Mobile Apps'
    },
    {
        id: 'pharmacy-delivery',
        name: 'Pharmacy Delivery App',
        categoryId: 'healthcare',
        description: 'On-demand medicine delivery platform for pharmacies.',
        features: ['Prescription Upload', 'Inventory Tracking', 'Rider App'],
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
        badges: [],
        type: 'Clone Scripts'
    },
    // Real Estate
    {
        id: 'property-listing',
        name: 'Property Listing Portal',
        categoryId: 'realestate',
        description: 'Advanced real estate marketplace for buyers and agents.',
        features: ['Virtual Tours', 'Map Search', 'Lead Management'],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
        badges: ['Best Seller'],
        type: 'Web Apps'
    },
    {
        id: 'real-estate-crm',
        name: 'Real Estate CRM',
        categoryId: 'realestate',
        description: 'Complete pipeline and client management for realtors.',
        features: ['Automated Follow-ups', 'Email Campaigns', 'Property Matching'],
        image: 'https://images.unsplash.com/photo-1556761175-5973b0f62e72?w=600&q=80',
        badges: ['SaaS'],
        type: 'SaaS'
    },
    // Education
    {
        id: 'elearning-platform',
        name: 'E-Learning Platform',
        categoryId: 'education',
        description: 'Comprehensive LMS for schools, colleges, and creators.',
        features: ['Course Builder', 'Live Classes', 'Quizzes & Certificates'],
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80',
        badges: ['Popular'],
        type: 'Web Apps'
    },
    {
        id: 'tutor-booking',
        name: 'Tutor Booking App',
        categoryId: 'education',
        description: 'Find and book local or online tutors for various subjects.',
        features: ['Video Conferencing', 'Schedule Management', 'Payment Gateway'],
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
        badges: [],
        type: 'Mobile Apps'
    },
    // Grocery
    {
        id: 'grocery-delivery',
        name: 'Grocery Delivery App',
        categoryId: 'grocery',
        description: 'Instacart like platform for seamless grocery shopping.',
        features: ['Multi-store Support', 'Shopper App', 'Wallet System'],
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
        badges: ['Best Seller'],
        type: 'Clone Scripts'
    },
    // CRM
    {
        id: 'sales-crm',
        name: 'Enterprise Sales CRM',
        categoryId: 'crm',
        description: 'Streamline your sales process from lead to close.',
        features: ['Kanban Board', 'Analytics', 'Third-party Integrations'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        badges: ['New', 'SaaS'],
        type: 'SaaS'
    },
];

export const filterOptions = [
    'All',
    'Web Apps',
    'Mobile Apps',
    'SaaS',
    'AI Tools',
    'Clone Scripts'
];

// Automatically generate products so that the specific category numbers match the cards exactly
const generatedProducts = [];
categories.forEach(category => {
    const existingCount = baseProducts.filter(p => p.categoryId === category.id).length;
    const needed = category.count - existingCount;

    const dummyImages = [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    ];

    for (let i = 0; i < needed; i++) {
        const typeIndex = Math.floor(Math.random() * (filterOptions.length - 1)) + 1;
        const imgIndex = Math.floor(Math.random() * dummyImages.length);
        // Generate dynamic realistic naming
        const baseName = category.name.replace(' Solutions', '').replace(' Apps', '').replace(' Systems', '').replace(' Platforms', '').replace(' Tools', '');

        generatedProducts.push({
            id: `${category.id}-template-${i + 1}`,
            name: `${baseName} Premium Suite V${i + 1}`,
            categoryId: category.id,
            description: `Scalable, secure, and ready-to-deploy ${baseName.toLowerCase()} digital platform. Customization and full source code available.`,
            features: ['Admin Dashboard', 'Mobile APIs', 'Payment Gateway Integration'],
            image: dummyImages[imgIndex],
            badges: i % 8 === 0 ? ['New'] : [],
            type: filterOptions[typeIndex]
        });
    }
});

export const products = [...baseProducts, ...generatedProducts];
