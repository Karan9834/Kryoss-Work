import React from 'react';
import { Helmet } from 'react-helmet-async';

const CarRentalApp = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>Car Rental App | KryossWork</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Car Rental App</h1>
            <p className="text-gray-600">Placeholder for Car Rental App solution.</p>
        </div>
    );
};

export default CarRentalApp;
