import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Import modular sections
import UberHero from '@/components/transport-uber/UberHero';
import UberCloneForBusiness from '@/components/transport-uber/UberCloneForBusiness';
import UberServices from '@/components/transport-uber/UberServices';
import UberRiderFeatures from '@/components/transport-uber/UberRiderFeatures';
import UberDriverFeatures from '@/components/transport-uber/UberDriverFeatures';
import UberAIGrowth from '@/components/transport-uber/UberAIGrowth';
import UberlaunchCTA from '@/components/transport-uber/UberlaunchCTA';
import UberAppScreenshots from '@/components/transport-uber/UberAppScreenshots';
import UberAdminPanel from '@/components/transport-uber/UberAdminPanel';
import UberWhatYouGet from '@/components/transport-uber/UberWhatYouGet';
import UberStrategy from '@/components/transport-uber/UberStrategy';
import UberWhyUs from '@/components/transport-uber/UberWhyUs';
import UberCTA2 from '@/components/transport-uber/UberCTA2';
import UberAward from '@/components/transport-uber/UberAward';
import UberIndustries from '@/components/transport-uber/UberIndustries';
import UberFAQ from '@/components/transport-uber/UberFAQ';
import UberTechStack from '@/components/transport-uber/UberTechStack';
import UberContact from '@/components/transport-uber/UberContact';
import UberProductShowCase from '@/components/transport-uber/UberProductShowCase';
import UberBlogs from '@/components/transport-uber/UberBlogs';
import UberGetUpdates from '@/components/transport-uber/UberGetUpdates';



const TaxiBookingUber = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <UberHero />
            <UberCloneForBusiness />
            <UberServices />
            <UberRiderFeatures />
            <UberDriverFeatures />
            <UberAIGrowth />
            <UberlaunchCTA />
            <UberAppScreenshots />
            <UberAdminPanel />
            <UberWhatYouGet />
            <UberStrategy />
            <UberWhyUs />
            <UberCTA2 />
            <UberAward />
            <UberIndustries />
            <UberFAQ />
            <UberTechStack />
            <UberContact />
            <UberProductShowCase />
            <UberBlogs />
            <UberGetUpdates />
        </>







    );
};

export default TaxiBookingUber;
