import React from 'react';

export default function Pricing() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Pricing</h2>
            <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#F57C00] text-white">
                    <tr>
                        <th className="py-2 px-4">Service</th>
                        <th className="py-2 px-4">Starting Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="py-2 px-4">Business Cards</td>
                        <td className="py-2 px-4">₹200 per 100</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4">Flyers & Brochures</td>
                        <td className="py-2 px-4">₹500 per 100</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4">Posters & Banners</td>
                        <td className="py-2 px-4">₹150 per sq.ft</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4">Custom Design</td>
                        <td className="py-2 px-4">From ₹300</td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-6 text-gray-600">For a detailed quote, please <a href="/contact" className="text-blue-600 underline">contact us</a>.</p>
        </main>
    );
} 