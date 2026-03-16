import React from 'react'
import TelemedicineHero from './sections/TelemedicineHero';
import TelemedicineAboutUs from './sections/TelemedicineAboutUs';
import TelemedicineFeatures from './sections/TelemedicineFeatures';
import TelemedicineHowItWorks from './sections/TelemedicineHowItWorks';
import TelemedicineTechStack from './sections/TelemedicineTechStack';
import TelemedicineGallery from './sections/TelemedicineGallery';
import TelemedicineCTA from './sections/TelemedicineCTA';
const TelemedicineAppPage = () => {
    return (
        <>
            <TelemedicineHero />
            <TelemedicineAboutUs />
            <TelemedicineFeatures />
            <TelemedicineHowItWorks />
            <TelemedicineTechStack />
            <TelemedicineGallery />
            <TelemedicineCTA />

        </>
    )
}

export default TelemedicineAppPage;