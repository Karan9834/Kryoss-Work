import React from 'react';
import SmartNftHero from './sections/SmartNftHero';
import SmartNftAboutUs from './sections/SmartNftAboutUs';
import SmartNftFeatures from './sections/SmartNftFeatures';
import SmartNftHowItWorks from './sections/SmartNftHowItWorks';
import SmartNftTechStack from './sections/SmartNftTechStack';
import SmartNftGallery from './sections/SmartNftGallery';
import SmartNftCTA from './sections/SmartNftCTA';

const SmartNftPage = () => {
    return (
        <>
            <SmartNftHero />
            <SmartNftAboutUs />
            <SmartNftFeatures />
            <SmartNftHowItWorks />
            <SmartNftTechStack />
            <SmartNftGallery />
            <SmartNftCTA />
        </>
    )
}

export default SmartNftPage;
