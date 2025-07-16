import React from 'react';

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Our Portfolio</h2>
            <p className="mb-8 text-lg text-center">Explore some of our best print projects and case studies.</p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg shadow p-4">
                    <h4 className="font-semibold text-[#F57C00] mb-2">Corporate Brochure</h4>
                    <p className="text-gray-700">A vibrant, multi-page brochure for a leading tech company.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow p-4">
                    <h4 className="font-semibold text-[#F57C00] mb-2">Event Banner</h4>
                    <p className="text-gray-700">Large-format banner for a national conference.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow p-4">
                    <h4 className="font-semibold text-[#F57C00] mb-2">Custom Packaging</h4>
                    <p className="text-gray-700">Eco-friendly packaging for a boutique brand.</p>
                </div>
            </div>
        </main>
    );
} 