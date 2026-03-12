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
    // Transport
    {
        id: 'uber-clone',
        name: 'Uber Clone',
        categoryId: 'transport',
        description: 'Complete ride-hailing solution with driver and rider apps.',
        features: ['Android + iOS', 'Admin Dashboard', 'Real-time Tracking'],
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
        badges: ['Best Seller', 'Popular'],
        type: 'Clone Scripts'
    },
    {
        id: 'bike-taxi-app',
        name: 'Bike Taxi App',
        categoryId: 'transport',
        description: 'Two-wheeler ride sharing platform for quick urban transit.',
        features: ['Android + iOS', 'Wallet Integration', 'Surge Pricing'],
        image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600&q=80',
        badges: ['New'],
        type: 'Mobile Apps'
    },
    {
        id: 'car-rental-app',
        name: 'Car Rental App',
        categoryId: 'transport',
        description: 'Platform for hourly and daily car rentals for businesses.',
        features: ['Web + Mobile', 'Fleet Management', 'Online Payments'],
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80',
        badges: [],
        type: 'Web Apps'
    },
    {
        id: 'carpool-app',
        name: 'Carpool App',
        categoryId: 'transport',
        description: 'Ride-sharing application to split costs and reduce traffic.',
        features: ['Android + iOS', 'Identity Verification', 'In-app Chat'],
        image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=600&q=80',
        badges: [],
        type: 'Mobile Apps'
    },
    {
        id: 'taxi-bidding-app',
        name: 'Taxi Bidding App',
        categoryId: 'transport',
        description: 'Allow riders to negotiate fares directly with drivers.',
        features: ['Android + iOS', 'Live Bidding', 'Rating System'],
        image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&q=80',
        badges: ['Popular'],
        type: 'Clone Scripts'
    },
    // Food Delivery
    {
        id: 'swiggy-clone',
        name: 'Food Delivery Clone',
        categoryId: 'food',
        description: 'Multi-restaurant food delivery management system.',
        features: ['Costumer App', 'Restaurant Panel', 'Rider App'],
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
        badges: ['Best Seller'],
        type: 'Clone Scripts'
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
    // On Demand more
    {
        id: 'home-cleaning',
        name: 'Home Cleaning App',
        categoryId: 'ondemand',
        description: 'Uber for home cleaning and maid services.',
        features: ['Background Checks', 'Recurrent Bookings', 'Cashless Payments'],
        image: 'https://images.unsplash.com/photo-1584820927498-cafe5c156649?w=600&q=80',
        badges: [],
        type: 'Mobile Apps'
    },
    {
        id: 'pet-care',
        name: 'Pet Care & Walking',
        categoryId: 'ondemand',
        description: 'Connect pet owners with trusted dog walkers and sitters.',
        features: ['GPS Tracking', 'Photo Updates', 'Review System'],
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80',
        badges: ['Popular'],
        type: 'Mobile Apps'
    }
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
