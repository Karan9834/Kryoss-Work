export const navigationData = {
    gojekClone: {
        title: "Multi Service App",
        description: "Build your own Gojek clone app with 101+ on-demand services!",
        items: [
            { label: "Gojek Clone Overview", href: "/gojek-clone/overview" },
            { label: "All Features", href: "/gojek-clone/features" },
            { label: "Live Demo", href: "/gojek-clone/live-demo" },
            { label: "Pricing", href: "/gojek-clone/pricing" },
        ]
    },
    products: [
        {
            category: "Transport App Solutions",
            description: "Launch your ride-hailing business with our ready-made solution.",
            items: [
                { label: "Taxi App (Uber-like)", subLabel: "Ride-hailing platform", icon: "🚗", href: "/products/transport/uber-clone" },
                { label: "Taxi Bidding (inDrive)", subLabel: "Bidding-based taxi app", icon: "🚖", href: "/products/transport/indrive-clone" },
                { label: "Bike Ride App", subLabel: "Bike taxi solution", icon: "🏍️", href: "/products/transport/rapido-clone" },
                { label: "Carpooling (BlaBlaCar)", subLabel: "Shared rides platform", icon: "👥", href: "/products/transport/blablacar-clone" },
                { label: "Car Rental App", subLabel: "Self-drive & chauffeur apps", icon: "🔑", href: "/products/transport/car-rental" },
            ]
        },
        {
            category: "Enterprise Products",
            description: "Business management software for organizations",
            items: [
                { label: "ERP", subLabel: "Enterprise Resource Planning", icon: "📊", href: "/products/enterprise/erp" },
                { label: "CRM", subLabel: "Customer Relationship Management", icon: "👥", href: "/products/enterprise/crm" },
                { label: "HRM", subLabel: "Human Resource Management", icon: "💼", href: "/products/enterprise/hrm" },
                { label: "LMS", subLabel: "Learning Management System", icon: "🎓", href: "/products/enterprise/lms" },
            ]
        },
        {
            category: "Delivery App Solutions",
            description: "Launch your On-Demand food, grocery, and more delivery services Solutions",
            items: [
                { label: "Food Delivery", subLabel: "Multi-restaurant platform", icon: "🍕", href: "/products/delivery/food-delivery" },
                { label: "Pharmacy Delivery", subLabel: "Medicine ordering app", icon: "💊", href: "/products/delivery/medicine-delivery" },
                { label: "Daily Delivery", subLabel: "Subscription-based grocery", icon: "🥛", href: "/products/delivery/daily-delivery" },
                // { label: "Liquor Delivery App", subLabel: "On-demand Alcohol delivery solution", icon: "🍷", href: "/products/delivery/liquor-delivery" },
                { label: "Grocery Delivery", subLabel: "Hyperlocal grocery app", icon: "🛒", href: "/products/delivery/grocery-delivery" },
                { label: "Multi-Service App", subLabel: "Deliver items from local stores", icon: "📦", href: "/products/delivery/multi-delivery" },
                // { label: "Cannabis Delivery App", subLabel: "Cannabis delivery app for regulated markets", icon: "🌿", href: "/products/delivery/cannabis-delivery" },
            ]
        },
        {
            category: "On demand Home Service Marketplace",
            description: "Launch your On-Demand Local Providers Services",
            items: [
                { label: "Handyman App", subLabel: "40+ On-demand services", icon: "🛠️", href: "/products/home-service/handyman" },
                { label: "Home Cleaning", subLabel: "House cleaning booking", icon: "🧹", href: "/products/home-service/cleaning" },
                { label: "Tutor Booking", subLabel: "Book tutors instantly", icon: "🎓", href: "/products/home-service/tutor" },
                { label: "Salon & Beauty", subLabel: "Salon & beauty experts app", icon: "💇", href: "/products/home-service/salon" },
                // { label: "Massage Therapy App", subLabel: "On-demand wellness and massage service", icon: "💆", href: "/products/home-service/massage" },
                // { label: "Laundry Service App", subLabel: "Pickup and delivery-based laundry app", icon: "🧺", href: "/products/home-service/laundry" },
                // { label: "Tow-Truck Service App", subLabel: "On-demand vehicle towing service", icon: "🚛", href: "/products/home-service/tow-truck" },
                // { label: "Dog Walking App", subLabel: "Local pet care and dog walking marketplace", icon: "🐕", href: "/products/home-service/dog-walking" },
                // { label: "Snow Removal App", subLabel: "On-demand snow plowing service platform", icon: "❄️", href: "/products/home-service/snow-removal" },
                // { label: "Pest Control Service App", subLabel: "Online pest control booking solution", icon: "🐜", href: "/products/home-service/pest-control" },
            ]
        },
        {
            category: "Emerging & Social App Solutions",
            description: "Trending App Solutions for Modern Businesses",
            items: [
                { label: "Dating App (Tinder-like)", subLabel: "Dating & matchmaking app", icon: "❤️", href: "/products/social/dating-app" },
                { label: "Appointment Booking", subLabel: "Doctor scheduling platform", icon: "📅", href: "/products/social/appointment-booking" },
                { label: "Video App (TikTok-like)", subLabel: "Short-form video platform", icon: "🎥", href: "/products/social/video-app" },
            ]
        }
    ],
    services: [
        {
            category: "White Label Mobile App Development",
            items: [
                { label: "Flutter App Development", href: "/services/flutter-app-development" },
                { label: "Kotlin App Development", href: "/services/kotlin-app-development" },
                { label: "Android App Development", href: "/services/android-app-development" },
                { label: "iOS App Development", href: "/services/ios-app-development" },
                { label: "Mvp App Development", href: "/services/mvp-app-development" },
            ]
        },
        {
            category: "White Label Web Development",
            items: [
                { label: "Laravel Development", href: "/services/laravel-development" },
                { label: "Wordpress Development", href: "/services/wordpress-development" },
                { label: "Ecommerce Development", href: "/services/ecommerce-development" },
            ]
        }
    ],
    solutions: {
        title: "Solutions We Offer",
        description: "We serve solutions for all industries",
        items: [
            { label: "Healthcare", href: "/solutions/healthcare" },
        ]
    },
    company: {
        title: "Our Company",
        description: "Your go-to partner for scalable tech solutions.",
        items: [
            { label: "About Us", href: "/company/about" },
            { label: "Contact Us", href: "/company/contact" },
            { label: "Client Testimonial", href: "/company/testimonials" },
            { label: "Life @ KryossWork", href: "/company/life-at-kryosswork" },
            { label: "Our Team", href: "/company/team" },
            { label: "Careers", href: "/company/careers" },
            { label: "User Rights & Policies", href: "/company/policies" },
            { label: "Sitemap", href: "/company/sitemap" },
        ]
    }
};
