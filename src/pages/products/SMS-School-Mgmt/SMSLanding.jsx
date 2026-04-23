import React, { useEffect } from 'react';
import SMSHero from '../../../components/SMS-School-Mgmt/SMSHero';
import SMSAbout from '../../../components/SMS-School-Mgmt/SMSAbout';
import SMSFeatures from '../../../components/SMS-School-Mgmt/SMSFeatures';
import SMSCardSection from '../../../components/SMS-School-Mgmt/SMSCardSection';
import SMSWhyUs from '../../../components/SMS-School-Mgmt/SMSWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const SMSLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const schoolTheme = {
        bg: "bg-blue-50/50",
        primary: "text-blue-600",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        accent: "bg-blue-600",
    };

    return (
        <div className="bg-white">
            <SMSHero />
            <SMSAbout />
            <SMSFeatures />
            <SMSCardSection />
            <SMSWhyUs />
            
            {/* Common Sections with SMS Theme */}
            <Testimonial theme="blue" />
            <Industries theme={schoolTheme} />
            <OurWork theme={schoolTheme} />
            <PopularBlogs/>
            <ContactUs />
            <TeamMoments/>

        </div>
    );
};

export default SMSLanding;
