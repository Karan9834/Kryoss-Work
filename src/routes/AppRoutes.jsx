import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFound';
import { ProductRoutes } from './ProductRoutes';
import { CompanyRoutes } from './CompanyRoutes';
import { GojekRoutes } from './GojekRoutes';
import Blog from "../pages/Blog";
import Products from "../pages/Products";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                {GojekRoutes}
                {ProductRoutes}
                {CompanyRoutes}
                <Route path="*" element={<NotFound />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
