import React from 'react';
import Hero from '@/components/Delivery-App-Solution/food-delivery-app/Hero';
import Ecosystem from '@/components/Delivery-App-Solution/food-delivery-app/Ecosystem';
import BusinessModels from '@/components/Delivery-App-Solution/food-delivery-app/BusinessModels';
import AppFeatures from '@/components/Delivery-App-Solution/food-delivery-app/AppFeatures';
import AdminDashboard from '@/components/Delivery-App-Solution/food-delivery-app/AdminDashboard';
import HowItWorks from '@/components/Delivery-App-Solution/food-delivery-app/HowItWorks';
import DemoGallery from '@/components/Delivery-App-Solution/food-delivery-app/DemoGallery';
import WhyChooseUs from '@/components/Delivery-App-Solution/food-delivery-app/WhyChooseUs';
import { Helmet } from 'react-helmet-async';

const FoodDeliveryApp = () => {
    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Food Delivery App Development Company | Solution</title>
                <meta name="description" content="Comprehensive food delivery app development solution for startups and enterprises. Multi-vendor, cloud kitchen, and single restaurant models." />
            </Helmet>

            <Hero />
            <Ecosystem />
            <BusinessModels />
            <AppFeatures />
            <AdminDashboard />
            <HowItWorks />
            <DemoGallery />
            <WhyChooseUs />

            {/* CTA Final */}
            <div className="bg-[#FF5722] py-20 px-4 text-center text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>

                <h2 className="text-3xl lg:text-[45px] font-bold mb-8 relative z-10">
                    Ready to Start Your Food Delivery Business?
                </h2>
                <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                    Consult with our experts and get a custom quote for your requirements.
                    Launch your own food ordering app in just a few days.
                </p>
                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                    <button className="bg-white text-[#FF5722] px-12 py-5 rounded-full font-black text-lg hover:bg-gray-100 transition-all transform hover:scale-110 shadow-2xl">
                        GET A FREE QUOTE
                    </button>
                    <button className="bg-black/20 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">
                        BOOK A LIVE DEMO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodDeliveryApp;
