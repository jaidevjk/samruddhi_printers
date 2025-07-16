import React from 'react';
import paperLogo from '../assets/images/logo-client1.jpg';
import inkLogo from '../assets/images/logo-client2.jpg';
import techLogo from '../assets/images/logo-client3.jpg';

export default function Partners() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Our Partners</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
                    <img src={paperLogo} alt="ABC Paper Mills" className="w-24 h-24 object-contain rounded-full mb-4 border-2 border-[#F57C00]" />
                    <h4 className="font-semibold text-[#F57C00] mb-2">ABC Paper Mills</h4>
                    <p className="text-gray-700">Premium paper supplier</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
                    <img src={inkLogo} alt="XYZ Inks" className="w-24 h-24 object-contain rounded-full mb-4 border-2 border-[#F57C00]" />
                    <h4 className="font-semibold text-[#F57C00] mb-2">XYZ Inks</h4>
                    <p className="text-gray-700">Eco-friendly ink partner</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
                    <img src={techLogo} alt="PrintTech Solutions" className="w-24 h-24 object-contain rounded-full mb-4 border-2 border-[#F57C00]" />
                    <h4 className="font-semibold text-[#F57C00] mb-2">PrintTech Solutions</h4>
                    <p className="text-gray-700">Technology provider</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="mb-4 text-lg">Interested in partnering with us?</p>
                <a href="/contact" className="inline-block bg-[#F57C00] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-orange-700 transition">Become a Partner</a>
            </div>
        </main>
    );
} 