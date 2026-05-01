import React, { lazy } from "react";
import { Route } from "react-router-dom";

const KotlinAppDevelopment = lazy(() => import("../pages/services/KotlinAppDevelopment"));
const FlutterAppDevelopment = lazy(() => import("../pages/services/FlutterAppDevelopment"));
const IosAppDevelopment = lazy(() => import("../pages/services/IosAppDevelopment"));
const MvpAppDevelopment = lazy(() => import("../pages/services/MvpAppDevelopment"));
const AndroidAppDevelopment = lazy(() => import("../pages/services/AndroidAppDevelopment"));
const EcommerceDevelopment = lazy(() => import("../pages/services/EcommerceDevelopment"));
const LaravelDevelopment = lazy(() => import("../pages/services/LaravelDevelopment"));
const WordpressDevelopment = lazy(() => import("../pages/services/WordpressDevelopment"));

export const ServiceRoutes = () => (
    <>
        <Route key="kotlin-app" path="services/kotlin-app-development" element={<KotlinAppDevelopment />} />
        <Route key="flutter-app" path="services/flutter-app-development" element={<FlutterAppDevelopment />} />
        <Route key="ios-app" path="services/ios-app-development" element={<IosAppDevelopment />} />
        <Route key="mvp-app" path="services/mvp-app-development" element={<MvpAppDevelopment />} />
        <Route key="android-app" path="services/android-app-development" element={<AndroidAppDevelopment />} />
        <Route key="ecommerce-development" path="services/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route key="laravel-development" path="services/laravel-development" element={<LaravelDevelopment />} />
        <Route key="wordpress-development" path="services/wordpress-development" element={<WordpressDevelopment />} />
    </>
);