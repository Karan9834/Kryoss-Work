import React from 'react'
import { Helmet } from 'react-helmet-async';
import SnowHero from '@/components/homeservice-snowremoval/SnowHero';
import SnowAbout from '@/components/homeservice-snowremoval/SnowAbout';
import SnowHowItWorks from '@/components/homeservice-snowremoval/SnowHowItWorks';
import SnowPlowApp from '@/components/homeservice-snowremoval/SnowPlowApp';
import SnowCTA1 from '@/components/homeservice-snowremoval/SnowCTA1';
import SnowFeatures from '@/components/homeservice-snowremoval/SnowFeatures';
import SnowAdminPanel from '@/components/homeservice-snowremoval/SnowAdminPanel';
import SnowCTA2 from '@/components/homeservice-snowremoval/SnowCTA2';
import SnowWhatWeProvide from '@/components/homeservice-snowremoval/SnowWhatWeProvide';
import SnowDevelopment from '@/components/homeservice-snowremoval/SnowDevelopment';
import SnowDigitalFootprints from '@/components/homeservice-snowremoval/SnowDigitalFootprints';
import SnowWhyUs from '@/components/homeservice-snowremoval/SnowWhyUs';
import SnowBusinessWeSupport from '@/components/homeservice-snowremoval/SnowBusinessWeSupport';
import SnowProductShowCase from '@/components/homeservice-snowremoval/SnowProductShowCase';
import SnowAwards from '@/components/homeservice-snowremoval/SnowAwards';
import SnowFAQ from '@/components/homeservice-snowremoval/SnowFAQ';
import SnowTechStack from '@/components/homeservice-snowremoval/SnowTechStack';
import ContactUs from '../../../components/Common/ContactUs';
import SnowBlogs from '@/components/homeservice-snowremoval/SnowBlogs';
import SnowGetUpdates from '@/components/homeservice-snowremoval/SnowGetUpdates';
const SnowRemoval = () => {
    return (
        <>
            <SnowHero />
            <SnowAbout />
            <SnowHowItWorks />
            <SnowPlowApp />
            <SnowCTA1 />
            <SnowFeatures />
            <SnowAdminPanel />
            <SnowCTA2 />
            <SnowWhatWeProvide />
            <SnowDevelopment />
            <SnowDigitalFootprints />
            <SnowWhyUs />
            <SnowBusinessWeSupport />
            <SnowProductShowCase />
            <SnowAwards />
            <SnowFAQ />
            <SnowTechStack />
            <ContactUs
                theme="purple"
                productName="Snow Removal"
                bgGradient="from-purple-50 via-white to-pink-50"
                accentGradient="from-purple-500 via-pink-500 to-indigo-500"
                buttonGradient="from-purple-600 via-pink-600 to-indigo-600"
                showImage={true}
            />
            <SnowBlogs />
            <SnowGetUpdates />
        </>
    );
};

export default SnowRemoval;