import { Link } from 'react-router-dom';
import React from 'react';

const NFTCardSection = () => {
    const products = [
        {
            title: "Smart NFT",
            desc: "A comprehensive, state-of-the-art NFT Marketplace solution designed for creators and investors to trade digital assets.",
            image: "/Products/SMART.jpg",
            link: "/products/smart-nft"
        },
        {
            title: "Enefti",
            desc: "An industry-leading virtual asset platform that pioneers the future of NFT-based interactive gaming.",
            image: "/Products/ENEFTI.jpg",
            link: "/products/enefti"
        }
    ];

    return (
        <section id="nft-products" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-violet-400"></div>
                        <span className="text-violet-600 font-bold text-sm tracking-wider uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-violet-400"></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
                        Ready-made <span className="text-violet-600">NFT Marketplace</span> Clones
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Industry-leading clones and custom solutions crafted for high performance and security.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <div key={index} className="text-center">
                            {/* CLICKABLE IMAGE */}
                            <Link
                                to={product.link}
                                className="cursor-pointer group block"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full rounded-xl border-[5px] border-transparent hover:border-violet-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-contain"
                                />
                            </Link>

                            {/* TITLE AND DESCRIPTION */}
                            <p className="mt-4 text-sm md:text-base">
                                <Link to={product.link} className="text-violet-600 font-semibold hover:underline">
                                    {product.title}
                                </Link>{" "}
                                <span className="text-gray-700">
                                    - {product.desc}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="text-center mt-16">
                    <p className="text-sm text-gray-400 font-medium">
                        ✦ More NFT solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NFTCardSection;

