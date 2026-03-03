import React from 'react'
import { Helmet } from 'react-helmet-async';


import Hero from '@/components/homeservice-tutorbooking/hero';
import AboutUs from '@/components/homeservice-tutorbooking/aboutus';
import Howitworks from '@/components/homeservice-tutorbooking/howitworks';
import AppPreview from '@/components/homeservice-tutorbooking/apppreview';
import CTA1 from '@/components/homeservice-tutorbooking/cta1';
import UserAppFeatures from '@/components/homeservice-tutorbooking/userfeatures';
import ProviderAppFeatures from '@/components/homeservice-tutorbooking/providerfeatures';
import AdminPanel from '@/components/homeservice-tutorbooking/adminpanel';
import Platforms from '@/components/homeservice-tutorbooking/platforms';
import CTA2 from '@/components/homeservice-tutorbooking/cta2';
import Benifits from '@/components/homeservice-tutorbooking/benifits';
import Development from '@/components/homeservice-tutorbooking/development';
import DigitalFootprints from '@/components/homeservice-tutorbooking/digitalfootprints';
import WhyUs from '@/components/homeservice-tutorbooking/whyus';
import CTA3 from '@/components/homeservice-tutorbooking/cta3';
import ClientsFeedback from '@/components/homeservice-tutorbooking/clientsfeedback';
import ProductShowcase from '@/components/homeservice-tutorbooking/productshowcase';
import Awards from '@/components/homeservice-tutorbooking/awards';
import FAQs from '@/components/homeservice-tutorbooking/faqs';
import TechStack from '@/components/homeservice-tutorbooking/techstack';
import Contact from '@/components/homeservice-tutorbooking/contact';
import Blogs from '@/components/homeservice-tutorbooking/blogs';
import GetUpdate from '@/components/homeservice-tutorbooking/getupdate';

const TutorBookingApp = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Howitworks />
            <AppPreview />
            <CTA1 />
            <UserAppFeatures />
            <ProviderAppFeatures />
            <AdminPanel />
            <Platforms />
            <CTA2 />
            <Benifits />
            <Development />
            <DigitalFootprints />
            <WhyUs />
            <CTA3 />
            <ClientsFeedback />
            <ProductShowcase />
            <Awards />
            <FAQs />
            <TechStack />
            <Contact />
            <Blogs />
            <GetUpdate />


        </>
    );
};

export default TutorBookingApp;