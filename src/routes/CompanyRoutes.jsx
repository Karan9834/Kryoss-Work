import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../pages/company/About';
import ContactPage from '../pages/company/Contact';
import HealthcareSolution from '../pages/solutions/Healthcare';

export const CompanyRoutes = [
    <Route key="company-about" path="company/about" element={<AboutPage />} />,
    <Route key="company-contact" path="company/contact" element={<ContactPage />} />,
    <Route key="solutions-healthcare" path="solutions/healthcare" element={<HealthcareSolution />} />,
    // Add other company/solution routes here
];
