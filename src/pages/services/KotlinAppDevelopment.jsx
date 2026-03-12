import React from 'react';
import { Helmet } from 'react-helmet-async';
import KotlinHero from '@/components/services-app/kotlin-app/KotlinHero';
import KotlinSolutions from '@/components/services-app/kotlin-app/KotlinSolutions';
import KotlinWorkflow from '@/components/services-app/kotlin-app/KotlinWorkflow';
import KotlinStrategicAdvantages from '@/components/services-app/kotlin-app/KotlinStrategicAdvantages';
import KotlinModernTechnology from '@/components/services-app/kotlin-app/KotlinModernTechnology';
import KotlinCTA1 from '@/components/services-app/kotlin-app/KotlinCTA1';
import KotlinFAQ from '@/components/services-app/kotlin-app/KotlinFAQ';
import KotlinWhatMakeUsBest from '@/components/services-app/kotlin-app/KotlinWhatMakeUsBest';
import KotlinIndustries from '@/components/services-app/kotlin-app/KotlinIndustries';
import KotlinCTA2 from '@/components/services-app/kotlin-app/KotlinCTA2';
import KotlinContact from '@/components/services-app/kotlin-app/KotlinContact';
import KotlinBlogs from '@/components/services-app/kotlin-app/KotlinBlogs';
import KotlinGetUpdates from '@/components/services-app/kotlin-app/KotlinGetUpdates';
const KotlinAppDevelopment = () => {
    return (
        <>
            <KotlinHero />
            <KotlinSolutions />
            <KotlinWorkflow />
            <KotlinStrategicAdvantages />
            <KotlinModernTechnology />
            <KotlinCTA1 />
            <KotlinFAQ />
            <KotlinWhatMakeUsBest />
            <KotlinIndustries />
            <KotlinCTA2 />
            <KotlinContact />
            <KotlinBlogs />
            <KotlinGetUpdates />
        </>
    );
};

export default KotlinAppDevelopment;