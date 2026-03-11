import React from 'react';
import { Helmet } from 'react-helmet-async';
import AndroidHero from '@/components/Services-app/android-app/AndroidHero';
import AndroidWhatWeOffer from '@/components/Services-app/android-app/AndroidWhatWeOffer';
import AndroidProcess from '@/components/Services-app/android-app/AndroidProcess';
import AndroidWhyItWork from '@/components/Services-app/android-app/AndroidWhyItWork';
import AndroidTechnologyStack from '@/components/Services-app/android-app/AndroidTechnologyStack';
import AndroidCTA1 from '@/components/Services-app/android-app/AndroidCTA1';
import AndroidFAQ from '@/components/Services-app/android-app/AndroidFAQ';
import AndroidWhyUs from '@/components/Services-app/android-app/AndroidWhyUs';
import AndroidIndustries from '@/components/Services-app/android-app/AndroidIndustries';
import AndroidCTA2 from '@/components/Services-app/android-app/AndroidCTA2';
import AndroidContact from '@/components/Services-app/android-app/AndroidContact';
import AndroidBlogs from '@/components/Services-app/android-app/AndroidBlogs';
import AndroidGetUpdates from '@/components/Services-app/android-app/AndroidGetUpdates';



const AndroidAppDevelopment = () => {
    return (
        <>
            <AndroidHero />
            <AndroidWhatWeOffer />
            <AndroidProcess />
            <AndroidWhyItWork />
            <AndroidTechnologyStack />
            <AndroidCTA1 />
            <AndroidFAQ />
            <AndroidWhyUs />
            <AndroidIndustries />
            <AndroidCTA2 />
            <AndroidContact />
            <AndroidBlogs />
            <AndroidGetUpdates />
        </>
    );
};
export default AndroidAppDevelopment;