import React from 'react';
import { Helmet } from 'react-helmet-async';

const HotelBookingApp = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>Hotel Booking App | KryossWork</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Hotel Booking App</h1>
            <p className="text-gray-600">Placeholder for Hotel Booking App solution.</p>
        </div>
    );
};

export default HotelBookingApp;
