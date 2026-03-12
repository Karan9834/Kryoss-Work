import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './productsData';
import { ArrowLeft, CheckCircle2, MonitorSmartphone, Code2, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ProductDetailsPlaceholder = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#fafafc] pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">The product you are looking for does not exist or has been removed.</p>
                <Link to="/products" className="px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center gap-2 hover:bg-orange-600 transition-colors">
                    <ArrowLeft size={16} /> Back to Products
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{product.name} | Zryoss Solutions</title>
            </Helmet>
            <main className="min-h-screen bg-[#fafafc] pt-28 pb-20 overflow-hidden font-sans">
                {/* Back Link */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                        <ArrowLeft size={16} /> Back to all products
                    </Link>
                </div>

                {/* Hero Product View */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 w-full relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 relative group">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {product.badges && product.badges.map((badge, idx) => (
                                    <span key={idx} className={`absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-lg ${badge === 'Best Seller' ? 'bg-primary text-white shadow-orange-500/20' : 'bg-gray-900 text-white'
                                        }`}>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 w-full flex flex-col">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
                                <Code2 size={16} /> {product.type}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                {product.description}. This is a detail page template for demonstration purposes.
                                In a real production system, this page would contain extensive information about screenshots, tech stack, and detailed feature lists.
                            </p>

                            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MonitorSmartphone size={18} className="text-primary" /> Core Features Included
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                    {product.features?.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                            {f}
                                        </li>
                                    ))}
                                    <li className="flex items-start gap-2 text-sm font-medium text-gray-700">
                                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                        Advanced Analytics Panel
                                    </li>
                                    <li className="flex items-start gap-2 text-sm font-medium text-gray-700">
                                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                        Payment Gateway Integration
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-95 text-[15px]">
                                    Get This Product
                                </button>
                                <button className="flex-1 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-gray-900 transition-all active:scale-95 text-[15px]">
                                    <Globe size={18} /> Request Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductDetailsPlaceholder;
