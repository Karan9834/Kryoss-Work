import React from 'react'
import { Helmet } from 'react-helmet-async';
import LaundryHero from '@/components/homeservice-laundry/LaundryHero';
import LaundryAbout from '@/components/homeservice-laundry/LaundryAbout';
import LaundryAppWorkflow from '@/components/homeservice-laundry/LaundryAppWorkflow';
import LaundryAppDevelopment from '@/components/homeservice-laundry/LaundryAppDevelopment';
import LaundryCTA1 from '@/components/homeservice-laundry/LaundryCTA1';
const LaundryService = () => {
    return (
        <>
            <LaundryHero />
            <LaundryAbout />
            <LaundryAppWorkflow />
            <LaundryAppDevelopment />
            <LaundryCTA1 />
        </>
    );
};

export default LaundryService;