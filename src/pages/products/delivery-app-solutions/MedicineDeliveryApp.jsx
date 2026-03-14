import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import all sections for the Medicine Delivery App page
import Hero from '@/components/Delivery-App-Solution/medicine-delivery-app/Hero';
import About from '@/components/Delivery-App-Solution/medicine-delivery-app/About';
import HowItWorks from '@/components/Delivery-App-Solution/medicine-delivery-app/HowItWorks';
import CostCTA from '@/components/Delivery-App-Solution/medicine-delivery-app/CostCTA';
import OrderWorkflow from '@/components/Delivery-App-Solution/medicine-delivery-app/OrderWorkflow';
import AppFeatures from '@/components/Delivery-App-Solution/medicine-delivery-app/AppFeatures';
import AdminFeatures from '@/components/Delivery-App-Solution/medicine-delivery-app/AdminFeatures';
import Platforms from '@/components/Delivery-App-Solution/medicine-delivery-app/Platforms';
import AppUIShowcase from '@/components/Delivery-App-Solution/medicine-delivery-app/AppUIShowcase';
import WorkflowOverview from '@/components/Delivery-App-Solution/medicine-delivery-app/WorkflowOverview';
import CustomerBenefits from '@/components/Delivery-App-Solution/medicine-delivery-app/CustomerBenefits';
import SpecialFeatures from '@/components/Delivery-App-Solution/medicine-delivery-app/SpecialFeatures';
import DevelopmentProcess from '@/components/Delivery-App-Solution/medicine-delivery-app/DevelopmentProcess';
import LaunchIn5Days from '@/components/Delivery-App-Solution/medicine-delivery-app/LaunchIn5Days';
import WhyChooseUs from '@/components/Delivery-App-Solution/medicine-delivery-app/WhyChooseUs';
import VersatileDelivery from '@/components/Delivery-App-Solution/medicine-delivery-app/VersatileDelivery';
import ClientTestimonials from '@/components/Delivery-App-Solution/medicine-delivery-app/ClientTestimonials';
import ExploreSolutions from '@/components/Delivery-App-Solution/medicine-delivery-app/ExploreSolutions';
import IndustryRecognition from '@/components/Delivery-App-Solution/medicine-delivery-app/IndustryRecognition';
import FAQ from '@/components/Delivery-App-Solution/medicine-delivery-app/FAQ';
import TechStack from '@/components/Delivery-App-Solution/medicine-delivery-app/TechStack';
import CTA from '@/components/Delivery-App-Solution/medicine-delivery-app/CTA';

const MedicineDeliveryApp = () => {
    return (
        <div className="flex flex-col bg-white">
            <Helmet>
                <title>Online Medicine Delivery App Development | Pharmacy App Solution</title>
                <meta name="description" content="Looking to develop an online medicine delivery app services? We provide the best medicine delivery app solution for your pharmacy business with custom apps and admin panels." />
            </Helmet>

            {/* Hero Section */}
            <Hero />

            {/* About The Solution */}
            <About />

            {/* How It Works - 8 Steps */}
            <HowItWorks />

            {/* Cost CTA Banner */}
            <CostCTA />

            {/* Order Workflow - With/Without Prescription */}
            <OrderWorkflow />

            {/* App Features - Customer/Driver/Store */}
            <AppFeatures />

            {/* Admin Panel Features */}
            <AdminFeatures />

            {/* Platforms - Android/iOS/Admin */}
            <Platforms />

            {/* Modern UI Showcase */}
            <AppUIShowcase />

            {/* Workflow Overview - Graphical Flow */}
            <WorkflowOverview />

            {/* Customer Benefits */}
            <CustomerBenefits />

            {/* Special Features */}
            <SpecialFeatures />

            {/* Development Process */}
            <DevelopmentProcess />

            {/* Launch in 5 Days */}
            <LaunchIn5Days />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Versatile Delivery Solutions */}
            <VersatileDelivery />

            {/* Client Testimonials */}
            <ClientTestimonials />

            {/* Explore On-Demand Solutions */}
            <ExploreSolutions />

            {/* Industry Recognition */}
            <IndustryRecognition />

            {/* FAQ */}
            <FAQ />

            {/* Tech Stack */}
            <TechStack />

            {/* Final CTA */}
            <CTA />
        </div>
    );
};

export default MedicineDeliveryApp;
