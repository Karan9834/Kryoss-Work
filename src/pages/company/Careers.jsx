import React from 'react'
import { Helmet } from 'react-helmet-async';

import CareerHero from '@/components/Careers/CareerHero';
import CareerJobOpening from '@/components/Careers/CareerJobOpening';
import CareerWorkCulture from '@/components/Careers/CareerWorkCulture';
import CareerWhyUs from '@/components/Careers/CareerWhyUs';
import CareerJoinUs from '@/components/Careers/CareerJoinUs';

const Careers = () => {
    return (
        <>
            <CareerHero />
            <CareerJobOpening />
            <CareerWorkCulture />
            <CareerWhyUs />
            <CareerJoinUs />
        </>
    );
};
export default Careers;