import React from 'react';
import mdImage from '../assets/images/md-kiran-kumar.jpg';

export default function Team() {
    return (
        <main className="min-h-screen bg-white py-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#143E61] text-center">Meet Our Team</h2>
            <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-col items-center">
                    <img src={mdImage} alt="Kiran Kumar" className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-[#F57C00]" />
                    <h4 className="font-semibold text-lg">Kiran Kumar</h4>
                    <p className="text-gray-600">Managing Director</p>
                </div>
                {/* Add more team members here */}
            </div>
        </main>
    );
} 