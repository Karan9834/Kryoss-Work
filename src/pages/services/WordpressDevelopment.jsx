import React from "react";
import { Helmet } from "react-helmet-async";

import WordpressHero from "@/components/services-app/wordpress/WordpressHero";
import WordpressServices from "@/components/services-app/wordpress/WordpressServices";
import WordpressAboutUs from "@/components/services-app/wordpress/WordpressAboutUs";
import WordpressCTA1 from "@/components/services-app/wordpress/WordpressCTA1";
import WordpressBenifits from "@/components/services-app/wordpress/WordpressBenifits";
import WordpressWhyUs from "@/components/services-app/wordpress/WordpressWhyUs";
import WordpressProcess from "@/components/services-app/wordpress/WordpressProcess";
import WordpressTechStack from "@/components/services-app/wordpress/WordpressTechStack";
import WordpressIndustries from "@/components/services-app/wordpress/WordpressIndustries";
import WordpressProductShowCase from "@/components/services-app/wordpress/WordpressProductShowCase";
import WordpressFAQ from "@/components/services-app/wordpress/WordpressFAQ";
import WordpressBlogs from "@/components/services-app/wordpress/WordpressBlogs";
import WordpressGetUpdates from "@/components/services-app/wordpress/WordpressGetUpdates";

const WordpressDevelopment = () => {
    return (
        <>
            <WordpressHero />
            <WordpressServices />
            <WordpressAboutUs />
            <WordpressCTA1 />
            <WordpressBenifits />
            <WordpressWhyUs />
            <WordpressProcess />
            <WordpressTechStack />
            <WordpressIndustries />
            <WordpressProductShowCase />
            <WordpressFAQ />
            <WordpressBlogs />
            <WordpressGetUpdates />

        </>
    );
};

export default WordpressDevelopment;