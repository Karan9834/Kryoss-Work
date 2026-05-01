import React from 'react';
import { Helmet } from 'react-helmet-async';

import BikeHero from '@/components/transport-bikeride/Bikehero';
import BikeAboutApp from '@/components/transport-bikeride/BikeAboutApp';
import BikePlatform from '@/components/transport-bikeride/BikePlatform';
import BikeCTA1 from '@/components/transport-bikeride/BikeCTA1';
import BikeAppPreview from '@/components/transport-bikeride/BikeAppPreview';
import BikeFeatures from '@/components/transport-bikeride/BikeFeatures';
import BikeAdminPanel from '@/components/transport-bikeride/BikeAdminPanel';
import BikeCTA2 from '@/components/transport-bikeride/BikeCTA2';
import BikeHowitworks from '@/components/transport-bikeride/BikeHowitworks';
import BikeWhatSpecial from '@/components/transport-bikeride/BikeWhatSpecial';
import BikeDigitalFootprints from '@/components/transport-bikeride/BikeDigitalFootprints';
import BikeWhyUs from '@/components/transport-bikeride/BikeWhyUs';
import BikeCTA3 from '@/components/transport-bikeride/BikeCTA3';
// import BikeClientFeedback from '@/components/transport-bikeride/BikeClientFeedback';
import BikeFAQ from '@/components/transport-bikeride/BikeFAQ';
import BikeTechStack from '@/components/transport-bikeride/BikeTechStack';
import BikeAwards from '@/components/transport-bikeride/BikeAwards';
import BikeContact from '@/components/transport-bikeride/BikeContact';
import BikeProductShowCase from '@/components/transport-bikeride/BikeProductShowCase';
import BikeBlogs from '@/components/transport-bikeride/BikeBlogs';
import BikeGetUpdates from '@/components/transport-bikeride/BikeGetUpdates';

const BikeRidingApp = () => {
    return (

        <>
            <BikeHero />
            <BikeAboutApp />
            <BikePlatform />
            <BikeCTA1 />
            <BikeAppPreview />
            <BikeFeatures />
            <BikeAdminPanel />
            <BikeCTA2 />
            <BikeHowitworks />
            <BikeWhatSpecial />
            <BikeDigitalFootprints />
            <BikeWhyUs />
            <BikeCTA3 />
            {/* <BikeClientFeedback /> */}
            <BikeFAQ />
            <BikeTechStack />
            <BikeAwards />
            <BikeContact />
            <BikeProductShowCase />
            <BikeBlogs />
            <BikeGetUpdates />

        </>

    );
};

export default BikeRidingApp;
