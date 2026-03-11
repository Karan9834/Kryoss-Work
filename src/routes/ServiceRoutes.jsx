import React from "react";
import { Route } from "react-router-dom";

import KotlinAppDevelopment from "../pages/services/KotlinAppDevelopment";
export const ServiceRoutes = [
    <Route key="kotlin-app" path="services/kotlin-app-development" element={<KotlinAppDevelopment />} />

];