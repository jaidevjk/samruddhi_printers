import React from 'react';
import press1 from '../assets/images/service-businesscard.jpg';
import press2 from '../assets/images/service-poster.jpg';
import press3 from '../assets/images/service-custom-design.webp';

export default function Press() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Press & Media</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
                    <img src={press1} alt="PrintWeek India" className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-[#F57C00]" />
                    <h4 className="font-semibold text-[#F57C00] mb-2">PrintWeek India (2023)</h4>
                    <p className="text-gray-700">Samruddhi Printers featured for innovation and quality.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
                    <img src={press2} alt="Bengaluru Business Awards" className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-[#F57C00]" />
                    <h4 className="font-semibold text-[#F57C00] mb-2">Bengaluru Business Awards (2022)</h4>
                    <p className="text-gray-700">Awarded Best Local Printer for outstanding service.</p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
                    <img src={press3} alt="The Print Journal" className="w-20 h-20 object-cover rounded-full mb-4 border-2 border-[#F57C00]" />
                    <h4 className="font-semibold text-[#F57C00] mb-2">The Print Journal (2021)</h4>
                    <p className="text-gray-700">Interview with our MD on the future of printing.</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="mb-4 text-lg">For media inquiries or press releases, please contact us.</p>
                <a href="/contact" className="inline-block bg-[#F57C00] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-orange-700 transition">Contact Us</a>
            </div>
        </main>
    );
} 