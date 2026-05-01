import React from "react";
import { Helmet } from "react-helmet-async";
import LaravelHero from "@/components/services-app/laravel/LaravelHero";
import LaravelWhatWeBuild from "@/components/services-app/laravel/LaravelWhatWeBuild";
import LaravelWhyItMatters from "@/components/services-app/laravel/LaravelWhyItMatters";
import LaravelCTA1 from "@/components/services-app/laravel/LaravelCTA1";
import LaravelWhyUs from "@/components/services-app/laravel/LaravelWhyUs";
import LaravelEdge from "@/components/services-app/laravel/LaravelEdge";
import LaravelProcess from "@/components/services-app/laravel/LaravelProcess";
import LaravelTechnology from "@/components/services-app/laravel/LaravelTechnology";
import LaravelIndsutries from "@/components/services-app/laravel/LaravelIndsutries";
import LaravelProductShowCase from "@/components/services-app/laravel/LaravelProductShowCase";
import LaravelFAQ from "@/components/services-app/laravel/LaravelFAQ";
import LaravelBlogs from "@/components/services-app/laravel/LaravelBlogs";
import LaravelGetUpdates from "@/components/services-app/laravel/LaravelGetUpdates";



const LaravelDevelopment = () => {
    return (
        <>
            <LaravelHero />
            <LaravelWhatWeBuild />
            <LaravelWhyItMatters />
            <LaravelCTA1 />
            <LaravelWhyUs />
            <LaravelEdge />
            <LaravelProcess />
            <LaravelTechnology />
            <LaravelIndsutries />
            <LaravelProductShowCase />
            <LaravelFAQ />
            <LaravelBlogs />
            <LaravelGetUpdates />
        </>
    );
};
export default LaravelDevelopment;