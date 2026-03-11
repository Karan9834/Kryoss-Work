import React from 'react';
import { Helmet } from 'react-helmet-async';
import KotlinHero from '@/components/Services-app/kotlin-app/KotlinHero';
import KotlinSolutions from '@/components/Services-app/kotlin-app/KotlinSolutions';
import KotlinWorkflow from '@/components/Services-app/kotlin-app/KotlinWorkflow';
import KotlinStrategicAdvantages from '@/components/Services-app/kotlin-app/KotlinStrategicAdvantages';
import KotlinModernTechnology from '@/components/Services-app/kotlin-app/KotlinModernTechnology';
import KotlinCTA1 from '@/components/Services-app/kotlin-app/KotlinCTA1';
import KotlinFAQ from '@/components/Services-app/kotlin-app/KotlinFAQ';
import KotlinWhatMakeUsBest from '@/components/Services-app/kotlin-app/KotlinWhatMakeUsBest';
import KotlinIndustries from '@/components/Services-app/kotlin-app/KotlinIndustries';
import KotlinCTA2 from '@/components/Services-app/kotlin-app/KotlinCTA2';
import KotlinContact from '@/components/Services-app/kotlin-app/KotlinContact';
import KotlinBlogs from '@/components/Services-app/kotlin-app/KotlinBlogs';
import KotlinGetUpdates from '@/components/Services-app/kotlin-app/KotlinGetUpdates';
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