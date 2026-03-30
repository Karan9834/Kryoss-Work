import React from 'react';
import EneftiHero from './sections/EneftiHero';
import EneftiAboutUs from './sections/EneftiAboutUs';
import EneftiFeatures from './sections/EneftiFeatures';
import EneftiHowItWorks from './sections/EneftiHowItWorks';
import EneftiTechStack from './sections/EneftiTechStack';
import EneftiGallery from './sections/EneftiGallery';
import EneftiCTA from './sections/EneftiCTA';

const EneftiProductsPage = () => {
    return (
        <>
            <EneftiHero />
            <EneftiAboutUs />
            <EneftiFeatures />
            <EneftiHowItWorks />
            <EneftiTechStack />
            <EneftiGallery />
            <EneftiCTA />
        </>
    )
}

export default EneftiProductsPage;
