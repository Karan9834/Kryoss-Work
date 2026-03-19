import React, { useEffect } from 'react';
import SalonHero from '../../../components/Salon-Beauty-Landing/SalonHero';
import SalonAbout from '../../../components/Salon-Beauty-Landing/SalonAbout';
import SalonFeatures from '../../../components/Salon-Beauty-Landing/SalonFeatures';
import SalonWhyUs from '../../../components/Salon-Beauty-Landing/SalonWhyUs';
import SalonCardSection from '../../../components/Salon-Beauty-Landing/SalonCardSection';

const SalonLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#FFF8F5]">
            <SalonHero />
            <SalonAbout />
            <SalonFeatures />
            <SalonWhyUs />
            <SalonCardSection />
        </div>
    );
};

export default SalonLanding;
