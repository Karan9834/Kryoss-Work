import React, { useEffect } from 'react';
import RMSHero from '../../../components/RMS-Restaurant-Mgmt/RMSHero';
import RMSAbout from '../../../components/RMS-Restaurant-Mgmt/RMSAbout';
import RMSFeatures from '../../../components/RMS-Restaurant-Mgmt/RMSFeatures';
import RMSCardSection from '../../../components/RMS-Restaurant-Mgmt/RMSCardSection';
import RMSWhyUs from '../../../components/RMS-Restaurant-Mgmt/RMSWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const RMSLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <RMSHero />
            <RMSAbout />
            <RMSFeatures />
            <RMSCardSection />
            <RMSWhyUs />
            
            {/* Common Sections */}
            <Testimonial />
            <Industries />
            <OurWork />
            <ContactUs />
        </div>
    );
};

export default RMSLanding;
