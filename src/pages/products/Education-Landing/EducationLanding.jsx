import React, { useEffect } from 'react';
import EducationHero from '../../../components/Education-Landing/EducationHero';
import EducationAbout from '../../../components/Education-Landing/EducationAbout';
import EducationFeatures from '../../../components/Education-Landing/EducationFeatures';
import EducationCardSection from '../../../components/Education-Landing/EducationCardSection';
import EducationWhyUs from '../../../components/Education-Landing/EducationWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const EducationLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F8FAFC]">
            <EducationHero />
            <EducationAbout />
            <EducationFeatures />
            <EducationCardSection />
            <EducationWhyUs />
            <Testimonial 
                theme="blue"
                bgGradient="from-[#F8FAFC] to-white"
                cardGradient="from-indigo-600 to-teal-500"
            />
            <Industries 
                theme={{
                    bg: "bg-[#F8FAFC]",
                    primary: "text-indigo-600",
                    iconBg: "bg-indigo-100",
                    iconColor: "text-indigo-600",
                }}
            />
            <OurWork 
                theme={{
                    primary: "text-indigo-600",
                    accent: "bg-indigo-600",
                }}
            />
            <ContactUs 
                theme="blue"
                productName="Education"
                bgGradient="from-[#F8FAFC] to-white"
                accentGradient="from-indigo-600 to-teal-500"
                buttonGradient="from-indigo-600 to-teal-500"
                showImage={true}
            />
        </div>
    );
};


export default EducationLanding;
