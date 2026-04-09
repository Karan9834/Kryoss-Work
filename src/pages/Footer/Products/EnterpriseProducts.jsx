import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnterpriseProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 py-20 mt-16">
      <div className="text-center p-8 bg-white rounded-3xl shadow-xl max-w-2xl mx-4 transform transition-all hover:-translate-y-2 duration-300 border border-orange-100">
        <div className="text-orange-500 mb-6 flex justify-center">
          <svg className="w-24 h-24 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-sm">Stay Tuned!</h1>
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Enterprise Products Page is Coming Soon</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We're brewing something awesome for this section. Check back soon for exciting updates and extensive product catalogs!
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EnterpriseProducts;
