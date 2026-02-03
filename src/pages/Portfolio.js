import React from 'react';
import brochureImg from '../assets/images/service-businesscard.jpg';
import bannerImg from '../assets/images/service-poster.jpg';
import packagingImg from '../assets/images/service-custom-design.webp';

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Our Portfolio</h2>
            <p className="mb-8 text-lg text-center">Explore some of our best print projects and case studies.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
                    <img src={brochureImg} alt="Corporate Brochure" className="w-full h-40 object-cover rounded mb-4" />
                    <h4 className="font-semibold text-[#F57C00] mb-2 text-center">Corporate Brochure</h4>
                    <p className="text-gray-700 text-center">A vibrant, multi-page brochure for a leading tech company.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
                    <img src={bannerImg} alt="Event Banner" className="w-full h-40 object-cover rounded mb-4" />
                    <h4 className="font-semibold text-[#F57C00] mb-2 text-center">Event Banner</h4>
                    <p className="text-gray-700 text-center">Large-format banner for a national conference.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
                    <img src={packagingImg} alt="Custom Packaging" className="w-full h-40 object-cover rounded mb-4" />
                    <h4 className="font-semibold text-[#F57C00] mb-2 text-center">Custom Packaging</h4>
                    <p className="text-gray-700 text-center">Eco-friendly packaging for a boutique brand.</p>
                </div>
            </div>
            <div className="mt-12 text-center">
                <a href="/contact" className="inline-block bg-[#F57C00] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-orange-700 transition">Start Your Project With Us</a>
            </div>
        </main>
    );
} 