import React from "react";
import { Helmet } from "react-helmet-async";
import EcommerceHero from "@/components/services-app/ecommerce/EcommerceHero";
import EcommerceExpertise from "@/components/services-app/ecommerce/EcommerceExpertise";
import EcommerceProcess from "@/components/services-app/ecommerce/EcommerceProcess";
import EcommerceBenifits from "@/components/services-app/ecommerce/EcommerceBenifits";
import EcommerceTechnology from "@/components/services-app/ecommerce/EcommerceTechnology";
import EcommerceCTA1 from "@/components/services-app/ecommerce/EcommerceCTA1";
import EcommerceFAQ from "@/components/services-app/ecommerce/EcommerceFAQ";
import EcommerceWhyUs from "@/components/services-app/ecommerce/EcommerceWhyUs";
import EcommerceIndustries from "@/components/services-app/ecommerce/EcommerceIndustries";
import EcommerceCTA2 from "@/components/services-app/ecommerce/EcommerceCTA2";
import EcommerceContact from "@/components/services-app/ecommerce/EcommerceContact";
import EcommerceBlogs from "@/components/services-app/ecommerce/EcommerceBlogs";
import EcommerceGetUpdates from "@/components/services-app/ecommerce/EcommerceGetUpdates";
const EcommerceDevelopment = () => {
    return (
        <>
            <EcommerceHero />
            <EcommerceExpertise />
            <EcommerceProcess />
            <EcommerceBenifits />
            <EcommerceTechnology />
            <EcommerceCTA1 />
            <EcommerceFAQ />
            <EcommerceWhyUs />
            <EcommerceIndustries />
            <EcommerceCTA2 />
            <EcommerceContact />
            <EcommerceBlogs />
            <EcommerceGetUpdates />
        </>
    );
};
export default EcommerceDevelopment;
