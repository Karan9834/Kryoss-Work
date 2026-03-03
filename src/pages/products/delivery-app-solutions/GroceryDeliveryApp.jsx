import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Delivery-App-Solution/grocery-delivery-app/Hero';
import About from '@/components/Delivery-App-Solution/grocery-delivery-app/About';
import FeatureTabs from '@/components/Delivery-App-Solution/grocery-delivery-app/FeatureTabs';
import AppPortfolio from '@/components/Delivery-App-Solution/grocery-delivery-app/AppPortfolio';
import HowItWorks from '@/components/Delivery-App-Solution/grocery-delivery-app/HowItWorks';
import AdminPanels from '@/components/Delivery-App-Solution/grocery-delivery-app/AdminPanels';
import Deliverables from '@/components/Delivery-App-Solution/grocery-delivery-app/Deliverables';
import WhyChooseUs from '@/components/Delivery-App-Solution/grocery-delivery-app/WhyChooseUs';
import Monetization from '@/components/Delivery-App-Solution/grocery-delivery-app/Monetization';
import TechStack from '@/components/Delivery-App-Solution/grocery-delivery-app/TechStack';
import FinalCTA from '@/components/Delivery-App-Solution/grocery-delivery-app/FinalCTA';

const GroceryDeliveryApp = () => {
    return (
        <div className="flex flex-col">
            <Helmet>
                <title>On-Demand Grocery Delivery App Development Company | Solution</title>
                <meta name="description" content="Launch your white-label grocery delivery app with our comprehensive solution. Features for customers, stores, and delivery partners." />
            </Helmet>

            <Hero />
            <About />
            <FeatureTabs />
            <AppPortfolio />
            <AdminPanels />
            <HowItWorks />
            <Monetization />
            <Deliverables />
            <WhyChooseUs />
            <TechStack />
            <FinalCTA />
        </div>
    );
};

export default GroceryDeliveryApp;
