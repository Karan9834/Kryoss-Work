import React, { useEffect } from 'react';
import POSHero from '../../../components/POSBilling-Landing/POSHero';
import POSAbout from '../../../components/POSBilling-Landing/POSAbout';
import POSFeatures from '../../../components/POSBilling-Landing/POSFeatures';
import POSCardSection from '../../../components/POSBilling-Landing/POSCardSection';
import POSWhyUs from '../../../components/POSBilling-Landing/POSWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const POSBillingLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <POSHero />
            <POSAbout />
            <POSFeatures />
            <POSCardSection />
            <POSWhyUs />
            
            {/* Common Sections */}
            <Testimonial />
            <Industries />
            <OurWork />
            <ContactUs />
        </div>
    );
};

export default POSBillingLanding;
