import React, { useState } from 'react';
import {
    UserPlus, MapPin, Wallet, Home, Bike, CreditCard, Calendar, Gift,
    Smartphone, Phone, BarChart3, Star, Navigation, User, Power, RefreshCw
} from 'lucide-react';
import customerImg from '@/assets/transport-bikeride-img/customerappmockup.webp';
import driverImg from '@/assets/transport-bikeride-img/deriverappmockup.webp';

const customerFeatures = {
    left: [
        { title: "Social Login", desc: "A user can signup and log in through social media site like Facebook, Google, etc.", icon: UserPlus },
        { title: "Track Driver Location", desc: "After the driver accepts the ride request, the rider can track a driver's live location.", icon: MapPin },
        { title: "Manage Wallet", desc: "Track earnings, withdraw funds, view transaction history, and manage balance", icon: Wallet },
        { title: "Manage Address", desc: "Update personal and business addresses for better service accuracy.", icon: Home },
    ],
    right: [
        { title: "Select Vehicle", desc: "User has an option of selecting a ride vehicle type like Sedan, SUV, luxury etc based on their requirement.", icon: Bike },
        { title: "Flexible Payment", desc: "A user has flexible payment methods such as cash, credits and wallet to pay for a ride request.", icon: CreditCard },
        { title: "Schedule Ride", desc: "A user can book a new ride request now or schedule for a future trip. A user can book ride up to 4 days before.", icon: Calendar },
        { title: "Invite Friends", desc: "Refer friends and earn rewards for each successful sign-up.", icon: Gift },
    ]
};

const driverFeatures = {
    left: [
        { title: "Get Trip Request", desc: "Once Upon the driver's successful registration, a driver will get a ride request placed by a user from the nearest location.", icon: Smartphone },
        { title: "Call to User", desc: "In case of any difficulties, a driver can call to the user without leaving the app and resolve all the doubts.", icon: Phone },
        { title: "Ride Statics", desc: "Let drivers get a detailed insight into the total number of rides, completed rides, total earnings, and much more with ease.", icon: BarChart3 },
        { title: "Customer Feedback", desc: "Share ride experiences and rate drivers for quality service.", icon: Star },
    ],
    right: [
        { title: "Map Navigation", desc: "A driver can use Google Maps navigation within the application and find the best possible route to reach the destination.", icon: Navigation },
        { title: "Manage Profile", desc: "Edit, view, or update profile information like email, contact, and payment details within the driver application without any hassle.", icon: User },
        { title: "Online/Offline", desc: "A driver can set their profile status online/offline; they get a new ride request while profile status online.", icon: Power },
        { title: "Manage Ride Status", desc: "View ride history, track ongoing rides, & cancel if needed.", icon: RefreshCw },
    ]
};

const FeatureCard = ({ title, desc, icon: Icon }) => (
    <div className="group relative bg-white border border-[#00a67c]/30 rounded-[15px] p-5 transition-all duration-300 hover:bg-[#0b3d2e] cursor-pointer shadow-sm hover:shadow-xl">
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#0b3d2e] group-hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg">
                <Icon className="w-5 h-5 group-hover:text-[#0b3d2e] text-white transition-colors" />
            </div>
            <div>
                <h3 className="text-[17px] font-bold text-[#141414] group-hover:text-white mb-1.5 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed group-hover:text-white/80 transition-colors">
                    {desc}
                </p>
            </div>
        </div>
    </div>
);

const BikeFeatures = () => {
    const [activeTab, setActiveTab] = useState('customer');
    const features = activeTab === 'customer' ? customerFeatures : driverFeatures;
    const currentImg = activeTab === 'customer' ? customerImg : driverImg;

    return (
        <section className="py-16 bg-white font-['IBM_Plex_Sans'] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-[#0b3d2e]"></div>
                        <span className="text-gray-800 text-[12px] font-bold tracking-wider">Features</span>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-[40px] font-black text-[#141414] mb-3">
                        Key Features of <span className="text-[#00a67c]">Customer & Driver</span> Apps
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Our Bike Taxi App Development solution comes with powerful features for both customers and drivers.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-14">
                    <div className="inline-flex bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-inner">
                        <button
                            onClick={() => setActiveTab('customer')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full text-[15px] font-bold transition-all duration-300 ${activeTab === 'customer'
                                ? 'bg-[#00a67c] text-white shadow-lg'
                                : 'text-gray-500 hover:text-[#00a67c]'
                                }`}
                        >
                            Customer App
                        </button>
                        <button
                            onClick={() => setActiveTab('driver')}
                            className={`flex items-center gap-2 px-8 py-3 rounded-full text-[15px] font-bold transition-all duration-300 ${activeTab === 'driver'
                                ? 'bg-[#00a67c] text-white shadow-lg'
                                : 'text-gray-500 hover:text-[#00a67c]'
                                }`}
                        >
                            Driver App
                        </button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-5">
                        {features.left.map((f, i) => (
                            <FeatureCard key={i} title={f.title} desc={f.desc} icon={f.icon} />
                        ))}
                    </div>

                    {/* Center Image with Green Background like Screenshot */}
                    <div className="w-full lg:w-1/3 flex justify-center py-4 relative group">
                        <div className="relative w-full max-w-[320px] rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[#0b3d2e] transition-all duration-500 group-hover:scale-[1.02]">
                            <img
                                src={currentImg}
                                alt={`${activeTab} mockup`}
                                className="w-full h-auto object-contain relative z-10"
                            />

                            {/* Decorative Leaf Patterns in the Green Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none z-0">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path fill="#00a67c" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.5,-44.7C83.8,-31.3,87.3,-15.7,85.1,-0.8C82.9,14.1,74.9,28.2,65.2,40.1C55.5,52,44.1,61.7,31,69.2C17.9,76.7,3.1,82.1,-12,80.1C-27.1,78.2,-42.6,68.9,-54.8,57.1C-67,45.3,-75.9,31.1,-80.4,15.7C-84.9,0.3,-84.9,-16.1,-79.1,-30.4C-73.3,-44.7,-61.8,-56.9,-48.6,-64.3C-35.4,-71.7,-20.5,-74.3,-2.8,-70.7C14.8,-67.2,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-5">
                        {features.right.map((f, i) => (
                            <FeatureCard key={i} title={f.title} desc={f.desc} icon={f.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BikeFeatures;
