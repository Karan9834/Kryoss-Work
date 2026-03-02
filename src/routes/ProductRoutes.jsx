import React from 'react';
import { Route } from 'react-router-dom';
import TaxiBookingUber from '../pages/products/transport-app-solutions/TaxiBookingUber';
import TaxiBiddingApp from '../pages/products/transport-app-solutions/TaxiBiddingApp';
import FoodDeliveryApp from '../pages/products/delivery-app-solutions/FoodDeliveryApp';
import CarRental from "../pages/products/transport-app-solutions/CarRental"

export const ProductRoutes = [
    <Route key="taxi-uber" path="products/transport/uber-clone" element={<TaxiBookingUber />} />,
    <Route key="taxi-bidding" path="products/transport/indrive-clone" element={<TaxiBiddingApp />} />,
    <Route key="food-delivery" path="products/delivery/food-delivery" element={<FoodDeliveryApp />} />,
    <Route key="car-rental" path="/products/transport/car-rental" element={<CarRental/>}/>,
    // Add other product routes here
];
