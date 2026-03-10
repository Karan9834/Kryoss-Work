import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
            <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-lg shadow-orange-500/5 transition-all outline-none"
                placeholder="Search 200+ ready-made solutions (e.g., 'Taxi', 'Ecommerce')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20 active:scale-95">
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
