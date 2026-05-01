import React from 'react'
import SalesCRMHero from './sections/SalesCRMHero';
import SalesCRMAboutUs from './sections/SalesCRMAboutUs';
import SalesCRMFeatures from './sections/SalesCRMFeatures';
import SalesCRMHowItWorks from './sections/SalesCRMHowItWorks';
import SalesCRMTechStack from './sections/SalesCRMTechStack';
import SalesCRMGallery from './sections/SalesCRMGallery';
import SalesCRMCTA from './sections/SalesCRMCTA';
const SalesCRMPage = () => {
    return (
        <>
            <SalesCRMHero />
            <SalesCRMAboutUs />
            <SalesCRMFeatures />
            <SalesCRMHowItWorks />
            <SalesCRMTechStack />
            <SalesCRMGallery />
            <SalesCRMCTA />
        </>
    )
}

export default SalesCRMPage;