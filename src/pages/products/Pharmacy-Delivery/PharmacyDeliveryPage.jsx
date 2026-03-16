import React from 'react';
import PharmacyDeliveryHero from './sections/PharmacyDeliveryHero';
import PharmacyDeliveryAboutUs from './sections/PharmacyDeliveryAboutUs';
import PharmacyDeliveryFeatures from './sections/PharmacyDeliveryFeatures'
import PharmacyDeliveryHowItWorks from './sections/PharmacyDeliveryHowItWorks'
import PharmacyDeliveryTechStack from './sections/PharmacyDeliveryTechStack'
import PharmacyDeliveryGallery from './sections/PharmacyDeliveryGallery'
import PharmacyDeliveryCTA from './sections/PharmacyDeliveryCTA'

const PharmacyDeliveryPage = () => {
    return (
        <>
            <PharmacyDeliveryHero />
            <PharmacyDeliveryAboutUs />
            <PharmacyDeliveryFeatures />
            <PharmacyDeliveryHowItWorks />
            <PharmacyDeliveryTechStack />
            <PharmacyDeliveryGallery />
            <PharmacyDeliveryCTA />
        </>
    )
}

export default PharmacyDeliveryPage;