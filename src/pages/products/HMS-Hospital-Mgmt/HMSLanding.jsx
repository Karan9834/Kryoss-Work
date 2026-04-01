import React, { useEffect } from 'react';
import HMSHero from '../../../components/HMS-Hospital-Mgmt/HMSHero';
import HMSAbout from '../../../components/HMS-Hospital-Mgmt/HMSAbout';
import HMSFeatures from '../../../components/HMS-Hospital-Mgmt/HMSFeatures';
import HMSCardSection from '../../../components/HMS-Hospital-Mgmt/HMSCardSection';
import HMSWhyUs from '../../../components/HMS-Hospital-Mgmt/HMSWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const HMSLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Utilizing a healthcare appropriate Teal/Cyan theme
    const hospitalTheme = {
        bg: "bg-teal-50/50",
        primary: "text-teal-600",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-600",
        accent: "bg-teal-600",
    };

    return (
        <div className="bg-white">
            <HMSHero />
            <HMSAbout />
            <HMSFeatures />
            <HMSCardSection />
            <HMSWhyUs />
            
            {/* Common Sections with HMS Theme */}
            <Testimonial theme="teal" />
            <Industries theme={hospitalTheme} />
            <OurWork theme={hospitalTheme} />
            <ContactUs />
        </div>
    );
};

export default HMSLanding;
