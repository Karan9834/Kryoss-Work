import React from 'react';
import { ShieldCheck, Palette, Smartphone, Layers } from 'lucide-react';

const NFTAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase mb-4">
                        Reliable NFT Solutions
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Custom <span className="text-violet-600">NFT Marketplace</span> Development for Every Asset
                    </h2>
                    
                    {/* Quote / Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6] italic border-l-4 border-violet-500 pl-6 bg-violet-50 py-4 rounded-r-2xl">
                        "Kryoss Softech provides White Label NFT Marketplace Development Services that cuts your cost significantly and builds highly secure marketplaces."
                    </p>
                    
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        Whether it's artwork, gaming cards, software licenses, digital collectibles, or real-world assets, our developers build robust NFT platforms where any asset can be tokenized.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-violet-50 rounded-3xl border border-violet-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Highly Secure</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Support for multiple blockchains with advanced smart contract security.
                        </p>
                    </div>

                    <div className="p-8 bg-fuchsia-50 rounded-3xl border border-fuchsia-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Palette className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Digital Item Exchange</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Creative ways of exchanging digital items for music, arts, and games.
                        </p>
                    </div>

                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <Smartphone className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Mobile First</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Seamless buying experience across all mobile devices and desktops.
                        </p>
                    </div>

                    <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Layers className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Multi-Blockchain</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Support for Binance, Polygon Matic, Solana, Cardano, and Ethereum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NFTAbout;