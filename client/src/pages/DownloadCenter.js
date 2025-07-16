import React from 'react';

export default function DownloadCenter() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Download Center</h2>
            <p className="mb-6 text-lg">Download our templates, catalogs, and design guidelines to get started on your next print project.</p>
            <ul className="list-disc pl-6 space-y-2">
                <li><a href="#" className="text-blue-600 underline">Business Card Template (PDF)</a></li>
                <li><a href="#" className="text-blue-600 underline">Brochure Template (AI)</a></li>
                <li><a href="#" className="text-blue-600 underline">Product Catalog (PDF)</a></li>
            </ul>
        </main>
    );
} 