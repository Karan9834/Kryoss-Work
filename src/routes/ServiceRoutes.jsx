import React from "react";
import { Route } from "react-router-dom";

import KotlinAppDevelopment from "../pages/services/KotlinAppDevelopment";
import FlutterAppDevelopment from "../pages/services/FlutterAppDevelopment";
import IosAppDevelopment from "../pages/services/IosAppDevelopment";
import MvpAppDevelopment from "../pages/services/MvpAppDevelopment";
import AndroidAppDevelopment from "../pages/services/AndroidAppDevelopment";

export const ServiceRoutes = [
    <Route key="kotlin-app" path="services/kotlin-app-development" element={<KotlinAppDevelopment />} />,
    <Route key="flutter-app" path="services/flutter-app-development" element={<FlutterAppDevelopment />} />,
    <Route key="ios-app" path="services/ios-app-development" element={<IosAppDevelopment />} />,
    <Route key="mvp-app" path="services/mvp-app-development" element={<MvpAppDevelopment />} />,
    <Route key="android-app" path="services/android-app-development" element={<AndroidAppDevelopment />} />




];