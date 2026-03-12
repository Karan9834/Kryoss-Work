import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFound';
import { ProductRoutes } from './ProductRoutes';
import { CompanyRoutes } from './CompanyRoutes';
import { GojekRoutes } from './GojekRoutes';
import { ServiceRoutes } from './ServiceRoutes';
import Blog from "../pages/Blog";
import Products from "../pages/Products";
import ServicesPage from '../components/home/ServicePage';
import HireDevelopersPage from '../components/home/HireDevelopersPage';
import BusinessGrowthPage from '../components/home/BusinessGrowthPage';
// import ServicesPage from "../pages/ServicesPage";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                {GojekRoutes}
                {ProductRoutes}
                {CompanyRoutes}
                {ServiceRoutes}
                <Route path="*" element={<NotFound />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/products" element={<Products />} />
                 <Route path="/services" element={<ServicesPage />} />
                 <Route path="/business-growth" element={<BusinessGrowthPage />} />
                

<Route path="/hire-developers" element={<HireDevelopersPage />} />

            </Route>
        </Routes>
    );
};

export default AppRoutes;
