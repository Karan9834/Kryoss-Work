import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { categories, products, filterOptions } from './productsData';
import CategoryCard from '../../components/ProductsShowcase/CategoryCard';
import ProductCard from '../../components/ProductsShowcase/ProductCard';
import ProductFilter from '../../components/ProductsShowcase/ProductFilter';
import SearchBar from '../../components/ProductsShowcase/SearchBar';
import SkeletonCard from '../../components/ProductsShowcase/SkeletonCard';
import Pagination from '../../components/ProductsShowcase/Pagination';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

const ProductsShowcase = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // Holds actual typed text before submit
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const resultsRef = useRef(null);
    const isFirstRender = useRef(true);

    // Trigger filtering effect to simulate network/processing
    useEffect(() => {
        setIsLoading(true);
        setCurrentPage(1); // Reset page automatically on filter/search change
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400); // 400ms Fake Loading
        return () => clearTimeout(timer);
    }, [searchQuery, selectedCategory, selectedFilter]);

    // Handle smooth scroll when state updates (search, category, filter, page)
    useEffect(() => {
        // Skip scroll on initial component mount
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // Only scroll if we have the ref and we are NOT in a loading state
        if (resultsRef.current && !isLoading) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentPage, searchQuery, selectedCategory, selectedFilter, isLoading]);

    // Filter products based on search, category, and filter type
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
            const matchesType = selectedFilter === 'All' || product.type === selectedFilter;

            return matchesSearch && matchesCategory && matchesType;
        });
    }, [searchQuery, selectedCategory, selectedFilter]);

    const handleSearchSubmit = () => {
        setSearchQuery(searchTerm);
        setSelectedCategory('all');
        setSelectedFilter('All');
        setCurrentPage(1);
    };

    // Calculate pagination slices
    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredProducts, currentPage]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const activeCategoryObj = useMemo(() => {
        return categories.find(c => c.id === selectedCategory) || null;
    }, [selectedCategory]);

    return (
        <>
            <Helmet>
                <title>Ready-Made Digital Products Showcase | Zryoss</title>
                <meta name="description" content="Explore our catalog of 200+ ready-to-launch digital solutions including Ecommerce platforms, Taxi apps, Delivery systems, and SaaS marketplaces." />
            </Helmet>

            <main className="min-h-screen font-sans bg-[#f6f7f9] pb-20">

                {/* --- Hero Section --- */}
                <section className="relative w-full pt-20 pb-16 px-4 md:px-8 bg-[#ffffff] border-b border-gray-100" style={{ backgroundImage: 'radial-gradient(#eaeaea 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    {/* Background Decorations */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-200/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full pointer-events-none -z-10" />

                    <div className="max-w-7xl mx-auto mb-12 flex flex-col lg:flex-row items-center justify-between gap-12 pt-2">
                        <div className="flex-1 text-center lg:text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-primary font-bold text-sm tracking-wide mb-6 shadow-sm border border-orange-100">
                                200+ Ready-to-Launch Apps
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
                                Explore Our Ready-Made <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                                    Digital Products
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                                Choose from over 200 carefully crafted digital solutions including
                                Ecommerce platforms, Taxi apps, Delivery systems, and On-Demand marketplaces.
                            </p>

                            <div className="max-w-xl mx-auto lg:mx-0 relative z-20">
                                <SearchBar
                                    searchQuery={searchTerm}
                                    setSearchQuery={setSearchTerm}
                                    onSubmit={handleSearchSubmit}
                                />
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-xl lg:max-w-2xl relative z-10 flex justify-center lg:justify-end lg:scale-110 lg:translate-x-4">
                            <img
                                src="/images/product-page/hero-image.png"
                                alt="Zryoss Digital Products"
                                className="relative z-10 w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </section>


                {/* --- Category Navigation Grid --- */}
                <section className="w-full bg-[#f6f7f9] pt-16 pb-12 border-b border-gray-100 relative overflow-hidden">
                    {/* Subtle shapes */}
                    <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Browse by Category</h2>
                                <p className="text-gray-500 text-sm font-medium mt-1">Find the perfect solution for your industry</p>
                            </div>
                            {selectedCategory !== 'all' && (
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setSearchQuery('');
                                        setSearchTerm('');
                                        setCurrentPage(1);
                                    }}
                                    className="text-sm font-bold text-primary hover:text-orange-600 transition-colors flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm"
                                >
                                    View All Categories <ArrowRight size={14} />
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {categories.map((category) => (
                                <CategoryCard
                                    key={category.id}
                                    category={category}
                                    isSelected={selectedCategory === category.id}
                                    onClick={() => {
                                        setSelectedCategory(selectedCategory === category.id ? 'all' : category.id);
                                        setSearchQuery('');
                                        setSearchTerm('');
                                        setCurrentPage(1);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Main Content Area (Filters & Products) --- */}
                <section
                    ref={resultsRef}
                    style={activeCategoryObj ? { backgroundColor: activeCategoryObj.bgTint, transition: 'background-color 0.4s ease' } : { transition: 'background-color 0.4s ease' }}
                    className={`w-full py-16 scroll-mt-20 min-h-[50vh] relative ${!activeCategoryObj ? 'bg-gradient-to-b from-white to-[#f6f7f9]' : ''}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight transition-all duration-300">
                                    {searchQuery ? 'Search Results' : selectedCategory === 'all' ? 'All Solutions' : categories.find(c => c.id === selectedCategory)?.name}
                                </h2>
                                <p className="text-gray-500 font-medium mt-1 flex items-center gap-2 transition-all duration-300">
                                    <span
                                        style={activeCategoryObj ? { backgroundColor: activeCategoryObj.color + '20', color: activeCategoryObj.color } : {}}
                                        className={`py-0.5 px-2 rounded font-bold text-sm ${!activeCategoryObj ? 'bg-orange-50 text-primary' : ''}`}
                                    >
                                        Showing {filteredProducts.length > 0 ? `${(currentPage - 1) * itemsPerPage + 1}–${Math.min(currentPage * itemsPerPage, filteredProducts.length)} of ${filteredProducts.length}` : '0'} Products
                                    </span>
                                    {searchQuery && (
                                        <span>for <span className="text-gray-900 font-bold">"{searchQuery}"</span></span>
                                    )}
                                </p>
                            </div>
                            <ProductFilter
                                options={filterOptions}
                                selectedFilter={selectedFilter}
                                onSelectFilter={(filter) => {
                                    setSelectedFilter(filter);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>

                        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                            {isLoading ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
                                    {[...Array(8)].map((_, i) => (
                                        <SkeletonCard key={i} />
                                    ))}
                                </div>
                            ) : filteredProducts.length === 0 ? (
                                <div className="bg-[#f7f7f7] rounded-3xl p-12 text-center border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[300px] mt-10">
                                    <div className="w-20 h-20 bg-white shadow-sm rounded-full flex items-center justify-center mb-6 border border-gray-200">
                                        <span className="text-3xl">📭</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                                    <p className="text-gray-500 max-w-md mx-auto">
                                        We couldn't find any products matching your current search and filters. Try adjusting your criteria.
                                    </p>
                                    <button
                                        onClick={() => { 
                                            setSearchTerm(''); 
                                            setSearchQuery(''); 
                                            setSelectedFilter('All'); 
                                            setSelectedCategory('all'); 
                                            setCurrentPage(1); 
                                        }}
                                        className="mt-6 px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-colors"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-12 pt-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {paginatedProducts.map(product => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </div>

                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={(page) => {
                                            if (page >= 1 && page <= totalPages) {
                                                setCurrentPage(page);
                                            }
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* --- Final CTA Section --- */}
                <section className="w-full bg-transparent max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
                    <div className="bg-gradient-to-br from-[#fff7f0] to-[#ffedd6] border border-orange-100/60 rounded-[32px] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_8px_32px_rgba(255,107,0,0.06)]">

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="inline-block px-3 py-1 rounded-full bg-white text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-orange-100/50">
                                Custom Development
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                                Didn't find the solution <br className="hidden md:block" /> you're looking for?
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl mx-auto font-medium">
                                Our expert engineering team can build custom software tailored exactly to your unique business requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link to="/company/contact" className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95">
                                    <MessageSquare size={18} />
                                    Request Custom Solution
                                </Link>
                                <Link to="/company/contact" className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all border border-gray-200 shadow-sm active:scale-95">
                                    <Calendar size={18} />
                                    Schedule Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default ProductsShowcase;
