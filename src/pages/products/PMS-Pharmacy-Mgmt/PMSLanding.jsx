import React, { useEffect } from 'react';
import PMSHero from '../../../components/PMS-Pharmacy-Mgmt/PMSHero';
import PMSAbout from '../../../components/PMS-Pharmacy-Mgmt/PMSAbout';
import PMSFeatures from '../../../components/PMS-Pharmacy-Mgmt/PMSFeatures';
import PMSCardSection from '../../../components/PMS-Pharmacy-Mgmt/PMSCardSection';
import PMSWhyUs from '../../../components/PMS-Pharmacy-Mgmt/PMSWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const PMSLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pharmacyTheme = {
        bg: "bg-emerald-50/50",
        primary: "text-[#00BFA5]", // Teal/Emerald mix
        iconBg: "bg-teal-100",
        iconColor: "text-[#00BFA5]",
        accent: "bg-[#00BFA5]",
    };

    return (
        <div className="bg-white">
            <PMSHero />
            <PMSAbout />
            <PMSFeatures />
            <PMSCardSection />
            <PMSWhyUs />
            
            {/* Common Sections with PMS Theme */}
            <Testimonial theme="teal" />
            <Industries theme={pharmacyTheme} />
            <OurWork theme={pharmacyTheme} />
            <ContactUs />
        </div>
    );
};

export default PMSLanding;
