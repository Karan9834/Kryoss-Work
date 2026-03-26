import React, { useEffect } from 'react';
import CryptoHero from '../../../components/CryptoExchange-Landing/CryptoHero';
import CryptoAbout from '../../../components/CryptoExchange-Landing/CryptoAbout';
import CryptoFeatures from '../../../components/CryptoExchange-Landing/CryptoFeatures';
import CryptoCardSection from '../../../components/CryptoExchange-Landing/CryptoCardSection';
import CryptoWhyUs from '../../../components/CryptoExchange-Landing/CryptoWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const CryptoExchangeLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0A0B14]">
            <CryptoHero />
            <CryptoAbout />
            <CryptoFeatures />
            <CryptoCardSection />
            <CryptoWhyUs />
            
            {/* Common Sections */}
            <Testimonial />
            <Industries />
            <OurWork />
            <ContactUs />
        </div>
    );
};

export default CryptoExchangeLanding;
