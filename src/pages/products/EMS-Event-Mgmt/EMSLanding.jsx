import React, { useEffect } from 'react';
import EMSHero from '../../../components/EMS-Event-Mgmt/EMSHero';
import EMSAbout from '../../../components/EMS-Event-Mgmt/EMSAbout';
import EMSFeatures from '../../../components/EMS-Event-Mgmt/EMSFeatures';
import EMSCardSection from '../../../components/EMS-Event-Mgmt/EMSCardSection';
import EMSWhyUs from '../../../components/EMS-Event-Mgmt/EMSWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const EMSLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <EMSHero />
            <EMSAbout />
            <EMSFeatures />
            <EMSCardSection />
            <EMSWhyUs />
            
            {/* Common Sections */}
            <Testimonial />
            <Industries />
            <OurWork />
            <PopularBlogs/>
            <ContactUs />
            <TeamMoments/>
        </div>
    );
};

export default EMSLanding;
