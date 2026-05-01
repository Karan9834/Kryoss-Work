import React from 'react'
import MultiVendorHero from './sections/MultiVendorHero';
import MultiVendorAboutUs from './sections/MultiVendorAboutUs';
import MultiVendorFeatures from './sections/MultiVendorFeatures';
import MultiVendorHowItWorks from './sections/MultiVendorHowItWorks';
import MultiVendorTechStack from './sections/MultiVendorTechStack';
import MultiVendorGallery from './sections/MultiVendorGallery';
import MultiVendorCTA from './sections/MultiVendorCTA';
const MultiVendorMarketplacePage = () => {
    return (
        <>
            <MultiVendorHero />
            <MultiVendorAboutUs />
            <MultiVendorFeatures />
            <MultiVendorHowItWorks />
            <MultiVendorTechStack />
            <MultiVendorGallery />
            <MultiVendorCTA />
        </>
    )
}

export default MultiVendorMarketplacePage;