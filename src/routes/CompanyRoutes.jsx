import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const AboutPage = lazy(() => import('../pages/company/About'));
const ContactPage = lazy(() => import('../pages/company/Contact'));
const TestimonialPage = lazy(() => import('../pages/company/Testimonial'));
const LifeAtkryossonePage = lazy(() => import('../pages/company/LifeArkryossone'));
// const TeamPage = lazy(() => import('../pages/company/Team'));
const PoliciesPage = lazy(() => import('../pages/company/Policies'));
const SiteMapPage = lazy(() => import('../pages/company/SiteMap'));
const CareerPage = lazy(() => import('../pages/company/Careers'));

export const CompanyRoutes = () => (
    <>
        <Route key="company-about" path="company/about" element={<AboutPage />} />
        <Route key="company-contact" path="company/contact" element={<ContactPage />} />
        <Route key="company-testimonial" path="company/testimonials" element={<TestimonialPage />} />
        <Route key="company-life" path="company/life-at-kryossone" element={<LifeAtkryossonePage />} />
        {/* <Route key="company-team" path="company/team" element={<TeamPage />} /> */}
        {/* <Route key="company-sitemap" path="company/sitemap" element={<SiteMapPage />} /> */}
        <Route key="company-policies" path="company/policies" element={<PoliciesPage />} />
        <Route key="company-career" path="company/careers" element={<CareerPage />} />
    </>
);
