import React, { useEffect } from 'react';
import SalonHero from '../../../components/Salon-Beauty-Landing/SalonHero';
import SalonAbout from '../../../components/Salon-Beauty-Landing/SalonAbout';
import SalonFeatures from '../../../components/Salon-Beauty-Landing/SalonFeatures';
import SalonCardSection from '../../../components/Salon-Beauty-Landing/SalonCardSection';
import SalonWhyUs from '../../../components/Salon-Beauty-Landing/SalonWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const SalonLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#FFF8F5]">
            <SalonHero />
            <SalonAbout />
            <SalonFeatures />
            <SalonCardSection />
            <SalonWhyUs />
            <Testimonial 
                theme="orange"
                bgGradient="from-[#FFF8F5] to-white"
                cardGradient="from-rose-500 to-orange-500"
            />
            <Industries 
                theme={{
                    bg: "bg-[#FFF8F5]",
                    primary: "text-rose-600",
                    iconBg: "bg-rose-100",
                    iconColor: "text-rose-600",
                }}
            />
            <OurWork 
                theme={{
                    primary: "text-rose-600",
                    accent: "bg-rose-600",
                }}
            />
            <ContactUs 
                theme="orange"
                productName="Salon"
                bgGradient="from-[#FFF8F5] to-white"
                accentGradient="from-rose-500 to-orange-500"
                buttonGradient="from-[#FF4D29] to-[#E63E1C]"
                showImage={true}
            />
        </div>
    );
};


export default SalonLanding;
